/* US126432 - Kimpton Special Announcements banner */

/* Message variables here */
var expandedBannerMsg = 'TEMPORARY SUSPENSION OF OPERATION DUE TO EMERGENCY UK GOVERNMENT GUIDANCE. In response to Covid-19 the UK Government ' +
    'has instructed that all hotel operations must be suspended with immediate effect.' +
    ' This hotel is complying with the government’s request and unfortunately we cannot accept guests at this time.';

var readMoreMsg = 'Read More';
var readLessMsg = 'Read Less';
/* End */

var collapsedBannerMsgLVP1 = expandedBannerMsg.substring(0, 53);
var collapsedBannerMsgLVP2 = expandedBannerMsg.substring(0, 64);
var collapsedBannerMsgLVP3 = expandedBannerMsg.substring(0, 75);
var collapsedBannerMsgLVP4 = expandedBannerMsg.substring(0, 89);

var collapsedBannerMsgMVP = expandedBannerMsg.substring(0, 50);

var collapsedBannerMsgSVP1 = expandedBannerMsg.substring(0, 37);
var collapsedBannerMsgSVP2 = expandedBannerMsg.substring(0, 40);

var collapsedBannerMsgXSVP1 = expandedBannerMsg.substring(0, 33);
var collapsedBannerMsgXSVP2 = expandedBannerMsg.substring(0, 33);

function widthChangeLVP1(mq) {
    if (mq.matches) {
        document.getElementById('kimpton-collapsed-messaging').textContent = collapsedBannerMsgLVP1 + '...';
    }
}

function widthChangeLVP2(mq) {
    if (mq.matches) {
        document.getElementById('kimpton-collapsed-messaging').textContent = collapsedBannerMsgLVP2 + '...';
    }
}

function widthChangeLVP3(mq) {
    if (mq.matches) {
        document.getElementById('kimpton-collapsed-messaging').textContent = collapsedBannerMsgLVP3 + '...';
    }
}

function widthChangeLVP4(mq) {
    if (mq.matches) {
        document.getElementById('kimpton-collapsed-messaging').textContent = collapsedBannerMsgLVP4 + '...';
    }
}

function widthChangeMVP(mq) {
    if (mq.matches) {
        document.getElementById('kimpton-collapsed-messaging').textContent = collapsedBannerMsgMVP + '...';
    }
}

function widthChangeSVP1(mq) {
    if (mq.matches) {
        document.getElementById('kimpton-collapsed-messaging').textContent = collapsedBannerMsgSVP1 + '...';
    }
}

function widthChangeSVP2(mq) {
    if (mq.matches) {
        document.getElementById('kimpton-collapsed-messaging').textContent = collapsedBannerMsgSVP2 + '...';
    }
}

function widthChangeXSVP1(mq) {
    if (mq.matches) {
        document.getElementById('kimpton-collapsed-messaging-xsvp').textContent = collapsedBannerMsgXSVP1 + '...';
    }
}

function widthChangeXSVP2(mq) {
    if (mq.matches) {
        document.getElementById('kimpton-collapsed-messaging-xsvp').textContent = collapsedBannerMsgXSVP2 + '...';
    }
}

var mqLVP1 = window.matchMedia("(min-width:1200px) and (max-width:1329px)");
mqLVP1.addEventListener("change", function () {
    widthChangeLVP1(mqLVP1);
});

var mqLVP2 = window.matchMedia("(min-width:1330px) and (max-width:1469px)");
mqLVP2.addEventListener("change", function () {
    widthChangeLVP2(mqLVP2);
});

var mqLVP3 = window.matchMedia("(min-width:1470px) and (max-width:1699px)");
mqLVP3.addEventListener("change", function () {
    widthChangeLVP3(mqLVP3);
});

var mqLVP4 = window.matchMedia("(min-width:1700px)");
mqLVP4.addEventListener("change", function () {
    widthChangeLVP4(mqLVP4);
});

var mqMVP = window.matchMedia("(min-width:992px) and (max-width:1199px)");
mqMVP.addEventListener("change", function () {
    widthChangeMVP(mqMVP);
});

var mqSVP1 = window.matchMedia("(min-width: 768px) and (max-width:849px)");
mqSVP1.addEventListener("change", function () {
    widthChangeSVP1(mqSVP1);
});

