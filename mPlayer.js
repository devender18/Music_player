const music = document.querySelector('audio');
const img = document.querySelector('img');
const play = document.getElementById('play');
const artist = document.getElementById('artist');
const title = document.getElementById('title');
const pre = document.getElementById('pre');
const next = document.getElementById('next');

// all information data regrading data used by music player 

const songs = [{
         song: 'music-1',
         artist: 'Arijit Singh',
         title: 'Aasan Nahi Yahan',
         img: 'img-1'
    },
    {
         song:'music-2',
         artist:'Ed Sheeran',
         title: 'Perfect',
         img:'img-2'
    },
    {
         song:'music-3',
         artist:'Jubin Nautiyal',
         title: 'Meri Aashiqui',
         img:'img-3'   
}]


let isPlaying = false;


// for play music

function play_music(){
    isPlaying=true;
    music.play();
    play.classList.replace('fa-play','fa-pause');
    play.title = 'pause';
    img.classList.add('anime');
} 

//for pause music

function pause_music(){
    isPlaying=false;
    music.pause();
    play.title = 'play';
    play.classList.replace('fa-pause','fa-play');
    img.classList.remove('anime');
}

play.addEventListener('click',() => {
    // if(!isPlaying){
    //     play_music();
    // }else{
    //     pause_music();
    // }
   
    isPlaying ? pause_music() : play_music();
});

// changing the artist, image, music, title

function loadSong(songs){
    title.textContent = songs.title;
    artist.textContent = songs.artist;
    music.src = "audio/" +songs.song+".mp3";
    img.src = "img/"+songs.img + ".jpg";
}

let songIndex = 0;


function nextSong(){
    songIndex = (songIndex+1) % songs.length;
    loadSong(songs[songIndex]);
    play_music();
    
    
}

function preSong(){
    songIndex = (songIndex-1 + songs.length) % songs.length;
    loadSong(songs[songIndex]);
    play_music();
    
    
}

next.addEventListener('click', nextSong);
pre.addEventListener('click', preSong);




