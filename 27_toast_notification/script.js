const button = document.getElementById("button");
const toast = document.getElementById("toast");

const messages = [
  "Message One",
  "Message Two",
  "Message Three",
  "Message Four",
];

const types = ["success", "error", "info"];

button.addEventListener("click", () =>
  createNotification("this is invalid data")
);

function createNotification(messages = null, type = null) {
  const notif = document.createElement("div");
  notif.classList.add("toast");
  notif.classList.add(type ?? getRandomType());

  notif.innerText = messages ?? getRandomMessage();
  toast.appendChild(notif);

  setTimeout(() => {
    notif.remove();
  }, 3000);
}

function getRandomMessage() {
  return messages[Math.floor(Math.random() * messages.length)];
}
function getRandomType() {
  return types[Math.floor(Math.random() * types.length)];
}
