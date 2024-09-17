const formElement = document.getElementById('form-element')
const dataContainer = document.getElementById('data-container')

formElement.addEventListener('submit',(e)=>{
    e.preventDefault();
const formData =new FormData(e.target)
let fullName = formData.get('name')
let age = formData.get('age')
//Validating
if(!fullName || !age){
    alert('Please enter something')
    return;
}

let  allStudents = localStorage.getItem('student')
let parsedAllStudents;
if(!allStudents){
    parsedAllStudents = []
}else{
     parsedAllStudents = JSON.parse(allStudents)

}
console.log(parsedAllStudents,"One")
parsedAllStudents.push({
    fullName:fullName,
    age:age
})
  localStorage.setItem('student',JSON.stringify(parsedAllStudents))


})

window.addEventListener('load',()=>{
    let  allStudents = localStorage.getItem('student')
let parsedAllStudents = JSON.parse(allStudents)
    let newItems = parsedAllStudents.map((student,i)=>{
        return `<li><span>${student.fullName}</span>::::: <strong>${student.age} </strong> </li>`
    })
dataContainer.innerHTML = newItems;
})

