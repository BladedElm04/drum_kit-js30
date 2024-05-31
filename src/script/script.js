const SelectKeys = () => {
    const keys = document.querySelectorAll('.key')
    console.log(keys)

    document.addEventListener("keydown", (event) => {
        for(let i = 0; i < keys.length; i++){
            if(keys[i].firstElementChild.textContent.toLowerCase() === event.key){
                keys[i].classList.add("playing") 
            }
        }
    })

    document.addEventListener("keyup", (event) => {
        for(let i = 0; i < keys.length; i++){
            if(keys[i].firstElementChild.textContent.toLowerCase() === event.key){
                keys[i].classList.remove("playing") 
            }
        }
    })

}

const PlaySounds = () => {
    window.addEventListener("keydown", (event) => {
        const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`)
        if(!audio) return;
        audio.currentTime = 0;
        audio.play();
    })
}

PlaySounds()
SelectKeys()
