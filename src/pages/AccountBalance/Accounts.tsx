import React from 'react'
import balancesHUB from '../../assets/mockdata/amount.json'
import { formatCurrencyGBP } from '../../utils/formatCurrencyGBP';
import { formatCurrency } from '../../utils/formatCurrency';
import { formatDate } from '../../utils/dateFormat';
import { currentDateTime } from '../../utils/currentDateTime';


const Accounts = () => {
 console.log("balancesHUB =>", balancesHUB);
  return (
    <>
      <div>
        Total Amount Veriosn One:
        <span>{formatCurrencyGBP(balancesHUB.balance.amount).slice(1)} </span>
        <span>{balancesHUB.balance.currency}</span>
      </div> 
      <div>
        Total Amount Veriosn Two:
        <span>{formatCurrency(balancesHUB.balance.amount)} </span>
        <span>{balancesHUB.balance.currency}</span>
      </div>   
      <div>
        Account Open Date:
        <span>{formatDate("2024-06-21")} </span>        
      </div> 
      <div>
        Current Date and Time:
        <span>{currentDateTime()} </span>        
      </div> 
    </>
  )
}

export default Accounts