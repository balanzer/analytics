function createCookie(cookieName, cookieValue, daysToExpire) {
    var date = new Date();
    date.setTime(date.getTime() + (daysToExpire * 24 * 60 * 60 * 1000));
    document.cookie = cookieName + "=" + cookieValue + "; expires=" + date.toGMTString() + "; path=/;domain=holidayinn.com";
    document.cookie = cookieName + "=" + cookieValue + "; expires=" + date.toGMTString() + "; path=/;domain=ihg.com";
}

createCookie("mycookie", "123", 3);