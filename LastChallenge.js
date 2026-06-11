let age = 18;
let grade = 85;

function studentEligibilityChecker(age, grade){
    if (age >= 18 && grade >= 85){
        return "Eligible for Enrollment";
    }
    else{
        return "Not Eligible for Enrollment";
    }
}

console.log(studentEligibilityChecker(age, grade));
//