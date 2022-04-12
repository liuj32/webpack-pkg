// import _ from 'lodash'
// import './style.css'
// import Icon from './icon.png'
// import json from './data.json5'
// import A from './moduleA'
// import B from './moduleB'

// console.log(json.title); // output `JSON5 Example`
// console.log(json.owner.name); // output `Tom Preston-Werner`

function component() {
  const element = document.createElement('div')

 // lodash（目前通过一个 script 引入）对于执行这一行是必需的
 // lodash 在当前 script 中使用 import 引入
  element.innerHTML = 'asdf'
  // element.classList.add('hello');
  // const myIcon = new Image()
  // myIcon.src = Icon
  // element.appendChild(myIcon)
  
  return element
}

document.body.appendChild(component());