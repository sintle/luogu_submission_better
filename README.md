# 插件下载地址

- <https://greasyfork.org/zh-CN/scripts/530997-%E6%B4%9B%E8%B0%B7%E6%8F%90%E4%BA%A4%E8%AE%B0%E5%BD%95%E6%98%BE%E7%A4%BA%E4%BC%98%E5%8C%96>
- <https://raw.githubusercontent.com/chenyuxuan2009/luogu_submission_better/refs/heads/main/luogu_submission_better.js>

- <https://gitee.com/cyx2009/luogu_submission_better/raw/main/luogu_submission_better.js>

如果前两个都打不开可以选择使用第三个 gitee 的镜像仓库链接。

如果 gitee 链接打开不是源码，不要直接点击链接，复制链接地址到浏览器地址栏进入。

插件是油猴脚本，需要先安装 TamperMonkey 插件。安装油猴插件自行搜索相关教程。

# 效果展示

![](https://cdn.jsdelivr.net/gh/chenyuxuan2009/luogu_submission_better/example1.png)

![](https://cdn.jsdelivr.net/gh/chenyuxuan2009/luogu_submission_better/example2.png)

其实都是动图，懒得录动图效果了（

前者可以安装插件成功之后在 <https://www.luogu.com.cn/record/72597888> 查看。

后者由于 Judging 状态难以维持，无法提供长久有效的链接查看效果。可以写题的时候留意一下。

# 常见问题

- 为什么图片没有加载？图片加载太慢怎么办？

  源码提供了几个镜像源。

  ```js
  // let jsdelivr = 'https://cdn.jsdelivr.net'
  // let jsdelivr = 'https://cdn.mengze.vip'
  let jsdelivr = 'https://jsdelivrcn.netlify.app/'
  ```

  如果需要修改，注释掉对应的源，把想要的源注释取消即可。

  例如需要使用原站，就改为

  ```js
  let jsdelivr = 'https://cdn.jsdelivr.net'
  // let jsdelivr = 'https://cdn.mengze.vip'
  // let jsdelivr = 'https://jsdelivrcn.netlify.app/'
  ```

  即可。

  建议先直接访问一下你想要切换的源。目前版本默认用 jsdelivr 的镜像站加速了。

- 如何修改图片？

  源码定义了如下内容：

  ```js
  let AC = `${jsdelivr}/gh/chenyuxuan2009/luogu_submission_better/AC.gif`
  let WA = `${jsdelivr}/gh/chenyuxuan2009/luogu_submission_better/WA.gif`
  let TLE = `${jsdelivr}/gh/chenyuxuan2009/luogu_submission_better/TLE.gif`
  let MLE = `${jsdelivr}/gh/chenyuxuan2009/luogu_submission_better/MLE.gif`
  let RE = `${jsdelivr}/gh/chenyuxuan2009/luogu_submission_better/RE.gif`
  let OLE = `${jsdelivr}/gh/chenyuxuan2009/luogu_submission_better/OLE.gif`
  let UKE = `${jsdelivr}/gh/chenyuxuan2009/luogu_submission_better/UKE.gif`
  let Judging = `${jsdelivr}/gh/chenyuxuan2009/luogu_submission_better/Judging.gif`
  ```

  把对应状态的链接改成你自己的图片即可。