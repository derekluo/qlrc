// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

function constructOptions() {
  let cbAutoUpdate = document.getElementById('autoUpdate');

  chrome.storage.sync.get(
    "autoUpdate",
    function (result) {
      console.log('Auto updating loaded: ' + result.autoUpdate);
      cbAutoUpdate.checked = result.autoUpdate;
    });

  cbAutoUpdate.addEventListener('change', function () {
    let autoUpdate = cbAutoUpdate.checked;
    chrome.storage.sync.set({
      "autoUpdate": autoUpdate
    }, function () {
      console.log('Auto updating changed to: ' + autoUpdate);
    })
  });
}

constructOptions();