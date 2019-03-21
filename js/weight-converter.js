const weightConverter = {
  init: function() {
      this.cacheDom();
      this.bindEvents();
  },
  cacheDom: function() {
      //Cache Dom Elements
      this.fromKg = document.getElementById("fromKg");
      this.fromLbs = document.getElementById("fromLbs");
      this.fromGrams = document.getElementById("fromGrams");
      this.fromOunces = document.getElementById("fromOunces");
      this.toKg = document.getElementById("toKg");
      this.toLbs = document.getElementById("toLbs");
      this.toGrams = document.getElementById("toGrams");
      this.toOunces = document.getElementById("toOunces");
      this.inputBox = document.getElementById("weightInput");
      this.convertBtn = document.getElementById("convertBtn");
  },
  bindEvents: function() {
    // Bind Events to event listeners
    this.fromKg.addEventListener('click', this.selectWeight);
  },
  selectWeight: function() {

      switch (event.target.id) {
          case "fromKg":
               //From Kg
               console.log('From Kg');
              break;
      
          default:
              break;
      }
      
    this.fromSelected = ''; 
    
    this.kgSelected = () => {
        this.fromSelected = "Kg";
    }
  },
  render: () => {
    //Render data
   
  },
  getInput: () => {
    console.log(this.fromKg);
  }
}
weightConverter.init();

// Function
// Convert from kg to kg
// convert from kg to lbs
// convert from kg to grams
// convert from kg to ounces

// convert from lbs to kg
// convert from lbs to lbs
// convert from lbs to grams
// convert from lbs to ounces

// convert from grams to kg
// convert from grams to lbs
// convert from grams to grams
// convert from grams to ounces

// convert from ounces to kg
// convert from ounces to lbs
// convert from ounces to grams
// convert from ounces to ounces
