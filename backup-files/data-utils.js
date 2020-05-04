Bootstrapper.AT = {};
Bootstrapper.AT.log = function (message) {
    console.log("**Target " + message);
};

var restrictedParameters = [];

restrictedParameters.push("reservation");
restrictedParameters.push("akamaiSubRegion");
restrictedParameters.push("pageidbrand");
restrictedParameters.push("categoryID");
restrictedParameters.push("timeOfDayAttribute");
restrictedParameters.push("type");
restrictedParameters.push("beFreeCookieCreationDate");
restrictedParameters.push("urlType");
restrictedParameters.push("iata");
restrictedParameters.push("controllerName");
restrictedParameters.push("envName");
restrictedParameters.push("edwSellSource");
restrictedParameters.push("eID");
restrictedParameters.push("actualTaxForeign");
restrictedParameters.push("actualTaxUSD");
restrictedParameters.push("ambassador");
restrictedParameters.push("cm_tags");
restrictedParameters.push("confirmationNumber");
restrictedParameters.push("corporateId");
restrictedParameters.push("currencyCodeForeign");
restrictedParameters.push("currencyCodeUSD");
restrictedParameters.push("destLatitude");
restrictedParameters.push("destLongitude");
restrictedParameters.push("eventId");
restrictedParameters.push("glat");
restrictedParameters.push("groupCode");
restrictedParameters.push("hotelCountryCode");
restrictedParameters.push("hotelCountryCodeAlt");
restrictedParameters.push("hotelRank");
restrictedParameters.push("hotelRegion");
restrictedParameters.push("karmaMember");
restrictedParameters.push("pcrNumber");
restrictedParameters.push("pcrTravelType");
restrictedParameters.push("propertyLat");
restrictedParameters.push("propertyLong");
restrictedParameters.push("propertyName");
restrictedParameters.push("roomRevenueForeign");
restrictedParameters.push("sessionId");
restrictedParameters.push("timestamp");
restrictedParameters.push("triggerTracking");
restrictedParameters.push("unitPriceForeign");
restrictedParameters.push("unitPriceUSD");
restrictedParameters.push("userLastName");

//Target Mapping Value

var targetParamMap = {};
targetParamMap["akamaiCountryCode"] = "user-country-cd";
targetParamMap["viewport"] = "viewport";
targetParamMap["loginType"] = "login-status";
targetParamMap["akamaiRegion"] = "user-region-cd";
targetParamMap["language"] = "user-language-cd";
targetParamMap["membershipStatus"] = "membership-status";
targetParamMap["siteCountry"] = "site-country-cd";
targetParamMap["siteLanguage"] = "site-language-cd";
targetParamMap["siteBrand"] = "brand-cd";
targetParamMap["orientation"] = "orientation";
targetParamMap["adultCount"] = "adult-count";
targetParamMap["childCount"] = "child-count";
targetParamMap["roomCount"] = "room-count";
targetParamMap["rateCode"] = "rate-cd";
targetParamMap["rateCodes"] = "rate-cd";
targetParamMap["arrivalDate"] = "arrival-date";
targetParamMap["checkInDate"] = "checkin-date";
targetParamMap["checkOutDate"] = "checkout-date";
targetParamMap["stayLength"] = "stay-length";
targetParamMap["destination"] = "destination";
targetParamMap["isEmployee"] = "is-employee";
targetParamMap["propertyCode"] = "hotel-code";

window.formatTargetData = function (inputValue) {
    if (typeof inputValue === "undefined" || inputValue === "undefined") {
        return "";
    }
    return inputValue;
};

window.isValidParamKey = function (inputValue) {
    if (typeof inputValue === "undefined" || inputValue === "undefined") {
        return false;
    }
    return true;
};

