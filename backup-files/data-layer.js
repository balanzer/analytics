Bootstrapper.dataManager.push({
    name: "",
    id: "gdl",
    data: {
        suite_mapping: {
            name: "",
            get: function () {
                /* Determine what RSID to Send to */
                var d = location.hostname.toLowerCase(),
                    p = location.pathname.toLowerCase().replace(/\/\//g, '/'),
                    map = [],
                    returnObject = {};

                /*
                 * Push domain name, pathname, report suite id, internal URL filters, Brand
                 * Name, PrefixID into array
                 */
                /* Mobile URLs */
                map.push([/^m\.(secure\.|)ihg\.com/, /.*/i, 'ihgmobile,ihgsuper', 'm.ihg.com,m.secure.ihg.com', 'Mobile', 'M: ', 4]);
                map.push([/^m\.holidayinn\.com/, /.*/, 'ihgmobile,ihgsuper', 'm.ihg.com,m.holidayinn.com', 'Mobile', 'M: ', 4]);
                map.push([/^m\.hiexpress\.com/, /.*/, 'ihgmobile,ihgsuper', 'm.ihg.com,m.hiexpress.com', 'Mobile', 'M: ', 4]);
                map.push([/^m\.crowneplaza\.com/, /.*/, 'ihgmobile,ihgsuper', 'm.ihg.com,m.crowneplaza.com', 'Mobile', 'M: ', 4]);
                map.push([/^m\.intercontinental\.com/, /.*/, 'ihgmobile,ihgsuper', 'm.ihg.com,m.intercontinental.com', 'Mobile', 'M: ', 4]);
                map.push([/^m\.hotelindigo\.com/, /.*/, 'ihgmobile,ihgsuper', 'm.ihg.com,m.hotelindigo.com', 'Mobile', 'M: ', 4]);
                map.push([/^m\.staybridge\.com/, /.*/, 'ihgmobile,ihgsuper', 'm.ihg.com,m.staybridge.com', 'Mobile', 'M: ', 4]);
                map.push([/^m\.candlewoodsuites\.com/, /.*/, 'ihgmobile,ihgsuper', 'm.ihg.com,m.candlewoodsuites.com', 'Mobile', 'M: ', 4]);
                map.push([/^m\.evenhotels\.com/, /.*/, 'ihgmobile,ihgsuper', 'm.ihg.com,m.evenhotels.com', 'Mobile', 'M: ', 4]);
                map.push([/^m\.holidayinnresorts\.com/, /.*/, 'ihgmobile,ihgsuper', 'm.ihg.com,m.holidayinnresorts.com', 'Mobile', 'M: ', 4]);
                map.push([/^m\.hiclubvacations\.com/, /.*/, 'ihgmobile,ihgsuper', 'm.ihg.com,m.hiclubvacations.com', 'Mobile', 'M: ', 4]);
                map.push([/^m\.hualuxe\.com/, /.*/, 'ihgmobile,ihgsuper', 'm.ihg.com,m.hualuxe.com', 'Mobile', 'M: ', 4]);

                /* Holidayinn deals */
                map.push([/deals\.holidayinn\.com/, /.*/, 'ihgmicrosites', 'deals.holidayinn.com', 'DH', 'DH: ', 3]);
                /* Holiday Inn */
                map.push([/\.holidayinn\.com/, /.*/, 'ihgholidayinn', 'holidayinn.com', 'HI', 'HI: ', 3]);
                map.push([/\.ichotelsgroup\.com/, /^\/holidayinn\//i, 'ihgholidayinn', 'ichotelsgroup.com', 'HI', 'HI: ', 4]);
                map.push([/www\.ihg\.com/, /^\/holidayinn\//i, 'ihgholidayinn', 'ihg.com', 'HI', 'HI: ', 4]);
                /* Holiday Express */
                map.push([/\.hiexpress\.com/, /.*/, 'ihgholidayinnexpress', 'hiexpress.com', 'EX', 'EX: ', 3]);
                map.push([/\.holidayinnexpress\.com/, /.*/, 'ihgholidayinnexpress', 'holidayinnexpress.com', 'EX', 'EX: ', 3]);
                map.push([/\.ichotelsgroup\.com/, /^\/hiexpress\//i, 'ihgholidayinnexpress', 'ichotelsgroup.com', 'EX', 'EX: ', 4]);
                map.push([/www\.ihg\.com/, /^\/holidayinnexpress\//i, 'ihgholidayinnexpress', 'ihg.com', 'EX', 'EX: ', 4]);
                /* Greater China */
                map.push([/^(cn|secure\.cn)\.ichotelsgroup\.com/, /^\/m\//i, 'ihgmobile', 'cn.ichotelsgroup.com', 'China Mobile', 'CM: ']);
                map.push([/^(cn|secure\.cn)\.ichotelsgroup\.com/, /.*/, 'ihggreaterchina', 'ichotelsgroup.com', 'GC', 'GC: ', 0]);
                map.push([/^(cn|secure\.cn)\.ihg\.com/, /.*/, 'ihggreaterchina', 'ihg.com', 'GC', 'GC: ', 0]);
                // [AA] enalbing back china domains
                map.push([/ichotelsgroup\.com\.cn/, /^\/m\//i, 'ihgmobile', 'ichotelsgroup.com.cn', 'China Mobile', 'CM: ']);
                map.push([/ichotelsgroup\.com\.cn/, /.*/, 'ihggreaterchina', 'ichotelsgroup.com.cn', 'GC', 'GC: ', 0]);
                map.push([/ihg\.com\.cn/, /.*/, 'ihgusglobal,ihgsuper', 'ihg.com.cn', '6C', '6C: ', 0]);
                /* Intercontinental */
                map.push([/\.ichotelsgroup\.com/, /^\/intercontinental\//i, 'ihgintercontinental', 'ichotelsgroup.com', 'IC', 'IC: ', 4]);
                map.push([/\.intercontinental\.com/, /.*/, 'ihgintercontinental', 'intercontinental.com', 'IC', 'IC: ', 3]);
                map.push([/www\.ihg\.com/, /^\/intercontinental\//i, 'ihgintercontinental', 'ihg.com', 'IC', 'IC: ', 4]);
                /* Crowne Plaza */
                map.push([/\.ichotelsgroup\.com/, /^\/crowneplaza\//i, 'ihgcrowneplaza', 'ichotelsgroup.com', 'CP', 'CP: ', 4]);
                map.push([/\.crowneplaza\.com/, /.*/, 'ihgcrowneplaza', 'crowneplaza.com', 'CP', 'CP: ', 3]);
                map.push([/www\.ihg\.com/, /^\/crowneplaza\//i, 'ihgcrowneplaza', 'ihg.com', 'CP', 'CP: ', 4]);
                /* Staybridge */
                map.push([/\.ichotelsgroup\.com/, /^\/staybridge\//i, 'ihgstaybridge', 'ichotelsgroup.com', 'SB', 'SB: ', 4]);
                map.push([/\.staybridge\.com/, /.*/, 'ihgstaybridge', 'staybridge.com', 'SB', 'SB: ', 3]);
                map.push([/www\.ihg\.com/, /^\/staybridge\//i, 'ihgstaybridge', 'ihg.com', 'SB', 'SB: ', 4]);
                /* Indigo Discovery (must come before Hotel Indigo map)*/
                map.push([/discovery\.hotelindigo\.com/, /.*/, 'ihgmicrosites', 'ihg.com', 'MS', 'MS: INDIGO-DISCOVERY: ', 0]);
                /* Hotel Indigo */
                map.push([/\.ichotelsgroup\.com/, /^\/hotelindigo\//i, 'ihgindigo', 'ichotelsgroup.com', 'IN', 'IN: ', 4]);
                map.push([/\.hotelindigo\.com/, /.*/, 'ihgindigo', 'hotelindigo.com', 'IN', 'IN: ', 3]);
                map.push([/www\.ihg\.com/, /^\/hotelindigo\//i, 'ihgindigo', 'ihg.com', 'IN', 'IN: ', 4]);
                /* Candlewood */
                map.push([/\.ichotelsgroup\.com/, /^\/candlewood\//i, 'ihgcandlewoodsuites', 'ichotelsgroup.com', 'CW', 'CW: ', 4]);
                map.push([/\.candlewoodsuites\.com/, /.*/, 'ihgcandlewoodsuites', 'ichotelsgroup.com', 'CW', 'CW: ', 3]);
                map.push([/www\.ihg\.com/, /^\/candlewood\//i, 'ihgcandlewoodsuites', 'ihg.com', 'CW', 'CW: ', 4]);
                /* Holidayinn Resorts */
                map.push([/\.ichotelsgroup\.com/, /^\/holidayinnresorts\//i, 'ihgholidayinnresorts', 'ichotelsgroup.com', 'RS', 'RS: ', 4]);
                map.push([/\.holidayinnresorts\.com/, /.*/, 'ihgholidayinnresorts', 'holidayinnresorts.com', 'RS', 'RS: ', 3]);
                map.push([/www\.ihg\.com/, /^\/holidayinnresorts\//i, 'ihgholidayinnresorts', 'ihg.com', 'RS', 'RS: ', 4]);
                /* Holiday Inn Club Vacations */
                map.push([/\.ichotelsgroup\.com/, /^\/holidayinnclubvacations\//i, 'ihgholidayinnclubvacations', 'ichotelsgroup.com', 'CV', 'CV: ', 4]);
                map.push([/\.holidayinnclubvacations\.com/, /.*/, 'ihgholidayinnclubvacations', 'holidayinnclubvacations.com', 'CV', 'CV: ', 3]);
                map.push([/www\.ihg\.com/, /^\/holidayinnclubvacations\//i, 'ihgholidayinnclubvacations', 'ihg.com', 'CV', 'CV: ', 4]);
                /* ihg.com/6C */
                map.push([/\.ichotelsgroup\.com/, /^\/ihg\//i, 'ihgichhotels', 'ichotelsgroup.com', '6C', '6C: ', 4]);
                map.push([/www\.ihg\.com/, /^\/ihg\//i, 'ihgichhotels', 'ihg.com', '6C', '6C: ', 4]);
                map.push([/www\.ihg\.com/, /^\/(content|hotels|diningrewards|staypreferences|enhanceyourstay)\//i, 'ihgichhotels', 'ihg.com', '6C', '6C: ', 3]);
                map.push([/www\.ihg\.com/, /^\/rewardsclub\/.*\/account\//i, 'ihgichhotels', 'ihg.com', '6C', '6C: REWARDSCLUB : ', 3]);
                map.push([/www\.ihg\.com/, /^\/rewardsclub\//i, 'ihgichhotels', 'ihg.com', '6C', '6C: REWARDSCLUB : ', 4]);
                map.push([/\.ichotelsgroup.com\.com/, /^\/hotels\//, 'ihgichhotels', 'ichotelsgroup.com', '6C', '6C: ', 3]);
                /* Explore Destinations */
                map.push([/www\.ihg\.com/, /^\/destinations\//i, 'ihgichhotels', 'ihg.com', '6C', '6C: DESTINATIONS : ', 3]);
                /* Army Hotels */
                map.push([/\.ihgarmyhotels\.com/, /.*/, 'ihgarmyhotels', 'ihgarmyhotels.com', 'MA', 'MA: ', 3]);
                map.push([/www\.ihg\.com/, /^\/armyhotels\//i, 'ihgarmyhotels', 'ihg.com', 'MA', 'MA: ', 4]);
                /* Priority Club */
                map.push([/\.priorityclub\.com/, /.*/, 'ihgpriorityclub', 'priorityclub.com', 'PC', 'PC: ', 3]);
                map.push([/www\.ihg\.com/, /^\/priorityclub\//i, 'ihgpriorityclub', 'ihg.com', 'PC', 'PC: ', 4]);
                map.push([/\.ichotelsgroup\.com/, /^\/h\/d\/pc\//i, 'ihgpriorityclub', 'ichotelsgroup.com', 'PC', 'PC: ', 3]);
                /* Japan */
                map.push([/\.anaihghotels\.co\.jp/, /.*/, 'ihgjapan', 'anaihghotels.co.jp', 'JP', 'JP: ', 3]);
                /* Easy Meeting */
                map.push([/emtg\.ihg\.com/, /.*/, 'ihgeasymeetings,ihgusglobal', 'ihg.com', 'EM', 'EM: ', 1]);
                /* Even Hotels */
                map.push([/evenhotels\.com/, /.*/, 'ihgusglobal,ihgsuper', 'evenhotels.com', 'VN', 'VN: ', 3]);
                map.push([/www\.ihg\.com/, /^\/evenhotels\//i, 'ihgusglobal,ihgsuper', 'ihg.com', 'VN', 'VN: ', 4]);
                /* BazaarVoice */
                map.push([/reviews\.ichotelsgroup\.com/, /.*/, 'ihgmicrosites', 'ichotelsgroup.com', 'BV', 'BV: ', 0]);
                /* Customer Service Chat */
                map.push([/customerservice\.ihg\.com/, /.*/, 'ihgusglobal,ihgsuper', 'ihg.com', 'BV', 'BV: ', 0]);
                /* Set Your Sights */
                map.push([/setyoursights\.ihg\.com/, /.*/, 'ihgmicrosites,ihgsuper', 'ihg.com', 'MS', 'MS: ', 0]);
                /* Business Rewards */
                map.push([/www\.ihg\.com/, /^\/businessrewards\//i, 'ihgusglobal', 'ihg.com', '6C', '6C: BUSINESSREWARDS : ', 3]);
                /* Auctions Site */
                map.push([/auctions\.ihg\.com/, /.*/, 'ihgmicrosites,ihgsuper', 'ihg.com', 'MS', 'MS: AUCTIONS', 0]);
                map.push([/auction-inthgpointslive1\.c1\.vigoratedeals.com/, /.*/, 'ihgmicrosites,ihgsuper', 'ihg.com', 'MS', 'MS: AUCTIONS', 0]);
                /* Share Forever */
                map.push([/shareforever\.ihg.com/, /.*/, 'ihgmicrosites,ihgsuper', 'ihg.com', 'MS', 'MS: SHAREFOREVER: ', 0]);
                /* Guest Wifi */
                map.push([/www\.ihg\.com/, /^\/guestwifi\/evenhotels\//i, 'ihgusglobal,ihgsuper', 'ihg.com', 'VN', 'VN: ', 0]);
                map.push([/www\.ihg\.com/, /^\/guestwifi\/candlewood\//i, 'ihgusglobal,ihgsuper', 'ihg.com', 'CW', 'CW: ', 0]);
                map.push([/www\.ihg\.com/, /^\/guestwifi\/staybridge\//i, 'ihgusglobal,ihgsuper', 'ihg.com', 'SB', 'SB: ', 0]);
                map.push([/www\.ihg\.com/, /^\/guestwifi\/hotelindigo\//i, 'ihgusglobal,ihgsuper', 'ihg.com', 'IN', 'IN: ', 0]);
                map.push([/www\.ihg\.com/, /^\/guestwifi\/holidayinnresorts\//i, 'ihgusglobal,ihgsuper', 'ihg.com', 'RS', 'RS: ', 0]);
                map.push([/www\.ihg\.com/, /^\/guestwifi\/holidayinnexpress\//i, 'ihgusglobal,ihgsuper', 'ihg.com', 'EX', 'EX: ', 0]);
                map.push([/www\.ihg\.com/, /^\/guestwifi\/holidayinn\//i, 'ihgusglobal,ihgsuper', 'ihg.com', 'HI', 'HI: ', 0]);
                map.push([/www\.ihg\.com/, /^\/guestwifi\/intercontinental\//i, 'ihgusglobal,ihgsuper', 'ihg.com', 'IC', 'IC: ', 0]);
                map.push([/www\.ihg\.com/, /^\/guestwifi\/crowneplaza\//i, 'ihgusglobal,ihgsuper', 'ihg.com', 'CP', 'CP: ', 0]);
                /* Hualuxe */
                map.push([/www\.ihg\.com/, /^\/hualuxe\//i, 'ihghualuxe', 'ihg.com', 'UL', 'UL: ', 4]);
                //[AA] Enabling china domains
                map.push([/www\.hualuxe\.com/, /.*/, 'ihghualuxe', 'hualuxe.com', 'UL', 'UL: ', 3]);
                map.push([/www\.hualuxe\.com\.cn/, /.*/, 'ihghualuxe', 'hualuxe.com.cn', 'UL', 'UL: ', 3]);
                map.push([/ihg\.com\.cn/, /^\/hualuxe\//i, 'ihghualuxe', 'ihg.com.cn', 'UL', 'UL: ', 4]);
                /* Kimpton */
                map.push([/www\.ihg\.com/, /^\/spnd\//i, 'ihgusglobal,ihgsuper', 'ihg.com', 'ND', 'ND: ', 4]);
                map.push([/\.kimptonhotels\.com/, /.*/, 'ihgusglobal,ihgsuper,ihgkimpton', 'kimptonhotels.com', 'KI', 'KI: ', 3]);
                map.push([/www\.ihg\.com/, /^\/kimptonhotels\//i, 'ihgusglobal,ihgsuper,ihgkimpton', 'ihg.com', 'KI', 'KI: ', 4]);
                /* Avid */
                map.push([/\.avidhotels\.com/, /.*/, 'ihgusglobal,ihgsuper', 'avidhotels.com', 'VA', 'VA: ', 3]);
                map.push([/www\.ihg\.com/, /^\/avidhotels\//i, 'ihgusglobal,ihgsuper', 'ihg.com', 'VA', 'VA: ', 4]);
                /*Voco Hotels*/
                map.push([/\.vocohotels\.com/, /.*/, 'ihgusglobal,ihgsuper', 'vocohotels.com', 'VX', 'VX: ', 3]);
                map.push([/www\.ihg\.com/, /^\/voco\//i, 'ihgusglobal,ihgsuper', 'ihg.com', 'VX', 'VX: ', 4]);
                /*Regent Hotels*/
                map.push([/www\.ihg\.com/, /^\/regent\//i, 'ihgusglobal,ihgsuper', 'ihg.com', 'RE', 'RE: ', 4]);

                for (var i = 0, l = map.length; i < l; i++) {
                    if (d.match(map[i][0]) && p.match(map[i][1])) {
                        returnObject.s_account = (map[i][2].match(/ihgjapan|ihgmicrosites|ihgeasymeetings|ihgmobile|ihgkimpton/i) === null) ? "ihgusglobal,ihgsuper" : map[i][2];
                        returnObject.internalURLFilters = map[i][3];
                        returnObject.internalURLFilters += ',hiexpress.com,holidayinn.com,holidayinnresorts.com,candlewoodsuites.com,crowneplaza.com,hotelindigo.com,intercontinental.com,staybridge.com,kimptonhotels.com,avidhotels.com,vocohotels.com,phcompany.com,hualuxe.com';
                        returnObject.ihgBrand = map[i][4];
                        returnObject.prefixID = map[i][5];
                        returnObject.pathStart = map[i][6];
                        break;
                    }
                }
                /*
                 * Check for QA environment or blank s_account, prevent call from being made
                 * in these environments
                 */
                if (d.match(/(qa|local|qap|demo|int|silent|staging|perftest|dev01).*\..*\./i) || !returnObject.s_account || returnObject.s_account == '') {
                    returnObject.s_account = "ihgihgbrandsdev";
                    returnObject.internalURLFilters = (returnObject.internalURLFilters) ? returnObject.internalURLFilters : location.hostname;
                    returnObject.prefixID = (returnObject.prefixID) ? returnObject.prefixID : location.hostname;
                    returnObject.ihgBrand = (returnObject.ihgBrand) ? returnObject.ihgBrand : location.hostname;
                    returnObject.pathStart = (returnObject.pathStart) ? returnObject.pathStart : 0;
                    returnObject._inQA = true;
                    /* returnObject.stopSCCall = true; */
                }

                /* Orange Lake check */
                if (typeof trackingJson === 'object' && typeof trackingJson.propertyCode === 'string' && trackingJson.propertyCode.match(/^(DISCV|MYRCV|PFNCV|ECPCV|APFCV|LKGCV|GLBCV|LASCV|AVTCV|GLSCV|WBGCV|CCVCV)$/i) && !returnObject._inQA) {
                    returnObject.s_account += ',ihgihgorangelake';
                }

                /* Kimpton check */
                if (typeof trackingJson === 'object' && ((typeof trackingJson.brandCode === 'string' && trackingJson.brandCode.match(/^ki$/i)) || (typeof trackingJson.hotelBrand === 'string' && trackingJson.hotelBrand.match(/^ki$/i))) && !returnObject._inQA && !returnObject.s_account.match(/ihgkimpton/i)) {
                    returnObject.s_account += ',ihgkimpton';
                }


                return returnObject;
            }
        },
        s_account: {
            name: "",
            get: function () {
                return $data('gdl', 'suite_mapping')['s_account'];
            }
        },
        internal_url_filters: {
            name: "",
            get: function () {
                return $data('gdl', 'suite_mapping')['internalURLFilters'];
            }
        },
        ihg_brand: {
            name: "",
            get: function () {
                if (~location.hostname.toLowerCase().indexOf('emtg.ihg.com') && location.pathname.match(/easymeetings/)) {
                    lpath = location.pathname.toLowerCase();
                    if (~lpath.indexOf('/hi/')) {
                        return "HI";
                    } else if (~lpath.indexOf('/ex/')) {
                        return "EX";
                    } else if (~lpath.indexOf('/6c/')) {
                        return "6C";
                    } else if (~lpath.indexOf('/cp/')) {
                        return "CP";
                    } else if (~lpath.indexOf('/sb/')) {
                        return "SB";
                    } else if (~lpath.indexOf('/in/')) {
                        return "IN";
                    } else if (~lpath.indexOf('/pc/')) {
                        return "PC";
                    } else if (~lpath.indexOf('/cv/')) {
                        return "CV";
                    } else if (~lpath.indexOf('/cw/')) {
                        return "CW";
                    } else if (~lpath.indexOf('/ic/')) {
                        return "IC";
                    } else if (~lpath.indexOf('/rs/')) {
                        return "RS";
                    }
                } else return $data('gdl', 'suite_mapping')['ihgBrand'];
            }
        },
        prefix_id: {
            name: "",
            get: function () {
                /* [SR] 9/17/2018: Adding Hotel Bill page logic*/
                if (document.location.pathname.indexOf("account-mgmt/home") > -1 && $data('gdl', 'suite_mapping')['prefixID'] == "6C: REWARDSCLUB : ")
                    return "6C: ACCOUNT : ";
                else if (document.location.pathname.indexOf("account-mgmt/staysevents") > -1 && ("" + trackingJson.type).toLowerCase() == "contacthotelbill")
                    return "6C: ";
                else
                    return $data('gdl', 'suite_mapping')['prefixID'];
            }
        },
        path_start: {
            name: "",
            get: function () {
                return $data('gdl', 'suite_mapping')['pathStart'];
            }
        },
        in_qa: {
            name: "",
            get: function () {
                return $data('gdl', 'suite_mapping')['_inQA'];
            }
        },
        ad_impressions: {
            name: "",
            get: function () {
                /* [KW] 29/11/2017: Enabling legacy technology to capture ad impressions on the page. Running this first, and then adding and previous ad impressions from cookie logic before returning */
                var links = document.links,
                    adImpressions = "",
                    ads = [],
                    adBlock = Bootstrapper.getQueryParam('cm_sp') || Bootstrapper.getQueryParam('cm_sp2');
                if (links.length > 0) {
                    for (var i = 0, j = links.length; i < j; i++) {
                        if (links[i].href && links[i].href.match(/cm_sp2?=/i)) {
                            /* Prevent Baynote Links from being collected */
                            if (!jQuery(links[i]).attr('baynote_bnrank')) {
                                var adName = links[i].href.replace(/^.*cm_sp2?=/g, '').replace(/(&|#)./g, '').replace('.html', '');
                                if (adName != adBlock) {
                                    ads.push(adName);
                                }
                            }
                        }
                    }
                }
                if (ads.length > 0) {
                    adImpressions = Bootstrapper.removeDuplicateElement(ads).join('|');
                }
                if (document.getElementById("ChatOnlineButton")) {
                    adImpressions = adImpressions ? adImpressions + '|Online Chat' : 'Online Chat';
                }

                // [AR] 6/21/2016: Updating ad_impressions to use cookies
                var cookie = document.cookie.match(/adimpressions=([^;]*)/);
                if (cookie && cookie[1]) cookie = cookie[1];
                cookie = cookie || (
                    Bootstrapper._event_data && Bootstrapper._event_data.ad_impressions_prev && Bootstrapper._event_data.ad_impressions_prev.length ? Bootstrapper._event_data.ad_impressions_prev.join('|') : '') || '';
                if (cookie) {
                    Bootstrapper._event_data = Bootstrapper._event_data || {};
                    Bootstrapper._event_data.ad_impressions_prev = cookie.split('|');
                }
                document.cookie = 'adimpressions=;path=/;expires=Thu, 01 Jan 1970 00:00:01 UTC';

                if (adImpressions && cookie) {
                    adImpressions = Bootstrapper.removeDuplicateElement((adImpressions + '|' + cookie).split('|')).join('|');
                }
                return adImpressions || cookie || "";
            }
        },
        along_a_route: {
            name: "",
            get: function () {
                //FLAG: /findandbook (found one for the China mobile site: https://m.ihg.com/hotels/hualuxe/us/en/findandbook
                //FLAG: about query parameter 'qRtSt'
                /* home page clicks */
                if (location.pathname.match(/reservation\/findandbook/i) && Bootstrapper.getQueryParam('qRtSt')) {
                    return "Along a Route: Home Page: Click";
                }
                /* Search Results Clicks */
                else if (location.pathname.match(/reservation\/(hotel|)searchresult/i) && Bootstrapper.getQueryParam('qRtSt')) {
                    if (Bootstrapper.getQueryParam('qDest')) {
                        return "Along a Route: Search Results Page: Results";
                    } else {
                        return "Along a Route: Home Page: Results";
                    }
                }
            }
        },
        ambassador_member: {
            name: "",
            get: function () {
                if (typeof trackingJson === 'object' && trackingJson.ambassador) {
                    return trackingJson.ambassador;
                }
                return "false";
            }
        },
        booking_confirmation_code: {
            name: "",
            get: function () {
                /* [KW] 06/30/2017: Updating to return confirmation number and orginal sell date */
                /* [SR] 06/05/2018: Updating to return first entry in Business Rewards confirmation number array if BR booking */
                /* [KW] 03/29/2019: Adding logic to construct a new confirmation number for modify bookings */
                if (location.pathname.match(/\/change-confirmation$/i) && $data('gdl', 'session_storage_enabled')) {
                    return trackingJson.confirmationNumber + '-' + (trackingJson.timestamp || new Date().getTime());
                }
                if (trackingJson.type === 'reservationconfirmation') {
                    return $data('gdl', 'business_rewards_booking_confirmation_code') ? $data('gdl', 'business_rewards_booking_confirmation_code') : trackingJson.confirmationNumber + '-' + $data('gdl', 'original_sell_date');
                }
                return "";
            }
        },
        booking_end_date: {
            name: "",
            get: function () {
                if (typeof (trackingJson) === 'object' && trackingJson.reservationStartDate && trackingJson.roomNights && trackingJson.numRooms) {
                    var res = trackingJson.reservationStartDate,
                        startDateString = res.substring(4, 6) + '/' + res.substring(6) + '/' + res.substring(0, 4),
                        endDate = new Date(startDateString),
                        bookingEndDate = "";
                    endDate.setDate(endDate.getDate() + (parseInt(parseInt(trackingJson.roomNights) / parseInt(trackingJson.numRooms))));
                    bookingEndDate = (endDate.getMonth() + 1 < 10) ? "0" + (endDate.getMonth() + 1) : endDate.getMonth() + 1;
                    bookingEndDate += "/" + (endDate.getDate() < 10 ? "0" + endDate.getDate() : endDate.getDate()) + '/' + endDate.getFullYear();
                    return bookingEndDate;
                }
            }
        },
        booking_start_date: {
            name: "",
            get: function () {
                if (typeof (trackingJson) === 'object' && trackingJson.reservationStartDate && trackingJson.roomNights && trackingJson.numRooms) {
                    var res = trackingJson.reservationStartDate;
                    return res.substring(4, 6) + '/' + res.substring(6) + '/' + res.substring(0, 4);
                }
            }
        },
        booking_type: {
            name: "",
            get: function () {
                //priority club rewards
                if (~location.hostname.toLowerCase().indexOf('ihg.com')) {
                    if (~location.pathname.toLowerCase().indexOf('priorityclubs/rewards') && ~location.pathname.toLowerCase().indexOf('redeem') && location.pathname.match(/confirm$/i)) {
                        if (typeof jQuery === 'function') {
                            var productId = jQuery('td.rsPointsAndCash').children().attr("id");
                            var pointsUsed = jQuery('td.rsPointsAndCash').children().attr("value");
                            if (pointsUsed && productId) {
                                return 'REWARD POINTS';
                            }
                        }
                    }
                }

                if (window.trackingJson.type.toLowerCase() == 'guestinfo') {
                    var bookingType = null;
                    if (typeof (trackingJson) === 'object') {
                        /*Determine Checkout Type, Initiated Revenue and Initiated Points*/
                        if (trackingJson.initiatedBookingType) {
                            if (trackingJson.initiatedBookingType.toUpperCase() === 'C') {
                                bookingType = "CASH";
                            } else if (trackingJson.initiatedBookingType.toUpperCase() === 'P') {
                                bookingType = "POINTS";
                            } else if (trackingJson.initiatedBookingType.toUpperCase() === 'PNC') {
                                bookingType = "CASH + POINTS";
                            }
                        }
                    }
                    /*Check for cash + points*/
                    if (!bookingType) {
                        var cashPoints = Bootstrapper.findTagByProperty('SPAN', 'className', 'giPointsAndCash');
                        if (cashPoints) {
                            bookingType = "CASH + POINTS";
                        }
                        /*Check if Points are used*/
                        var pArray = (typeof (jQuery) === 'function') ? jQuery("p") : [];
                        if (pArray && pArray.length > 0 && !bookingType) {
                            for (var i = 0, l = pArray.length; i < l; i++) {
                                if (pArray[i].innerHTML && ~pArray[i].innerHTML.toLowerCase().indexOf('estimated total price') && ~pArray[i].innerHTML.toLowerCase().indexOf('points')) {
                                    bookingType = "POINTS";
                                    break;
                                }
                            }
                        }
                        bookingType = (bookingType) ? bookingType : "CASH";
                    }
                    return bookingType;
                } else if (trackingJson.initiatedBookingType) {
                    if (trackingJson.initiatedBookingType.toUpperCase() === 'C') {
                        return "CASH";
                    } else if (trackingJson.initiatedBookingType.toUpperCase() === 'P') {
                        return "POINTS";
                    } else if (trackingJson.initiatedBookingType.toUpperCase() === 'PNC') {
                        return "CASH + POINTS";
                    }
                }
                return '';
            }
        },
        booking_window: {
            name: "",
            get: function () {
                /* Guest Info */
                if (trackingJson.checkInDate) {
                    var today = new Date();
                    var dd = today.getDate();
                    var mm = today.getMonth() + 1; //January is 0!
                    var yyyy = today.getFullYear();

                    if (dd < 10) {
                        dd = '0' + dd;
                    }

                    if (mm < 10) {
                        mm = '0' + mm;
                    }

                    today = mm + '/' + dd + '/' + yyyy;
                    var start = new Date(today);
                    var end = new Date(trackingJson.checkInDate);
                    var days = (end - start) / 1000 / 60 / 60 / 24;
                    days = days - (end.getTimezoneOffset() - start.getTimezoneOffset()) / (60 * 24);
                    return days.toString();
                }
                if (window.trackingJson.type.toLowerCase() == 'guestinfo' || window.trackingJson.type.toLowerCase() == 'guestandpaymentinfo') {
                    if (typeof (trackingJson) === 'object') {
                        if (trackingJson.leadTime) {
                            if (trackingJson.leadTime == "0") {
                                return trackingJson.leadTime;
                            } else {
                                return (parseInt(trackingJson.leadTime) - 1).toString();
                            }
                        } else if (trackingJson.checkInDate) {
                            // Updating to trackingJson.checkInDate to reflect new variable names
                            var startDate = trackingJson.checkInDate;
                            return (Bootstrapper.getDaysDif(new Date(startDate))).toString();
                        }
                    } else {
                        var links = document.links || [],
                            nightlyRate = document.getElementById('averageBasePriceUSD'),
                            checkInDate = "",
                            checkOutDate = "",
                            datesArray = [],
                            finalDates = {};
                        /*Property ID, Check-In/Check-Out Dates*/
                        for (var i = 0, l = links.length; i < l; i++) {
                            if (datesArray.length == 0 && links[i].href && ~links[i].href.toLowerCase().indexOf('checkindate=') && ~links[i].href.toLowerCase().indexOf('?')) {
                                datesArray = links[i].href.toLowerCase().split('?');
                                datesArray = datesArray[1].split('&');
                                for (var ii = 0, ll = datesArray.length; ii < ll; ii++) {
                                    var param = datesArray[ii].split('=');
                                    switch (param[0]) {
                                        case 'checkindate':
                                            finalDates.checkInDay = param[1];
                                        case 'checkinmonthyear':
                                            finalDates.checkInMonthYear = param[1];
                                        case 'checkoutdate':
                                            finalDates.checkOutDay = param[1];
                                        case 'checkoutmonthyear':
                                            finalDates.checkOutMonthYear = param[1];
                                        case 'numberofrooms':
                                            finalDates.numberOfRooms = param[1];
                                    }
                                }
                                if (finalDates.checkInDay && finalDates.checkInMonthYear) {
                                    finalDates.dayOne = new Date((parseInt(finalDates.checkInMonthYear.substring(0, 2)) + 1) + '/' + finalDates.checkInDay + '/' + finalDates.checkInMonthYear.substring(2));
                                }
                                /*Grab Checkout Booking Window*/
                                if (finalDates.dayOne) {
                                    return Bootstrapper.getDaysDif(finalDates.dayOne).toString();
                                }
                            }
                        }
                    }
                }
                // ENDEAVOR - New Booking Flow
                if (!(~location.pathname.toLowerCase().indexOf('/wireless')) && location.pathname.match(/confirm$/i)) {
                    if (trackingJson.leadTime) {
                        var subtract = (trackingJson.timeOfDayAttribute && trackingJson.timeOfDayAttribute < 12) ? 1 : 0;
                        var bookingWindow = (trackingJson.leadTime - subtract).toString();
                        return (bookingWindow == '-1') ? '0' : _bookingWindow;
                    } else if (trackingJson.reservationStartDate) {
                        var startDate = trackingJson.reservationStartDate.substring(4, 6) + '/' + trackingJson.reservationStartDate.substring(6) + '/' + trackingJson.reservationStartDate.substring(0, 4);
                        return (Bootstrapper.getDaysDif(new Date(startDate))).toString();
                    }
                }
                try {
                    if (typeof (trackingJson) === 'object' && $data('gdl', 'check_in_date').length > 0 && $data('gdl', 'original_sell_date').length > 0) {
                        var cid = $data('gdl', 'check_in_date').split('/'),
                            osd = $data('gdl', 'original_sell_date').split('/');
                        if (cid.length == 3 && osd.length == 3) {
                            var newCID = new Date(cid[2], cid[0] - 1, cid[1]),
                                newOSD = new Date(osd[2], osd[0] - 1, osd[1]),
                                days = newCID - newOSD;
                            days = Bootstrapper.getDaysDif(newCID, newOSD).toString();
                            if (days) {
                                return days;
                            }
                        }
                    }
                } catch (e) { }
            }
        },
        business_rewards_booking_confirmation_code: {
            name: "",
            get: function () {
                /* [SR] 06/05/2018: Return first entry in Business Rewards confirmation number array if BR booking */
                return trackingJson.type === 'reservationconfirmation' && trackingJson.BRbookingConfirmationNumberArray ? trackingJson.BRbookingConfirmationNumberArray.split('|')[0] + '-' + $data('gdl', 'original_sell_date') : '';
            }
        },
        business_rewards_number_of_rooms: {
            name: "",
            get: function () {
                /* [SR] 06/05/2018: Return number of Business Rewards rooms if BR booking */
                return trackingJson.Brreservations && trackingJson.Brreservations !== '0' ? trackingJson.Brreservations : '';
            }
        },
        hotel_code_combo: {
            name: "",
            get: function () {
                /* [AA] creating gdl for intiated revenue hotel code */
                return ":" + (trackingJson.propertyCode || "") + "-" + (trackingJson.roomCode || "") + "-" + (trackingJson.rateCode || "");
            }
        },
        business_rewards_number_of_room_nights: {
            name: "",
            get: function () {
                /* [SR] 06/05/2018: Return number of Business Rewards room nights if BR booking */
                return trackingJson.BRroomNights && trackingJson.BRroomNights !== '0' ? trackingJson.BRroomNights : '';
            }
        },
        is_employee: {
            name: "",
            get: function () {
                /* [AA] capture if an IHG employee */
                return trackingJson.isEmployee && trackingJson.isEmployee == "true" ? trackingJson.isEmployee : '';
            }
        },
        business_rewards_booking_total_minus_tax: {
            name: "",
            get: function () {
                /* [SR] 06/05/2018: Return Business Rewards room revenue if BR booking */
                /* As of 06/05/2018, this is bugged to include tax, but client will be fixing on their end */
                return trackingJson.BRroomRevenueUSD ? trackingJson.BRroomRevenueUSD : '';
            }
        },
        check_in_date: {
            name: "",
            get: function () {
                if (trackingJson.arrivalDate) {
                    return trackingJson.arrivalDate;
                }
                /* [KW] 6/15/2017: Adding logic to pull from the trackingJson */
                if (trackingJson.checkInDate) {
                    if (~trackingJson.checkInDate.indexOf('-')) {
                        var a;
                        return a = trackingJson.checkInDate.split('-'), a[1] + '/' + a[2] + '/' + a[0];
                    } else return trackingJson.checkInDate;
                } else if (Bootstrapper.getQueryParam('checkInDate') != '') {
                    var tcid = Bootstrapper.getQueryParam('checkInDate'),
                        tcim = Bootstrapper.getQueryParam('checkInMonthYear');
                    tcim = (tcim !== "" && parseInt(tcim.substring(0, 2)) >= 10) ? (parseInt(tcim.substring(0, 2)) + 1) + tcim.substring(2) : "0" + (parseInt(tcim.substring(1, 2)) + 1) + tcim.substring(2);
                    return tcim.substring(0, 2) + "/" + tcid + "/" + tcim.substring(2);
                } else {
                    return "";
                }
            }
        },
        check_out_date: {
            name: "",
            get: function () {
                if (typeof (trackingJson) === 'object' && trackingJson.departureDate) {
                    return trackingJson.departureDate;
                }
                /* [KW] 6/15/2017: Adding logic to pull from the trackingJson */
                if (trackingJson.checkOutDate) {
                    if (~trackingJson.checkOutDate.indexOf('-')) {
                        var a;
                        return a = trackingJson.checkOutDate.split('-'), a[1] + '/' + a[2] + '/' + a[0];
                    } else return trackingJson.checkOutDate;
                } else if (Bootstrapper.getQueryParam('checkOutDate') != '') {
                    var tcod = Bootstrapper.getQueryParam('checkOutDate'),
                        tcom = Bootstrapper.getQueryParam('checkOutMonthYear');
                    tcom = (tcom !== "" && parseInt(tcom.substring(0, 2)) >= 10) ? (parseInt(tcom.substring(0, 2)) + 1) + tcom.substring(2) : "0" + (parseInt(tcom.substring(1, 2)) + 1) + tcom.substring(2);
                    return tcom.substring(0, 2) + "/" + tcod + "/" + tcom.substring(2);
                } else {
                    return "";
                }
            }
        },
        clicktale_id: {
            name: "",
            get: function () {
                var clickTaleId = (function () {
                    if (document.cookie.indexOf("WRUID") > -1 && document.cookie.indexOf("WRUID=0") == -1 && document.cookie.indexOf("WRIgnore=true") == -1) {
                        var ca = document.cookie.split(';');
                        for (var i = 0; i < ca.length; i++) {
                            var c = ca[i];
                            while (c.charAt(0) == ' ') c = c.substring(1, c.length);
                            if (c.indexOf("WRUID") === 0) return c.substring(6, c.length) + "." + document.cookie.substr(document.cookie.indexOf('apv_') + 4, document.cookie.indexOf('_www') - document.cookie.indexOf('apv_') - 4);
                        }
                    } else return null;
                })();

                if (clickTaleId) return clickTaleId;
            }
        },
        corporate_id: {
            name: "",
            get: function () {
                if (typeof trackingJson === 'object' && trackingJson.corporateId) {
                    try {
                        return trackingJson.corporateId.toString();
                    } catch (e) {
                        console.log("GDL corporateId error: " + e);
                    }
                } else return (Bootstrapper.getQueryParam('qCpid') != "") ? Bootstrapper.getQueryParam('qCpid') : "";
            }
        },
        country: {
            name: "",
            get: function () {
                /* Check trackingJson.country variable first (more reliable) */
                /*if (typeof trackingJson === 'object' && trackingJson.country) {
                                    return trackingJson.country.toLowerCase();
                                }*/
                /* Temporary fix for the search results page */
                if (~location.pathname.toLowerCase().indexOf('/searchresult')) {
                    var c = Bootstrapper.Cookies.get('country_language').replace(/['"]+/g, '');
                    if (c && c.indexOf('$:') > 0) {
                        if (typeof c.split('$:')[0] === 'string' && c.split('$:')[0] !== '') {
                            return c.split('$:')[0].toLowerCase();
                        }
                    }
                }
                /* Check trackingJson.siteCountry variable next */
                if (typeof trackingJson === 'object' && trackingJson.siteCountry) {
                    return trackingJson.siteCountry.toLowerCase();
                }
                /* Determine by pathname */
                var lp = location.pathname.toLowerCase();
                if (~location.hostname.toLowerCase().indexOf('evenhotels.com') || ~lp.indexOf('/evenhotels/')) {
                    /*Statically set country to US*/
                    return 'us';
                }
                if (~lp.indexOf('/us/')) {
                    return 'us';
                } else if (~lp.indexOf('/gb/')) {
                    return 'gb';
                } else if (~lp.indexOf('/it/')) {
                    return 'it';
                } else if (~lp.indexOf('/fr/')) {
                    return 'fr';
                } else if (~lp.indexOf('/cn/')) {
                    return 'cn';
                } else if (~lp.indexOf('/es/')) {
                    return 'es';
                } else if (~lp.indexOf('/kr/')) {
                    return 'kr';
                } else if (~lp.indexOf('/jp/')) {
                    return 'jp';
                } else if (~lp.indexOf('/pt/')) {
                    return 'pt';
                } else if (~lp.indexOf('/ar/')) {
                    return 'ar';
                } else if (~lp.indexOf('/il/iw/')) {
                    return 'il';
                } else if (~lp.indexOf('/ru/ru/')) {
                    return 'ru';
                } else if (~lp.indexOf('/tr/tr/')) {
                    return 'tr';
                }
                /* Check Country Cookie */
                var c = Bootstrapper.Cookies.get('country_language').replace(/['"]+/g, '');
                console.log(c);
                if (c && c.indexOf('$:') > 0) {
                    if (typeof c.split('$:')[0] === 'string' && c.split('$:')[0] !== '') {
                        return c.split('$:')[0].toLowerCase();
                    }
                }
                return '';
            }
        },
        current_date: {
            name: "",
            get: function () {
                //window.TODAY is only populated in the booking confirmation page
                if (typeof window.TODAY === 'object') {
                    return (window.TODAY.getUTCMonth() + 1) + '/' + window.TODAY.getDate() + '/' + window.TODAY.getFullYear();
                }
            }
        },
        customer_id: {
            name: "",
            get: function () {
                if (typeof (trackingJson) === "object" && (trackingJson.pcrNumber || trackingJson.customerID)) {
                    return trackingJson.pcrNumber || trackingJson.customerID;
                }
                return '';
            }
        },
        google_search_rank: {
            name: "",
            get: function () {
                if (document.referrer.match(/\.google\..*cd=/i)) {
                    var rank = Bootstrapper.getQueryParam('cd', '', document.referrer.toString());
                    var rLength = rank ? rank.length : "",
                        rModLength = rank ? (rank - 1).toString().length : "";
                    if (rank && rLength && rModLength) {
                        if (rModLength && rModLength >= 2) {
                            return parseInt(rank.substr(0, rLength - 1)) + 1 + '-' + (rank.substr(rLength - 1) == '0' ? '1' + rank.substr(rLength - 1) : (rank.substr(rLength - 1)));
                        } else {
                            return '1-' + rank;
                        }
                    }
                }
            }
        },
        guest_connect_offer: {
            name: "",
            get: function () {
                link = jQuery('a[href*="&offer="]');
                if (link.length > 0) {
                    return link[0].href.replace(/.*offer=/i, '').replace(/&.*/, '');
                }
            }
        },
        hotel_brand: {
            name: "",
            get: function () {
                return trackingJson.hotelBrand || "";
            }
        },
        hotel_brand_4_digit: {
            name: "",
            get: function () {
                return trackingJson.hotelBrand4Digit || "";
            }
        },
        iata_id: {
            name: "",
            get: function () {
                return (typeof (trackingJson) === "object" && trackingJson.iata) ? trackingJson.iata : "";
            }
        },
        internal_campaign: {
            name: "",
            get: function () {
                if (Bootstrapper.getQueryParam('cm_sp') != '' || Bootstrapper.getQueryParam('cm_sp2') != '') {
                    return s.getValOnce((Bootstrapper.getQueryParam('cm_sp') || Bootstrapper.getQueryParam('cm_sp2')).replace('.html', ''), 'v_ev13', 1);
                }
            }
        },
        karma_member: {
            name: "",
            get: function () {
                if (typeof trackingJson === 'object' && trackingJson.karmaMember) {
                    return trackingJson.karmaMember;
                }
                return "false";
            }
        },
        language: {
            name: "",
            get: function () {
                /* Check trackingJson.language variable first (more reliable) */
                /* [KW] 6/15/2017: Added patch to remove any single or double quotes from the value */
                if (trackingJson.language) {
                    return trackingJson.language.replace(/('|")/g, '').toLowerCase();
                }
                /* Check trackingJson.siteLanguage variable next */
                if (trackingJson.siteLanguage) {
                    return trackingJson.siteLanguage.toLowerCase();
                }
                var c = Bootstrapper.Cookies.get('country_language').replace(/['"]+/g, '');
                if (c && c.indexOf('$:') > 0) {
                    if (typeof c.split('$:')[1] === 'string' && c.split('$:')[1] !== '') {
                        return c.split('$:')[1].toLowerCase();
                    }
                }

                /* Determine by pathname */
                var lp = location.pathname.toLowerCase();
                if (~lp.indexOf('/en/')) {
                    return 'en';
                } else if (~lp.indexOf('/de/')) {
                    return 'de';
                } else if (~lp.indexOf('/it/')) {
                    return 'it';
                } else if (~lp.indexOf('/fr/')) {
                    return 'fr';
                } else if (~lp.indexOf('/cn/')) {
                    return 'cn';
                } else if (~lp.indexOf('/es/')) {
                    return 'es';
                } else if (~lp.indexOf('/kr/')) {
                    return 'kr';
                } else if (~lp.indexOf('/jp/')) {
                    return 'jp';
                } else if (~lp.indexOf('/pt/')) {
                    return 'pt';
                } else if (~lp.indexOf('/ar/')) {
                    return 'ar';
                } else if (~lp.indexOf('/il/iw/')) {
                    return 'iw';
                } else if (~lp.indexOf('/ru/ru/')) {
                    return 'ru';
                } else if (~lp.indexOf('/tr/tr/')) {
                    return 'tr';
                }
                return '';
            }
        },
        login_status: {
            name: "",
            get: function () {
                return trackingJson.loginType ? trackingJson.loginType.toLowerCase() : 'anonymous';
            }
        },
        length_of_stay: {
            name: "",
            get: function () {
                if (trackingJson.checkInDate && trackingJson.checkOutDate) {
                    var checkInDate = new Date(trackingJson.checkInDate);
                    var checkOutDate = new Date(trackingJson.checkOutDate);
                    var days = (checkOutDate - checkInDate) / 1000 / 60 / 60 / 24;
                    days = days - (checkOutDate.getTimezoneOffset() - checkInDate.getTimezoneOffset()) / (60 * 24);
                    return days.toString();
                } else {
                    return '';
                }
            }
        },
        view_reservation_window: {
            name: "",
            get: function () {
                if (trackingJson.type === 'reservationconfirmation' || trackingJson.type === 'viewreservation') {
                    var today = new Date();
                    var dd = today.getDate();
                    var mm = today.getMonth() + 1; //January is 0!
                    var yyyy = today.getFullYear();

                    if (dd < 10) {
                        dd = '0' + dd;
                    }

                    if (mm < 10) {
                        mm = '0' + mm;
                    }

                    today = mm + '/' + dd + '/' + yyyy;

                    if (trackingJson.checkInDate) {
                        var start = new Date(today);
                        var end = new Date(trackingJson.checkInDate);
                        var days = (end - start) / 1000 / 60 / 60 / 24;
                        // due to daylight savings will show 31.0xxx
                        // which you need to offset as below
                        days = days - (end.getTimezoneOffset() - start.getTimezoneOffset()) / (60 * 24);
                        return days.toString();
                    }
                }
            }

        },
        loginStatus: {
            // [AR] 05/04/2016 Alias to allow mbox deployments to work
            name: "",
            get: function () {
                return $data('gdl', 'login_status');
            }
        },
        membership_status: {
            name: "",
            get: function () {
                if (typeof (trackingJson) === 'object' && trackingJson.membershipStatus) {
                    return trackingJson.membershipStatus;
                }
            }
        },
        nights_initiated: {
            name: "",
            get: function () {
                //[YY 2/7/17] include upsell page
                //guest and payment info
                if ((trackingJson.type == 'guestandpaymentinfo' || trackingJson.type == 'upsellpage') && trackingJson.roomNights != 0) {
                    return trackingJson.roomNights;
                }
                //guest info or ihgarmyhotels.com guest info
                if (window.trackingJson.type.toLowerCase() == 'guestinfo' || (~location.hostname.toLowerCase().indexOf('ihgarmyhotels.com') && location.pathname.match(/guestinfo$/i))) {
                    if (typeof (trackingJson) === 'object') {
                        if (trackingJson.roomNights) {
                            return trackingJson.roomNights;
                        }
                    } else {
                        var links = document.links || [],
                            nightlyRate = document.getElementById('averageBasePriceUSD'),
                            checkInDate = "",
                            checkOutDate = "",
                            datesArray = [],
                            finalDates = {};
                        for (var i = 0, l = links.length; i < l; i++) {
                            if (!data.propertyCode && links[i].href && ~links[i].href.toLowerCase().indexOf('hotelcode=')) {
                                data.propertyCode = links[i].href.substring(links[i].href.toLowerCase().indexOf('hotelcode=') + 10, links[i].href.toLowerCase().indexOf('hotelcode=') + 15);
                            }
                            if (datesArray.length == 0 && links[i].href && ~links[i].href.toLowerCase().indexOf('checkindate=') && ~links[i].href.toLowerCase().indexOf('?')) {
                                datesArray = links[i].href.toLowerCase().split('?');
                                datesArray = datesArray[1].split('&');
                                for (var ii = 0, ll = datesArray.length; ii < ll; ii++) {
                                    var param = datesArray[ii].split('=');
                                    switch (param[0]) {
                                        case 'checkindate':
                                            finalDates.checkInDay = param[1];
                                        case 'checkinmonthyear':
                                            finalDates.checkInMonthYear = param[1];
                                        case 'checkoutdate':
                                            finalDates.checkOutDay = param[1];
                                        case 'checkoutmonthyear':
                                            finalDates.checkOutMonthYear = param[1];
                                        case 'numberofrooms':
                                            finalDates.numberOfRooms = param[1];
                                    }
                                }
                                if (finalDates.checkInDay && finalDates.checkInMonthYear) {
                                    finalDates.dayOne = new Date((parseInt(finalDates.checkInMonthYear.substring(0, 2)) + 1) + '/' + finalDates.checkInDay + '/' + finalDates.checkInMonthYear.substring(2));
                                }
                                if (finalDates.checkInDay && finalDates.checkInMonthYear) {
                                    finalDates.dayTwo = new Date((parseInt(finalDates.checkOutMonthYear.substring(0, 2)) + 1) + '/' + finalDates.checkOutDay + '/' + finalDates.checkOutMonthYear.substring(2));
                                }
                                if (finalDates.dayOne && finalDates.dayTwo && finalDates.numberOfRooms) {
                                    return Bootstrapper.getDaysDif(finalDates.dayOne, finalDates.dayTwo) * finalDates.numberOfRooms;
                                }
                            }
                        }
                    }
                }
                //even hotels guest info
                if (~location.hostname.toLowerCase().indexOf('emtg.ihg.com') && location.pathname.match(/easymeetings/) && location.pathname.match(/bookingpersonalinfo/)) {
                    var numRooms = Bootstrapper.findTagsByProperty('DIV', 'className', 'progressCol step1'),
                        dates = Bootstrapper.findTagByProperty('DIV', 'className', 'progressInfo'),
                        nrooms = null,
                        numDays = null;
                    /*Check Num Rooms*/
                    if (numRooms && numRooms.length == 2) {
                        var type = numRooms[1].innerHTML;
                        nrooms = parseInt(type.substring(type.indexOf('<br>'), type.indexOf('&nbsp')).replace(/[^\d]+/g, ""));
                    }
                    /*Check Number of Days*/
                    if (dates && dates.innerHTML) {
                        var text = dates.innerHTML.substring(dates.innerHTML.indexOf('-') - 3, dates.innerHTML.lastIndexOf('<br>'));
                        text = text.split(' to ');
                        text[0] = text[0].split('-');
                        text[1] = text[1].split('-');
                        var checkInDate = Bootstrapper.findMonth(text[0][0]) + '/' + text[0][1] + '/' + text[0][2],
                            checkOutDate = Bootstrapper.findMonth(text[1][0]) + '/' + text[1][1] + '/' + text[1][2],
                            days = Bootstrapper.getDaysDif(new Date(checkInDate), new Date(checkOutDate));
                        if (typeof (days) === 'number') {
                            numDays = days;
                        }
                    }
                    /*Get Room * Nights*/
                    if (numDays && nrooms) {
                        if (!isNaN(numDays) && !isNaN(nrooms)) {
                            return numDays * nrooms;
                        }
                    } else {
                        return "";
                    }
                }
                // ENDEAVOR - New Booking Flow
                if (!(~location.pathname.toLowerCase().indexOf('/wireless')) && location.pathname.match(/confirm$/i)) {
                    return trackingJson.roomNights;
                }


                if (window.location.pathname.match(/^\/(hotels\/.*\/reservation\/searchresult|hotels\/.*\/reservation\/book)/)) {
                    if (typeof trackingJson === "object" && trackingJson.roomNights) {
                        return trackingJson.roomNights;
                    }
                    var treatAsUTC = function (date) {
                        var result = new Date(date);
                        result.setMinutes(result.getMinutes() - result.getTimezoneOffset());
                        return result
                    };

                    var daysBetween = function (startDate, endDate) {
                        var millisecondsPerDay = 24 * 60 * 60 * 1E3;
                        return (treatAsUTC(endDate) - treatAsUTC(startDate)) / millisecondsPerDay
                    };
                    var nightsPerRoom = 0,
                        numOfRooms = 0;
                    if (typeof trackingJson === "object" && trackingJson.arrivalDate && trackingJson.departureDate) nightsPerRoom = daysBetween(trackingJson.arrivalDate, trackingJson.departureDate);
                    if (Bootstrapper.getQueryParam("qRms")) numOfRooms = Bootstrapper.getQueryParam("qRms");
                    else if ($("#searchOptions \x3e div \x3e span:contains('Rooms')").length > 1) numOfRooms = parseInt($("#searchOptions \x3e div \x3e span:contains('Rooms')").text().replace("Rooms", ""));
                    else if (document.getElementById("roomsCount")) {
                        var rooms = document.getElementById("roomsCount");
                        if (rooms && rooms.value) numOfRooms = rooms.value
                    }

                    return nightsPerRoom * numOfRooms > 0 ? nightsPerRoom * numOfRooms : "";
                }
                // Other pages of the blooking flow without the correct trackingJson data EXCEPT Hotel Details
                if (trackingJson.roomCount && trackingJson.checkOutDate && trackingJson.checkInDate) {
                    //trackingJson.stayLength is inaccurate
                    //return (parseInt(trackingJson.roomCount) * parseInt(trackingJson.stayLength)).toString();
                    return ((new Date(trackingJson.checkOutDate) - new Date(trackingJson.checkInDate)) / (1000 * 60 * 60 * 24)) * parseInt(trackingJson.roomCount);
                }
                //Hotel Details pages
                if (trackingJson.type === "hotel-information" && trackingJson.reservation && trackingJson.reservation.roomCount && trackingJson.reservation.checkInDate && trackingJson.reservation.checkOutDate) {
                    //trackingJson.reservation.stayLength is inaccurate
                    //return (parseInt(trackingJson.reservation.roomCount) * parseInt(trackingJson.reservation.stayLength)).toString();
                    return ((new Date(trackingJson.reservation.checkOutDate) - new Date(trackingJson.reservation.checkInDate)) / (1000 * 60 * 60 * 24)) * parseInt(trackingJson.reservation.roomCount);
                }
            }
        },
        number_of_adults: {
            name: "",
            get: function () {
                //hotel details tab
                if (location.pathname.match(/hoteldetail$/)) {
                    if (Bootstrapper.getQueryParam('qAdlt') != '') {
                        return Bootstrapper.getQueryParam('qAdlt');
                    }
                    var adults = document.getElementById('adultsCount') || jQuery('select[name="adult_dd"]')[0];
                    if (adults && adults.value) {
                        return adults.value;
                    }
                }
                //New Booking Flow
                if (!(~location.pathname.toLowerCase().indexOf('/wireless')) && location.pathname.match(/book$/i)) {
                    if (Bootstrapper.getQueryParam('qAdlt')) {
                        return Bootstrapper.getQueryParam('qAdlt');
                    } else {
                        var adults = document.getElementById('adultsCount');
                        if (adults && adults.value) {
                            return adults.value;
                        }
                    }
                }
                //ihgarmyhotels.com search results
                if (~location.hostname.toLowerCase().indexOf('ihgarmyhotels.com') && location.pathname.match(/searchresult$/i)) {
                    if (Bootstrapper.getQueryParam('qAdlt') != '') {
                        return Bootstrapper.getQueryParam('qAdlt');
                    }
                }
                //ihgarmyhotels.com room rate
                if (~location.hostname.toLowerCase().indexOf('ihgarmyhotels.com') && location.pathname.match(/roomrate$/i)) {
                    var adults = document.getElementById('adultsCount') || document.getElementById('layerFormAdultsCount');
                    if (adults && adults.value) {
                        return adults.value;
                    }
                }
                //Room Rate and Hotel Details Other Tabs (ID: 225584)
                if (typeof (trackingJson) === 'object') {
                    if (window.trackingJson.type.toLowerCase() == 'roomrate' || (location.pathname.match(/hoteldetail$/i) && trackingJson.hotelCode)) {
                        var adults = document.getElementById('adultsCount') || document.getElementById('layerFormAdultsCount');
                        if (adults && adults.value) {
                            return adults.value;
                        }
                    }
                }
                //ENDEAVOR
                if (location.pathname.match(/searchresult/i)) {
                    if (Bootstrapper.getQueryParam('qAdlt') != '') {
                        return Bootstrapper.getQueryParam('qAdlt');
                    }
                }
                /* If all else fails, use trackJson.adultCount. 
                 * This is not always populated when it should be, 
                 * which is why we scrape from query parameters and elements first */
                if (typeof (trackingJson) === 'object' && trackingJson.adultCount) {
                    return trackingJson.adultCount;
                }
            }
        },
        number_of_children: {
            name: "",
            get: function () {
                //hotel details tab
                if (location.pathname.match(/hoteldetail$/)) {
                    if (Bootstrapper.getQueryParam('qChld') != '') {
                        return Bootstrapper.getQueryParam('qChld');
                    }
                    var children = document.getElementById('childrenCount') || jQuery('select[name="child_dd"]')[0];
                    if (children && children.value) {
                        return children.value;
                    }
                }
                //New Booking Flow
                if (!(~location.pathname.toLowerCase().indexOf('/wireless')) && location.pathname.match(/book$/i)) {
                    if (Bootstrapper.getQueryParam('qChld')) {
                        return Bootstrapper.getQueryParam('qChld');
                    } else {
                        var children = document.getElementById('childrenCount');
                        if (children && children.value) {
                            return children.value;
                        }
                    }
                }
                //ihgarmyhotels.com search results
                if (~location.hostname.toLowerCase().indexOf('ihgarmyhotels.com') && location.pathname.match(/searchresult$/i)) {
                    if (Bootstrapper.getQueryParam('qChld') != '') {
                        return Bootstrapper.getQueryParam('numberOfChildren');
                    }
                }
                //ihgarmyhotels.com room rate
                if (~location.hostname.toLowerCase().indexOf('ihgarmyhotels.com') && location.pathname.match(/roomrate$/i)) {
                    var children = document.getElementById('childrenCount') || document.getElementById('layerFormChildrenCount');
                    if (children && children.value) {
                        return children.value;
                    }
                }
                //Room Rate and Hotel Details Other Tabs (ID: 225584)
                if (typeof (trackingJson) === 'object') {
                    if (window.trackingJson.type.toLowerCase() == 'roomrate' || (location.pathname.match(/hoteldetail$/i) && trackingJson.hotelCode)) {
                        var children = document.getElementById('childrenCount') || document.getElementById('layerFormChildrenCount');
                        if (children && children.value) {
                            return children.value;
                        }
                    }
                }
                //ENDEAVOR
                if (location.pathname.match(/searchresult/i)) {
                    if (Bootstrapper.getQueryParam('qChld') != '') {
                        return Bootstrapper.getQueryParam('qChld');
                    }
                }
                /* If all else fails, use trackJson.childCount. 
                 * This is not always populated when it should be, 
                 * which is why we scrape from query parameters and elements first */
                if (typeof (trackingJson) === 'object' && trackingJson.childCount) {
                    return trackingJson.childCount;
                }
            }
        },
        number_of_rooms: {
            name: "",
            get: function () {
                //ENDEAVOR
                /* [SR] 06/05/2018: Updating to return number of Business Rewards rooms if BR booking */
                return $data('gdl', 'business_rewards_number_of_rooms') || trackingJson.roomCount || Bootstrapper.getQueryParam('qRms');
            }
        },
        number_of_room_nights: {
            name: "",
            get: function () {
                /* [SR] 06/05/2018: Updating to return number of Business Rewards room nights if BR booking */
                return $data('gdl', 'business_rewards_number_of_room_nights') || trackingJson.roomNights || '';
            }
        },
        average_nightly_rate: {
            name: "",
            get: function () {
                /* Adding logic to support pulling from multiple sources in case of timing issues */
                if (trackingJson.unitPriceUSD) {
                    return trackingJson.unitPriceUSD;
                }
                if (trackingJson.roomNights) {
                    return ($data('gdl', 'business_rewards_booking_total_minus_tax') || trackingJson.roomRevenueUSD) / trackingJson.roomNights;
                }
                return "";
            }
        },
        booking_total_minus_tax: {
            name: "",
            get: function () {
                return $data('gdl', 'business_rewards_booking_total_minus_tax') || trackingJson.roomRevenueUSD || '';
            }
        },
        tax: {
            name: "",
            get: function () {
                /* [KW] 6/21/2017: Updated to pull from the DOM to get the tax on the confirmation page */
                return typeof jQuery === 'function' && jQuery('div[data-slnm-ihg="taxes-value"] > span > span').text() || '';
            }
        },
        number_of_search_results: {
            name: "",
            get: function () {
                /* [KW] 6/15/2017: Check trackingJson first */
                if (trackingJson.searchResults) {
                    return trackingJson.searchResults;
                }

                var lpath = location.pathname.toLowerCase().replace(/\/\//g, '/'),
                    path = lpath.slice(1).replace(/\/$/, "").split('/').splice(Bootstrapper.pathStart, 9);
                if (path.length > 0) {
                    if ((path.length == '1' && (path[0] == 'reservation' || path[0] == 'home') && lpath.indexOf('/diningrewards/') == -1) || lpath == '/rewardsclub') {
                        /* Check for no result search term */
                        var noSearchTerm = document.getElementById('noHotelExist');
                        if (noSearchTerm && noSearchTerm.className === "error1") {
                            return 'none for destination entered';
                        }
                    }
                }
                if (((location.hostname.match(/(holidayinn|hiexpress|staybridge|crowneplaza|hotelindigo|candlewoodsuites|holidayinnresorts|holidayinnclubvacations|priorityclub|intercontinental|ihg|ichotelsgroup).com$/)) && (~location.pathname.toLowerCase().indexOf('/hotel/list') && !(location.pathname.match(/wireless/)))) || (location.hostname.match(/ihgarmyhotels\.com$/))) {
                    var noSearchTerm = document.getElementById('noHotelExist'),
                        numSearchResults = "";
                    if (noSearchTerm && noSearchTerm.className === "error1") {
                        numSearchResults = 'none for destination entered';
                    }
                    /*Grab trackingJson Variables*/
                    if (typeof (trackingJson) === "object") {
                        if (trackingJson.searchResults && !numSearchResults) {
                            numSearchResults = trackingJson.searchResults;
                        }
                    }
                    return numSearchResults;
                }
            }
        },
        page_name: {
            name: "",
            get: function () {
                if ((trackingJson.type == "reservationconfirmation" || trackingJson.type == "viewreservation") &&
                    ((trackingJson.controllerName && trackingJson.controllerName == "change-confirmation") ||
                        document.location.pathname.indexOf("pay/change-confirmation") > -1))
                    return "CHANGECONFIRMATION";
                /* [KW] 6/30/2017: Updating logic to set the name based on the trackingJson.type value */
                /* [SR] 9/17/2018: Adding Hotel Bill page logic*/

                if (trackingJson.type.toLowerCase() === 'hotelsearch') {
                    return "SEARCH RESULTS";
                }

                if (trackingJson.type.toLowerCase() === 'selectroom' && location.pathname.indexOf("/rooms") > 0) {
                    return "RESERVATION : ROOM SELECT";
                }
                if (trackingJson.type.toLowerCase() === 'selectroom' && location.pathname.indexOf("/select-room") > 0) {
                    return "RESERVATION : ROOMRATE";
                }
                if (trackingJson.type.toLowerCase() === 'roomrate') {
                    return "RESERVATION : ROOMRATE";
                }
                if (trackingJson.type.toLowerCase() === 'guestinfo') {
                    return "RESERVATION : GUESTINFO";
                }
                if (trackingJson.type.toLowerCase() === 'reservationconfirmation') {
                    return "RESERVATION : RESERVATIONCONFIRMATION";
                }
                if (trackingJson.type.toLowerCase() === 'hotelBill') {
                    return "CONTACTHOTELBILL";
                }

                return ("" + trackingJson.type).toUpperCase() || "";

                /*
                switch (trackingJson.type) {
                    case "hotelsearch":
                        return "SEARCH RESULTS";
                    case "selectroom":
                        return "RESERVATION : ROOM SELECT";
                    case "roomrate":
                        return "RESERVATION : ROOMRATE";
                    case "guestinfo":
                        return "RESERVATION : GUESTINFO";
                    case "reservationconfirmation":
                        return "RESERVATION : RESERVATIONCONFIRMATION";
                    case "hotelBill":
                        return "CONTACTHOTELBILL";
                    default:
                        return ("" + trackingJson.type).toUpperCase() || "";
                }
                */
            }
        },
        payment_page_errors: {
            name: "",
            get: function () {
                //FLAG: is there a Payment page? Not Guest Info and Payment
                //match ARMY and ENDEAVOR
                if (((location.hostname.match(/(holidayinn|hiexpress|staybridge|crowneplaza|hotelindigo|candlewoodsuites|holidayinnresorts|holidayinnclubvacations|priorityclub|intercontinental|ihg|ichotelsgroup).com$/)) && (~location.search.toLowerCase().indexOf('paymentinfo') && !(location.pathname.match(/wireless/)))) || (location.hostname.match(/ihgarmyhotels\.com$/) && location.pathname.match(/paymentinfo$/))) {
                    if (typeof errObjectArray === 'object' && errObjectArray.length > 1) {
                        var newAry = errObjectArray.slice(1);
                        return newAry.sort().join('|');
                    }
                }
            }
        },
        pm_lookback_window: {
            name: "",
            get: function () {
                if (location.pathname.match(/reservationconfirmation$/)) {
                    try {
                        if (typeof window.trackingJson === 'object' && window.trackingJson.beFreeCookieCreationDate) {
                            return trackingJson.beFreeCookieCreationDate;
                        }
                    } catch (e) { }
                }
            }
        },
        price_filter: {
            name: "",
            get: function () {
                //match ARMY and ENDEAVOR search results
                if (
                    (
                        (location.hostname.match(/(holidayinn|hiexpress|staybridge|crowneplaza|hotelindigo|candlewoodsuites|holidayinnresorts|holidayinnclubvacations|priorityclub|intercontinental|ihg|ichotelsgroup).com$/)) && (~location.pathname.toLowerCase().indexOf('searchresult') && !(location.pathname.match(/wireless/)))) || (location.hostname.match(/ihgarmyhotels\.com$/) && location.pathname.match(/searchresult$/))) {
                    if (window.sliderHigherValue && window.sliderMaxRange && window.sliderLowerValue && window.sliderMinRange) {
                        if (window.sliderHigherValue == window.sliderMaxRange && window.sliderLowerValue == window.sliderMinRange) {
                            return "NO PREFERENCE";
                        } else if (window.sliderHigherValue > window.sliderMaxRange || window.sliderLowerValue < window.sliderMinRange) {
                            return "$" + window.sliderMinRange + " - $" + window.sliderMaxRange;
                        }
                    }
                    if (Bootstrapper.getQueryParam('qGRM')) {
                        return Bootstrapper.getQueryParam('qGRM');
                    }
                }
            }
        },
        product_string: {
            name: "",
            get: function () {
                /* This is temporarily set by events */
                if (Bootstrapper._event_data.hotel_code) return Bootstrapper._event_data.hotel_code;

                /* Check booking confirmation page */
                if (trackingJson.type == "reservationconfirmation") {
                    var hotelInfo = ';' + $data('gdl', 'property_code') + ';' + $data('gdl', 'number_of_room_nights') + ';' + $data('gdl', 'booking_total_minus_tax'),
                        tax = $data('gdl', 'tax'),
                        pcr_points = $data('gdl', 'points_used'),
                        events = [];
                    /* [KJ 07/28/2017] removing at Dan's request
                        if (tax) {
                        events.push('event14=' + tax); 
                    } */
                    if (pcr_points && pcr_points != '0') {
                        events.push('event22=' + pcr_points);
                    }
                    /* Capture number of rooms */
                    events.push('event53=' + $data('gdl', 'number_of_rooms'));
                    /* Capture business rewards bookings */
                    if ($data('gdl', 'business_rewards_number_of_rooms')) {
                        events.push('event136=' + $data('gdl', 'business_rewards_number_of_rooms'));
                        events.push('event137');
                    } else if (typeof trackingJson.roomRevenueForeign !== "undefined" && trackingJson.roomRevenueForeign) {
                        /* Capture foreign revenue when it is not business rewards booking */
                        events.push('event135=' + trackingJson.roomRevenueForeign);
                    }
                    return hotelInfo + ';' + events.join('|');
                }
                /* Check for search results page */
                if (typeof (trackingJson.hotelRank) != 'undefined' && trackingJson.hotelRank != '' && (Bootstrapper.getQueryParam('page') == '' || Bootstrapper.getQueryParam('page') == 'show10')) {
                    var hotels = trackingJson.hotelRank.split('|'),
                        hnames = '';
                    for (var i = 0, y = hotels.length; i < y; i++) {
                        var hotelName = hotels[i].replace(/[0-9]*_/, '').replace('_', '');
                        if (hotelName != '') {
                            hnames += ';' + hotelName.toUpperCase() + ',';
                        }
                    }
                    var _productString = hnames.match(/,$/) ? hnames.substring(0, hnames.lastIndexOf(',')) : hnames;
                    if (_productString && $data('gdl', 'search_booking_window')) {
                        _productString += ';;;event8=' + $data('gdl', 'search_booking_window');
                    }
                    return _productString;
                }
                /* Upsell page */
                if (window.trackingJson.type.toLowerCase() == 'upsellpage') {
                    var _productString = $data('gdl', 'property_code') ? ';' + $data('gdl', 'property_code') : '';
                    if ($data('gdl', 'initiated_revenue') && $data('gdl', 'nights_initiated')) {
                        _productString += ';;;event117=' + $data('gdl', 'initiated_revenue') + '|event9=' + $data('gdl', 'nights_initiated');
                    } else if ($data('gdl', 'initiated_revenue')) {
                        _productString += ';;;event117=' + $data('gdl', 'initiated_revenue');
                    }
                    return _productString;
                }
                /* Guest info */
                if (window.trackingJson.type.toLowerCase() == 'guestinfo' || window.trackingJson.type.toLowerCase() == 'guestandpaymentinfo') {
                    var _productString = $data('gdl', 'property_code') ? ';' + $data('gdl', 'property_code') : ''
                    if ($data('gdl', 'initiated_revenue') && $data('gdl', 'nights_initiated') && $data('gdl', 'initiated_points')) {
                        _productString += ';;;event10=' + $data('gdl', 'initiated_revenue') + '|event9=' + $data('gdl', 'nights_initiated') + '|event29=' + $data('gdl', 'initiated_points');
                    } else if ($data('gdl', 'initiated_revenue') && $data('gdl', 'nights_initiated')) {
                        _productString += ';;;event10=' + $data('gdl', 'initiated_revenue') + '|event9=' + $data('gdl', 'nights_initiated');
                    } else if ($data('gdl', 'initiated_revenue') && $data('gdl', 'nights_initiated')) {
                        _productString += ';;;event10=' + $data('gdl', 'initiated_revenue');
                    } else if ($data('gdl', 'nights_initiated')) {
                        _productString += ';;;event9=' + $data('gdl', 'nights_initiated');
                    }
                    return _productString;
                }
                /* All other pages */
                var hotel = $data('gdl', 'property_code');

                /* Room List & Rate List Logic */
                if (trackingJson.rateList || trackingJson.roomList) {
                    var rate_list, room_list;
                    try {
                        if (trackingJson.rateList) {
                            rate_list = eval(trackingJson.rateList);
                        }
                        if (trackingJson.roomList) {
                            room_list = eval(trackingJson.roomList);
                            /*if CRR page assign room_list as rate_list */
                            if (location.pathname.indexOf("/find-hotels/select-room") > 0) {
                                console.log("select-room switch roomList to rate_list");
                                rate_list = eval(trackingJson.roomList);
                            }

                        }
                    } catch (e) { }
                    if (typeof (Array.isArray) === 'function' && (Array.isArray(rate_list) || Array.isArray(room_list))) {
                        var v127_mappings = {
                            "currency_code": "cc=",
                            "hotel_code": "htl=",
                            "price_nightly": "pr=",
                            "rate_type": "rate=",
                            "room_type": "type=",  /* from trackingJson on rooms page */
                            "room_code": "room="   /* from trackingJson on rates page */
                        },
                            v128_mappings = {
                                "rate_tab": "|evar128=",
                                "room_tab": "|evar128="
                            },
                            ary = [];
                        /* Gather all possible rate list variants */
                        var list = room_list || rate_list;

                        if (location.pathname.indexOf("/find-hotels/select-room") > 0) {

                            for (var k in list) {

                                for (var i in list[k].rate_list) {
                                    var temp_ary = [],
                                        v128 = "";
                                    for (var l in v127_mappings) {
                                        if (list[k].rate_list[i][l]) {
                                            if (v127_mappings[l] && v127_mappings[l] === 'pr=') {
                                                temp_ary.push(v127_mappings[l] + Math.round(list[k].rate_list[i][l]));
                                            } else {
                                                temp_ary.push(v127_mappings[l] + list[k].rate_list[i][l]);
                                            }


                                            //console.log("v127_mappings k : " + k + ", i: " + i + ", l:" + l + " temp_ary : " + temp_ary);
                                        }
                                    }
                                    for (var l in v128_mappings) {
                                        if (list[k].rate_list[i][l]) {
                                            v128 = v128_mappings[l] + list[k].rate_list[i][l];
                                        }


                                        if (temp_ary.length) {

                                            var v127Val = temp_ary.sort().join(':');

                                            if (ary.join(' ').indexOf(v127Val) === -1) {
                                                ary.push(v127Val + v128);
                                            }

                                        }
                                        // console.log("v128_mappings i: " + i + ", l:" + l + " ary : " + ary);
                                    }





                                }



                            }



                        } else {


                            for (var i in list) {
                                var temp_ary = [],
                                    v128 = "";

                                for (var l in v127_mappings) {
                                    if (list[i][l]) {
                                        temp_ary.push(v127_mappings[l] + list[i][l]);
                                        // console.log("v127_mappings i: " + i + ", l:" + l + " temp_ary : " + temp_ary);
                                    }
                                }
                                for (var l in v128_mappings) {
                                    if (list[i][l]) {
                                        v128 = v128_mappings[l] + list[i][l];
                                    }

                                    if (temp_ary.length) {
                                        ary.push(temp_ary.sort().join(':') + v128);
                                    }
                                    // console.log("v128_mappings i: " + i + ", l:" + l + " ary : " + ary);
                                }

                            }
                        }

                        var final_ary = [];

                        if (room_list && ary.length) {
                            var hotel_code = $data('gdl', 'property_code').toUpperCase();
                            for (var i in ary) {
                                final_ary.push("impressions;" + hotel_code + " - impressions;;;" + (~ary[i].indexOf("pr=") ? "event166=" + ary[i].split('pr=')[1].split(':')[0].split('|')[0] : "") + ";evar127=" + ary[i] + "|" + "evar126=" + hotel_code);
                            }
                        }
                        if (rate_list && ary.length) {
                            var hotel_code = $data('gdl', 'property_code').toUpperCase();
                            for (var i in ary) {
                                final_ary.push("impressions;" + hotel_code + " - impressions;;;" + (~ary[i].indexOf("pr=") ? "event165=" + ary[i].split('pr=')[1].split(':')[0].split('|')[0] : "") + ";evar127=" + ary[i] + "|" + "evar126=" + hotel_code);
                            }
                        }

                        var final_string = final_ary.length ? final_ary.join(',') : '';

                        return hotel ? ';' + hotel + ',' + final_string : final_string;
                    }
                }
                return hotel ? ';' + hotel : '';
            }
        },
        property_code: {
            name: "",
            get: function () {
                if (trackingJson.propertyCode) {
                    return trackingJson.propertyCode ? trackingJson.propertyCode.toUpperCase() : '';
                } else if (location.pathname.match(/^\/hotels\/.*\/enhanceyourstay\/?$/) && Bootstrapper.getQueryParam('qSlH')) {
                    return Bootstrapper.getQueryParam('qSlH');
                }
                /* Hotel details
                var loc = window.location.pathname.match(/\/hotels\/[a-z]{2}\/[a-z]{2}\/[^\/]+\/([^\/]+)\//i);
                if (loc && loc.length > 0 && location.pathname.match(/\/hoteldetail\/?$/)) {
                    return loc[1].toUpperCase();
                }
                */
            }
        },
        rate_search_preference: {
            name: "",
            get: function () {
                return trackingJson.rateCodes || Bootstrapper.getQueryParam('qRtP');
                /* [KW] 06/15/2017: Using a map to translate values */
                var map = {
                    "6CBARC": "BEST RATE AVAILABLE",
                    "IDENI": "ENTERTAINMENT CARD",
                    "IDAAA": "AAA/CAA RATE",
                    "IMCGV": "GOVERNMENT CANADA",
                    "IMGOV": "GOVERNMENT RATE",
                    "IVANI": "REWARDS NIGHT",
                    "IDARP": "SENIOR DISCOUNT",
                    "IMSTI": "STATE GOVERNMENT - US"
                };
                /* [KW] 06/15/2017: Defaulting to returning trackingJson or query parameter */
                return map[Bootstrapper.getQueryParam('qRtP')] || map[trackingJson.rateCodes] || 'NO PREFERENCE';
            }
        },
        rate_type: {
            name: "",
            get: function () {
                return trackingJson.rateCode;
            }
        },
        recommendations: {
            name: "",
            get: function () {
                //ENDEAVOR Global
                if (
                    (location.hostname.match(/(holidayinn|hiexpress|staybridge|crowneplaza|hotelindigo|candlewoodsuites|holidayinnresorts|holidayinnclubvacations|priorityclub|intercontinental|ihg|ichotelsgroup).com$/)) && !(location.pathname.match(/wireless/))) {
                    if (typeof (mmcore) === 'object' && mmcore.GenInfo) {
                        var campaigns = [],
                            campaign, variants = [],
                            variant;
                        for (campaign in mmcore.GenInfo) {
                            for (variant in mmcore.GenInfo[campaign]) {
                                variants.push(variant + '=' + mmcore.GenInfo[campaign][variant]);
                            }
                            campaigns.push(campaign + ":" + variants.join('&'));
                            variants = [];
                        }
                        return campaigns.join('|');
                    }
                }
                return "";
            }
        },
        redeem_product_id: {
            name: "",
            get: function () {
                //PCR Redeem Points Confirmation
                if (location.hostname.match(/www\.ihg\.com/) && location.pathname.match(/^\/priorityclub\/rewards\/.*\/redeem/) && location.pathname.match(/confirm$/i)) {
                    if (typeof jQuery === 'function') {
                        var productId = jQuery('td.rsPointsAndCash').children().attr("id");
                        if (productId) {
                            _d.redeemProductID = productId.replace("points", "").toUpperCase();
                        }
                    }
                }
                return "";
            }
        },
        room_code: {
            name: "",
            get: function () {
                return trackingJson.roomCode ? trackingJson.roomCode.slice(0, 4) : trackingJson.roomCode;
            }
        },
        room_rate_list: {
            name: "",
            get: function () {
                // ENDEAVOR - New Booking Flow
                if (!(~location.pathname.toLowerCase().indexOf('/wireless'))) {
                    if (trackingJson.type && trackingJson.type == 'roomrate') {
                        roomArray = trackingJson.roomImpressionList.replace(/(^\||\|$)+/, '').split('|');
                        for (var i = 0, l = roomArray.length; i < l; i++) {
                            roomArray[i] = roomArray[i].substring(4);
                        }
                        return roomArray.length > 0 ? Bootstrapper.removeDuplicateElement(roomArray).join('|') : null;
                    }
                }
            }
        },
        room_search_preference: {
            name: "",
            get: function () {
                //match ARMY and ENDEAVOR search results
                if (
                    (
                        (location.hostname.match(/(holidayinn|hiexpress|staybridge|crowneplaza|hotelindigo|candlewoodsuites|holidayinnresorts|holidayinnclubvacations|priorityclub|intercontinental|ihg|ichotelsgroup).com$/)) && (~location.pathname.toLowerCase().indexOf('searchresult') && !(location.pathname.match(/wireless/)))) || (location.hostname.match(/ihgarmyhotels\.com$/) && location.pathname.match(/searchresult$/))) {
                    var roomSearchPref = "";
                    if (Bootstrapper.getQueryParam('qRtP') != '') {
                        roomSearchPref = Bootstrapper.getQueryParam('qRtP');
                        var temprPref = Bootstrapper.getQueryParam('qRtP');
                        switch (temprPref) {
                            case '3_3':
                                roomSearchPref = 'No Preference';
                                break;
                            case 'OSN_1BD':
                                roomSearchPref = '1 BED';
                                break;
                            case 'TEX_2BD':
                                roomSearchPref = '2 BEDS EXECUTIVE';
                                break;
                            case 'TWC_2BD':
                                roomSearchPref = '2 BEDS WHEELCHAIR ACCESSABLE';
                                break;
                            case 'TDB_2BD':
                                roomSearchPref = '2 DOUBLE BEDS';
                                break;
                            case 'KNG_1BD':
                                roomSearchPref = 'KING BED';
                                break;
                            case 'KEX_1BD':
                                roomSearchPref = 'KING BED EXECUTIVE';
                                break;
                            case 'KWC_1BD':
                                roomSearchPref = 'KING BED WHEELCHAIR ACCESSABLE';
                                break;
                            case 'SUI_SUI':
                                roomSearchPref = 'SUITE';
                                break;
                            case 'XWC_SUI':
                                roomSearchPref = 'SUITE WHEELCHAIR ACCESSABLE';
                                break;
                            default:
                                roomSearchPref = temprPref.toUpperCase();
                        }
                    } else {
                        roomSearchPref = "NO PREFERENCE";
                    }
                    return roomSearchPref
                }
            }
        },
        search_amenities: {
            name: "",
            get: function () {
                /* [KW] 6/15/2017: Updating logic to just pull from the URL */
                return trackingJson.type === 'hotelsearch' ? Bootstrapper.getQueryParam('qAms') || "NO PREFERENCE" : "";
            }
        },
        search_booking_window: {
            name: "",
            get: function () {
                //match ARMY and ENDEAVOR search results
                if (
                    /*(
                        (location.hostname.match(/(holidayinn|hiexpress|staybridge|crowneplaza|hotelindigo|candlewoodsuites|holidayinnresorts|holidayinnclubvacations|priorityclub|intercontinental|ihg|ichotelsgroup).com$/)) && ((~location.pathname.toLowerCase().indexOf('searchresult') || window.trackingJson.type.toLowerCase() == 'roomrate') && !(location.pathname.match(/wireless/)))) || (location.hostname.match(/ihgarmyhotels\.com$/) && location.pathname.match(/searchresult$/))
                        */
                    window.trackingJson && /^(hotelsearch|selectroom|roomrate)$/i.test(trackingJson.type)
                ) {
                    if (typeof (trackingJson) === "object") {
                        /*Search Booking Window*/
                        if (trackingJson.checkInDate) {
                            /*subtract = (trackingJson.timeOfDayAttribute && trackingJson.timeOfDayAttribute < 12) ? 1 : 0;
                            searchBookingWindow = (trackingJson.leadTime - subtract).toString();
                            searchBookingWindow = (searchBookingWindow == '-1') ? '0' : searchBookingWindow;*/
                            var startDate = trackingJson.checkInDate;
                            return (Bootstrapper.getDaysDif(new Date(startDate))).toString();
                        }
                    }
                    /*else {
                                           // Search Booking Window
                                           if (check_in_date.get && check_in_date.get != "") {
                                               searchBookingWindow = Bootstrapper.getDaysDif(new Date(data.checkInDate)).toString();
                                               searchBookingWindow = (searchBookingWindow == '-1') ? '0' : searchBookingWindow;
                                           }
                                       }*/
                    return searchBookingWindow;
                }
                return "";
            }
        },
        search_brands: {
            name: "",
            get: function () {
                //match ARMY and ENDEAVOR search results
                if (
                    (
                        (location.hostname.match(/(holidayinn|hiexpress|staybridge|crowneplaza|hotelindigo|candlewoodsuites|holidayinnresorts|holidayinnclubvacations|priorityclub|intercontinental|ihg|ichotelsgroup).com$/)) && (~location.pathname.toLowerCase().indexOf('searchresult') && !(location.pathname.match(/wireless/)))) || (location.hostname.match(/ihgarmyhotels\.com$/) && location.pathname.match(/searchresult$/))) {
                    if (Bootstrapper.getQueryParam('brands') != '') {
                        var tempbPref = Bootstrapper.getQueryParam('brands');
                        if (tempbPref.match(/6C$/i)) {
                            return "ALL IHG BRANDS";
                        } else {
                            tempbPref = tempbPref.toLowerCase().split(',').sort();
                            for (var i = 0, l = tempbPref.length; i < l; i++) {
                                switch (tempbPref[i]) {
                                    case 'cp':
                                        tempbPref[i] = 'CP';
                                        break;
                                    case 'cv':
                                        tempbPref[i] = 'HICV';
                                        break;
                                    case 'cw':
                                        tempbPref[i] = 'CS';
                                        break;
                                    case 'ex':
                                        tempbPref[i] = 'HIEX';
                                        break;
                                    case 'hi':
                                        tempbPref[i] = 'HI';
                                        break;
                                    case 'ic':
                                        tempbPref[i] = 'IC';
                                        break;
                                    case 'in':
                                        tempbPref[i] = 'Indigo';
                                        break;
                                    case 'rs':
                                        tempbPref[i] = 'HIR';
                                        break;
                                    case 'sb':
                                        tempbPref[i] = 'SS';
                                        break;
                                    case 'sl':
                                        tempbPref[i] = '';
                                        break;
                                    case 'ss':
                                        tempbPref[i] = '';
                                        break;
                                    default:
                                        tempbPref[i] = tempbPref[i]
                                }
                                if (tempbPref[i] === '') {
                                    tempbPref.splice(i, 1);
                                    i--;
                                    l--;
                                }
                            }
                            return tempbPref.sort().join('|');
                        }
                    } else {
                        return "NO PREFERENCE";
                    }
                }
                return "";
            }
        },
        search_radius: {
            name: "",
            get: function () {
                //match ARMY and ENDEAVOR search results
                if (
                    (
                        (location.hostname.match(/(holidayinn|hiexpress|staybridge|crowneplaza|hotelindigo|candlewoodsuites|holidayinnresorts|holidayinnclubvacations|priorityclub|intercontinental|ihg|ichotelsgroup).com$/)) && (~location.pathname.toLowerCase().indexOf('searchresult') && !(location.pathname.match(/wireless/)))) || (location.hostname.match(/ihgarmyhotels\.com$/) && location.pathname.match(/searchresult$/))) {
                    var searchRadius = "";
                    if (Bootstrapper.getQueryParam('radius') || Bootstrapper.getQueryParam('qRad')) {
                        searchRadius = Bootstrapper.getQueryParam('radius') || Bootstrapper.getQueryParam('qRad');
                        if (Bootstrapper.getQueryParam('inMiles') == 'true' || Bootstrapper.getQueryParam('qRdU') == '1') {
                            searchRadius += " MI";
                        } else if (Bootstrapper.getQueryParam('inMiles') == 'false' || Bootstrapper.getQueryParam('qRdU') == '0') {
                            searchRadius += " KM";
                        }
                    } else {
                        searchRadius = "NO PREFERENCE";
                    }
                    return searchRadius;
                }
                return "";
            }
        },
        search_term: {
            name: "",
            get: function () {
                /* [KW] 06/15/2017: Adding logic to pull from trackingJson */
                return trackingJson.destination ? trackingJson.destination.replace(/, /g, ",") : "";

                //match ARMY and ENDEAVOR search results
                if (
                    (
                        (location.hostname.match(/(holidayinn|hiexpress|staybridge|crowneplaza|hotelindigo|candlewoodsuites|holidayinnresorts|holidayinnclubvacations|priorityclub|intercontinental|ihg|ichotelsgroup).com$/)) && (~location.pathname.toLowerCase().indexOf('searchresult') && !(location.pathname.match(/wireless/)))) || (location.hostname.match(/ihgarmyhotels\.com$/) && location.pathname.match(/searchresult$/))) {
                    if (Bootstrapper.getQueryParam('destination') != '') {
                        return Bootstrapper.getQueryParam('destination').toUpperCase().replace(/, /g, ",");
                    } else if (typeof (trackingJson) === 'object' && trackingJson.searchString && trackingJson.searchString.match(/\]null$/i) === null) {
                        var loc = trackingJson.searchString.lastIndexOf(']');
                        return (loc) ? trackingJson.searchString.toUpperCase().substring(loc + 1).replace(/, /g, ",") : trackingJson.searchString.toUpperCase().replace(/, /g, ",");
                    } else if (sTerm) {
                        var index = sTerm.options[sTerm.selectedIndex];
                        if (index && typeof jQuery === 'function') {
                            return jQuery(index).text();
                        }
                    }
                }
                //Global
                var lpath = location.pathname.toLowerCase().replace(/\/\//g, '/'),
                    path = lpath.slice(1).replace(/\/$/, "").split('/').splice(Bootstrapper.pathStart, 9);
                if (path.length > 0) {
                    if ((path.length == '1' && (path[0] == 'reservation' || path[0] == 'home') && lpath.indexOf('/diningrewards/') == -1) || lpath == '/rewardsclub') {
                        var noSearchTerm = document.getElementById('noHotelExist');
                        if (noSearchTerm && noSearchTerm.className === "error1") {
                            var term = document.getElementById("destination");
                            return (term && term.value) ? term.value.toUpperCase().replace(/, /g, ",") : '';
                        }
                    }
                }
            }
        },
        smoking_preference: {
            name: "",
            get: function () {
                if (trackingJson.type && trackingJson.type == 'roomrate') {
                    var param = Bootstrapper.getQueryParam('qSmP');
                    if (!param) {
                        param = document.getElementById('smokePref');
                        param = param && param.value ? param.value : '';
                    } else if (!param) {
                        param = document.getElementById('smokingPreference');
                        param = param && param.value ? param.options[param.selectedIndex].value : '';
                    }
                    if (param) {
                        switch (param) {
                            case "1":
                                return "Non-Smoking Room";
                            case "2":
                                return "Smoking Room";
                            case "3":
                            default:
                                return "No Preference";
                        }
                    }
                }
                return "";
            }
        },
        sort_by: {
            name: "",
            get: function () {
                //match ARMY and ENDEAVOR search results
                if (
                    (
                        (location.hostname.match(/(holidayinn|hiexpress|staybridge|crowneplaza|hotelindigo|candlewoodsuites|holidayinnresorts|holidayinnclubvacations|priorityclub|intercontinental|ihg|ichotelsgroup).com$/)) && (~location.pathname.toLowerCase().indexOf('searchresult') && !(location.pathname.match(/wireless/)))) || (location.hostname.match(/ihgarmyhotels\.com$/) && location.pathname.match(/searchresult$/))) {
                    return (Bootstrapper.getQueryParam('qSrt') != "") ? Bootstrapper.getQueryParam('qSrt').toUpperCase() : "";
                }
                return "";
            }
        },
        sub_department: {
            name: "",
            get: function () {
                /* 404 Error tracking*/
                if (typeof jQuery === 'function' && jQuery('#wrapper.invalidPage').length > 0) {
                    return '404 PAGE';
                }
                var lpath = location.pathname.toLowerCase().replace(/\/\//g, '/'),
                    path = lpath.slice(1).replace(/\/$/, "").split('/').splice(Bootstrapper.pathStart, 9),
                    subdept = "",
                    dept = "";
                if (path.length > 0) {
                    //is NOT homepage, dining rewards, or rewards club
                    if (!(path.length == '1' && (path[0] == 'reservation' || path[0] == 'home') && lpath.indexOf('/diningrewards/') == -1) || !(lpath == '/rewardsclub')) {
                        if (~lpath.indexOf('/hoteldetail')) {
                            dept = 'RESERVATION';
                            subdept = 'HOTEL DETAILS';
                        } else if (~lpath.indexOf('searchresult/map')) {
                            dept = 'RESERVATION';
                            subdept = 'SEARCH RESULTS';
                        } else if (~lpath.indexOf('searchresult/grid')) {
                            dept = 'RESERVATION';
                            subdept = 'SEARCH RESULTS';
                        } else if (~lpath.indexOf('searchresult')) {
                            dept = 'RESERVATION';
                            subdept = 'SEARCH RESULTS';
                        } else if (~lpath.indexOf('/reviews/write-a-review')) {
                            dept = 'RESERVATION';
                            subdept = 'REVIEWS';
                        } else if (lpath.match(/\/submit-hotel-review$/i)) {
                            dept = 'RESERVATION';
                            subdept = 'REVIEWS';
                        } else if (lpath.match(/\/reviews\/submit$/i)) {
                            dept = 'RESERVATION';
                            subdept = 'REVIEWS';
                        } else if (~lpath.indexOf('/join/join')) {
                            if (document.getElementsByClassName('rewards-club-card').length > 0 || document.getElementsByClassName('business-rewards-card').length > 0) {
                                dept = 'JOIN';
                                subdept = 'JOIN : CONFIRM';
                            } else {
                                dept = 'JOIN';
                            }
                        } else if (~lpath.indexOf('/reservation/book')) {
                            if (typeof trackingJson === 'object' && trackingJson.type) {
                                if (trackingJson.type == 'roomrate') {
                                    dept = 'RESERVATION';
                                    subdept = 'ROOMRATE';
                                } else if (trackingJson.type == 'guestandpaymentinfo') {
                                    dept = 'RESERVATION';
                                    subdept = 'GUESTINFO';
                                } else if (trackingJson.type == 'cancelreservation' || trackingJson.type == 'cancelReservtion') {
                                    dept = 'RESERVATION';
                                    subdept = 'CANCELRESERVATION';
                                } else if (trackingJson.type == 'reservationconfirmationedit') {
                                    dept = 'RESERVATION';
                                    subdept = 'RESERVATIONCONFIRMATIONEDIT';
                                } else {
                                    dept = '';
                                    subdept = '';
                                }
                            }
                            if (!dept && Bootstrapper.getQueryParam && Bootstrapper.getQueryParam("method")) {
                                var method = Bootstrapper.getQueryParam("method") || '';
                                if (typeof method === "string") method = method.toLowerCase();
                                switch (method) {
                                    case "roomrate":
                                        dept = 'RESERVATION';
                                        subdept = 'ROOMRATE';
                                        break;
                                    case "guestandpaymentinfo":
                                        dept = 'RESERVATION';
                                        subdept = 'GUESTINFO';
                                        break;
                                    case "modify":
                                        dept = 'RESERVATION';
                                        subdept = 'CANCELRESERVATION';
                                        break;
                                    case "cancel":
                                        dept = 'RESERVATION';
                                        subdept = 'RESERVATIONCONFIRMATIONEDIT';
                                        break;
                                }
                            } else {
                                dept = "RESERVATION";
                                subdept = "BOOK";
                            }
                        } else if (~lpath.indexOf('/diningrewards/')) {
                            dept = 'DININGREWARDS';
                            subdept = 'DININGREWARDS' + (path[0] ? ' : ' + path[0].toUpperCase() : '');
                        } else if (~lpath.indexOf('/destinations')) {
                            dept = ''; // leaving blank per call w/ business on 11/23/15
                            subdept = ''; // leaving blank per call w/ business on 11/23/15
                        }
                    }
                }
                if (!dept && !subdept && path.length > 0) {
                    for (var i = 0; i < path.length; i++) {
                        if (path[i] == 'reservation' || path[i] == 'home') {
                            if (path.length > (i + 1)) {
                                subdept = path[i + 1];
                            }
                        } else if (path[i] == 'hd') {
                            if (path.length > (i + 1)) {
                                subdept = path[i + 1];
                            }
                        } else if (path[i] == 'global') {
                            if (path.length > i + 1) {
                                if (path[i + 1] == 'deals') {
                                    subdept = path[i + 2];
                                } else if (path[i + 1] == 'support' && path.length > i + 4) {
                                    subdept = (path[i + 3] == 'group_meetings') ? path[i + 4] : path[i + 3];
                                } else if ((path[i + 1] == 'exp' || path[i + 1] == 'offers') && path.length > i + 2) {
                                    subdept = path[i + 2];
                                } else if (path[i + 1] == 'reservations' && path.length > i + 2) {
                                    subdept = path[i + 2];
                                }
                            }
                        } else if (path.length >= 3) {
                            if (path[i + 2] == 'hoteldetail') {
                                subdept = 'HOTEL DETAIL';
                            }
                        }
                    }
                }

                if (~path.indexOf('reservationconfirmation')) {
                    subdept = 'RESERVATIONCONFIRMATION';
                }
                return subdept;
            }
        },
        time_prior: {
            name: "",
            get: function () {
                // [SR] 9/20/2018 - Time prior to event - tracks number of seconds since user landed on site using sessions cookie
                if (!(/ensTimestamp/.test(document.cookie))) {
                    var initialTS = new Date().getTime(),
                        expTime = new Date();
                    expTime.setTime(initialTS + (30 * 60 * 1000));
                    document.cookie = 'ensTimestamp=' + initialTS + '; expires=' + expTime.toGMTString() + '; path=/';
                    return '0';
                } else {
                    var cookieSplit = document.cookie.split(';');
                    for (var i = 0; i < cookieSplit.length; i++) {
                        if (/ensTimestamp/.test(cookieSplit[i])) {
                            var initialTS = parseInt(cookieSplit[i].split('=')[1]),
                                expTime = new Date(),
                                currentTS = expTime.getTime(),
                                timeDif = Math.round((currentTS - initialTS) / 1000);
                            expTime.setTime(currentTS + (30 * 60 * 1000));
                            document.cookie = 'ensTimestamp=' + initialTS + '; expires=' + expTime.toGMTString() + '; path=/';
                            return timeDif ? timeDif.toString() : '0';
                        }
                    }
                }
            }
        },
        urgent_message: {
            name: "",
            get: function () {
                // ENDEAVOR - New Booking Flow
                if (!(~location.pathname.toLowerCase().indexOf('/wireless')) && location.pathname.match(/confirm$/i)) {
                    if (trackingJson.type && trackingJson.type == 'roomrate') {
                        if (jQuery('div.urgentMsgCss').length > 0) {
                            return 'yes';
                        } else {
                            return 'no';
                        }
                    }
                }
            }
        },
        user_state: {
            name: "",
            get: function () {
                if (Bootstrapper.Cookies.check('ens_state')) {
                    return Bootstrapper.Cookies.get('ens_state');
                }
            }
        },
        user_zip: {
            name: "",
            get: function () {
                if (Bootstrapper.Cookies.check('ens_zip')) {
                    return Bootstrapper.Cookies.get('ens_zip');
                }
            }
        },
        brand: {
            name: "",
            get: function () {
                if (typeof trackingJson === 'object' && trackingJson.brand) {
                    return location.pathname.match(/^\/rewardsclub/i) ? 'rc' : trackingJson.brand.split('_')[0].toLowerCase() || '';
                } else if (typeof trackingJson === 'object' && trackingJson.siteBrand) {
                    return trackingJson.siteBrand;
                }
            }
        },
        pageIdBrand: {
            name: "",
            get: function () {
                /*typeof trackingJson === 'object' ? trackingJson.pageidbrand : '';*/
                return $data('gdl', 'brand') + '_' + ($data('gdl', 'type') || 'unknown');
            }
        },
        type: {
            name: "",
            get: function () {
                return typeof trackingJson === 'object' && typeof trackingJson.type === 'string' ? trackingJson.type.toLowerCase() : '';
            }
        },
        pageLoadTime: {
            name: "",
            get: function () {
                /* Check for existing page load time */
                if (!Bootstrapper._pageLoadTime) {
                    /* Check if DOM is parsed */
                    if (Bootstrapper.hasDOMParsed()) {
                        /* Check if window.performance exists */
                        if (typeof window.performance === 'object') {
                            var t = new Date().getTime();
                            Bootstrapper._pageLoadTime = parseFloat((((t - performance.timing.requestStart) / 100) / 10).toFixed(2));
                            return Bootstrapper._pageLoadTime;
                        }
                    }
                } else {
                    return Bootstrapper._pageLoadTime;
                }
            }
        },
        monthMatrix: {
            name: "Server Timestamp in 0 GMT Unix",
            get: function () {
                return {
                    '01': 'January',
                    '02': 'February',
                    '03': 'March',
                    '04': 'April',
                    '05': 'May',
                    '06': 'June',
                    '07': 'July',
                    '08': 'August',
                    '09': 'September',
                    '10': 'October',
                    '11': 'November',
                    '12': 'December'
                };
            }
        },
        serverTimestamp: {
            name: "Server Timestamp",
            get: function () {
                if (Bootstrapper._serverTime) {
                    /* If the server time has already been called, return the difference */
                    if (!Bootstrapper._customTimestamp) {
                        /* Set the offset based on client's time zone (ONLY use decimal point and negative symbol if needed). Server time returned by Ensighten is in 0 GMT */
                        var cTZ = -5,
                            /* flag to check for DST */
                            checkDST = false;
                        /* Check for IE8 and below */
                        if (navigator.appVersion.match(/MSIE (6|7|8)/i)) {
                            var ymd = Bootstrapper._serverTime.split(' ')[0].split('-'),
                                month = ymd[1],
                                mName = Bootstrapper.dataManager.getDataElement('gdl', 'monthMatrix'),
                                date = new Date(Date.parse((mName[month] || mName['0' + month]) + ' ' + ymd[2] + ', ' + ymd[0] + ' ' + Bootstrapper._serverTime.split(' ')[1]));
                        } else {
                            var date = new Date(Bootstrapper._serverTime + " GMT");
                        }
                        if (checkDST) {
                            /* Get the current year */
                            var yr = date.getFullYear();
                            /* 2nd Sunday in March can't occur after the 14th */
                            var dstS = new Date("March 14, " + yr + " 02:00:00");
                            /* Get the day of the week of the 14th */
                            var day = dstS.getDay();
                            /* Calculate 2nd Sunday in March of this year */
                            dstS.setDate(14 - day);
                            /* 1st Sunday in November can't occur after the 7th */
                            var dstE = new Date("November 07, " + yr + " 02:00:00");
                            /* Get the day of the week of 7th */
                            day = dstE.getDay();
                            /* Calculate first Sunday in November of this year */
                            dstE.setDate(7 - day);
                            /* Determine if today falls inside of DST period */
                            if (date >= dstS && date < dstE) {
                                cTZ = cTZ + 1;
                            }
                        }
                        /* Store the final timestamp in a global variable */
                        Bootstrapper._customTimestamp = new Date((date.getTime() + (cTZ * 3600000)));
                        /* Determine the difference in time between the server and client which will be used in calculatations later */
                        Bootstrapper._customTimestampDifference = new Date((new Date().getTime() - Bootstrapper._customTimestamp.getTime())).getTime();
                        return Bootstrapper._customTimestamp;
                    } else {
                        return new Date(new Date().getTime() - Bootstrapper._customTimestampDifference);
                    }
                }
            }
        },
        vocTest: {
            name: "",
            get: function () {
                var c = Bootstrapper.Cookies.get('vocTest');
                if (c) {
                    return c;
                } else {
                    var v = parseInt(Math.random() * 100),
                        ts = new Date();
                    ts.setDate(ts.getDate() + 21);
                    Bootstrapper.Cookies.set('vocTest', v, ts.toGMTString());
                    return v;
                }
            }
        },
        foreseeSampleRate: {
            name: "",
            get: function () {
                var brand = $data('gdl', 'brand');
                var map = {
                    '6c': 15,
                    'ex': 6,
                    'sb': 50,
                    'cw': 25,
                    'in': 50,
                    'ic': 25,
                    'cp': 20,
                    'rc': 15,
                    'hi': 6
                };
                return (map[brand]) || 0;
            }
        },
        ipadPopup: {
            name: "",
            get: function () {
                if (typeof jQuery === 'function' && jQuery('.iPadLightBoxContainer').attr('style') && ~jQuery('.iPadLightBoxContainer').attr('style').indexOf('display: block;')) {
                    return 'iPad Popup Shown';
                }
            }
        },
        points_cash: {
            name: "",
            get: function () {
                var pcArray = typeof trackingJson === 'object' && trackingJson.pointsCashSplit && trackingJson.pointsCashSplit.match(/^\d+_\$[\d\.]+$/) ? trackingJson.pointsCashSplit.split("_$") : [],
                    pcValue = '';
                if (pcArray.length > 1) {
                    pcArray[1] = Number(pcArray[1]).toFixed(0);
                    pcValue = pcArray.join("_$");
                }
                return pcValue;
            }
        },

        // Capture the user login error from the trackingJson object. Added on 4/8/2015.
        loginErrors: {
            name: "",
            get: function () {
                if (typeof trackingJson === 'object' && trackingJson.loginErrors) return trackingJson.loginErrors;
            }
        },

        // Used for events. Added on 1/5/2016
        local_exp: {
            name: "",
            get: function () {
                if (Bootstrapper._event_data.local_exp) return Bootstrapper._event_data.local_exp;
            }
        },
        hotel_detail_tab: {
            name: "",
            get: function () {
                if (Bootstrapper._event_data.hotel_detail_tab) return Bootstrapper._event_data.hotel_detail_tab;
            }
        },
        /*
        iperceptions_survey_id: {
            name: "",
            get: function() {
                if (Bootstrapper._event_data.iperceptions_survey_id) return Bootstrapper._event_data.iperceptions_survey_id;
            }
        },*/

        // For event serialization on the product string. Added 5/13/2016
        initiated_revenue: {
            name: "",
            get: function () {
                // [YY 2/7/17] added initiated revenue for upsellpage
                // [KJ 10/19/2017] Altered logic to just use trackingJson.roomRevenueUSD. This already factors the number of nights
                if (trackingJson.initiatedBookingType === 'C' || trackingJson.type == 'upsellpage') {
                    return trackingJson.roomRevenueUSD ? trackingJson.roomRevenueUSD : "";
                } else if (trackingJson.initiatedBookingType.toUpperCase() === 'PNC') {
                    return (trackingJson.initiatedCashUsed) ? parseFloat(trackingJson.initiatedCashUsed) : "";
                }
            }
        },
        initiated_points: {
            name: "",
            get: function () {
                if (trackingJson.initiatedBookingType === 'P') {
                    return (trackingJson.initiatedTotalPointsRequired) ? trackingJson.initiatedTotalPointsRequired : "";
                } else if (trackingJson.initiatedBookingType.toUpperCase() === 'PNC') {
                    return (trackingJson.initiatedPointsUsed) ? trackingJson.initiatedPointsUsed : "";
                }
            }
        },
        monthMatrix: {
            name: "",
            get: function () {
                return {
                    '01': 'January',
                    '02': 'February',
                    '03': 'March',
                    '04': 'April',
                    '05': 'May',
                    '06': 'June',
                    '07': 'July',
                    '08': 'August',
                    '09': 'September',
                    '10': 'October',
                    '11': 'November',
                    '12': 'December'
                };
            }
        },
        server_time_stamp: {
            name: "",
            get: function () {
                if (Bootstrapper._serverTime) {
                    /* If the server time has already been called, return the difference */
                    if (!Bootstrapper._customTimestamp) {
                        /* Set the offset based on client's time zone (ONLY use decimal point and negative symbol if needed). Server time returned by Ensighten is in 0 GMT */
                        var cTZ = -5,
                            /* flag to check for DST */
                            checkDST = true;
                        /* Check for IE8 and below */
                        /*if (navigator.appVersion.match(/MSIE (6|7|8)/i)) {*/
                        var ymd = Bootstrapper._serverTime.split(' ')[0].split('-'),
                            month = ymd[1],
                            mName = Bootstrapper.dataManager.getDataElement('gdl', 'monthMatrix'),
                            date = new Date(Date.parse((mName[month] || mName['0' + month]) + ' ' + ymd[2] + ', ' + ymd[0] + ' ' + Bootstrapper._serverTime.split(' ')[1] + ' GMT'));
                        /*} else {
                                     var date = new Date(Bootstrapper._serverTime + " GMT");
                                     }*/
                        if (checkDST) {
                            /* Get the current year */
                            var yr = date.getFullYear();
                            /* 2nd Sunday in March can't occur after the 14th */
                            var dstS = new Date("March 14, " + yr + " 02:00:00");
                            /* Get the day of the week of the 14th */
                            var day = dstS.getDay();
                            /* Calculate 2nd Sunday in March of this year */
                            dstS.setDate(14 - day);
                            /* 1st Sunday in November can't occur after the 7th */
                            var dstE = new Date("November 07, " + yr + " 02:00:00");
                            /* Get the day of the week of 7th */
                            day = dstE.getDay();
                            /* Calculate first Sunday in November of this year */
                            dstE.setDate(7 - day);
                            /* Determine if today falls inside of DST period */
                            if (date >= dstS && date < dstE) {
                                cTZ = cTZ + 1;
                            }
                        }
                        /* Store the final timestamp in a global variable */
                        Bootstrapper._customTimestamp = new Date((date.getTime() + (cTZ * 3600000)));
                        /* Determine the difference in time between the server and client which will be used in calculatations later */
                        Bootstrapper._customTimestampDifference = new Date((new Date().getTime() - Bootstrapper._customTimestamp.getTime())).getTime();
                        return Bootstrapper._customTimestamp;
                    } else {
                        return new Date(new Date().getTime() - Bootstrapper._customTimestampDifference);
                    }
                }
            }
        },
        is_business_rewards_booking: {
            name: "",
            get: function () {
                if (typeof (trackingJson) === 'object' && typeof trackingJson.isBusinessRewardsBooking !== 'undefined') {
                    return trackingJson.isBusinessRewardsBooking + '';
                }
            }
        },
        one_click_enrl: {
            name: "",
            get: function () {
                if (typeof (trackingJsonMB) === 'object' && typeof trackingJsonMB.oneClickEnrl !== 'undefined') {
                    return trackingJsonMB.oneClickEnrl + '';
                }
            }
        },
        viewport: {
            name: "",
            get: function () {
                if (trackingJson.viewport && typeof trackingJson.viewport == "string") {
                    return trackingJson.viewport;
                } else if (trackingJson.viewport && typeof trackingJson.viewport == "object") {
                    if (trackingJson.viewport.description) {
                        return trackingJson.viewport.description;
                    }
                } else
                    return '';

            }
        },
        orientation: {
            name: "",
            get: function () {
                return trackingJson.orientation || '';
            }
        },
        optssf: {
            name: "",
            get: function () {

                var doNotSellCookie = Bootstrapper.Cookies.get("CCPA-DNS-FLG");
                try {
                    if (null != doNotSellCookie && doNotSellCookie === "true") {
                        return "1";
                    }
                } catch (err) {
                    //ignore error
                }

                var isDemDexOptIn = true;
                try {
                    if (null != window.consentDetails && typeof window.consentDetails === "object") {
                        isDemDexOptIn = window.consentDetails.isDomainOptIn("demdex.net", 3);
                    }
                } catch (err) {
                    //ignore error
                }

                if (!isDemDexOptIn) {
                    return "1";
                }



                return "0";
            }
        },
        optdmp: {
            name: "",
            get: function () {

                var doNotSellCookie = Bootstrapper.Cookies.get("CCPA-DNS-FLG");
                try {
                    if (null != doNotSellCookie && doNotSellCookie === "true") {
                        return "N";
                    }
                } catch (err) {
                    //ignore error
                }


                var isDemDexOptIn = true;
                try {
                    if (null != window.consentDetails && typeof window.consentDetails === "object") {
                        isDemDexOptIn = window.consentDetails.isDomainOptIn("demdex.net", 3);
                    }
                } catch (err) {
                    //ignore error
                }

                if (!isDemDexOptIn) {
                    return "N";
                }


                return "Y";
            }
        },
        optsell: {
            name: "",
            get: function () {

                var doNotSellCookie = Bootstrapper.Cookies.get("CCPA-DNS-FLG");
                try {
                    if (null != doNotSellCookie && doNotSellCookie === "true") {
                        return "N";
                    }
                } catch (err) {
                    //ignore error
                }

                var isDemDexOptIn = true;
                try {
                    if (null != window.consentDetails && typeof window.consentDetails === "object") {
                        isDemDexOptIn = window.consentDetails.isDomainOptIn("demdex.net", 3);
                    }
                } catch (err) {
                    //ignore error
                }

                if (!isDemDexOptIn) {
                    return "N";
                }




                return "Y";
            }
        },
        original_sell_date: {
            name: "",
            get: function () {
                if (trackingJson.originalSellDate) {
                    if (typeof trackingJson.originalSellDate == "string" && ~trackingJson.originalSellDate.indexOf('-')) {
                        var a;
                        return a = trackingJson.originalSellDate.split('-'), a[1] + '/' + a[2] + '/' + a[0];
                    } else return trackingJson.originalSellDate + ""; // make sure a string is returned
                } else {
                    return "";
                }
            }
        },
        reservation_modifications: {
            name: "",
            get: function () {
                if (trackingJson && location.pathname.match(/\/change-confirmation$/i) && $data('gdl', 'session_storage_enabled')) {
                    var stay_management_obj = JSON.parse(sessionStorage.getItem('change_reservation_dl'));
                    /* This object contains a list of trackingJson variables to look for in both the current and legacy data layer and the string prefix to use to indicate the parameter to be used to classify the changes in Adobe */
                    var straight_mappings = {
                        "rateCode": "rate_code=",
                        "roomCode": "room_code=",
                        "childCount": "kids=",
                        "adultCount": "adults=",
                        "roomCount": "num_rooms=",
                        "stayLength": "num_nights=",
                        "initiatedBookingType": "booking_type="
                    },
                        changes = [];
                    for (var i in straight_mappings) {
                        if ((stay_management_obj[i] && trackingJson[i]) && (stay_management_obj[i] != trackingJson[i])) {
                            changes.push(straight_mappings[i] + stay_management_obj[i] + ">" + trackingJson[i]);
                        }
                    }
                    /* Custom change detection that requires custom math/formatting */

                    /* Revenue Change */
                    var rev_change = $data('gdl', 'reservation_modification_revenue', 1);
                    if (rev_change) {
                        changes.push('rev_diff=' + rev_change);
                    }
                    /* Lead Time between  */
                    var today = $data('gdl', 'server_time_stamp');
                    today = new Date(today.getFullYear(), today.getMonth(), today.getUTCDate());
                    if (trackingJson.checkInDate) {
                        var check_in = new Date(trackingJson.checkInDate.split('/')[2], trackingJson.checkInDate.split('/')[0] - 1, trackingJson.checkInDate.split('/')[1]);
                        var days_diff = ((check_in.getTime() - today.getTime()) / 1000) / 86400;
                        if (!isNaN(days_diff)) {
                            changes.push('lead=' + days_diff);
                        }
                    }
                    /* Dates */
                    /* Adding fix to how check in and out dates are saved to ensure they match */
                    stay_management_obj.checkInDate = stay_management_obj.checkInDate && stay_management_obj.checkInDate.split('/')[0].length < 2 ? "0" + stay_management_obj.checkInDate : stay_management_obj.checkInDate;
                    stay_management_obj.checkOutDate = stay_management_obj.checkOutDate && stay_management_obj.checkOutDate.split('/')[0].length < 2 ? "0" + stay_management_obj.checkOutDate : stay_management_obj.checkOutDate;
                    if ((trackingJson.checkInDate && trackingJson.checkOutDate && stay_management_obj.checkInDate && stay_management_obj.checkOutDate) && (trackingJson.checkInDate != stay_management_obj.checkInDate || trackingJson.checkOutDate != stay_management_obj.checkOutDate)) {
                        changes.push('dates=yes');
                    }
                    /* Return the array of changes using a pipe to delimit values */
                    if (changes.length > 0) {
                        return changes.sort().join('|');
                    }
                }
                return "";
            }
        },
        reservation_cancellation: {
            name: "",
            get: function () {
                if (trackingJson && location.pathname.match(/\/cancellation-confirmation/i) && $data('gdl', 'session_storage_enabled')) {
                    var stay_management_obj = JSON.parse(sessionStorage.getItem('cancel_reservation_dl'));
                    /* This object contains a list of trackingJson variables to look for in both the current and legacy data layer and the string prefix to use to indicate the parameter to be used to classify the changes in Adobe */
                    var straight_mappings = {
                        "rateCode": "rate_code=",
                        "roomCode": "room_code=",
                        "childCount": "kids=",
                        "adultCount": "adults=",
                        "roomCount": "num_rooms=",
                        "stayLength": "num_nights=",
                        "initiatedBookingType": "booking_type="
                    },
                        changes = [];
                    for (var i in straight_mappings) {
                        if (stay_management_obj[i]) {
                            changes.push(straight_mappings[i] + stay_management_obj[i]);
                        }
                    }
                    /* Custom change detection that requires custom math/formatting */

                    /* Revenue Change */
                    var rev_change = $data('gdl', 'reservation_cancellation_revenue', 1);
                    if (rev_change) {
                        changes.push('revenue=' + rev_change);
                    }
                    /* Lead Time between  */
                    var today = $data('gdl', 'server_time_stamp');
                    today = new Date(today.getFullYear(), today.getMonth(), today.getUTCDate());
                    if (trackingJson.checkInDate) {
                        var check_in = new Date(trackingJson.checkInDate.split('/')[2], trackingJson.checkInDate.split('/')[0] - 1, trackingJson.checkInDate.split('/')[1]);
                        var days_diff = ((check_in.getTime() - today.getTime()) / 1000) / 86400;
                        if (!isNaN(days_diff)) {
                            changes.push('lead=' + days_diff);
                        }
                    }
                    /* Return the array of changes using a pipe to delimit values */
                    if (changes.length > 0) {
                        return changes.sort().join('|');
                    }
                }
                return "";
            }
        },
        points_used: {
            name: "",
            get: function () {
                if (trackingJson.pointsUsed && trackingJson.pointsUsed.length > 0) {
                    return trackingJson.pointsUsed.toString();
                } else {
                    return "";
                }
            }
        },
        clean_url: {
            name: "",
            get: function (full_url) {
                /* full_url is used to determine if the whole URL should be returned or just the domain + path */
                var regex = /\/(reservation-cancellation|cancellation-confirmation|stay-mgmt\/(stay-preferences|change-reservation))\/[0-9]+\/[a-z]/i,
                    host = location.host,
                    /* Add logic to remove lastName query param */
                    last_name = "lastName=" + Bootstrapper.getQueryParam("lastName");
                if (location.pathname.match(regex)) {
                    var path = location.pathname.split('/');
                    path.pop();
                    return full_url ? location.href.replace(location.pathname, path.join('/')).replace(last_name, "") : host + path.join('/');
                } else {
                    return full_url ? location.href.replace(new RegExp("&?" + last_name, "i"), "") : host + location.pathname;
                }
            }
        },
        session_storage_enabled: {
            name: "",
            get: function (full_url) {
                /* Ensure local storage exists and doesn't error out, which can happenin private browsing */
                if (Bootstrapper._session_storage_enabled) {
                    return true;
                }
                if (window.sessionStorage) {
                    sessionStorage.setItem('ens_test', '1');
                    if (sessionStorage.getItem('ens_test') == '1') {
                        Bootstrapper._session_storage_enabled = true;
                        sessionStorage.removeItem('ens_test');
                        return true;
                    }
                }
                return false;
            }
        },
        reservation_modification_revenue: {
            name: "",
            get: function (flag) {
                if (flag) {
                    var stay_management_obj = JSON.parse(sessionStorage.getItem('change_reservation_dl')),
                        orignal_rev = $data('gdl', 'booking_total_minus_tax'),
                        new_rev = stay_management_obj.BRroomRevenueUSD || stay_management_obj.roomRevenueUSD;
                    if (!isNaN(orignal_rev) && !isNaN(new_rev) && orignal_rev !== new_rev) {
                        return orignal_rev - new_rev;
                    }
                }
                return 0;
            }
        },
        reservation_cancellation_revenue: {
            name: "",
            get: function (flag) {
                if (flag) {
                    var stay_management_obj = JSON.parse(sessionStorage.getItem('cancel_reservation_dl'));
                    return stay_management_obj.BRroomRevenueUSD || stay_management_obj.roomRevenueUSD;
                }
                return 0;
            }
        },
        "payment_options": {
            name: "",
            get: function () {
                return trackingJson['paymentOptions'] ? trackingJson['paymentOptions'].split(',').sort().join('|') : '';
            }
        }
    }
});

Bootstrapper.dataManager.push({
    name: "",
    id: "sc_events",
    data: {
        "scOpen,event1": {
            name: "",
            get: function () {
                return trackingJson.type === 'selectroom' ? !0 : !1;
            }
        },
        "scAdd,event2": {
            name: "",
            get: function () {
                return trackingJson.type === 'guestinfo' ? !0 : !1;
            }
        },
        "event9": {
            name: "",
            get: function () {
                return trackingJson.type === 'guestinfo' && $data('gdl', 'nights_initiated') ? $data('gdl', 'hotel_code_combo') : !1;
            }
        },
        "event29": {
            name: "",
            get: function () {
                return trackingJson.type === 'guestinfo' && $data('gdl', 'initiated_revenue') && $data('gdl', 'nights_initiated') && $data('gdl', 'initiated_points') ? $data('gdl', 'hotel_code_combo') : !1;
            }
        },
        "event10": {
            name: "",
            get: function () {
                return trackingJson.type === 'guestinfo' && $data('gdl', 'initiated_revenue') && $data('gdl', 'nights_initiated') ? $data('gdl', 'hotel_code_combo') : !1;
            }
        },
        "purchase,event52,event53": {
            name: "",
            get: function () {
                return trackingJson.type === 'reservationconfirmation' && trackingJson.newBooking && ("" + trackingJson.newBooking).toLowerCase() === "true" ? !0 : !1;
            }
        },
        "event135": {
            name: "",
            get: function () {
                return trackingJson.type === 'reservationconfirmation' && trackingJson.newBooking && ("" + trackingJson.newBooking).toLowerCase() === "true" && !$data('gdl', 'business_rewards_number_of_rooms') && typeof trackingJson.roomRevenueForeign !== "undefined" && trackingJson.roomRevenueForeign ? ":" + $data('gdl', 'booking_confirmation_code') : !1;
            }
        },
        "event136": {
            name: "",
            get: function () {
                return trackingJson.type === 'reservationconfirmation' && trackingJson.newBooking && ("" + trackingJson.newBooking).toLowerCase() === "true" && $data('gdl', 'business_rewards_number_of_rooms') ? ":" + $data('gdl', 'booking_confirmation_code') : !1;
            }
        },
        "event137": {
            name: "",
            get: function () {
                return trackingJson.type === 'reservationconfirmation' && trackingJson.newBooking && ("" + trackingJson.newBooking).toLowerCase() === "true" && $data('gdl', 'business_rewards_number_of_rooms') ? ":" + $data('gdl', 'booking_confirmation_code') : !1;
            }
        },
        "event22": {
            name: "",
            get: function () {
                if ($data('gdl', 'points_used').length > 0) {
                    return trackingJson.type === 'reservationconfirmation' ? !0 : !1;
                }
            }
        },
        "event116": {
            name: "",
            get: function () {
                return trackingJson.type === 'reservationconfirmation' ? ":" + $data('gdl', 'booking_confirmation_code') : !1;
            }
        },
        "event40": {
            name: "",
            get: function () {
                return document.getElementById('nor1Image') ? !0 : !1;
            }
        },
        "event21,event22": {
            name: "",
            get: function () {
                return Bootstrapper.data.cookie.utils.get('bookingType') == 'POINTS' ? !0 : !1;
            }
        },
        "event23,event22": {
            name: "",
            get: function () {
                return Bootstrapper.data.cookie.utils.get('bookingType') == 'CASH + POINTS' ? !0 : !1;
            }
        },
        "event13": {
            name: "",
            get: function () {
                return Bootstrapper.getQueryParam('cm_sp') || Bootstrapper.getQueryParam('cm_sp2') ? !0 : !1;
            }
        },
        "event50": {
            name: "",
            get: function () {
                return $data('gdl', 'ad_impressions') ? !0 : !1;
            }
        },
        "event4,event5,event26,event27": {
            name: "",
            get: function () {
                return trackingJson.type === 'hotelsearch' ? !0 : !1;
            }
        },
        "event8": {
            name: "",
            get: function () {
                return trackingJson.type === 'hotelsearch' && $data('gdl', 'number_of_search_results') ? '=' + $data('gdl', 'number_of_search_results') : !1;
            }
        },
        "event67": {
            name: "",
            get: function () {
                return !Bootstrapper._page_complete_flag ? "=" + $data('gdl', 'pageLoadTime') : !1;
            }
        },
        "event25": {
            name: "",
            get: function () {
                return ((typeof jQuery === 'function' && jQuery('p.hFive.ng-scope').text().match('Welcome to the IHG')) ||
                    (trackingJson.type == 'reservationconfirmation' && trackingJson.quickEnrollPC.toString().toLowerCase() === "true")) ? !0 : !1;
            }
        },
        "event9,event117": {
            name: "",
            get: function () {
                return trackingJson.type == 'upsellpage' ? !0 : !1;
            }
        },
        "event155": {
            name: "",
            get: function () {
                return (trackingJson.type == 'reservationconfirmation' && trackingJson.quickEnrollPC.toString().toLowerCase() === "true") ? !0 : !1;
            }
        },
        "event156": {
            name: "",
            get: function () {
                return (trackingJson.type == 'reservationconfirmation' && trackingJson.quickEnrollAmbFull.toString().toLowerCase() === "true") ? !0 : !1;
            }
        },
        "event157": {
            name: "",
            get: function () {
                return (trackingJson.type == 'reservationconfirmation' && trackingJson.quickEnrollAmbRenew.toString().toLowerCase() === "true") ? !0 : !1;
            }
        },
        "event158": {
            name: "",
            get: function () {
                return (trackingJson.type == 'reservationconfirmation' && trackingJson.quickEnrollKarmaOptIn.toString().toLowerCase() === "true") ? !0 : !1;
            }
        },
        "event162": {
            name: "",
            get: function () {
                return trackingJson.type === 'reservationconfirmation' && trackingJson.newBooking && ("" + trackingJson.newBooking).toLowerCase() === "true" && $data('gdl', 'average_nightly_rate') ? "=" + $data('gdl', 'average_nightly_rate') : !1;
            }
        },
        "event159": {
            name: "",
            get: function () {
                if (trackingJson && location.pathname.match(/\/change-confirmation$/i) && $data('gdl', 'session_storage_enabled')) {
                    return "=" + $data('gdl', 'reservation_modification_revenue', 1);
                }
                return !1;
            }
        },
        "event164": {
            name: "",
            get: function () {
                if (trackingJson && location.pathname.match(/\/cancellation-confirmation\//i) && $data('gdl', 'session_storage_enabled')) {
                    return "=" + $data('gdl', 'reservation_cancellation_revenue', 1);
                }
                return !1;
            }
        },
        "event165,event168,event169": {
            name: "",
            get: function () {
                return trackingJson.rateList ? !0 : !1;
            }
        },
        "event166": {
            name: "",
            get: function () {
                return trackingJson.roomList ? !0 : !1;
            }
        }
    }
});

Bootstrapper._event_data = {};