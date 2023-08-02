let ladder = {
    step: 0,
    up() {
      this.step++;
    },
    down() {
      this.step--;
    },
    showStep: function() { // shows the current step
      console.log( this.step );
    },
    x: {
        r: 25,
    }
  };


  ladder.up();
  ladder.up();
  ladder.showStep();
  ladder.up();
  console.log(ladder.step);
  console.log(ladder.x.r)



