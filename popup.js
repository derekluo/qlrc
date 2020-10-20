// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
'use strict';

let getJobs = document.getElementById('getJobs');
let autoUpdate = document.getElementById('autoUpdate');

getJobs.onclick = function (mouseEvent) {
  console.log("GetJobs in the popups page clicked: " + mouseEvent);

  chrome.cookies.get({
    url: "https://www.qlrc.com/",
    name: "CaLoginToken"
  }, function (cookie) {
    console.log("cookie found: " + cookie.name + ", " + cookie.value);

    let qlrc = new Qlrc(cookie.value);
    qlrc.getJobs();

  });
};

chrome.storage.sync.get('autoUpdate', function (data) {
  autoUpdate.innerHTML = "Auto update: " + data.autoUpdate;
});