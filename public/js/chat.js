const socket = io()
socket.on("message", (msg) => {
    document.getElementById('msg').innerHTML = `<span> ${msg}</span>`
})

document.getElementById("sendMessage").addEventListener('submit', (e) => {
    e.preventDefault();
    const msg = document.getElementById("message")
    if (msg.value) {
        socket.emit('sendMessage', msg.value)
    }
})

socket.on("chatMessage",(msg)=>{
    const node = document.createElement("p")
    const text= document.createTextNode(msg)
    node.appendChild(text)
    document.getElementById("displayMsgs").appendChild(node)
})