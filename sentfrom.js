// thanks arrow for basically everything :3
const actuallysendpost = sendpost;
sendpost = function() {
  const msgbox = document.getElementById('msg');
  if (msgbox.disabled) return;
  
  const ua = navigator.userAgent;
  if (!msgbox.value.includes(ua)) {
    msgbox.value += ` 
###### Sent from ${ua}`;
  }
  
  actuallysendpost();
}
