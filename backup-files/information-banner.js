
window.loadCovidBanner = function () {

    /* Languages */
    var bannerMsg = {};

    bannerMsg.USEN = '<p style="display:table-cell; padding:10px; text-align:center; vertical-align:middle">We are <strong>waiving our cancellation fees</strong> for bookings at all IHG hotels for stays through <strong>April 30.</strong></p>';
    bannerMsg.GBEN = '<p style="display:table-cell; padding:10px; text-align:center; vertical-align:middle">We are <strong>waiving our cancellation fees</strong> for bookings at all IHG hotels for stays through <strong>30 April.</strong></p>';
    bannerMsg.USES = '<p style="display:table-cell; padding:10px; text-align:center; vertical-align:middle"><strong>No cobraremos penalizaciones por cancelación</strong> de reservaciones en los hoteles IHG para estadías hasta el <strong>30 de abril.</strong></p>';
    bannerMsg.FRFR = '<p style="display:table-cell; padding:10px; text-align:center; vertical-align:middle">Nous <strong>annulons les frais d\'annulation</strong> pour les réservations dans tous les hôtels IHG pour les séjours jusqu\'au <strong>30 avril 2020.</strong>';
    bannerMsg.DEDE = '<p style="display:table-cell; padding:10px; text-align:center; vertical-align:middle">Wir <strong>verzichten auf Stornierungsgebühren</strong> für Buchungen in allen IHG Hotels für Aufenthalte bis zum <strong>30. April.</strong>';
    bannerMsg.ITIT = '<p style="display:table-cell; padding:10px; text-align:center; vertical-align:middle">Abbiamo <strong>annullato le penali di cancellazione</strong> per le prenotazioni di tutti gli hotel IHG per soggiorni fino al <strong>30 aprile.</strong>';
    bannerMsg.PTPT = '<p style="display:table-cell; padding:10px; text-align:center; vertical-align:middle">Estamos <strong>isentando nossas taxas de cancelamento</strong> para reservas em todos os hotéis do IHG para estadias até <strong>30 de abril.</strong>';
    bannerMsg.NLNL = '<p style="display:table-cell; padding:10px; text-align:center; vertical-align:middle">We <strong>zien af van onze annuleringskosten</strong> voor boekingen bij alle IHG-hotels voor verblijven tot en met <strong>30 april.</strong>';
    bannerMsg.RURU = '<p style="display:table-cell; padding:10px; text-align:center; vertical-align:middle">Мы <strong>аннулируем сборы за отмену</strong> бронирования проживания во всех отелях IHG на период по <strong>30 апреля.</strong>';
    // bannerMsg.CNZH = '<p style="display:table-cell; padding:10px; text-align:center; vertical-align:middle">洲际酒店集团全球范围内所有酒店均可针对2020年4月30日前入住的预订进行免费退改。';
    // bannerMsg.TWZH = '<p style="display:table-cell; padding:10px; text-align:center; vertical-align:middle">洲際酒店集團全球範圍內所有酒店均可針對2020年4月30日前入住的預訂進行免費退改。';
    bannerMsg.JPJA = '<p style="display:table-cell; padding:10px; text-align:center; vertical-align:middle">すべてのIHGホテルのご予約は、4月30日までのご滞在についてキャンセル料を免除しています。';
    bannerMsg.KRKO = '<p style="display:table-cell; padding:10px; text-align:center; vertical-align:middle"><strong>4월 30</strong>일까지 해당하는 모든 IHG 호텔 숙박 예약 건에 대해 <strong>취소 수수료를 면제해 드</strong>립니다.';
    bannerMsg.TRTR = '<p style="display:table-cell; padding:10px; text-align:center; vertical-align:middle">Tüm IHG otellerinde, <strong>30 Nisan\'a</strong> kadar olan konaklama rezervasyonları için <strong>iptal ücretlerinden feragat</strong> ediyoruz.';
    bannerMsg.AEAR = '<p style="display:table-cell; padding:10px; text-align:center; vertical-align:middle">نحن نُعفي ضيوفنا من رسوم الإلغاء بالنسبة للحجوزات في جميع فنادقنحن نُعفي ضيوفنا من رسوم الإلغاء بالنسبة للحجوزات في جميع فنادق IHG للإقامات حتى 30 أبريل.';
    bannerMsg.THTH = '<p style="display:table-cell; padding:10px; text-align:center; vertical-align:middle">เรา<strong>ยกเลิกค่าธรรมเนียมการยกเลิก</strong>สำหรับการจองที่โรงแรม IHG ทุกแห่ง สำหรับการเข้าพักจนถึง <strong>30 เมษายน</strong>';
    bannerMsg.IDIN = '<p style="display:table-cell; padding:10px; text-align:center; vertical-align:middle">Kami <strong>menghapus biaya pembatalan</strong> untuk pemesanan di semua hotel IHG untuk masa inap hingga <strong>30 April.</strong>';
    bannerMsg.CNZH = '<p style="display:table-cell; padding:10px; text-align:center; vertical-align:middle">洲际酒店集团全球范围内所有酒店均可针对<strong>2020年4月30日前入住</strong>的预订进行<strong>免费退改</strong>。';
    bannerMsg.TWZH = '<p style="display:table-cell; padding:10px; text-align:center; vertical-align:middle">洲際酒店集團全球範圍內所有酒店均可針對<strong>2020年4月30日前入住</strong>的預訂進行<strong>免費退改</strong>。';
    /* End languages */


    setTimeout(function () {

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


            console.log("**banner lang : " + lang);

            var bannerMessage = bannerMsg[lang];


            var roomsBannerHTML = '' +
                '<div class="row" id="athena-covid-19-banner">' +
                '<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">' +
                '<div style="background-color:#FFE082; display:table; font-family:\'Graphik-Medium\',sans-serif; font-size:16px; height:100%; margin-bottom:20px; min-height:35px; width:100%">' +
                bannerMessage +
                '</div>' +
                '</div>' +
                '</div>';

            var ratesBannerHTML = '' +
                '<div class="row" id="athena-covid-19-banner">' +
                '<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">' +
                '<div style="background-color:#FFE082; display:table; font-family:\'Graphik-Medium\',sans-serif; font-size:16px; height:100%; margin-bottom:10px; min-height:35px; width:100%">' +
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

            var cancelBannerHTML = '' +
                '<div class="row" style="margin:0 auto; max-width:1172px" id="athena-covid-19-banner">' +
                '<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12" style="padding:0px">' +
                '<div style="background-color:#FFE082; display:table; font-family:\'Graphik-Medium\',sans-serif; font-size:16px; height:100%; margin-bottom:20px; min-height:35px; width:100%">' +
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
                path.indexOf("pay/payment") > -1 ||
                path.indexOf("stay-mgmt/ManageYourStay") > -1 ||
                path.indexOf("stay-mgmt/reservation-cancellation")
            ) {
                console.log("**banner show banner for : " + path);

                var roomListContainer = document.querySelector('.hotel-rooms-list');
                var ratesListContainer = document.querySelector('.hotel-rates-list');
                var payContainer = document.querySelector('[ui-view="hotel-summary"]');
                var cancelContainer = document.querySelector('.cancel-reservation-layout');
                var manageStayContainer = document.querySelector('.stay-mgmt.theme-ihg');



                if (!!roomListContainer) {

                    if (window.loadCovidBannerRooms === 0) {
                        console.log("**banner adding banner for rooms view");
                        roomListContainer.insertAdjacentHTML('afterbegin', roomsBannerHTML);
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
                            rateFilterParent.insertAdjacentHTML('afterend', ratesBannerHTML);
                            window.loadCovidBannerRates = 1;
                            console.log("**banner added banner for rates view");
                        }
                    } else {
                        console.log("**banner banner already displayed rates view");
                    }
                } else if (!!payContainer) {
                    if (window.loadCovidBannerPay === 0) {
                        console.log("**banner adding banner for pay view");
                        payContainer.insertAdjacentHTML('beforeend', payBannerHTML);
                        window.loadCovidBannerPay = 1;
                        console.log("**banner added banner for pay view");
                    } else {
                        console.log("**banner banner already displayed pay view");
                    }
                }
                else if (!!cancelContainer) {
                    if (window.loadCovidBannerCancel === 0) {
                        console.log("**banner adding banner for cancel reservation view");
                        var titleContainer = document.querySelector('ul.container-title');

                        if (!!titleContainer) {
                            titleContainer.insertAdjacentHTML('beforebegin', cancelBannerHTML);
                        }

                        window.loadCovidBannerCancel = 1;
                        console.log("**banner added banner for cancel reservation view");
                    } else {
                        console.log("**banner banner already displayed cancel reservation view");
                    }
                }
                else if (!!manageStayContainer) {
                    if (window.loadCovidBannerManange === 0) {
                        console.log("**banner adding banner for manage reservation view");

                        var manageStayTitleContainer = document.querySelector('.main-container .flex-column.column');
                        if (!!manageStayTitleContainer) {
                            manageStayTitleContainer.insertAdjacentHTML('afterend', manageStayBannerHTML);
                        }
                        window.loadCovidBannerManange = 1;
                        console.log("**banner added banner for manage reservation view");
                    } else {
                        console.log("**banner banner already displayed manage reservation view");
                    }
                }


            } else {
                console.log("**banner not reqd for page : " + path);
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
    window.loadCovidBannerCancel = 0;
    window.loadCovidBannerManange = 0;
    loadCovidBanner();
}, 100);


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
                window.loadCovidBannerCancel = 0;
                window.loadCovidBannerManange = 0;

                loadCovidBanner();
            } else {
            }
        }
    };
} else {
    console.log("**banner - propertyWatcher not available for view changes. banner will not reload when view changes.");
}
