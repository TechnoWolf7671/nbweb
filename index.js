const btn1 = document.getElementById("Download");
const btn2 = document.getElementById("Replit");
btn1.addEventListener("click", ()=>{
openTab('https://github.com/TechnoWolf7671/NB/archive/refs/heads/bot.zip');
});
btn2.addEventListener("click", ()=>{
openTab('https://replit.com/@T3chnxStudios/NB')
});
function openTab(url) {
			const link = document.createElement('a');
			link.href = url;
			link.target = '_blank';
			document.body.appendChild(link);
			link.click();
			link.remove();
};