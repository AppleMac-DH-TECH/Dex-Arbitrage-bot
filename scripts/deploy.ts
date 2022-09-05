
import { ethers } from "hardhat"
import { runScript } from "../src/utils/utils"
import cfg from '../config.json'

runScript(async function () {
  const FlashSwap = await ethers.getContractFactory('FlashSwap')
  console.log('Deploying FlashSwap...')
  const flashswap = await FlashSwap.deploy(cfg.uni.factory)
  const flashswap_deployed = await flashswap.deployed()
  console.log('FlashSwap deployed to:', flashswap_deployed.address)
})