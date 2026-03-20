// Function to toggle Picture-in-Picture mode
function togglePictureInPicture(videoElement) {
    if (document.pictureInPictureElement) {
        document.exitPictureInPicture().catch(error => {
            console.error('Error exiting Picture-in-Picture:', error);
        });
    } else {
        videoElement.requestPictureInPicture().catch(error => {
            console.error('Error entering Picture-in-Picture:', error);
        });
    }
}

// Function to control detection mode
let detectionMode = 'normal';
function setDetectionMode(mode) {
    detectionMode = mode;
    console.log(`Detection mode set to: ${detectionMode}`);
}

// Real-time FPS counter
let fps = 0;
function calculateFPS() {
    let lastTime = performance.now();
    function update() {
        const currentTime = performance.now();
        fps = Math.round(1000 / (currentTime - lastTime));
        lastTime = currentTime;
        requestAnimationFrame(update);
    }
    update();
}

// Function to communicate with API
async function fetchDataFromAPI(endpoint) {
    try {
        const response = await fetch(endpoint);
        if (!response.ok) throw new Error('Network response was not ok');
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('Error fetching data from API:', error);
    }
}

// Initialize FPS counter
calculateFPS();

// Export functions if needed for other modules
export { togglePictureInPicture, setDetectionMode, fetchDataFromAPI };