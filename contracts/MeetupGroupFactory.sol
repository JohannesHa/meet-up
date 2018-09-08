pragma solidity 0.4.24;

import "./MeetupGroup.sol";
import "./zeppelin/ownership/Ownable.sol";
import "./radek1st/EnsSubdomainFactory.sol";

contract MeetupGroupFactory is Ownable {

    address[] public groups;

    event CreateGroup(
        address indexed id,
        address indexed userId,
        string name, 
        string description, 
        string country, 
        string region, 
        string category
    );

    /* Public functions */
    /**
     *@dev Constructor 
     */
    constructor() public {}
    /**
     * @dev Create Group.
     * @param _name The name of the meetup group
     * @param _country Country of meetup group
     * @param _region Region of meetup group
     * @param _category Category the meetup group belongs to
     * @param _description Desciption of the meetup group
     * @param _logo IPFS link
     */
    function createGroup(
        string _name,
        string _country,
        string _region,
        string _category,
        string _description,
        bytes _logo
    ) public {
        require(bytes(_name).length > 0, "Name has to exist");
        require(bytes(_country).length > 0, "Country has to exist");
        require(bytes(_region).length > 0, "Region has to exist");
        require(bytes(_category).length > 0, "Category has to exist");
        address group = new MeetupGroup(
        msg.sender,
        // _name,
        // _country,
        // _region,
        // _category,
        // _description,
        _logo
        );
        groups.push(group);

        emit CreateGroup(group, msg.sender, _name, _description, _country, _region, _category);
    }
}