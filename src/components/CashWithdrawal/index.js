// Write your code here
import {Component} from 'react'

import './index.css'

import DenominationItem from '../DenominationItem'

class CashWithdrawal extends Component {
  state = {cash: 2000}

  buttonClick = value => {
    this.setState(prevState => ({cash: prevState.cash - value}))
  }

  render() {
    const {cash} = this.state
    const {denominationsList} = this.props

    return (
      <div className="bg">
        <ul>
          <p className="para">Your Balance</p>
          <p className="para">{cash}</p>
          <p className="para">Withdraw</p>
          <p className="para">CHOOSE SUM (IN RUPEES)</p>
          {denominationsList.map(eachItem => (
            <DenominationItem
              item={eachItem}
              key={eachItem.id}
              buttonClick={this.buttonClick}
            />
          ))}
        </ul>
      </div>
    )
  }
}
export default CashWithdrawal
