button1.textContent = "Arahkan kursor ke sini";

const body = document.body;

const newText = document.createElement("h1");
newText.textContent = "Nama saya Luthfi";

function munculText() {
  button1.style.background = "red";
  newText.style.color = "black";
  body.append(newText);
}

function gantiWarna() {
  button1.style.background = "white";
  newText.style.color = "blue";
  body.append(newText);
}
