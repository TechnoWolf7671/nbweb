const btn1 = document.getElementById("youtubebutton");
const btn2 = document.getElementById("discordbutton");
btn1.addEventListener("click", ()=>{
openTab('https://www.youtube.com/channel/UCPoUt14jPtSjeZoaWqtNmpA')
});
btn2.addEventListener("click", ()=>{
openTab('https://discord.gg/9uW3gpKarU')
});
function openTab(url) {
			const link = document.createElement('a');
			link.href = url;
			link.target = '_blank';
			document.body.appendChild(link);
			link.click();
			link.remove();
};