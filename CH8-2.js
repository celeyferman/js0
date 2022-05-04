let timerId = setTimeout(function () { 
    console.log("Hello, every 30 seconds");
    timerId = setTimeout(function () {
        console.log("Hello, every minute");
        timerId = setTimeout(function () {
            console.log("Hello, every minute with 15 seconds");
        }, 15 * 1000);
    }, 30 * 1000);
}, 30 * 1000);
