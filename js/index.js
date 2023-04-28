const d = document.createElement('div');
d.classList.add('squers-wrapper');
d.setAttribute('id', 'squeres-wrapper');
//create element d and sets its atributes #squeres-wrapper and .squeres-wrapper

document.body.append(d);
//add d element to DOM structure
//document.getElementById("squeres-wrapper").textContent = "Wrapper text test";
//select element by id and sets its text content - no needed

function createSquere(number) {
	const d = document.createElement('div');
	if (number % 2 == 0) {
		d.classList.add('squere', 'squere2');
	} else {
		d.classList.add('squere', 'squere1');
	}
	return d;
}

for (let i = 0; i < 400; i++) {
	let w = document.querySelector('#squeres-wrapper');
	w.appendChild(createSquere(i));
}

const str =
	"T-Raperzy Znad Wisly - Ero-Disco.mp4,Purple Disco Machine - Don't Stop.mp4";
const n = str.includes(',');
if (n) {
	let nArr = str.split(',');
	document.getElementById('elvideo').innerHTML =
		"<video id='videoElement' width=100% controls controlsList='nodownload' playsinline><p>Tu navegador no funciona, actualizalo</p></video>";
	let videoPlayer = document.getElementById('videoElement');
	let noenSign = document.querySelector('.neon');
	videoPlayer.src = './video/' + nArr[0];
	i = 1;
	videoPlayer.onended = function () {
		if (i < nArr.length) {
			videoPlayer.src = './video/' + nArr[i];
			i++;
		} else {
			videoPlayer.src = './video/' + nArr[0];
			i++;
		}
	};

	noenSign.onclick = function () {
		if (i < nArr.length) {
			videoPlayer.src = './video/' + nArr[i];
			i++;
			videoPlayer.play();
		} else {
			videoPlayer.src = './video/' + nArr[0];
			i++;
			videoPlayer.play();
		}
	};
}
