export function DayNightMode() {
  let darkMode = document.querySelector('.night__button')
  let body = document.querySelector('body')
  let lightMode = document.querySelector('.light__button')

  lightMode?.addEventListener('click', () => {
    body.classList.add('light-mode')
    darkMode.classList.remove('displaynone')
    lightMode.classList.add('displaynone')
  })

  darkMode?.addEventListener('click', () => {
    body.classList.remove('light-mode')
    lightMode.classList.remove('displaynone')
    darkMode.classList.add('displaynone')
  })
}
