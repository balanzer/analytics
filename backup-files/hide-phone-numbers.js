function hidePhoneDetails(styles) {
    jQuery('.resDirectIcon-link').hide();
    jQuery('.resDirectNum-link').hide();
    jQuery('.resDirectCol.stackingModule').hide();
    jQuery('.mobileResDirectNumber').hide();
}

hidePhoneDetails();
setTimeout(function () {
    hidePhoneDetails();
}, 500);
setTimeout(function () {
    hidePhoneDetails();
}, 2000);