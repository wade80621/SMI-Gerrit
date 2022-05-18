// ==UserScript==
// @name         SMI Gerrit
// @namespace    https://github.com/wade80621/SMI-Gerrit
// @version      [20220518B]
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
        '<a class="menuItem linkMenuItemNotLast" href="#/q/project:ATP_SM2259_B16A" role="menuitem">ATP_SM2259_B16A</a>'+
        '<a class="menuItem linkMenuItemNotLast" href="#/q/project:MX500_B27A+branch:KC600" role="menuitem">KC600</a>'+
        '<a class="menuItem linkMenuItemNotLast" href="#/q/project:&quot;KC600+B17A&quot;" role="menuitem">KC600 B17A</a>'+
        '<a class="menuItem linkMenuItemNotLast" href="#/q/project:Kinston_OEM" role="menuitem">Kinston_OEM</a>'+
        '<a class="menuItem linkMenuItemNotLast" href="#/q/project:SM2259_PartialDRAM+branch:KC600" role="menuitem">KC600_B47</a>'+
        '<a class="menuItem linkMenuItemNotLast" href="#/q/project:MX500_B27A+branch:master" role="menuitem">MX500_B27A</a>'+
        '<a class="menuItem linkMenuItemNotLast" href="#/q/project:SM2259_PartialDRAM+branch:master" role="menuitem">SM2259_PartialDRAM</a>'+
        '<a class="menuItem" href="#/q/project:SM2259_PartialDRAM+branch:PartialDram_4TB" role="menuitem">SM2259_PartialDRAM 4T</a>'+
        '</div>';
        targetElementId.parentNode.insertBefore(newElement, targetElementId);
		
        // PCIe
        newElement = document.createElement("div");
        newElement.id = "wade_proj_pcie"
        newElement.innerHTML = ''+
        '<div class="linkMenuBar" role="menubar" style="width: 100%; height: 100%;">'+
        '<b style="margin: 2px 0 1px 0;">Project Link(PCIe): </b>'+
        //'<a class="menuItem linkMenuItemNotLast" href="#/q/project:FRAMPTON" role="menuitem">FRAMPTON</a>'+
        //'<a class="menuItem linkMenuItemNotLast" href="#/q/project:BlackMore" role="menuitem"><s>BlackMore</s></a>'+
        '<a class="menuItem linkMenuItemNotLast" href="#/q/project:FRAMPTON_2" role="menuitem">FRAMPTON_2</a>'+
        '<a class="menuItem linkMenuItemNotLast" href="#/q/project:Mitchell" role="menuitem">Mitchell</a>'+
        '<a class="menuItem linkMenuItemNotLast" href="#/q/project:Mitchell_MTFW" role="menuitem">Mitchell_MTFW</a>'+
        '<a class="menuItem linkMenuItemNotLast" href="#/q/project:SM2269xt+branch:SKH_BC901" role="menuitem">SKH_BC901</a>'+
        '<a class="menuItem linkMenuItemNotLast" href="#/q/project:SM2269XT_FE" role="menuitem">SM2269XT_FE</a>'+
        '<a class="menuItem" href="#/q/project:XT_ASIC+branch:SM2269" role="menuitem">SM2269XT_ASIC</a>'+
        '</div>';
        targetElementId.parentNode.insertBefore(newElement, targetElementId);

        // USB
        newElement = document.createElement("div");
        newElement.id = "wade_proj_usb"
        newElement.innerHTML = ''+
        '<div class="linkMenuBar" role="menubar" style="width: 100%; height: 100%;">'+
        '<b style="margin: 2px 0 1px 0;">Project Link(USB): </b>'+
        '<a class="menuItem linkMenuItemNotLast" href="#/q/project:SM2320_B47T" role="menuitem">SM2320_B47T</a>'+
        '<a class="menuItem linkMenuItemNotLast" href="#/q/project:SM2320XT" role="menuitem">SM2320XT</a>'+
        '<a class="menuItem" href="#/q/project:SM2320FE" role="menuitem">SM2320FE</a>'+
        '</div>';
        targetElementId.parentNode.insertBefore(newElement, targetElementId);

        // Others
        newElement = document.createElement("div");
        newElement.id = "wade_proj_other"
        newElement.innerHTML = ''+
        '<div class="linkMenuBar" role="menubar" style="width: 100%; height: 100%;">'+
        '<b style="margin: 2px 0 1px 0;">Project Link(Other): </b>'+
        '<a class="menuItem" href="#/q/project:Debug_Tools" role="menuitem">Debug_Tools</a>'+
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


newElement.id = "wade_proj_sata"
newElement.className = 'linkMenuBar';
newElement.setAttribute("role", "menubar");
newElement.roleName="menubar";
newElement.style.width = "100%";
newElement.style.height = "100%";
==================================================================*/