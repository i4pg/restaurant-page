import crabCake from './assest/menu/appetizers/crab.jpg'
import shrimpCocktail from './assest/menu/appetizers/cocktail.jpg'
import calamari from './assest/menu/appetizers/calamari.jpg'
import salamon from './assest/menu/Entrees/salamon.jpg'
import lobster from './assest/menu/Entrees/lobster-tails.jpg'
import shrimp from './assest/menu/Entrees/ShrimpScampi.jpg'
import lime from './assest/menu/sweet/Key Lime Pie.jpg'
import cheesecake from './assest/menu/sweet/Chesscake.jpg'
import chocolateCake from './assest/menu/sweet/Chocolate cake.jpg'

let menu = {
  'Appetizers': {
    'Crab Cakes': {
      description: 'Delicious crab cakes made with fresh crab meat, seasoned to perfection, and served with our signature aioli sauce.',
      price: 10.99,
      picture: crabCake,
    },
    'Shrimp Cocktail': {
      description: 'Jumbo shrimp served with our tangy cocktail sauce.',
      price: 12.99,
      picture: shrimpCocktail,
    },
    'Calamari Cakes': {
      description: 'Lightly breaded calamari served with our house-made marinara sauce.',
      price: 9.99,
      picture: calamari,
    }
  },
  'Entrees': {
    'Grilled Salmon': {
      description: 'Fresh salmon fillet grilled to perfection, served with your choice of side dish and vegetable.',
      price: 16.99,
      picture: salamon,
    },
    'Lobster Tail': {
      description: 'Succulent lobster tail broiled to perfection, served with drawn butter and your choice of side dish.',
      price: 29.99,
      picture: lobster,
    },
    'Shrimp Scampi': {
      description: 'Succulent shrimp sautéed in garlic butter and white wine, served over linguine.',
      price: 18.99,
      picture: shrimp,
    }
  },
  'Desserts': {
    'Key Lime Pie': {
      description: 'Tangy and sweet key lime filling in a graham cracker crust, topped with whipped cream and lime zest.',
      price: 7.99,
      picture: lime,
    },
    'Chesscake': {
      description: 'Creamy New York-style cheesecake with a graham cracker crust, topped with your choice of fruit topping.',
      price: 6.99,
      picture: cheesecake,
    },
    'Chocolate cake': {
      description: 'Rich, moist chocolate cake with layers of chocolate ganache and chocolate frosting.',
      price: 8.99,
      picture: chocolateCake,
    }
  },
}

export function showMenu() {
  let menuString = `
<section class="hero is-medium is-info is-bold" id="menu-hero">
  <div class="hero-body">
    <div class="container has-text-centered">
      <h1 class="title">Our Menu</h1>
    </div>
  </div>
</section>

<section class="section" id="subhero">
  <div class="container" id="menu">
`

  Object.keys(menu).forEach(category => {
    let string = `
<h2 class="title is-2 has-text-centered">${category}</h2>
    <div class="columns is-multiline dishes" id="${category}">
`
    Object.keys(menu[category]).forEach(dish => {
      string += `
      <div class="column is-one-third">
        <div class="card">
          <div class="card-image">
            <figure class="image is-4by3">
              <img src="${menu[category][dish].picture}" alt="${dish}">
            </figure>
          </div>
          <div class="card-content">
            <div class="media">
              <div class="media-content">
                <p class="title is-4">${dish}</p>
              </div>
            </div>
            <div class="content">
${menu[category][dish].description}
            </div>
          </div>
          <footer class="card-footer">
            <p class="card-footer-item">
              <span class="has-text-weight-bold is-size-5">
${menu[category][dish].price}
</span>
            </p>
          </footer>
        </div>
        </div>

`
    })

    string += `
      </div>
    </div>
`
    menuString += string
  })

  menuString += `  
</div>
</section>
`

  return menuString
}
