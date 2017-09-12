const elements = document.querySelectorAll("*") ;
const filtered = [] ;

for (const el in elements) {
	if (el.innerText == "") {
		if (/blue/.test(el.innerHTML )) {
			filtered.push(el)
		}
	}
}

