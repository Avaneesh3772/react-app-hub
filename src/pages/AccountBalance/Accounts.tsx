import React from 'react'
import balancesHUB from '../../assets/mockdata/amount.json'
import { formatCurrencyGBP } from '../../utils/formatCurrencyGBP';

const Accounts = () => {
 console.log("balancesHUB =>", balancesHUB);
  return (
    <>
      <div>
        Total Amount:
        <span>{formatCurrencyGBP(balancesHUB.balance.amount).slice(1)} </span>
        <span>{balancesHUB.balance.currency}</span>
      </div>      
    </>
  )
}

export default Accounts