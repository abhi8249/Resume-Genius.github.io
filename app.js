   3


const inputfields = document.querySelector('.input-fields')
const output = document.querySelector('.output')

let inputShow = true


async function TextEditor(element){
  const newEditor =  await ClassicEditor
  .create(element,{
    toolbar: [ 'heading', 'bold', 'italic', 'bulletedList', 'numberedList', 'blockQuote' ],
  } )
  return newEditor
 
}

let workExpdetails;
TextEditor(inputfields["workexp"]).then(nEditor=>{
  workExpdetails = nEditor
})
let Academic;
TextEditor(inputfields["academics"]).then(nEditor=>{
  Academic = nEditor
})
let skills;
TextEditor(inputfields["skills"]).then(nEditor=>{
  skills=nEditor;
})
let projects;
TextEditor(inputfields["projects"]).then(nEditor=>{
  projects=nEditor;
})
let achievements;
TextEditor(inputfields["achievements"]).then(nEditor=>{
  achievements=nEditor;
})





function toggle(){
var img = document.getElementsByClassName("img");

var newimg= document.getElementById('image');
img.src=URL.createObjectURL(newimg.files[0]);

    if(inputShow){
         inputfields.style.display = "none"
         inputShow = false 
         output.innerHTML=`
         <div class="all">
         <div class="heading">
           <div class="hero">
            <h1><b>${inputfields["name"].value}</b></h1>
            <h3><b>${inputfields["title"].value}</b></h3>
            <p>${inputfields["number"].value}</p>
            <p>${inputfields["mail"].value}</p>
            <p>${inputfields["address"].value}</p>
           </div>
           <div class="img"><img src="${img.src=URL.createObjectURL(newimg.files[0])}" class="imagepic"></div>
           </div>
           <div class="main">
               <div>
                 <center><h2>OBJECTIVE</h2></center>
                 <p>${inputfields["objective"].value}</p>
                <center> <h2>SKILLS</h2> </center>
                 <p>${skills.getData()}</p>
                <center> <h2>ACHIEVEMENTS</h2> </center>
                 <p>${achievements.getData()}</p>
               
               </div>
               <div>
               <center> <h2>WORK EXPERIENCE</h2></center>
                ${workExpdetails.getData()}
               <center> <h2>ACEMEDIC DETAILS </h2></center>
                 ${Academic.getData()}
               <center> <h2>PROJECTS</h2> </center>
                <p>${projects.getData()}</p>
                <center> <h2>CONTACT</h2> </center>
                <p>${inputfields["contact"].value}</p>
               </div>
           </div>
           <div class="btn">
              <button onclick="print()">Print Resume</button>
        </div>
        </div>
         `
    }else{
        inputfields.style.display =  "block"
        inputShow = true
        output.innerHTML=""
    }
}