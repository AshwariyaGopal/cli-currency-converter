#! /usr/bin/env node

import inquirer from "inquirer"


const currency: any = {
    USD: 1,  //Base currency
    EUR: 0.92,
    GBP: 0.79,
    INR: 83.31,
    PKR: 278.12,
};

let userAnswer = await inquirer.prompt(
    [

        {
          name: "from",
          message: "Enter From Currency",
          type:"list",
          choices:['USD', 'EUR', 'GBP', 'INR', 'PKR']
       },

       {
          name: "to",
          message: "Enter To Currency",
          type: 'list',
          choices: ['USD', 'EUR', 'GBP', 'INR', 'PKR']

       },
       {
          name: 'amount',
          message: "Enter Your Amount",
          type: 'number'
          
       }

    ]
)
  
  let fromAmount = currency[userAnswer.from]
  let toAmount = currency[userAnswer.to]
  let amount = userAnswer.amount
  let baseAmount = amount / fromAmount //USD base currency
  let convertedAmount = (baseAmount * toAmount).toFixed(2)
  console.log(convertedAmount)
  //console.log(fromAmount);
  //console.log(toAmount);
 // console.log(amount)