import { Navigation } from './nav'
import { Card } from './card'
import { Bookmarks } from './bookmarks'
import { ShowAnswer } from './show-answer'
import { Form } from './form'
import { DayNightMode } from './day-nightmode'

document.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => {
    Navigation()
    Card()
    Bookmarks()
    ShowAnswer()
    Form()
    DayNightMode()
  })
})
