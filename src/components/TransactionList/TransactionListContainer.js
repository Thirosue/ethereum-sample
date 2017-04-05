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
    var tmp = new Array()

    if(sessionStorage.getItem('transactions')) {
      var tlist = JSON.parse(sessionStorage.getItem('transactions'))
      var current = tlist.slice(tlist.length-3, tlist.length)

      current.forEach((item,index,ar) => {
        this.props.web3.eth.getTransaction(item.hash, function(err, tran) {
          tran.token = item.token
          tmp.push(tran)
          this.setState({transactions: tmp.sort((a,b)=>{return (a.blockNumber < b.blockNumber ? 1 : -1)})})
        }.bind(this))
      })

    } else {
        tmp.push({
          blockNumber : null,
          to : null,
          token : null
        })
        this.setState({transactions: tmp})
      }
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
