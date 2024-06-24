import './index.css'

const FaqItem = props => {
  const {faqItem, showAnswerText, isShowed} = props
  const {answerText, questionText, id} = faqItem

  const showAnswer = () => {
    showAnswerText(id)
  }

  return (
    <li>
      <div>
        <h1>{questionText}</h1>
        {isShowed === false ? (
          <button type="button" className="plus-button" onClick={showAnswer}>
            <img
              src="https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png"
              alt="plus"
            />
          </button>
        ) : (
          <button type="button" onClick={showAnswer}>
            <img
              src="https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png"
              alt="minus"
            />
          </button>
        )}
      </div>
      {isShowed && <hr />}
      {isShowed && <p>{answerText}</p>}
    </li>
  )
}

export default FaqItem