var mqSVP2 = window.matchMedia("(min-width: 850px) and (max-width:991px)");
mqSVP2.addEventListener("change", function () {
    widthChangeSVP2(mqSVP2);
});

var mqXSVP1 = window.matchMedia("(min-width: 320px) and (max-width:649px)");
mqXSVP1.addEventListener("change", function () {
    widthChangeXSVP1(mqXSVP1);
});

var mqXSVP2 = window.matchMedia("(min-width: 650px) and (max-width:767px)");
mqXSVP2.addEventListener("change", function () {
    widthChangeXSVP2(mqXSVP2);
});

// For SVP, MVP, and LVP
var kimptonBannerLargeHTML = '' +
    '<div id="special-announcement-banner" class="col-xs-12 col-sm-12 col-md-12 col-lg-12" style="background-color:#FFFFFF; border-bottom:2px solid #058EA2">' +
    '<div style="background-color:#FFFFFF; margin:auto; position:relative; width:70%">' +
    '<p id="kimpton-expanded-messaging" class="col-xs-9 col-sm-9 col-md-9 col-lg-9" style="color:#000000; display:none; font-family:\'Proxima Nova\', sans-serif; font-size:16px; font-weight:600; letter-spacing:0; ' +
    'line-height:24px; padding:20px 0 20px 0; text-align:left">' +
    expandedBannerMsg + '<br><br>' +
    '<span id="kimpton-read-less-link" onmouseover="this.style.textDecoration=\'underline\'; this.style.textDecorationColor=\'#058EA2\'; this.style.textUnderlinePosition=\'under\'" onmouseleave="this.style.textDecoration=\'none\';" style="color:#000000; cursor:pointer;">' +
    readLessMsg +
    '</span>' +
    '</p>' +
    '<p id="kimpton-collapsed-messaging" class="col-xs-9 col-sm-9 col-md-9 col-lg-9" style="color:#000000; display:inline-block; font-family:\'Proxima Nova\', sans-serif; font-size:16px; font-weight:600; letter-spacing:0; ' +
    'line-height:24px; padding:20px 0 20px 0; text-align:left">' +
    collapsedBannerMsgLVP1 + '...' +
    '</p>' +
    '<p id="kimpton-read-more-link" class="col-xs-2 col-sm-2 col-md-2 col-lg-2" onmouseover="this.style.textDecoration=\'underline\'; this.style.textDecorationColor=\'#058EA2\'; this.style.textUnderlinePosition=\'under\'" onmouseleave="this.style.textDecoration=\'none\';" style="color:#000000; cursor:pointer; ' +
    'display:inline-block; font-family:\'Proxima Nova\', sans-serif; font-size:16px; font-weight:600; letter-spacing:0; ' +
    'line-height:24px; padding:20px 0 0 0; visibility:visible">' +
    readMoreMsg +
    '</p>' +
    '<p style="display:inline-block; font-size:18px;">' +
    '<i id="kimpton-close-banner-icon" class="fa fa-times-circle" style="color:#000000; cursor:pointer; float:right; margin-top:23px"></i>' +
    '</p>' +
    '</div>' +
    '</div>';

