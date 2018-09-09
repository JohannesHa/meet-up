var Ownable = artifacts.require("Ownable");
var Destructible = artifacts.require("Destructible");
var MeetupGroupFactory = artifacts.require("MeetupGroupFactory");

module.exports = function (deployer) {
  deployer.then(function () {
    deployer.deploy(Ownable);
    deployer.deploy(Destructible);
    return Promise.all([
      deployer.deploy(MeetupGroupFactory)
    ])
  });
}
