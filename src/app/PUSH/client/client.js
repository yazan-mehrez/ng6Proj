const publicVapidKey = 'BG26LHVJZVe0yc25Y7-yKMJq8ByR6aE4F0JuJFM-rIxFJU1DDS6jQfTjDYmrpRxjUTLrEd0vfRkqqiM1E28vEK4';

if ('serviceWorker' in navigator) {
    send().catch(err => console.log(err));
}

async function send() {
    console.log('Registering service worker');
    const register = await navigator.serviceWorker.register('/worker.js', {scope: '/'});
    console.log('Registered');

    const subscription = await register.pushManager.subscribe({
        userVisibleOnly: true,
        applicationServerKey: urlBase64ToUint8Array(publicVapidKey)
    });
    console.log('push registered');

    console.log('sending push');

    await fetch('subscribe', {
        method: 'POST',
        body: JSON.stringify(subscription),
        headers: {'content-type': 'application/json'}
    });
    console.log('push sent');
}

function urlBase64ToUint8Array(base64String) {
    const padding = '='.repeat((4 - base64String.length % 4) % 4);
    const base64 = (base64String + padding)
        .replace(/\-/g, '+')
        .replace(/_/g, '/');

    const rawData = window.atob(base64);
    const outputArray = new Uint8Array(rawData.length);

    for (let i = 0; i < rawData.length; ++i) {
        outputArray[i] = rawData.charCodeAt(i);
    }
    return outputArray;
}



