# 插件下载地址

- <https://greasyfork.org/zh-CN/scripts/530997> 或 <https://gf.qytechs.cn/zh-CN/scripts/530997>

  这两个链接是 greasyfork 版本和它的镜像站（镜像站便于国内用户下载）。与 GitHub 仓库建立了 Webhook，理论上也是第一时间更新。

- <https://raw.githubusercontent.com/chenyuxuan2009/luogu_submission_better/refs/heads/main/luogu_submission_better.js>

  这个是 GitHub Raw 链接。是第一时间更新的资源。

- <https://gitee.com/cyx2009/luogu_submission_better/raw/main/luogu_submission_better.js>

  这个是 Gitee Raw 链接。如果链接打开不是源码，不要直接点击链接，复制链接地址到浏览器地址栏进入。

插件是油猴脚本，需要先安装 TamperMonkey 插件。下方列出了部分浏览器链接。更多的请自行查看 <https://www.tampermonkey.net/> 官网。

- <https://chromewebstore.google.com/detail/dhdgffkkebhmkfjojejmpbldmpobfkfo>

- <https://microsoftedge.microsoft.com/addons/detail/iikmkjmpaadaobahmlepeloendndfphd>
- <https://addons.mozilla.org/zh-CN/firefox/addon/tampermonkey/>

分别是 Google Chrome、Microsoft Edge、Mozilla FireFox 的安装。Google Chrome 安装 TamperMonkey 可能需要一些手法，如果你使用 Google Chrome 但是没有什么手法，我在洛谷题目附件传了一份 crx 离线安装的 5.1.1 版本。先下载 [dhdgffkkebhmkfjojejmpbldmpobfkfo_5.1.1.crx](https://www.luogu.com.cn/fe/api/problem/downloadAttachment/azvqp6sa)，然后打开 <chrome://extensions/> 把 crx 文件拖进去。

**请打开浏览器开发者模式或开发人员模式。**

- <chrome://extensions/>
- <edge://extensions/>
- FireFox 大概是默认开启的。本地实测安装之后不需要修改任何设置。

# 效果展示

![](https://cdn.jsdelivr.net/gh/chenyuxuan2009/luogu_submission_better/example1.gif)

![](https://cdn.jsdelivr.net/gh/chenyuxuan2009/luogu_submission_better/example2.gif)

![](https://cdn.jsdelivr.net/gh/chenyuxuan2009/luogu_submission_better/example3.gif)

![](https://cdn.jsdelivr.net/gh/chenyuxuan2009/luogu_submission_better/example4.gif)

第一张图可以安装插件成功之后在 <https://www.luogu.com.cn/record/72597888> 查看。

第二张图由于 Judging 状态难以维持，无法提供长久有效的链接查看效果。可以写题的时候留意一下。

第三张图在正常等待评测的时候会显示，遇上 RMJ 失效会概率 UKE / Waiting。

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

  **强烈建议先访问 <https://www.luogu.com.cn/record/72597888> 把图片加载一下。等待动图完全动起来。为了验证是否缓存，刷新页面查看加载是否仍然过慢。如果仍然过慢，尝试切换图源。如果你是一位魔法师，还可以使用 / 停止使用魔法。**

  如果你是魔法师，原站很适合。如果你不是魔法师，国内镜像源稍微加载一段时间。

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