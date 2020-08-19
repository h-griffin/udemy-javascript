// ### IMPORT AND EXPORTS ### 

// person.js
const person ={
    name:'Max'
}
export default person 

// utility.js
export const clean=()=>{console.log('cleaning')}
export const baseData = 10;

// app.js

// default export
import person from './person.js'    // pulls whatever export default is
import prs from './person.js'       // so name does not matter

import {clean} from './utility.js'      // more than one import
import {baseData} from './utility.js'   // needs name specific

// named export
import {something} from './utility.js'

// assign new name
import {something as smth} from './utility.js'

// import all 
import * as bundled from './utility.js'
// bundled.baseData
// bundled.clean



// import something as ..
// 'as' = you choose name
// 'something' = name defined by export