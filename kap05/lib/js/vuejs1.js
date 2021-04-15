var info = new Vue({
	el: '#info',
	data: {
		message: new Date()
	}
});
function uhrzeit() {
	info.message = new Date();
	setTimeout(uhrzeit, 1000);
}
uhrzeit();