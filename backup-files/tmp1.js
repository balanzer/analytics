try {
    var inputDate = new Date();
    var dd = inputDate.getDate();
    var mm = inputDate.getMonth() + 1;
    var yyyy = inputDate.getFullYear();
    var hh = inputDate.getHours();
    var mn = inputDate.getMinutes();
    var ss = inputDate.getSeconds();

    if (hh < 10) {
        hh = '0' + dd;
    }
    if (mn < 10) {
        mn = '0' + dd;
    } if (ss < 10) {
        ss = '0' + dd;
    }

    if (dd < 10) {
        dd = '0' + dd;
    }
    if (dd < 10) {
        dd = '0' + dd;
    }

    if (mm < 10) {
        mm = '0' + mm;
    }


    var pageName = _satellite.getVar('page.pageType');

    if (pageName.indexOf("CONFIRMATION") > 0) {
        return yyyy + mm + dd + hh + mn + ss;
    }


} catch (err) {

}
return "";