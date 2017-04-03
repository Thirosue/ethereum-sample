
import React, { Component } from 'react'
import './Transaction.css'

class Transaction extends Component {
  render() {
    return (
      <table>
        <thead>
          <tr>
            <td>BlockNumber</td>
            <td>To</td>
            <td>Token</td>
          </tr>
        </thead>
        <tbody>
          <tr key={this.props.transactions}>
            <td>{this.props.transactions.blockNumber}</td>
            <td>{this.props.transactions.to}</td>
            <td>{this.props.transactions.token}</td>
          </tr>
        </tbody>
      </table>
    )
  }
}

export default Transaction
