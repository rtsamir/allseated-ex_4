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

let aData = [{"locX":220,"locY":40,"type":"elephant","weight":660},{"locX":20,"locY":240,"type":"rabbit","speed":44},{"locX":410,"locY":40,"type":"penguin","swimmingSpeed":660},{"locX":20,"locY":440,"type":"elephant","weight":660},{"locX":20,"locY":440,"type":"penguin","swimmingSpeed":660}];
console.log(aData);