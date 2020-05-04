
var hotelInfoList = [];

var hotelSpecificMessage = "";
var voucherNotificationsDetailMessage = "";

var mq = window.matchMedia("(min-width: 992px)");

mq.addEventListener("change", function () {
    widthChange(mq);
});

window.widthChange = function (mq) {
    if (mq.matches) { // MVP and LVP
        if (document.getElementById("cancelBannerMsg")) {
            document.getElementById("cancelBannerMsg").style.padding = '18px 101px 18px 101px';
        }
        if (document.getElementById("voucherBannerMsg")) {
            document.getElementById("voucherBannerMsg").style.padding = '18px 101px 18px 101px';
            document.getElementById("voucherBannerMsg").style.borderImage = 'linear-gradient(to right, rgb(255, 224, 130) 101px, rgb(0, 0, 0) 20px, rgb(0, 0, 0) calc(100% - 100px), rgb(255, 224, 130) calc(100% - 105px)) 1 / 1 / 0 stretch';
            document.getElementById("voucherBannerMsg").style.borderImageSlice = '1';
        }



    } else { // XSVP and SVP

        if (document.getElementById("cancelBannerMsg")) {
            document.getElementById("cancelBannerMsg").style.padding = '15px 10px 15px 10px';
        }
        if (document.getElementById("voucherBannerMsg")) {

            document.getElementById("voucherBannerMsg").style.padding = '15px 10px 15px 10px';
            document.getElementById("voucherBannerMsg").style.borderImage = 'linear-gradient(to right, rgb(255, 224, 130) 10px, rgb(0, 0, 0) 0px, rgb(0, 0, 0) calc(100% - 10px), rgb(255, 224, 130) calc(100% - 15px)) 1 / 1 / 0 stretch';
            document.getElementById("voucherBannerMsg").style.borderImageSlice = '1';

        }

    }
};

window.downloadHotelMessages = function () {
    try {

        var langPart = "/resources/us/en";

        var path = location.pathname;

        if (path.indexOf('/us/en/') != -1) {
            langPart = "/resources/us/en";
        } else if (path.indexOf('/gb/en/') != -1) {
            langPart = "/resources/us/en";
        } else if (path.indexOf('/us/es/') != -1) {
            langPart = "/resources/us/es";
        } else if (path.indexOf('/pt/pt/') != -1) {
            langPart = "/resources/pt/pt";
        } else if (path.indexOf('/fr/fr/') != -1) {
            langPart = "/resources/fr/fr";
        } else if (path.indexOf('/de/de/') != -1) {
            langPart = "/resources/de/de";
        } else if (path.indexOf('/it/it/') != -1) {
            langPart = "/resources/it/it";
        } else if (path.indexOf('/nl/nl/') != -1) {
            langPart = "/resources/nl/nl";
        } else if (path.indexOf('/ru/ru/') != -1) {
            langPart = "/resources/ru/ru";
        } else if (path.indexOf('/kr/ko/') != -1) {
            langPart = "/resources/kr/ko";
        } else if (path.indexOf('/tr/tr/') != -1) {
            langPart = "/resources/tr/tr";
        } else if (path.indexOf('/th/th/') != -1) {
            langPart = "/resources/th/th";
        } else if (path.indexOf('/id/in/') != -1) {
            langPart = "/resources/id/in";
        } else if (path.indexOf('/cn/zh/') != -1) {
            langPart = "/resources/cn/zh";
        } else if (path.indexOf('/tw/zh/') != -1) {
            langPart = "/resources/tw/zh";
        } else if (path.indexOf('/jp/ja/') != -1) {
            langPart = "/resources/jp/ja";
        } else if (path.indexOf('/ae/ar/') != -1) {
            langPart = "/resources/ae/ar";
        }

        var randNum = Math.random() * 1000000;


        var apiURL = "https://" + location.hostname + langPart + "/cdn/vendor/ihgcfg/special-use-hotels-smartling.json?nocache=true&rand=" + randNum;
        /*
                if (location.hostname.indexOf('staging') != -1) {
                    apiURL = "https://staging.www.ihg.com/cdn/vendor/ihgcfg/special-use-hotels.json";
        
                } else if (location.hostname.indexOf('qap') != -1) {
                    apiURL = "https://qap.www.ihg.com/cdn/vendor/ihgcfg/special-use-hotels.json";
                }
                */
        console.log("**banner  loading info service apiURL : " + apiURL);
        /*
        jQuery.getJSON(apiURL, function (result) {
            if (null != result && result.length > 0) {
                hotelInfoList = result;
            }
            processHotelMessages();
        }); */



        jQuery.ajax({
            url: apiURL,
            async: false,
            cache: false,
            success: function (result) {
                if (typeof result === 'string') {
                    result = JSON.parse(result);
                }
                if (typeof result.hotels === 'object') {
                    if (null != result.hotels && result.hotels.length > 0) {
                        hotelInfoList = result.hotels;
                    } else {
                        console.log("**banner no hotels loaded from the cdn URL");
                    }
                    window.processHotelMessages();

                }
            },
            error: function (req, status, msg) {
                console.log('**banner failed to download json (' + status + '): ' + msg);
            }
        });




    } catch (err) {
        console.error("**banner downloadHotelMessages  error " + err);
    }
};

window.logResultsProcess2 = function (result) {
    //console.log("**banner  llogResultsProcess : " + logResultsProcess.length);
    if (null != result && result.length > 0) {
        hotelInfoList = result;
    }
    window.processHotelMessages();
};

function logResults(json) {
    console.log(json);
}

downloadHotelMessages();



window.processVoucherNotificationsDetails = function () {
    try {
        //reset voucher messages
        voucherNotificationsDetailMessage = "";

        var path = location.pathname;

        if (path.indexOf('/stay-mgmt/reservation-cancellation') > 0 || path.indexOf('/stay-mgmt/cancellation-confirmation') > 0) {

            var langPart = "/resources/us/en";
            if (path.indexOf('/us/en/') != -1) {
                langPart = "/resources/us/en";
            } else if (path.indexOf('/gb/en/') != -1) {
                langPart = "/resources/us/en";
            } else if (path.indexOf('/us/es/') != -1) {
                langPart = "/resources/us/es";
            } else if (path.indexOf('/pt/pt/') != -1) {
                langPart = "/resources/pt/pt";
            } else if (path.indexOf('/fr/fr/') != -1) {
                langPart = "/resources/fr/fr";
            } else if (path.indexOf('/de/de/') != -1) {
                langPart = "/resources/de/de";
            } else if (path.indexOf('/it/it/') != -1) {
                langPart = "/resources/it/it";
            } else if (path.indexOf('/nl/nl/') != -1) {
                langPart = "/resources/nl/nl";
            } else if (path.indexOf('/ru/ru/') != -1) {
                langPart = "/resources/ru/ru";
            } else if (path.indexOf('/kr/ko/') != -1) {
                langPart = "/resources/kr/ko";
            } else if (path.indexOf('/tr/tr/') != -1) {
                langPart = "/resources/tr/tr";
            } else if (path.indexOf('/th/th/') != -1) {
                langPart = "/resources/th/th";
            } else if (path.indexOf('/id/in/') != -1) {
                langPart = "/resources/id/in";
            } else if (path.indexOf('/cn/zh/') != -1) {
                langPart = "/resources/cn/zh";
            } else if (path.indexOf('/tw/zh/') != -1) {
                langPart = "/resources/tw/zh";
            } else if (path.indexOf('/jp/ja/') != -1) {
                langPart = "/resources/jp/ja";
            } else if (path.indexOf('/ae/ar/') != -1) {
                langPart = "/resources/ae/ar";
            }

            var randNum = Math.random() * 1000000;


            var apiURL = "https://" + location.hostname + langPart + "/cdn/vendor/ihgcfg/region-messages.json?nocache=true&rand=" + randNum;

            console.log("**banner voucher notifications loading info service apiURL : " + apiURL);


            jQuery.ajax({
                url: apiURL,
                async: false,
                cache: false,
                success: function (result) {
                    if (typeof result === 'string') {
                        result = JSON.parse(result);
                    }
                    if (typeof result === 'object') {
                        processVoucherNotificationsResponse(result);
                    }
                },
                error: function (req, status, msg) {
                    console.log('**banner voucher notifications failed to download json (' + status + '): ' + msg);
                }
            });

        } else {
            console.log("**banner voucher notifications banner - not reqd for page : " + path);
        }

    } catch (err) {
        console.log("**banner voucher notifications banner - api err : " + err);
    }
};


