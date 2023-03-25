import React from 'react'
import './Prices.css'

export default function Prices() {
  return (
    <div className='white' id='prices'>
      <h1>Prices</h1>
      <table>
        <tr>
          <th>Service</th>
          <th>Description</th>
          <th className='cost'>Cost</th>
        </tr>
       
        <tr>
          <td>Home Visits</td>
          <td>Feed, fuss and fresh water (30 mins)</td>
          <td className='cost'>£10</td>
        </tr>
        
     
        <tr>
          <td>Walking</td>
          <td>30min/60min</td>
          <td className='cost'>£7.50/£14</td>
        </tr>
      </table>

      <h3>Methods of payment</h3>
      <p>Cash/Bank Transfer/Paypal</p>
    </div>
  )
}
