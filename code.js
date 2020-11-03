class Elephant {
	constructor(pX, pY, pWeight ) {
		let aDiv = document.createElement("div");
        aDiv.style.position = "fixed";
        aDiv.style.top = pX + "px";
        aDiv.style.left = pY + "px";
        let atext = document.createElement("p");
        atext.innerHTML = "The Elephant Weight is:" + pWeight + "kg";
        let aImage = document.createElement("img");
        aImage.src = "./images/img01.jpg";
        aDiv.appendChild(aImage);
        aDiv.appendChild(atext);
        document.body.appendChild(aDiv);
	}
}
new Elephant(5, 10, 780);
new Elephant(200, 280, 660);
new Elephant(260, 10, 660);