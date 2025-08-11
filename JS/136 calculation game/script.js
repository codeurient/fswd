let number1, number2, operator, netice, cavab, dogru=0, yanlis=0;

number1  = document.querySelector('#number1');
number2  = document.querySelector('#number2');
operator = document.querySelector('#operator');
netice   = document.querySelector('#netice');
cavab    = document.querySelector('#cavab');
dogru    = document.querySelector('#dogru');
yanlis   = document.querySelector('#yanlis');


function randomEdedYaratmaq(min, max){
    let eded = Math.floor(Math.random()*(max-min))+min;
    return eded;
}

function yeniSual(){
    let emeliyyatlar = ["+", "-", "*", "/"];
    // 4 - 0 = 4 + 0 = 4 sonra meselen 4*0.4 = 1.6 ve Math.floor awagiya yuvarlaqlawdiraraq 1 edir
    // 1ci indeksimizde bizim cixma (-) emeliyyatidir.
    operator.textContent = emeliyyatlar[randomEdedYaratmaq(0, 4)];
    number1.textContent = randomEdedYaratmaq(0, 50);
    number2.textContent = randomEdedYaratmaq(0, 50);

    // qaliqsiz bolme islemi ucun yazdigimiz qayda
    if(operator.textContent == "/"){
        // while icerisinde TRUE yazdiqda sonsuz dongu elde etmiwik oluruq.
        while(true){
            number2.textContent = randomEdedYaratmaq(0, 50);
            // yuxarda sonsuz random ededler yaradiriq ve eger 1ci ededi 2ci edede boldukde 
            // qaliq qalmirsa dongunu sonlandir deyirik. 
            if(number1.textContent % number2.textContent == 0){
                break;
            }
        }
    }
}
window.onload = function(){
    yeniSual();
}


cavab.onclick = function(){
    let cvb, n1, n2;
    n1 = Number(number1.textContent);
    n2 = Number(number2.textContent);
    switch(operator.textContent){
        case '+':
            cvb = n1 + n2;
            break;
        case '-':
            cvb = n1 - n2;
            break;
        case '*':
            cvb = n1 * n2;
            break;
        case '/':
            cvb = n1 / n2;
            break;
        default:
            break;
    }
    if(netice.value == cvb) {
        //                  1 + 1 = 2 və.s
        dogru.textContent = Number(dogru.textContent)+1;
    } else {
        yanlis.textContent = Number(yanlis.textContent)+1;
    }
    yeniSual();
}