{	/*clockHTML = document.getElementById("clock");

	function setTime () {
		let currentTime = new Date();
		currentTime = currentTime.toLocaleTimeString();
		clockHTML.innerHTML = currentTime; 
	}

	let update = setInterval(setTime, 1000);*/

	/*Holidays:
	New Years Day
	Valentines Day
	St. Patrick's Day
	Easter
	Cinco de Mayo
	4th of July
	Halloween
	Thanksgiving
	Christmas
	*/

	//Holidays from index
	let newYears = document.getElementById("newYears");
	let valentine = document.getElementById("valentine");
	let patrick = document.getElementById("patrick");
	let easter = document.getElementById("easter");
	let mayo = document.getElementById("mayo");
	let july = document.getElementById("july")
	let halloween = document.getElementById("halloween");
	let thanksgiving = document.getElementById("thanksgiving");
	let christmas = document.getElementById("christmas");

	let countdownBody = document.getElementById("countdown");

	let currentTime = new Date();

	const newYearsDate = new Date(2022, 0, 1);
	const valentineDate = new Date(2022, 1, 14);
	const patrickDate = new Date (2021, 2, 17);
	const easterDate = new Date(2021, 3, 4);
	const mayoDate = new Date(2021, 4, 5);
	const julyDate = new Date(2021, 6, 5);
	const hallowDate = new Date(2021, 9, 31);
	const thanksDate = new Date(2021, 10, 25);
	const christmasDate = new Date(2021, 11, 24);

	countdownBody.innerHTML = currentTime;

	newYears.addEventListener('click', function () {changeCountdown(newYearsDate)});

	valentine.addEventListener('click', function () { changeCountdown(valentineDate)});

	patrick.addEventListener('click', function () { changeCountdown(patrickDate) });

	console.log(newYearsDate);

	function getYear (holiday) {
		let currentYear = currentTime.getFullYear();
		let holidayYear = holiday.getFullYear();
		let yearsRemaining = holidayYear - currentYear;
		return yearsRemaining;
	}

	function getMonth (holiday) {
		let currentMonth = currentTime.getMonth();
		let holidayMonth = holiday.getMonth();
		let monthRemaining = holidayMonth - currentMonth;
		if (monthRemaining <= 0) {
			monthRemaining += 12;
		}
		console.log(monthRemaining);
		return monthRemaining;
	}

	function getDay (holiday) {
		let currentDay = currentTime.getDate();
		let holidayDay = holiday.getDate();
		let daysRemaining = holidayDay - currentDay;
		if (daysRemaining < 0) {
			daysRemaining += 31;
		}
	}

}