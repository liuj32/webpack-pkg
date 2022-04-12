import hello from './hello.js'
const div = document.createElement('div')
div.innerHTML = hello()

document.body.appendChild(div)


if (module.hot) {
  module.hot.accept('./hello.js', function() {
    div.innerHTML = hello()
  })
}
