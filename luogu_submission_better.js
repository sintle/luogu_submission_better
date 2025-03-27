// ==UserScript==
// @name         洛谷提交记录显示优化
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  解放双手，造福人类
// @author       沉石鱼惊旋
// @match        *://www.luogu.com.cn/record/*
// @run-at       document-end
// @license      MIT
// ==/UserScript==

function main() {
    let AC = ''
    let WA = 'https://www.luogu.com.cn/fe/api/problem/downloadAttachment/0a4xlt6d'
    let TLE = 'https://www.luogu.com.cn/fe/api/problem/downloadAttachment/05z5cfy2'
    let MLE = 'https://www.luogu.com.cn/fe/api/problem/downloadAttachment/qffikhqm'
    let RE = 'https://www.luogu.com.cn/fe/api/problem/downloadAttachment/ymzenwb8'
    let OLE = 'https://www.luogu.com.cn/fe/api/problem/downloadAttachment/evpbn9w0'
    let UKE = 'https://www.luogu.com.cn/fe/api/problem/downloadAttachment/0q7k51b6'
    let Judging = ''
    let tc = document.getElementsByClassName('test-case');
    let len = tc.length;
    console.log(len);
    for (let i = 0; i < len; i += 1) {
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
        } else if (tc[i].style === "background: rgb(20, 85, 143);") {
            tc[i].style = `background: linear-gradient(rgba(20, 85, 143, 0.3), rgba(20, 85, 143, 0.3)), url('${Judging}'); background-size: cover;`;
        }
    }
};
(function () {
    let i = setInterval(function () {
        if (main()) clearInterval(i);
    }, 10);
})();