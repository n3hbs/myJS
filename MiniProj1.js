let grade = 74;

function gradeEvaluator(grade) {
  if (grade >= 90) {
    return "Excellent";
  }
  else if (grade >= 80 &&  grade <= 89 ){
    return  "Very Good";
  }
  else if (grade >= 75 && grade <= 79){
    return "Good";
  }
  else{
    return "Failed";
  }
}

console.log(gradeEvaluator(grade));
