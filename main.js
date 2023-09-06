
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
        // console.log(songs, user);
        // console.log(user.playing.songId);
        var playAudio = document.getElementById('play-audio');
        var img = playAudio.querySelector('img');
        var infoBlock = playAudio.querySelector('.song__info');
        var heart = playAudio.querySelector('.song__to-library')
        
        var id = user.playing.songId;
        var thisSong = songs.find(function(song) {
            return song.id === id;
        });
        img.src = `./assets/img/songs/song${id}.png`;

        infoBlock.innerHTML = `
           <p class="song__name">${thisSong.name}</p>
        `;
        thisSong.singers.forEach(function(singer) {
            infoBlock.innerHTML += `
                <a class="song__singer">${singer}</a>
            `;
        });
        var isLiked = user.like.songs.some(function(song) {
            return song === id;
        });
    
        if (isLiked) {
            heart.classList.remove('fa-regular');
            heart.classList.add('fa-solid');
            heart.classList.add('color-purple');
        }
    
    });


