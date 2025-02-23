

document.getElementById('button').addEventListener('click', ()=>{
    document.getElementById('plant').classList.remove('hide');
})


document.getElementById('reButton').addEventListener('click', ()=>{
    document.getElementById('plant').classList.add('hide');
})






// chat-Selection

document.getElementById('send-btn').addEventListener('click', function () {
    const input = document.getElementById('chat-input');
    const message = input.value.trim();
    if (message) {
      // Add user message to chat
      const userMessage = document.createElement('div');
      userMessage.className = 'message user';
      userMessage.textContent = message;
      document.getElementById('chat-messages').appendChild(userMessage);

      // Clear input
      input.value = '';

      // Simulate bot response
      setTimeout(() => {
        const botMessage = document.createElement('div');
        botMessage.className = 'message bot';
        botMessage.textContent = 'You said: ' + message;
        document.getElementById('chat-messages').appendChild(botMessage);

        // Scroll to bottom
        document.getElementById('chat-messages').scrollTop = document.getElementById('chat-messages').scrollHeight;
      }, 1000);
    }
  });