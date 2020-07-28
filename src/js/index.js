import { Navigation } from './nav'
import { Card } from './card'
import { Bookmarks } from './bookmarks'
import { Form } from './form'
import { DayNightMode } from './day-nightmode'

document.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => {
    Navigation()
    Card()
    Bookmarks()
    Form()
    DayNightMode()
  })
})
