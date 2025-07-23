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
