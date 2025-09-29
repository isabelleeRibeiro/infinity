const prevButton = document.getElementById('prev')
const nextButton = document.getElementById('next')
const items = document.querySelectorAll('.item')
const dots = document.querySelectorAll('.dot')
const numberIndicator = document.querySelector('.numbers')
const list = document.querySelector('.list')

let active = 0;
const total = items.length
let timer;


function update(direction) {

    document.querySelector('.item.active').classList.remove('active')
    document.querySelector('.dot.active').classList.remove('active')

    if (direction > 0) {
        active = active + 1

        if (active === total) {
          active = 0
        }
    }

    else if (direction < 0) {
       active = active - 1

       if(active < 0){
         active = total - 1
       }
    }

    items[active].classList.add('active')
    dots[active].classList.add('active')

    numberIndicator.textContent = String(active + 1).padStart(2,'0')
}

prevButton.addEventListener('click', function () {
    update(-1)
})

nextButton.addEventListener('click', function () {
    update(1)
})


// Seleciona o botão "Tenho interesse"
const interestBtn = document.querySelector('.btn');

if (interestBtn) {
  interestBtn.addEventListener('click', function (e) {
    e.preventDefault();

    // Número em formato internacional (sem + ou espaços)
    const phone = '5582982111776';

    // Mensagem padrão que aparecerá no campo de texto do WhatsApp
    const message = 'Olá! Tenho interesse no Comfort Access da i.i.i Infinity. Poderia me informar mais detalhes, por favor?';

    // Monta a URL do WhatsApp (wa.me funciona bem para web e mobile)
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

    // Abre em nova aba/janela
    window.open(url, '_blank');
  });
}


// Seleciona o botão "Tenho interesse" em espanhol
const interestBtnEsp = document.querySelector('.btnEsp');

if (interestBtnEsp) {
  interestBtnEsp.addEventListener('click', function (e) {
    e.preventDefault();

    // Número em formato internacional (sem + ou espaços)
    const phone = '5582982111776';

    // Mensagem padrão que aparecerá no campo de texto do WhatsApp
    const message = '¡Hola! Estoy interesado en el Comfort Access de I.I.I Infinity. ¿Podría darme más detalles, por favor?';

    // Monta a URL do WhatsApp (wa.me funciona bem para web e mobile)
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

    // Abre em nova aba/janela
    window.open(url, '_blank');
  });
}


// Seleciona o botão "Tenho interesse" em Inglês
const interestBtnEng = document.querySelector('.btnEng');

if (interestBtnEng) {
  interestBtnEng.addEventListener('click', function (e) {
    e.preventDefault();

    // Número em formato internacional (sem + ou espaços)
    const phone = '5582982111776';

    // Mensagem padrão que aparecerá no campo de texto do WhatsApp
    const message = 'Hello! I am interested in the Comfort Access from I.I.I Infinity. Could you please give me more details?';

    // Monta a URL do WhatsApp (wa.me funciona bem para web e mobile)
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

    // Abre em nova aba/janela
    window.open(url, '_blank');
  });
}


