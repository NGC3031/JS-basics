// Javascript using Inline Function Expression

function setActiveTab(actiiveTabHandler, tab) {
    // set active tab and call handler
    actiiveTabHandler();
}

setActiveTab(function () {
    console.log("Set active tab");
}, 1);