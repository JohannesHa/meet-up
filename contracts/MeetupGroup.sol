pragma solidity 0.4.21;

import "./zeppelin/lifecycle/Destructible.sol";
import "./blockparty/Conference.sol";

contract MeetupGroup is Destructible {
    // string public name;
    // string public country;
    // string public region;
    // string public category;
    // string public description;
    bytes public logo;
    uint public memberCount;

    address[] public events;
    mapping (address => bool) public members;

    event CreateEvent(
        address id, 
        address groupId, 
        address userId, 
        string name, 
        string description, 
        uint date, 
        bytes8 geohash, 
        uint limitOfParticipants,
        uint deposit
    );
    event JoinGroup(address groupId, address userId, uint memberCount);
    // event LeaveGroup(address groupId, address userId, uint memberCount);


    /* Public functions */
    /**
     * @dev Constructor.
     * @param _owner Address of the user that creates the group from factory contractto
     * @param _logo IPFS link
     
     */
    function MeetupGroup (
        address _owner,
        // string _name,
        // string _country,
        // string _region,
        // string _category,
        // string _description,
        bytes _logo
    ) public {
        require(_owner != 0x0);
        owner = _owner;

        // if (bytes(_name).length != 0){
        //     name = _name;
        // } else {
        //     name = "Test";
        // }

        // if (bytes(_country).length != 0){
        //     country = _country;
        // } else {
        //     country = "TestCountry";
        // }

        // if (bytes(_region).length != 0){
        //     region = _region;
        // } else {
        //     region = "TestRegion";
        // }

        // if (bytes(_category).length != 0){
        //     category = _category;
        // } else {
        //     category = "Tech";
        // }

        // if (bytes(_description).length != 0){
        //     description = _description;
        // } else {
        //     description = "Test description";
        // }

        if (_logo.length != 0){
            logo = _logo;
        } else {
            logo = "0x0";
        }

        members[msg.sender] = true;
        memberCount++;
    }

    /**
     * @dev Creates an event = a Conference smart contract
     * @param _name The name of the event
     * @param _deposit The amount each participant deposits. The default is set to 0.02 Ether. The amount cannot be changed once deployed.
     * @param _limitOfParticipants The number of participant. The default is set to 20. The number can be changed by the owner of the event.
     * @param _coolingPeriod The period participants should withdraw their deposit after the event ends. After the cooling period, the event owner can claim the remining deposits.
     * @param _description Desciption of the event
     * @param _date Timestamp of the event
     * @param _geohash Geohash of the event
     */
    function createEvent (
        string _name,
        uint256 _deposit,
        uint _limitOfParticipants,
        uint _coolingPeriod,
        string _description,
        uint _date,
        bytes8 _geohash
    ) public onlyOwner {
        require(bytes(_name).length > 0);
        require(_date > 0);
        require(_geohash > 0);
        address conference = new Conference(
            msg.sender,
            // _name,
            _deposit,
            _limitOfParticipants,
            _coolingPeriod
            // _description,
            // _date,
            // _geohash
        );
        events.push(conference);
        emit CreateEvent(conference, this, msg.sender, _name, _description, _date, _geohash, _limitOfParticipants, _deposit);
    }

    /**
     * @dev Adds a user to the meetup group
     */
    function joinGroup () public {
        members[msg.sender] = true;
        memberCount++;
        emit JoinGroup(this, msg.sender, memberCount);
    }

    // /**
    //  * @dev Deletes a user from the meetup group
    //  */
    // function leaveGroup () public {
    //     participants[msg.sender] = false;
    //     memberCount--;
    //     emit LeaveGroup(this, msg.sender, memberCount);
    // }
}