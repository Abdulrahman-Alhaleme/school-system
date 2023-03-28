
let arrData = [];
if (localStorage.arrData != null) {
    arrData = JSON.parse(localStorage.arrData);
    render();
}




const form = document.getElementById("inForm");
form.addEventListener("submit", function (e) {

    let FullName = e.target.FullName.value;
    let Birth = e.target.Birth.value;
    let gender = e.target.gender.value;
    let phone = e.target.phone.value;
    let grade = e.target.grade.value;
    let Major = e.target.Major.value

    let student = new Person(FullName, Birth, gender, phone, grade, Major);

    arrData.push(student);
    localStorage.setItem('arrData', JSON.stringify(arrData));
    render();
});
function Person(FullName, Birth, gender, phone, grade, Major) {
    this.FullName = FullName;
    this.Birth = Birth;
    this.gender = gender;
    this.phone = phone;
    this.grade = grade;
    this.Major = Major;
}














function render() {
    for (let i = 0; i < arrData.length; i++) {

        let sdcard = document.getElementById("students-list");
        let divContainer = document.createElement('div');
        let img0 = document.createElement('img');
        img0.src = `${arrData[i].userImg}`;
        let ul = document.createElement("ul");
        let li1 = document.createElement("li");
        li1.textContent = `Name: ${arrData[i].FullName}`;
        let li2 = document.createElement("li");
        li2.textContent = `Gender: ${arrData[i].gender}`;
        let li3 = document.createElement("li");
        li3.textContent = `Number: ${arrData[i].phone}`;
        let li4 = document.createElement("li");
        li4.textContent = `Grade: ${arrData[i].grade}`;
        let li5 = document.createElement("li");
        li5.textContent = `Major: ${arrData[i].Major}`;

        ul.appendChild(li1);
        ul.appendChild(li2);
        ul.appendChild(li3);
        ul.appendChild(li4);
        ul.appendChild(li5);

        divContainer.appendChild(img0);
        divContainer.appendChild(ul);
        sdcard.appendChild(divContainer);

    }
}
