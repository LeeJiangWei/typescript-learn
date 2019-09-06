# Env Setup
#### `npm init -y`
创建 `package.json`
#### `tsc --init`
创建 `tsconfig.json`
#### `npm install nodemon concurrently`
- nodemon：跟踪文件的变化并执行
- concurrently：同时执行多条npm命令
#### `mkdir build`
用于存放编译后的js代码
#### `mkdir src`
用于存放ts源代码
#### 设置ts编译器
更改`tsconfig.json`中的outDir和rootDir属性
#### 设置运行脚本
设置`package.json`中的scripts属性
#### `npm install @types/node`
安装nodejs标准库type文件
# Start command:`npm start`