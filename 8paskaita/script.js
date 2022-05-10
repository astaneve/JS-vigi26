const salaryCheckerForm = document.querySelector("form");

salaryCheckerForm.addEventListener("submit", handleSalaryCheckerForm);
function handleSalaryCheckerForm(event) {
    event.preventDefault();
    
    const workingField = document.querySelector("select[name=workingField").value;
    const position = document.querySelector("input[name=position]").value;
    const gender = document.querySelector("input[name=gender]:checked").value;
    const experience = document.querySelector("input[name=experience]").value;
    console.log(position.value);
    console.log(workingField.value);
    console.log(gender.value);
    console.log(experience.value);

    //management-48000, lt-91000, construcyion 66000, pharmacy 128000
//woman gets 17% less then man
// 0-2 minus 50% 2-5, +5 plus 50%

if(workingField === "management") {
    const genderSalary = calculateGenderSalary(gender, 48000);
    const finalSalary = calculateExperienceSalary(experience, genderSalary);
alert(`Average salary is $${finalSalary}`);
} else if(workingField === "it") {
    const genderSalary = calculateGenderSalary(gender, 91000)
    const finalSalary = calculateExperienceSalary(experience, genderSalary);
    alert(`Average salary $${finalSalary}`);
} else if(workingField === "construction") {
    const genderSalary = calculateGenderSalary(gender, 66000)
    const finalSalary = calculateExperienceSalary(experience, genderSalary);
    alert(`Average salary $${finalSalary}`);
} else {
    const genderSalary = calculateGenderSalary(gender, 12800)
    const finalSalary = calculateExperienceSalary(experience, genderSalary);
    alert(`Average salary $${finalSalary}`);
    }
}

function calculateGenderSalary(gender, salary) {
    if(gender === "male") {
        return salary;
    } else if(gender === "female") {
        return salary * 0.83;
    } else {
        return salary * 0.91;
    }
}
// && - arba 4150
function calculateExperienceSalary(experience, salary) {
    const flooredExperience = Math.floor(experience);
    if(flooredExperience >= 0 && experience <= 2) {
        return salary * 0.5;
    } else if(flooredExperience >= 3 && flooredExperience <=5) {
        return salary;
    } else {
        return salary * 1.5;
    }
}