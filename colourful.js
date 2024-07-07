erimd = function(content) {
    const text = content
        .replace(/(?:^|(?<=\s|<p>))@([\w-]+)(?![^<]*?<\/code>)/g, '<span id="username" class="attachment" onclick="openUsrModal(\'$1\')">@$1</span>')
        .replace(/(?:^|(?<=\s|<p>))#([\w-]+)(?![^<]*?<\/code>)/g, '<span style="color:#$1;">#$1</span>')
        .replace(/&lt;:(\w+):(\d+)&gt;/g, '<img src="https://cdn.discordapp.com/emojis/$2.webp?size=96&quality=lossless" alt="$1" title="$1" class="emoji">')
        .replace(/&lt;a:(\w+):(\d+)&gt;/g, '<img src="https://cdn.discordapp.com/emojis/$2.gif?size=96&quality=lossless" alt="$1" title="$1" class="emoji">')
    return text;
}