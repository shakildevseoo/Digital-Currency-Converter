 import express from 'express'
 import dotenv from 'dotenv'
 import path, {resolve} from 'path'

const app = express()
dotenv.config()
const PORT = process.env.PORT || 3000


// static folder and support
app.use(express.json())
app.use(express.urlencoded({extended : true}))
app.use(express.static('public'))
 let calculationPrice;
 
/*----Currency Pair Start ---- */

/*----BTC Pair Stat ---- */
let oneBtcToEth = 44.127267;
let oneBtcToLtc = 1242.7111;
let oneBtcToBnb = 165.26241;
let oneBtcToUsd = 107302.63;
let oneBtcToTrx = 388349.52;
let oneBtcToSol = 716.67051;
/*----BTC Pair End ---- */

/*----ETH Pair Stat ---- */
let oneEthToBtc = 0.022661378;
let oneEthToLtc = 28.158431;
let oneEthToBnb = 3.7444737;
let oneEthToUsd = 2431.63;
let oneEthToTrx = 8811.30;
let oneEthToSol = 16.240678;

/*----ETH Pair End ---- */

/*----BNB Pair Stat ---- */
let oneBnbToBtc  = 0.0060505437;
let oneBnbToLtc  = 7.518413;
let oneBnbToEth  = 0.2669477;
let oneBnbToUsd  = 649.43;
let oneBnbToTrx  = 	2377.37;
let oneBnbToSol  = 4.3372388;

/*----BNB Pair End ---- */



/*----USDT Pair Stat ---- */
let oneUsdToBtc = 0.0000093 ;
let oneUsdToLtc =0.012;
let oneUsdToEth = 0.00041;
let oneUsdToBnb = 0.0015;
let oneUsdToTrx = 3.62;
let oneUsdToSol = 3.55;

/*----USDT Pair End ---- */


/*----Trx Pair Stat ---- */
let oneTrxToBtc = 0.0000026;
let oneTrxToLtc = 0.0032;
let oneTrxToEth = 0.00011;
let oneTrxToBnb = 0.00042;
let oneTrxToUsd = 0.28;
let oneTrxToSol = 0.0019;

/*----Trx Pair End ---- */

/*----Sol Pair Stat ---- */
let oneSolToBtc =0.0014 ;
let oneSolToLtc = 1.68 ;
let oneSolToEth = 0.06173 ;
let oneSolToBnb = 0.23050753;
let oneSolToUsdt = 149.77;
let oneSolToTrx =544.17;

/*----Sol Pair End ---- */


/*----LTC Pair Stat ---- */
let oneLtcToBtc = 0.00080;
let oneLtcToEth = 0.035;
let oneLtcToBnb = 0.13;
let oneLtcToUsd = 86.66;
let oneLtcToTrx = 314.75;
let oneLtcToSol = 0.57 ;

/*----LTC Pair End ---- */
 
/*----Currency Pair End ---- */

// routing setup
app.get('/', (req, res)=>{
   res.status(200).sendFile(path.join(resolve(), './public/currency-converter.html'))
})

