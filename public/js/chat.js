const socket = io()
socket.on("message", (msg) => {
    const counter = document.getElementById('msg').innerHTML = `<span> ${msg}</span>`
})