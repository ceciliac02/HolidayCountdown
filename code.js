{	

	//Holidays from html
	let newYears = document.getElementById("newYears");
	let valentine = document.getElementById("valentine");
	let patrick = document.getElementById("patrick");
	let easter = document.getElementById("easter");
	let mayo = document.getElementById("mayo");
	let july = document.getElementById("july")
	let halloween = document.getElementById("halloween");
	let thanksgiving = document.getElementById("thanksgiving");
	let christmas = document.getElementById("christmas");

	const holidayArray = [newYears, valentine, patrick, easter, mayo, july, halloween, thanksgiving, christmas];

	let holidayHTML = [];
	holidayHTML.push("New Years");
	holidayHTML.push("Valentine's Day");
	holidayHTML.push("St. Patrick's Day");
	holidayHTML.push("Easter");
	holidayHTML.push("Cinco de Mayo");
	holidayHTML.push("4th of July");
	holidayHTML.push("Halloween");
	holidayHTML.push("Thanksgiving");
	holidayHTML.push("Christmas");

	let images = [];
	images.push('holidayImages/newyears.jpg');
	images.push('holidayImages/valentines.jpg');
	images.push('holidayImages/patricks.jpg');
	images.push('holidayImages/easter.jpg');
	images.push('holidayImages/cinco.jpg');
	images.push('holidayImages/july.jpg');
	images.push('holidayImages/halloween.jpg');
	images.push('holidayImages/thanksgiving.jpg');
	images.push('holidayImages/christmas.jpg');

	//Setting holiday dates
	const newYearsDate = new Date(2022, 0, 1, 0, 0, 0, 0);
	const valentineDate = new Date(2022, 1, 14, 0, 0, 0, 0);
	const patrickDate = new Date (2021, 2, 17, 0, 0, 0, 0);
	const easterDate = new Date(2021, 3, 4, 0, 0, 0, 0);
	const mayoDate = new Date(2021, 4, 5, 0, 0, 0, 0);
	const julyDate = new Date(2021, 6, 5, 0, 0, 0, 0);
	const hallowDate = new Date(2021, 9, 31, 0, 0, 0, 0);
	const thanksDate = new Date(2021, 10, 25, 0, 0, 0, 0);
	const christmasDate = new Date(2021, 11, 24, 0, 0, 0, 0);

	const holidayDates = [newYearsDate, valentineDate, patrickDate, easterDate, mayoDate, julyDate, hallowDate, thanksDate, christmasDate];

	
	let countdownBody = document.getElementById("countdown");
	let holidayBanner = document.getElementById("holidayBanner");
	let holidayTimer;

	//Nested for loops iterates through arrays to allow all holiday buttons to be clicked and display the appropriate timer
	for (let i = 0; i < holidayArray.length; i++) {
		holidayArray[i].addEventListener('click', function () {
			for (let j = 0; j < holidayDates.length; j++) {
				clearTimeout(holidayTimer);
				document.querySelector(".mainBodyContainer").style.backgroundImage = "url(" + images[i] + ")";
				holidayBanner.innerHTML = holidayHTML[i];
				countdownBody.innerHTML = "Loading...";
				holidayTimer = setInterval(function () { countdownBody.innerHTML = timeRemaining(holidayDates[i]) }, 1000);
			}
		});
	}

	//Sets the amount of time remaining until the holiday and outputs the time
	function timeRemaining (holiday) {
		const currentTime = new Date();
		const currentMilliseconds = currentTime.getTime();
		const holidayMilliseconds = holiday.getTime();
		let millisecondsRemaining = holidayMilliseconds - currentMilliseconds;
		let daysRemaining = Math.round((((millisecondsRemaining / 1000) / 60) / 60) / 24);
		let hoursRemaining = 23 - currentTime.getHours();
		let minutesRemaining = 59 - currentTime.getMinutes();
		let secondsRemaining = 59 - currentTime.getSeconds();
		return `${daysRemaining} day(s) ${hoursRemaining} hour(s) ${minutesRemaining} minute(s) ${secondsRemaining} second(s) left`;
	}


}