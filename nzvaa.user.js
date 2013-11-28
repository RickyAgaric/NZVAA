// ==UserScript==
// @name           NZVAA
// @description    New Zealand Working Holiday Visa Apply Assistant
// @version        1.0
// @author         ricky.agaric
// @namespace      http://rickyagaric.net
// @include        https://www.immigration.govt.nz/*
// ==/UserScript==

var reloadApplyPage = function() {
  var applyBu = document.getElementById('ctl00_ContentPlaceHolder1_applyNowButton');
  if (applyBu) {
    applyBu.click();
  } else {
    console.log('Don't have candidate');
  }
  //setTimeout(reloadApplyPage, 500);
};

reloadApplyPage();