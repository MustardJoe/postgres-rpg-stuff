class Group {
  constructor(input) {
    this.input = input;
    this.values = [];

    for(let i = 0; i < this.input.length; i++) {
      if(!this.values.includes(this.input[i])) {
        this.values.push(this.input[i]);
      }
    }
  }

  get() {
    console.log(this.values);
  }

}

let jon = new Group([1, 2, 3, 2, 3]);

jon.get();
