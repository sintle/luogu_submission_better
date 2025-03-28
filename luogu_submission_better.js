// ==UserScript==
// @name         洛谷提交记录显示优化
// @namespace    https://github.com/chenyuxuan2009/luogu_submission_better
// @version      1.3
// @description  修改提交记录背景
// @author       沉石鱼惊旋
// @match        *://www.luogu.com.cn/record/*
// @run-at       document-end
// @license      MIT
// @downloadURL  https://raw.githubusercontent.com/chenyuxuan2009/luogu_submission_better/refs/heads/main/luogu_submission_better.js
// @updateURL    https://raw.githubusercontent.com/chenyuxuan2009/luogu_submission_better/refs/heads/main/luogu_submission_better.js
// ==/UserScript==

// let jsdelivr = 'https://cdn.jsdelivr.net'
// let jsdelivr = 'https://cdn.mengze.vip'
let jsdelivr = 'https://jsdelivrcn.netlify.app'
let AC = `${jsdelivr}/gh/chenyuxuan2009/luogu_submission_better/AC.gif`
let WA = `${jsdelivr}/gh/chenyuxuan2009/luogu_submission_better/WA.gif`
let TLE = `${jsdelivr}/gh/chenyuxuan2009/luogu_submission_better/TLE.gif`
let MLE = `${jsdelivr}/gh/chenyuxuan2009/luogu_submission_better/MLE.gif`
let RE = `${jsdelivr}/gh/chenyuxuan2009/luogu_submission_better/RE.gif`
let OLE = `${jsdelivr}/gh/chenyuxuan2009/luogu_submission_better/OLE.gif`
let UKE = `${jsdelivr}/gh/chenyuxuan2009/luogu_submission_better/UKE.gif`
let Judging = `${jsdelivr}/gh/chenyuxuan2009/luogu_submission_better/Judging.gif`
let CE = `${jsdelivr}/gh/chenyuxuan2009/luogu_submission_better/CE.gif`
let Waiting = `${jsdelivr}/gh/chenyuxuan2009/luogu_submission_better/Waiting.gif`
let ACcol = `rgba(82, 196, 26, 0.3)`;
let WAcol = `rgba(231, 76, 60, 0.3)`;
let TLEcol = `rgba(5, 34, 66, 0.3)`;
let MLEcol = `rgba(5, 34, 66, 0.3)`;
let REcol = `rgba(157, 61, 207, 0.3)`;
let OLEcol = `rgba(5, 34, 66, 0.3)`;
let UKEcol = `rgba(14, 29, 105, 0.3)`;
let Judgingcol = `rgba(20, 85, 143, 0.3)`;
let CEcol = `rgba(250, 219, 20, 0.3)`;
let Waitingcol = `rgba(20, 85, 143, 0.3)`;
let sta = [AC, WA, TLE, MLE, RE, OLE, UKE, Judging, CE, Waiting];
let col = [ACcol, WAcol, TLEcol, MLEcol, REcol, OLEcol, UKEcol, Judgingcol, CEcol, Waitingcol];
let txt = ["AC", "WA", "TLE", "MLE", "RE", "OLE", "UKE", "Judging", "CE", "WJ"];
function getCol(x) {
    return `background: linear-gradient(${col[x]}, ${col[x]}), url('${sta[x]}'); background-size: cover;`;
}
function main() {
    let tc = document.getElementsByClassName('test-case');
    let len = tc.length;
    let firstSTA = -1;
    let ac = 0;
    let judging = 0;
    for (let i = 0; i < len; i += 1) {
        if (tc[i].id === 'luogu_submission_better_right_row') continue;
        if (tc[i].style.background === 'rgb(20, 85, 143)') {
            judging = 1;
            tc[i].style = getCol(7);
            continue;
        }
        let status = tc[i].getElementsByClassName('status')[0].innerHTML;
        if (status.length > 2) status = status.substring(0, 2);
        let tmpSTA = -1;
        if (status === "AC") {
            tmpSTA = 0;
        } else if (status === "WA") {
            tmpSTA = 1;
        } else if (status === "TL") {
            tmpSTA = 2;
        } else if (status === "ML") {
            tmpSTA = 3;
        } else if (status === "RE") {
            tmpSTA = 4;
        } else if (status === "OL") {
            tmpSTA = 5;
        } else if (status === "UK") {
            tmpSTA = 6;
        }
        tc[i].style = getCol(tmpSTA);
        if (tmpSTA === 0) {
            ac = 1;
        }
        if (tmpSTA != 0 && firstSTA === -1) {
            firstSTA = tmpSTA;
        }
    }
    if (judging) firstSTA = 7;
    if (firstSTA === -1 && ac) firstSTA = 0;
    let doc = document.getElementsByClassName('info-rows')[0];
    let id = -1;
    for (let i = 0; i < doc.children.length; i += 1) {
        if (doc.children[i].children[0].children[0].innerHTML.includes('评测状态')) {
            id = i;
            break;
        }
    }
    let info = document.getElementsByClassName('info-rows')[0].children[id].children[1];;
    if (info.innerHTML.includes('Judging')) firstSTA = 7;
    if (info.innerHTML.includes('Compile Error') || info.innerHTML.includes('CE')) firstSTA = 8;
    if (info.innerHTML.includes('Unknown Error') || info.innerHTML.includes('UKE')) firstSTA = 6;
    if (info.innerHTML.includes('Waiting') || info.innerHTML.includes('WJ')) firstSTA = 9;
    // if (firstSTA === -1) firstSTA = 8;
    // if (!info.innerHTML.includes(txt[firstSTA]))
    // info.innerHTML = `${firstSTA}`;
    // info.innerHTML = `${txt[firstSTA]}`;
    if (firstSTA === -1) return;
    if (firstSTA == 7) {
        if (!info.innerHTML.includes('spinner')) {
            info.innerHTML = `<div data-v-21e0a7cc="" class="test-case" style="${getCol(firstSTA)}" id="luogu_submission_better_right_row"><div data-v-21e0a7cc="" class="content"><div data-v-bbdab89a="" data-v-21e0a7cc="" class="spinner" style="width: 32px; height: 32px;"><div data-v-bbdab89a="" style="width: 32px; height: 32px; border-width: 2px;"></div></div></div></div>`
        }
    }
    else {
        if (!info.innerHTML.includes(txt[firstSTA])) {
            info.innerHTML = `<div data-v-21e0a7cc="" class="test-case" style="${getCol(firstSTA)}" id="luogu_submission_better_right_row"><div data-v-21e0a7cc="" class="content"><div data-v-21e0a7cc="" class="status">${txt[firstSTA]}</div></div> </div>`;
        }
    }
};
(function () {
    setInterval(function () {
        main();
    }, 10);
})();