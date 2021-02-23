## React技术栈 网易云音乐PC Web项目

### 1. 项目简介

使用React编写的网易云音乐PC Web项目，接口来源于开源接口。

因为后端跨域请求解决不了，所以我没有部署到GitHub Pages，不过可以完美的在本地运行，你可以clone下来自己体验一下

项目已经完成功能如下：

#### 推荐页面：

- 轮播图
- 热门推荐
- 新碟上架
- 榜单


![推荐页面1.png](https://i.loli.net/2021/02/23/6JWNxCejOrMRKGl.png)

![推荐页面2.png](https://i.loli.net/2021/02/23/h6QJXxjkqEyaSvb.png)



#### 歌曲搜索:

- 支持搜索网易云音乐的所有音乐

![歌曲搜索.png](https://i.loli.net/2021/02/23/jy1JS8gi5mwhl6r.png)

![歌曲搜索2.png](https://i.loli.net/2021/02/23/4W72ZJ6qfe1SInC.png)



#### 登录:

- 支持网易云音乐账号(手机号)的登录哦，仅供测试使用，其他登录方式目前还没有完善

![登录.png](https://i.loli.net/2021/02/23/mly8ewP7cvKDAsV.png)



#### 歌曲播放：

- 做了歌曲的各种控制（添加音乐到播放列表、音乐暂停、播放、上一首、下一首、进度改变）；
- 做了播放循序切换：顺序播放、随机播放、单曲循环；
- 做了歌词的解析、展示、滚动；

![歌曲播放.png](https://i.loli.net/2021/02/23/gjD6KCL7pY1cqUe.png)



#### 歌曲下载：

- 支持网易云音乐的下载(有些能在当前页面下载，有些会跳到新页面进行手动下载)

![歌曲下载](https://i.loli.net/2021/02/23/5JRbkNimf61DVIw.png)



#### 歌曲详情/评论：

- 歌词展示
- 歌曲评论

![歌曲详情/评论](https://i.loli.net/2021/02/23/lNvPhCImqwKOx1S.png)



#### 排行榜页面：

- 各种榜单的切换；

![排行榜.png](https://i.loli.net/2021/02/23/bha9xw23QJ6rY1e.png)



#### 歌单页面：

![歌单页面.png](https://i.loli.net/2021/02/23/o7emb5d18fFxT9I.png)



### 2. 技术栈

- `React`：用于构建用户界面的 `MVVM` 框架
- `styled-components`：解决组件内容编写样式会影响全局样式导致冲突
- `axios`: 发送网络请求，请求拦截和响应拦截
- `react-router-dom`：为单页面应用提供的路由系统
- `react-router-config`：集中式路径映射表管理
- `redux`：React 集中状态管理，在多个组件共享某些状态时非常方便
- `react-redux`：帮助我们链及`redux`、`react`的辅助工具
- `redux-thunk`: 在`redux`中进行异步请求
- `immutable`：对`reudx`中保存的`state`使用`immutable`进行管理
- `redux-immutable`: 对根目录的`reducer`中`state`进行管理
- `propType`: 校验`props`类型及默认值
- `react-transition-group`: 过渡动画效果



### 3. 项目规范

**项目规范：项目中有一些开发规范和代码风格**

- 文件夹、文件名称统一小写、多个单词以连接符（-）连接；
- `JavaScript`变量名称采用`小驼峰标识`，常量全部使用`大写字母`，组件采用`大驼峰`；
- 全局采用普通`CSS`、局部采用`styled-component`;
- 整个项目不再使用class组件，统一使用函数式组件，并且全面使用Hooks；
- 所有的函数式组件，为了避免不必要的渲染，全部使用`memo`进行包裹；
- 组件内部的状态，使用`useState`；业务数据全部放在`redux`中管理；
- `redux`代码规范如下：
  - `redux`结合`ImmutableJS`
  - 每个模块有自己独立的`reducer`，通过`combineReducer`进行合并；
  - 异步请求代码使用`redux-thunk`；
  - `redux`直接采用`redux hooks`方式编写，不再使用`connect`；
- 网络请求采用`axios`
  - 对`axios`进行二次封装；
  - 所有的模块请求会放到一个请求文件中单独管理；
- 项目使用`AntDesign`
  - 项目中使用了一些`AntDesign`中的组件；



### 4. 项目运行

clone项目：

```
git clone https://github.com/feng-yu-jian/react-web-music.git
```

安装项目依赖：

```shell
# yarn install 出错了请使使用 npm install 
yarn install | npm install
```

项目运行：

``` shell
yarn start   | npm start
```

项目打包

```shell
yarn build   | npm build
```



### 5.展望

后续会完成如下功能

主播电台：

- 电台分类的展示、滚动；
- 不同分类展示不同的数据；
- 电台排行榜展示、分页；

歌手页面：

- 各种歌手分类（没找到接口，还自定义了一些数据）
- 歌手字母分类、对应歌手展示；

新碟上架页面：

- 热门新碟；
- 全部新碟、分页展示；

项目还会存在一点bug，以后会慢慢修复的🎉。









