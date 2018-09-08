pragma solidity ^0.4.23;

import "./EnsRegistry.sol";

/**
* @title EnsRegistryMock
*/
contract EnsRegistryMock is EnsRegistry {
    mapping(bytes32 => address) owners;
    mapping(bytes32 => address) public resolvers;

    function setOwner(bytes32 _node, address _owner) public {
        owners[_node] = _owner;
    }

    function setSubnodeOwner(bytes32 _node, bytes32 _label, address _owner) public {
        owners[keccak256(abi.encodePacked(_node, _label))] = _owner;
    }

    function setResolver(bytes32 _node, address _resolver) public {
        resolvers[_node] = _resolver;
    }

    function owner(bytes32 _node) public view returns (address){
        return owners[_node];
    }
}