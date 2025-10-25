# Tailwind框架
## 1.简介
Tailwind框架可以帮助我们快速创建美观的界面，而不是像传统的编写方式一样，先设定class，再根据class进行相应的更改。
通过使用Tailwind，我们可以在HTML中直接使用类名来定义样式，从而实现快速开发和原型设计。
将格式彻底“原子化”你可以单个更改单个元素，自由度更高。
## 2.安装Tailwind
win+r 输入cmd，打开命令行工具，进入项目根目录，执行以下命令：
```bash
npm install -D tailwindcss postcss autoprefixer
```
## 3.基础教学

tailwind的用法是在html标签中使用class格式直接定义相应的格式

如果你想更改一个元素的表达形式，你可以直接更改元素的class，而不是

在css文件里先定义再更改，极大的提高了效率
### 1.文本修改
- text-{size}：设置文本大小，如text-xl,text-2xl,text-3xl等

- text-{color}：设置文本颜色，如text-blue,text-red,text-green等

- text-{alignment}：设置文本对齐方式，如text-center,text-left,text-right等

### 2.间距
- p-{size}：设置元素的内边距，如p-4,p-6等
- m-{size}：设置元素的外边距，如m-4,m-6等
### 3.布局
- flex：设置元素为弹性盒子布局
- items-{alignment}：设置弹性盒子内项目的对齐方式，如items-center , items-start , items-end等
- justify-{alignment}：设置弹性盒子内项目的主轴对齐方式，如justify-center , justify-start , justify-end等

### 4.位置调整
- ml-{size}：设置元素的左外边距，如ml-4,ml-6等
例子：设置为ml-auto的话会自动跑到最右边