window.processVoucherNotificationsResponse = function (result) {


    if (null !== result && null !== result.global) {
        //console.log("**banner voucher notifications result : " + JSON.stringify(result.global));

        var exceptionCountries = null;
        if (null !== result.global.exceptions) {
            exceptionCountries = result.global.exceptions;
        }

        var hotelCountryCode = "";
        if (trackingJson) {
            hotelCountryCode = trackingJson.hotelCountryCode ? trackingJson.hotelCountryCode.toUpperCase() : "";
        }


        var excludeException = false;
        if (null != exceptionCountries && exceptionCountries.length > 0) {
            var i = 0;

            for (i = 0; i < exceptionCountries.length; i++) {
                if (hotelCountryCode === exceptionCountries[i].toUpperCase()) {
                    excludeException = true;
                }
            }
        }

        console.log("**banner voucher notifications hotelCountryCode : " + hotelCountryCode + ", exceptionCountries : " + JSON.stringify(exceptionCountries) + ", excludeException :" + excludeException);


        if (!excludeException) {
            if (null !== result.global.countries) {

                var messageCountries = result.global.countries;
                if (null != messageCountries && messageCountries.length > 0) {

                    var i = 0;

                    for (i = 0; i < messageCountries.length; i++) {
                        if (hotelCountryCode === messageCountries[i].countryCode.toUpperCase()) {
                            //  console.log("**banner voucher notifications process message for hotelCountryCode : " + hotelCountryCode);
                            processVoucherForCountry(messageCountries[i]);
                        }
                    }
                }
            }
        }

    } else {
        console.log("**banner voucher notifications result global missing");
    }

};


window.processVoucherForCountry = function (message) {
    try {


        if (null != message) {

            var hotelCountryCode = "";
            if (trackingJson) {
                hotelCountryCode = trackingJson.hotelCountryCode ? trackingJson.hotelCountryCode.toUpperCase() : "";
            }
            var propertyCode = "";
            if (trackingJson) {
                propertyCode = trackingJson.propertyCode ? trackingJson.propertyCode.toUpperCase() : "";
            }
            var checkInDate = "";
            if (trackingJson) {
                checkInDate = trackingJson.checkInDate ? trackingJson.checkInDate.toUpperCase() : "";
            }
            var checkOutDate = "";
            if (trackingJson) {
                checkOutDate = trackingJson.checkOutDate ? trackingJson.checkOutDate.toUpperCase() : "";
            }



            if (null !== checkInDate && checkInDate.length > 4 && null != checkOutDate && checkOutDate.length > 4) {
                console.log('**banner voucher notifications hotelCountryCode : ' + hotelCountryCode + ', propertyCode  : ' + propertyCode + ', checkInDate : ' + checkInDate + ', checkOutDate : ' + checkOutDate + ', message : ' + JSON.stringify(message));

                var startDate = new Date(message.startDate + 'T00:00:00');
                var endDate = new Date(message.endDate + 'T00:00:00');


                var checkInDate = checkInDate.split("/");
                var checkOutDate = checkOutDate.split("/");

                if (checkOutDate.length === 3 && checkInDate.length === 3) {

                    if (checkInDate[0].length === 1) {
                        checkInDate[0] = '0' + checkInDate[0];
                    }
                    if (checkInDate[1].length === 1) {
                        checkInDate[1] = '0' + checkInDate[1];
                    }
                    if (checkOutDate[0].length === 1) {
                        checkOutDate[0] = '0' + checkOutDate[0];
                    }
                    if (checkOutDate[1].length === 1) {
                        checkOutDate[1] = '0' + checkOutDate[1];
                    }


                    var checkStartDate = new Date(checkInDate[2] + '-' + checkInDate[0] + '-' + checkInDate[1] + 'T00:00:00');
                    var checkEndDate = new Date(checkOutDate[2] + '-' + checkOutDate[0] + '-' + checkOutDate[1] + 'T00:00:00');


                    //console.log('**banner voucher notifications hotelCountryCode : ' + hotelCountryCode + ', propertyCode  : ' + propertyCode + ', startDate : ' + startDate + ', endDate : ' + endDate + ', checkStartDate : ' + checkStartDate + ', checkEndDate : ' + checkEndDate);


                    if (checkStartDate >= startDate && checkStartDate <= endDate) {
                        voucherNotificationsDetailMessage = message.messages;
                    } else if (checkEndDate >= startDate && checkEndDate <= endDate) {
                        voucherNotificationsDetailMessage = message.messages;
                    } else {
                        console.log('**banner voucher notifications message skipped dates not fall within checkin/out range hotelCountryCode : ' + hotelCountryCode + ', propertyCode  : ' + propertyCode + ', checkInDate : ' + checkInDate + ', checkOutDate : ' + checkOutDate);
                    }
                    console.log('**banner voucher notifications hotelCountryCode : ' + hotelCountryCode + ', propertyCode  : ' + propertyCode + ', startDate : ' + startDate + ', endDate : ' + endDate + ', checkStartDate : ' + checkStartDate + ', checkEndDate : ' + checkEndDate + ', voucherNotificationsDetailMessage : ' + voucherNotificationsDetailMessage);

                }

            }

        }

    } catch (err) {
        console.log("**banner error voucher notifications processVoucherForCountry : " + err);
    }
};

window.processHotelMessages = function () {

    try {
        hotelSpecificMessage = "";

        console.log("**banner  Total Hotels in processing list : " + hotelInfoList.length);
        jQuery.each(hotelInfoList, function (i, hotelItem) {
            try {
                handleHotelItem(hotelItem);

            } catch (err) {
                console.error("**banner processHotelMessages hotel processing error " + err);
            }

        });


    } catch (err) {
        console.error("**banner processHotelMessages  error " + err);
    }
};

