var Hello = require("./hello")
var GoodBye = require("./goodbye");


var hello = new Hello("Mr. Me");
hello.sayHello();

var goodByeMe = new GoodBye("Mr. Me");
goodByeMe.sayGoodBye();

var goodByeDog = new GoodBye("Mr. Dog");
goodByeDog.sayGoodBye();

var goodByeCat = new GoodBye("Mr. Cat");
goodByeCat.sayGoodBye();

var goodByeChicken = new GoodBye("Mr. Chicken");
goodByeChicken.sayGoodBye();

var goodByeChicken1 = new GoodBye("Mr. Chicken 1");
goodByeChicken1.sayGoodBye();

var goodByeBanana = new GoodBye("Mr. Banana");
goodByeBanana.sayGoodBye();

var goodByeMouse = new GoodBye("Mr. Mouse");
goodByeMouse.sayGoodBye();
