function bmiCalculator(weight, height) {
  var bmi = Math.floor(weight / Math.pow(height, 2));
  return Math.round(bmi);
}

var bmi = bmiCalculator(65, 1.8);
