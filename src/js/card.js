//import { ShowAnswer } from './show-answer'
export function Card() {
  const placeholder = get('[data-js=placeholder]')
  const card = [{}, {}, {}]

  card.forEach(createCard)

  function createCard(element) {
    const newCard = createElement({
      type: 'section',
      className: 'card',
      text: '',
    })

    const headline = createElement({
      type: 'h2',
      className: 'card__headline',
      text: 'Question 1',
      target: newCard,
    })

    const question = createElement({
      type: 'paragraph',
      className: 'card__text card__text--question',
      text: 'What is the difference between method and property?',
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

    const answer = createElement({
      type: 'paragraph',
      className: 'content displaynone',
      text:
        'Properties are basically information that an object has. Methods are what an object can do. Example: You have an instance (object) from a class named Vehicle, which can represent a car, a truck or a motorbike.',
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
      text: 'tag 1',
      target: ul,
    })
    const tag2 = createElement({
      type: 'li',
      className: 'tag-list li',
      text: 'tag 2',
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
}