//Bootstrapper.AT.log("Target Data Layer - Starting");
/*
Bootstrapper.AT.loginStatus = function() {
	var doNotSellCookie = Bootstrapper.Cookies.get("CCPA-DNS-FLG");
	try {
		if (null != doNotSellCookie && doNotSellCookie === "true") {
			Bootstrapper.AT.log("Target params Bootstrapper.AT.loginStatus doNotSellCookie flow return anonymous");
			return "anonymous";
		}
	} catch (err) {
		//ignore error
	}
	Bootstrapper.AT.log(
		"Target params Bootstrapper.AT.loginStatus return cookie state : " +
			window.formatTargetData(Bootstrapper.Cookies.get("uhf_userstate"))
	);
	return window.formatTargetData(Bootstrapper.Cookies.get("uhf_userstate"));
};

*/

Bootstrapper.AT.viewport = function () {
    return window.formatTargetData(Bootstrapper.Cookies.get("viewport"));
};

Bootstrapper.AT.host = function () {
    return location.host;
};

Bootstrapper.AT.pathname = function () {
    return location.pathname;
};

Bootstrapper.AT.pageParams = function () {
    return location.search;
};
Bootstrapper.AT.akamaiCountryCode = function () {
    return window.formatTargetData(Bootstrapper.Cookies.get("akamaiCountryCode"));
};
Bootstrapper.AT.akamaiIsTablet = function () {
    return window.formatTargetData(Bootstrapper.Cookies.get("akamaiIsTablet"));
};
Bootstrapper.AT.akamaiIsWirelessDevice = function () {
    return window.formatTargetData(Bootstrapper.Cookies.get("akamaiIsWirelessDevice"));
};
Bootstrapper.AT.orientation = function () {
    return window.formatTargetData(Bootstrapper.Cookies.get("orientation"));
};

Bootstrapper.AT.getParametersGloblaMbox = function () {
    return window.getDataValues("ls");
};

Bootstrapper.AT.getParametersDataMbox = function () {
    return window.getDataValues("json");
};

window.getTargetMappingKey = function (inputKey) {
    var targetKey = null;

    targetKey = targetParamMap[inputKey];

    return targetKey;
};

window.getDataValues = function (dataSrc) {
    if (null == dataSrc) {
        dataSrc = "ls";
    }

    var obj = {};

    //Add Parameters
    obj["viewport"] = Bootstrapper.AT.viewport();
    obj["user-country-cd"] = Bootstrapper.AT.akamaiCountryCode();
    //Get Parameters from local storage trackingJson

    var trackingJsonObj = {};
    if (dataSrc === "json") {
        Bootstrapper.AT.log("Target params read trackingJson and build params");
        trackingJsonObj = window.trackingJson;
    } else {
        Bootstrapper.AT.log("Target params read trackingJson from local storage and build params");
        var trackingJsonStr = localStorage["trackingJson"];

        if (null === trackingJsonStr || typeof trackingJsonStr === "undefined" || trackingJsonStr === "undefined") {
            trackingJsonStr = "{}";
        }
        trackingJsonObj = JSON.parse(trackingJsonStr);
    }

    // Bootstrapper.AT.log("Target params " + dataSrc + " - trackingJsonObj : " + JSON.stringify(trackingJsonObj));

    try {
        if (typeof trackingJsonObj === "object" && trackingJsonObj) {
            for (var key in trackingJsonObj) {
                if (restrictedParameters.indexOf(key) == -1) {
                    if (window.formatTargetData(trackingJsonObj[key])) {
                        var targetParamKey = getTargetMappingKey(key);
                        if (targetParamKey && isValidParamKey(targetParamKey)) {
                            //Bootstrapper.AT.log("Target params targetParamKey : "+targetParamKey+" set to value :"+window.formatTargetData(trackingJsonLS[key]));
                            obj[targetParamKey] = window.formatTargetData(trackingJsonObj[key]);
                        }
                    }
                }
            }
        } else {
            Bootstrapper.AT.log("Target " + dataSrc + " Data Layer - Failed to get data from source");
        }
    } catch (err) {
        //ignore error
    }
    return obj;
};

Bootstrapper.AT.log("Loading Target Data Layer. Load Complete");
