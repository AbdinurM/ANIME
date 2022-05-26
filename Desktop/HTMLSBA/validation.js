const Username = document.getElementById("Username")
const password = document.getElementById("password")
const form = document.getElementById("form")
const wrongelement = document.getElementById("wrong!")
form.addEventListener("sumbit", (e) => {
    let messages = []
    if (Username.value === '' || password.value == '')
    messages.push("Stop trying and move on")
    
})
if (messages.length > 0){
    e.preventDefault
    wrongelement.innerText = messages.join(',')
}
let text = "";

for (let i = 0; i < 5; i++) {
  text += "The number is " + i + "<br>";
}
