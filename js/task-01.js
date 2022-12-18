const allCate = document.querySelectorAll('.item');
console.log('Number of categories:', allCate.length);

const titles = document.querySelectorAll('h2');
for(let cateName of titles){
console.log('Category:',cateName.textContent);
console.log('Elements:', cateName.nextSibling.nextSibling.children.length);
// console.log(cateName.nextSibling.length)
};