window.processSpecialAnnouncementDetails = function () {
    try {

        var path = location.pathname;
        var lang = 'en-US';

        if (path.indexOf('/us/en/') != -1) {
            lang = 'en-US';
        } else if (path.indexOf('/gb/en/') != -1) {
            lang = 'en-GB';
        } else if (path.indexOf('/us/es/') != -1) {
            lang = 'es-US';
        } else if (path.indexOf('/pt/pt/') != -1) {
            lang = 'pt-PT';
        } else if (path.indexOf('/fr/fr/') != -1) {
            lang = 'fr-FR';
        } else if (path.indexOf('/de/de/') != -1) {
            lang = 'de-DE';
        } else if (path.indexOf('/it/it/') != -1) {
            lang = 'it-IT';
        } else if (path.indexOf('/nl/nl/') != -1) {
            lang = 'nl-NL';
        } else if (path.indexOf('/ru/ru/') != -1) {
            lang = 'ru-RU';
        } else if (path.indexOf('/kr/ko/') != -1) {
            lang = 'kr-KO';
        } else if (path.indexOf('/tr/tr/') != -1) {
            lang = 'tr-TR';
        } else if (path.indexOf('/th/th/') != -1) {
            lang = 'th-TH';
        } else if (path.indexOf('/id/in/') != -1) {
            lang = 'in-ID';
        } else if (path.indexOf('/cn/zh/') != -1) {
            lang = 'zh-CN';
        } else if (path.indexOf('/tw/zh/') != -1) {
            lang = 'zh-TW';
        } else if (path.indexOf('/jp/ja/') != -1) {
            lang = 'ja-JP';
        } else if (path.indexOf('/ae/ar/') != -1) {
            lang = 'ae-AR';
        }

        if (null == lang) {
            lang = "en-US";
        }
        if (lang.trim().length < 1) {
            lang = "en-US";
        }


        if (location.pathname.indexOf('hoteldetail') > 0 && (location.hostname.indexOf("kimptonhotels") > 0 || location.pathname.indexOf("kimptonhotels") > 0)) {


            var hotelBrand = "";


            if (trackingJson.hotelBrand) {
                hotelBrand = trackingJson.hotelBrand.toUpperCase();
            }

            var hotelCode = "";

            if (trackingJson.hotelCode) {
                hotelCode = trackingJson.hotelCode.toUpperCase();
            }


            if (hotelBrand === 'KI') {

                var url;

                var apiHostName = "https://apis.ihg.com/";

                var apiKeyValue = "8wqQsFxfWmqYqYqRin2nk6HGENRp1lm5";

                if (location.host.indexOf('qap.') != -1 && location.host.indexOf('.cn') != -1) {
                    apiHostName = "https://int-api.ihg.com.cn/";
                    apiKeyValue = "aUhG41lOe8LlEzXjrGydjHUtFluwk0LB";
                }
                else if (location.host.indexOf('staging.') != -1 && location.host.indexOf('.cn') != -1) {
                    apiHostName = "https://staging-api.ihg.com.cn/";
                    apiKeyValue = "jiSfHZ79Dv5zdvPT7Cx5GYtfgRyGmdta";
                }
                else if (location.host.indexOf('qap.') != -1) {
                    apiHostName = "https://int-api.ihg.com/";
                    apiKeyValue = "aUhG41lOe8LlEzXjrGydjHUtFluwk0LB";
                }
                else if (location.host.indexOf('staging.') != -1) {
                    apiHostName = "https://staging-api.ihg.com/";
                    apiKeyValue = "jiSfHZ79Dv5zdvPT7Cx5GYtfgRyGmdta";
                } else if (location.host.indexOf('.cn') != -1) {
                    apiHostName = "https://apis.ihg.com.cn/";
                }

                url = apiHostName + "hotels/v1/profiles/" + hotelCode + "/details?fieldset=marketing";



                console.log('**banner-special announcements lang : ' + lang + ', request url : ' + url);

                jQuery.ajax({
                    url: url,
                    async: false,
                    method: "GET",
                    headers: {
                        //GS-JSON call may not need header. but his header should not break gs-json type call
                        "x-ihg-api-key": apiKeyValue,
                        "ihg-language": lang
                    },
                    xhrFields: {
                        withCredentials: true
                    },
                    cache: false,
                    success: function (result) {
                        console.log("**banner-special announcements api call completed ");
                        var specialAnnouncementDetails;

                        if (typeof result === "string") {
                            result = JSON.parse(result);
                        }
                        if (typeof result === "object") {

                            if (result.hotelInfo && result.hotelInfo.marketing && result.hotelInfo.marketing.marketingText && result.hotelInfo.marketing.marketingText.specialAnnouncementDetails) {

                                specialAnnouncementDetails = result.hotelInfo.marketing.marketingText.specialAnnouncementDetails;
                                handleSpecialAnnouncementDetails(specialAnnouncementDetails);
                            } else {
                                console.log("**banner-special announcements api response has no specialAnnouncementDetails");
                            }

                        }
                    },
                    error: function (req, status, msg) {
                        console.log('**banner-special announcements failed to download json (' + status + '): ' + msg);
                    }
                });
            }
        }

    } catch (err) {
        console.log("**banner-special announcements banner - api err : " + err);
    }
};

