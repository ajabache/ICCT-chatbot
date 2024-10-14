document.addEventListener('DOMContentLoaded', () => {
    const getStartedBtn = document.getElementById('get-started');
    const chatContainer = document.getElementById('chat-container');
    const chatForm = document.getElementById('chat-form');
    const userInput = document.getElementById('user-input');
    const chatMessages = document.getElementById('chat-messages');

    getStartedBtn.addEventListener('click', () => {
        getStartedBtn.style.display = 'none';
        chatContainer.style.display = 'block';
        addBotMessage('Hi, I am ICCTNIAN SMART BOT. How can I assist you today?');
    });

    chatForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const message = userInput.value.trim();
        if (message) {
            addUserMessage(message);
            processUserInput(message);
            userInput.value = '';
        }
    });

    function addUserMessage(message) {
        const messageElement = document.createElement('div');
        messageElement.textContent = `You: ${message}`;
        chatMessages.appendChild(messageElement);
    }

    function addBotMessage(message) {
        const messageElement = document.createElement('div');
        messageElement.textContent = `Bot: ${message}`;
        chatMessages.appendChild(messageElement);
    }

    function processUserInput(input) {
        // Simple pattern matching
        const lowerInput = input.toLowerCase();
        if (lowerInput.includes('hello') || lowerInput.includes('hi') || lowerInput.includes('hey')) {
            addBotMessage('Hello! How can I help you today?');
        } else if (lowerInput.includes('prospectus')) {
            addBotMessage('The Academic PROSPECTUS helps you monitor your academic standing. Download it from your Student Portal, enter your grades, and identify subjects to enroll in. Keep it updated and attend our ADVISING activity during enrollment.');
        } else if (lowerInput.includes('sog') || lowerInput.includes('summary of grade')) {
            addBotMessage('The SOG (Summary of Grades) is a document listing all completed subjects and final grades. You need it for your final trimester, applying for internships, graduation applications, transferring, or for work, scholarships, or legal matters.');
        } else if (lowerInput.includes('appointment') || lowerInput.includes('credentials')) {
            addBotMessage('All school credential requests must be processed online with an appointment. Walk-ins at the ICCT Colleges – Cainta Main Campus Registrar Office without an appointment will not be prioritized. Please use the appropriate online request link based on your status.');
        } else if (lowerInput.includes('exam permit')) {
            addBotMessage('To generate an EXAM PERMIT NUMBER, log in to your Student Portal, click the "ACCOUNTS" menu, select "EXAMINATION PERMIT" in the top-right corner, then download or screenshot the permit to present to your professor.');
        } else {
            addBotMessage('I\'m sorry, I don\'t have information about that. Can you please rephrase your question or ask about something else?');
        }
    }
});