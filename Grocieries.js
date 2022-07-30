document.body.style.backgroundColor = "silver";
document.getElementById("title").style.color = "green";

const upper = document.getElementByClassName("matunda")
for(let a=0;upper.length;a++){
    upper[a].style.textTransorm = "uppercase"
}

const newFruits = document.createElement("li")
const newtext = document.createTextNode("PawPaw");
newFruits.appendChild(newtext);
document.getElementById("fruList").appendChild(newFruits);

const node = document.createElement("li")
const TextNode = document.createTextNode("Cabbage");
newFruits.appendChild(Textnode);
document.getElementById("vegList").appendChild(node);




