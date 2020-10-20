// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
'use strict';

let updateJobs = document.getElementById('updateJobs');
// let autoUpdate = document.getElementById('autoUpdate');

updateJobs.onclick = function (mouseEvent) {
  console.log("UpdateJobs in the popups page clicked: " + mouseEvent);
  doUpdateJobs();
};

// chrome.storage.sync.get('autoUpdate', function (data) {
//   autoUpdate.innerHTML = "Auto update: " + data.autoUpdate;
// });