/* Languages */
var bannerMsgUSEN = '<p style="display:table-cell; padding:10px; text-align:center; vertical-align:middle">We are <strong>waiving our cancellation fees</strong> for bookings at all IHG hotels for stays through <strong>April 30.</strong></p>';
var bannerMsgGBEN = '<p style="display:table-cell; padding:10px; text-align:center; vertical-align:middle">We are <strong>waiving our cancellation fees</strong> for bookings at all IHG hotels for stays through <strong>30 April.</strong></p>';
var bannerMsgUSES = '<p style="display:table-cell; padding:10px; text-align:center; vertical-align:middle"><strong>No cobraremos penalizaciones por cancelación</strong> de reservaciones en los hoteles IHG para estadías hasta el <strong>30 de abril.</strong></p>';
var bannerMsgFRFR = '<p style="display:table-cell; padding:10px; text-align:center; vertical-align:middle">Nous <strong>annulons les frais d\'annulation</strong> pour les réservations dans tous les hôtels IHG pour les séjours jusqu\'au <strong>30 avril 2020.</strong>';
var bannerMsgDEDE = '<p style="display:table-cell; padding:10px; text-align:center; vertical-align:middle">Wir <strong>verzichten auf Stornierungsgebühren</strong> für Buchungen in allen IHG Hotels für Aufenthalte bis zum <strong>30. April.</strong>';
var bannerMsgITIT = '<p style="display:table-cell; padding:10px; text-align:center; vertical-align:middle">Abbiamo <strong>annullato le penali di cancellazione</strong> per le prenotazioni di tutti gli hotel IHG per soggiorni fino al <strong>30 aprile.</strong>';
var bannerMsgPTPT = '<p style="display:table-cell; padding:10px; text-align:center; vertical-align:middle">Estamos <strong>isentando nossas taxas de cancelamento</strong> para reservas em todos os hotéis do IHG para estadias até <strong>30 de abril.</strong>';
var bannerMsgNLNL = '<p style="display:table-cell; padding:10px; text-align:center; vertical-align:middle">We <strong>zien af van onze annuleringskosten</strong> voor boekingen bij alle IHG-hotels voor verblijven tot en met <strong>30 april.</strong>';
var bannerMsgRURU = '<p style="display:table-cell; padding:10px; text-align:center; vertical-align:middle">Мы <strong>аннулируем сборы за отмену</strong> бронирования проживания во всех отелях IHG на период по <strong>30 апреля.</strong>';
var bannerMsgCNZH = '<p style="display:table-cell; padding:10px; text-align:center; vertical-align:middle">洲际酒店集团全球范围内所有酒店均可针对2020年4月30日前入住的预订进行免费退改。';
var bannerMsgTWZH = '<p style="display:table-cell; padding:10px; text-align:center; vertical-align:middle">洲際酒店集團全球範圍內所有酒店均可針對2020年4月30日前入住的預訂進行免費退改。';
var bannerMsgJPJA = '<p style="display:table-cell; padding:10px; text-align:center; vertical-align:middle">すべてのIHGホテルのご予約は、4月30日までのご滞在についてキャンセル料を免除しています。';
var bannerMsgKRKO = '<p style="display:table-cell; padding:10px; text-align:center; vertical-align:middle"><strong>4월 30</strong>일까지 해당하는 모든 IHG 호텔 숙박 예약 건에 대해 <strong>취소 수수료를 면제해 드</strong>립니다.';
var bannerMsgTRTR = '<p style="display:table-cell; padding:10px; text-align:center; vertical-align:middle">Tüm IHG otellerinde, <strong>30 Nisan\'a</strong> kadar olan konaklama rezervasyonları için <strong>iptal ücretlerinden feragat</strong> ediyoruz.';
var bannerMsgAEAR = '<p style="display:table-cell; padding:10px; text-align:center; vertical-align:middle">نحن نُعفي ضيوفنا من رسوم الإلغاء بالنسبة للحجوزات في جميع فنادقنحن نُعفي ضيوفنا من رسوم الإلغاء بالنسبة للحجوزات في جميع فنادق IHG للإقامات حتى 30 أبريل.';
var bannerMsgTHTH = '<p style="display:table-cell; padding:10px; text-align:center; vertical-align:middle">เรา<strong>ยกเลิกค่าธรรมเนียมการยกเลิก</strong>สำหรับการจองที่โรงแรม IHG ทุกแห่ง สำหรับการเข้าพักจนถึง <strong>30 เมษายน</strong>';
var bannerMsgIDIN = '<p style="display:table-cell; padding:10px; text-align:center; vertical-align:middle">Kami <strong>menghapus biaya pembatalan</strong> untuk pemesanan di semua hotel IHG untuk masa inap hingga <strong>30 April.</strong>';
/* End languages */

var roomsBannerHTML = '' +
    '<div class="row" id="athena-covid-19-banner">' +
    '<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">' +
    '<div style="background-color:#FFE082; display:table; font-family:\'Graphik-Medium\',sans-serif; font-size:16px; height:100%; margin-bottom:20px; min-height:35px; width:100%">' +
    bannerMsgUSEN +
    '</div>' +
    '</div>' +
    '</div>';

var ratesBannerHTML = '' +
    '<div class="row" id="athena-covid-19-banner">' +
    '<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">' +
    '<div style="background-color:#FFE082; display:table; font-family:\'Graphik-Medium\',sans-serif; font-size:16px; height:100%; margin-bottom:10px; min-height:35px; width:100%">' +
    bannerMsgUSEN +
    '</div>' +
    '</div>' +
    '</div>';

var payBannerHTML = '' +
    '<div class="row" id="athena-covid-19-banner">' +
    '<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">' +
    '<div style="background-color:#FFE082; display:table; font-family:\'Graphik-Medium\',sans-serif; font-size:16px; height:100%; min-height:35px; width:100%">' +
    bannerMsgUSEN +
    '</div>' +
    '</div>' +
    '</div>';

var roomListContainer = document.querySelector('.hotel-rooms-list');
var ratesListContainer = document.querySelector('.hotel-rates-list');
var payContainer = document.querySelector('[ui-view="hotel-summary"]');

if (!!roomListContainer) {
    roomListContainer.insertAdjacentHTML('afterbegin', roomsBannerHTML);
} else if (!!ratesListContainer) {
    var rateFilters = document.querySelector('rate-filter-buttons');
    if (!!rateFilters && !!rateFilters.parentNode && !!rateFilters.parentNode.parentNode) {
        var rateFilterParent = rateFilters.parentNode.parentNode;
        rateFilterParent.insertAdjacentHTML('afterend', ratesBannerHTML);
    }
} else if (!!payContainer) {
    payContainer.insertAdjacentHTML('beforeend', payBannerHTML);
}
