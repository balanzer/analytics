try {
    console.log("**book now text update - start");

    var path = location.pathname;

    console.log("**book now update for path : " + path);


    var checkAvailTxt = "Check Availability";
    if (path.indexOf("/en/") != -1) {
        checkAvailTxt = "Check Availability";
    } else if (path.indexOf("/es/") != -1) {
        checkAvailTxt = "Consultar disponibilidad";
    } else if (path.indexOf("/de/") != -1) {
        checkAvailTxt = "Verfügbarkeit prüfen";
    } else if (path.indexOf("/fr/") != -1) {
        checkAvailTxt = "Vérifier la disponibilité";
    } else if (path.indexOf("/it/") != -1) {
        checkAvailTxt = "Verifica disponibilità";
    } else if (path.indexOf("/jp/") != -1) {
        checkAvailTxt = "空室の確認";
    } else if (path.indexOf("/kr/") != -1) {
        checkAvailTxt = "예약 가능 여부 조회";
    } else if (path.indexOf("/pt/") != -1) {
        checkAvailTxt = "Verificar disponibilidade";
    } else if (path.indexOf("/ru/") != -1) {
        checkAvailTxt = "Проверить наличие";
    } else if (path.indexOf("/nl/") != -1) {
        checkAvailTxt = "Check beschikbaarheid";
    } else if (path.indexOf("/in/") != -1) {
        checkAvailTxt = "Periksa Ketersediaan";
    } else if (path.indexOf("/th/") != -1) {
        checkAvailTxt = "ตรวจสอบห้องพักที่ว่าง";
    } else if (path.indexOf("/tr/") != -1) {
        checkAvailTxt = "Müsaitlik Kontrolü";
    } else if (path.indexOf("/ae/") != -1) {
        checkAvailTxt = "تحقق من التوافر";
    } else if (path.indexOf("/cn/zh/") != -1) {
        checkAvailTxt = "查看空房情况";
    } else if (path.indexOf("/tw/zh") != -1) {
        checkAvailTxt = "查看空房";
    }


    if (jQuery("button.accordion-book").length > 0) {
        var currTxt = jQuery("button.accordion-book").html();
        var replacementHTML = checkAvailTxt;

        console.log("**book now button.accordion-book  update (" + currTxt + ") to (" + replacementHTML + ")");
        jQuery("button.accordion-book").html(replacementHTML);
    } else {
        console.log("**book now no updates - button.accordion-book missing");
    }


    if (jQuery("div.expand-reservation").length > 0) {
        var currTxt = jQuery("div.expand-reservation").html();
        var replacementHTML = checkAvailTxt + "<span class='arrow-icon'></span></div>"

        console.log("**book now div.expand-reservation  update (" + currTxt + ") to (" + replacementHTML + ")");
        jQuery("div.expand-reservation").html(replacementHTML);
    } else {
        console.log("**book now no updates - div.expand-reservation missing");
    }

    if (jQuery("a.booknow").length > 0) {
        console.log("**book now text update - updating a.booknow value");
        var currTxt = jQuery("a.booknow").find("span").text();
        console.log("**book now a.booknow  update (" + currTxt + ") to (" + checkAvailTxt + ")");
        var htmlText = "<small>" + checkAvailTxt + "</small>";
        jQuery("a.booknow").find("span").html(htmlText);
        var bookNowCta = document.querySelector('a.booknow');
        bookNowCta.style.marginRight = '0';
        bookNowCta.style.marginLeft = '0';
        bookNowCta.style.textAlign = 'center';
    } else {
        console.log("**book now no updates - a.booknow missing");
    }

    if (jQuery("#reservation_sticky").length > 0) {
        console.log("**book now text update - updating reservation_sticky div value");
        var currDivTxt = jQuery("#reservation_sticky").text();
        console.log("**book now sticky div  update (" + currDivTxt + ") to (" + checkAvailTxt + ")");
        jQuery("#reservation_sticky").text(checkAvailTxt);
    } else {
        console.log("**book now no updates - reservation_sticky div missing");
    }


    if (jQuery("#bookingclient-footer").length > 0) {
        console.log("**book now text update - updating bookingclient-footer div value");
        var currDivTxt = jQuery("#bookingclient-footer").text();
        console.log("**book now sticky div  update (" + currDivTxt + ") to (" + checkAvailTxt + ")");
        jQuery("#bookingclient-footer").text(checkAvailTxt);
    } else {
        console.log("**book now no updates - bookingclient-footer div missing");
    }



    if (path.indexOf("/regent/") > -1) {
        jQuery("#stickyfooter > div > div > a").html(checkAvailTxt);
    }


    console.log("**book now text update - end");
} catch (err) {
    console.log("**book now update - err" + err);
}