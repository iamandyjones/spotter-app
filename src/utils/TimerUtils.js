export function renderTimerString(elapsed, runningSince) {
    
	let totalElapsed = elapsed;
	if (runningSince) {
		totalElapsed += Date.now() - runningSince;
	}
	return millisecondsToHuman(totalElapsed);

}

function millisecondsToHuman(ms) {
	
	const seconds = Math.floor((ms / 1000) % 60);
	const minutes = Math.floor((ms / 1000 / 60) % 60);
	const hours = Math.floor(ms / 1000 / 60 / 60);

	const humanised = [
		pad(hours.toString(), 2),
		pad(minutes.toString(), 2),
		pad(seconds.toString(), 2),
	].join(':');

	return humanised;

}

function pad(numberString, size) {

	let padded = numberString;
	while (padded.length < size) padded = `0${padded}`;
	return padded;
	
}

export function printDate(ms) {

	var d = new Date(ms);
	var days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

	return `${days[d.getDay()]} ${d.getDate()}/${(d.getMonth()+1)}/${d.getFullYear()}`;

}

export function printTime(ms) {

	var d = new Date(ms);
	return `${d.getHours()}:${d.getMinutes()}`;

}