
const roles = ['Mafia', 'Doctor', 'Villager'];
const userRole = roles[Math.floor(Math.random() * roles.length)];
document.getElementById('role').textContent = 'Your role: ' + userRole;

const chat = document.getElementById('chat');
const input = document.getElementById('messageInput');

function sendMessage() {
  const text = input.value;
  if (text.trim() === '') return;
  const msg = document.createElement('div');
  msg.textContent = 'You: ' + text;
  chat.appendChild(msg);
  input.value = '';
}
