let previous = document.querySelector('#pre');
let play = document.querySelector('#play');
let next = document.querySelector('#next');
let title = document.querySelector('#title');
let recent_volume = document.querySelector('#volume');
let volume_show = document.querySelector('#volume_show');
let slider = document.querySelector('#duration_slider');
let show_duration = document.querySelector('#show_duration');
let track_image = document.querySelector('#track_image');
let auto_play = document.querySelector('#auto');
let present = document.querySelector('#present');
let total = document.querySelector('#total');
let artist = document.querySelector('#artist');



let timer;
let autoplay = 0;

let index_no = 0;
let Playing_song = false;

//create a audio Element
let track = document.createElement('audio');


//All songs list
let All_song = [{
		name: "Lost Sky Dreams",
		path: "1.mp3",
		img: "1.jpg",
        singer: ""
	},
	{
		name: "Elektronomia - Limitless",
		path: "elektronomia-limitless.mp3",
		img: "https://i.ytimg.com/vi/cIpzqjLAs6Y/maxresdefault.jpg",
		singer: ""
	},
	{
		name: "Tu Aake Dekle",
		path: "TU_AAKE_DEKHLE__Slowed_Reverbed_____KING(256k).mp3",
		img: "https://i.ytimg.com/vi/ccWglXpg8vY/hqdefault.jpg",
		singer: ""
	},
    {
		name: "Zaalima",
		path: "Zaalima__Slowed_and_Reverb____Raees___Arijit_Singh___Harshdeep_Kaur(256k).mp3",
		img: "https://i.ytimg.com/vi/SQmCaPfsIho/maxresdefault.jpg",
		singer: ""
	},
    {
		name: "No Love",
		path: "No_Love_-_[Slowed+Reverb](256k).mp3",
		img: "https://i.ytimg.com/vi/Xw09kT_wtf0/maxresdefault.jpg",
		singer: ""
	},
    {
		name: "Mere Sapno ki Rani x The Box",
		path: "Mera_Sapno_Ki_Rani_X_The_Box__Skeletron_Edit____8D_Audio_Song___Use_Headphones___AK_8D_Songs(256k).mp3",
		img: "https://i.ytimg.com/vi/Vw4-RQ1sMDQ/maxresdefault.jpg",
		singer: ""
	},
    {
		name: "Excuses",
		path: "Excuses(256k).mp3",
		img: "https://cover.djjohal.pro/music/thumb/489751/Excuses.jpg",
		singer: ""
	},
    {
		name: "Main Royaan",
		path: "Main_Royaan(slowed+reverb)(256k).mp3",
		img: "https://th.bing.com/th/id/OIP.RpqRyAeDNxCnJJb6dIEPeQHaEK?pid=ImgDet&rs=1",
		singer: ""
	},
    {
		name: "HOOKAH BAR",
		path: "HOOKAH_BAR.mp3",
		img: "https://th.bing.com/th/id/OIP.P7Cmxc_QIfEsiqmIUI6I0QHaEK?pid=ImgDet&rs=1",
		singer: ""
	},
    {
		name: "Kabira",
		path: "Kabira.mp3",
		img: "https://th.bing.com/th/id/R.238128e2db42a2ddf256e3a6eb41b15d?rik=vmrRS5dlEhbstg&riu=http%3a%2f%2fwww.indiamarks.com%2fwp-content%2fuploads%2fYeh-Jawaani-Hai-Deewanis-Kabira-Song.jpg&ehk=j9sDMO2p25ObR2rARte0eWOoVDg8ikXdijxKrzuMDjA%3d&risl=&pid=ImgRaw&r=0",
		singer: ""
	},
    {
		name: "Chittiyaan Kalaiyaan",
		path: "chittiyaan_kalaiyaan.mp3",
		img: "https://i.pinimg.com/originals/18/af/f0/18aff01da8ee5419b8f8abf9e1ed5f3c.jpg",
		singer: ""
	},
    {
		name: "Coldplay Hymn",
		path: "Coldplay_Hymn.mp3",
		img: "https://th.bing.com/th/id/OIP.PHbYVkZNgDp4qPiLxFzHBAHaHa?pid=ImgDet&rs=1",
		singer: ""
	},
    {
		name: "Middle Of The Night",
		path: "Elley.mp3",
		img: "https://i.ytimg.com/vi/CfgcbCe9Z_o/maxresdefault.jpg",
		singer: ""
	},
    {
		name: "DripReport_Skechers",
		path: "DripReport_Skechers.mp3",
		img: "https://i.ytimg.com/vi/1tKp5j3p7Tc/maxresdefault.jpg",
		singer: ""
	},
    {
		name: "Runaway_x_Kaise_Hua",
		path: "Runaway_x_Kaise_Hua.mp3",
		img: "https://i.ytimg.com/vi/Cv6bOSFVFiM/hqdefault.jpg",
		singer: ""
	}
];


// All functions


// function load the track
function load_track(index_no) {
	clearInterval(timer);
	reset_slider();

	track.src = All_song[index_no].path;
	title.innerHTML = All_song[index_no].name;
	track_image.src = All_song[index_no].img;
	artist.innerHTML = All_song[index_no].singer;
	track.load();

	timer = setInterval(range_slider, 1000);
	total.innerHTML = All_song.length;
	present.innerHTML = index_no + 1;
}

load_track(index_no);


//mute sound function
function mute_sound() {
	track.volume = 0;
	volume.value = 0;
	volume_show.innerHTML = 0;
}


// checking.. the song is playing or not
function justplay() {
	if (Playing_song == false) {
		playsong();

	} else {
		pausesong();
	}
}


// reset song slider
function reset_slider() {
	slider.value = 0;
}

// play song
function playsong() {
	track.play();
	Playing_song = true;
	play.innerHTML = '<i class="fa fa-pause" aria-hidden="true"></i>';
}

//pause song
function pausesong() {
	track.pause();
	Playing_song = false;
	play.innerHTML = '<i class="fa fa-play" aria-hidden="true"></i>';
}


// next song
function next_song() {
	if (index_no < All_song.length - 1) {
		index_no += 1;
		load_track(index_no);
		playsong();
	} else {
		index_no = 0;
		load_track(index_no);
		playsong();

	}
}


// previous song
function previous_song() {
	if (index_no > 0) {
		index_no -= 1;
		load_track(index_no);
		playsong();

	} else {
		index_no = All_song.length;
		load_track(index_no);
		playsong();
	}
}


// change volume
function volume_change() {
	volume_show.innerHTML = recent_volume.value;
	track.volume = recent_volume.value / 100;
}

// change slider position 
function change_duration() {
	slider_position = track.duration * (slider.value / 100);
	track.currentTime = slider_position;
}

// autoplay function
function autoplay_switch() {
	if (autoplay == 1) {
		autoplay = 0;
		auto_play.style.background = "rgba(255,255,255,0.2)";
	} else {
		autoplay = 1;
		auto_play.style.background = "#FF8A65";
	}
}


function range_slider() {
	let position = 0;

	// update slider position
	if (!isNaN(track.duration)) {
		position = track.currentTime * (100 / track.duration);
		slider.value = position;
	}


	// function will run when the song is over
	if (track.ended) {
		play.innerHTML = '<i class="fa fa-play" aria-hidden="true"></i>';
		if (autoplay == 1) {
			index_no += 1;
			load_track(index_no);
			playsong();
		}
	}
}