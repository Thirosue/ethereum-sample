
import React, { Component } from 'react'
import './Transaction.css'

class Transaction extends Component {
  render() {
    return (
      <table>
        <thead>
          <tr>
            <td>BlockHash</td>
            <td>BlockNumber</td>
            <td>Gas</td>
          </tr>
        </thead>
        <tbody>
          <tr key={this.props.transactions}>
            <td>{this.props.transactions.blockHash}</td>
            <td>{this.props.transactions.blockNumber}</td>
            <td>{this.props.transactions.gas}</td>
          </tr>
        </tbody>
      </table>
    )
  }
}

export default Transaction