window.handleSearchListViewMessages = function () {
    setTimeout(function () {

        var path = location.pathname;

        if (path.indexOf("find-hotels/hotel/list") != -1) {

            var checkInDate = trackingJson.checkInDate;
            var checkOutDate = trackingJson.checkOutDate;

            console.log("**banner handle list view hotel messages Total Hotels in processing list : " + hotelInfoList.length + ", checkInDate :" + checkInDate + ", checkOutDate :" + checkOutDate);

            jQuery.each(hotelInfoList, function (i, hotelItem) {
                try {
                    if (null != hotelItem && null != hotelItem.hotelMnemonic) {


                        var divIDList = "hotelId-" + hotelItem.hotelMnemonic.toUpperCase();

                        var divElement = document.getElementById(divIDList);

                        if (null != divElement) {
                            //console.log("**banner process hotel id " + hotelItem.hotelMnemonic);
                            var listMessages = handleHotelItemForList(hotelItem);
                            if (null != listMessages && listMessages.length > 0) {
                                //console.log("**banner handle list diplay message for hotel : " + hotelItem.hotelMnemonic + ", message : " + listMessages);

                                handleListHotelSpecifcMessage(hotelItem.hotelMnemonic.toUpperCase(), listMessages);

                            }
                        } else {
                            // console.log("**banner no banner needed missing div : " + divIDList);
                        }
                    }
                } catch (err) {
                    console.error("**banner handleSearchListViewMessages hotel processing error " + err);
                }

            });
        } else {
            console.log("**banner hotel specific red banner not loaded for path : " + path);
        }

    }, 3000);
};
window.handleListHotelSpecifcMessage = function (hotelCode, listMessages) {

    // console.log("**banner handleListHotelSpecifcMessage banner for hotel : " + hotelCode);
    try {
        var divIDList = "hotelId-" + hotelCode.toUpperCase();

        var divIDListMessage = "banner-hotelId-" + hotelCode.toUpperCase();
        var hotelMessageContainer = document.getElementById(divIDListMessage);

        if (null != hotelMessageContainer) {
            //console.log("**banner already exists for hotel : " + hotelCode);
        } else {
            //console.log("**banner about to adding banner for hotel : " + hotelCode);
            var hotelMessage = '<p style="display:table-cell; padding:18px 101px 18px 101px; text-align:left; vertical-align:middle"><i class="fa fa-exclamation-triangle" aria-hidden="true"></i>' + listMessages + '</p> ';

            /* Search page banner */
            var searchRedCovidBannerHTML = '' +
                '<div class="row" id="' + divIDListMessage + '">' +
                '<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">' +
                '<div style="background-color:#FFC6C6; color:#A00303 ; display:table; font-family:\'Graphik-Medium\',sans-serif; font-size:16px; height:100%; min-height:35px; width:100%">' +
                hotelMessage +
                '</div>' +
                '</div>' +
                '</div>';
            var searchHotelContainer = document.getElementById(divIDList);
            if (!!searchHotelContainer) {
                var searchHotelOfferContainer = searchHotelContainer.querySelector('.hotel-offer-container');

                if (!!searchHotelOfferContainer) {
                    searchHotelOfferContainer.style.marginBottom = '20px';
                    searchHotelOfferContainer.insertAdjacentHTML('beforeend', searchRedCovidBannerHTML);
                    console.log("**banner added banner  .hotel-offer-container for hotel : " + hotelCode + " div :" + divIDList);
                } else {
                    // console.log("**banner add missed searchHotelOfferContainer is null : " + hotelCode + " .hotel-offer-container is missing");
                }

                var searchBulkAvailInfoContainer = searchHotelContainer.querySelector('.bulkAvailInfoContainer');

                if (!!searchBulkAvailInfoContainer) {
                    searchBulkAvailInfoContainer.style.marginBottom = '20px';
                    searchBulkAvailInfoContainer.insertAdjacentHTML('beforeend', searchRedCovidBannerHTML);
                    console.log("**banner added .bulkAvailInfoContainer banner for hotel : " + hotelCode + " div :" + divIDList);
                } else {
                    // console.log("**banner add missed searchBulkAvailInfoContainer is null : " + hotelCode + " .bulkAvailInfoContainer is missing");
                }


            } else {
                // console.log("**banner add missed missing .hotel-offer-container : " + hotelCode);
            }
            /* End Search page banner */
        }


    } catch (err) {
        console.log("**banner handleHotelItemForList hotel(" + hotelCode + ") processing error " + err);
    }
};

window.handleHotelItemForList = function (hotelItem) {
    try {


        var propertyCode = hotelItem.hotelMnemonic;
        var checkInDate = trackingJson.checkInDate;
        var checkOutDate = trackingJson.checkOutDate;

        if (null !== checkInDate && null != checkOutDate) {
            // console.log("**banner handle hotel specific message for propertyCode : " + propertyCode + ", checkInDate : " + checkInDate + ", checkOutDate : " + checkOutDate);
            var hotelMnemonic = hotelItem.hotelMnemonic;
            var startDate = new Date(hotelItem.startDate + 'T00:00:00');
            var endDate = new Date(hotelItem.endDate + 'T00:00:00');
            var messages = hotelItem.messages;

            var checkInDate = trackingJson.checkInDate.split("/");
            var checkOutDate = trackingJson.checkOutDate.split("/");

            if (checkOutDate.length === 3 && checkInDate.length === 3) {

                var checkStartDate = new Date(checkInDate[2] + '-' + checkInDate[0] + '-' + checkInDate[1] + 'T00:00:00');
                var checkEndDate = new Date(checkOutDate[2] + '-' + checkOutDate[0] + '-' + checkOutDate[1] + 'T00:00:00');

                //console.log("**banner : " + propertyCode + ",startDate : " + startDate + ", endDate : " + endDate);
                //console.log("**banner : " + propertyCode + ",checkStartDate : " + checkStartDate + ", checkEndDate : " + checkEndDate);

                if (checkStartDate >= startDate && checkStartDate <= endDate) {
                    // console.log("**banner for list checkStartDate show hotel message for : " + propertyCode + ", message : " + messages);
                    return messages;
                }


                if (checkEndDate >= startDate && checkEndDate <= endDate) {
                    // console.log("**banner for list checkEndDate show hotel message for : " + propertyCode + ", message : " + messages);
                    return messages;
                }
            }

        }

        return null;

    } catch (err) {
        console.log("**banner handleHotelItemForList hotel processing error " + err);
    }
    return null;
};



window.handleHotelItem = function (hotelItem) {
    try {


        var propertyCode = trackingJson.propertyCode;
        var checkInDate = trackingJson.checkInDate;
        var checkOutDate = trackingJson.checkOutDate;


        if (null != propertyCode && propertyCode.toUpperCase() === hotelItem.hotelMnemonic.toUpperCase() && location.pathname.indexOf("/account-mgmt/staydetails") > 0) {
            var messages = hotelItem.messages;
            hotelSpecificMessage = messages;
            console.log("**banner handle hotel specific message for staydetails message : " + hotelSpecificMessage);
        }


        if (null != propertyCode && propertyCode.toUpperCase() === hotelItem.hotelMnemonic.toUpperCase() && null !== checkInDate && null != checkOutDate) {
            // console.log("**banner handle hotel specific message for propertyCode : " + propertyCode + ", checkInDate : " + checkInDate + ", checkOutDate : " + checkOutDate);
            var hotelMnemonic = hotelItem.hotelMnemonic;
            var startDate = new Date(hotelItem.startDate + 'T00:00:00');
            var endDate = new Date(hotelItem.endDate + 'T00:00:00');
            var messages = hotelItem.messages;

            var checkInDate = trackingJson.checkInDate.split("/");
            var checkOutDate = trackingJson.checkOutDate.split("/");

            if (checkOutDate.length === 3 && checkInDate.length === 3) {

                var checkStartDate = new Date(checkInDate[2] + '-' + checkInDate[0] + '-' + checkInDate[1] + 'T00:00:00');
                var checkEndDate = new Date(checkOutDate[2] + '-' + checkOutDate[0] + '-' + checkOutDate[1] + 'T00:00:00');

                //console.log("**banner : " + propertyCode + ",startDate : " + startDate + ", endDate : " + endDate);
                //console.log("**banner : " + propertyCode + ",checkStartDate : " + checkStartDate + ", checkEndDate : " + checkEndDate);

                if (checkStartDate >= startDate && checkStartDate <= endDate) {
                    // console.log("**banner checkStartDate show hotel message for : " + propertyCode + ", message : " + messages);
                    hotelSpecificMessage = messages;
                }


                if (checkEndDate >= startDate && checkEndDate <= endDate) {
                    //  console.log("**banner checkEndDate show hotel message for : " + propertyCode + ", message : " + messages);
                    hotelSpecificMessage = messages;
                }

                if (null != hotelSpecificMessage && hotelSpecificMessage.length > 0) {
                    console.log("**banner handle hotel specific message for propertyCode : " + propertyCode + ", checkInDate : " + checkInDate + ", checkOutDate : " + checkOutDate + ", message : " + hotelSpecificMessage);
                }

            }

        }



    } catch (err) {
        console.log("**banner handleHotelItem hotel processing error " + err);
    }
};


