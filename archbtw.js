const actuallysendpost = sendpost
sendpost = function() {
  const msgbox = document.getElementById('msg');
  if (msgbox.disabled) return;
  if (!msgbox.value.includes("i use arch btw")) {
    msgbox.value += " i use arch btw"
  };
  actuallysendpost()
} 
