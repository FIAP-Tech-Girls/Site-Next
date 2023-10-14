const paraScrollar = document.getElementById('scroll');
const secaoAlvo = document.getElementById('conteudoHome');

paraScrollar.addEventListener('click', function() {
    secaoAlvo.scrollIntoView({ behavior: 'smooth', duration:1.8});
});


function abrirTechGirls(){
    window.open("techgirls.html")
}

function abrirProjeto(){
    window.open("projeto.html")
}