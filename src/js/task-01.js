const getElementItem = document.querySelectorAll('.item');
console.log(`Number of categories:: ${getElementItem.length}`);

getElementItem.forEach(element => {
	const getElementTitle = element.querySelector('h2');
	const getElementLi = element.querySelectorAll('li');
	console.log('');//Разделение пустыми строками для удобстра чтения
	console.log(`Category: ${getElementTitle.textContent}`);
	console.log(`Elements: ${getElementLi.length}`);
});