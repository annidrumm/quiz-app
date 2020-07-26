export function ShowAnswer() {
  let coll = document.getElementsByClassName('card__answer-button')
  let i
  for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener('click', function () {
      this.classList.toggle('active')
      let content = this.nextElementSibling
      if (content.style.display === 'block') {
        content.style.display = 'none'
      } else {
        content.style.display = 'block'
      }
    })
  }
}
