const axios = require('axios');


axios.get('https://api.spotify.com/v1/search?q=lord+patawad&type=track', {
    headers: {
    'Authorization': 'Bearer BQB8AlammWBM4-iCss5oxexLkyhMz9TyMWUK3MeBbh1Urarn2zIzCYJgZ_wfUFSfrg5OFWWVZXuLCRHquVhiitbsAFXVSh_NroGabauxq-65-S4_tkiWljyTJkiad4oAEAuwjpdlQDdom84SakClNXEsftTnT7T6OJVLHUTnlI8dBfDKhbk3KM-YxTYFVG6przyDQDV5tbSP2JY'
}
}).then((data)=>{
    console.log(data.data.tracks.items[0].id);
})

