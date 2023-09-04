
var dataApi = './assets/json/data.json';
var songs = [];
var user = {};

fetch(dataApi) 
    .then(function(response) {
        return response.json();
    }) 
    .then(function(data) {
        songs = data.songs;
        user = data.users[0];
        console.log(songs, user);
    });


{
    var playAudio = document.getElementById('play-audio');
    var img = playAudio.querySelector('img');
    var name = playAudio.querySelector('name');
    var singer = playAudio.querySelector('singer');

}
