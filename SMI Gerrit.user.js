// ==UserScript==
// @name         SMI Gerrit
// @namespace    https://github.com/wade80621/SMI-Gerrit
// @version      [20200527A]
// @description  Optimize SMI Gerrit, add project link for JMS team.
// @author       Wade.Yeh
// @match        https://rd2gerrit01.siliconmotion.com.tw/
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
        newElement = document.createElement("div");
        newElement.innerHTML = ''+
        '<div class="linkMenuBar" role="menubar" style="width: 100%; height: 100%;">'+
        '<b style="margin: 2px 0 1px 0;">Project Link: </b>'+
        '<a class="menuItem linkMenuItemNotLast" href="#/q/project:ATP_SM2259_B16A" role="menuitem">ATP_SM2259_B16A</a>'+
        '<a class="menuItem linkMenuItemNotLast" href="#/q/project:MX500_B27A+branch:master" role="menuitem">MX500_B27A</a>'+
        '<a class="menuItem linkMenuItemNotLast" href="#/q/project:MX500_B27A+branch:KC600" role="menuitem">KC600</a>'+
        //'<a class="menuItem linkMenuItemNotLast" href="#/q/project:FRAMPTON" role="menuitem">FRAMPTON</a>'+
        //'<a class="menuItem linkMenuItemNotLast" href="#/q/project:BlackMore" role="menuitem"><s>BlackMore</s></a>'+
        '<a class="menuItem linkMenuItemNotLast" href="#/q/project:FRAMPTON_2" role="menuitem">FRAMPTON_2</a>'+
        '<a class="menuItem" href="#/q/project:SM2259_PartialDRAM" role="menuitem">SM2259_PartialDRAM</a>'+
        '</div>';
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

==================================================================*/