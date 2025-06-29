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
  

   // BTC Pair 

if(currencyfrom === 'btc'){
   if(currencyfrom === 'btc' && currencyto ==='sol'){
      calculationPrice = `Your ${amountNumber} BTC = ${amountNumber * oneBtcToSol} SOL`
     
  }else if(currencyfrom === 'btc' && currencyto ==='trx'){
      calculationPrice = `Your ${amountNumber} BTC = ${amountNumber * oneBtcToTrx} TRX`
     
  }else if(currencyfrom === 'btc' && currencyto ==='usd'){
      calculationPrice = `Your ${amountNumber} BTC = ${amountNumber * oneBtcToUsd} USD`
      
  }else if(currencyfrom === 'btc' && currencyto ==='bnb'){
      calculationPrice = `Your ${amount} BTC = ${amount * oneBtcToBnb} BNB`
      
  }else if(currencyfrom === 'btc' && currencyto ==='ltc'){
      calculationPrice = `Your ${amount} BTC = ${amount * oneBtcToLtc} LTC`
      
  }else if(currencyfrom === 'btc' && currencyto ==='eth'){
      calculationPrice = `Your ${amount} BTC = ${amount * oneBtcToEth} ETH`
     
  } else if(currencyfrom === 'btc' && currencyto ==='btc'){
      calculationPrice = ` 🚫🚫 BTC to BTC pair not accepted 🚫🚫}`
    
  } else{
      calculationPrice = `Sorry for this moment`
  }

 // ETH Pair
 } else if (currencyfrom === 'eth'){
  if(currencyfrom === 'eth' && currencyto ==='sol'){
      calculationPrice = `Your ${amountNumber} ETH = ${amountNumber * oneEthToSol} SOL`
     
  }else if(currencyfrom === 'eth' && currencyto ==='trx'){
      calculationPrice = `Your ${amountNumber} ETH = ${amountNumber * oneEthToTrx} TRX`
      
  }else if(currencyfrom === 'eth' && currencyto ==='usd'){
      calculationPrice = `Your ${amountNumber} ETH = ${amountNumber * oneEthToUsd} USD`
    
  }else if(currencyfrom === 'eth' && currencyto ==='bnb'){
      calculationPrice = `Your ${amount} ETH = ${amount * oneEthToBnb} BNB`
      
  }else if(currencyfrom === 'eth' && currencyto ==='ltc'){
      calculationPrice = `Your ${amount} ETH = ${amount * oneEthToLtc} LTC`
      
  }else if(currencyfrom === 'eth' && currencyto ==='btc'){
      calculationPrice = `Your ${amount} ETH = ${amount * oneEthToBtc} BTC`
     
  } else if(currencyfrom === 'eth' && currencyto ==='eth'){
      calculationPrice = ` 🚫🚫 ETH to ETH pair not accepted 🚫🚫`
      
  } else{
      calculationPrice = `Sorry for this moment`
  }


  // Ltc Pair
 } else if (currencyfrom === 'ltc'){
 if(currencyfrom === 'ltc' && currencyto ==='sol'){
      calculationPrice = `Your ${amountNumber} LTC = ${amountNumber * oneLtcToSol} SOL`
    
  }else if(currencyfrom === 'ltc' && currencyto ==='trx'){
      calculationPrice = `Your ${amountNumber} LTC = ${amountNumber * oneLtcToTrx} TRX`
      
  }else if(currencyfrom === 'ltc' && currencyto ==='usd'){
      calculationPrice = `Your ${amountNumber} LTC = ${amountNumber * oneLtcToUsd} USD`
      
  }else if(currencyfrom === 'ltc' && currencyto ==='bnb'){
      calculationPrice = `Your ${amount} LTC = ${amount * oneLtcToBnb} BNB`
     
  }else if(currencyfrom === 'ltc' && currencyto ==='eth'){
      calculationPrice = `Your ${amount} LTC = ${amount * oneLtcToEth} ETH`
      
  }else if(currencyfrom === 'ltc' && currencyto ==='btc'){
      calculationPrice = `Your ${amount} LTC = ${amount * oneLtcToBtc} BTC`
      
  } else if(currencyfrom === 'ltc' && currencyto ==='ltc'){
      calculationPrice = ` 🚫🚫 LTC to LTC pair not accepted 🚫🚫`
     
  } else{
      calculationPrice = `Sorry for this moment`
  }

//BNB pair
 } else if (currencyfrom === 'bnb'){
 if(currencyfrom === 'bnb' && currencyto ==='sol'){
      calculationPrice = `Your ${amountNumber} BNB = ${amountNumber * oneBnbToSol} SOL`
     
  }else if(currencyfrom === 'bnb' && currencyto ==='trx'){
      calculationPrice = `Your ${amountNumber} BNB = ${amountNumber * oneBnbToTrx} TRX`
     
  }else if(currencyfrom === 'bnb' && currencyto ==='usd'){
      calculationPrice = `Your ${amountNumber} BNB = ${amountNumber * oneBnbToUsd} USD`
      
  }else if(currencyfrom === 'bnb' && currencyto ==='ltc'){
      calculationPrice = `Your ${amount} BNB = ${amount * oneBnbToLtc} LTC`
     
  }else if(currencyfrom === 'bnb' && currencyto ==='eth'){
      calculationPrice = `Your ${amount} BNB = ${amount * oneBnbToEth} ETH`
    
  }else if(currencyfrom === 'bnb' && currencyto ==='btc'){
      calculationPrice = `Your ${amount} BNB = ${amount * oneBnbToBtc} BTC`
      
  } else if(currencyfrom === 'bnb' && currencyto ==='bnb'){
      calculationPrice = ` 🚫🚫 BNB to BNB pair not accepted 🚫🚫`
      
  } else{
      calculationPrice = `Sorry for this moment`
  }

  //USD pair
 } else if (currencyfrom === 'usd'){
 if(currencyfrom === 'usd' && currencyto ==='sol'){
      calculationPrice = `Your ${amountNumber} USD = ${amountNumber * oneUsdToSol} SOL`
   
  }else if(currencyfrom === 'usd' && currencyto ==='trx'){
      calculationPrice = `Your ${amountNumber} USD = ${amountNumber * oneUsdToTrx} TRX`
      
  }else if(currencyfrom === 'usd' && currencyto ==='bnb'){
      calculationPrice = `Your ${amountNumber} USD = ${amountNumber * oneUsdToBnb} BNB`
      
  }else if(currencyfrom === 'usd' && currencyto ==='ltc'){
      calculationPrice = `Your ${amount} USD = ${amount * oneUsdToLtc} LTC`
     
  }else if(currencyfrom === 'usd' && currencyto ==='eth'){
      calculationPrice = `Your ${amount} USD = ${amount * oneUsdToEth} ETH`
     
  }else if(currencyfrom === 'usd' && currencyto ==='btc'){
      calculationPrice = `Your ${amount} USD = ${amount * oneUsdToBtc} BTC`
      
  } else if(currencyfrom === 'usd' && currencyto ==='usd'){
      calculationPrice = ` 🚫🚫 USD to USD pair not accepted 🚫🚫`
     
  } else{
      calculationPrice = `Sorry for this moment`
  }


  // TRX Pair
 } else if (currencyfrom === 'trx'){
 if(currencyfrom === 'trx' && currencyto ==='sol'){
      calculationPrice = `Your ${amountNumber} TRX = ${amountNumber * oneTrxToSol} SOL`
     
  }else if(currencyfrom === 'trx' && currencyto ==='usd'){
      calculationPrice = `Your ${amountNumber} TRX = ${amountNumber * oneTrxToUsd} USD`
      
  }else if(currencyfrom === 'trx' && currencyto ==='bnb'){
      calculationPrice = `Your ${amountNumber} TRX = ${amountNumber * oneTrxToBnb} BNB`
     
  }else if(currencyfrom === 'trx' && currencyto ==='ltc'){
      calculationPrice = `Your ${amount} TRX = ${amount * oneTrxToLtc} LTC`
    
  }else if(currencyfrom === 'trx' && currencyto ==='eth'){
      calculationPrice = `Your ${amount} TRX = ${amount * oneTrxToEth} ETH`
     
  }else if(currencyfrom === 'trx' && currencyto ==='btc'){
      calculationPrice = `Your ${amount} TRX = ${amount * oneTrxToBtc} BTC`
    
  } else if(currencyfrom === 'trx' && currencyto ==='trx'){
      calculationPrice = ` 🚫🚫 TRX to TRX pair not accepted 🚫🚫`
  
  } else{
      calculationPrice = `Sorry for this moment`
  }
//SOl Pair
 } else if (currencyfrom === 'sol'){
 if(currencyfrom === 'sol' && currencyto ==='trx'){
      calculationPrice = `Your ${amountNumber} TRX = ${amountNumber * oneSolToTrx} TRX`
    
  }else if(currencyfrom === 'sol' && currencyto ==='usd'){
      calculationPrice = `Your ${amountNumber} SOL = ${amountNumber * oneSolToUsdt} USD`
     
  }else if(currencyfrom === 'sol' && currencyto ==='bnb'){
      calculationPrice = `Your ${amountNumber} SOL = ${amountNumber * oneSolToBnb} BNB`
      console.log(calculationPrice)
  }else if(currencyfrom === 'sol' && currencyto ==='ltc'){
      calculationPrice = `Your ${amount} SOL = ${amount * oneSolToLtc} LTC`
     
  }else if(currencyfrom === 'sol' && currencyto ==='eth'){
      calculationPrice = `Your ${amount} SOL = ${amount * oneSolToEth} ETH`
    
  }else if(currencyfrom === 'sol' && currencyto ==='btc'){
      calculationPrice = `Your ${amount} SOL = ${amount * oneSolToBtc} BTC`
     
  } else if(currencyfrom === 'sol' && currencyto ==='trx'){
      calculationPrice = ` 🚫🚫 SOL to SOL pair not accepted 🚫🚫`
     
  } else{
      calculationPrice = `Sorry for this moment`
  }

 } else{
    calculationPrice =' Unexpected Value Pairs'
 }




  res.status(200).json({
    amount : amount,
    From : currencyfrom,
    To: currencyto,
    price : calculationPrice

  })









})



















app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`)
})