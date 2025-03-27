// ==UserScript==
// @name         洛谷提交记录显示优化
// @namespace    http://tampermonkey.net/
// @version      0.4
// @description  修改提交记录背景
// @author       沉石鱼惊旋
// @match        *://www.luogu.com.cn/record/*
// @run-at       document-end
// @license      MIT
// @downloadURL  https://raw.githubusercontent.com/chenyuxuan2009/luogu_submission_better/refs/heads/main/luogu_submission_better.js
// @updateURL    https://raw.githubusercontent.com/chenyuxuan2009/luogu_submission_better/refs/heads/main/luogu_submission_better.js
// ==/UserScript==

function main() {
    let AC = 'https://cdn.jsdelivr.net/gh/chenyuxuan2009/luogu_submission_better/AC.gif'
    let WA = 'https://cdn.jsdelivr.net/gh/chenyuxuan2009/luogu_submission_better/WA.gif'
    let TLE = 'https://cdn.jsdelivr.net/gh/chenyuxuan2009/luogu_submission_better/TLE.gif'
    let MLE = 'https://cdn.jsdelivr.net/gh/chenyuxuan2009/luogu_submission_better/MLE.gif'
    let RE = 'https://cdn.jsdelivr.net/gh/chenyuxuan2009/luogu_submission_better/RE.gif'
    let OLE = 'https://cdn.jsdelivr.net/gh/chenyuxuan2009/luogu_submission_better/OLE.gif'
    let UKE = 'https://cdn.jsdelivr.net/gh/chenyuxuan2009/luogu_submission_better/UKE.gif'
    let Judging = 'https://cdn.jsdelivr.net/gh/chenyuxuan2009/luogu_submission_better/Judging.gif'
    let tc = document.getElementsByClassName('test-case');
    let len = tc.length;
    for (let i = 0; i < len; i += 1) {
        if (tc[i].getElementsByClassName("spinner").length) {
            tc[i].style = `background: linear-gradient(rgba(20, 85, 143, 0.3), rgba(20, 85, 143, 0.3)), url('${Judging}'); background-size: cover;`;
            continue;
        }
        let status = tc[i].getElementsByClassName('status')[0].innerHTML.substring(0, 2);
        if (status === "AC") {
            tc[i].style = `background: linear-gradient(rgba(82, 196, 26, 0.3), rgba(82, 196, 26, 0.3)), url('${AC}'); background-size: cover;`;
        } else if (status === "WA") {
            tc[i].style = `background: linear-gradient(rgba(231, 76, 60, 0.3), rgba(231, 76, 60, 0.3)), url('${WA}'); background-size: cover;`;
        } else if (status === "TL") {
            tc[i].style = `background: linear-gradient(rgba(5, 34, 66, 0.3), rgba(5, 34, 66, 0.3)), url('${TLE}'); background-size: cover;`;
        } else if (status === "ML") {
            tc[i].style = `background: linear-gradient(rgba(5, 34, 66, 0.3), rgba(5, 34, 66, 0.3)), url('${MLE}'); background-size: cover;`;
        } else if (status === "RE") {
            tc[i].style = `background: linear-gradient(rgba(157, 61, 207, 0.3), rgba(157, 61, 207, 0.3)), url('${RE}'); background-size: cover;`;
        } else if (status === "OL") {
            tc[i].style = `background: linear-gradient(rgba(5, 34, 66, 0.3), rgba(5, 34, 66, 0.3)), url('${OLE}'); background-size: cover;`;
        } else if (status === "UK") {
            tc[i].style = `background: linear-gradient(rgba(14, 29, 105, 0.3), rgba(14, 29, 105, 0.3)), url('${UKE}'); background-size: cover;`;
        }
    }
};
(function () {
    setInterval(function () {
        main();
    }, 10);
})();