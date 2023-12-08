`use strict`;

export default function coercionPredict() {
  /* Type Conversion and Coercion */

  console.log(
    '9' - '5', // Prediction: 4
    '19' - '13' + '17', // Prediction: '617'
    '19' - '13' + 17, // Prediction: 23
    '123' < 57, // Prediction: false
    5 + 6 + '4' + 9 - 4 - 2, // Prediction: 1143
  );
}
