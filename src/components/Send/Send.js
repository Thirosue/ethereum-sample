import React, { Component } from 'react'
import './Send.css'

import Token from 'contracts/Token.sol';
import Web3 from 'web3';

const provider = new Web3.providers.HttpProvider('http://localhost:8545')
Token.setProvider(provider);

class Send extends Component {
  constructor(props) {
    super(props)

    this.state = {
      transactions: []
    }

    this.handleSend = this.handleSend.bind(this)
  }

  handleSend(e) {
    e.preventDefault()
    var meta = Token.deployed();
    console.log(`Recipient Address: ${this.recipientAddressInput.value}`)
    meta.send(this.recipientAddressInput.value, this.sendAmountInput.value, {from: this.props.sender}).then(function(txHash) {
      window.alert('send complete!')

      var tran = new Array()
      if(sessionStorage.getItem('transactions')) {
        tran = JSON.parse(sessionStorage.getItem('transactions'))
      }
      tran.push({
        hash : txHash,
        token : this.sendAmountInput.value
      })
      sessionStorage.setItem('transactions', JSON.stringify(tran))

    }.bind(this)
    ).catch(function(e) {
      console.log(e);
    });
  }

  render() {
    return (
      <form className='Send'>
        <label htmlFor='recipient_address'>Recipient Address</label>
        <input id='recipient_address' className='RecipientAddress' type='text' ref={(i)=>{ if(i) { this.recipientAddressInput = i}}} />
        <label htmlFor='send_amount'>Amount</label>
        <input id='send_amount' className='SendAmount' type='text' ref={(i) => { if(i) { this.sendAmountInput = i}}} />
        <button className='SendBtn' onClick={this.handleSend}>Send</button>
      </form>
    )
  }
}

export default Send
