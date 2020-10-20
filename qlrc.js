'use strict';

function Qlrc(accessToken) {
    this.accessToken = accessToken;
    $.ajaxSetup({
        beforeSend: function (xhr) {
            xhr.setRequestHeader('Authorization', 'Bearer ' + accessToken);
            xhr.setRequestHeader('content-type', 'application/json;charset=UTF-8');
        }
    });
}

Qlrc.prototype.updateJobs = function (func) {
    console.log("updateJobs");

    $.ajax({
        method: "GET",
        url: 'https://api.qlrc.com/company/job/list?State=1&RowCount=100&page=1&Keyword=&EmployType=0&CategoryId=0'
    }).done(function (jobs) {
        let idx = Math.floor(Math.random() * jobs.length)
        var job = jobs[idx];
        console.log("job: " + job.id + ", " + job.name + "," + idx + "/" + jobs.length)

        $.ajax({
            method: "GET",
            url: "https://api.qlrc.com/company/job?id=" + job.id
        }).done(function (jobDetail) {
            console.log("jobDetail: " + jobDetail);
            $.ajax({
                method: "POST",
                url: "https://api.qlrc.com/company/job",
                data: JSON.stringify(jobDetail.job)
            }).done(function (jobMini) {
                console.log("job updated: " + job.id + "," + jobMini.jobId);
                func(job);
            });
        });
    });
};

function updatePopupInfo(job) {
    var views = chrome.extension.getViews({
        type: "popup"
    });

    for (var i = 0; i < views.length; i++) {
        var jobText = job.id + ", " + job.name + "," + job.refreshDate;
        var li = document.createElement("LI");
        li.appendChild(document.createTextNode(jobText));
        views[i].document.getElementById('info').appendChild(li);
    }
}

function doUpdateJobs() {
    chrome.cookies.get({
        url: "https://www.qlrc.com/",
        name: "CaLoginToken"
    }, function (cookie) {
        console.log("cookie found: " + cookie.name + ", " + cookie.value);

        let qlrc = new Qlrc(cookie.value);
        qlrc.updateJobs(updatePopupInfo);
    });
};