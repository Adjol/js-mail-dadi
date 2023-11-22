let guestMail = document.getElementById("guest_mail");

const sendButton = document.getElementById("send");
const invite = document.getElementById("invitation");



const mailList = ["esempio1@gmail.com", "esempio2@gmail.com", "esempio3@gmail.com", "esempio4@gmail.com" ,"esempio5@gmail.com", "esempio6@gmail.com", "esempio7@gmail.com","esempio8@gmail.com", "esempio9@gmail.com", ];

sendButton.addEventListener("click",

    

    function(){
        let newMail = guestMail.value

        if (mailList.includes(newMail)) {
            alert("Sei già registrato!!");
        } else {
            mailList.push(guestMail.value);
            // console.log("aggiunto agli invitati");
            invite.innerHTML += ("Ti abbiamo aggiunto agli invitati!")
        }




    }


);
