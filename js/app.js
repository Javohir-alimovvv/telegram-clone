const userBlog = document.querySelector(".user_group");
const userChat = document.querySelector(".chat_lichka");
const closeChat = document.querySelector(".icon_arrow");

const powDiv = document.querySelector(".lichka_group");
const inputChat = document.querySelector(".input_text");
const form = document.querySelector(".form");

const Bot = [
    "salom",
    "qales",
    "qayerdasiz",
    "nima qivos",
    "dugonam bilan",
    "kuchada",
    "aylangani",
    "zerikdim",
    "biror joyga boraylik",
]

form.addEventListener("submit", (e) => {
    e.preventDefault();
  

    const val = inputChat.value;
    if(val === ""){
        return null
    }



    const el = document.createElement("div");
    const text = document.createElement("p");
    const date = document.createElement("p");

    text.innerText = val
    inputChat.value = ""
    el.classList.add("me")
    text.classList.add("mag_text")
    date.classList.add("msg_date")


    function updateClock() {
        const currentDate = new Date();
        const hours = currentDate.getHours().toString().padStart(2, '0');
        const minutes = currentDate.getMinutes().toString().padStart(2, '0');
        date.innerText = `${hours}:${minutes}`;
    }
    updateClock();
    
    setInterval(updateClock, 60000);


    powDiv.appendChild(el);
    el.appendChild(text);
    el.appendChild(date)

    botSend()

})

function botSend(){

    setTimeout(() => {
        let index = Math.floor(Math.random() * Bot.length)
    
    const el = document.createElement("div");
    const text = document.createElement("p");
    const date = document.createElement("p");

    text.innerText = Bot[index]
    el.classList.add("msg")
    text.classList.add("mag_text")
    date.classList.add("msg_date")


    function updateClock() {
        const currentDate = new Date();
        const hours = currentDate.getHours().toString().padStart(2, '0');
        const minutes = currentDate.getMinutes().toString().padStart(2, '0');
        date.innerText = `${hours}:${minutes}`;
    }
    updateClock();
    
    setInterval(updateClock, 60000);


    powDiv.appendChild(el);
    el.appendChild(text);
    el.appendChild(date)
    }, 3000)
}




userBlog.addEventListener("click", (e) => {
    e.preventDefault();
    userChat.style.display = "block"
});
closeChat.addEventListener("click", (e) => {
    e.preventDefault();
    userChat.style.display = "none"
})
