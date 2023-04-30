"use strict";
(self["webpackChunkrestaurant_page"] = self["webpackChunkrestaurant_page"] || []).push([["meny"],{

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "showMenu": () => (/* binding */ showMenu)
/* harmony export */ });
let menu = {
  'Appetizers': {
    'Crab Cakes': {
      description: 'Delicious crab cakes made with fresh crab meat, seasoned to perfection, and served with our signature aioli sauce.',
      price: 10.99,
      picture: "",
    },
    'Shrimp Cocktail': {
      description: 'Jumbo shrimp served with our tangy cocktail sauce.',
      price: 12.99,
      picture: "",
    },
    'Calamari Cakes': {
      description: 'Lightly breaded calamari served with our house-made marinara sauce.',
      price: 9.99,
      picture: "",
    }
  },
  'Entrees': {
    'Grilled Salmon': {
      description: 'Fresh salmon fillet grilled to perfection, served with your choice of side dish and vegetable.',
      price: 16.99,
      picture: "",
    },
    'Lobster Tail': {
      description: 'Succulent lobster tail broiled to perfection, served with drawn butter and your choice of side dish.',
      price: 29.99,
      picture: "",
    },
    'Shrimp Scampi': {
      description: 'Succulent shrimp sautéed in garlic butter and white wine, served over linguine.',
      price: 18.99,
      picture: "",
    }
  },
  'Desserts': {
    'Key Lime Pie': {
      description: 'Tangy and sweet key lime filling in a graham cracker crust, topped with whipped cream and lime zest.',
      price: 7.99,
      picture: "",
    },
    'Chesscake': {
      description: 'Creamy New York-style cheesecake with a graham cracker crust, topped with your choice of fruit topping.',
      price: 6.99,
      picture: "",
    },
    'Chocolate cake': {
      description: 'Rich, moist chocolate cake with layers of chocolate ganache and chocolate frosting.',
      price: 8.99,
      picture: "",
    }
  },
}

function showMenu() {
  pageNav = document.getElementsByTagName('nav')[0]
  pageNav.insertAdjacentHTML("afterend", `
<section class="hero is-medium is-info is-bold" id="hero">
  <div class="hero-body">
    <div class="container has-text-centered">
      <h1 class="title">Our Menu</h1>
    </div>
  </div>
</section>

<section class="section" id="subhero">
  <div class="container" id="menu">
  </div>
</section>
`)

  Object.keys(menu).forEach(category => {
    pageMenu = document.getElementById("menu")
    pageMenu.insertAdjacentHTML("beforebegin", `
    <h2 class="title is-2 has-text-centered">${category}</h2>
    <div class="columns is-multiline dishes" id="${category}">
      </div>
    </div>
`)
  });

  pageDishes = document.querySelectorAll('.dishes')

  pageDishes.forEach(element => {
    Object.keys(menu[`${element.id}`]).forEach(dish => {
      parent = document.getElementById(element.id)
      parent.insertAdjacentHTML("afterbegin", `
      <div class="column is-one-third">
        <div class="card">
          <div class="card-image">
            <figure class="image is-4by3">
              <img src="entree1.jpg" alt="${dish}">
            </figure>
          </div>
          <div class="card-content">
            <div class="media">
              <div class="media-content">
                <p class="title is-4">${dish}</p>
              </div>
            </div>
            <div class="content">
${menu[`${element.id}`][`${dish}`].description}
            </div>
          </div>
          <footer class="card-footer">
            <p class="card-footer-item">
              <span class="has-text-weight-bold is-size-5">
${menu[`${element.id}`][`${dish}`].price}
</span>
            </p>
          </footer>
        </div>
`)
    });
  });
}


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/menu.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVueS5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSwrQ0FBK0MsU0FBUztBQUN4RCxtREFBbUQsU0FBUztBQUM1RDtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIOztBQUVBO0FBQ0Esd0JBQXdCLFdBQVc7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNENBQTRDLEtBQUs7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdDQUF3QyxLQUFLO0FBQzdDO0FBQ0E7QUFDQTtBQUNBLEVBQUUsUUFBUSxXQUFXLE1BQU0sS0FBSztBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRSxRQUFRLFdBQVcsTUFBTSxLQUFLO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlLy4vc3JjL21lbnUuanMiXSwic291cmNlc0NvbnRlbnQiOlsibGV0IG1lbnUgPSB7XG4gICdBcHBldGl6ZXJzJzoge1xuICAgICdDcmFiIENha2VzJzoge1xuICAgICAgZGVzY3JpcHRpb246ICdEZWxpY2lvdXMgY3JhYiBjYWtlcyBtYWRlIHdpdGggZnJlc2ggY3JhYiBtZWF0LCBzZWFzb25lZCB0byBwZXJmZWN0aW9uLCBhbmQgc2VydmVkIHdpdGggb3VyIHNpZ25hdHVyZSBhaW9saSBzYXVjZS4nLFxuICAgICAgcHJpY2U6IDEwLjk5LFxuICAgICAgcGljdHVyZTogXCJcIixcbiAgICB9LFxuICAgICdTaHJpbXAgQ29ja3RhaWwnOiB7XG4gICAgICBkZXNjcmlwdGlvbjogJ0p1bWJvIHNocmltcCBzZXJ2ZWQgd2l0aCBvdXIgdGFuZ3kgY29ja3RhaWwgc2F1Y2UuJyxcbiAgICAgIHByaWNlOiAxMi45OSxcbiAgICAgIHBpY3R1cmU6IFwiXCIsXG4gICAgfSxcbiAgICAnQ2FsYW1hcmkgQ2FrZXMnOiB7XG4gICAgICBkZXNjcmlwdGlvbjogJ0xpZ2h0bHkgYnJlYWRlZCBjYWxhbWFyaSBzZXJ2ZWQgd2l0aCBvdXIgaG91c2UtbWFkZSBtYXJpbmFyYSBzYXVjZS4nLFxuICAgICAgcHJpY2U6IDkuOTksXG4gICAgICBwaWN0dXJlOiBcIlwiLFxuICAgIH1cbiAgfSxcbiAgJ0VudHJlZXMnOiB7XG4gICAgJ0dyaWxsZWQgU2FsbW9uJzoge1xuICAgICAgZGVzY3JpcHRpb246ICdGcmVzaCBzYWxtb24gZmlsbGV0IGdyaWxsZWQgdG8gcGVyZmVjdGlvbiwgc2VydmVkIHdpdGggeW91ciBjaG9pY2Ugb2Ygc2lkZSBkaXNoIGFuZCB2ZWdldGFibGUuJyxcbiAgICAgIHByaWNlOiAxNi45OSxcbiAgICAgIHBpY3R1cmU6IFwiXCIsXG4gICAgfSxcbiAgICAnTG9ic3RlciBUYWlsJzoge1xuICAgICAgZGVzY3JpcHRpb246ICdTdWNjdWxlbnQgbG9ic3RlciB0YWlsIGJyb2lsZWQgdG8gcGVyZmVjdGlvbiwgc2VydmVkIHdpdGggZHJhd24gYnV0dGVyIGFuZCB5b3VyIGNob2ljZSBvZiBzaWRlIGRpc2guJyxcbiAgICAgIHByaWNlOiAyOS45OSxcbiAgICAgIHBpY3R1cmU6IFwiXCIsXG4gICAgfSxcbiAgICAnU2hyaW1wIFNjYW1waSc6IHtcbiAgICAgIGRlc2NyaXB0aW9uOiAnU3VjY3VsZW50IHNocmltcCBzYXV0w6llZCBpbiBnYXJsaWMgYnV0dGVyIGFuZCB3aGl0ZSB3aW5lLCBzZXJ2ZWQgb3ZlciBsaW5ndWluZS4nLFxuICAgICAgcHJpY2U6IDE4Ljk5LFxuICAgICAgcGljdHVyZTogXCJcIixcbiAgICB9XG4gIH0sXG4gICdEZXNzZXJ0cyc6IHtcbiAgICAnS2V5IExpbWUgUGllJzoge1xuICAgICAgZGVzY3JpcHRpb246ICdUYW5neSBhbmQgc3dlZXQga2V5IGxpbWUgZmlsbGluZyBpbiBhIGdyYWhhbSBjcmFja2VyIGNydXN0LCB0b3BwZWQgd2l0aCB3aGlwcGVkIGNyZWFtIGFuZCBsaW1lIHplc3QuJyxcbiAgICAgIHByaWNlOiA3Ljk5LFxuICAgICAgcGljdHVyZTogXCJcIixcbiAgICB9LFxuICAgICdDaGVzc2Nha2UnOiB7XG4gICAgICBkZXNjcmlwdGlvbjogJ0NyZWFteSBOZXcgWW9yay1zdHlsZSBjaGVlc2VjYWtlIHdpdGggYSBncmFoYW0gY3JhY2tlciBjcnVzdCwgdG9wcGVkIHdpdGggeW91ciBjaG9pY2Ugb2YgZnJ1aXQgdG9wcGluZy4nLFxuICAgICAgcHJpY2U6IDYuOTksXG4gICAgICBwaWN0dXJlOiBcIlwiLFxuICAgIH0sXG4gICAgJ0Nob2NvbGF0ZSBjYWtlJzoge1xuICAgICAgZGVzY3JpcHRpb246ICdSaWNoLCBtb2lzdCBjaG9jb2xhdGUgY2FrZSB3aXRoIGxheWVycyBvZiBjaG9jb2xhdGUgZ2FuYWNoZSBhbmQgY2hvY29sYXRlIGZyb3N0aW5nLicsXG4gICAgICBwcmljZTogOC45OSxcbiAgICAgIHBpY3R1cmU6IFwiXCIsXG4gICAgfVxuICB9LFxufVxuXG5leHBvcnQgZnVuY3Rpb24gc2hvd01lbnUoKSB7XG4gIHBhZ2VOYXYgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnbmF2JylbMF1cbiAgcGFnZU5hdi5pbnNlcnRBZGphY2VudEhUTUwoXCJhZnRlcmVuZFwiLCBgXG48c2VjdGlvbiBjbGFzcz1cImhlcm8gaXMtbWVkaXVtIGlzLWluZm8gaXMtYm9sZFwiIGlkPVwiaGVyb1wiPlxuICA8ZGl2IGNsYXNzPVwiaGVyby1ib2R5XCI+XG4gICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lciBoYXMtdGV4dC1jZW50ZXJlZFwiPlxuICAgICAgPGgxIGNsYXNzPVwidGl0bGVcIj5PdXIgTWVudTwvaDE+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuPC9zZWN0aW9uPlxuXG48c2VjdGlvbiBjbGFzcz1cInNlY3Rpb25cIiBpZD1cInN1Ymhlcm9cIj5cbiAgPGRpdiBjbGFzcz1cImNvbnRhaW5lclwiIGlkPVwibWVudVwiPlxuICA8L2Rpdj5cbjwvc2VjdGlvbj5cbmApXG5cbiAgT2JqZWN0LmtleXMobWVudSkuZm9yRWFjaChjYXRlZ29yeSA9PiB7XG4gICAgcGFnZU1lbnUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1lbnVcIilcbiAgICBwYWdlTWVudS5pbnNlcnRBZGphY2VudEhUTUwoXCJiZWZvcmViZWdpblwiLCBgXG4gICAgPGgyIGNsYXNzPVwidGl0bGUgaXMtMiBoYXMtdGV4dC1jZW50ZXJlZFwiPiR7Y2F0ZWdvcnl9PC9oMj5cbiAgICA8ZGl2IGNsYXNzPVwiY29sdW1ucyBpcy1tdWx0aWxpbmUgZGlzaGVzXCIgaWQ9XCIke2NhdGVnb3J5fVwiPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG5gKVxuICB9KTtcblxuICBwYWdlRGlzaGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmRpc2hlcycpXG5cbiAgcGFnZURpc2hlcy5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgIE9iamVjdC5rZXlzKG1lbnVbYCR7ZWxlbWVudC5pZH1gXSkuZm9yRWFjaChkaXNoID0+IHtcbiAgICAgIHBhcmVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGVsZW1lbnQuaWQpXG4gICAgICBwYXJlbnQuaW5zZXJ0QWRqYWNlbnRIVE1MKFwiYWZ0ZXJiZWdpblwiLCBgXG4gICAgICA8ZGl2IGNsYXNzPVwiY29sdW1uIGlzLW9uZS10aGlyZFwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWltYWdlXCI+XG4gICAgICAgICAgICA8ZmlndXJlIGNsYXNzPVwiaW1hZ2UgaXMtNGJ5M1wiPlxuICAgICAgICAgICAgICA8aW1nIHNyYz1cImVudHJlZTEuanBnXCIgYWx0PVwiJHtkaXNofVwiPlxuICAgICAgICAgICAgPC9maWd1cmU+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtY29udGVudFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1lZGlhXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtZWRpYS1jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJ0aXRsZSBpcy00XCI+JHtkaXNofTwvcD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250ZW50XCI+XG4ke21lbnVbYCR7ZWxlbWVudC5pZH1gXVtgJHtkaXNofWBdLmRlc2NyaXB0aW9ufVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGZvb3RlciBjbGFzcz1cImNhcmQtZm9vdGVyXCI+XG4gICAgICAgICAgICA8cCBjbGFzcz1cImNhcmQtZm9vdGVyLWl0ZW1cIj5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJoYXMtdGV4dC13ZWlnaHQtYm9sZCBpcy1zaXplLTVcIj5cbiR7bWVudVtgJHtlbGVtZW50LmlkfWBdW2Ake2Rpc2h9YF0ucHJpY2V9XG48L3NwYW4+XG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgPC9mb290ZXI+XG4gICAgICAgIDwvZGl2PlxuYClcbiAgICB9KTtcbiAgfSk7XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=