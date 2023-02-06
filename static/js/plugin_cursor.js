

/* ❤ */
/* это мой плагин на кнопку и навигацию */


((/*обертка*/) => {
	let t = document.getElementById("cursor"),
		e = document.getElementById("cursor2"),
		i = document.getElementById("cursor3"),
		r = document.querySelectorAll(".hover-target")
	
	
//курсор
    document.getElementsByTagName("body")[0].addEventListener("mousemove", (n) => {
        t.style.left = n.clientX + "px", 
		t.style.top = n.clientY + "px", 
		e.style.left = n.clientX + "px", 
		e.style.top = n.clientY + "px", 
		i.style.left = n.clientX + "px", 
		i.style.top = n.clientY + "px"
    });
    
	n(t) = () => {
		e.classList.add("hover"), i.classList.add("hover")
	};
	s(t) = () => {
		e.classList.remove("hover"), i.classList.remove("hover")
	};
	s(); 
	
})(); 
