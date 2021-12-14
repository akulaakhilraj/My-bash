// Write your code here
import {Component} from 'react'
import './index.css'
import {randomInt} from 'crypto'

class EvenOddApp extends Component {
  state = {count: 0}

  onIncrement = () => {
    this.setState(prevState => ({count: prevState.count + randomInt}))
  }

  render() {
    const {count} = this.state

    return (
      <div className="bg-container">
        <div className="card-container">
          <h1>Count {count} </h1>

          <h1>Count is Even/Odd </h1>
          <div>
            <button
              className="button-name"
              type="button"
              onClick={this.onIncrement}
            >
              Increment
            </button>
          </div>
          <p>*Increase by Random Number Between 0 to 100</p>
        </div>
      </div>
    )
  }
}

export default EvenOddApp
