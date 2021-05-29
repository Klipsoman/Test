import React, { useState } from 'react'
import style from './Table.module.css'


const Table = ({glass:{bidsAmount,bidsPrise,bidsTotal,asksAmount,asksPrise,asksTotal}}) => {
  let [screenWidth] = useState(window.innerWidth)
if(screenWidth < 768) {
  return (
    <div className={style.tableWrapper}>
            <table className={style.table}>
              <thead>
                <tr>
                  <th>Amount</th>
                  <th className={style.rightCenter}>Price</th>          
                  <th>Amount</th>
                  <th>Price</th>             
                </tr>
              </thead>
              <tbody>
                {bidsAmount?.map((bid, i)=>{
                  return <tr key={i}>
                    <td className={style.bidsColor}>{bid}</td>
                    <td className={style.rightCenter + ' ' + style.bidsColor}>{bidsPrise[i]}</td>       
                    <td className={style.leftCenter + ' ' + style.asksColor}>{asksAmount[i]}</td>
                    <td className={style.asksColor}>{asksPrise[i]}</td>                
                  </tr>
                })}
              </tbody>    
            </table>
            </div>
  )
}
  
return (
<div className={style.tableWrapper}>
        <table className={style.table}>
          <thead>
            <tr>
              <th>Amount</th>
              <th>Price</th>
              <th className={style.rightCenter}>Total</th>
              <th>Amount</th>
              <th>Price</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {bidsAmount?.map((bid, i)=>{
              return <tr key={i}>
                <td className={style.bidsColor}>{bid}</td>
                <td className={style.bidsColor}>{bidsPrise[i]}</td>
                <td className={style.rightCenter + ' ' + style.bidsColor}>{bidsTotal[i]}</td>
                <td className={style.leftCenter + ' ' + style.asksColor}>{asksAmount[i]}</td>
                <td className={style.asksColor}>{asksPrise[i]}</td>
                <td className={style.asksColor}>{asksTotal[i]}</td>
              </tr>
            })}
          </tbody>    
        </table>
        </div>
)
}

export default Table