window.loadCovidBanner = function () {



    jQuery("#athena-covid-19-banner").hide();
    jQuery(".athena-covid-19-banner").hide();
    jQuery("#athena-covid-19-red-banner").hide();

    var bannerLinks = {};
    bannerLinks.USEN = "https://www.ihg.com/content/us/en/customer-care/travel-advisory";
    bannerLinks.GBEN = "https://www.ihg.com/content/gb/en/customer-care/travel-advisory";
    bannerLinks.USES = "https://www.ihg.com/content/us/es/customer-care/travel-advisory";
    bannerLinks.FRFR = "https://www.ihg.com/content/fr/fr/customer-care/travel-advisory";
    bannerLinks.DEDE = "https://www.ihg.com/content/de/de/customer-care/travel-advisory";
    bannerLinks.PTPT = "https://www.ihg.com/content/pt/pt/customer-care/travel-advisory";
    bannerLinks.ITIT = "https://www.ihg.com/content/it/it/customer-care/travel-advisory";
    bannerLinks.AEAR = "https://www.ihg.com/content/ae/ar/customer-care/travel-advisory";
    bannerLinks.JPJA = "https://www.ihg.com/content/jp/ja/customer-care/travel-advisory";
    bannerLinks.CNZH = "https://www.ihg.com/content/cn/zh/customer-care/travel-advisory";
    bannerLinks.TWZH = "https://www.ihg.com/content/tw/zh/customer-care/travel-advisory";
    bannerLinks.KRKO = "https://www.ihg.com/content/kr/ko/customer-care/travel-advisory";
    bannerLinks.THTH = "https://www.ihg.com/content/th/th/customer-care/travel-advisory";
    bannerLinks.IDIN = "https://www.ihg.com/content/id/in/customer-care/travel-advisory";
    bannerLinks.NLNL = "https://www.ihg.com/content/nl/nl/customer-care/travel-advisory";
    bannerLinks.RURU = "https://www.ihg.com/content/ru/ru/customer-care/travel-advisory";
    bannerLinks.TRTR = "https://www.ihg.com/content/tr/tr/customer-care/travel-advisory";


    if (location.pathname.indexOf("/account-mgmt/staydetails") > 0) {

        console.log("**banner staydetails fetch properyCode from hotel details link");
        var properyCode = "";
        jQuery('a.inline-cta').each(function () {
            var path = jQuery(this).attr('href');
            if (path && path.indexOf("/hoteldetail/") > 0) {
                console.log("**banner staydetails fetch properyCode from path : " + path);
                var endIndex = path.indexOf("/hoteldetail/");
                var startIndex = endIndex - 5;
                properyCode = path.substring(startIndex, endIndex);

            }
        });
        console.log("**banner staydetails fetched properyCode : " + properyCode);
        if (!!properyCode) {
            trackingJson.propertyCode = properyCode.toUpperCase();;
        }
    }





    /* Languages */
    var bannerMsg = {};
    //bannerMsg.USEN = '<p style="display:table-cell; padding:18px 101px 18px 101px; text-align:left; vertical-align:middle">We are <strong>waiving our cancellation fees</strong> for bookings at all IHG hotels for stays through <strong>April 30.</strong></p>';
    bannerMsg.USEN = '<p id="cancelBannerMsg" style="display:table-cell; padding:18px 101px 18px 101px; text-align:left; vertical-align:middle">Existing bookings can be changed or cancelled for stays up to <strong>June 30, 2020.</strong><br>Some conditions apply, so please see our <a href="' + bannerLinks.USEN + '" target="_blank"><font color="blue"><u>travel advisory</u></font></a> for full details and more information.</p>'
    bannerMsg.GBEN = '<p id="cancelBannerMsg" style="display:table-cell; padding:18px 101px 18px 101px; text-align:left; vertical-align:middle">Existing bookings can be changed or cancelled for stays up to <strong>June 30, 2020.</strong><br>Some conditions apply, so please see our <a href="' + bannerLinks.GBEN + '" target="_blank"><font color="blue"><u>travel advisory</u></font></a> for full details and more information.</p>'
    bannerMsg.USES = '<p id="cancelBannerMsg" style="display:table-cell; padding:18px 101px 18px 101px; text-align:left; vertical-align:middle">Las reservas existentes se pueden cambiar o cancelar para estadías hasta el <strong>30 de junio de 2020;</strong> se aplican algunas condiciones, por lo que recomendamos que consulte los siguientes <a href="' + bannerLinks.USES + '" target="_blank"><font color="blue"><u>consejos sobre viajes</u></font></a> para obtener detalles completos y más información.</p>';
    bannerMsg.FRFR = '<p id="cancelBannerMsg" style="display:table-cell; padding:18px 101px 18px 101px; text-align:left; vertical-align:middle">Les réservations en cours peuvent être modifiées ou annulées pour des séjours jusqu\'au <strong>30 juin 2020</strong>. Cette possibilité est assortie de conditions , merci de consulter la rubrique  <a href="' + bannerLinks.FRFR + '" target="_blank"><font color="blue"><u>conseils de voyage</u></font></a> pour obtenir toutes les précisions et pour plus d\'informations.</p>';
    bannerMsg.DEDE = '<p id="cancelBannerMsg" style="display:table-cell; padding:18px 101px 18px 101px; text-align:left; vertical-align:middle">Bestehende Buchungen können für Aufenthalte bis zum <strong>30. Juni 2020 geändert oder storniert werden</strong>.Es gelten einige Bedingungen, deren Details Sie in unseren <a href="' + bannerLinks.DEDE + '" target="_blank"><font color="blue"><u>Reisehinweisen</u></font></a> nachlesen können.</p>';
    bannerMsg.ITIT = '<p id="cancelBannerMsg" style="display:table-cell; padding:18px 101px 18px 101px; text-align:left; vertical-align:middle">Le prenotazioni esistenti possono essere modificate o cancellate per i soggiorni fino al <strong>30 giugno 2020</strong> - vigono alcune condizioni, pertanto consulta i <a href="' + bannerLinks.ITIT + '" target="_blank"><font color="blue"><u>consigli di viaggio</u></font></a> per i dettagli completi e per maggiori informazioni.</p>';
    bannerMsg.PTPT = '<p id="cancelBannerMsg" style="display:table-cell; padding:18px 101px 18px 101px; text-align:left; vertical-align:middle">As reservas existentes podem ser alteradas ou canceladas para estadas até  <strong>30 de junho de 2020</strong> – aplicam-se algumas condições, então confira a  <a href="' + bannerLinks.PTPT + '" target="_blank"><font color="blue"><u>consultoria de viagens</u></font></a> para obter detalhes completos e mais informações.</p>';
    bannerMsg.NLNL = '<p id="cancelBannerMsg" style="display:table-cell; padding:18px 101px 18px 101px; text-align:left; vertical-align:middle">Bestaande boekingen kunnen worden gewijzigd of geannuleerd voor een verblijf tot  <strong>30 juni 2020</strong>  – er zijn enkele voorwaarden van toepassing, raadpleeg daarom het <a href="' + bannerLinks.NLNL + '" target="_blank"><font color="blue"><u>reisadvies</u></font></a> voor de volledige details en meer informatie.</p>';
    bannerMsg.RURU = '<p id="cancelBannerMsg" style="display:table-cell; padding:18px 101px 18px 101px; text-align:left; vertical-align:middle">Существующие бронирования могут быть изменены или отменены для проживаний до   <strong>30 июня 2020 г</strong>.   - применяются некоторые условия, поэтому для получения более подробной информации см. <a href="' + bannerLinks.RURU + '" target="_blank"><font color="blue"><u>официальные предупреждения для туристов.</u></font></a> </p>';
    bannerMsg.JPJA = '<p id="cancelBannerMsg" style="display:table-cell; padding:18px 101px 18px 101px; text-align:left; vertical-align:middle"><strong>2020年6月30日までのご滞在につきましては、既存のご予約を変更またはキャンセルすることができます。</strong>いくつかの条件が適用される場合がありますので、詳細については <a href="' + bannerLinks.JPJA + '" target="_blank"><font color="blue"><u>渡航情報</u></font></a> をご確認ください。 </p>';
    bannerMsg.KRKO = '<p id="cancelBannerMsg" style="display:table-cell; padding:18px 101px 18px 101px; text-align:left; vertical-align:middle">기존 예약은  <strong>2020년 6월 30일</strong> 까지 변경하거나 취소할 수 있습니다. 몇 가지 조건이 적용되므로, <a href="' + bannerLinks.KRKO + '" target="_blank"><font color="blue"><u>더 자세한 내용은여행 권고 지침을 참고하시기 바랍니다.</u></font></a> </p>'
    bannerMsg.TRTR = '<p id="cancelBannerMsg" style="display:table-cell; padding:18px 101px 18px 101px; text-align:left; vertical-align:middle"><strong>30 Haziran 2020 tarihine kadarki konaklamalar için mevcut olan rezervasyonlar değiştirilebilir veya iptal edilebilir - belirli koşullar geçerlidir, tüm ayrıntılar ve daha fazla bilgi için, lütfen <a href="' + bannerLinks.TRTR + '" target="_blank"><font color="blue"><u>seyahat uyarısına</u></font></a> göz atın.</p>';
    bannerMsg.AEAR = '<p id="cancelBannerMsg" style="display:table-cell; padding:18px 101px 18px 101px; text-align:left; vertical-align:middle">يمكن تغيير أو إلغاء الحجوزات الحالية للإقامات حتى 30 يونيو 2020 - تُطبق بعض الشروط والأحكام، لذا يرجى الاطلاع على صفحة <a href="' + bannerLinks.AEAR + '" target="_blank"><font color="blue"><u>توصيات السفر</u></font></a>  لمعرفة التفاصيل الكاملة والمعلومات الإضافية.</p>';
    bannerMsg.THTH = '<p id="cancelBannerMsg" style="display:table-cell; padding:18px 101px 18px 101px; text-align:left; vertical-align:middle">การจองที่มีอยู่แล้วสามารถเปลี่ยนแปลงหรือยกเลิกได้สำหรับการเข้าพักจนถึงวันที่  <strong>30 มิถุนายน 2563</strong> - โดยมีเงื่อนไขบางประการ ดังนั้น โปรดดูในส่วน<a href="' + bannerLinks.THTH + '" target="_blank"><font color="blue"><u>ที่ปรึกษาการเดินทาง </u></font></a>สำหรับรายละเอียดทั้งหมดและข้อมูลเพิ่มเติม.</p>';
    bannerMsg.IDIN = '<p id="cancelBannerMsg" style="display:table-cell; padding:18px 101px 18px 101px; text-align:left; vertical-align:middle">Pemesanan yang ada dapat diubah atau dibatalkan untuk masa inap hingga <strong>30 Juni 2020 </strong>- beberapa ketentuan berlaku, jadi silakan lihat <a href="' + bannerLinks.IDIN + '" target="_blank"><font color="blue"><u>nasihat perjalanan</u></font></a> untuk detail lengkap dan informasi lebih lanjut. </p>';
    bannerMsg.CNZH = '<p id="cancelBannerMsg" style="display:table-cell; padding:18px 101px 18px 101px; text-align:left; vertical-align:middle"></p>';
    bannerMsg.TWZH = '<p id="cancelBannerMsg" style="display:table-cell; padding:18px 101px 18px 101px; text-align:left; vertical-align:middle"></p>';
    /* End languages */

    window.processHotelMessages();


    setTimeout(function () {
        processVoucherNotificationsDetails();
        try {
            var lang = 'USEN';

            var path = location.pathname;

            if (path.indexOf('/us/en/') != -1) {
                lang = 'USEN';
            } else if (path.indexOf('/gb/en/') != -1) {
                lang = 'GBEN';
            } else if (path.indexOf('/us/es/') != -1) {
                lang = 'USES';
            } else if (path.indexOf('/pt/pt/') != -1) {
                lang = 'PTPT';
            } else if (path.indexOf('/fr/fr/') != -1) {
                lang = 'FRFR';
            } else if (path.indexOf('/de/de/') != -1) {
                lang = 'DEDE';
            } else if (path.indexOf('/it/it/') != -1) {
                lang = 'ITIT';
            } else if (path.indexOf('/nl/nl/') != -1) {
                lang = 'NLNL';
            } else if (path.indexOf('/ru/ru/') != -1) {
                lang = 'RURU';
            } else if (path.indexOf('/kr/ko/') != -1) {
                lang = 'KRKO';
            } else if (path.indexOf('/tr/tr/') != -1) {
                lang = 'TRTR';
            } else if (path.indexOf('/th/th/') != -1) {
                lang = 'THTH';
            } else if (path.indexOf('/id/in/') != -1) {
                lang = 'IDIN';
            } else if (path.indexOf('/cn/zh/') != -1) {
                lang = 'CNZH';
            } else if (path.indexOf('/tw/zh/') != -1) {
                lang = 'TWZH';
            } else if (path.indexOf('/jp/ja/') != -1) {
                lang = 'JPJA';
            } else if (path.indexOf('/ae/ar/') != -1) {
                lang = 'AEAR';
            }

            if (null == lang) {
                lang = "USEN";
            }
            if (lang.trim().length < 1) {
                lang = "USEN";
            }

            var ratemMargin = "10px";
            var roomMargin = "20px";


            console.log("**banner lang : " + lang);

            var bannerMessage = bannerMsg[lang];

            console.log("**banner hotel : " + trackingJson.propertyCode + " Message is : " + hotelSpecificMessage);


            var messgesHTML = "";
            if (null != hotelSpecificMessage && hotelSpecificMessage.length >= 1) {
                for (var i = 0; i < hotelSpecificMessage.length; i++) {
                    messgesHTML = messgesHTML + hotelSpecificMessage[i];
                    if ((i + 1) < hotelSpecificMessage.length) {
                        messgesHTML = messgesHTML + "<br>";
                    }
                }
            }


            var hotelMessage = '<p style="display:table-cell; padding:18px 101px 18px 101px; text-align:left; vertical-align:middle"><span style="font-size:20px">&#9888;  </span>' + messgesHTML + '</p> ';



            if (location.pathname.indexOf("/find-hotels/select-room") > 0 || location.pathname.indexOf("/pay/reservation-view") > 0 || location.pathname.indexOf("/pay/confirmation") > 0) {
                hotelMessage = '<p style="display:table-cell; padding:18px 101px 18px 101px; text-align:left; vertical-align:middle"><i class="fa fa-exclamation-triangle" aria-hidden="true"></i>' + messgesHTML + '</p>';
            }

            if (location.pathname.indexOf("/pay/reservation-view") > 0 || location.pathname.indexOf("/pay/confirmation") > 0 || location.pathname.indexOf("/account-mgmt/staydetails") > 0) {
                hotelMessage = '<p style="padding:10px 10px 15px 10px; text-align:center; vertical-align:middle"><span style="color:#A00303; font-size:20px">&#9888;  </span> ' + messgesHTML + '</p> ';
            }

            var roomsRedCovidBannerHTML = "";
            var ratesRedCovidBannerHTML = "";
            var payRedCovidBannerHTML = "";
            var crrRedCovidBannerHTML = "";
            var confRedCovidBannerHTML = "";
            var stayRedCovidBannerHTML = "";
            var disableHotelMessageWarning = false;


            var marginHeight = "20px";

            if (null != hotelSpecificMessage && hotelSpecificMessage.length >= 1) {

                disableHotelMessageWarning = true;

                /* Rooms page banners */
                roomsRedCovidBannerHTML = '' +
                    '<div class="row" id="athena-covid-19-red-banner">' +
                    '<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">' +
                    '<div style="background-color:#FFC6C6; color:#A00303; display:table; font-family:\'Graphik-Medium\',sans-serif; font-size:16px; height:100%; margin-bottom:20px; min-height:35px; width:100%">' +
                    hotelMessage +
                    '</div>' +
                    '</div>' +
                    '</div>';

                /* Rates page banners */
                ratesRedCovidBannerHTML = '' +
                    '<div class="row" id="athena-covid-19-red-banner">' +
                    '<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">' +
                    '<div style="background-color:#FFC6C6; color:#A00303; display:table; font-family:\'Graphik-Medium\',sans-serif; font-size:16px; height:100%; margin-bottom:20px; min-height:35px; width:100%">' +
                    hotelMessage +
                    '</div>' +
                    '</div>' +
                    '</div>';

                /* crr page banners */
                crrRedCovidBannerHTML = '' +
                    '<div class="row athena-covid-19-banner" id="athena-covid-19-red-banner">' +
                    '<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">' +
                    '<div style="background-color:#FFC6C6; color:#A00303; display:table; font-family:\'Graphik-Medium\',sans-serif; font-size:16px; height:100%; min-height:35px; width:100%">' +
                    hotelMessage +
                    '</div>' +
                    '</div>' +
                    '</div>';

                /* Pay page banners */
                payRedCovidBannerHTML = '' +
                    '<div class="row" id="athena-covid-19-red-banner">' +
                    '<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">' +
                    '<div style="background-color:#FFC6C6; color:#A00303; display:table; font-family:\'Graphik-Medium\',sans-serif; font-size:16px; height:100%; min-height:35px; width:100%">' +
                    hotelMessage +
                    '</div>' +
                    '</div>' +
                    '</div>';

                /* Confirmation & view confirmation page banners */
                confRedCovidBannerHTML = '' +
                    '<div id="athena-covid-19-red-banner">' +
                    '<div style="display:block; margin:0 auto; max-width:1200px">' +
                    '<div class="container-fluid">' +
                    '<div class="row">' +
                    '<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">' +
                    '<div style="background-color:#FFC6C6; color:#A00303; font-family:\'Graphik-Medium\',sans-serif; font-size:18px; min-height:45px; width:100%">' +
                    hotelMessage +
                    '</div>' +
                    '</div>' +
                    '</div>' +
                    '</div>' +
                    '</div>' +
                    '</div>';

                /* Stay Details page banners */
                stayRedCovidBannerHTML = '' +
                    '<div id="pay-covid-19-red-banner">' +
                    '<div style="background-color:#FFC6C6; color:#A00303; display:table; font-family:\'Graphik-Medium\',sans-serif; font-size:16px; height:100%; min-height:45px; width:100%">' +
                    hotelMessage +
                    '</div>' +
                    '</div>';


                var marginHeight = "0px";
            }


            var roomsBannerHTML = '' +
                '<div class="row" id="athena-covid-19-banner">' +
                '<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">' +
                '<div style="background-color:#FFE082; display:table; font-family:\'Graphik-Medium\',sans-serif; font-size:16px; height:100%; margin-bottom:' + marginHeight + '; min-height:35px; width:100%">' +
                bannerMessage +
                '</div>' +
                '</div>' +
                '</div>';

            var ratesBannerHTML = '' +
                '<div class="row" id="athena-covid-19-banner">' +
                '<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">' +
                '<div style="background-color:#FFE082; display:table; font-family:\'Graphik-Medium\',sans-serif; font-size:16px; height:100%; margin-bottom:' + marginHeight + '; min-height:35px; width:100%">' +
                bannerMessage +
                '</div>' +
                '</div>' +
                '</div>';

            var crrBannerHTML = '' +
                '<div class="row athena-covid-19-banner" id="athena-covid-19-banner">' +
                '<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">' +
                '<div style="background-color:#FFE082; display:table; font-family:\'Graphik-Medium\',sans-serif; font-size:16px; height:100%; min-height:35px; width:100%">' +
                bannerMessage +
                '</div>' +
                '</div>' +
                '</div>';




            var payBannerHTML = '' +
                '<div class="row" id="athena-covid-19-banner">' +
                '<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">' +
                '<div style="background-color:#FFE082; display:table; font-family:\'Graphik-Medium\',sans-serif; font-size:16px; height:100%; min-height:35px; width:100%">' +
                bannerMessage +
                '</div>' +
                '</div>' +
                '</div>';



            var manageStayBannerHTML = '' +
                '<div class="row" id="athena-covid-19-banner">' +
                '<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">' +
                '<div style="background-color:#FFE082; display:table; font-family:\'Graphik-Medium\',sans-serif; font-size:16px; height:100%; margin-bottom:20px; min-height:35px; width:100%">' +
                bannerMessage +
                '</div>' +
                '</div>' +
                '</div>';




            if (
                path.indexOf("find-hotels/hotel/rooms") > -1 ||
                path.indexOf("find-hotels/hotel/rates") > -1 ||
                path.indexOf("find-hotels/select-room") > -1 ||
                path.indexOf("pay/payment") > -1 ||
                path.indexOf("stay-mgmt/ManageYourStay") > -1 ||
                path.indexOf("stay-mgmt/reservation-cancellation") > -1 || path.indexOf("stay-mgmt/cancellation-confirmation") > -1 ||
                path.indexOf("/pay/confirmation") > -1 ||
                path.indexOf("/pay/reservation-view") > -1 || location.pathname.indexOf("/account-mgmt/staydetails") > -1 || location.pathname.indexOf("/account-mgmt/staysevents") > -1

            ) {
                console.log("**banner show banner for : " + path);

                var roomListContainer = document.querySelector('.hotel-rooms-list');
                var ratesListContainer = document.querySelector('.hotel-rates-list');
                var payContainer = document.querySelector('[ui-view="hotel-summary"]');
                var roomRateOverview = document.querySelector('room-rate-overview .overview');
                var cancelContainer = document.querySelector('.cancel-reservation-layout');
                var manageStayContainer = document.querySelector('.stay-mgmt.theme-ihg');


                if (location.pathname.indexOf("/account-mgmt/staysevents") > -1) {
                    var manageStayContainerExp = document.querySelector('.stays-events-title');

                    if (window.loadCovidBannerManange === 0) {
                        console.log("**banner adding banner for manage reservation view");


                        if (!!manageStayContainerExp) {

                            if (!isMessageBannerExcluded()) {
                                manageStayContainerExp.insertAdjacentHTML('afterend', manageStayBannerHTML);
                            } else {
                                console.log("**banner  common message banner execluded for china");
                            }
                        }
                        window.loadCovidBannerManange = 1;
                        console.log("**banner added banner for manage reservation view");
                    } else {
                        console.log("**banner banner already displayed manage reservation view");
                    }

                }


                if (location.pathname.indexOf("/account-mgmt/staydetails") > -1) {
                    var hotelImage = document.querySelector('.hotel-image');

                    if (!!hotelImage) {
                        if (window.loadCovidBannerConf === 0) {
                            if (disableHotelMessageWarning) {
                                console.log("**banner adding banner for staydetails view");
                                hotelImage.style.marginBottom = 0;
                                hotelImage.insertAdjacentHTML('beforeend', stayRedCovidBannerHTML);
                                if (!!hotelImage.parentNode) {
                                    var hotelImageParent = hotelImage.parentNode;
                                    var pGutter = hotelImageParent.querySelector('.p-gutter');
                                    if (!!pGutter) {
                                        pGutter.style.marginTop = '10px';
                                    }
                                }
                            }
                            window.loadCovidBannerConf = 1;
                            console.log("**banner added banner for staydetails view");
                        } else {
                            console.log("**banner banner already displayed staydetails view");
                        }
                    }
                }




                if (path.indexOf("/pay/confirmation") > -1 ||
                    path.indexOf("/pay/reservation-view") > -1) {




                    var confMessageModuleContainer = document.querySelector('div[ui-view="message-module"]');


                    if (!!confMessageModuleContainer) {
                        if (window.loadCovidBannerConf === 0) {
                            if (disableHotelMessageWarning) {
                                console.log("**banner adding banner for confirmation view");
                                confMessageModuleContainer.insertAdjacentHTML('afterend', confRedCovidBannerHTML);
                            }
                            window.loadCovidBannerConf = 1;
                            console.log("**banner added banner for confirmation view");
                        } else {
                            console.log("**banner banner already displayed confirmation view");
                        }
                    }


                }



                if (!!roomListContainer) {

                    if (window.loadCovidBannerRooms === 0) {
                        console.log("**banner adding banner for rooms view");


                        if (disableHotelMessageWarning) {
                            roomListContainer.insertAdjacentHTML('afterbegin', roomsRedCovidBannerHTML);
                        }
                        if (!isMessageBannerExcluded()) {
                            roomListContainer.insertAdjacentHTML('afterbegin', roomsBannerHTML);
                        } else {
                            console.log("**banner  common message banner execluded for china");
                        }

                        window.loadCovidBannerRooms = 1;
                        console.log("**banner added banner for rooms view");
                    } else {
                        console.log("**banner banner already displayed rooms view");
                    }
                } else if (!!ratesListContainer) {
                    if (window.loadCovidBannerRates === 0) {
                        console.log("**banner adding banner for rates view");
                        var rateFilters = document.querySelector('rate-filter-buttons');
                        if (!!rateFilters && !!rateFilters.parentNode && !!rateFilters.parentNode.parentNode) {
                            var rateFilterParent = rateFilters.parentNode.parentNode;
                            if (disableHotelMessageWarning) {
                                rateFilterParent.insertAdjacentHTML('afterend', ratesRedCovidBannerHTML);
                            }

                            if (!isMessageBannerExcluded()) {
                                rateFilterParent.insertAdjacentHTML('afterend', ratesBannerHTML);
                            } else {
                                console.log("**banner  common message banner execluded for china");
                            }
                            window.loadCovidBannerRates = 1;
                            console.log("**banner added banner for rates view");
                        }
                    } else {
                        console.log("**banner banner already displayed rates view");
                    }
                } else if (!!roomRateOverview) {
                    if (window.loadCovidBannerCrr === 0) {
                        console.log("**banner adding banner for crr view - hide any existing");

                        jQuery(".athena-covid-19-banner").hide();


                        if (!isMessageBannerExcluded()) {
                            roomRateOverview.insertAdjacentHTML('beforeend', crrBannerHTML);
                        } else {
                            console.log("**banner  common message banner execluded for china");
                        }

                        if (disableHotelMessageWarning) {

                            roomRateOverview.insertAdjacentHTML('beforeend', crrRedCovidBannerHTML);
                        }

                        window.loadCovidBannerCrr = 1;
                        console.log("**banner added banner for crr view");
                    } else {
                        console.log("**banner banner already displayed crr view");
                    }
                }

                else if (!!payContainer) {
                    if (window.loadCovidBannerPay === 0) {
                        console.log("**banner adding banner for pay view");

                        if (!isMessageBannerExcluded()) {
                            payContainer.insertAdjacentHTML('beforeend', payBannerHTML);
                        } else {
                            console.log("**banner  common message banner execluded for china");
                        }



                        if (disableHotelMessageWarning) {
                            payContainer.insertAdjacentHTML('beforeend', payRedCovidBannerHTML);
                        }
                        window.loadCovidBannerPay = 1;
                        console.log("**banner added banner for pay view");
                    } else {
                        console.log("**banner banner already displayed pay view");
                    }
                }
                else if (!!manageStayContainer && path.indexOf("stay-mgmt/ManageYourStay") > -1) {
                    if (window.loadCovidBannerManange === 0) {
                        console.log("**banner adding banner for manage reservation view");

                        var manageStayTitleContainer = document.querySelector('.main-container .flex-column.column');
                        if (!!manageStayTitleContainer) {

                            if (!isMessageBannerExcluded()) {
                                manageStayTitleContainer.insertAdjacentHTML('afterend', manageStayBannerHTML);
                            } else {
                                console.log("**banner  common message banner execluded for china");
                            }
                        }
                        window.loadCovidBannerManange = 1;
                        console.log("**banner added banner for manage reservation view");
                    } else {
                        console.log("**banner banner already displayed manage reservation view");
                    }
                }





                /* Cancellellation Banner */


                var cancelBannerHTML = '' +
                    '<div class="row athena-covid-19-banner" style="margin:0 auto; max-width:1172px" id="athena-covid-19-banner">' +
                    '<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12" style="padding:0px">' +
                    '<div style="background-color:#FFE082; display:table; font-family:\'Graphik-Medium\',sans-serif; font-size:16px; height:100%; margin-bottom:20px; min-height:35px; width:100%">' +
                    bannerMessage +
                    '</div>' +
                    '</div>' +
                    '</div>';

                console.log("**banner banner voucher message is : " + voucherNotificationsDetailMessage);
                var hasVoucherMessage = false;
                // check voucherNotificationsDetailMessage has valid messages
                if (null != voucherNotificationsDetailMessage && voucherNotificationsDetailMessage.length > 0) {
                    hasVoucherMessage = true;
                    console.log("**banner banner voucher message reqd for path : " + path);
                } else {
                    console.log("**banner banner voucher message not reqd for path : " + path);
                }

                /* Voucher Banner */
                var voucherBannerMsg = '<p id="voucherBannerMsg" style="border-image:linear-gradient(to right, rgb(255, 224, 130) 101px, rgb(0, 0, 0) 20px, rgb(0, 0, 0) calc(100% - 100px), rgb(255, 224, 130) calc(100% - 105px)); border-image-slice:1; ' +
                    'border-top: 1px solid transparent; display:table-cell; padding:18px 101px 18px 101px; text-align:left; vertical-align:middle">' + voucherNotificationsDetailMessage + '</p>';

                var voucherResBannerHTML = '' +
                    '<div class="row athena-covid-19-banner" style="margin:0 auto; max-width:1172px" id="athena-covid-19-banner">' +
                    '<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12" style="padding:0px">' +
                    '<div style="background-color:#FFE082; display:table; font-family:\'Graphik-Medium\',sans-serif; font-size:16px; height:100%; margin-bottom:20px; min-height:35px; width:100%">' +
                    voucherBannerMsg +
                    '</div>' +
                    '</div>' +
                    '</div>';


                /* Cancel Reservation page */
                var cancelContainer = document.querySelector('.cancel-reservation-layout');
                if (!!cancelContainer && path.indexOf("stay-mgmt/reservation-cancellation") > -1) {


                    if (window.loadCovidBannerCancel === 0) {
                        console.log("**banner adding banner for cancel reservation view");
                        var titleContainer = document.querySelector('ul.container-title');

                        if (!!titleContainer) {
                            if (!isMessageBannerExcluded()) {
                                titleContainer.insertAdjacentHTML('beforebegin', cancelBannerHTML);
                                if (hasVoucherMessage) {
                                    console.log("**banner adding voucher banner for cancel reservation view");
                                    titleContainer.insertAdjacentHTML('beforebegin', voucherResBannerHTML);
                                }
                            } else {
                                console.log("**banner  common message banner execluded for china");
                            }
                        }
                        window.loadCovidBannerCancel = 1;
                        console.log("**banner added banner for cancel reservation view");
                    } else {
                        console.log("**banner banner already displayed cancel reservation view");
                    }

                }





                /* Cancellation Confirmation page */
                var cancelConfContainer = document.querySelector('.cancel-conf-container');

                if (!!cancelConfContainer && path.indexOf("stay-mgmt/cancellation-confirmation") > -1) {
                    if (window.loadCovidBannerCancel === 0) {
                        console.log("**banner adding banner for cancel reservation confirmation");


                        // var titleContainer = document.getElementById('stayMgmtTitle');
                        var titleContainer = document.querySelector('.flexcontainer-conf');
                        if (!!titleContainer) {

                            if (!isMessageBannerExcluded()) {

                                if (hasVoucherMessage) {
                                    console.log("**banner adding voucher banner for cancel reservation view");
                                    titleContainer.insertAdjacentHTML('afterend', voucherResBannerHTML);
                                }
                                titleContainer.insertAdjacentHTML('afterend', cancelBannerHTML);
                                titleContainer.insertAdjacentHTML('afterend', '<hr>');
                            } else {
                                console.log("**banner common message banner execluded for china");
                            }
                        }

                        window.loadCovidBannerCancel = 1;
                        console.log("**banner added banner for cancel reservation confirmation");
                    } else {
                        console.log("**banner banner already displayed cancel reservation confirmation");
                    }
                }


                //Handle Width Changes 
                widthChange(mq);
            } else {
                console.log("**banner hotel info yellow & red banner not reqd for page : " + path);
            }
        } catch (err) {
            console.error("**banner error : " + err);
        }
    }, 3000);

};
setTimeout(function () {
    window.loadCovidBannerRates = 0;
    window.loadCovidBannerRooms = 0;
    window.loadCovidBannerPay = 0;
    window.loadCovidBannerConf = 0;
    window.loadCovidBannerCrr = 0;
    window.loadCovidBannerCancel = 0;
    window.loadCovidBannerManange = 0;
    loadCovidBanner();
}, 100);



