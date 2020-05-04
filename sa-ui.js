




/* Message variables here */
var expandedBannerMsg = 'TEMPORARY SUSPENSION OF OPERATION DUE TO EMERGENCY UK GOVERNMENT GUIDANCE. In response to Covid-19 the UK Government ' +
    'has instructed that all hotel operations must be suspended with immediate effect.' +
    ' This hotel is complying with the government’s request and unfortunately we cannot accept guests at this time.';
/* End */

window.displayMessages = function (message, index) {
    console.log('**banner-special announcements display message : ' + message);

    var bannerMessage = message.substring(0, 53);
    var readMoreMsg = 'Read More';
    var readLessMsg = 'Read Less';

    var announcementClass = "special-announcement-banner" + index;


    var bannerHTML = '' +
        '<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 ' + announcementClass + '" style="background-color:#FFFFFF; border-bottom:2px solid #058EA2">' +
        '<div style="background-color:#FFFFFF; margin:auto; position:relative; width:70%">' +
        '<p id="ihg-expanded-messaging" class="col-xs-9 col-sm-9 col-md-9 col-lg-9" style="color:#000000; display:none; font-family:\'Proxima Nova\', sans-serif; font-size:16px; font-weight:600; letter-spacing:0; ' +
        'line-height:24px; padding:20px 0 20px 0; text-align:left">' +
        message + '<br><br>' +
        '<span id="ihg-read-less-link" onmouseover="this.style.textDecoration=\'underline\'; this.style.textDecorationColor=\'#058EA2\'; this.style.textUnderlinePosition=\'under\'" onmouseleave="this.style.textDecoration=\'none\';" style="color:#000000; cursor:pointer;">' +
        readLessMsg +
        '</span>' +
        '</p>' +
        '<p id="ihg-collapsed-messaging" class="col-xs-9 col-sm-9 col-md-9 col-lg-9" style="color:#000000; display:inline-block; font-family:\'Proxima Nova\', sans-serif; font-size:16px; font-weight:600; letter-spacing:0; ' +
        'line-height:24px; padding:20px 0 20px 0; text-align:left">' +
        bannerMessage + '...' +
        '</p>' +
        '<p id="ihg-read-more-link" class="col-xs-2 col-sm-2 col-md-2 col-lg-2" onmouseover="this.style.textDecoration=\'underline\'; this.style.textDecorationColor=\'#058EA2\'; this.style.textUnderlinePosition=\'under\'" onmouseleave="this.style.textDecoration=\'none\';" style="color:#000000; cursor:pointer; ' +
        'display:inline-block; font-family:\'Proxima Nova\', sans-serif; font-size:16px; font-weight:600; letter-spacing:0; ' +
        'line-height:24px; padding:20px 0 0 0; visibility:visible">' +
        readMoreMsg +
        '</p>' +
        '<p style="display:inline-block; font-size:18px;">' +
        '<i onclick="closeAnnouncementBanner(' + index + ')" class="fa fa-times-circle" style="color:#000000; cursor:pointer; float:right; margin-top:23px"></i>' +
        '</p>' +
        '</div>' +
        '</div>';





    try {

        var primaryNav = document.getElementById('primary-nav');
        if (!!primaryNav) {
            primaryNav.insertAdjacentHTML('beforeend', bannerHTML);
        }



    } catch (err) {
        console.log('**banner-special announcements error: ' + err);
    }


};

window.closeAnnouncementBanner = function (index) {
    var announcementClass = ".special-announcement-banner" + index;
    console.log('**banner-special announcements closeAnnouncementBanner: ' + announcementClass);
    jQuery(announcementClass).hide();
}




displayMessages(expandedBannerMsg, 0);
displayMessages(expandedBannerMsg, 2);