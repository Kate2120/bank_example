import './styles/styles.scss';


document.querySelectorAll('.items-nav li').forEach(item => {
	item.addEventListener('click', () => {
		let popap = item.querySelector('.popap');
		if (popap) {
			if (!popap.classList.contains('active')) {
				popap.classList.add('active');
			}
			else {
				popap.classList.remove('active');
			}

		}
	})

})

function timeCountDown() {
	let currentDate = new Date();
	let goalDate = new Date(2024, 0, 0o1);
	let diff = goalDate - currentDate;
	if (diff <= 0) {
		clearInterval(timer);
	}
	let days = diff > 0 ? Math.floor(diff / 1000 / 60 / 60 / 24) : "00";
	let hours = diff > 0 ? Math.floor(diff / 1000 / 60 / 60) % 24 : "00";
	let minutes = diff > 0 ? Math.floor(diff / 1000 / 60) % 60 : "00";
	let seconds = diff > 0 ? Math.floor(diff / 1000) % 60 : "00";
	let boxesTime = document.querySelectorAll('.item-time');
	boxesTime.forEach(box => {
		switch (box.classList[1]) {
			case 'days-item':
				box.innerHTML = days.toString().length === 1 ? "0" + days.toString() : days;
				break;
			case 'hours-item':
				box.innerHTML = hours.toString().length === 1 ? "0" + hours.toString() : hours;
				break;
			case 'minutes-item':
				box.innerHTML = minutes.toString().length === 1 ? "0" + minutes.toString() : minutes;
				break;
			case 'seconds-item':
				box.innerHTML = seconds.toString().length === 1 ? "0" + seconds.toString() : seconds;
				break;

		}
	})

}
let timer = setInterval(timeCountDown, 1000)
timeCountDown();

let slider = document.querySelector("#progress-scale")
let sliderValue = slider.value;

function progressScript() {

	slider.style.background = `linear-gradient(to right, #08ddeb ${sliderValue * 100 / slider.max}%, #ccc ${sliderValue}%)`;
}

progressScript();



function countGeneration() {
	let newValue = Number(slider.value) + Number(Math.random().toFixed(2));
	if (newValue >= Number(slider.max)) {
		slider.value = 0;
		newValue = 0;
	}

	slider.value = newValue;
	const tempSliderValue = slider.value;
	slider.textContent = tempSliderValue;
	const progress = (tempSliderValue / slider.max) * 100;
	slider.style.background = `linear-gradient(to right, #08ddeb ${progress}%, #ccc ${progress}%)`;
	let form = document.getElementById('form-progress-slider');
	form.querySelector('.box-info-value').innerHTML = newValue + " mln";
	form.querySelector('.box-info-value').style.left = "calc(" + slider.value * 100 / slider.max + "% - 55px)";

}
let differ = setInterval(countGeneration, 3000);
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/player_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
var player;
function onYouTubePlayerAPIReady(id) {
	player = new YT.Player(id, {
		height: '360',
		width: '640',
		videoId: id,
		playerVars: { 'autoplay': 1 }
	});
}
function removeElement(el) {
	el.remove();
}
document.querySelectorAll('.button-video').forEach(button => {
	button.addEventListener('click', (event) => {
		console.log('work');
		let body = document.querySelector('body');
		let popapBackground = document.createElement('div');
		popapBackground.classList.add('popap-background-style');
		body.appendChild(popapBackground);
		popapBackground.addEventListener('click', () => {
			removeElement(popapBackground);
		});
		let videoWrapper = document.createElement('div');
		videoWrapper.classList.add('video-wrapper');
		popapBackground.appendChild(videoWrapper);
		let closeButton = document.createElement('div');
		closeButton.classList.add('close-popap-but');
		videoWrapper.appendChild(closeButton);
		let videoContainer = document.createElement('div');
		videoContainer.classList.add('video-container');
		videoWrapper.appendChild(videoContainer);

		switch (event.target.getAttribute('id')) {
			case 'info-video':
				videoContainer.setAttribute('id', 'LvQossUx7ss');
				onYouTubePlayerAPIReady('LvQossUx7ss');

				break;
		}

	});
})

async function getProgressInfo() {
	let result = await fetch("https://katerynakoruma.com/api/progress/");
	let items = await result.json();
	items.forEach(item => {
		document.querySelector(".row-info-road-map").innerHTML += `
			<div class="item-info-road ${Number(item.progress) < 100 ? "inactive" : ""}">
				<div class="wrapper-info">
				  <div class="date-box">${item.date}</div>
				  <div class="title-box">${item.title}</div>
				<div class="description-box">${item.description}</div>
				</div>
				<div class="progress-box">
					<div class="progress-title">
						<div class="name">PROGRESS</div>
						<div class="persent">${item.progress}%</div>
					</div>
					<div class="progress-line">
					<div class="current-progress" style="width: ${item.progress}%"></div>
					<div class="post-title-progress"> ${Number(item.progress) < 100 ? "in progress" : "complited"}</div>
				</div>
			</div>`
	})
}
getProgressInfo();

async function getEmployeeManagement() {
	let result = await fetch("https://katerynakoruma.com/api/employees/department/management");
	let items = await result.json();
	items.forEach(item => {
		document.querySelector(".row-core-team").innerHTML += `
		<div class="item-team">
						<div class="info-box">
							<div class="box-photo">
								<img src="${item.picture}" alt="">
								<a href="mailto:test@gmail.com" class="mail-link"></a>
							</div>
							<div class="name">${item.name} ${item.lastname}</div>
							<div class="name-position">${item.job_title}</div>
							<div class="description">${item.job_title_description}</div>
						</div>
						<a href="" class="linkedin"></a>

					</div>
		`
	})
}

getEmployeeManagement();

async function getEmployeeDevelopers() {
	let result = await fetch("https://katerynakoruma.com/api/employees/department/development");
	let items = await result.json();
	items.forEach(item => {
		document.querySelector(".developers-row").innerHTML += `
		<div class="item-team">
						<div class="info-box">
							<div class="box-photo">
								<img src="${item.picture}" alt="">
								<a href="mailto:test@gmail.com" class="mail-link"></a>
							</div>
							<div class="name">${item.name} ${item.lastname}</div>
							<div class="name-position">${item.job_title}</div>
							<div class="description">${item.job_title_description}</div>
						</div>
						<a href="" class="linkedin"></a>

					</div>
		`
	})
}

getEmployeeDevelopers();

async function getAllEmployees() {
	let result = await fetch("https://katerynakoruma.com/api/employees/department/general");
	let items = await result.json();
	items.forEach(item => {
		document.querySelector(".row-employees").innerHTML += `
		<div class="item-team">
						<div class="info-box">
							<div class="box-photo">
								<img src="${item.picture}" alt="">
								<a href="mailto:test@gmail.com" class="mail-link"></a>
							</div>
							<div class="name">${item.name} ${item.lastname}</div>
							<div class="name-position">${item.job_title}</div>
							<div class="description">${item.job_title_description}</div>
						</div>
						<a href="" class="linkedin"></a>

					</div>
		`
	})
}

getAllEmployees();