pragma solidity ^0.4.23;

import "./EnsRegistry.sol";
import "./EnsResolver.sol";
import "../zeppelin/ownership/Ownable.sol";

// ---------------------------------------------------------------------------------------------------
// EnsSubdomainFactory - allows creating and configuring custom ENS subdomains with one contract call.
//
// @author Radek Ostrowski / https://startonchain.com - MIT Licence.
// Source: https://github.com/radek1st/ens-subdomain-factory
// ---------------------------------------------------------------------------------------------------

/**
 * @title EnsSubdomainFactory
 * @dev Allows to create and configure a subdomain for Ethereum ENS in one call.
 * After deploying this contract, change the owner of the domain you want to use
 * to this deployed contract address. For example, transfer the ownership of "startonchain.eth"
 * so anyone can create subdomains like "radek.startonchain.eth".
 */
contract EnsSubdomainFactory is Ownable{
	EnsRegistry public registry;
	EnsResolver public resolver;
	bool public locked;
	bytes32 ethNamehash = 0x7cb6c9ce54d6fba5d4f3008113677a8dbd765729ceed52dda637e002895280df;

	event SubdomainCreated(address target, address indexed creator, address indexed owner, string subdomain, string domain);
	event OwnershipTransferred(address indexed previousOwner, address indexed newOwner);
	event RegistryUpdated(address indexed previousRegistry, address indexed newRegistry);
	event ResolverUpdated(address indexed previousResolver, address indexed newResolver);
	event DomainTransfersLocked();

	constructor(EnsRegistry _registry, EnsResolver _resolver) public {
		registry = _registry;
		resolver = _resolver;
		locked = false;
	}

	/**
	 * @dev Allows to create a subdomain (e.g. "radek.startonchain.eth"), 
	 * set its resolver and set its target address
	 * @param _subdomain - sub domain name only e.g. "radek"
	 * @param _domain - parent domain name e.g. "startonchain"
	 * @param _owner - address that will become owner of this new subdomain
	 * @param _target - address that this new domain will resolve to
	 */
	function newSubdomain(string _subdomain, string _domain, address _owner, address _target) public {
		//create namehash for the domain
		bytes32 domainNamehash = keccak256(abi.encodePacked(ethNamehash, keccak256(abi.encodePacked(_domain))));
		//make sure this contract owns the domain
		require(registry.owner(domainNamehash) == address(this), "this contract should own the domain");
		//create labelhash for the sub domain
		bytes32 subdomainLabelhash = keccak256(abi.encodePacked(_subdomain));
		//create namehash for the sub domain
		bytes32 subdomainNamehash = keccak256(abi.encodePacked(domainNamehash, subdomainLabelhash));
		//make sure it is free or owned by the sender
		require(registry.owner(subdomainNamehash) == address(0) ||
			registry.owner(subdomainNamehash) == msg.sender, "sub domain already owned");
		//create new subdomain, temporarily this smartcontract is the owner
		registry.setSubnodeOwner(domainNamehash, subdomainLabelhash, address(this));
		//set public resolver for this domain
		registry.setResolver(subdomainNamehash, resolver);
		//set the destination address
		resolver.setAddr(subdomainNamehash, _target);
		//change the ownership back to requested owner
		registry.setOwner(subdomainNamehash, _owner);
		
		emit SubdomainCreated(_target, msg.sender, _owner, _subdomain, _domain);
	}

	/**
	 * @dev Returns the owner of a domain (e.g. "startonchain.eth"),
	 * @param _domain - domain name e.g. "startonchain"
	 */
	function domainOwner(string _domain) public view returns(address) {
		bytes32 namehash = keccak256(abi.encodePacked(ethNamehash, keccak256(abi.encodePacked(_domain))));
		return registry.owner(namehash);
	}
	
	/**
	 * @dev Return the owner of a subdomain (e.g. "radek.startonchain.eth"), 
	 * @param _subdomain - sub domain name only e.g. "radek"
	 * @param _domain - parent domain name e.g. "startonchain"
	 */
	function subdomainOwner(string _subdomain, string _domain) public view returns(address) {
		bytes32 domainNamehash = keccak256(abi.encodePacked(ethNamehash, keccak256(abi.encodePacked(_domain))));
		bytes32 subdomainNamehash = keccak256(abi.encodePacked(domainNamehash, keccak256(abi.encodePacked(_subdomain))));
		return registry.owner(subdomainNamehash);
	}

	/**
	 * @dev The contract owner can take away the ownership of any domain owned by this contract.
	 * @param _node - namehash of the domain
	 * @param _owner - new owner for the domain
	 */
	function transferDomainOwnership(bytes32 _node, address _owner) public onlyOwner {
		require(!locked);
		registry.setOwner(_node, _owner);
	}

	/**
	 * @dev The contract owner can lock and prevent any future domain ownership transfers.
	 */
	function lockDomainOwnershipTransfers() public onlyOwner {
		require(!locked);
		locked = true;
		emit DomainTransfersLocked();
	}

	/**
	 * @dev Allows to update to new ENS registry.
	 * @param _registry The address of new ENS registry to use.
	 */
	function updateRegistry(EnsRegistry _registry) public onlyOwner {
		require(registry != _registry, "new registry should be different from old");
		emit RegistryUpdated(registry, _registry);
		registry = _registry;
	}

	/**
	 * @dev Allows to update to new ENS resolver.
	 * @param _resolver The address of new ENS resolver to use.
	 */
	function updateResolver(EnsResolver _resolver) public onlyOwner {
		require(resolver != _resolver, "new resolver should be different from old");
		emit ResolverUpdated(resolver, _resolver);
		resolver = _resolver;
	}
}