// collecting data & response
app.post('/currency-converter', (req, res)=>{
      // data destructuring 
   const { amount, currencyfrom, currencyto} = req.body
   let amountNumber = Number(amount)
   console.log(amountNumber)

   // BTC Pair 

if(currencyfrom === 'btc'){
   if(currencyfrom === 'btc' && currencyto ==='sol'){
      calculationPrice = `Your ${amountNumber} BTC = ${amountNumber * oneBtcToSol} SOL`
      console.log(calculationPrice)
  }else if(currencyfrom === 'btc' && currencyto ==='trx'){
      calculationPrice = `Your ${amountNumber} BTC = ${amountNumber * oneBtcToTrx} TRX`
      console.log(calculationPrice)
  }else if(currencyfrom === 'btc' && currencyto ==='usd'){
      calculationPrice = `Your ${amountNumber} BTC = ${amountNumber * oneBtcToUsd} USD`
      console.log(calculationPrice)
  }else if(currencyfrom === 'btc' && currencyto ==='bnb'){
      calculationPrice = `Your ${amount} BTC = ${amount * oneBtcToBnb} BNB`
      console.log(calculationPrice)
  }else if(currencyfrom === 'btc' && currencyto ==='ltc'){
      calculationPrice = `Your ${amount} BTC = ${amount * oneBtcToLtc} LTC`
      console.log(calculationPrice)
  }else if(currencyfrom === 'btc' && currencyto ==='eth'){
      calculationPrice = `Your ${amount} BTC = ${amount * oneBtcToEth} ETH`
      console.log(calculationPrice)
  } else if(currencyfrom === 'btc' && currencyto ==='btc'){
      calculationPrice = ` 🚫🚫 BTC to BTC pair not accepted 🚫🚫}`
      console.log(calculationPrice)
  } else{
      calculationPrice = `Sorry for this moment`
  }

 // ETH Pair
 } else if (currencyfrom === 'eth'){
  if(currencyfrom === 'eth' && currencyto ==='sol'){
      calculationPrice = `Your ${amountNumber} ETH = ${amountNumber * oneEthToSol} SOL`
      console.log(calculationPrice)
  }else if(currencyfrom === 'eth' && currencyto ==='trx'){
      calculationPrice = `Your ${amountNumber} ETH = ${amountNumber * oneEthToTrx} TRX`
      console.log(calculationPrice)
  }else if(currencyfrom === 'eth' && currencyto ==='usd'){
      calculationPrice = `Your ${amountNumber} ETH = ${amountNumber * oneEthToUsd} USD`
      console.log(calculationPrice)
  }else if(currencyfrom === 'eth' && currencyto ==='bnb'){
      calculationPrice = `Your ${amount} ETH = ${amount * oneEthToBnb} BNB`
      console.log(calculationPrice)
  }else if(currencyfrom === 'eth' && currencyto ==='ltc'){
      calculationPrice = `Your ${amount} ETH = ${amount * oneEthToLtc} LTC`
      console.log(calculationPrice)
  }else if(currencyfrom === 'eth' && currencyto ==='btc'){
      calculationPrice = `Your ${amount} ETH = ${amount * oneEthToBtc} BTC`
      console.log(calculationPrice)
  } else if(currencyfrom === 'eth' && currencyto ==='eth'){
      calculationPrice = ` 🚫🚫 ETH to ETH pair not accepted 🚫🚫`
      console.log(calculationPrice)
  } else{
      calculationPrice = `Sorry for this moment`
  }


  // Ltc Pair
 } else if (currencyfrom === 'ltc'){
 if(currencyfrom === 'ltc' && currencyto ==='sol'){
      calculationPrice = `Your ${amountNumber} LTC = ${amountNumber * oneLtcToSol} SOL`
      console.log(calculationPrice)
  }else if(currencyfrom === 'ltc' && currencyto ==='trx'){
      calculationPrice = `Your ${amountNumber} LTC = ${amountNumber * oneLtcToTrx} TRX`
      console.log(calculationPrice)
  }else if(currencyfrom === 'ltc' && currencyto ==='usd'){
      calculationPrice = `Your ${amountNumber} LTC = ${amountNumber * oneLtcToUsd} USD`
      console.log(calculationPrice)
  }else if(currencyfrom === 'ltc' && currencyto ==='bnb'){
      calculationPrice = `Your ${amount} LTC = ${amount * oneLtcToBnb} BNB`
      console.log(calculationPrice)
  }else if(currencyfrom === 'ltc' && currencyto ==='eth'){
      calculationPrice = `Your ${amount} LTC = ${amount * oneLtcToEth} ETH`
      console.log(calculationPrice)
  }else if(currencyfrom === 'ltc' && currencyto ==='btc'){
      calculationPrice = `Your ${amount} LTC = ${amount * oneLtcToBtc} BTC`
      console.log(calculationPrice)
  } else if(currencyfrom === 'ltc' && currencyto ==='ltc'){
      calculationPrice = ` 🚫🚫 LTC to LTC pair not accepted 🚫🚫`
      console.log(calculationPrice)
  } else{
      calculationPrice = `Sorry for this moment`
  }
 }

















})



















app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`)
})