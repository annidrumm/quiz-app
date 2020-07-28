import { createCard } from './card'
export function Form() {
  const question = document.querySelector('[data-js=question]')
  const answer = document.querySelector('[data-js=answer]')
  const tags = document.querySelector('[data-js=tags]')
  const fromSubmit = document.querySelector('.submit-button')

  fromSubmit?.addEventListener('submit', function (event) {
    question = question.value
    answer = answer.value
    tags = tags.value.split(',').map((tags) => tags.trim())
    createCard({ question, answer, tags })
    event.preventDefault()
    resetForm()
  })
}