window.handleSpecialAnnouncementDetails = function (messages) {
    try {

        if (null != messages && messages.length > 0) {

            console.log("**banner-special announcements banner - total messages : " + messages.length);
            var i;
            for (i = 0; i < messages.length; i++) {
                var message = messages[i];
                handleMessage(message, i);

            }



        } else {
            console.log('**banner-special announcements no message to display');
        }
    } catch (err) {
        console.log("**banner-special announcements banner - processing message err : " + err);
    }
};


window.handleMessage = function (message, index) {
    try {

        if (null != message) {


            var hotelCode = "";
            var checkInDate = "";
            var checkOutDate = "";

            if (trackingJson.hotelCode) {
                hotelCode = trackingJson.hotelCode.toUpperCase();
            }
            if (trackingJson.reservation.checkInDate) {
                checkInDate = trackingJson.reservation.checkInDate;
            }
            if (trackingJson.reservation.checkOutDate) {
                checkOutDate = trackingJson.reservation.checkOutDate;
            }




            if (null !== checkInDate && checkInDate.length > 4 && null != checkOutDate && checkOutDate.length > 4) {
                console.log('**banner-special announcements hotelCode  : ' + hotelCode + ', checkInDate : ' + checkInDate + ', checkOutDate : ' + checkOutDate + ', message : ' + JSON.stringify(message));

                var startDate = new Date(message.announcementDates.startDate + 'T00:00:00');
                var endDate = new Date(message.announcementDates.endDate + 'T00:00:00');


                var checkInDate = checkInDate.split("/");
                var checkOutDate = checkOutDate.split("/");

                if (checkOutDate.length === 3 && checkInDate.length === 3) {

                    var checkStartDate = new Date(checkInDate[2] + '-' + checkInDate[0] + '-' + checkInDate[1] + 'T00:00:00');
                    var checkEndDate = new Date(checkOutDate[2] + '-' + checkOutDate[0] + '-' + checkOutDate[1] + 'T00:00:00');

                    if (checkStartDate >= startDate && checkStartDate <= endDate) {
                        displayMessages(message.description, index);
                    } else if (checkEndDate >= startDate && checkEndDate <= endDate) {
                        displayMessages(message.description, index);
                    } else {
                        console.log('**banner-special announcements message skipped dates not fall within checkin/out range');
                    }
                }

            } else {
                console.log('**banner-special announcements no dates to process messages');
            }

        }

    } catch (err) {
        console.log("**banner-special announcements banner - err" + err);
    }
};

setTimeout(function () { processSpecialAnnouncementDetails(); }, 30);




