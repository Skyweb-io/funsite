document.getElementById('no-btn').addEventListener('pointerover', move)
document.getElementById('yes-btn').addEventListener('click', yes)

function move() {
    var posX = Math.floor(Math.random() * 200)
    var posY = Math.floor(Math.random() * 200)
    document.getElementById('no-btn').style.transform = `translate(${posY}px, ${posX}px)`
}

function yes() {
    window.location.href = "yes.html"
}