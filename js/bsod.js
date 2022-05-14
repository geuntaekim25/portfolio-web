var qrcode = new QRCode(document.getElementById("qrcode"), {
	text: "https://geuntae.kr/discord",
	width: 110,
	height: 110,
	colorDark : "#106faa",
	colorLight : "#ffffff",
	correctLevel : QRCode.CorrectLevel.H
});
