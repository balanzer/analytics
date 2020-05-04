
window.addATMboxStyles = function (mboxName, divID) {
    try {
        console.log("**Target - start apply mbox style mboxName : " + mboxName + " divID : " + divID);
        if (null !== document.getElementById(divID)) {
            var style = "mbox-name-" + mboxName;
            console.log("**Target -  mbox style : " + style + " added mboxName : " + mboxName + " divID : " + divID);
            document.getElementById(divID).classList.add(style);
        } else {
            console.log("**Target -  mbox style not applied div not found mboxName : " + mboxName + " divID : " + divID);
        }

    } catch (err) {
        console.log("**Target error -  addATMboxStyles apply mbox style error " + err);
    }
};

addATMboxStyles("HPH", "HPH");
addATMboxStyles("HMM4", "HMM4");