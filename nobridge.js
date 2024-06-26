function gotem() {
    document.querySelectorAll('bridge').forEach(element => {
        const greatgrandparent = element.parentElement?.parentElement?.parentElement;
        if (greatgrandparent) {
            greatgrandparent.classList.add('blur');
        }
      });
      
}

setInterval(gotem, 1000)