function say(greetings, honorifics) {
  console.log(greetings + " " + honorifics + this.name);
  return 1;
}

var tom = { name: "Tom Sawyer" };
var lsh = { name: "Lee Sang Hoon" };

var sayToLsh = say.bind(lsh);
sayToLsh("Hu", "Mr.");
