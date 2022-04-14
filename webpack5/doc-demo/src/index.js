// import _ from 'lodash'
// import './style.css'
// import Icon from './icon.png'
// import json from './data.json5'
// import A from './moduleA'
// import B from './moduleB'

// console.log(json.title); // output `JSON5 Example`
// console.log(json.owner.name); // output `Tom Preston-Werner`

import _ from 'lodash';
import Print from './print';

 function component() {
   const element = document.createElement('div');

   // lodash 是由当前 script 脚本 import 进来的
   element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.onclick = Print.bind(null, 'Hello webpack');

   return element;
 }

 document.body.appendChild(component());

// 动态导入
// function getComponent() {
//   const element = document.createElement('div');
//   return import('lodash')
//   .then(({ default: _ }) => {
//     const element = document.createElement('div');

//     element.innerHTML = _.join(['Hello', 'webpack'], ' ');  
//     return element;
//   })
//   .catch((error) => 'An error occurred while loading the component');    
// }

// getComponent().then((component) => {
//   document.body.appendChild(component);
// });