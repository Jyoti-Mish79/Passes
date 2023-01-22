import myJson from './MOCK_DATA.json' assert { type : 'json'}

let fsearch = document.getElementById('fsearch');
let firstsearch = document.getElementById('firstsearch');
let increasing = document.getElementById('increasing');
let marks = document.getElementById('marks');
let decreasing = document.getElementById('decreasing');
let passing = document.getElementById('passing');
let classy = document.getElementById('classy');
let gender = document.getElementById('gender');
let student = document.getElementById('student');
console.log(myJson);
function loadData (data) {
    student.innerHTML = "";
    data.map((item) =>{
        let litem = document.createElement("tr");
        litem.innerHTML =`

        <td> ${item.id}</td>
        <td> ${item.first_name} ${item.last_name}</td>
        <td> ${item.gender}</td>
        <td> ${item.class}</td>
        <td> ${item.marks}</td>
        <td> ${item.passing}</td>
        <td> ${item.email}</td>`

        student.append(litem);

    })
}
 loadData(myJson);
gender.addEventListener('click', genderSort);
 increasing.addEventListener('click' , sortIncreasing);
 decreasing.addEventListener('click', sortDecreasing);
 marks.addEventListener('click', sortMarks);
 classy.addEventListener('click' , sortClassy);
 passing.addEventListener('click' , passingPass);
 firstsearch.addEventListener('click' , firstSearchBy);
 function sortIncreasing(){
    let increasingData = myJson.sort((a,b)=> a.first_name < b.first_name ? -1 : 1);
    loadData(increasingData);
 }
 function sortDecreasing(){
    let decreasingData = myJson.sort((a,b)=> a.first_name > b.first_name ? -1 : 1);
    loadData(decreasingData);
 }
 function sortMarks(){
    let increasingData = myJson.sort((a,b)=> a.marks < b.marks  ? -1 : 1);
    loadData(increasingData);
 }
 function sortClassy(){
    let classyData = myJson.sort((a,b)=> a.class < b.class  ? -1 : 1);
    loadData(classyData);
 }
 function passingPass(){
     let passingData = myJson.filter((item) => {
        item.passing ="Pass";
        return item.passing;
     })
     console.log(passingData);
    loadData(passingData);
 }

function firstSearchBy(){
    let s = fsearch.value;
    let matchedItems = myJson.filter((item) => {
        return item.first_name.includes(s);
        return item.last_name.includes(s);
        return item.email.includes(s);

    })
    console.log(matchedItems);
 loadData(matchedItems);
}
    
function genderSort(){
    let genderData = myJson.filter((item) => {
       if(item.gender == "Female")
       {
        item.gender="Female";
        return item.gender
       }
       else
       {
        item.gender="Male";
        return item.gender;
       }

    })
    console.log(genderData);
   loadData(genderData);
}
    