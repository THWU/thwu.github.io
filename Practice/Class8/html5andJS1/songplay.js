window.onload = init;

function init() {
	var button = document.getElementById("addButton");
	button.onclick = handleButtonClick;
}


function handleButtonClick() {
	var textinput = document.getElementById("songTextInput");
	var songName = textinput.value;
	var li = document.createElement("li");
	li.innerHTML = songName;
	var playlist = document.getElementById("playlist");
	playlist.appendChild(li);
}