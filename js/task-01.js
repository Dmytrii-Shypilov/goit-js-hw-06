const categories = document.querySelector('#categories')
const categoriesListLength = categories.children.length;
const categoryUnits = categories.querySelectorAll('.item')


console.log(`Number of categories: ${categoriesListLength}`)

for (const unit of categoryUnits) {
    console.log(`Category: ${unit.querySelector('h2').textContent}`)
    console.log(`Elements: ${unit.querySelectorAll('li').length}`)
}



