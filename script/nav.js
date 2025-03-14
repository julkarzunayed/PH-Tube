
function loadCategory(){
    fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
    .then(res => res.json())
    .then(data => displayCategory(data.categories) )
}

function displayCategory (categories){
    const buttonContainer = document.getElementById("but-container")
    for(let category of categories){
        // console.log(category)
        const btnDiv = document.createElement("div");
        btnDiv.innerHTML = `
        <button 
            class="bg-gray-200 text-gray-500 rounded-md py-2 px-5 font-medium text-lg hover:bg-orange-600 hover:text-white">
                    ${category.category}
        </button>
        `
        buttonContainer.appendChild(btnDiv)
    }
    // console.log(categories)

}
loadCategory()