var path = location.pathname;

if (
    path.indexOf("find-hotels/hotel/rooms") > -1 ||
    path.indexOf("find-hotels/hotel/rates") > -1 || path.indexOf("find-hotels/hotel/list") > -1 ||
    path.indexOf("pay/payment") > -1 ||
    path.indexOf("find-hotels/select-room") > -1 ||
    path.indexOf("stay-mgmt/ManageYourStay") > -1 ||
    path.indexOf("stay-mgmt/reservation-cancellation") > -1 || path.indexOf("/pay/confirmation") > -1 || path.indexOf("stay-mgmt/cancellation-confirmation") > -1 ||
    path.indexOf("/pay/reservation-view") > -1 || location.pathname.indexOf("/account-mgmt/") > -1 || path.indexOf("/pay/") > -1

) {

    if (Bootstrapper.propertyWatcher !== "undefined" && typeof Bootstrapper.propertyWatcher !== "undefined") {


        console.log("**banner adding  propertyWatcher to watch path changes");


        var location_watch = Bootstrapper.propertyWatcher.create(function () {
            return location.href;
        });

        location_watch.change = function (oldValue, newValue) {
            if (
                !oldValue ||
                !newValue ||
                oldValue.indexOf("fromRedirect") !== -1 ||
                newValue.indexOf("fromRedirect") !== -1
            ) {
            } else {
                var oldSplit = oldValue.split("?");
                var newSplit = newValue.split("?");

                var oldPath = oldSplit[0];
                var newPath = newSplit[0];

                if (oldPath !== newPath) {
                    console.log("**banner - path change detected - reload banner");

                    window.loadCovidBannerRates = 0;
                    window.loadCovidBannerRooms = 0;
                    window.loadCovidBannerPay = 0;
                    window.loadCovidBannerConf = 0;
                    window.loadCovidBannerCrr = 0;
                    window.loadCovidBannerCancel = 0;
                    window.loadCovidBannerManange = 0;

                    loadCovidBanner();

                    /** if the page is stay details it needs URLs to be loaded before so execute banner code after 3 secs */
                    if (location.pathname.indexOf("/account-mgmt/") > -1) {
                        setTimeout(function () {
                            window.loadCovidBannerRates = 0;
                            window.loadCovidBannerRooms = 0;
                            window.loadCovidBannerPay = 0;
                            window.loadCovidBannerConf = 0;
                            window.loadCovidBannerCrr = 0;
                            window.loadCovidBannerCancel = 0;
                            window.loadCovidBannerManange = 0;
                            loadCovidBanner();
                        }, 3000);
                    }
                    console.log("**banner - path change detected - reload search avail banner");
                    window.loadSearchAvailYellowBanner = 0;
                    loadCovidSearchAvailBanner();


                    setTimeout(function () { loadListPropertyWatcherForBanner(); }, 1000);
                    setTimeout(function () {
                        console.log("**banner - path change detected - reload hotel specific red banner");
                        handleSearchListViewMessages();
                    }, 3000);

                } else {
                    console.log("**banner - path change detected - reload banner");

                    window.loadCovidBannerRates = 0;
                    window.loadCovidBannerRooms = 0;
                    window.loadCovidBannerPay = 0;
                    window.loadCovidBannerConf = 0;
                    window.loadCovidBannerCrr = 0;
                    window.loadCovidBannerCancel = 0;
                    window.loadCovidBannerManange = 0;

                    loadCovidBanner();


                    // console.log("**banner - path change detected - reload search avail banner");
                    // window.loadSearchAvailYellowBanner = 0;
                    // loadCovidSearchAvailBanner();

                }
            }
        };

    } else {
        console.log("**banner - propertyWatcher not available for view changes. banner will not reload when view changes.");
    }
} else {
    console.log("**banner - propertyWatcher not added to watch URL changes");
}



