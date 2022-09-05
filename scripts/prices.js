const { BigNumber } = require("ethers")
const cfg = require('../config.json')
const { getPairContract } = require("../src/utils/uni")

// TODO: export as a function
async function main() {
    var pair = await getPairContract(cfg.uni.factory, cfg.WETH, cfg.DAI)
    var [reserve0, reserve1] = await pair.getReserves()
    console.log(reserve0, reserve1, "reserve")
    var price = reserve1.div(reserve0).toString()
    console.log(`Uniswap WETH/DAI price: ${price} [${ethers.utils.formatUnits(reserve0)}, ${ethers.utils.formatUnits(reserve1)}]`)

    var pair = await getPairContract(cfg.sushi.factory, cfg.WETH, cfg.DAI)
    var [reserve0, reserve1] = await pair.getReserves()
    console.log(reserve0, reserve1, "reserve")

    price = reserve1.div(reserve0).toString()
    console.log(`Sushiswap WETH/DAI price: ${price} [${ethers.utils.formatUnits(reserve0)}, ${ethers.utils.formatUnits(reserve1)}]`)
    var prevPrice1 = BigNumber.from('4796610711962915340189006905677271').div(BigNumber.from('74512187566920794175')).toString()
    var prevPrice2 = BigNumber.from('1403213743495752490270345121621739').div(BigNumber.from('13030935451545074961')).toString()
    var diffPrice = BigNumber.from(prevPrice2).sub(BigNumber.from(prevPrice1))
    console.log(prevPrice1,prevPrice2, diffPrice, "prevPrice")
}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.log(error)
        process.exit(1)
    })