pragma solidity 0.4.24;

import "./zeppelin/ownership/Ownable.sol";
import "./MeetupGroup.sol";

contract MeetupGroupFactory is Ownable {

    address[] public groups;

    event CreateGroup(address groupId, string name, string description, string ens, address userId);

    /* Public functions */
    /**
     * @dev Create Group.
     * @param _name The name of the meetup group
     * @param _geohash Geohash of the meetup group
     * @param _category Category the meetup group belongs to
     * @param _description Desciption of the meetup group
     * @param _logo IPFS link
     */
    function createGroup(
        string _name,
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

        // create ens here

        MeetupGroup Group = MeetupGroup(group);
        Group.addENS(ens);

        emit CreateGroup(group, _name, _description, ens, msg.sender);
    }
}