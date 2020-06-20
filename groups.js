class Group {
  constructor(input) {
    this.input = input;
    this.values = [];

    for(let i = 0; i < this.input.length; i++) {
      if(typeof this.input[i] !== 'number') {
        console.error(`ERROR: The data point '${this.input[i]}' is type ${typeof this.input[i]}.
        Data in a Group must be number-type.`);
      }
      if(!this.values.includes(this.input[i]) && typeof this.input[i] === 'number') {
        this.values.push(this.input[i]);
      }
    }
  }

  get() {
    console.log(this.values);
  }

}

let jon = new Group([1, 2, 3, 2, 3, 'baloon-man', 7]);

jon.get();
