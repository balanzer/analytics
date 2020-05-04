if (
    location.host.indexOf(".com.cn") == -1 &&
    location.pathname.indexOf("/tw/zh/") == -1 &&
    location.pathname.indexOf("/cn/zh/") == -1
) {
    /* Rule Id: 2940049 */
    console.log("**Target - start Load download-apply-offer.js");
    if (typeof adobe === "object" && adobe.target && adobe.target.getOffer) {
        //init chase_mbox attribute
        window.chaseMboxStatus = 0;


        var fireMbox = function (mbox_name) {
            if (null == mbox_name) {
                mbox_name = "global_mbox";
            }

            var pageview = "default";
            try {
                var pathValues = location.pathname.split("/");
                pageview = pathValues[pathValues.length - 1];
            } catch (e) { }

            window.ATDataInsights = typeof window.ATDataInsights != "undefined" ? window.ATDataInsights : [];

            //  init qmDataInsights to null
            window.qmDataInsights = [];

            window.ATDataInsights.pageview = pageview;

            Bootstrapper.AT.log("Start " + mbox_name + " Download offer for pageview : " + pageview);

            var swimlane_number = Bootstrapper.Cookies.get("swimlane_number");

            if (!isEmpty(swimlane_number)) {
                //	Bootstrapper.AT.log("insight " + mbox_name + " - assigned swimlane_number : " + swimlane_number);
                // Adding swimlane_number to insight data layer
                window.ATDataInsights.swimlane_number = Math.round(swimlane_number);
            } else {
                //	Bootstrapper.AT.log("insight " + mbox_name + " - no swimlane_number assigned");
                window.ATDataInsights.swimlane_number = Math.round(-1);
            }

            var targetParamValues = {};
            if (mbox_name !== "global_mbox") {
                targetParamValues = Bootstrapper.AT.getParametersDataMbox();
            } else {
                targetParamValues = Bootstrapper.AT.getParametersGloblaMbox();
            }

            Bootstrapper.AT.log("getOffer " + mbox_name + " params : " + JSON.stringify(targetParamValues));

            var pcr = typeof trackingJson === "object" ? trackingJson.pcrNumber : "";

            //code for ID Sync

            if (pcr && typeof pcr != "undefined" && pcr != "" && typeof visitor != "undefined") {
                Bootstrapper.AT.log(mbox_name + " setting visitor ID");

                visitor.setCustomerIDs({
                    ihgCRM: {
                        id: pcr,
                        authState: Visitor.AuthState.AUTHENTICATED
                    },
                    pcr_id: {
                        id: pcr,
                        authState: Visitor.AuthState.AUTHENTICATED
                    }
                });
            } else {
                Bootstrapper.AT.log(mbox_name + " no visitor ID to set");
            }

            var stOffer = Date.now();
            adobe.target.getOffer({
                mbox: mbox_name,
                params: targetParamValues,
                timeout: 2000, // 2 SEC TIMEOUT. Target is not
                // required on
                // any slower network. Timeout can be
                // increased later.
                success: function (offer) {
                    Bootstrapper.AT.log("getOffer " + mbox_name + " response : " + JSON.stringify(offer));
                    adobe.target.applyOffer({
                        mbox: mbox_name,
                        offer: offer
                    });
                    var edOffer = Date.now();
                    Bootstrapper.AT.log(
                        "completed " + mbox_name + " applyOffer time taken in ms : " + (edOffer - stOffer)
                    );
                    window.ATDataInsights.responseTimeTaken = Math.round(edOffer - stOffer);
                },
                error: function (status, error) {
                    window.ATDataInsights.failed = false;
                    window.ATDataInsights.typeMessage = mbox_name + " Target Time Out";
                    //window._log(status, error);
                    console.error(
                        "**Target - " + mbox_name + " error when calling getOffer " + status + " error:" + error
                    );

                    Bootstrapper.reportException({
                        message: "Target " + mbox_name + " getOffer error status:" + status + " error:" + error
                    });
                }
            });
        };

        setTimeout(function () {
            fireMbox("global_mbox");
        }, 100);

        window.addEventListener("data-json-ready", function (e) {
            Bootstrapper.AT.log("data-json-ready event raised detail: " + JSON.stringify(e.detail));

            if (window.chaseMboxStatus === 0) {
                window.chaseMboxStatus = 1;
                Bootstrapper.AT.log("fire chase_mbox. for data-json-ready");
                fireMbox("chase_mbox");
            } else {
                Bootstrapper.AT.log("chase_mbox call already made. skip data-json-ready chase_mbox");
            }

        });

        setTimeout(function () {
            if (window.chaseMboxStatus === 0) {
                window.chaseMboxStatus = 1;
                Bootstrapper.AT.log("fire chase_mbox. for fallback");
                fireMbox("chase_mbox");
            } else {
                Bootstrapper.AT.log("chase_mbox call already made. skip fallback chase_mbox");
            }
        }, 1000);

    } else {
        window.ATDataInsights.typeMessage = "Target Missing";
        Bootstrapper.reportException({
            message: "Target getOffer adobe.target missing."
        });
        console.error("**Target - Target getOffer adobe.target missing.");
    }
    console.log("**Target - end Load download-apply-offer.js");

    if (Bootstrapper.propertyWatcher !== "undefined" && typeof Bootstrapper.propertyWatcher !== "undefined") {
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
                Bootstrapper.AT.log(
                    "Previous URL or new URL are null or undefined or has fromRedirect - do not reload target"
                );
            } else {
                var oldSplit = oldValue.split("?");
                var newSplit = newValue.split("?");

                var oldPath = oldSplit[0];
                var newPath = newSplit[0];

                if (oldPath !== newPath) {
                    Bootstrapper.AT.log("Page View Changed - Reload offer");
					/*
          Bootstrapper.AT.log("Reload offer Previous path : " + oldPath);
          Bootstrapper.AT.log("Reload offer Current path : " + newPath);
          */
                    fireMbox("global_mbox");
                } else {
                    Bootstrapper.AT.log(
                        "OldPath and NewPath are the same, parameters may have changed - do not reload target"
                    );

                    //Firembox for now - this code will be removed for optimization after collecting data from Quantum metrics
                    //This will introduce multple mbox calls on spa pages when views or params changed.

                    //fireMbox();

					/*
          TODO - Check critical parameters and reload if needed
          */
					/*
          var oldPars = oldSplit[1];
          var newPars = newSplit[1];
  
          Bootstrapper.AT.log(
            "Reload offer - Page View or Page Reloaded with new data"
          );
          Bootstrapper.AT.log("Reload offer Previous params : " + oldPars);
          Bootstrapper.AT.log("Reload offer Current params : " + newPars);
          fireMbox();
  
          */
                }
            }
        };
    } else {
        console.log(
            "**Target - propertyWatcher not available for view changes. Target will not reload when view changes."
        );
    }
} else {
    console.log("**Target - download offer not loaded - china domain or china language");
}

