const admin_button = document.getElementById('admin-button');
const admin_panel = document.querySelector('.admin-panel');
const acces = document.getElementById('acces');


admin_button.addEventListener('click', () => {
    admin_button.classList.toggle('click');

    if(admin_button.classList.contains('click')) admin_panel.classList.add('show');
    else {
        admin_panel.classList.remove('show');
        document.getElementById('user').value = '';
        document.getElementById('password').value = '';
    }
});

acces.addEventListener('click', () =>{
    var user = document.getElementById('user').value;
    var password = document.getElementById('password').value;

    if(user === "admin" && password === "administrator") alert('accedio');
    else alert('no se ha podido acceder');
});

//NavBar Section

const btnMenu=document.querySelector("#btnMenu");
const menu=document.querySelector("#menu");

btnMenu.addEventListener("click",function(){
	menu.classList.toggle("mostrar");

});

const subMenuBTN=document.querySelectorAll(".submenu-btn");
//Se ocupa el ciclo for para detectar que submenu es y hacer la operacion
for (var i = 0 ; i < subMenuBTN.length; i++) {
    subMenuBTN[i].addEventListener("click",function(){
                //Que solo se realize la accion cuando la pantalla sea menor a la de una PC
            if (window.innerWidth<1024) {
                //Del "submenu-btn" al submenu que le sigue, es decir a su hermano
                const subMENU=this.nextElementSibling;
                //Alto de eleemento
                const height= subMENU.scrollHeight;
                //la clase "desplegar" no existe pero se ocuppa para identificar si despliegue del submenu
            if (subMENU.classList.contains("desplegar")) {
                subMENU.classList.remove("desplegar");
                subMENU.removeAttribute("style");
            }else{
                subMENU.classList.add("desplegar");
                    //Se agrega el alto
                subMENU.style.height=height+"px";
            }
            
        }
    });

}

//Quiz section

var questionContainer = [
    {
        question : 'Hello?',
        options : ['No','No','Pancho','NO'],
        correctOption : 'Pancho'
    },
    {
        question : 'Hi?',
        options : ['Correct','No','No','No'],
        correctOption : 'Correct'
    },
    {
        question : 'No',
        options : ['No','Correct','No','No'],
        correctOption : 'Correct'
    },
    {
        question : 'No',
        options : ['No','Correct','No','No'],
        correctOption : 'Correct'
    },
    {
        question : 'Hello?',
        options : ['No','No','Correct','NO'],
        correctOption : 'Correct'
    },
    {
        question : 'Hi?',
        options : ['Correct','No','No','No'],
        correctOption : 'Correct'
    },
    {
        question : 'No',
        options : ['No','Correct','No','No'],
        correctOption : 'Correct'
    },
    {
        question : 'No',
        options : ['No','Correct','No','No'],
        correctOption : 'Correct'
    },
    {
        question : 'Congratulations you have finished the Quiz',
    },
];

const goNext = document.getElementById('nextQuestion');
const restart = document.getElementById('restart');
const start = document.getElementById('start');
var question = document.getElementById('question');
var stat = document.getElementById('stat');
var i = 0;
var correct = 0;
var quiz_length = questionContainer.length-1;
var quiz_container = document.querySelector('.quiz-container');
var results = document.getElementById('results');

var options  = [ 
    option1 = document.getElementById('option0'),  
    option2 = document.getElementById('option1'), 
    option3 = document.getElementById('option2'),  
    option4 = document.getElementById('option3')
];

options.forEach(getAns =>{
    getAns.addEventListener('click', () =>{
        if(getAns.innerText === questionContainer[i].correctOption){
            correct += 1;
            if(i < questionContainer.length-1) results.innerHTML = correct + ' / ' + quiz_length;
            else return;
            nextQuestion();
        }
        else{
            nextQuestion();
        }
    });
})

function displayQuestion(){
     question.innerHTML = questionContainer[i].question;
     options,option1.innerHTML = questionContainer[i].options[0];
     options,option2.innerHTML = questionContainer[i].options[1];
     options,option3.innerHTML = questionContainer[i].options[2];
     options,option4.innerHTML = questionContainer[i].options[3];
}

function nextQuestion(){
    if(i < questionContainer.length-1){
        i += 1;
        displayQuestion();
        stat.innerHTML = i+1 + ' / ' + quiz_length;
    }
}

goNext.addEventListener('click', () => {
    nextQuestion();
});

restart.addEventListener('click', () => {
    i = 0;
    correct = 0;
    stat.innerHTML = '1 / ' + quiz_length;
    results.innerHTML = correct + ' / ' + quiz_length;
    displayQuestion();
});

start.addEventListener('click', () =>{
    quiz_container.classList.toggle('show');
    stat.innerHTML = i+1 + " / " + quiz_length;
})

displayQuestion();