window.loadListPropertyWatcherForBanner = function () {
    var path = location.pathname;
    console.log("**banner - loadListPropertyWatcherForBanner - start ");


    if (path.indexOf("find-hotels/hotel/list") != -1) {

        if (Bootstrapper.propertyWatcher !== "undefined" && typeof Bootstrapper.propertyWatcher !== "undefined") {


            console.log("**banner adding  propertyWatcher to watch hotel list length changes");

            var hotel_list_watch = Bootstrapper.propertyWatcher.create(function () {
                return document.getElementsByClassName("hotel-offer-container-margin").length;
            });

            hotel_list_watch.change = function (oldValue, newValue) {
                console.log("**banner - hotel list change detected - hotel-offer-container-margin - reload banner oldValue(" + oldValue + "), newValue(" + newValue + ")");
                handleSearchListViewMessages();
            };

            var hotel_list_nodata_watch = Bootstrapper.propertyWatcher.create(function () {
                return document.getElementsByClassName("hotelListSection").length;
            });

            hotel_list_nodata_watch.change = function (oldValue, newValue) {
                console.log("**banner - hotel list change detected - hotelListSection - reload banner oldValue(" + oldValue + "), newValue(" + newValue + ")");
                handleSearchListViewMessages();
            };

        } else {
            console.log("**banner - propertyWatcher not available for view changes. banner will not reload when view changes.");
        }
    } else {
        console.log("**banner - list watcher not added for path " + path);
    }


    if (path.indexOf("find-hotels/hotel/list") != -1) {



        setTimeout(function () {
            console.log("**banner - adding currency dropdown change event ");
            jQuery(".currencySelect").change(function () {
                console.log("**banner - currency dropdown change - reload banner ");
                handleSearchListViewMessages();
            });
        }, 3000);
    }

};

