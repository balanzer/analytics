function roomListProduct() {
    var hotel = "LONVE";
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
                "currency_code": "currency=",
                "hotel_code": "hotel=",
                "price_nightly": "price=",
                "rate_type": "rate_type=",
                "room_type": "room_code=",  /* from trackingJson on rooms page */
                "room_code": "room_code="   /* from trackingJson on rates page */
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
                                temp_ary.push(v127_mappings[l] + list[k].rate_list[i][l]);
                                //console.log("v127_mappings k : " + k + ", i: " + i + ", l:" + l + " temp_ary : " + temp_ary);
                            }
                        }
                        for (var l in v128_mappings) {
                            if (list[k].rate_list[i][l]) {
                                v128 = v128_mappings[l] + list[k].rate_list[i][l];
                            }

                            if (temp_ary.length) {
                                ary.push(temp_ary.sort().join(':') + v128);
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
                    final_ary.push("room/rate list impressions;" + hotel_code + " - room/rate list impressions;;;" + (~ary[i].indexOf("price=") ? "event166=" + ary[i].split('price=')[1].split(':')[0].split('|')[0] : "") + ";evar127=" + ary[i] + "|" + "evar126=" + hotel_code);
                }
            }
            if (rate_list && ary.length) {
                var hotel_code = $data('gdl', 'property_code').toUpperCase();
                for (var i in ary) {
                    final_ary.push("room/rate list impressions;" + hotel_code + " - room/rate list impressions;;;" + (~ary[i].indexOf("price=") ? "event165=" + ary[i].split('price=')[1].split(':')[0].split('|')[0] : "") + ";evar127=" + ary[i] + "|" + "evar126=" + hotel_code);
                }
            }
            var final_string = final_ary.length ? final_ary.join(',') : '';
            return hotel ? ';' + hotel + ',' + final_string : final_string;
        }
    }
}

var detail = roomListProduct();

console.log(detail);