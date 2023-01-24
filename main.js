let tab = ["1","2","3","4","5","6","7","8","9","10","11","12","13","14","15"],tabverif=["1","2","3","4","5","6","7","8","9","10","11","12","13","14","15"];
const buttons =[...document.querySelectorAll('.btnGame')];
const btnMelanger = document.getElementById('melanger');
const btnSend = document.getElementById('send');
const inputs = [...document.querySelectorAll('input')];
const container = document.getElementById('grid-container');
let r = document.querySelector(':root');
console.log(tabverif)

function rndm (vMin,VMax){
    return Math.floor(Math.random() * (VMax+1 - vMin) + vMin);
}

function melanger(){
    let nbr = 0,fin=tab.length;
    while(nbr<fin){
        buttons[nbr].textContent = tab.splice(rndm(0,tab.length-1),1);
        nbr++;
    }
}

function verif (){
    let test =false
    for (let i =0;i<tabverif.length;i++){
        if (buttons[i].textContent == tabverif[i]){
            test=true;
        }
        else{
            return;
        }
    }
    if(test){
        alert('bravo');
    }
}


function cornerTopLeft (btnActeur){
    if(buttons[btnActeur+1].textContent == ""){
        echangeBtn(btnActeur,btnActeur+1);
    }
    else if (buttons[btnActeur+4].textContent == ""){
        echangeBtn(btnActeur,btnActeur+4);
    }
}
function cornerBottomLeft (btnActeur){
    if(buttons[btnActeur+1].textContent == ""){
        echangeBtn(btnActeur,btnActeur+1);
    }
    else if (buttons[btnActeur-4].textContent == ""){
        echangeBtn(btnActeur,btnActeur-4);
    }
}
function cornerTopRight (btnActeur){
    console.log(btnActeur)
    if(buttons[btnActeur-1].textContent == ""){
        echangeBtn(btnActeur,btnActeur-1);
    }
    else if (buttons[btnActeur+4].textContent == ""){
        echangeBtn(btnActeur,btnActeur+4);
    }
}
function cornerBottomRight (btnActeur){
    if(buttons[btnActeur-1].textContent == ""){
        echangeBtn(btnActeur,btnActeur-1);
    }
    else if (buttons[btnActeur-4].textContent == ""){
        echangeBtn(btnActeur,btnActeur-4);
    }
}
function topMid (btnActeur){
    if(buttons[btnActeur-1].textContent == ""){
        echangeBtn(btnActeur,btnActeur-1);
    }
    else if (buttons[btnActeur+1].textContent == ""){
        echangeBtn(btnActeur,btnActeur+1);
    }
    else if (buttons[btnActeur+4].textContent == ""){
        echangeBtn(btnActeur,btnActeur+4);
    }
}
function leftMid(btnActeur){
    if(buttons[btnActeur+1].textContent == ""){
        echangeBtn(btnActeur,btnActeur+1);
    }
    else if (buttons[btnActeur+4].textContent == ""){
        echangeBtn(btnActeur,btnActeur+4);
    }
    else if (buttons[btnActeur-4].textContent == ""){
        echangeBtn(btnActeur,btnActeur-4);
    }
}
function midButton(btnActeur){
    if(buttons[btnActeur+1].textContent == ""){
        echangeBtn(btnActeur,btnActeur+1);
    }
    else if(buttons[btnActeur-1].textContent == ""){
        echangeBtn(btnActeur,btnActeur-1);
    }
    else if (buttons[btnActeur+4].textContent == ""){
        echangeBtn(btnActeur,btnActeur+4);
    }
    else if (buttons[btnActeur-4].textContent == ""){
        echangeBtn(btnActeur,btnActeur-4);
    }
}
function rightMid(btnActeur){
    if(buttons[btnActeur-1].textContent == ""){
        echangeBtn(btnActeur,btnActeur-1);
    }
    else if (buttons[btnActeur+4].textContent == ""){
        echangeBtn(btnActeur,btnActeur+4);
    }
    else if (buttons[btnActeur-4].textContent == ""){
        echangeBtn(btnActeur,btnActeur-4);
    }
}
function bottomMid (btnActeur){
    if(buttons[btnActeur-1].textContent == ""){
        echangeBtn(btnActeur,btnActeur-1);
    }
    else if (buttons[btnActeur+1].textContent == ""){
        echangeBtn(btnActeur,btnActeur+1);
    }
    else if (buttons[btnActeur-4].textContent == ""){
        echangeBtn(btnActeur,btnActeur-4);
    }

}

const echangeValeur =(var1,var2) =>[var2,var1];

function echangeBtn  (var1,var2){
    [buttons[var1].textContent,buttons[var2].textContent]=echangeValeur(buttons[var1].textContent,buttons[var2].textContent);
}

container.addEventListener('click',(e)=>{
    let keyPush =Number(e.target.dataset.key);
    if(keyPush<=3){
        switch(keyPush){
            case 0:
                cornerTopLeft(Number(keyPush));
                break
            case 3:
                cornerTopRight (Number(keyPush));
                break;
            default:
                topMid(Number(keyPush));
                break;
        }
    }
    else if(keyPush<=11){
        switch(keyPush){
            case 4:
                leftMid(Number(keyPush));
                break
            case 7:
                rightMid(Number(keyPush));
                break;
            default:
                midButton(Number(keyPush));
                break;
            case 8:
                leftMid(Number(keyPush));
                break
            case 11:
                rightMid(Number(keyPush));
                break;
        }
    }
    else if (keyPush<=15){
        switch(keyPush){
            case 12:
                cornerBottomLeft (Number(keyPush));
                break
            case 15:
                cornerBottomRight(Number(keyPush));
                break;
            default:
                bottomMid (Number(keyPush));
                break;
        }
    }
    verif ();
});

btnMelanger.addEventListener('click',()=>{
    melanger();
});

// btnSend.addEventListener('click',()=>{
//     // if(Number(inputs[1].value)>=8){
//     //     container.classList.remove(container.classList[0]);
//     //     container.classList.add('col8');
//     // }
// });
