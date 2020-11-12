const btnlight = document.querySelector('#iconsharelight');
const btndark = document.querySelector('#iconsharedark');
const user = document.querySelector('.user');
const share = document.querySelector('.share');

var a = 0;

btnlight.addEventListener('click', function () {
    console.log(a);

    if (user.classList.contains(open)) {
        user.classList.add('open');
        share.classList.remove('open');
    }

    else if( a > 0 ){
        share.classList.remove('open');
        a = 0 ;
    }

    else {
        user.classList.remove('open');
        share.classList.add('open');
        a++;
    }
});

btndark.addEventListener('click', function () {

    if (user.classList.contains(open)) {
        share.classList.add('open');
        user.classList.remove('open');
    }

    else {
        share.classList.remove('open');
        user.classList.add('open');

    }
});

