var chalk = require("chalk");

function GoodBye(name) {
  this.name = name;
}

GoodBye.prototype.sayGoodBye = function() {
  console.log("good bye", chalk.green(this.name));
};

module.exports = GoodBye;