/*
  document.addEventListener(adobe.target.event.REQUEST_SUCCEEDED, function(
    event
  ) {
    // trackEventDetails(event);
    //printATDataInsights(adobe.target.event.REQUEST_SUCCEEDED);
    //createQuantumMetricDataLayer();
  });  */

document.addEventListener(adobe.target.event.REQUEST_FAILED, function (event) {
    trackEventDetails(event);
    window.ATDataInsights.timeout = true;
    window.ATDataInsights.noOffer = true;
    window.ATDataInsights.noResponseToken = true;
    printATDataInsights(adobe.target.event.REQUEST_FAILED);
    submitTrackEvent();
    createQuantumMetricDataLayer();
});

document.addEventListener(adobe.target.event.CONTENT_RENDERING_FAILED, function (event) {
    trackEventDetails(event);
    window.ATDataInsights.failed = true;
    printATDataInsights(adobe.target.event.CONTENT_RENDERING_FAILED);
    submitTrackEvent();
    createQuantumMetricDataLayer();
});

document.addEventListener(adobe.target.event.CONTENT_RENDERING_SUCCEEDED, function (event) {
    trackEventDetails(event);
    window.ATDataInsights.completed = true;
    window.ATDataInsights.endToEndCompleted = true;
    window.ATDataInsights.noOffer = false;
    window.ATDataInsights.noResponseToken = false;
    printATDataInsights(adobe.target.event.CONTENT_RENDERING_SUCCEEDED);
    submitTrackEvent();
    createQuantumMetricDataLayer();
});

document.addEventListener(adobe.target.event.CONTENT_RENDERING_SUCCEEDED, function (e) {
    Bootstrapper.AT.log("insight - Test Applied");
    window.ATDataInsights.completed = true;
});

document.addEventListener(adobe.target.event.LIBRARY_LOADED, function (event) {
    trackEventDetails(event);
});

document.addEventListener(adobe.target.event.CONTENT_RENDERING_START, function (event) {
    trackEventDetails(event);
});

document.addEventListener(adobe.target.event.CONTENT_RENDERING_NO_OFFERS, function (event) {
    Bootstrapper.AT.log("insight - has no offers");
    //trackEventDetails(event);
    window.ATDataInsights.noOffer = true;
    window.ATDataInsights.responseTokens = true;
    //printATDataInsights(adobe.target.event.CONTENT_RENDERING_NO_OFFERS);
    //submitTrackEvent();
    //createQuantumMetricDataLayer();
});

