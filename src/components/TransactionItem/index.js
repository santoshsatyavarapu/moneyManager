// Write your code here

import './index.css'

const TransactionItem = prop => {
  const {eachItem, onDeleteFunction} = prop
  const {id, title, amount, optionId} = eachItem

  let category

  if (optionId === 'INCOME') {
    category = 'Income'
  } else {
    category = 'Expenses'
  }

  const triggerDelete = () => {
    onDeleteFunction(id, optionId, amount)
  }
  return (
    <li className="table-heading-container">
      <p className="table-column">{title}</p>
      <p className="table-column">{amount}</p>
      <p className="table-column">{category}</p>
      <button
        type="button"
        onClick={triggerDelete}
        className="btn-element"
        data-testid="delete"
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png "
          className="delete-button"
          alt="delete"
        />
      </button>
    </li>
  )
}

export default TransactionItem
