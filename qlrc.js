'use strict';

function Qlrc(accessToken) {
    this.accessToken = accessToken;
    $.ajaxSetup({
        beforeSend: function (xhr) {
            xhr.setRequestHeader('Authorization', 'Bearer ' + accessToken);
            xhr.setRequestHeader('content-type', 'application/json;charset=UTF-8');
            xhr.setRequestHeader("accept", "application/json, text/plain, */*");
            xhr.setRequestHeader("accept-language", "en-US,en;q=0.9");
            xhr.setRequestHeader("camainid", "0");
            xhr.setRequestHeader("client", "PC");

            xhr.setRequestHeader("subsiteinfo", "%7B%22id%22%3A32%2C%22provinceID%22%3A32%2C%22subSiteName%22%3A%22%E9%BD%90%E9%B2%81%E4%BA%BA%E6%89%8D%E7%BD%91%22%2C%22subSiteCity%22%3A%22%E5%B1%B1%E4%B8%9C%22%2C%22subSiteUrl%22%3A%22https%3A%2F%2Fwww.qlrc.com%22%2C%22isSecond%22%3Afalse%2C%22pcUrl%22%3A%22www.qlrc.com%22%2C%22h5Url%22%3A%22m.qlrc.com%22%2C%22isWechatValid%22%3Atrue%2C%22beian%22%3A%22%E4%BA%ACICP%E5%A4%8712005109%E5%8F%B7-17%22%2C%22pinyin%22%3A%22shandong%22%2C%22dataWay%22%3A%22%E7%BC%93%E5%AD%98%E6%95%B0%E6%8D%AE%22%2C%22isMobile%22%3Afalse%2C%22isIE%22%3Afalse%2C%22searchServer%22%3A%227%22%7D");

            xhr.setRequestHeader("referrer", "https://www.qlrc.com/");
            xhr.setRequestHeader("referrerPolicy", "strict-origin-when-cross-origin");
            xhr.setRequestHeader("mode", "cors");
            xhr.setRequestHeader("credentials", "include");
        }
    });
}

Qlrc.prototype.updateJobs = function (func) {
    console.log("updateJobs");

    $.ajax({
        method: "GET",
        url: 'https://api.qlrc.com/company/job/list?State=1&RowCount=100&page=1&Keyword=&EmployType=0&CategoryId=0'
    }).done(function (jobs) {
        console.log("jobs: " + jobs.length);
        var job = jobs.reduce((a, b) => (new Date(a.refrefreshDate) > new Date(b.refreshDate) ? a : b));

        console.log("job: " + jobToString(job));

        $.ajax({
            method: "GET",
            url: "https://api.qlrc.com/company/job?id=" + job.id
        }).done(function (jobDetail) {
            console.log("jobDetail: " + JSON.stringify(jobDetail));
            if (job.dcJobTypeId == 63) {
                $.ajax({
                    method: "POST",
                    url: "https://api.qlrc.com/company/job",
                    data: JSON.stringify(jobDetail.job)
                }).done(function (jobMini) {
                    console.log("job updated: " + job.id + "," + jobMini.jobId);
                    func(job);
                });
            } else if (job.dcJobTypeId == 56) {
                $.ajax({
                    method: "POST",
                    url: "https://api.qlrc.com/company/job/Parttime",
                    data: JSON.stringify(jobDetail.job)
                }).done(function (jobMini) {
                    console.log("job updated: " + job.id + "," + jobMini.jobId);
                    func(job);
                });
            } else {
                console.log("FOUND new job.dcJobTypeId: " + job.dcJobTypeId)
            }
        });
    });
};

function dateToString(datetime) {
    return datetime.getFullYear() + "-" + (datetime.getMonth() + 1) + "-" + datetime.getDate() + " " + datetime.getHours() + ":" + datetime.getMinutes() + ":" + datetime.getSeconds();
}

function jobToString(job) {
    return job.id + ", " + job.name + ", " + job.dcJobTypeId + ", " + dateToString(new Date(job.refreshDate));
}

function updatePopupInfo(job) {
    var views = chrome.extension.getViews({
        type: "popup"
    });

    for (var i = 0; i < views.length; i++) {
        var jobText = jobToString(job) + "/ " + dateToString(new Date());
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