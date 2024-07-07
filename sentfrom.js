// thanks arrow for basically everything :3
const actuallysendpost = sendpost;
sendpost = function() {
  const msgbox = document.getElementById('msg');
  if (msgbox.disabled || msgbox.value.trim() === "") return;
  // for future plugins of this kind PLEASE ADD THIS
  const ua = navigator.userAgent;
  if (!msgbox.value.includes(ua)) {
    msgbox.value += ` 
***
###### Sent from ${ua}`;
  }
  
  actuallysendpost();
}
