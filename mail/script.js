let guestMail = document.getElementById("guest_mail")

const sendButton = document.getElementById("send")




const mailList = ["esempio1@gmail.com", "esempio2@gmail.com", "esempio3@gmail.com", "esempio4@gmail.com" ,"esempio5@gmail.com", "esempio6@gmail.com", "esempio7@gmail.com","esempio8@gmail.com", "esempio9@gmail.com", ];

sendButton.addEventListener("click",

    

    function(){
        let newMail = guestMail

        if (mailList.includes(newMail)) {
            console.log("esiste già");
        } else {
            mailList.push(guestMail.value);
            // console.log("aggiunto agli invitati");
        }



        for (let i = 0; i < mailList.length; i++) {
            console.log(mailList[i]);
        }
    }


);
