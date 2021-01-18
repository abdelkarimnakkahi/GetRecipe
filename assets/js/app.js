const searchButton = document.getElementById('search-button');

searchButton.addEventListener('click', (e) => {
    e.preventDefault();
    resultHeading();
    getMeal();
});

function resultHeading() {
    let searchInput = document.getElementById('search-input')
    if (searchInput.value) {
        document.getElementsByTagName('h2')[0].textContent = `Results for ${searchInput.value}`;
    }
}

// https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood


function showSeeFood() {
    const seeFood = document.querySelector('#see-food');

    fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood')
        .then(response => response.json())
        .then(data => {
            let html = "";
            if (data.meals) {
                for (let i = 0; i < 8; i++) {
                    html += `
                    <div class="meal">
                    <div class="meal-img">
                        <img src="${data.meals[i].strMealThumb}" alt="meal">
                    </div>
                    <div class="meal-content">
                        <h3>${data.meals[i].strMeal}</h3>
                        <a href="#" class="get-meal">Get Recipe</a>
                    </div>
                </div>
                `;
                }
            }
            seeFood.innerHTML = html;
        });
}

function showBeef() {
    const beef = document.querySelector('#beef');

    fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=beef')
        .then(response => response.json())
        .then(data => {
            let html = "";
            if (data.meals) {
                for (let i = 0; i < 6; i++) {
                    html += `
                    <div class="meal">
                    <div class="meal-img">
                        <img src="${data.meals[i].strMealThumb}" alt="meal">
                    </div>
                    <div class="meal-content">
                        <h3>${data.meals[i].strMeal}</h3>
                        <a href="#" class="get-meal">Get Recipe</a>
                    </div>
                </div>
                `;
                }
            }
            beef.innerHTML = html;
        });
}

function showDessert() {
    const dessert = document.querySelector('#dessert');

    fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=dessert')
        .then(response => response.json())
        .then(data => {
            let html = "";
            if (data.meals) {
                for (let i = 0; i < 4; i++) {
                    html += `
                    <div class="meal">
                    <div class="meal-img">
                        <img src="${data.meals[i].strMealThumb}" alt="meal">
                    </div>
                    <div class="meal-content">
                        <h3>${data.meals[i].strMeal}</h3>
                        <a href="#" class="get-meal">Get Recipe</a>
                    </div>
                </div>
                `;
                }
            }
            dessert.innerHTML = html;
        });
}

function getMeal() {
    let searchInput = document.getElementById('search-input');
    if (searchInput.value !== '') {console.log('ggggg');
        const meal = document.querySelectorAll('.meals-wrapper');
        const firstMealWrapper = meal[0];
        removeCategories();
        fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${searchInput.value}`)
            .then(response => response.json())
            .then(data => {
                let html = "";
                if (data.meals) {
                    data.meals.forEach(meal => {
                        html += `
                            <div class="meal">
                                <div class="meal-img">
                                    <img src="${meal.strMealThumb}" alt="meal">
                                </div>
                                <div class="meal-content">
                                    <h3>${meal.strMeal}</h3>
                                    <a href="#" class="get-meal">Get Recipe</a>
                                </div>
                            </div>
                       `;
                    });
                    // meal.classList.remove('notFound');
                }
                else {
                    html = "Sorry, we didn't find any meal!";
                    // meal.classList.add('notFound');
                }
                firstMealWrapper.innerHTML = html;
            });
    }
}

function removeCategories(){
    const meal = document.querySelectorAll('.meals-wrapper');
    const firstMealWrapper = meal[0];
    firstMealWrapper.innerHTML = '';
    if(meal[1] && meal[2]){
        meal[1].parentElement.parentElement.remove();
        meal[2].parentElement.parentElement.remove();
    }
}
    

window.onload = function () {
    showSeeFood();
    showBeef();
    showDessert();
};