# git的用法
git是一个分布式版本控制系统，广泛用于代码管理和协作开发。
通俗的说就是你可以使用git记录代码的变更，当你不小心错删代码时，可以通过git
进行“回档”。而不是只能不断的撤销。git可以实现多人协同开发，实现分工协调。


以下是一些常用的git命令及其用法：
## 配置用户信息
在使用git之前，首先需要配置用户的姓名和邮箱地址，这些信息会被记录在每次提交中。
```bash
git config --global user.name "Your Name"
git config --global user.email "you@example.com"
```
Your Name和you@example.com分别替换为你的姓名和邮箱地址。
（不要真的写成Your Name和you@example.com）
## 初始化仓库
在项目根目录下进行初始化命令
```bash
git init
```

这会创建一个新的Git仓库。

## 克隆仓库
