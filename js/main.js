function hello(message) {
	// body...
	console.log("hello world!", message);
}

hello("Hector");

var navbar = {
	"home": {
	"url": "index.html",
	"heading": "Home"
	},
	"about": {
	"url": "about.html",
	"heading": "About Me"
	},
	"blog": {
	"url": "blog.html",
	"heading": "Blog"
	},
	"contact": {
	"url": "contact.html",
	"heading": "Contact Us"
	}
};
function navigationBar(pageID, logo) {
	console.log("pageID", pageID, logo, typeof navbar);
	if (typeof navbar === "object") {
		console.log("yes");
		for( var n in navbar){
			console.log("n -> ", n);
			console.log("navbar ->", navbar)
			document.getElementByID("navbarUL")
			.appendChild(
				document.createElement('li')
				)
			.setAttribute('class', 'item');
		var nav;
		if (pageID === "home") {
			//<a href="index.html#home">Home</a>
			nav = '<a href="'+navbar[pageID]+'#'+n+'>'+navbar[n].heading+'</a>';
		}
		document.getElementByTagName("li")[1].innerHTML = nav;

		} else {
			//<a href="about.html">About</a>
		console.log("error");
	}
}
navigationBar("home", "img/logo.png")	

