import { Navigation } from './nav'
import { Bookmarks } from './bookmarks'
//import { ShowAnswer } from './show-answer'
import { Form } from './form'
import { DayNightMode } from './day-nightmode'
import { Arraycard } from './arraycard'

document.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => {
    Navigation()
    Bookmarks()
    // ShowAnswer()
    Form()
    DayNightMode()
    Arraycard()
  })
})
