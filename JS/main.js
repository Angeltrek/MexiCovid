const admin_button = document.getElementById('admin-button');
const admin_panel = document.querySelector('.admin-panel');
const admin_acces = document.querySelector('.admin-acces');
const acces = document.getElementById('acces');


admin_button.addEventListener('click', () => {
    admin_button.classList.toggle('click');

    if(admin_button.classList.contains('click')) admin_panel.classList.add('show');
    else {
        admin_panel.classList.remove('show');
        document.getElementById('user').value = '';
        document.getElementById('password').value = '';
        admin_acces.classList.remove('show');
    }
});

acces.addEventListener('click', () =>{
    var user = document.getElementById('user').value;
    var password = document.getElementById('password').value;

    if(user === "admin" && password === "administrator") {
        admin_acces.classList.add('show');
    }
    else alert('no se ha podido acceder');
});

//NavBar Section

const btnMenu=document.querySelector("#btnMenu");
const menu=document.querySelector("#menu");
const main_container = document.querySelector('.main-container') 

btnMenu.addEventListener("click",function(){
	menu.classList.toggle("mostrar");
});

const subMenuBTN=document.querySelectorAll(".submenu-btn");
//Se ocupa el ciclo for para detectar que submenu es y hacer la operacion
function nav () {
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
};

nav();

//Quiz section

var questionContainer = [
    {
        question : 'En qué fecha surgió el primer brote del COVID-19?',
        options : ['Febrero 2018','Enero 2019','Diciembre 2019','Enero 2020'],
        correctOption : 'Diciembre 2019'
    },
    {
        question : 'Cuáles son las etapas del semaforo epidemiologico?',
        options : ['Rojo Naranja Amarillo Verde','Naranja Amarillo Verde Azul','Rojo Naranja Lila Verde','Negro Naranja Amarillo Verde'],
        correctOption : 'Rojo Naranja Amarillo Verde'
    },
    {
        question : 'De dónde llegó el primer brote de COVID-19 a México?s',
        options : ['Italia','Estados Unidos','China','Ninguna de las anterioress'],
        correctOption : 'Italia'
    },
    {
        question : 'Felicidades, Haz terminado el Quiz!!',
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
});

function displayQuestion(){
     question.innerHTML = questionContainer[i].question;
     options,option1.innerHTML = questionContainer[i].options[0];
     options,option2.innerHTML = questionContainer[i].options[1];
     options,option3.innerHTML = questionContainer[i].options[2];
     options,option4.innerHTML = questionContainer[i].options[3];
};

function nextQuestion(){
    if(i < questionContainer.length-1){
        i += 1;
        displayQuestion();
        stat.innerHTML = i+1 + ' / ' + quiz_length;
    }
};

goNext.addEventListener('click', () => {
    nextQuestion();
});

restart.addEventListener('click', () => {
    res();
});

start.addEventListener('click', () =>{
    res();
    quiz_container.classList.toggle('show');
    stat.innerHTML = i+1 + " / " + quiz_length;
});

function res(){
    i = 0;
    correct = 0;
    stat.innerHTML = '1 / ' + quiz_length;
    results.innerHTML = correct + ' / ' + quiz_length;
    displayQuestion();
};

displayQuestion();

//suitable result

const suitablers = document.getElementById('suitablers');

suitablers.addEventListener('click', () => {
    var suitable_name = document.getElementById('suitable-name').value;
    var suitable_age = document.getElementById('suitable-age').value.toString();
    var msg = document.getElementById('msg');

    msg.innerHTML = 'Hola ' + suitable_name; 

    if(suitable_age >= '60') msg.innerHTML += ' Eres apto para aplicarte la vacuna contra el Covid-19, checa el centro de vacunacion más cercano';
    else if(suitable_age >= '50') msg.innerHTML += ' Ya no falta mucho, puedes ir a recibir la vacuna durante mayo';
    else if(suitable_age >= '40') msg.innerText += ' No te preocupes, tu rango de edad muestra menos complicaciones durante la enfermedad, puedes ir a recibir la vacuna durante mayo y junio';
    else if(suitable_age < '40') msg.innerText += ' No deberias de preocuparte, no te encuentras en el rango de edad de las complicaciones, espera indicaciones de la vacunación';

    document.querySelector('.suitable-message').classList.add('message-show');
});