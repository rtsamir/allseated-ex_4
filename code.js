class Elephant {


    constructor(pWeight) {
        this.weight = pWeight;
        this.createElement();
    }
    //___________________________________________________

    createElement() {
        this.element = document.createElement("div");
        let atext = document.createElement("p");
        atext.innerHTML = "The Elephant Weight is:" + this.weight + "kg";
        let aImage = document.createElement("img");
        aImage.src = "./images/img01.jpg";
        this.element.appendChild(aImage);
        this.element.appendChild(atext);
        return this.element;
    }
}
//_____________________________________________________________________

let aList = document.getElementById("Animals_div");

let aAnimal1 = new Elephant(780);
let aAnimal2 = new Elephant(650);
let aAnimal3 = new Elephant(300);
let aAnimal4 = new Elephant(500);

aList.appendChild(aAnimal1.element);
aList.appendChild(aAnimal2.element);
aList.appendChild(aAnimal3.element);
aList.appendChild(aAnimal4.element);