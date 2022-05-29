var qrcode = new QRCode(document.getElementById("qrcode"), {
	text: "",
	width: 110,
	height: 110,
	colorDark : "#106faa",
	colorLight : "#ffffff",
	correctLevel : QRCode.CorrectLevel.H
});