document.addEventListener(adobe.target.event.CONTENT_RENDERING_REDIRECT, function (event) {
    trackEventDetails(event);
});

function createQuantumMetricDataLayer() {
    //	Bootstrapper.AT.log("*************** QuantumMetric DataLayer For Adobe Target");
    // Bootstrapper.AT.log("Creating QuantumMetric DataLayer");

    window.qmDataInsights = typeof window.qmDataInsights != "undefined" ? window.qmDataInsights : [];

    //window.qmDataInsights.mbox = "global_mbox";
    window.qmDataInsights.pageview = window.ATDataInsights.pageview;
    window.qmDataInsights.swimlane_number = window.ATDataInsights.swimlane_number;

    if ("undefined" != typeof window.ATDataInsights.type) {
        window.qmDataInsights.type = window.ATDataInsights.type;
    } else {
        window.qmDataInsights.type = "default";
    }

    //Add Boolean details Related to test execution

    if ("undefined" != typeof window.ATDataInsights.timeout) {
        window.qmDataInsights.timeout = window.ATDataInsights.timeout;
    } else {
        //window.qmDataInsights.timeout = false;
    }

    if ("undefined" != typeof window.ATDataInsights.failed) {
        window.qmDataInsights.failed = window.ATDataInsights.failed;
    } else {
        //window.qmDataInsights.failed = false;
    }

    if ("undefined" != typeof window.ATDataInsights.completed) {
        window.qmDataInsights.completed = window.ATDataInsights.completed;
    } else {
        //window.qmDataInsights.completed = false;
    }

    if ("undefined" != typeof window.ATDataInsights.endToEndCompleted) {
        window.qmDataInsights.endToEndCompleted = window.ATDataInsights.endToEndCompleted;
    } else {
        // window.qmDataInsights.endToEndCompleted = false;
    }

    if (window.ATDataInsights.noOffer) {
        window.qmDataInsights.noOffer = window.ATDataInsights.noOffer;
        window.qmDataInsights.type = window.qmDataInsights.type + "-no-offer";
    } else {
        window.qmDataInsights.type = window.qmDataInsights.type + "-has-offer";
    }
    if (window.ATDataInsights.noResponseToken) {
        window.qmDataInsights.noResponseToken = window.ATDataInsights.noResponseToken;
        window.qmDataInsights.type = window.qmDataInsights.type + "-no-response-token";
    } else {
        window.qmDataInsights.type = window.qmDataInsights.type + "-has-response-token";
    }

    //Add Test Related Information

    if ("undefined" != typeof window.ATDataInsights.experience_name) {
        window.qmDataInsights.experience_name = window.ATDataInsights.experience_name;
    } else {
        //window.qmDataInsights.experience_name = "no experience received";
    }

    if ("undefined" != typeof window.ATDataInsights.offer_name) {
        window.qmDataInsights.offer_name = window.ATDataInsights.offer_name;
    } else {
        //window.qmDataInsights.offer_name = "no offer received";
    }

    if ("undefined" != typeof window.ATDataInsights.activity_name) {
        window.qmDataInsights.activity_name = window.ATDataInsights.activity_name;
    } else {
        //window.qmDataInsights.activity_name = "no activity received";
    }

    if ("undefined" != typeof window.ATDataInsights.option_name) {
        window.qmDataInsights.option_name = window.ATDataInsights.option_name;
    } else {
        // window.qmDataInsights.option_name = "no options received";
    }

    //Print information for debug
    // Bootstrapper.AT.log("Final QuantumMetric DataLayer Values");
    for (var propName in window.qmDataInsights) {
        //	Bootstrapper.AT.log("QMDataInsights " + propName + " : " + JSON.stringify(window.qmDataInsights[propName]));
    }

    // Bootstrapper.AT.log("*************** QuantumMetric DataLayer For Adobe Target - End");
}

function submitTrackEvent() {
	/*
    Bootstrapper.AT.log("Submit trackEvent");
  
    adobe.target.trackEvent({
      mbox: "global_mbox",
      params: {
        pageview: window.ATDataInsights.pageview,
        type: window.ATDataInsights.type,
        typeMessage: window.ATDataInsights.typeMessage,
        swimlane_number: window.ATDataInsights.swimlane_number,
        responseTimeTaken: window.ATDataInsights.responseTimeTaken,
        timeout: window.ATDataInsights.timeout,
        failed: window.ATDataInsights.failed,
        completed: window.ATDataInsights.completed,
        noOffer: window.ATDataInsights.noOffer,
        noResponseToken: window.ATDataInsights.noResponseToken,
        endToEndCompleted: window.ATDataInsights.endToEndCompleted
      }
    });
    */
}

