import { io } from "socket.io-client";

// const URL = "https://r-land-server-mugqodccoa-uw.a.run.app";
const URL = "localhost:8080";

export const socket = io(URL);
// export const socket = null;

// USE THIS WHEN WE HAVE AUTH WORKING PROPERLY
// export const socket = io(URL, {
//     autoConnect: false
//   });
