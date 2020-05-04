
window.loadCovidSearchAvailBanner = function () {
    try {
        jQuery("#rooms-covid-19-yellow-avail-banner").hide();
        var path = location.pathname;
        if (path.indexOf("find-hotels/hotel/list") != -1) {
            console.log("**avail banner - start");




            var lang = 'USEN';

            /* Languages */
            /*var yellowBannerMsgUSEN = '<i class="fa fa-info-circle" style="margin:18px 10px 10px 15px"></i><p style="display:table-cell; padding:15px 10px 15px 0; vertical-align:middle"><strong>To support your hotel search, we are placing all hotels that are open and available ' +
                'at the top of your search results list.</strong><br>We regularly update our hotel availability to ensure you have the most current information as you look to book your next stay with us.</strong></p>'; */
            /* End languages */



            /*if (window.innerWidth < 900) {
                yellowBannerMsgUSEN = '<i class="fa fa-info-circle" style="margin:18px 10px 10px 15px"></i><p style="display:table-cell; padding:15px 10px 15px 0; vertical-align:middle"><strong>To support your hotel search, we are placing all hotels that are open and available ' +
                    'at the top of your search results list.</strong>';
            } */





            var bannerMsg = {};
            bannerMsg.USEN = 'To support your hotel search, we are placing all hotels that are open and available at the top of your search results list.';
            bannerMsg.GBEN = 'To support your hotel search, we are placing all hotels that are open and available at the top of your search results list.';
            bannerMsg.USES = 'Para apoyar su búsqueda de hoteles, colocamos todos los hoteles que están abiertos y disponibles en la parte superior de su lista de resultados de búsqueda.';
            bannerMsg.FRFR = "Pour soutenir votre recherche d'hôtel, nous plaçons tous les hôtels ouverts et disponibles en haut de votre liste de résultats de recherche.";
            bannerMsg.DEDE = "Um Ihre Hotelsuche zu unterstützen, platzieren wir alle Hotels, die geöffnet und verfügbar sind, ganz oben in Ihrer Suchergebnisliste.";
            bannerMsg.ITIT = "Per supportare la ricerca di hotel, stiamo posizionando tutti gli hotel aperti e disponibili nella parte superiore dell'elenco dei risultati della ricerca.";
            bannerMsg.PTPT = "Para apoiar sua pesquisa de hotéis, estamos colocando todos os hotéis abertos e disponíveis no topo da sua lista de resultados de pesquisa.";
            bannerMsg.NLNL = "Om uw hotelzoekopdracht te ondersteunen, plaatsen we alle hotels die open en beschikbaar zijn bovenaan uw lijst met zoekresultaten.";
            bannerMsg.RURU = "Чтобы поддержать ваш поиск отелей, мы размещаем все открытые и доступные отели в верхней части списка результатов поиска.";
            bannerMsg.JPJA = "ホテル検索をサポートするために、オープンで利用可能なすべてのホテルを検索結果リストの一番上に配置します。";
            bannerMsg.KRKO = "호텔 검색을 지원하기 위해 열려있는 모든 호텔을 검색 결과 목록 상단에 배치합니다.";
            bannerMsg.TRTR = "Otel aramanızı desteklemek için, açık ve ulaşılabilir tüm otelleri arama sonucu listenizin en üstüne yerleştiriyoruz.";
            bannerMsg.AEAR = "لدعم بحثك عن الفنادق ، نضع جميع الفنادق المفتوحة والمتوفرة في أعلى قائمة نتائج البحث.";
            bannerMsg.THTH = "เพื่อสนับสนุนการค้นหาโรงแรมของคุณเรากำลังวางโรงแรมทั้งหมดที่เปิดให้บริการและอยู่ที่ด้านบนของรายการผลการค้นหาของคุณ";
            bannerMsg.IDIN = "Untuk mendukung pencarian hotel Anda, kami menempatkan semua hotel yang terbuka dan tersedia di bagian atas daftar hasil pencarian Anda.";
            bannerMsg.CNZH = "為了支持您的酒店搜索，我們將所有已開放並可用的酒店都放在搜索結果列表的頂部。";
            bannerMsg.TWZH = "호텔 검색을 지원하기 위해 열려있는 모든 호텔을 검색 결과 목록 상단에 배치합니다.";

            /* End languages */

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

            console.log("**avail banner - lang : " + lang);



            var bannerMessage = bannerMsg[lang];

            var messageWithStyle = '<i class="fa fa-info-circle" style="margin:18px 10px 10px 15px"></i><p style="display:table-cell; padding:15px 10px 15px 0; vertical-align:middle"><strong>' + bannerMessage + '</strong>';


            if (path.indexOf('/us/en/') != -1 || path.indexOf('/gb/en/') != -1) {

                /* Languages */
                messageWithStyle = '<i class="fa fa-info-circle" style="margin:18px 10px 10px 15px"></i><p style="display:table-cell; padding:15px 10px 15px 0; vertical-align:middle"><strong>To support your hotel search, we are placing all hotels that are open and available ' +
                    'at the top of your search results list.</strong><br>We regularly update our hotel availability to ensure you have the most current information as you look to book your next stay with us.</strong></p>';
                /* End languages */



                if (window.innerWidth < 900) {
                    messageWithStyle = '<i class="fa fa-info-circle" style="margin:18px 10px 10px 15px"></i><p style="display:table-cell; padding:15px 10px 15px 0; vertical-align:middle"><strong>To support your hotel search, we are placing all hotels that are open and available ' +
                        'at the top of your search results list.</strong>';
                }
            }

            var searchPageCovidYellowSupportBannerHTML = '' +
                '<div class="row" id="rooms-covid-19-yellow-avail-banner">' +
                '<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12" style="margin-top:10px">' +
                '<div style="background-color:#FFE082; display:table; font-family:\'Graphik-Medium\',sans-serif; font-size:16px; height:100%; min-height:35px; width:100%">' +
                messageWithStyle +
                '</div>' +
                '</div>' +
                '</div>';




            var hotelListView = document.querySelector('.hotel-list-view');
            if (!!hotelListView) {
                if (window.loadSearchAvailYellowBanner === 0) {
                    window.loadSearchAvailYellowBanner = 1;
                    console.log("**avail banner - insert banner");
                    hotelListView.insertAdjacentHTML('afterbegin', searchPageCovidYellowSupportBannerHTML);
                } else {
                    console.log("**avail banner - already inserted");
                }

            }

        }

    } catch (err) {
        console.log("**avail banner - err" + err);
    }
};
window.loadSearchAvailYellowBanner = 0;
loadCovidSearchAvailBanner();
/**
var path = location.pathname;

if (
    path.indexOf("find-hotels/hotel/list") > -1

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
                    console.log("**banner - path change detected - reload search avail yellow banner");
                    window.loadSearchAvailYellowBanner = 0;
                    loadCovidSearchAvailBanner();
                } else {

                }
            }
        };

    } else {
        console.log("**banner - propertyWatcher not available for view changes. banner will not reload when view changes.");
    }
} else {
    console.log("**banner - propertyWatcher not added for list for search avail yellow banner");
}
 */