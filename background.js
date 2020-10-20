'use strict';

chrome.runtime.onInstalled.addListener(function () {
  chrome.storage.sync.set({
    autoFresh: false
  }, function () {
    console.log('The auto update is disabled.');
  });

  chrome.declarativeContent.onPageChanged.removeRules(undefined, function () {
    chrome.declarativeContent.onPageChanged.addRules([{
      conditions: [new chrome.declarativeContent.PageStateMatcher({
        pageUrl: {
          hostEquals: 'www.qlrc.com'
        },
      })],
      actions: [new chrome.declarativeContent.ShowPageAction()]
    }]);
  });

});

let alarmName = "toggleAlarm";

chrome.alarms.create(alarmName, {
  // delayInMinutes: 1,
  periodInMinutes: 1
});

chrome.alarms.onAlarm.addListener(function (alarm) {
  console.log("alam fired: " + JSON.stringify(alarm));
});