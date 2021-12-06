let galleryProducts = document.querySelectorAll('.gallery_product');

let filterButton = document.querySelectorAll('.filter-button');
let filterAll = document.querySelector('#filter-all');

filterAll.addEventListener('click', function () {
    galleryProducts.forEach(photo => {
        photo.style.display = 'block';
    });
});

filterButton.forEach(button => {
    button.addEventListener('click', function () {
        // attribute from button
        let categoryFromButton = this.getAttribute('category');

        galleryProducts.forEach(photo => {
            // attribute form picture
            if (photo.getAttribute('category') == categoryFromButton) {
                photo.style.display = 'block';
            } else {
                photo.style.display = 'none';
            }
        });
    });
});




























// This is shopping cart
// let cart = []

// let addButton = document.querySelectorAll('.add-to-card')

// let shoppingBasket = document.querySelector('#shopping-cart')
// let emptyBasket = document.querySelector('#btn-empty-basket')

// addButton.forEach(function(btn, index) {
//     btn.addEventListener('click', function() {
//         let p_id = this.getAttribute('product_id')

//         updateBasket(p_id)
//     })
// })

// localStorage.removeItem('cart');

// /**
//  * This function updates the shopping cart
//  * @param {Number} p_id represents product ID from database
//  * @return something
//  */
// function updateBasket(p_id) {
//     cart.push(fruits[p_id])

//     localStorage.setItem('cart', JSON.stringify(cart));
// }
