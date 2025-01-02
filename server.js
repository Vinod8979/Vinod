let form = document.querySelector("#form");
let bot = {
    TOKEN: "7298192690:AAGweKdWMvsjjRbvT2SXeOeDRD5fcEh35-M",
    chatID: "1080490092",
}

form.addEventListener("submit", e => {
    e.preventDefault();
    let name = document.querySelector("#name").value;
    let contact = document.querySelector("#contact").value;
    let message = document.querySelector("#some_message").value;

    let fullMessage = `Name: ${name}\nContact: ${contact}\nMessage: ${message}`;

    fetch(`https://api.telegram.org/bot${bot.TOKEN}/sendMessage?chat_id=${bot.chatID}&text=${encodeURIComponent(fullMessage)}`, {
        method: "GET"
    })
    .then(success => {
        alert("Message sent successfully!");
    }, error => {
        alert("Message not sent!");
        console.log(error);
    })
});
