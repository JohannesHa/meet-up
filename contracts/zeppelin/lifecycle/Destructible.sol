pragma solidity 0.4.24;

import "../ownership/Ownable.sol";

/**
 * @title Destructible
 * @dev Base contract that can be destroyed by owner. All funds in contract will be sent to the owner.
 */
contract Destructible is Ownable {

    event DestroyEvent(address id);

    constructor() public payable { }

    /**
    * @dev Transfers the current balance to the owner and terminates the contract.
    */
    function destroy() onlyOwner public {
        selfdestruct(owner);
        emit DestroyEvent(this);
    }

    function destroyAndSend(address _recipient) onlyOwner public {
        selfdestruct(_recipient);
        emit DestroyEvent(this);
    }
}
