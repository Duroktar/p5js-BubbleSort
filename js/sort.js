function Sorter(array) {
  this.array = array;
  this.done = false;
  this.ofEach = 0;
  this.i = 0;
  this.tick = function () {
    if (this.done) {
      return;
    }
    i = this.i;
    if (this.ofEach < this.array.length) {
      if (this.i < this.array.length - (this.ofEach + 1)) {
        if (i > 0) {
          this.array[i-1].revertColor();
        }

        // Here we color the pairs being compared
        this.array[i].color = [255, 0, 200]
        this.array[i+1].color = [100, 50, 50]

        // This is where the actual sort operation takes
        // place.
        //
        // TODO this should be injected, ie:
        // new Sorter(pair, compareFunction);
        if (this.array[i].value > this.array[i+1].value) {

          // We've made it here, so the elements must be out
          // of order. We can swap the two array values using
          // `dereferencing`.
          [this.array[i], this.array[i+1]] = [this.array[i+1], this.array[i]];
        }

        // At the end of the iteration we increment i
        this.i++;
      } else {
        // Row done, reset `i`, increment `ofEach`,
        // set last item to red, and shake cell
        //
        // TODO create shake animation.
        if (i > 0) {
          // If i is 0 (ie: on the first cell), there is
          // no left-side neighbor cell, so we check
          // for that condition before reverting its
          // color
          this.array[i-1].revertColor();
        }
        this.array[i].color = [255, 0, 0];
        this.i = 0;
        this.ofEach++;
      }
    } else {
      this.done = true;
    }
  }
	this.reset = function() {
    this.done = true;
    for (let item of array) {
      item.revertColor();
    }
		this.array = shuffle(this.array);
    this.ofEach = 0;
    this.i = 0;
    this.done = false;
	}
}