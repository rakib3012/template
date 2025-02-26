

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



  // date-and-time

  function updateDateTime() {
    const now = new Date();
  
    // Format the date and time
    const date = now.toLocaleDateString();
    const time = now.toLocaleTimeString();
  
    // Combine date and time
    const datetimeString = `${date} - ${time}`;
  
    // Update the content of the element with id "datetime"
    document.getElementById('datetime').innerHTML = datetimeString;
  }
  
  // Update the date and time every second
  setInterval(updateDateTime, 1000);
  
  // Initial call to display the date and time immediately
  updateDateTime();
  