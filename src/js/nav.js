// Navigation
export function Navigation() {
  const navHome = document.querySelector('#nav_home')
  const navBookmarks = document.querySelector('#nav_bookmark')
  const navCreate = document.querySelector('#nav_create')
  const navProfile = document.querySelector('#nav_profile')

  // Pages
  const indexPage = document.querySelector('#home')
  const indexBookmarks = document.querySelector('#bookmarks')
  const indexCreate = document.querySelector('#create')
  const indexProfile = document.querySelector('#profile')

  // Headlines
  const headerHome = document.querySelector('#header1')
  const headerBookmark = document.querySelector('#header2')
  const headerCreate = document.querySelector('#header3')
  const headerProfile = document.querySelector('#header4')

  // Function

  const hideAllSections = () => {
    indexPage.classList.add('displaynone')
    indexBookmarks.classList.add('displaynone')
    indexCreate.classList.add('displaynone')
    indexProfile.classList.add('displaynone')
  }

  const inactiveAllSections = () => {
    navHome.classList.remove('svg-filled')
    navBookmarks.classList.remove('svg-filled')
    navCreate.classList.remove('svg-filled')
    navProfile.classList.remove('svg-filled')
  }

  const hideAllHeadlines = () => {
    headerHome.classList.add('displaynone')
    headerBookmark.classList.add('displaynone')
    headerCreate.classList.add('displaynone')
    headerProfile.classList.add('displaynone')
  }

  navHome?.addEventListener('click', () => {
    hideAllSections()
    inactiveAllSections()
    hideAllHeadlines()
    headerHome.classList.remove('displaynone')
    indexPage.classList.remove('displaynone')
    navHome.classList.add('svg-filled')
  })

  navBookmarks?.addEventListener('click', () => {
    hideAllSections()
    inactiveAllSections()
    hideAllHeadlines()
    indexBookmarks.classList.remove('displaynone')
    navBookmarks.classList.add('svg-filled')
    headerBookmark.classList.remove('displaynone')
  })

  navCreate?.addEventListener('click', () => {
    hideAllSections()
    inactiveAllSections()
    hideAllHeadlines()
    indexCreate.classList.remove('displaynone')
    navCreate.classList.add('svg-filled')
    headerCreate.classList.remove('displaynone')
  })

  navProfile?.addEventListener('click', () => {
    hideAllSections()
    inactiveAllSections()
    hideAllHeadlines()
    indexProfile.classList.remove('displaynone')
    navProfile.classList.add('svg-filled')
    headerProfile.classList.remove('displaynone')
  })
}
