'use strict';

function Qlrc(accessToken) {
    this.accessToken = accessToken;
}

Qlrc.prototype.getHeaders = function (accessToken) {
    let meta = {
        "authorization": 'Bearer ' + accessToken,
        "Content-Type": 'application/x-www-form-urlencoded',
        "accept": "application/json, text/plain, */*",
        "accept-language": "en-US,en;q=0.9",
        "camainid": "0",
        "client": "PC",
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-site"
    };

    return new Headers(meta);
}

Qlrc.prototype.error = function (err) {
    console.log('Fetch Error :-S', err);
}

Qlrc.prototype.success = function (response) {
    if (response.status !== 200) {
        console.log('Looks like there was a problem. Status Code: ' +
            response.status);
        return;
    }
    return response.json();
}

Qlrc.prototype.getJobDetail = function (job) {
    console.log("job: " + job)
    fetch("https://api.qlrc.com/company/job?id=" + job.id, {
            "method": "GET",
            "headers": this.getHeaders(this.accessToken),
            "referrer": "https://www.qlrc.com/",
            "referrerPolicy": "strict-origin-when-cross-origin",
            "mode": "cors",
            "credentials": "include"
        }).then(
            this.success
        ).then(
            function (jobDetail) {
                console.log("Job detail fetched: " + jobDetail);
            }
        )
        .catch(this.error);
}

Qlrc.prototype.updateJobs = function (jobs) {
    console.log("updateJobs: " + jobs.length);
    jobs.forEach(this.getJobDetail);
}

Qlrc.prototype.getJobs = function () {
    fetch('https://api.qlrc.com/company/job/list?State=1&RowCount=10&page=1&Keyword=&EmployType=0&CategoryId=0', {
            "method": "GET",
            "headers": this.getHeaders(this.accessToken),
            "referrer": "https://www.qlrc.com/",
            "referrerPolicy": "strict-origin-when-cross-origin",
            "mode": "cors",
            "credentials": "include"
        }).then(
            this.success
        ).then(
            this.updateJobs
        )
        .catch(this.err);
};