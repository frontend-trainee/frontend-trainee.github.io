# Gallery Base APP

## 这是什么？

一个前端练习项目 gallery，完全部署在 github pages，以微前端方式架构。

- base 应用：gallery 项目展示画廊
- micro 应用(s)：N X 前端项目（不同的 github repo，部署在 gh-pages）

## 来由

众所周知...前端技术 N 多&更新迭代速度堪比 🚀 。虽然说基础牢固可以很淡定，但谁又没有个手痒想追下潮流的时候呢？

对于前端新手来说，是不是得练习不同的技术栈呢？

单纯的多页应用明显不满足该需求。

于是，一种技术栈 -> 一个项目 -> 一个 github repo。

有一天你突发奇想 ✨，想把自己的项目汇总起来，给走过路过的朋友展示一下你的英雄池（噢不，技术栈）的深度和广度 💪

这时候你发现你有两种选择：

- 超链接引入
- iframe

有没有更酷的想法呢？
是不是想到了微前端

那么怎么把 github pages 和微前端结合起来呢？请看下面内容 + 仓库 code

> 注：以上只是一种应用场景。主要是探索一种 微前端 + github pages 的社区（~~白嫖~~）架构。
>
> 这里谢谢善良的好心人 github 提供免费的静态部署服务

## 可行性

- 在同一个 user/organization 下都是同一个域名，例如 frontend-trainee.github.io，省去了 **跨域** 的问题
- 路由，使用 hash 模式，不会请求资源，而是会响应微前端
  > 使用 history 路由，gh-pages 会直接 404
- 构建时注意 base

## 目前进度

- [x] base 应用
- micro 应用
  - [x] react + webpack
  - [] vue

## 使用技术

微前端使用 [qiankun](https://qiankun.umijs.org/zh/guide) 方案

base 应用技术栈为

- [vite](https://cn.vitejs.dev/guide/)，极速构建（虽然 micro 应用目前还不支持 vite，但主应用不影响）
- [react](https://zh-hans.reactjs.org/)
- [typescript](https://www.typescriptlang.org/)
- [react-router-dom](https://www.npmjs.com/package/react-router-dom)，简单，够用就行
