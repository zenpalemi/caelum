var posicao = 0,
    controle = setInterval(rotacao, 3000),
    imagens = { 
        carros: [
            'assets/carro_01.jpg',
            'assets/carro_02.jpg',
            'assets/carro_03.jpg',
            'assets/carro_04.jpg',
            'assets/carro_05.jpg',
        ],
        frases: [
            'Eleito o melho carro do Brasil.',
            'Prazer ao dirigir.',
            'Economia e segurança.',
            'Sensação do momento.',
            'Muito confortável.'
        ]
    };

function rotacao() {
    posicao++;
    
    if(posicao >= imagens.carros.length) {posicao = 0;}
    
    troca(imagens.carros[posicao], imagens.frases[posicao]);
};

function troca(img, txt) {
    document.querySelector('img').src = img;
    document.querySelector('figcaption').textContent = txt;

    removeClasseActive();
    $('.bullets a').eq(posicao).addClass('active');
}

(function() {
    for(var i = 0; i < imagens.carros.length; i++) {
        $('<a>').html('&bull;').data('pos', i).appendTo('.bullets');
    }

    $('.bullets a').eq(posicao).addClass('active');
})();

$('.bullets a').on('click', function(){
    clearInterval(controle);
    
    removeClasseActive();
    $(this).addClass('active');
});

function removeClasseActive() {
    $('a.active').removeClass('active');
}