function printATDataInsights(type) {
	/*
    Bootstrapper.AT.log("ATDataInsights for : " + type);
    for (var propName in window.ATDataInsights) {
      Bootstrapper.AT.log(
        "ATDataInsights " +
          propName +
          " : " +
          JSON.stringify(window.ATDataInsights[propName])
      );
    }
    */
}

function trackEventDetails(event) {
    try {
        var trackingMboxName = event.detail.mbox;
        var trackingType = event.detail.type;
        var trackingMessage = event.detail.message;
        try {
            if (trackingMessage && "undefined" != typeof trackingMessage) {
                var typeValues = trackingMessage.split(" ");
                trackingType = trackingType + "-" + typeValues.join("-").toLowerCase();
            }
        } catch (ex) { }

        var messageVal =
            "**Target event mbox (" +
            trackingMboxName +
            ") type : " +
            trackingType +
            " optional message : " +
            trackingMessage +
            " event detail : " +
            JSON.stringify(event.detail);

        console.log(messageVal);

        //console.log("**Target Event JSON : " + JSON.stringify(event.detail));

        //Adding MBOX name

        window.ATDataInsights.mbox = trackingMboxName;

        // Adding target response result type to insight data layer
        window.ATDataInsights.type = trackingType; //  type
        // Adding target response result type message to insight data layer
        window.ATDataInsights.typeMessage = trackingMessage; //  message
    } catch (e) {
        //ignore
        console.log("**Target event failed " + e);
    }
}

document.addEventListener(adobe.target.event.REQUEST_SUCCEEDED, function (e) {
    console.log("**Target Request succeeded", e.detail);

    var tokens = e.detail.responseTokens;

    if (isEmpty(tokens)) {
        console.log("**Target Request has no responseTokens");
        window.ATDataInsights.noResponseToken = true;

        //Submit Data to QM
        trackEventDetails(e);
        printATDataInsights(adobe.target.event.REQUEST_SUCCEEDED);
        createQuantumMetricDataLayer();

        //return - no processing required if no response token
        return;
    }

    // offer response has Response Tokens
    window.ATDataInsights.noOffer = false;
    window.ATDataInsights.noResponseToken = false;

    window.ttMETA = typeof window.ttMETA != "undefined" ? window.ttMETA : [];

    var uniqueTokens = distinct(tokens);

    console.log("**Target Request responseTokens : ", JSON.stringify(uniqueTokens));
    console.log("**Target Request total unique tokens : ", uniqueTokens.length);

    window.ATDataInsights.experience_name = "";
    window.ATDataInsights.offer_name = "";
    window.ATDataInsights.activity_name = "";
    window.ATDataInsights.option_name = "";

    uniqueTokens.forEach(function (token) {
        window.ttMETA.push({
            CampaignName: token["activity.name"],
            CampaignId: token["activity.id"],
            RecipeName: token["experience.name"],
            RecipeId: token["experience.id"],
            OfferId: token["option.id"],
            OfferName: token["option.name"],
            MboxName: e.detail.mbox
        });

        window.ATDataInsights.experience_name = window.ATDataInsights.experience_name + token["experience.name"] + ", ";
        window.ATDataInsights.offer_name = window.ATDataInsights.offer_name + token["offer.name"] + ", ";
        window.ATDataInsights.activity_name = window.ATDataInsights.activity_name + token["activity.name"] + ", ";
        window.ATDataInsights.option_name = window.ATDataInsights.option_name + token["option.name"] + ", ";

        Bootstrapper.AT.log("insight - Test Downloaded experience name : " + token["experience.name"]);

        Bootstrapper.AT.log("insight - Test Downloaded option name : " + token["option.name"]);

        Bootstrapper.AT.log("insight - Test Downloaded activity name : " + token["activity.name"]);
        Bootstrapper.AT.log("insight - Test Downloaded offer name : " + token["offer.name"]);

        if (token["profile.swimlane_number"]) {
            var swimlane_number = token["profile.swimlane_number"];

            console.log("**Target responseTokens swimlane_number : " + swimlane_number);

            Bootstrapper.Cookies.set("swimlane_number", swimlane_number);
        } else {
            console.log("**Target responseTokens token.profile not able to get swimlane_number");
        }
        console.log(ttMETA);
    });

    //Submit Data to QM
    trackEventDetails(e);
    printATDataInsights(adobe.target.event.REQUEST_SUCCEEDED);
    createQuantumMetricDataLayer();
});

function isEmpty(val) {
    return val === undefined || val == null || val.length <= 0 ? true : false;
}

function key(obj) {
    return Object.keys(obj)
        .map(function (k) {
            return k + "" + obj[k];
        })
        .join("");
}

function distinct(arr) {
    var result = arr.reduce(function (acc, e) {
        acc[key(e)] = e;
        return acc;
    }, {});

    return Object.keys(result).map(function (k) {
        return result[k];
    });
}
