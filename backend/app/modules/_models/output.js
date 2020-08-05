"use strict";

function output() {
  this.status = "";
  this.data = [];
  this.message = "";
}

output.prototype.status = function (status) {
  this.status = status;
};
output.prototype.data = function (data) {
  this.data = data;
};
output.prototype.message = function (message) {
  this.message = message;
};
module.exports = output;
