

/* ❤ */
/* это мой плагин на кнопку и навигацию */

(() => {
	let t = document.getElementById("cursor"),
		e = document.getElementById("cursor2"),
		i = document.getElementById("cursor3"),
		r = document.querySelectorAll(".hover-target")
	
		let body = undefined;
		let menu = undefined;
		let menuItems = undefined;
		let init = () => {
			body = document.querySelector("body");
			menu = document.querySelector('.menu-icon');
			menuItems = document.querySelectorAll('.nav__list-item');
			applyListeners();
		};
		let applyListeners = () => {
			menu.addEventListener('click', () => {
				return toggleClass(body, 'nav-active');
			});
		};
		let toggleClass = (element, stringClass) => {
			if (element.classList.contains(stringClass)) element.classList.remove(stringClass);
			else element.classList.add(stringClass);
		};
		init();
	

    document.getElementsByTagName("body").addEventListener("mousemove", (n) => {
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
