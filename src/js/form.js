export function Form() {
  const fromSubmit = document.querySelector('.submit-button')
  fromSubmit?.addEventListener('submit', function (event) {
    event.preventDefault()
    resetForm()
  })
}
