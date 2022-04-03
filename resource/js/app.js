// 入口文件
// 模块引入

import * as m1 from './31_module_1.js'
import { yao, show as show2 } from "./31_module_2.js"
import m3 from './31_module_3.js'



console.log(m1.hui.name)
console.log(m1.hui.age)
m1.show()

console.log(yao.name)
console.log(yao.age)
show2()

console.log(m3.ga.name)
console.log(m3.ga.age)
m3.show()