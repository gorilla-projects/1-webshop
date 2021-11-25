let fruits = [
    {
        image: 'apples.jpeg',
        name: 'Apples',
        color: 'yellow',
        stock: 20,
    },

    {
        image: 'avocados.jpg',
        name: 'Avocado\s',
        color: 'green',
        stock: 10,
    },

    {
        image: 'bananas.jpg',
        name: 'Banana',
        color: 'green',
        stock: 100,
    },
];

function fruitBowl(favorite) {
    for(let i = 0; i < fruits.length; i++) {
        console.log(fruits[i].name, i)
    }

    fruits.forEach(fruit => {
        console.log(fruit)
    })

    let countOfLoops = 120;

    console.log('end of while loop')
}

fruitBowl();