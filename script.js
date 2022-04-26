// Unsplash API
const count = 10;
const apiKey = 'mbng6YuPNdsiQbvv14-kOxFUaa7KmvGsWKClo7s7j5Q';
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

// Get photos from Unsplash API
async function getPhotos() {
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        console.log(data);
    } catch (error) {
        // Catch Error Here
    }
}

// On load
getPhotos();