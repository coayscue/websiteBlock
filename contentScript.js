chrome.storage.local.get(['websites', 'password'], function(result) {
    console.log(result.websites);
    result.websites.split('\n').forEach((website) => {
        if (window.location.href.includes(website)) {
            console.log(website);
            var whiteOverlay = document.createElement('div')
            whiteOverlay.style = "position:fixed; top:0; left:0; width:100vw; height:100vh; z-index:1000000000; background:white";
            document.body.appendChild(whiteOverlay);
            var badPass = true;
            setTimeout(function() {
                while (badPass) {
                    var pass = prompt("Page blocked. Enter password:");
                    if (pass == result.password)
                        badPass = false;
                }
                document.body.removeChild(whiteOverlay);
                console.log('passed');
            }, 1);
        }
    })
});