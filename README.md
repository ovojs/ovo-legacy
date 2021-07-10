# OvO

OvO 是一款小巧的 web 端评论插件。感谢 [OωO](https://github.com/DIYgod/OwO) 的启发。

[![age](https://wakatime.com/badge/github/ovojs/OvO.svg)](https://wakatime.com/badge/github/ovojs/OvO) [![NPM](https://img.shields.io/npm/v/@ovojs/ovo)](https://npmjs.com/package/@ovojs/ovo) [![gzip size](https://img.badgesize.io/https:/unpkg.com/@ovojs/ovo?compression=gzip)](https:/unpkg.com/@ovojs/ovo)

## 使用

### 在浏览器中使用

OvO 使用 [unpkg](https://unpkg.com) 提供的 CDN 服务存放打包文件。

先通过 `script` 和 `link` 标签导入 OvO：

```html
<link rel="stylesheet" href="https://unpkg.com/@ovojs/ovo/dist/style.css">
<script src="https://unpkg.com/@ovojs/ovo"></script>
```

然后在再实例化一个 OvO 对象：

```javascript
new OvO({
  target: document.getElementById('ovo'),
  props: {
    emoji: "emoji url",
    server: "server url",
    placeholder: "说点什么吧～",
    timeout: 10000
  }
})
```

其中，`emoji` 和 `server` 分别是表情资源路径和服务端接口，OvO 本身不提供服务端程序，需要由用户自己编写，或使用大佬们开发的 OvO [第三方服务端](https://github.com/ovojs/OvO#第三方服务端)，具体服务端开发规范见[服务端](https://github.com/ovojs/OvO#服务端)。

另外，OvO 提供一个默认的表情资源和一个用于测试的服务端接口地址，如下：

- emoji (感谢 [芒果弟弟](https://dejavu.moe) 提供的 cdn 资源)

```bash
https://cdn.jsdelivr.net/gh/DejavuMoe/DejavuMoe/emoji.json
```

- server

```bash
https://www.fastmock.site/mock/112f2e694fa5334c4d698ce22a512405/ovo
```

具体示例程序见 [examples/vanilla](https://github.com/ovojs/OvO/blob/main/examples/vanilla/index.html)

最后，`placeholder` 和 `timeout` 分别表示输入框中默认显示的文字和请求超时时间，若在 timeout 秒内，服务端没有响应，则 OvO 会中断请求。

### 作为 ESM 使用

OvO 使用 [Svelte](https://svelte.dev) 开发，且支持 ES Module 导入方式，同时可在 React 和 Vue 中使用，如下表所示

| Package                          | Version                                                      | Gzip Size                                                    |
| :------------------------------- | :----------------------------------------------------------- | :----------------------------------------------------------- |
| [@ovojs/ovo](./)                 | [![NPM](https://img.shields.io/npm/v/@ovojs/ovo)](https://npmjs.com/package/@ovojs/ovo) | [![gzip size](https://img.badgesize.io/https:/unpkg.com/@ovojs/ovo?compression=gzip)](https:/unpkg.com/@ovojs/ovo) |
| [@ovojs/react](./packages/react) | [![NPM](https://img.shields.io/npm/v/@ovojs/react)](https://npmjs.com/package/@ovojs/react) | [![gzip size](https://img.badgesize.io/https:/unpkg.com/@ovojs/react?compression=gzip)](https:/unpkg.com/@ovojs/react) |
| [@ovojs/vue](./packages/vue)     | [![NPM](https://img.shields.io/npm/v/@ovojs/vue)](https://npmjs.com/package/@ovojs/vue) | ![gzip size](https://img.badgesize.io/https:/unpkg.com/@ovojs/vue?compression=gzip) |

#### Svelte

```bash
npm i @ovojs/ovo
```

```svelte
<script>
  import OvO from "@ovojs/ovo";
  import "@ovojs/ovo/dist/style.css";
  
  let server = "your server address";
  let placeholder = "说点什么吧~";
  let timeout = 10000;
</script>

<OvO {server} {placeholder} {timeout} />
```

#### React

```bash
npm i @ovojs/react
```

```js
import OvO from "@ovojs/react";
import "@ovojs/react/dist/style.css";

function App() {
  return (
    <OvO
      server="your server address",
      placeholder="说点什么吧～",
      timeout=10000
    />
  )
}
```

#### Vue

```bash
npm i @ovojs/vue
```

```vue
<template>
  <OvO :server="server" :placeholder="placeholder" :timeout="timeout" />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import OvO from "@ovojs/vue";
import "@ovojs/vue/dist/style.css";

export default defineComponent({
  name: 'App',
  components: {
    OvO
  },
  data() {
    return {
      server: "your server address",
      placeholder: "说点什么吧～",
      timeout: 10000
    }
  }
})
</script>
```



### 自定义主题色

OvO 直接使用 [CSS 变量](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties) 来控制主题色，默认为亮色，在您的项目中，可以通过下面几个 CSS 变量来覆盖 OvO 的默认颜色配置。

```scss
--ovo-ft: #444;        // 文字颜色
--ovo-bdr: #ddd;       // 边框颜色
--ovo-bg: #fff;        // 背景颜色
--ovo-bg-hvr: #eee;    // hover 时的背景色
--ovo-pm: #08c;        // a 标签的文字颜色 
--ovo-tag: #f7f7f7;    // span 的文字颜色
--ovo-trans-sec: .5s;  // 颜色过度时间
```

[一个暗黑主题色的示例](https://github.com/ovojs/OvO/blob/main/examples/svelte/src/global.css#L16)

## 反馈

若您对 OvO 有什么改进建议或使用中遇到问题，欢迎在 [Issues](https://github.com/ovojs/OvO/issues) 处发言，或者直接加入 QQ 群 248037506 与大佬们进行互动 🤺。

## 服务端

引入服务端的目的是避免将某些数据暴露给浏览器，如第三方数据存储平台的密钥等数据。同时在服务端可以实现限流和禁IP策略，从而防止用户通过接口恶意刷评论。进一步，将 XSS 过滤的代码放在服务端中，可以减小评论插件打包后的体积。另外，在服务端上，用可以自行实现一些个性化功能，如给被@的用户发送消息通知等等。

### 概念

OvO 服务端必须要实现 XSS 过滤和数据存储功能，可以实现消息通知功能。关于不开发官方服务端程序的原因：本人没(太)时(菜)间(了)！😁

- XSS 过滤

XSS 过滤 (Cross-site scripting filtering) 主要为了防止用户在评论内容中使用一些 HTML 标签或 JS 脚本恶意攻击被评论网站，具体原理见 [XSS MDN](https://developer.mozilla.org/en-US/docs/Glossary/Cross-site_scripting)。当服务端收到来自插件的评论内容时，需要先擦除内容中像 `script` 、`iframe` 等标签内容，然后才能将过滤后的数据存入数据库中。

- 数据存储

评论本质是一种树形的数据结构，容易想到的是将评论存储在像 MangoDB 这样的文档数据库中，数据结构如下 (为方便理解，只显示了核心字段)

```javascript
{
  "_id": ObjectId,
  "content": "评论内容",
  "children": [
    {
      "_id": ObjectId,
      "content": "评论内容",
      "children": []
    }
  ]
}
```

这种存储方式对查询十分方便，只需要一次查找操作就能获取到该条评论和该条评论下的所有评论，且也很便于前端进行评论的树形渲染。

另一种存储方案，也是本人较推荐的一种方案，是将评论拆分为 `评论` 和 `回复` 两类，分别存储在两张关系型数据库表中。如下表所示  (为方便理解，只显示了核心字段)

**评论表：**

| 字段    | 含义                     |
| :------ | :----------------------- |
| id      | 评论 ID (唯一)           |
| sid     | 评论对象的 ID，如文章 ID |
| content | 评论内容                 |

**回复表：**

| 字段    | 含义                        |
| :------ | :-------------------------- |
| id      | 回复 ID (唯一)              |
| sid     | 同评论表的 sid              |
| cid     | 回复对象的 ID (评论表的 ID) |
| rid     | 回复对象的 ID (回复表的 ID) |
| content | 回复内容                    |

从表中可以看出，对文章的评论就是评论，对评论的回复就是回复，对回复的回复也是回复。在回复表中，当 `rid` 为空 `cid` 不为空时，表示该条是对某条评论的回复；当 `rid` 不为空时，表示该条是对某条评论下的某条回复的回复。

这种方案拥有更好的灵活性，因为我们不太可能会一下子就获取所有的评论数据进行显示，更多时候是先获取前几条评论，然后等待用户点击 ”显示更多评论“ 之类的按钮，再继续获取剩下的评论内容。

且我们也不太需要一下子就将所有的回复显示出来，当用户点在查看某条评论下的回复时再去请求对应的回复数据才是比较合理的。

另外，可以看到 OvO 对评论的显示，并不是完全按照评论层级关系嵌套显示的，而是将所有的回复 (包括对回复的回复) 都 “拍平” 显示在第二层，及树高不大于 2。这样从某种程度上牺牲了评论结构的可读性，但使得整个页面布局更加协调。

- 消息通知

OvO 通过 `@username` 来表示需要被通知的用户，服务端在收到一条评论或回复请求时，需要解析出评论或回复内容中每个 `@` 后的用户名，然后在数据库中查找这些用户的 Email 地址，然后将该条评论或回复的内容和一些上下文通过邮件发送给这些用户。邮箱地址来源于在插件中填写的邮箱地址。

**Note**: 根据上述逻辑，服务端需要在用户表中将用户名设置为唯一 (unique)。

### 接口

#### 获取评论

- 路径：`/comment`

- 方法：`GET`

- 请求示例：

```
GET https://yourserver.com/comment?domain=xjj.pub&path=/post/1&page=0
```

- 响应示例：

```javascript
{
  "commments": [{
    "id": 1,
    "domain": "xjj.pub", // 该条评论发布的网站域名，下同
    "path": "/post/1",   // 该条评论发布的网页路径，下同
    "content": "HTML格式评论内容",
    "ctime": "2021-07-01 08:00:00", // 发布时间，下同
    "user": {
      "name": "XJJ",
      "website": "https://xjj.pub"
    },
    "children": [{
      "id": 1,
      "cid": 1,    // 被回复评论的ID
      "rid": null, // 若rid为null，则说明该条回复的对象是评论，否则为回复
      "content": "HTML格式回复内容",
      "ctime": "2021-07-01 09:00:00",
      "user": {
        "name": "Dejavu",
        "website": "https://dejavu.moe"
      }
    }]
  }],
  "done": false    // 若已经请求到最后一条评论，则该字段为true
}
```

- 限制：
  - 响应数据不能含有用户邮箱地址！
  - 每个请求获取的评论数不大于10！
  - 响应的 content 必须是经过XSS过滤后的！

#### 发布评论

- 路径：`/comment`
- 方法：`POST`
- 请求示例：

```javascript
{
  "domain": "xjj.pub",
  "path": "/post/1",
  "content": "HTML格式的评论内容",
  "user": {
    "name": "XJJ",
    "website": "https://xjj.pub",
    "email": "i@xjj.pub"
  }
}
```

- 响应示例：

```javascript
{
  "errmsg": null
}
```

#### 发布回复

- 路径：`/reply`
- 方法：`POST`
- 请求示例：

```javascript
{
  "cid": 1,    // 被回复评论的ID
  "rid": null, // 如回复的对象是回复，则rid为该回复的ID，否则为null
  "domain": "xjj.pub",
  "path": "/post/1",
  "content": "HTML格式的评论内容",
  "user": {
    "name": "XJJ",
    "website": "https://xjj.pub",
    "email": "i@xjj.pub"
  }
}
```

- 响应示例：

```javascript
{
  "errmsg": "用户名已存在"
}
```

## 第三方服务端

| Name                                                         | Language | Period   |
| :----------------------------------------------------------- | :------- | :------- |
| [ovo-everyday](https://github.com/HoshinoSuzumi/OvO-everyday) | Python3  | 测试阶段 |

## Q&A

1. 怎么删除评论？

不能删除，除非自己在服务端的数据库中删除。说出去的话就像泼出去的水，在这个熵增的宇宙中是收不回的 /doge。

## 最后

Have fun with OvO！