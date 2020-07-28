const placeholder = get('[data-js=placeholder]')

export function Card() {
  const card = [{}, {}, {}]
  card.forEach(createCard)
}

function createCard({ question, answer, tags }) {
  const newCard = createElement({
    type: 'section',
    className: 'card',
    text: '',
  })

  const headline = createElement({
    type: 'h2',
    className: 'card__headline',
    text: 'Question',
    target: newCard,
  })

  const questionInput = createElement({
    type: 'paragraph',
    className: 'card__text card__text--question',
    text: question,
    target: newCard,
  })

  const answerButton = createElement({
    type: 'button',
    className: 'card__answer-button',
    text: 'Show Answer',
    target: newCard,
  })

  answerButton.addEventListener('click', function () {
    this.classList.toggle('active')
    let content = this.nextElementSibling
    if (content.style.display === 'block') {
      content.style.display = 'none'
      answerButton.textContent = 'Show answer'
    } else {
      content.style.display = 'block'
      answerButton.textContent = 'Hide answer'
    }
  })

  const answerInput = createElement({
    type: 'paragraph',
    className: 'content displaynone',
    text: answer,
    target: newCard,
  })

  const ul = createElement({
    type: 'ul',
    className: 'tag-list',
    text: '',
    target: newCard,
  })

  const tag1 = createElement({
    type: 'li',
    className: 'tag-list li',
    text: tags,
    target: ul,
  })
}

function createElement({
  type = 'section',
  className = '',
  text = '',
  target = placeholder,
} = {}) {
  const el = document.createElement(type)
  el.className = className
  el.textContent = text
  target.appendChild(el)
  return el
}

function get(selector) {
  return document.querySelector(selector)
}
