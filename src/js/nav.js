// Navigation

export function Navigation() {
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

  // Function
  navHome.addEventListener('click', () => {
    indexPage.classList.remove('displaynone')
    indexBookmarks.classList.add('displaynone')
    indexCreate.classList.add('displaynone')
    indexProfile.classList.add('displaynone')
    headerHome.classList.remove('displaynone')
    headerBookmark.classList.add('displaynone')
    headerCreate.classList.add('displaynone')
    headerProfile.classList.add('displaynone')
  })

  navBookmarks.addEventListener('click', () => {
    indexBookmarks.classList.remove('displaynone')
    indexPage.classList.add('displaynone')
    indexCreate.classList.add('displaynone')
    indexProfile.classList.add('displaynone')
    headerBookmark.classList.remove('displaynone')
    navBookmarks.classList.add('svg-filled-active')
    headerHome.classList.add('displaynone')
    headerCreate.classList.add('displaynone')
    headerProfile.classList.add('displaynone')
  })

  navCreate.addEventListener('click', () => {
    indexCreate.classList.remove('displaynone')
    indexPage.classList.add('displaynone')
    indexBookmarks.classList.add('displaynone')
    indexProfile.classList.add('displaynone')
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
    headerProfile.classList.remove('displaynone')
    headerCreate.classList.add('displaynone')
    headerBookmark.classList.add('displaynone')
    headerHome.classList.add('displaynone')
  })
}
