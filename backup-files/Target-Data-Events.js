console.log("**event - adding event Listener - hotelOffersListEvent");
window.appTargetData = {};
window.addEventListener("hotelOffersListEvent", function (e) {
    try {
        var data = e.detail.data;

        window.appTargetData['hotelOffersListEvent'] = e.detail.data;
        console.log("**event - data - hotelOffersListEvent - added to  window.appTargetData");

        /*
        if (data.length > 0) {
            console.log("**event hotelOffersListEvent - total hotel data to process : " + JSON.stringify(data.length));

            var i;
            for (i = 0; i < data.length; i++) {
                var hotel = data[i];
                var hotelCode = hotel.hotelCode;
                //console.log("**event hotelOffersListEvent adding hotel " + hotelCode + " to appTargetData");
                window.appTargetData[hotelCode] = hotel;
            }
            console.log("**event hotelOffersListEvent  added all hotels to appTargetData");
        } */


    } catch (err) {
        console.log("error **event hotelOffersListEvent error : " + err);
    }

});