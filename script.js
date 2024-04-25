const emojis = [
    '<i class="house fa-solid fa-house"><p class="paragraph">house</p></i>',
    '<i class="house fa-solid fa-house"><p class="paragraph">house</p></i>',
    '<i class="fa-solid fa-cloud"><p class="paragraph">cloud</p></i>',
    '<i class="fa-solid fa-cloud"><p class="paragraph">cloud</p></i>',
    '<i class="fa-brands fa-discord"><p class="paragraph">discord</p></i>',
    '<i class="fa-brands fa-discord"><p class="paragraph">discord</p></i>',
    '<i class="fa-solid fa-music"><p class="paragraph">music</p></i>',
    '<i class="fa-solid fa-music"><p class="paragraph">music</p></i>',
    '<i class="fa-solid fa-face-smile"><p class="paragraph">smile</p></i>',
    '<i class="fa-solid fa-face-smile"><p class="paragraph">smile</p></i>',
    '<i class="fa-solid fa-plane"><p class="paragraph">plane</p></i>',
    '<i class="fa-solid fa-plane"><p class="paragraph">plane</p></i>',
    '<i class="fa-solid fa-tree"><p class="paragraph">tree</p></i>',
    '<i class="fa-solid fa-tree"><p class="paragraph">tree</p></i>',
    '<i class="fa-solid fa-thumbtack"><p class="paragraph">thumb</p></i>',
    '<i class="fa-solid fa-thumbtack"><p class="paragraph">thumb</p></i>'
];
var shuf_emojis = emojis.sort(() => (Math.random() > .5) ? 2 : -1);
for (var i = 0; i < emojis.length; i++) {
    let box = document.createElement('div');
    box.className = 'item';
    box.innerHTML = shuf_emojis[i];

    box.onclick = function () {
        this.classList.add('boxOpen');
        
        setTimeout(function () {
            if (document.querySelectorAll('.boxOpen').length > 1) {
                if (document.querySelectorAll('.boxOpen')[0].innerHTML == document.querySelectorAll('.boxOpen')[1].innerHTML) {

                    document.querySelectorAll('.boxOpen')[0].classList.add("boxMatch");
                    document.querySelectorAll('.boxOpen')[1].classList.add("boxMatch");


                    if (document.querySelectorAll('.boxMatch').length == emojis.length) {
                        let congrats = document.createElement('div');
                        congrats.className = "congrats";
                        congrats.innerText = "Congratulations!";
                        document.querySelector('.container').appendChild(congrats);
                    } else {
                        document.querySelectorAll('.boxOpen')[1].classList.remove("boxOpen");
                        document.querySelectorAll('.boxOpen')[0].classList.remove("boxOpen");
                    }
                }else{
                    document.querySelectorAll('.boxOpen')[1].classList.remove("boxOpen");
                    document.querySelectorAll('.boxOpen')[0].classList.remove("boxOpen");
                }
            }
        }, 1000)
    }

    document.querySelector('.game').appendChild(box);
}