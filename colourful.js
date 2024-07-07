const actuallyerimd = erimd
erimd = function(content) {
    const text = content
        .replace(/(?:^|(?<=\s|<p>))#([\w-]+)(?![^<]*?<\/code>)/g, '<span style="color:#$1;">#$1</span>')
    return actuallyerimd(text);
}
