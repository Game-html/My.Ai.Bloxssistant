<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>My AI Assistant</title>
  <link href="style.css" rel="stylesheet"/>
</head>
<body>
  <div class="chat-container">
    <h1>💬 My AI Assistant</h1>
    <div id="chat-box"></div>
    <form id="chat-form">
      <input type="text" id="user-input" placeholder="Tulis pesan..." autocomplete="off" required />
      <button type="submit">Kirim</button>
    </form>
  </div>
  <script src="script.js"></script>
</body>
</html>
body {
  font-family: sans-serif;
  background: #f0f4f8;
  display: flex;
  justify-content: center;
  padding: 50px;
}
.chat-container {
  width: 100%;
  max-width: 500px;
  background: white;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0,0,0,0.1);
}
#chat-box {
  height: 300px;
  overflow-y: auto;
  border: 1px solid #ddd;
  padding: 10px;
  margin-bottom: 10px;
}
.message {
  margin-bottom: 10px;
}
.user {
  text-align: right;
  color: blue;
}
.ai {
  text-align: left;
  color: green;
}
form {
  display: flex;
}
input {
  flex: 1;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 6px;
}
button {
  padding: 10px;
  background: #007bff;
  color: white;
  border: none;
  margin-left: 5px;
  border-radius: 6px;
  cursor: pointer;
}
const form = document.getElementById("chat-form");
const chatBox = document.getElementById("chat-box");
const input = document.getElementById("user-input");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const userMessage = input.value;
  appendMessage(userMessage, "user");
  input.value = "";
  setTimeout(() => {
    const aiReply = generateAIReply(userMessage);
    appendMessage(aiReply, "ai");
  }, 1000);
});

function appendMessage(message, sender) {
  const div = document.createElement("div");
  div.classList.add("message", sender);
  div.textContent = message;
  chatBox.appendChild(div);
  chatBox.scrollTop = chatBox.scrollHeight;
}

function generateAIReply(message) {
  const replies = [
    "Menarik! Ceritakan lebih lanjut.",
    "Saya setuju dengan kamu!",
    "Bisa dijelaskan lebih spesifik?",
    "Saya di sini untuk membantu kamu!",
    "Apa kamu yakin?"
  ];
  return replies[Math.floor(Math.random() * replies.length)];
}
