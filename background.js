'use strict';

chrome.runtime.onInstalled.addListener(function () {
  chrome.storage.sync.set({
    autoFresh: true
  }, function () {

    chrome.alarms.create("toggleAlarm", {
      // delayInMinutes: 1,
      periodInMinutes: 1
    });

    console.log('The auto update is enabled.');
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

chrome.alarms.onAlarm.addListener(function (alarm) {
  console.log("alam fired: " + JSON.stringify(alarm));
  doUpdateJobs();
});