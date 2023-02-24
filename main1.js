
 const myForm=document.querySelector('#my-form');
 const nameInput=document.querySelector('#name');
 const emailInput=document.querySelector('#email');
 const msg=document.querySelector('#msg');
 const userList=document.querySelector('#users');
 myForm.addEventListener('submit', onSubmit);
 function onSubmit(e){
    e.preventDefault();
    if(nameInput.value==='' || emailInput.value===''){
        alert('please enter all fields');
    }
    else{
    console.log(nameInput.value);
    console.log(emailInput.value);}

 }

//  localStorage.setItem('name','vise')
//  localStorage.setItem('email','vise1350@gmail.com')
//  console.log(localStorage.getItem('name'))
// console.log(localStorage.getItem('email'))
let myobj={
name:"vikram",
age: 56

};
let myObj_serialized = JSON.stringify(myobj);

localStorage.setItem("myobj",myObj_serialized)

let myObj_deserialized = JSON.parse(localStorage.getItem("myobj"));
console.log(myObj_deserialized);




