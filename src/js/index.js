// start bookmarks

let bookmarkButton = document.querySelector('#bookmark1')
bookmarkButton.addEventListener('click', () =>
  bookmarkButton.classList.toggle('card__bookmark-button--active')
)

let bookmarkButton2 = document.querySelector('#bookmark2')
bookmarkButton2.addEventListener('click', () =>
  bookmarkButton2.classList.toggle('card__bookmark-button--active')
)

let bookmarkButton3 = document.quer sySelector('#bookmark3')
bookmarkButton3.addEventListener('click', () =>
  bookmarkButton3.classList.toggle('card__bookmark-button--active')
)

// close bookmarks

// start navigation

const navHome = document.querySelector('#nav_home')
const navBookmarks = document.querySelector('#nav_bookmark')
const navCreate = document.querySelector('#nav_create')
const navProfile = document.querySelector('#nav_profile')

const indexPage = document.querySelector('#home')
const indexBookmarks = document.querySelector('#bookmarks')
const indexCreate = document.querySelector('#create')
const indexProfile = document.querySelector('#profile')

const headerHome = document.querySelector('#header1')
const headerBookmark = document.querySelector('#header2')
const headerCreate = document.querySelector('#header3')
const headerProfile = document.querySelector('#header4')

navHome.addEventListener('click', () => {
  indexPage.classList.remove('displaynone')
  indexBookmarks.classList.add('displaynone')
  indexCreate.classList.add('displaynone')
  indexProfile.classList.add('displaynone')
})

navHome.addEventListener('click', () => {
  headerHome.classList.remove('displaynone')
  headerBookmark.classList.add('displaynone')
  headerCreate.classList.add('displaynone')
  headerProfile.classList.add('displaynone')
})

navBookmarks.addEventListener('click', () => {
  headerBookmark.classList.remove('displaynone')
  headerHome.classList.add('displaynone')
  headerCreate.classList.add('displaynone')
  headerProfile.classList.add('displaynone')
})

navBookmarks.addEventListener('click', () => {
  indexBookmarks.classList.remove('displaynone')
  indexPage.classList.add('displaynone')
  indexCreate.classList.add('displaynone')
  indexProfile.classList.add('displaynone')
})

navCreate.addEventListener('click', () => {
  indexCreate.classList.remove('displaynone')
  indexPage.classList.add('displaynone')
  indexBookmarks.classList.add('displaynone')
  indexProfile.classList.add('displaynone')
})

navCreate.addEventListener('click', () => {
  headerCreate.classList.remove('displaynone')
  headerBookmark.classList.add('displaynone')
  headerProfile.classList.add('displaynone')
  headerHome.classList.add('displaynone')
})

navProfile.addEventListener('click', () => {
  indexProfile.classList.remove('displaynone')
  indexPage.classList.add('displaynone')
  indexBookmarks.classList.add('displaynone')
  indexCreate.classList.add('displaynone')
})

navProfile.addEventListener('click', () => {
  headerProfile.classList.remove('displaynone')
  headerCreate.classList.add('displaynone')
  headerBookmark.classList.add('displaynone')
  headerHome.classList.add('displaynone')
})

// close navigation
