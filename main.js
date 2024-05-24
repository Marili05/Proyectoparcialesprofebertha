const races = document.querySelector(".main");
console.log(races.offsetWidth)

function getScrollAmount() {
	let racesWidth = races.scrollWidth;
	return -(racesWidth - window.innerWidth);
}

const tween = gsap.to(races, {
	x: getScrollAmount,
	duration: 3,
	ease: "none",
});


ScrollTrigger.create({
	trigger:".wrapper",
	start:"top 0%",
	end: () => `+=${getScrollAmount() * -1 }`,
	pin:true,
	animation:tween,
	scrub:1,
	invalidateOnRefresh:true,
	markers:true
})

