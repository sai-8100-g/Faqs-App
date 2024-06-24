import {Component} from 'react'

import FaqItem from '../FaqItem'

import './index.css'

class Faqs extends Component {
  constructor(props) {
    super(props)
    this.state = {
      faqsList: props.faqsList,
      answerId: [],
    }
  }

  showAnswerText = id => {
    const {answerId} = this.state
    if (answerId.includes(id)) {
      const newIds = answerId.filter(each => each !== id)
      this.setState({answerId: newIds})
    } else {
      this.setState(prevState => ({answerId: [...prevState.answerId, id]}))
    }
  }

  render() {
    const {faqsList, answerId} = this.state
    return (
      <div className="main">
        <div className="content">
          <h1>FAQs</h1>
          <ul>
            {faqsList.map(eachObj => (
              <FaqItem
                faqItem={eachObj}
                isShowed={answerId.includes(eachObj.id)}
                key={eachObj.id}
                showAnswerText={this.showAnswerText}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Faqs
