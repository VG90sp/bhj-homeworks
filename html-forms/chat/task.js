const chatWidget = document.querySelector('.chat-widget');
const messages = document.querySelector('.chat-widget__messages');
const chatInput = document.querySelector('.chat-widget__input');

chatWidget.addEventListener('click', event => {
    chatWidget.classList.add('chat-widget_active');
})

document.addEventListener('keydown', event => {
    if (event.keyCode === 13) {
        const date = new Date();
        if (chatInput.value !== '') {
            messages.innerHTML += `
              <div class="message message_client">
                <div class="message__time"></div>
                <div class="message__text"></div>
              </div>`;

            const newMessages = document.querySelectorAll('.message_client');
            const message = newMessages[newMessages.length - 1];

            message.querySelector('.message__text').textContent = chatInput.value;
            message.querySelector('.message__time').textContent = date.getHours() + ':' + date. getMinutes();
            chatInput.value = '';
        } else {
            event.preventDefault(); 
        }
        messages.innerHTML += `
              <div class="message">
                <div class="message__time"></div>
                <div class="message__text"></div>
              </div>`;

        const BotTextMsg = ['Добрый день! До свидания!', 'Кто тут?', 'Вы говорите с роботом', 'Где ваша совесть?', 'Вы не купили ни одного товара, чтобы так с нами разговаривать'];
        const randomElement = BotTextMsg[Math.floor(Math.random() * BotTextMsg.length)];

        const newMessagesBot = document.querySelectorAll('.message');
        const messageBot = newMessagesBot[newMessagesBot.length - 1];

        messageBot.querySelector('.message__text').textContent = randomElement;
        messageBot.querySelector('.message__time').textContent = date.getHours() + ':' + date. getMinutes();
    }
})