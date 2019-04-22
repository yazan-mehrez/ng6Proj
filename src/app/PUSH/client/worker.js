self.addEventListener('push', e => {
    try {
        const data = e.data.json();
        console.log('recieved');

        self.registration.showNotification(data.title, {
            body: 'Syriatel send you',
            icon: 'https://qph.fs.quoracdn.net/main-thumb-t-5377-100-yyygakkyxdujlelrkdzphdocsvsoxjgw.jpeg'
        });
    } catch (e) {
        console.log(e);
    }
});
