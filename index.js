const gridContainer = document.querySelector(".grid-container");
const shuffleButton = document.getElementById("shuffleBtnId");
const sortButton = document.getElementById("sortBtnId");
const randomGridValues = [9, 4, 3, 5, 6, 7, 2, 1, 8];

shuffleButton.addEventListener('click', (e) => {
	shuffleGridItems(randomGridValues);
});
sortButton.addEventListener('click', (e) => {
	randomGridValues.sort();
	ClearOldLayout();
	CreateLayout(randomGridValues);
});
const  shuffleGridItems = (array) => {
	for (let i = array.length - 1; i >= 0; i--) {
		let j = Math.floor(Math.random() * (i + 1));
		let temp = array[i];
		array[i] = array[j];
		array[j] = temp;
	}
	ClearOldLayout();
	CreateLayout(array);
}

const ClearOldLayout = () => {
	const node = document.querySelector(".grid-container");
	let firstChild = node.firstChild;
	while (firstChild) {
		node.removeChild(firstChild);
		firstChild = node.firstChild;
	}
}

const CreateLayout = (array) => {
	const fragment = document.createDocumentFragment();
	array.forEach((val, i) => {
		let gridItem = document.createElement('div');
		gridItem.innerText = val;
		gridItem.classList.add('grid-item');
		gridItem.classList.add(`grid-item-${val}`);
		fragment.appendChild(gridItem);
	});
	gridContainer.appendChild(fragment);
}

CreateLayout(randomGridValues)