// For XSVP
var kimptonBannerXSVPHTML = '' +
    '<div id="special-announcement-banner-xsvp" class="col-xs-12 col-sm-12 col-md-12 col-lg-12" style="background-color:#FFFFFF; border-bottom:2px solid #058EA2">' +
    '<div style="background-color:#FFFFFF; margin:auto; position:relative; width:90%">' +
    '<p id="kimpton-expanded-messaging-xsvp" class="col-xs-9 col-sm-9 col-md-9 col-lg-9" style="color:#000000; display:none; font-family:\'Proxima Nova\', sans-serif; font-size:16px; font-weight:600; letter-spacing:0; ' +
    'line-height:24px; padding:20px 0 20px 0; text-align:left">' +
    expandedBannerMsg + '<br><br>' +
    '<span id="kimpton-read-less-link-xsvp" onmouseover="this.style.textDecoration=\'underline\'; this.style.textDecorationColor=\'#058EA2\'; this.style.textUnderlinePosition=\'under\';" onmouseleave="this.style.textDecoration=\'none\'; this.style.textDecorationColor=\'#058EA2\';" style="color:#000000; cursor:pointer">' +
    readLessMsg +
    '</span>' +
    '</p>' +
    '<p id="kimpton-collapsed-messaging-xsvp" class="col-xs-9 col-sm-9 col-md-9 col-lg-9" style="color:#000000; display:inline-block; font-family:\'Proxima Nova\', sans-serif; font-size:16px; font-weight:600; letter-spacing:0; ' +
    'line-height:24px; padding:20px 0 20px 0; text-align:left">' +
    collapsedBannerMsgXSVP1 + '...' +
    '</p>' +
    '<p id="kimpton-read-more-link-xsvp" class="col-xs-2 col-sm-2 col-md-2 col-lg-2" onmouseover="this.style.textDecoration=\'underline\'; this.style.textDecorationColor=\'#058EA2\'; this.style.textUnderlinePosition=\'under\';" onmouseleave="this.style.textDecoration=\'none\';" style="color:#000000; ' +
    'cursor:pointer; display:inline-block; font-family:\'Proxima Nova\', sans-serif; font-size:16px; font-weight:600; letter-spacing:0; ' +
    'line-height:24px; padding:20px 0 0 0; visibility:visible">' +
    readMoreMsg +
    '</p>' +
    '<p style="display:inline-block; font-size:18px;">' +
    '<i id="kimpton-close-banner-icon-xsvp" class="fa fa-times-circle" style="color:#000000; cursor:pointer; float:right; margin-top:23px"></i>' +
    '</p>' +
    '</div>' +
    '</div>';

var primaryNav = document.getElementById('primary-nav');
if (!!primaryNav) {
    primaryNav.insertAdjacentHTML('beforeend', kimptonBannerLargeHTML);
}

var mobileNav = document.querySelector('.mobileNavManuWrapper');
if (!!mobileNav) {
    mobileNav.insertAdjacentHTML('beforeend', kimptonBannerXSVPHTML);
}

var bannerCloseIcon = document.getElementById('kimpton-close-banner-icon');
if (!!bannerCloseIcon) {
    bannerCloseIcon.addEventListener('click', function () {
        var kimptonBanner = document.getElementById('special-announcement-banner');
        if (!!kimptonBanner) {
            kimptonBanner.style.display = 'none';
        }

        var kimptonBannerXSVP = document.getElementById('special-announcement-banner-xsvp');
        if (!!kimptonBannerXSVP) {
            kimptonBannerXSVP.style.display = 'none';
        }
    });
}

var bannerCloseIconXSVP = document.getElementById('kimpton-close-banner-icon-xsvp');
if (!!bannerCloseIconXSVP) {
    bannerCloseIconXSVP.addEventListener('click', function () {
        var kimptonBannerXSVP = document.getElementById('special-announcement-banner-xsvp');
        if (!!kimptonBannerXSVP) {
            kimptonBannerXSVP.style.display = 'none';
        }

        var kimptonBanner = document.getElementById('special-announcement-banner');
        if (!!kimptonBanner) {
            kimptonBanner.style.display = 'none';
        }
    });
}

var readMoreLink = document.getElementById('kimpton-read-more-link');
if (!!readMoreLink) {
    readMoreLink.addEventListener('click', function () {
        var expandedBanner = document.getElementById('kimpton-expanded-messaging');
        if (!!expandedBanner) {
            expandedBanner.style.display = 'inline-block';
        }
        var collapsedBanner = document.getElementById('kimpton-collapsed-messaging');
        if (!!collapsedBanner) {
            collapsedBanner.style.display = 'none';
        }
        readMoreLink.style.visibility = 'hidden';

        var expandedBannerXSVP = document.getElementById('kimpton-expanded-messaging-xsvp');
        if (!!expandedBannerXSVP) {
            expandedBannerXSVP.style.display = 'inline-block';
        }
        var collapsedBannerXSVP = document.getElementById('kimpton-collapsed-messaging-xsvp');
        if (!!collapsedBannerXSVP) {
            collapsedBannerXSVP.style.display = 'none';
        }
        readMoreLinkXSVP.style.visibility = 'hidden';
    });
}

