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

fetch("https://api.qlrc.com/company/job", {
    "headers": {
        "accept": "application/json, text/plain, */*",
        "accept-language": "en-US,en;q=0.9",
        "authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9zaWQiOiI5MDQ1MDM5IiwiaHR0cDovL3NjaGVtYXMubWljcm9zb2Z0LmNvbS93cy8yMDA4LzA2L2lkZW50aXR5L2NsYWltcy9ncm91cHNpZCI6IjkwNDUwMzkiLCJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL3JvbGUiOiIyIiwiaHR0cDovL3NjaGVtYXMueG1sc29hcC5vcmcvd3MvMjAwOS8wOS9pZGVudGl0eS9jbGFpbXMvYWN0b3IiOiIxIiwiaHR0cDovL3NjaGVtYXMueG1sc29hcC5vcmcvd3MvMjAwNS8wNS9pZGVudGl0eS9jbGFpbXMvc3lzdGVtIjoiMCIsImV4cCI6MTYwNTg1Mjc5NCwiaXNzIjoiNTFyYyIsImF1ZCI6IjUxcmMifQ.60M1PQdUbrggoW--dCE30xJ8pDXAioMNOH9AKIib6ns",
        "camainid": "0",
        "client": "PC",
        "content-type": "application/json;charset=UTF-8",
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-site",
        "subsiteinfo": "%7B%22id%22%3A32%2C%22provinceID%22%3A32%2C%22subSiteName%22%3A%22%E9%BD%90%E9%B2%81%E4%BA%BA%E6%89%8D%E7%BD%91%22%2C%22subSiteCity%22%3A%22%E5%B1%B1%E4%B8%9C%22%2C%22subSiteUrl%22%3A%22https%3A%2F%2Fwww.qlrc.com%22%2C%22isSecond%22%3Afalse%2C%22pcUrl%22%3A%22www.qlrc.com%22%2C%22h5Url%22%3A%22m.qlrc.com%22%2C%22isWechatValid%22%3Atrue%2C%22beian%22%3A%22%E4%BA%ACICP%E5%A4%8712005109%E5%8F%B7-17%22%2C%22pinyin%22%3A%22shandong%22%2C%22dataWay%22%3A%22%E7%BC%93%E5%AD%98%E6%95%B0%E6%8D%AE%22%2C%22isMobile%22%3Afalse%2C%22isIE%22%3Afalse%2C%22searchServer%22%3A%224%22%7D"
    },
    "referrer": "https://www.qlrc.com/",
    "referrerPolicy": "strict-origin-when-cross-origin",
    "body": "{\"id\":6718630,\"cpMainId\":9045039,\"caMainId\":9045039,\"name\":\"淘宝运营助理（新泰）\",\"dcJobTypeId\":\"6315\",\"dcJobTypeIDMinor\":\"6324\",\"jobType\":\"电商运营\",\"jobTypeMinor\":\"网络推广\",\"needNumber\":2,\"needNumberValue\":\"2人\",\"dcSalaryId\":6,\"salaryMin\":\"3K\",\"employType\":1,\"dcRegionId\":\"320506\",\"region\":\"山东省泰安市新泰市\",\"responsibility\":\"1、负责店铺产品上传，内容编辑，栏目内容的日常检查、更新、信息收集；\\n2、负责店铺的活动策划、设计、建设、推广、追踪等运营和维护工作；\\n3、依照店铺运行管理流程和规范，确保店铺良好运行。\",\"demand\":\"1、大专及以上学历；\\n2、计算机操作熟练，熟练使用office等办公软件；\\n3、细心、仔细，脑子灵活、反应速度快；\\n\\n薪资：试用期3个月，每月3000元，\\n3个月后3000以上，平均薪资3500以上，上不封顶。\\n\\n工作时间：早上9:00-12:00，下午1:00-6:00，每周工作六天\\n\\n地点：新泰市新安路6号沁园春小区4号楼\\n\\n公司淘宝店铺搜索： 美尚美品美国代购店、美国66公路代购店\\n\\n员工到岗后有专人带教，公司提供免费带薪培训：系统的学习互联网电子商务实战知识，网站的营运推广还有淘宝的店铺规则和销售，搜索引擎优化在互联网上面的实际应用。岗中培训及晋升培训，并帮助员工做好职业规划。\",\"dcEducationId\":5,\"education\":\"大专\",\"minExperience\":0,\"experience\":\"经验不限\",\"minAge\":21,\"maxAge\":28,\"emailSendFreq\":\"0000000\",\"displayNo\":2,\"issueDate\":\"2020-10-21T04:52:00\",\"issueEnd\":\"2020-11-22T15:59:00.000Z\",\"applyNumber\":6,\"viewNumber\":776,\"refreshDate\":\"2020-10-21T04:53:00\",\"lastModifyDate\":\"2020-10-21T04:53:00\",\"valid\":true,\"lng\":\"117.76978\",\"lat\":\"35.91693\",\"promotion\":\"运营专员\",\"welfare1\":true,\"welfare2\":false,\"welfare3\":false,\"welfare4\":false,\"welfare5\":false,\"welfare6\":false,\"welfare7\":false,\"welfare8\":false,\"welfare9\":true,\"welfare10\":false,\"welfare11\":true,\"welfare12\":false,\"welfare13\":true,\"welfare14\":true,\"welfare15\":false,\"welfare16\":false,\"welfare17\":false,\"welfare18\":false,\"welfare19\":false,\"secondId\":\"F1C38F5523\",\"dcSalaryIdMax\":10,\"salaryMax\":\"6K\",\"negotiable\":false,\"jobTags\":\"\",\"address\":\"新安路6号沁园春小区4号楼\",\"filterGender\":null,\"filterMinDegree\":0,\"filterMaxDegree\":0,\"filterMinWorkYear\":0,\"filterMaxWorkYear\":0,\"filterJobRegion\":\"\",\"isSetFilter\":false,\"forwardEmail\":\"\"}",
    "method": "POST",
    "mode": "cors",
    "credentials": "include"
});

Qlrc.prototype.updateJobs = function (func) {
    console.log("updateJobs");

    $.ajax({
        method: "GET",
        url: 'https://api.qlrc.com/company/job/list?State=1&RowCount=100&page=1&Keyword=&EmployType=0&CategoryId=0'
    }).done(function (jobs) {
        console.log("jobs: " + jobs.length);
        var job = jobs.reduce((a, b) => (new Date(a.refreshDate)).getTime() < (new Date(b.refreshDate)).getTime() ? a : b); //oldest

        console.log("job: " + jobToString(job));

        $.ajax({
            method: "GET",
            url: "https://api.qlrc.com/company/job?id=" + job.id
        }).done(function (jobDetail) {
            console.log("jobDetail: " + JSON.stringify(jobDetail));
            if (job.dcJobTypeId == 56) {
                $.ajax({
                    method: "POST",
                    url: "https://api.qlrc.com/company/job/Parttime",
                    data: JSON.stringify(jobDetail.job)
                }).done(function (jobMini) {
                    console.log("job updated: " + job.id + "," + jobMini.jobId);
                    func(job);
                });
            } else { //63, 6315
                $.ajax({
                    method: "POST",
                    url: "https://api.qlrc.com/company/job",
                    data: JSON.stringify(jobDetail.job)
                }).done(function (jobMini) {
                    console.log("job updated: " + job.id + "," + jobMini.jobId);
                    func(job);
                });
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