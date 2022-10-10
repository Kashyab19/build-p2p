require("@nomicfoundation/hardhat-toolbox");

task("accounts", 
    "Print the list of all accounts",
    async (taskArgs, hre) => {
      const accounts = await hre.ethers.getSigners();

      for(const acc of accounts){
        console.log(acc.address)
      }
    }
);
/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
};