window.displayMessages = function (message, index) {


    if (null == message || message.length <= 0) {
        message = "";
    }

    console.log('**banner-special announcements display message : ' + message);
    var vp1 = window.matchMedia("(min-width: 320px) and (max-width:649px)");
    var vp2 = window.matchMedia("(min-width: 650px) and (max-width:767px)");
    var vp3 = window.matchMedia("(min-width: 768px) and (max-width:849px)");
    var vp4 = window.matchMedia("(min-width: 850px) and (max-width:991px)");
    var vp5 = window.matchMedia("(min-width:992px) and (max-width:1199px)");
    var vp6 = window.matchMedia("(min-width:1200px) and (max-width:1329px)");
    var vp7 = window.matchMedia("(min-width:1330px) and (max-width:1469px)");
    var vp8 = window.matchMedia("(min-width:1470px) and (max-width:1699px)");
    var vp9 = window.matchMedia("(min-width:1700px)");

    var charLimit = 120;

    if (vp1.matches) {
        charLimit = 40;
        console.log('**banner-special announcements display vp1');
    } else if (vp2.matches) {
        charLimit = 40;
        console.log('**banner-special announcements display vp2');
    } else if (vp3.matches) {
        charLimit = 50;
        console.log('**banner-special announcements display vp3');
    } else if (vp4.matches) {
        charLimit = 60;
        console.log('**banner-special announcements display vp4');
    } else if (vp5.matches) {
        charLimit = 70;
        console.log('**banner-special announcements display vp5');
    } else if (vp6.matches) {
        charLimit = 80;
        console.log('**banner-special announcements display vp6');
    } else if (vp7.matches) {
        charLimit = 90;
        console.log('**banner-special announcements display vp7');
    } else if (vp8.matches) {
        charLimit = 105;
        console.log('**banner-special announcements display vp8');
    } else {
        charLimit = 120;
        console.log('**banner-special announcements display xlvp');
    }

    charLimit = (message.length) > charLimit ? charLimit : message.length;


    var readVisbility = "visible";

    readVisbility = (message.length) > charLimit ? 'visible' : 'hidden';

    var readMoreTxt = (message.length) > charLimit ? '...' : '';

    console.log('**banner-special announcements total charLimit: ' + charLimit + ', message.length : ' + message.length);

    var bannerMessage = message.substring(0, charLimit);
    var readMoreMsg = 'Read More';
    var readLessMsg = 'Read Less';

    var announcementClass = "special-announcement-banner" + index;
    var readLessClass = "ihg-read-less-link" + index;
    var readMoreClass = "ihg-read-more-link" + index;
    var expandMessageID = "ihg-expanded-messaging" + index;
    var collapseMessageID = "ihg-collapsed-messaging" + index;


    var bannerHTML = '' +
        '<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 ' + announcementClass + '" style="background-color:#FFFFFF; border-bottom:2px solid #058EA2">' +
        '<div style="background-color:#FFFFFF; margin:auto; position:relative; width:70%">' +
        '<p class="col-xs-9 col-sm-9 col-md-9 col-lg-9 ' + expandMessageID + '" style="color:#000000; display:none; font-family:\'Proxima Nova\', sans-serif; font-size:16px; font-weight:600; letter-spacing:0; ' +
        'line-height:24px; padding:20px 0 20px 0; text-align:left">' +
        message + '<br><br>' +
        '<span onclick="readLessAnnouncementBanner(' + index + ')"  onmouseover="this.style.textDecoration=\'underline\'; this.style.textDecorationColor=\'#058EA2\'; this.style.textUnderlinePosition=\'under\'" onmouseleave="this.style.textDecoration=\'none\';" style="color:#000000; cursor:pointer;">' +
        readLessMsg +
        '</span>' +
        '</p>' +
        '<p class="col-xs-9 col-sm-9 col-md-9 col-lg-9 ' + collapseMessageID + '" style="color:#000000; display:inline-block; font-family:\'Proxima Nova\', sans-serif; font-size:16px; font-weight:600; letter-spacing:0; ' +
        'line-height:24px; padding:20px 0 20px 0; text-align:left">' +
        bannerMessage + readMoreTxt +
        '</p>' +
        '<p id="' + readMoreClass + '" onclick="readMoreAnnouncementBanner(' + index + ')" class="col-xs-2 col-sm-2 col-md-2 col-lg-2 ' + readMoreClass + '" onmouseover="this.style.textDecoration=\'underline\'; this.style.textDecorationColor=\'#058EA2\'; this.style.textUnderlinePosition=\'under\'" onmouseleave="this.style.textDecoration=\'none\';" style="color:#000000; cursor:pointer; ' +
        'display:inline-block; font-family:\'Proxima Nova\', sans-serif; font-size:16px; font-weight:600; letter-spacing:0; ' +
        'line-height:24px; padding:20px 0 0 0; visibility:' + readVisbility + '">' +
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

        var mobileNav = document.querySelector('.mobileNavManuWrapper');
        if (!!mobileNav) {
            mobileNav.insertAdjacentHTML('beforeend', bannerHTML);
        }

    } catch (err) {
        console.log('**banner-special announcements error: ' + err);
    }


};
window.closeAnnouncementBanner = function (index) {
    var announcementClass = ".special-announcement-banner" + index;
    jQuery(announcementClass).hide();
};

window.readMoreAnnouncementBanner = function (index) {

    var expandMessageID = ".ihg-expanded-messaging" + index;
    var collapseMessageID = ".ihg-collapsed-messaging" + index;


    jQuery(expandMessageID).show();
    jQuery(collapseMessageID).hide();


    var readMoreClass = ".ihg-read-more-link" + index;
    jQuery(readMoreClass).css("visibility", "hidden");
};

window.readLessAnnouncementBanner = function (index) {

    var expandMessageID = ".ihg-expanded-messaging" + index;
    var collapseMessageID = ".ihg-collapsed-messaging" + index;


    jQuery(expandMessageID).hide();
    jQuery(collapseMessageID).show();

    var readMoreClass = ".ihg-read-more-link" + index;
    jQuery(readMoreClass).css("visibility", "visible");

};