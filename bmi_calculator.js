function bmiConverter(weight, height){
    let bmi = weight / Math.pow(height, 2);

    if(bmi <= 18.5){
        return("Underweight");
    } else if(bmi <= 25.0){
        return("Normal");
    } else if(bmi <= 30){
        return("Overweight");
    } else {
        return("Obese");
    }
}

/* other solutions */

const bmi = (w, h, bmi = w/h/h) =>  bmi <= 18.5 ? "Underweight" :
                                    bmi <= 25 ? "Normal" :
                                    bmi <= 30 ? "Overweight" : "Obese";

function bmi(weight, height) {
  
var bmi  = weight/(height*height);

 return bmi < 18.5 ? "Underweight" : bmi <=25 ? "Normal" : bmi <= 30 ? "Overweight" : "Obese";

}

function bmi(weight, height) {
  var formula = (weight / Math.pow(height, 2));
  switch (true) {
    case formula <=18.5:
    return 'Underweight';
    case formula <=25.0:
    return 'Normal';
    case formula <=30:
    return 'Overweight';
    default:
    return 'Obese';
    
  }
}
