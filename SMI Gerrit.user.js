// ==UserScript==
// @name         SMI Gerrit
// @namespace    https://github.com/wade80621/SMI-Gerrit
// @version      [20250414A]
// @description  Optimize SMI Gerrit, add project link for Victor team.
// @author       Wade.Yeh
// @match        http*://rd2gerrit01.siliconmotion.com.tw/
// @grant        none
// @updateURL	 https://github.com/wade80621/SMI-Gerrit/raw/master/SMI%20Gerrit.user.js
// @downloadURL	 https://github.com/wade80621/SMI-Gerrit/raw/master/SMI%20Gerrit.user.js
// ==/UserScript==

(function() {
    'use strict';
    // Add project link before id: gerrit_body and after id: gerrit_header
    var targetElementId;
    var newElement;
    targetElementId = document.getElementById('gerrit_body');
    if (targetElementId) {
        // SATA
        newElement = document.createElement("div");
        newElement.id = "wade_proj_sata"
        newElement.innerHTML = ''+
        '<div class="linkMenuBar" role="menubar" style="width: 100%; height: 100%;">'+
        '<b style="margin: 2px 0 1px 0;">Project Link(SATA): </b>'+
        '<a class="menuItem linkMenuItemNotLast" href="#/q/project:SM2259_PartialDRAM+branch:master" role="menuitem">MX500(2259_PartialDRAM)</a>'+
        '<a class="menuItem linkMenuItemNotLast" href="#/q/project:SM2259_PartialDRAM+branch:PartialDram_4TB" role="menuitem">MX500(2259_PartialDRAM 4T)</a>'+
        '<a class="menuItem"                     href="#/q/project:SM2259_PartialDRAM+branch:KC600" role="menuitem">KC600(2259_B47)</a>'+
        // '<a class="menuItem linkMenuItemNotLast" href="#/q/project:KC600_BiSC5" role="menuitem">KC600_BiSC5</a>'+
        // '<a class="menuItem linkMenuItemNotLast" href="#/q/project:Kinston_OEM" role="menuitem">Kinston_OEM</a>'+
        // '<a class="menuItem linkMenuItemNotLast" href="#/q/project:MX500_B27A+branch:master" role="menuitem">MX500(2258_B27A)</a>'+
        // '<a class="menuItem linkMenuItemNotLast" href="#/q/project:MX500_B27A+branch:KC600" role="menuitem">KC600(2258_B27)</a>'+
        // '<a class="menuItem linkMenuItemNotLast" href="#/q/project:ATP_SM2259_B16A" role="menuitem">ATP(2259_B16A)</a>'+
        // '<a class="menuItem linkMenuItemNotLast" href="#/q/project:&quot;KC600+B17A&quot;" role="menuitem">KC600 B17A</a>'+
        '</div>';
        targetElementId.parentNode.insertBefore(newElement, targetElementId);

        // PCIe
        newElement = document.createElement("div");
        newElement.id = "wade_proj_pcie"
        newElement.innerHTML = ''+
        '<div class="linkMenuBar" role="menubar" style="width: 100%; height: 100%;">'+
        '<b style="margin: 2px 0 1px 0;">Project Link(PCIe): </b>'+
        '<a class="menuItem linkMenuItemNotLast" href="#/q/project:SM2268XT2_CMT_QLC" role="menuitem">SM2268XT2_CMT_QLC</a>'+
        '<a class="menuItem linkMenuItemNotLast" href="#/q/project:SM2268XT_CMT_QLC" role="menuitem">SM2268XT_CMT_QLC</a>'+
        '<a class="menuItem linkMenuItemNotLast" href="#/q/project:Mitchell" role="menuitem">Mitchell(2269_N48)</a>'+
        '<a class="menuItem"                     href="#/q/project:Mitchell_MTFW" role="menuitem">Mitchell_MTFW</a>'+
        // '<a class="menuItem linkMenuItemNotLast" href="#/q/project:SM2269xt+branch:SKH_BC901" role="menuitem">SKH_BC901</a>'+
        // '<a class="menuItem linkMenuItemNotLast" href="#/q/project:SM2269XT_FE" role="menuitem">SM2269XT_FE(Marco)</a>'+
        // '<a class="menuItem linkMenuItemNotLast" href="#/q/project:XT_ASIC+branch:SM2269" role="menuitem">SM2269XT_ASIC(Marco)</a>'+
        // '<a class="menuItem linkMenuItemNotLast" href="#/q/project:FRAMPTON_2" role="menuitem">FRAMPTON_2(2263_N28)</a>'+
        // '<a class="menuItem linkMenuItemNotLast" href="#/q/project:FRAMPTON" role="menuitem">FRAMPTON</a>'+
        // '<a class="menuItem linkMenuItemNotLast" href="#/q/project:BlackMore" role="menuitem"><s>BlackMore</s></a>'+
        '</div>';
        targetElementId.parentNode.insertBefore(newElement, targetElementId);

        // USB
        newElement = document.createElement("div");
        newElement.id = "wade_proj_usb"
        newElement.innerHTML = ''+
        '<div class="linkMenuBar" role="menubar" style="width: 100%; height: 100%;">'+
        '<b style="margin: 2px 0 1px 0;">Project Link(USB): </b>'+
        '<a class="menuItem linkMenuItemNotLast" href="#/q/project:Henley6+branch:Henley5C" role="menuitem">Henley5C(2324_B58R)</a>'+
        '<a class="menuItem linkMenuItemNotLast" href="#/q/project:Henley6+branch:master" role="menuitem">Henley6(2324_B68S)</a>'+
        '<a class="menuItem linkMenuItemNotLast" href="#/q/project:Frey3B" role="menuitem">Frey3B(2322_N58R)</a>'+
        '<a class="menuItem linkMenuItemNotLast" href="#/q/project:SM2320_B47T" role="menuitem">HenleyC(2320_B47T)</a>'+
        '<a class="menuItem"                     href="#/q/project:SM2324XT+branch:SM2324%252BN58R" role="menuitem">SM2324_N58R</a>'+
        // '<a class="menuItem linkMenuItemNotLast" href="#/q/project:SM2324XT" role="menuitem">SM2324XT(Marco)</a>'+
        // '<a class="menuItem linkMenuItemNotLast" href="#/q/project:SM2320XT" role="menuitem">SM2320XT(Marco)</a>'+
        // '<a class="menuItem linkMenuItemNotLast" href="#/q/project:SM2320FE" role="menuitem">SM2320FE(Marco)</a>'+
        '</div>';
        targetElementId.parentNode.insertBefore(newElement, targetElementId);

        // Others
        newElement = document.createElement("div");
        newElement.id = "wade_proj_other"
        newElement.innerHTML = ''+
        '<div class="linkMenuBar" role="menubar" style="width: 100%; height: 100%;">'+
        '<b style="margin: 2px 0 1px 0;">Project Link(Other): </b>'+
        '<a class="menuItem"                     href="#/q/project:Debug_Tools" role="menuitem">Debug_Tools</a>'+
        '</div>';
        targetElementId.parentNode.insertBefore(newElement, targetElementId);

        // Note
        newElement = document.createElement("div");
        newElement.id = "wade_note"
        newElement.innerHTML = ''+
        '<details><summary style="margin: 2px 0 1px 8px;"><b>Commit Note</b></summary>'+
        '<table border="1px" style="margin: 2px 0 1px 20px;">'+
        '<tbody><tr><td>'+
        '<h4>Commit Message Rule</h4>'+
        '<p>ISP: XXXXXX, BootISP: XXXXXX, MPISP: XXXXXX, MTFW: XXXXXX</p>'+
        '<p>1. XXXXXXXXXXXXXXXXXX（改動描述）<br>'+
        '&nbsp;&nbsp;&nbsp;&nbsp;-&nbsp;CHANGE:（更改的檔案們）<br>'+
        '&nbsp;&nbsp;&nbsp;&nbsp;-&nbsp;TYPE:（詳見下表）<br>'+
        '&nbsp;&nbsp;&nbsp;&nbsp;-&nbsp;TEST CASE:（驗證的測試）<br>'+
        '&nbsp;&nbsp;&nbsp;&nbsp;-&nbsp;IMPACT:（影響的流程）<br>'+
        '&nbsp;&nbsp;&nbsp;&nbsp;-&nbsp;RELATE JIRA:（如果有）<br></p>'+
        '<table border="1px">'+
        '<thead><tr><th scope="col">TYPE</th><th scope="col">Descriptor</th></tr></thead>'+
        '<tbody>'+
        '<tr><td align="center">Feature</td><td>新增/修改功能。</td></tr>'+
        '<tr><td align="center">Fix</td><td>修補Bug。</td></tr>'+
        '<tr><td align="center">Docs</td><td>文件。</td></tr>'+
        '<tr><td align="center">Style</td><td>格式（不影響程式碼運行的變動：white-space, formatting, missing semi colons, etc）。</td></tr>'+
        '<tr><td align="center">Refactor</td><td>重構（既不是新增功能，也不是修補Bug的程式碼變動）。</td></tr>'+
        '<tr><td align="center">Performance</td><td>改善效能、Improve相關的。</td></tr>'+
        '<tr><td align="center">Test</td><td>增加測試。</td></tr>'+
        '<tr><td align="center">Chore</td><td>建構程序或輔助工具的變動（Build Code Batch、Tools、Folder Structure）。</td></tr>'+
        '<tr><td align="center">Revert</td><td>撤銷、回復先前的Commit。</td></tr>'+
        '</tbody>'+
        '</table>'+
        '</td></tr></tbody>'+
        '</table>'+
        '</details>';
        targetElementId.parentNode.insertBefore(newElement, targetElementId);
    }
})();

/*==================================================================
Reference Code
http://bigsec.net/b52/greasemonkey/
    //
    var logo = document.createElement("div");
    logo.innerHTML = '<div style="margin: 0 auto 0 auto; ' +
        'border-bottom: 1px solid #000000; margin-bottom: 5px; ' +
        'font-size: small; background-color: #FFFFFF; ' +
        'color: #0654AC;"><p style="margin: 2px 0 1px 0;"> ' +
        'My name is wade' +
        '</p></div>';
    document.body.insertBefore(logo, document.body.firstChild);
    //


    newElement.id = "wade_proj_sata"
    newElement.className = 'linkMenuBar';
    newElement.setAttribute("role", "menubar");
    newElement.roleName="menubar";
    newElement.style.width = "100%";
    newElement.style.height = "100%";

https://seanacnet.com/html/details-and-summary/
https://www.w3schools.com/howto/howto_html_table_nested.asp
==================================================================*/