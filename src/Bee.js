var Bee = function() {
  // this = Object.create()
  Grub.apply(this);
  this.age = 5;
  this.color = "yellow";
  this.job = "keep on growing";

};

Bee.prototype = Object.create(Grub.prototype);
Bee.prototype.constructor = Bee;