window.isMessageBannerExcluded = function () {

    //var isGCRegion = trackingJson.isGC ? true : false

    var akamaiCountryCode = Bootstrapper.Cookies.get('akamaiCountryCode') ? Bootstrapper.Cookies.get('akamaiCountryCode') : "";

    var hotelContry = trackingJson.hotelCityStateCountryCode ? trackingJson.hotelCityStateCountryCode : "";



    if (location.pathname.indexOf("/cn/zh/") > 0 || location.pathname.indexOf("/tw/zh/") > 0) {
        console.log("**banner isMessageBannerExcluded GC china language : " + location.pathname);
        return true;
    }

    if (location.hostname.indexOf(".cn") > 0) {
        console.log("**banner isMessageBannerExcluded GC china domain : " + location.hostname);
        return true;
    }

    if (hotelContry.toUpperCase().indexOf(",CN") > 0 || hotelContry.toUpperCase().indexOf(",MO") > 0 || hotelContry.toUpperCase().indexOf(",HK") > 0 || hotelContry.toUpperCase().indexOf(",TW") > 0) {
        console.log("**banner isMessageBannerExcluded GC hotel country is china : " + hotelContry);
        return true;
    }

    if (akamaiCountryCode.toUpperCase() === 'CN' || akamaiCountryCode.toUpperCase() === 'MO' || akamaiCountryCode.toUpperCase() === 'HK' || akamaiCountryCode.toUpperCase() === 'TW') {
        console.log("**banner isMessageBannerExcluded GC user akamai country code is china : " + akamaiCountryCode);
        return true;
    }
    /*
        if (trackingJson.isGC) {
            console.log("**bannerisMessageBannerExcluded  GC user region is china");
            return true;
        } */

    //console.log("**banner isMessageBannerExcluded GC - user or hotel is not china  akamaiCountryCode : " + akamaiCountryCode + ", hotelContry : " + hotelContry);

    return false;
};







setTimeout(function () { loadListPropertyWatcherForBanner(); }, 1000);
setTimeout(function () { loadListPropertyWatcherForBanner(); }, 3000);

//setTimeout(function () { handleSearchListViewMessages(); }, 6000);