import React, { Component } from 'react'
import Transaction from 'components/TransactionList/Transaction'

import Web3 from 'web3';

class TransactionListContainer extends Component {
  constructor(props) {
    super(props)

    this.state = {
      transactions: []
    }

    this._getTransactions = this._getTransactions.bind(this)

  }

  _getTransactions () {
    this.setState({transactions: JSON.parse(sessionStorage.getItem('transactions'))})
    var current = JSON.parse(sessionStorage.getItem('transactions')).slice(0,1)[0]

    this.props.web3.eth.getTransaction(current,function (err, tran) {
      this.setState({transactions: tran})
      console.log(this.state.transactions)
    }.bind(this))
  }

  componentDidMount() {
    const refresh = () => {
      this._getTransactions()
    }

    refresh()

    setInterval(()=>{
      refresh();
      return refresh
    }, 5000)
  }

  render() {
    return (
      <div>
        <h2>Current Transaction</h2>
        <Transaction transactions={this.state.transactions} />
      </div>
    )
  }
}

export default TransactionListContainer
