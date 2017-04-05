
import React, { Component } from 'react'
import './Transaction.css'

class Transaction extends Component {
  render(){
    var list = []

    for(var i in this.props.transactions){
      list.push(
        <tr>
          <td>{this.props.transactions[i].blockNumber}</td>
          <td>{this.props.transactions[i].to}</td>
          <td>{this.props.transactions[i].token}</td>
        </tr>
        )
    }

    return(
      <table>
        <thead>
          <tr>
            <td>BlockNumber</td><td>To</td><td>Token</td>
          </tr>
        </thead>
        <tbody>
            {list}
        </tbody>
      </table>
    );
  }
}

export default Transaction
