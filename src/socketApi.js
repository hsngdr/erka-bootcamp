import { io } from "socket.io-client";

let socket;
export const init = () => {
  socket = io("https://chatapp.root.rocknjs.com", {
    transports: ["websocket"],
  });

  socket.on("connect", () => {
    console.log("Bağlantı gerçekleşti");
  });
};

export const sendMessage = (message) => {
  if (!socket) return;

  socket.emit("new-message", message);
};

export const subscribeToMessages = (callback) => {
  socket.on("receive-message", (message) => {
    console.log("New Message", message);
    callback(message);
  });
};
