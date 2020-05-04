
window.loadQualtricsData = function () {
    try {

        var qualtrics = {};
        qualtrics.data = {};
        if (typeof trackingJson === 'object') {
            qualtrics.data.viewport = trackingJson.viewport ? trackingJson.viewport : "";
            qualtrics.data.orientation = trackingJson.orientation ? trackingJson.orientation : "";
        }
        if (typeof getApplicationData === 'function') {
            qualtrics.data.viewport = getApplicationData("viewport") ? getApplicationData("viewport") : "";
            qualtrics.data.orientation = getApplicationData("orientation") ? getApplicationData("orientation") : "";
        }


        var userAgent = navigator.userAgent;
        var device = "desktop";
        if (userAgent.toString().toLowerCase().indexOf("android") > -1) {
            device = "Android";
        } else if (userAgent.toString().toLowerCase().indexOf("iphone") > -1) {
            device = "iPhone";
        } else if (userAgent.toString().toLowerCase().indexOf("ipad") > -1) {
            device = "iPad";
        }
        qualtrics.data.device = device;
        qualtrics.data.userAgent = navigator.userAgent;

        window.qualtrics = qualtrics;
        console.log("**data QualtricsData : " + JSON.stringify(window.qualtrics));

    } catch (err) {
        console.log("**data error QualtricsData error : " + err);
    }
};
setTimeout(function () { loadQualtricsData(); }, 100);
setTimeout(function () { loadQualtricsData(); }, 2000);
setTimeout(function () { loadQualtricsData(); }, 5000);