// write js code here if required
function setTimer()  {
	const now = new Date();

	const day = String(now.getDate()).padStart(2, '0');
	const month = String(now.getMonth()+1).padStart(2, '0');
	const year = now.getFullYear();

	
	const hour = String(now.getHours()).padStart(2, '0');
	const min = String(now.getMinutes()).padStart(2, '0');
	const sec = String(now.getSeconds()).padStart(2, '0');
	
	document.getElementById("timer").textContent =
		 `${day}/${month}/${year}, ${hours}:${minutes}:${seconds}`;
}
setTimer();
setInterval(setTimer, 1000); 
