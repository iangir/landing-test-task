const headerHeight = document.getElementById('header').offsetHeight;
const header = document.getElementById('header');
const burger = document.getElementById('burger');
const burgerCheckbox = document.getElementById('burger-checkbox');
const nav = document.getElementById('nav');
const navItems = document.querySelectorAll('.nav-item');
const mediaQuery = window.matchMedia('(max-width: 600px)');

document.addEventListener('scroll', (event) => {
	const scrollPosition = event.target.scrollingElement.scrollTop;
	if (scrollPosition > headerHeight) {
		header.classList.add('header--scrolled');
	} else if (!burgerCheckbox.checked) {
		header.classList.remove('header--scrolled');
	}
});

const showBurger = () => {
	burger.classList.remove('hidden');
	nav.classList.remove('nav');
	nav.classList.add('nav-burger');
	navItems.forEach((item) => {
		item.classList.remove('nav-item');
		item.classList.add('nav-item-burger');
	});
};

const hideBurger = () => {
	burger.classList.add('hidden');
	nav.classList.remove('nav-burger');
	nav.classList.add('nav');
	navItems.forEach((item) => {
		item.classList.remove('nav-item-burger');
		item.classList.add('nav-item');
	});
};

if (window.innerWidth < 600) {
	showBurger();
} else {
	hideBurger();
}

mediaQuery.addEventListener('change', (e) => {
	if (e.matches) {
		showBurger();
	} else {
		hideBurger();
	}
});

burgerCheckbox.addEventListener('change', (e) => {
	if (e.target.checked) {
		nav.classList.add('nav-burger--opened');
		header.classList.add('header--scrolled');
	} else {
		nav.classList.remove('nav-burger--opened');
		if (document.scrollingElement.scrollTop < headerHeight) {
			header.classList.remove('header--scrolled');
		}
	}
});

document.querySelectorAll('[id=order-btn]').forEach((btn) => {
	btn.addEventListener('click', () => {
		document.getElementById('sub').scrollIntoView({ behavior: 'smooth' });
	});
});
