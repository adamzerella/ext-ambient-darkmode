// Request repeated position update from Browser and store current positionId
navigator.geolocation.watchPosition( configureTheme, handleError );

/**
 * TODO
 * @param { Object } position - TODO
 */
function configureTheme( position ) {
    // Current time in Date() format.
    let currentTime = new Date( position.timestamp );
  
    // If local time is between 6PM - 6AM, 18->0 || 0-6.
    if ( currentTime.getHours() >= 18 || currentTime.getHours() <= 6) {
        console.log(`Switching to darkmode...`);

        chrome.tabs.onActivated.addListener( tab => {
            let jsOptions = {
                file: "src/style.js",
                allFrames: true,
                matchAboutBlank: true,
                runAt: "document_idle"
            }
        
            chrome.tabs.executeScript(jsOptions)
        });
    }
    else {
        console.log(`Switching to lightmode...`);
    }
}

/**
 * TODO
 * @param { Object } error - TODO
 */
function handleError( error ) {
    console.error( error );
}
