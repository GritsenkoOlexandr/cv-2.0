
/* Audio */


let aud=document.querySelector('.audioset');


function muzon() {
aud.volume=0.05;
}

muzon();

let musoff=document.querySelector('.soundbtn');

musoff.addEventListener("click", ()=> {
    
    musoff.classList.toggle('muzonoff');

    if (musoff.classList.contains('muzonoff')) {
        musoff.innerHTML='<i class="fas fa-volume-mute"></i>';
        aud.volume=0.0;
    } else {
        musoff.innerHTML='<i class="fas fa-volume-off"></i>';
        aud.volume=0.05;
    }
})

/* Audio end */

/* lang */

/*
const select=document.querySelector('.clang').value;
const allLang = ['en', 'ru', 'ua'];

select.addEventListener('change', changeLang);






console.log(select);

/* lang end */

/* Avatar move */
const btnl=document.querySelector('.lftbtn');
const btnr=document.querySelector('.rtbtn');
let avas=document.querySelectorAll('.avatar');
let point=0;

btnl.addEventListener('click', leftmove);
btnr.addEventListener('click', rightmove);

moveAva();

function moveAva() {
    for (let i=0; i<avas.length; i++) {
        avas[i].classList.add('hidden')
    }
    avas[point].classList.remove('hidden');
}

function leftmove() {
    if (point+1==avas.length) {
        point=0;
    } else {
        point++;
    }
    moveAva();
}

function rightmove() {
    if (point-1==-1) {
        point=avas.length-1;
    } else {
        point--;
    }
    moveAva();
}

/* Avatar move end */

/* Company accordeon */


let cbtn=document.querySelectorAll('.company-btn');
let info=document.querySelectorAll('.company-info');

for (let j=0; j<info.length; j++) {
    info[j].classList.add('hidden');
}

for (let i=0; i<cbtn.length; i++) {
    cbtn[i].addEventListener('click', togglefunc);
}

function togglefunc() {
    this.classList.toggle('active');
    infa = this.nextElementSibling;
    infa.classList.toggle('hidden');

}


/* Company accordeon end */

/* Modal */

let modBtn=document.querySelector('.btn_in');
let modWin=document.querySelector('.modal_win');

function modalhide() {
    modWin.classList.add('hidden');
}

modBtn.addEventListener('click', modalhide)

/* Modal end */
