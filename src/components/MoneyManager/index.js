import {Component} from 'react'

import {v4 as uuidv4} from 'uuid'

import './index.css'

import MoneyDetails from '../MoneyDetails/index'

import TransactionItem from '../TransactionItem/index'

/* const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
] */

// Write your code here

class MoneyManager extends Component {
  state = {
    income: 0,
    expenses: 0,
    amount: '',
    title: '',
    optionId: 'INCOME',
    transactionsList: [],
  }

  onSubmit = event => {
    event.preventDefault()
  }

  updateAmount = event => {
    const amountValue = event.target.value
    this.setState({amount: amountValue})
  }

  updateTitle = event => {
    this.setState({title: event.target.value})
  }

  updateOption = event => {
    this.setState({optionId: event.target.value})
  }

  onAddButton = () => {
    const {
      optionId,
      income,
      amount,
      expenses,
      title,
      transactionsList,
    } = this.state

    const transaction = {
      id: uuidv4(),
      title,
      amount,
      optionId,
    }

    if (optionId === 'INCOME') {
      this.setState({income: income + parseInt(amount)})
    } else {
      this.setState({expenses: expenses + parseInt(amount)})
    }
    this.setState({
      transactionsList: [...transactionsList, transaction],
      amount: '',
      title: '',
      optionId: 'INCOME',
    })
  }

  onDeleteFunction = (id, optionId, amount) => {
    const {transactionsList, income, expenses} = this.state
    if (optionId === 'INCOME') {
      this.setState({income: income - parseInt(amount)})
    } else {
      this.setState({expenses: expenses - parseInt(amount)})
    }
    const filteredList = transactionsList.filter(eachItem => eachItem.id !== id)
    this.setState({transactionsList: filteredList})
  }

  render() {
    const {
      income,
      expenses,
      amount,
      title,
      optionId,
      transactionsList,
    } = this.state
    return (
      <div className="container">
        <div className="title-container">
          <h1>Hi, Richard</h1>
          <p className="para">
            Welcome back to your <span>Money Manager</span>
          </p>
        </div>
        <div>
          <MoneyDetails income={income} expenses={expenses} />
        </div>
        <div className="last-container">
          <form className="form-container" onSubmit={this.onSubmit}>
            <h1 className="form-heading">Add Transaction</h1>
            <label>
              TITLE
              <input
                type="text"
                name="Title"
                placeholder="TITLE"
                onChange={this.updateTitle}
                value={title}
              />
            </label>
            <label>
              AMOUNT
              <input
                type="text"
                name="Amount"
                placeholder="AMOUNT"
                onChange={this.updateAmount}
                value={amount}
              />
            </label>
            <label>
              TYPE
              <select onChange={this.updateOption} value={optionId}>
                <option value="INCOME">Income</option>
                <option value="EXPENSES">Expenses</option>
              </select>
            </label>
            <button type="submit" onClick={this.onAddButton}>
              Add
            </button>
          </form>
          <div className="transactions-container">
            <h1 className="form-heading">History</h1>
            <div className="table-heading-container">
              <p className="table-column">Title</p>
              <p className="table-column">Amount</p>
              <p className="table-column">Type</p>
            </div>
            <ul>
              {transactionsList.map(eachItem => (
                <TransactionItem
                  eachItem={eachItem}
                  key={eachItem.id}
                  onDeleteFunction={this.onDeleteFunction}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default MoneyManager