var readMoreLinkXSVP = document.getElementById('kimpton-read-more-link-xsvp');
if (!!readMoreLinkXSVP) {
    readMoreLinkXSVP.addEventListener('click', function () {
        var expandedBannerXSVP = document.getElementById('kimpton-expanded-messaging-xsvp');
        if (!!expandedBannerXSVP) {
            expandedBannerXSVP.style.display = 'inline-block';
        }
        var collapsedBannerXSVP = document.getElementById('kimpton-collapsed-messaging-xsvp');
        if (!!collapsedBannerXSVP) {
            collapsedBannerXSVP.style.display = 'none';
        }
        readMoreLinkXSVP.style.visibility = 'hidden';

        var expandedBanner = document.getElementById('kimpton-expanded-messaging');
        if (!!expandedBanner) {
            expandedBanner.style.display = 'inline-block';
        }
        var collapsedBanner = document.getElementById('kimpton-collapsed-messaging');
        if (!!collapsedBanner) {
            collapsedBanner.style.display = 'none';
        }
        readMoreLink.style.visibility = 'hidden';
    });
}

var readLessLink = document.getElementById('kimpton-read-less-link');
if (!!readLessLink) {
    readLessLink.addEventListener('click', function () {
        var expandedBanner = document.getElementById('kimpton-expanded-messaging');
        if (!!expandedBanner) {
            expandedBanner.style.display = 'none';
        }
        var collapsedBanner = document.getElementById('kimpton-collapsed-messaging');
        if (!!collapsedBanner) {
            collapsedBanner.style.display = 'inline-block';
        }
        var readMoreLink = document.getElementById('kimpton-read-more-link');
        if (!!readMoreLink) {
            readMoreLink.style.visibility = 'visible';
        }

        var expandedBannerXSVP = document.getElementById('kimpton-expanded-messaging-xsvp');
        if (!!expandedBannerXSVP) {
            expandedBannerXSVP.style.display = 'none';
        }
        var collapsedBannerXSVP = document.getElementById('kimpton-collapsed-messaging-xsvp');
        if (!!collapsedBannerXSVP) {
            collapsedBannerXSVP.style.display = 'inline-block';
        }
        var readMoreLinkXSVP = document.getElementById('kimpton-read-more-link-xsvp');
        if (!!readMoreLinkXSVP) {
            readMoreLinkXSVP.style.visibility = 'visible';
        }
    });
}

var readLessLinkXSVP = document.getElementById('kimpton-read-less-link-xsvp');
if (!!readLessLinkXSVP) {
    readLessLinkXSVP.addEventListener('click', function () {
        var expandedBannerXSVP = document.getElementById('kimpton-expanded-messaging-xsvp');
        if (!!expandedBannerXSVP) {
            expandedBannerXSVP.style.display = 'none';
        }
        var collapsedBannerXSVP = document.getElementById('kimpton-collapsed-messaging-xsvp');
        if (!!collapsedBannerXSVP) {
            collapsedBannerXSVP.style.display = 'inline-block';
        }
        var readMoreLinkXSVP = document.getElementById('kimpton-read-more-link-xsvp');
        if (!!readMoreLinkXSVP) {
            readMoreLinkXSVP.style.visibility = 'visible';
        }

        var expandedBanner = document.getElementById('kimpton-expanded-messaging');
        if (!!expandedBanner) {
            expandedBanner.style.display = 'none';
        }
        var collapsedBanner = document.getElementById('kimpton-collapsed-messaging');
        if (!!collapsedBanner) {
            collapsedBanner.style.display = 'inline-block';
        }
        var readMoreLink = document.getElementById('kimpton-read-more-link');
        if (!!readMoreLink) {
            readMoreLink.style.visibility = 'visible';
        }
    });
}

widthChangeXSVP1(mqXSVP1);
widthChangeXSVP2(mqXSVP2);
widthChangeMVP(mqSVP1);
widthChangeSVP2(mqSVP2);
widthChangeMVP(mqMVP);
widthChangeLVP1(mqLVP1);
widthChangeLVP2(mqLVP2);
widthChangeLVP3(mqLVP3);
widthChangeLVP4(mqLVP4);
