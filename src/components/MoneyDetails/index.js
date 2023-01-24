// Write your code here
import './index.css'

const MoneyDetails = props => {
  const {income, expenses} = props

  return (
    <div className="money-details-container">
      <div className="balance-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
          alt="balance"
          className="money-details-image"
        />
        <div>
          <p className="heading">Your Balance</p>
          <p className="money-details" data-testid="balanceAmount">
            Rs {income - expenses}
          </p>
        </div>
      </div>

      <div className="income-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
          alt="income"
          className="money-details-image"
        />
        <div>
          <p className="heading">Your Income</p>
          <p className="money-details" data-testid="incomeAmount">
            Rs {income}
          </p>
        </div>
      </div>
      <div className="expenses-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
          alt="expenses"
          className="money-details-image"
        />
        <div>
          <p className="heading">Your Expenses</p>
          <p className="money-details" data-testid="expensesAmount">
            Rs {expenses}
          </p>
        </div>
      </div>
    </div>
  )
}

export default MoneyDetails
