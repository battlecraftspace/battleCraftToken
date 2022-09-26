const BattleCraft = artifacts.require("BattleCraft");

const TOTAL_SUPPLY="200000000000000000000000000";
module.exports = function (deployer) {
  deployer.deploy(BattleCraft, TOTAL_SUPPLY);
};