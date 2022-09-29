import {Component} from 'react'
import './index.css'

class CoinToss extends Component {
  state = {
    headCount: 0,
    tailCount: 0,
    total: 0,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/heads-img.png',
  }

  changeImage = () => {
    const {headCount, tailCount, imageUrl, total} = this.state
    const tossResult = Math.floor(Math.random() * 2)
    if (tossResult === 0) {
      this.setState(prevState => ({
        headCount: prevState.headCount + 1,
        total: prevState.total + 1,
        imageUrl: 'https://assets.ccbp.in/frontend/react-js/heads-img.png',
      }))
    } else {
      this.setState(prevState => ({
        tailCount: prevState.tailCount + 1,
        total: prevState.total + 1,
        imageUrl: 'https://assets.ccbp.in/frontend/react-js/tails-img.png',
      }))
    }
  }

  render() {
    const {headCount, tailCount, imageUrl, total} = this.state
    return (
      <div className="bg-container">
        <div className="card-container">
          <h1 className="heading">Coin Toss Game</h1>
          <p className="paragraph">Heads (or) Tails</p>
          <img src={imageUrl} className="images" alt="toss result" />
          <button type="button" className="button" onClick={this.changeImage}>
            Toss Coin
          </button>
          <div className="list-elements">
            <p className="elements">Total: {total}</p>
            <p className="elements">Heads: {headCount}</p>
            <p className="elements">Tails: {tailCount}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
