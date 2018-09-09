var Ownable = artifacts.require("Ownable");
var Destructible = artifacts.require("Destructible");
var GroupFactory = artifacts.require("GroupFactory");

module.exports = function (deployer) {
  deployer.then(function () {
    deployer.deploy(Ownable);
    deployer.deploy(Destructible);
    return Promise.all([
      deployer.deploy(GroupFactory)
    ])
  });
}
