const pianokeys = document.querySelectorAll('.key')

function playSound(newUrl){
    new Audio(newUrl).play()
}

pianokeys.forEach((pianoKey,i) => {
    const number = i<9 ? '0' + (i+1) : (i+1)
    const newUrl = 'piano-keys/key'+number+'.mp3'
    console.log(newUrl)
    pianoKey.addEventListener('click',()=> playSound(newUrl))
})