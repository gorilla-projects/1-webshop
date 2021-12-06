// Get all cols with class gallery_product to get access to all pictures
let galleryProducts = document.querySelectorAll('.gallery_product');

// Get all buttons that filter pictures
let filterButton = document.querySelectorAll('.filter-button');

// Get the filter button to restore filters to all
let filterAll = document.querySelector('#filter-all');

// Add event to the 'restore filters to all' button
filterAll.addEventListener('click', function () {
    // remember the filter that user clicked on
    localStorage.removeItem('catFilter');

    // Show all pictures because we've clicked on the 'All' button
    galleryProducts.forEach(photo => {
        photo.style.display = 'block';
    });
});

// Check if we memorized a filter
let catFilter = localStorage.getItem('catFilter');

// If we memorized a filter in local storage, than set this filter to all pictures
if (catFilter !== null) {
    updateFilter(catFilter);
}

// Set a 'click' event listner on all filter buttons
filterButton.forEach(button => {
    button.addEventListener('click', function () {
        // Get the 'category' attribure from the button
        let categoryFromButton = this.getAttribute('category');

        // Memorize this filter
        localStorage.setItem('catFilter', categoryFromButton);

        // Update visiblilty on all pictures
        updateFilter(categoryFromButton);
    });
});

// Function to set filters
function updateFilter(categoryToShow) {
    galleryProducts.forEach(photo => {
        
        if (photo.getAttribute('category') == categoryToShow) {
            photo.style.display = 'block';
        } else {
            photo.style.display = 'none';
        }
    });
}




























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
