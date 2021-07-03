# OvO

OvO 是一款小巧的 web 端评论插件。感谢 [OωO](https://github.com/DIYgod/OwO) 的启发。

## 使用

### 在浏览器中使用

OvO 使用 [unpkg](https://unpkg.com) 提供的 CDN 服务存放打包文件。

先通过 `script` 和 `link` 标签导入 OvO：

```html
<link rel="stylesheet" href="https://unpkg.com/@ovojs/ovo/dist/style.css">
<script src="https://unpkg.com/@ovojs/ovo"></script>
```

然后在实例化一个 OvO 对象：

```javascript
new OvO({
  target: document.getElementById('ovo'),
    props: {
      emoji: "emoji url",
      server: "server url"
    }
})
```

其中，`emoji` 和 `server` 分别是表情资源路径和服务端接口，OvO 本身不提供服务端程序，需要由用户自己编写，或使用大佬们开发的 OvO 服务端 (目前还没有😁)，具体服务端开发规范见 [For contributors]()。

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

### 作为 ESM 使用

OvO 支持 ES Modules 导入方式，通过 npm 下载 (或其他类 npm 工具，如 yarn, pnpm)

```bash
npm i @ovojs/ovo
```

OvO 本身使用 [Svelte](https://svelte.dev) 开发，但可以利用该方法移植到为 React 或 Vue 的组件 (下个版本发布)。

## 反馈

若您对 OvO 有什么改进建议或使用中遇到问题，欢迎在 [Issues](https://github.com/ovojs/OvO/issues) 处发言，或者直接加入 QQ 群 248037506 与大佬进行互动 🤺。

## 关于服务端