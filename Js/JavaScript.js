window.addEventListener("load",mostrar);
function mostrar() {
  var x = document.getElementById('alerta');
  if (x.style.display === 'none') {
      x.style.display = 'block';
  } else {
      x.style.display = 'none';
  }
}


var index_actual = 0;

var lsFrutas = [
    {
        "nombre" : ["Cereza","Cherry","Cerezá"],
        "foto" : "img/cereza.png",
        "audios": ["media/Cereza.mp3","media/Cereza_ingles.mp3","media/Cereza_maya.aac"]
    },
    {
        "nombre" : ["Pitahaya","Dragon fruit","Wó Baken"],
        "foto" : "img/pitahaya.png",
        "audios": ["media/pitahaya.aac","media/pitahaya_ingles.aac","media/pitahaya_maya.aac"]
    },
    {
        "nombre" : ["Granada","Grenade","Granadá"],
        "foto" : "img/granada.png",
        "audios": ["media/Granada.aac","media/granada_ingles.aac","media/granada_maya.aac"]
    },
    {
    "nombre" : ["Limon","lemon","Súts"],
    "foto" : "img/limon.png",
    "audios": ["media/Limon.aac","media/Limon_ingles.aac","media/Limon_maya.aac"]
    },
    {
        "nombre" : ["Manzana","Aple","Manzaná"],
        "foto" : "img/manzana.png",
        "audios": ["media/Manzana.aac","media/Manzana_ingles.aac","media/Manzana_maya.aac"]
    },
    {
        "nombre" : ["Aguacate","Avocado","Hoóm"],
        "foto" : "img/palta.png",
        "audios": ["media/aguacate.aac","media/aguacate_ingles.aac","media/aguacate_maya.aac"]
    },
    {
        "nombre" : ["Papaya","Papaya","Puút"],
        "foto" : "img/papaya.png",
        "audios": ["media/papaya.aac","media/papaya_ingles.aac","media/papaya_maya.aac"]
    },
    {
        "nombre" : ["Pera","Pear","Perá"],
        "foto" : "img/pera.png",
        "audios": ["media/pera.aac","media/pera_ingles.aac","media/pera_maya.aac"]
    },
    {
        "nombre" : ["Tomate","Tomato","Paák"],
        "foto" : "img/tomate.png",
        "audios": ["media/Tomate.aac","media/Tomate_ingles.aac","media/Tomate_maya.aac"]
    },


]

var audio = new Audio("media/Cereza.mp3");

function reproducir_audio(index){
    var result = lsFrutas[index_actual]

    var audio_actual = result["audios"][index];

    console.log(result);
    console.log(audio_actual);

    audio.pause();
    audio = new Audio(audio_actual);
    
    audio.play();

    let nombre_actual = result["nombre"][index];

    document.getElementById("nombre_fruta").innerText = nombre_actual;

    document.getElementById('alerta').style.display = 'block';
}


function updateView(){
    var result = lsFrutas[index_actual]

   
    console.log(result);


    document.getElementById("img_presentando").src = result["foto"];

    document.getElementById('alerta').style.display = 'none';

    if(index_actual == lsFrutas.length -1){
        document.getElementById("next").disabled  = true;
    }else{
        document.getElementById("next").disabled  = false;
    }

    if(index_actual == 0){
        document.getElementById("prev").disabled  = true;
    }else{
        document.getElementById("prev").disabled  = false;
    }
}

function next(){
    index_actual ++;
    
    updateView();
}

function prev(){
    if(index_actual >0)
    {
        index_actual --;

        updateView();
    }
}
