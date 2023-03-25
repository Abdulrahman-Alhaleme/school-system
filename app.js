
const form = document.getElementById("inForm");
form.addEventListener("submit", function (e) {
    e.preventDefault();
    let FullName = e.target.FullName.value;
    let Birth = e.target.Birth.value;
    let gender = e.target.gender.value;
    let phone = e.target.phone.value;
    let grade = e.target.grade.value;

    console.log(FullName, Birth, gender, phone, grade)
    render(FullName, Birth, gender, phone, grade)
})
function render(FullName, Birth, gender, phone, grade) {

    let tbody0 = document.getElementById("students-list")

    let tr0 = document.createElement("tr");
    let td1 = document.createElement("td");
    let td2 = document.createElement("td");
    let td3 = document.createElement("td");
    let td4 = document.createElement("td");
    let td5 = document.createElement("td");
    tbody0.appendChild(tr0)


    td1.textContent = FullName;
    td2.textContent = Birth;
    td3.textContent = gender;
    td4.textContent = phone;
    td5.textContent = grade;


    tr0.appendChild(td1)
    tr0.appendChild(td2)
    tr0.appendChild(td3)
    tr0.appendChild(td4)
    tr0.appendChild(td5)

}