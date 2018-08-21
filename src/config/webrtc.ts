export const WEBRTC_CONFIGURATIONS = {
  iceServers: [
    // Information about ICE servers - Use your own!
    { url: "stun:stun.l.google.com:19302" },
    {
      urls: ["turn:13.250.13.83:3478?transport=udp"],
      username: "YzYNCouZM1mhqhmseWk6",
      credential: "YzYNCouZM1mhqhmseWk6"
    }
  ]
};