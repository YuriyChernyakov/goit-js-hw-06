const allCate = document.querySelectorAll('.item');
console.log('Number of categories:', allCate.length);

allCate.forEach(function (categories){
    console.log(`Category:`, categories.firstElementChild.textContent);
    console.log(`Elements:`, categories.lastElementChild.childElementCount);
});
