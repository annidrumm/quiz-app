import { Navigation } from './nav'

Navigation()

// start bookmarks

let bookmarkButton = document.querySelector('#bookmark1')
bookmarkButton.addEventListener('click', () =>
  bookmarkButton.classList.toggle('card__bookmark-button--active')
)

let bookmarkButton2 = document.querySelector('#bookmark2')
bookmarkButton2.addEventListener('click', () =>
  bookmarkButton2.classList.toggle('card__bookmark-button--active')
)

let bookmarkButton3 = document.querySelector('#bookmark3')
bookmarkButton3.addEventListener('click', () =>
  bookmarkButton3.classList.toggle('card__bookmark-button--active')
)

// close bookmarks

// Start footer filling

let footerBookmark = document.querySelector('.svg-filled')
footerBookmark.addEventListener('click', () =>
  footerBookmark.classList.toggle('svg-filled-active')
)

// End footer filling

// start show answer
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
// End show answer
// start form

const fromSubmit = document.querySelector('.submit-button')
fromSubmit.addEventListener('submit', function (event) {
  event.preventDefault()
  resetForm()
})

// End form

// Start day-nightmode

let darkMode = document.querySelector('.night__button')
let body = document.querySelector('body')
let lightMode = document.querySelector('.light__button')

lightMode.addEventListener('click', () => {
  body.classList.add('light-mode')
  darkMode.classList.remove('displaynone')
  lightMode.classList.add('displaynone')
})

darkMode.addEventListener('click', () => {
  body.classList.remove('light-mode')
  lightMode.classList.remove('displaynone')
  darkMode.classList.add('displaynone')
})
