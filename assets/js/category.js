function category() {
	const html = document.querySelector('.category-with-button');
	html.innerHTML = '';
	btns = [
		{category:'Экшен', url:''},
		{category:'Симулятор', url:''},
		{category:'Шутер', url:''},
		{category:'Хоррор', url:''},
	]

	for(let i = 0; i < btns.length; i++){
		html.insertAdjacentHTML('afterbegin', template(btns[i]))
	}

	function template(btn){
		return `
			<button class='btn' onclick='location.href="${btn.url}"'>${btn.category}</button>
		`
	}
}

category()