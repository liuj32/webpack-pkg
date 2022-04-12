# rollup

## 配置文件选项
1. external<br>
作用：但可能我们仍然想要某些库保持外部引用状态，这时我们就需要使用external属性，来告诉rollup.js哪些是外部的类库。

## 插件
1. resolve插件<br>
作用：将我们编写的源码与依赖的第三方库进行合并

2. commonjs插件<br>
作用：rollup.js编译源码中的模块引用默认只支持 ES6+的模块方式import/export。然而大量的npm模块是基于CommonJS模块方式，这就导致了大量 npm模块不能直接编译使用。
因此使得rollup.js编译支持npm模块和CommonJS模块方式的插件就应运而生：@rollup/plugin-commonjs。

3. babel插件<br>
作用：转化es6代码

4. json插件<br>
作用：识别json文件

## tree-shaking机制
作用：它动态地清除没有被使用过的代码，使得代码更加精简，从而可以使得我们的类库获得更快的加载速度。