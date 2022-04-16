const categories = document.querySelector('#categories')
const categoriesListLength = categories.children.length;
const categoryUnits = categories.querySelectorAll('.item')
const headings = document.querySelectorAll('h2')


console.log(`Number of categories: ${categoriesListLength}`)

console.log(`Category: ${headings[0].textContent}`)
console.log(`Elements: ${categoryUnits[0].querySelectorAll('li').length}`)

console.log(`Category: ${headings[1].textContent}`)
console.log(`Elements: ${categoryUnits[1].querySelectorAll('li').length}`)

console.log(`Category: ${headings[2].textContent}`)
console.log(`Elements: ${categoryUnits[2].querySelectorAll('li').length}`)



