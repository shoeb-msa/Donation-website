
const messageInput = document.getElementById('message-input');
const sendButton = document.getElementById('send-button');
const chatMessages = document.getElementById('chat-messages');
const toggler = document.querySelector(".chatbot-toggler");

sendButton.addEventListener('click', () => {
    const messageText = messageInput.value.trim();
    if (messageText !== '') {
        const inputMessage = createMessage(messageText, 'input-message');
        chatMessages.appendChild(inputMessage);

        setTimeout(() => {
            let responseText = '';
            switch (messageText.toLowerCase()) {
                case 'hi':
                case 'hello':
                
                    responseText = 'Hello there!';
                    break;
                case 'how are you':
                    responseText = 'I am just a bot, but I am doing fine! Whats about you ?';
                    break;
                case 'name':
                case 'what is your name':
                    responseText = "I'm just a chatbot, so I don't have a name.";
                    break;
                case 'who are you':
                    responseText = "I'm a simple chatbot designed to assist you.";
                    break;
                    case 'how to donate':
                        responseText = "There are **two types of donations**:\n\n" +
                        "1️⃣ **Money** 💰 - Donate directly to our official account.\n" +
                        "2️⃣ **Items** 🎁 - Donate clothes, food, furniture, etc.\n\n" +
                        "What would you like to donate? Please type **'money'** or **'item'**.";
                    awaitingDonationType = true;
                        break;
                        case 'money':
                            responseText = "You can donate money directly to our official donation account. Every contribution makes a difference! 🙏";
                            break;
                            case 'item':
                            case 'items':
                                responseText = "Great! 😊 You can donate items like **clothes, food, furniture, or other supplies** in two ways:\n\n" +
                                    "✅ **Drop off items** at our donation center: CMR TECHNICAL CAMPUS.\n" +
                                    "✅ **Request a pickup:** Just enter your location in contact page, and our team will come to collect your donation. 🚚💙\n\n";
                                break;
                default:
                    responseText = "I'm sorry, I don't understand.";
                    break;
            }

            const outputMessage = createMessage(responseText, 'output-message');
            chatMessages.appendChild(outputMessage);
            chatMessages.scrollTop = chatMessages.scrollHeight;
        }, 500);

        messageInput.value = '';
    }
});

function createMessage(text, className) {
    const messageDiv = document.createElement('div');
    messageDiv.textContent = text;
    messageDiv.classList.add('message', className);
    return messageDiv;
}

toggler.addEventListener("click", () => document.body.classList.toggle("show-chatcontainer"));