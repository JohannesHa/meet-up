pragma solidity 0.4.24;

import "./zeppelin/ownership/Ownable.sol";
import "./blockparty/Conference.sol";

contract MeetupGroup is Ownable {
    string public name;
    string public ens;
    bytes8 public geohash;
    string public category;
    string public description;
    bytes public logo;

    address[] public events;
    mapping (address => bool) public participants;

    event CreateEvent(address groupId, address eventId, string name, string description, uint date, address userId);
    event JoinGroup(address groupId, address userId);
    event LeaveGroup(address groupId, address userId);


    /* Public functions */
    /**
     * @dev Constructor.
     * @param _owner Address of the user that creates the group from factory contract
     * @param _name The name of the meetup group
     * @param _ens ENS string of meetup
     * @param _geohash Geohash of the meetup group
     * @param _category Category the meetup group belongs to
     * @param _description Desciption of the meetup group
     * @param _logo IPFS link
     
     */
    constructor (
        address _owner,
        string _name,
        string _ens,
        bytes8 _geohash,
        string _category,
        string _description,
        bytes _logo
    ) public {
        require(_owner != 0x0, "Owner needs to be a valid address");
        owner = _owner;

        if (bytes(_name).length != 0){
            name = _name;
        } else {
            name = "Test";
        }

        if (bytes(_ens).length != 0){
            ens = _ens;
        } else {
            ens = "test.example.eth";
        }

        if (_geohash.length != 0){
            geohash = _geohash;
        } else {
            geohash = 0x0;
        }

        if (bytes(_category).length != 0){
            category = _category;
        } else {
            category = "Tech";
        }

        if (bytes(_description).length != 0){
            description = _description;
        } else {
            description = "Test description";
        }

        if (_logo.length != 0){
            logo = _logo;
        } else {
            logo = "0x0";
        } 
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
    function createEvent(
        string _name,
        uint256 _deposit,
        uint _limitOfParticipants,
        uint _coolingPeriod,
        string _description,
        uint _date,
        bytes8 _geohash
    ) public onlyOwner {
        address conference = new Conference(
            _name,
            _deposit,
            _limitOfParticipants,
            _coolingPeriod,
            _description,
            _date,
            _geohash
        );
        events.push(conference);
        emit CreateEvent(this, conference, _name, _description, _date, msg.sender);
    }

    /**
     * @dev Adds a user to the meetup group
     */
    function joinGroup () public {
        participants[msg.sender] = true;
        emit JoinGroup(this, msg.sender);
    }

    /**
     * @dev Deletes a user from the meetup group
     */
    function leaveGroup () public {
        participants[msg.sender] = false;
        emit LeaveGroup(this, msg.sender);
    }
}