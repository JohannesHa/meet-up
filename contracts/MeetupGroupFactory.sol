pragma solidity 0.4.24;

import "./zeppelin/ownership/Ownable.sol";
import "./MeetupGroup.sol";
import "./radek1st/EnsSubdomainFactory.sol";

contract MeetupGroupFactory is Ownable, EnsSubdomainFactory {

    address[] public groups;

    event CreateGroup(address id, string name, string description, string ens, address userId);

    /* Public functions */
    /**
     * @dev Create Group.
     * @param _name The name of the meetup group
     * @param _ens Subdomain ENS
     * @param _geohash Geohash of the meetup group
     * @param _category Category the meetup group belongs to
     * @param _description Desciption of the meetup group
     * @param _logo IPFS link
     */
    function createGroup(
        string _name,
        string _ens,
        bytes8 _geohash,
        string _category,
        string _description,
        bytes _logo
    ) public {
        address group = new MeetupGroup(
        msg.sender,
        _name,
        _geohash,
        _category,
        _description,
        _logo
        );

        newSubdomain(_name, "meet-up", msg.sender, group);

        emit CreateGroup(group, _name, _description, _ens, msg.sender);
    }
}