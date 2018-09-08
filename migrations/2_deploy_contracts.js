var Ownable = artifacts.require("Ownable");
var Destructible = artifacts.require("Destructible");
var EnsResolverMock = artifacts.require("EnsResolverMock");
var EnsRegistryMock = artifacts.require("EnsRegistryMock");
var EnsSubdomainFactory = artifacts.require("EnsSubdomainFactory");
var MeetupGroupFactory = artifacts.require("MeetupGroupFactory");

module.exports = function (deployer) {
  deployer.then(function () {
    deployer.deploy(Ownable);
    deployer.deploy(Destructible);
    return Promise.all([
      deployer.deploy(EnsResolverMock),
      deployer.deploy(EnsRegistryMock)
    ]).then(function () {
      var ensregistryPromise = EnsRegistryMock.deployed().then(function(ensregistry){
        return ensregistry;
      })
      var ensresolverPromise = EnsResolverMock.deployed().then(function(ensresolver){
        return ensresolver;
      })
      return Promise.all([ensregistryPromise, ensresolverPromise]).then(function ([ensresolver, ensregistry]) {
        return deployer.deploy(EnsSubdomainFactory, ensregistry.address, ensresolver.address);
      }).then(function(){
        return EnsSubdomainFactory.deployed();
      }).then(function(subdomainFactory){
        return deployer.deploy(MeetupGroupFactory, subdomainFactory.address);
      })
    })
  });
}

