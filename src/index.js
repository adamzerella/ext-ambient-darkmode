// Request repeated position update from Browser and store current positionId
navigator.geolocation.watchPosition( configureTheme, handleError );

/**
 * TODO
 * @param { Object } position - TODO
 */
function configureTheme( position ) {
    // Current time in Date() format.
    let currentTime = new Date( position.timestamp );
  
    // If local time is between 6PM and 6AM
    if ( currentTime.getHours() >= 18 || currentTime.getHours() <= 6) {
        chrome.tabs.onActivated.addListener( tab => {
            let jsOptions = {
                file: "src/style.js",
                allFrames: true,
                matchAboutBlank: true,
                runAt: "document_idle"
            }
        
            // Inject javascript on the active tab
            chrome.tabs.executeScript(tab.tabId, jsOptions)
        });
    }
}

/**
 * Log error output
 * @param { Object } error - Error response
 */
function handleError( error ) {
    console.error( error );
}
