"use strict";
(self["webpackChunkrestaurant_page"] = self["webpackChunkrestaurant_page"] || []).push([["menu"],{

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "showMenu": () => (/* binding */ showMenu)
/* harmony export */ });
/* harmony import */ var _assest_menu_appetizers_crab_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assest/menu/appetizers/crab.jpg */ "./src/assest/menu/appetizers/crab.jpg");
/* harmony import */ var _assest_menu_appetizers_cocktail_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assest/menu/appetizers/cocktail.jpg */ "./src/assest/menu/appetizers/cocktail.jpg");
/* harmony import */ var _assest_menu_appetizers_calamari_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assest/menu/appetizers/calamari.jpg */ "./src/assest/menu/appetizers/calamari.jpg");
/* harmony import */ var _assest_menu_Entrees_salamon_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assest/menu/Entrees/salamon.jpg */ "./src/assest/menu/Entrees/salamon.jpg");
/* harmony import */ var _assest_menu_Entrees_lobster_tails_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assest/menu/Entrees/lobster-tails.jpg */ "./src/assest/menu/Entrees/lobster-tails.jpg");
/* harmony import */ var _assest_menu_Entrees_ShrimpScampi_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./assest/menu/Entrees/ShrimpScampi.jpg */ "./src/assest/menu/Entrees/ShrimpScampi.jpg");
/* harmony import */ var _assest_menu_sweet_Key_Lime_Pie_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./assest/menu/sweet/Key Lime Pie.jpg */ "./src/assest/menu/sweet/Key Lime Pie.jpg");
/* harmony import */ var _assest_menu_sweet_Chesscake_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./assest/menu/sweet/Chesscake.jpg */ "./src/assest/menu/sweet/Chesscake.jpg");
/* harmony import */ var _assest_menu_sweet_Chocolate_cake_jpg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./assest/menu/sweet/Chocolate cake.jpg */ "./src/assest/menu/sweet/Chocolate cake.jpg");










let menu = {
  'Appetizers': {
    'Crab Cakes': {
      description: 'Delicious crab cakes made with fresh crab meat, seasoned to perfection, and served with our signature aioli sauce.',
      price: 10.99,
      picture: _assest_menu_appetizers_crab_jpg__WEBPACK_IMPORTED_MODULE_0__,
    },
    'Shrimp Cocktail': {
      description: 'Jumbo shrimp served with our tangy cocktail sauce.',
      price: 12.99,
      picture: _assest_menu_appetizers_cocktail_jpg__WEBPACK_IMPORTED_MODULE_1__,
    },
    'Calamari Cakes': {
      description: 'Lightly breaded calamari served with our house-made marinara sauce.',
      price: 9.99,
      picture: _assest_menu_appetizers_calamari_jpg__WEBPACK_IMPORTED_MODULE_2__,
    }
  },
  'Entrees': {
    'Grilled Salmon': {
      description: 'Fresh salmon fillet grilled to perfection, served with your choice of side dish and vegetable.',
      price: 16.99,
      picture: _assest_menu_Entrees_salamon_jpg__WEBPACK_IMPORTED_MODULE_3__,
    },
    'Lobster Tail': {
      description: 'Succulent lobster tail broiled to perfection, served with drawn butter and your choice of side dish.',
      price: 29.99,
      picture: _assest_menu_Entrees_lobster_tails_jpg__WEBPACK_IMPORTED_MODULE_4__,
    },
    'Shrimp Scampi': {
      description: 'Succulent shrimp sautéed in garlic butter and white wine, served over linguine.',
      price: 18.99,
      picture: _assest_menu_Entrees_ShrimpScampi_jpg__WEBPACK_IMPORTED_MODULE_5__,
    }
  },
  'Desserts': {
    'Key Lime Pie': {
      description: 'Tangy and sweet key lime filling in a graham cracker crust, topped with whipped cream and lime zest.',
      price: 7.99,
      picture: _assest_menu_sweet_Key_Lime_Pie_jpg__WEBPACK_IMPORTED_MODULE_6__,
    },
    'Chesscake': {
      description: 'Creamy New York-style cheesecake with a graham cracker crust, topped with your choice of fruit topping.',
      price: 6.99,
      picture: _assest_menu_sweet_Chesscake_jpg__WEBPACK_IMPORTED_MODULE_7__,
    },
    'Chocolate cake': {
      description: 'Rich, moist chocolate cake with layers of chocolate ganache and chocolate frosting.',
      price: 8.99,
      picture: _assest_menu_sweet_Chocolate_cake_jpg__WEBPACK_IMPORTED_MODULE_8__,
    }
  },
}

function showMenu() {
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


/***/ }),

/***/ "./src/assest/menu/Entrees/ShrimpScampi.jpg":
/*!**************************************************!*\
  !*** ./src/assest/menu/Entrees/ShrimpScampi.jpg ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d07bb10614053816e6dd.jpg";

/***/ }),

/***/ "./src/assest/menu/Entrees/lobster-tails.jpg":
/*!***************************************************!*\
  !*** ./src/assest/menu/Entrees/lobster-tails.jpg ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "adc1addb32c8194982ee.jpg";

/***/ }),

/***/ "./src/assest/menu/Entrees/salamon.jpg":
/*!*********************************************!*\
  !*** ./src/assest/menu/Entrees/salamon.jpg ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "507da1a31e6e012459b7.jpg";

/***/ }),

/***/ "./src/assest/menu/appetizers/calamari.jpg":
/*!*************************************************!*\
  !*** ./src/assest/menu/appetizers/calamari.jpg ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d09c43347faf6745a643.jpg";

/***/ }),

/***/ "./src/assest/menu/appetizers/cocktail.jpg":
/*!*************************************************!*\
  !*** ./src/assest/menu/appetizers/cocktail.jpg ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a50cffe03ff21f7618d2.jpg";

/***/ }),

/***/ "./src/assest/menu/appetizers/crab.jpg":
/*!*********************************************!*\
  !*** ./src/assest/menu/appetizers/crab.jpg ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5eac078a827c3e011252.jpg";

/***/ }),

/***/ "./src/assest/menu/sweet/Chesscake.jpg":
/*!*********************************************!*\
  !*** ./src/assest/menu/sweet/Chesscake.jpg ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "944790bf4f2ade9a703d.jpg";

/***/ }),

/***/ "./src/assest/menu/sweet/Chocolate cake.jpg":
/*!**************************************************!*\
  !*** ./src/assest/menu/sweet/Chocolate cake.jpg ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "af09584c9298e940ac4a.jpg";

/***/ }),

/***/ "./src/assest/menu/sweet/Key Lime Pie.jpg":
/*!************************************************!*\
  !*** ./src/assest/menu/sweet/Key Lime Pie.jpg ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d832a1be71697db3245e.jpg";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/menu.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUF3RDtBQUNVO0FBQ047QUFDTDtBQUNNO0FBQ0Y7QUFDSjtBQUNHO0FBQ1E7O0FBRWxFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLDZEQUFRO0FBQ3ZCLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxlQUFlLGlFQUFjO0FBQzdCLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxlQUFlLGlFQUFRO0FBQ3ZCO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSw2REFBTztBQUN0QixLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsZUFBZSxtRUFBTztBQUN0QixLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsZUFBZSxrRUFBTTtBQUNyQjtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsZ0VBQUk7QUFDbkIsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLGVBQWUsNkRBQVU7QUFDekIsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLGVBQWUsa0VBQWE7QUFDNUI7QUFDQSxHQUFHO0FBQ0g7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsMkNBQTJDLFNBQVM7QUFDcEQsbURBQW1ELFNBQVM7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsNkJBQTZCLFNBQVMsS0FBSztBQUNyRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0NBQXdDLEtBQUs7QUFDN0M7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS8uL3NyYy9tZW51LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjcmFiQ2FrZSBmcm9tICcuL2Fzc2VzdC9tZW51L2FwcGV0aXplcnMvY3JhYi5qcGcnXG5pbXBvcnQgc2hyaW1wQ29ja3RhaWwgZnJvbSAnLi9hc3Nlc3QvbWVudS9hcHBldGl6ZXJzL2NvY2t0YWlsLmpwZydcbmltcG9ydCBjYWxhbWFyaSBmcm9tICcuL2Fzc2VzdC9tZW51L2FwcGV0aXplcnMvY2FsYW1hcmkuanBnJ1xuaW1wb3J0IHNhbGFtb24gZnJvbSAnLi9hc3Nlc3QvbWVudS9FbnRyZWVzL3NhbGFtb24uanBnJ1xuaW1wb3J0IGxvYnN0ZXIgZnJvbSAnLi9hc3Nlc3QvbWVudS9FbnRyZWVzL2xvYnN0ZXItdGFpbHMuanBnJ1xuaW1wb3J0IHNocmltcCBmcm9tICcuL2Fzc2VzdC9tZW51L0VudHJlZXMvU2hyaW1wU2NhbXBpLmpwZydcbmltcG9ydCBsaW1lIGZyb20gJy4vYXNzZXN0L21lbnUvc3dlZXQvS2V5IExpbWUgUGllLmpwZydcbmltcG9ydCBjaGVlc2VjYWtlIGZyb20gJy4vYXNzZXN0L21lbnUvc3dlZXQvQ2hlc3NjYWtlLmpwZydcbmltcG9ydCBjaG9jb2xhdGVDYWtlIGZyb20gJy4vYXNzZXN0L21lbnUvc3dlZXQvQ2hvY29sYXRlIGNha2UuanBnJ1xuXG5sZXQgbWVudSA9IHtcbiAgJ0FwcGV0aXplcnMnOiB7XG4gICAgJ0NyYWIgQ2FrZXMnOiB7XG4gICAgICBkZXNjcmlwdGlvbjogJ0RlbGljaW91cyBjcmFiIGNha2VzIG1hZGUgd2l0aCBmcmVzaCBjcmFiIG1lYXQsIHNlYXNvbmVkIHRvIHBlcmZlY3Rpb24sIGFuZCBzZXJ2ZWQgd2l0aCBvdXIgc2lnbmF0dXJlIGFpb2xpIHNhdWNlLicsXG4gICAgICBwcmljZTogMTAuOTksXG4gICAgICBwaWN0dXJlOiBjcmFiQ2FrZSxcbiAgICB9LFxuICAgICdTaHJpbXAgQ29ja3RhaWwnOiB7XG4gICAgICBkZXNjcmlwdGlvbjogJ0p1bWJvIHNocmltcCBzZXJ2ZWQgd2l0aCBvdXIgdGFuZ3kgY29ja3RhaWwgc2F1Y2UuJyxcbiAgICAgIHByaWNlOiAxMi45OSxcbiAgICAgIHBpY3R1cmU6IHNocmltcENvY2t0YWlsLFxuICAgIH0sXG4gICAgJ0NhbGFtYXJpIENha2VzJzoge1xuICAgICAgZGVzY3JpcHRpb246ICdMaWdodGx5IGJyZWFkZWQgY2FsYW1hcmkgc2VydmVkIHdpdGggb3VyIGhvdXNlLW1hZGUgbWFyaW5hcmEgc2F1Y2UuJyxcbiAgICAgIHByaWNlOiA5Ljk5LFxuICAgICAgcGljdHVyZTogY2FsYW1hcmksXG4gICAgfVxuICB9LFxuICAnRW50cmVlcyc6IHtcbiAgICAnR3JpbGxlZCBTYWxtb24nOiB7XG4gICAgICBkZXNjcmlwdGlvbjogJ0ZyZXNoIHNhbG1vbiBmaWxsZXQgZ3JpbGxlZCB0byBwZXJmZWN0aW9uLCBzZXJ2ZWQgd2l0aCB5b3VyIGNob2ljZSBvZiBzaWRlIGRpc2ggYW5kIHZlZ2V0YWJsZS4nLFxuICAgICAgcHJpY2U6IDE2Ljk5LFxuICAgICAgcGljdHVyZTogc2FsYW1vbixcbiAgICB9LFxuICAgICdMb2JzdGVyIFRhaWwnOiB7XG4gICAgICBkZXNjcmlwdGlvbjogJ1N1Y2N1bGVudCBsb2JzdGVyIHRhaWwgYnJvaWxlZCB0byBwZXJmZWN0aW9uLCBzZXJ2ZWQgd2l0aCBkcmF3biBidXR0ZXIgYW5kIHlvdXIgY2hvaWNlIG9mIHNpZGUgZGlzaC4nLFxuICAgICAgcHJpY2U6IDI5Ljk5LFxuICAgICAgcGljdHVyZTogbG9ic3RlcixcbiAgICB9LFxuICAgICdTaHJpbXAgU2NhbXBpJzoge1xuICAgICAgZGVzY3JpcHRpb246ICdTdWNjdWxlbnQgc2hyaW1wIHNhdXTDqWVkIGluIGdhcmxpYyBidXR0ZXIgYW5kIHdoaXRlIHdpbmUsIHNlcnZlZCBvdmVyIGxpbmd1aW5lLicsXG4gICAgICBwcmljZTogMTguOTksXG4gICAgICBwaWN0dXJlOiBzaHJpbXAsXG4gICAgfVxuICB9LFxuICAnRGVzc2VydHMnOiB7XG4gICAgJ0tleSBMaW1lIFBpZSc6IHtcbiAgICAgIGRlc2NyaXB0aW9uOiAnVGFuZ3kgYW5kIHN3ZWV0IGtleSBsaW1lIGZpbGxpbmcgaW4gYSBncmFoYW0gY3JhY2tlciBjcnVzdCwgdG9wcGVkIHdpdGggd2hpcHBlZCBjcmVhbSBhbmQgbGltZSB6ZXN0LicsXG4gICAgICBwcmljZTogNy45OSxcbiAgICAgIHBpY3R1cmU6IGxpbWUsXG4gICAgfSxcbiAgICAnQ2hlc3NjYWtlJzoge1xuICAgICAgZGVzY3JpcHRpb246ICdDcmVhbXkgTmV3IFlvcmstc3R5bGUgY2hlZXNlY2FrZSB3aXRoIGEgZ3JhaGFtIGNyYWNrZXIgY3J1c3QsIHRvcHBlZCB3aXRoIHlvdXIgY2hvaWNlIG9mIGZydWl0IHRvcHBpbmcuJyxcbiAgICAgIHByaWNlOiA2Ljk5LFxuICAgICAgcGljdHVyZTogY2hlZXNlY2FrZSxcbiAgICB9LFxuICAgICdDaG9jb2xhdGUgY2FrZSc6IHtcbiAgICAgIGRlc2NyaXB0aW9uOiAnUmljaCwgbW9pc3QgY2hvY29sYXRlIGNha2Ugd2l0aCBsYXllcnMgb2YgY2hvY29sYXRlIGdhbmFjaGUgYW5kIGNob2NvbGF0ZSBmcm9zdGluZy4nLFxuICAgICAgcHJpY2U6IDguOTksXG4gICAgICBwaWN0dXJlOiBjaG9jb2xhdGVDYWtlLFxuICAgIH1cbiAgfSxcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNob3dNZW51KCkge1xuICBsZXQgbWVudVN0cmluZyA9IGBcbjxzZWN0aW9uIGNsYXNzPVwiaGVybyBpcy1tZWRpdW0gaXMtaW5mbyBpcy1ib2xkXCIgaWQ9XCJtZW51LWhlcm9cIj5cbiAgPGRpdiBjbGFzcz1cImhlcm8tYm9keVwiPlxuICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXIgaGFzLXRleHQtY2VudGVyZWRcIj5cbiAgICAgIDxoMSBjbGFzcz1cInRpdGxlXCI+T3VyIE1lbnU8L2gxPlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbjwvc2VjdGlvbj5cblxuPHNlY3Rpb24gY2xhc3M9XCJzZWN0aW9uXCIgaWQ9XCJzdWJoZXJvXCI+XG4gIDxkaXYgY2xhc3M9XCJjb250YWluZXJcIiBpZD1cIm1lbnVcIj5cbmBcblxuICBPYmplY3Qua2V5cyhtZW51KS5mb3JFYWNoKGNhdGVnb3J5ID0+IHtcbiAgICBsZXQgc3RyaW5nID0gYFxuPGgyIGNsYXNzPVwidGl0bGUgaXMtMiBoYXMtdGV4dC1jZW50ZXJlZFwiPiR7Y2F0ZWdvcnl9PC9oMj5cbiAgICA8ZGl2IGNsYXNzPVwiY29sdW1ucyBpcy1tdWx0aWxpbmUgZGlzaGVzXCIgaWQ9XCIke2NhdGVnb3J5fVwiPlxuYFxuICAgIE9iamVjdC5rZXlzKG1lbnVbY2F0ZWdvcnldKS5mb3JFYWNoKGRpc2ggPT4ge1xuICAgICAgc3RyaW5nICs9IGBcbiAgICAgIDxkaXYgY2xhc3M9XCJjb2x1bW4gaXMtb25lLXRoaXJkXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkXCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtaW1hZ2VcIj5cbiAgICAgICAgICAgIDxmaWd1cmUgY2xhc3M9XCJpbWFnZSBpcy00YnkzXCI+XG4gICAgICAgICAgICAgIDxpbWcgc3JjPVwiJHttZW51W2NhdGVnb3J5XVtkaXNoXS5waWN0dXJlfVwiIGFsdD1cIiR7ZGlzaH1cIj5cbiAgICAgICAgICAgIDwvZmlndXJlPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWNvbnRlbnRcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtZWRpYVwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWVkaWEtY29udGVudFwiPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwidGl0bGUgaXMtNFwiPiR7ZGlzaH08L3A+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGVudFwiPlxuJHttZW51W2NhdGVnb3J5XVtkaXNoXS5kZXNjcmlwdGlvbn1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxmb290ZXIgY2xhc3M9XCJjYXJkLWZvb3RlclwiPlxuICAgICAgICAgICAgPHAgY2xhc3M9XCJjYXJkLWZvb3Rlci1pdGVtXCI+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaGFzLXRleHQtd2VpZ2h0LWJvbGQgaXMtc2l6ZS01XCI+XG4ke21lbnVbY2F0ZWdvcnldW2Rpc2hdLnByaWNlfVxuPC9zcGFuPlxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgIDwvZm9vdGVyPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG5cbmBcbiAgICB9KVxuXG4gICAgc3RyaW5nICs9IGBcbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuYFxuICAgIG1lbnVTdHJpbmcgKz0gc3RyaW5nXG4gIH0pXG5cbiAgbWVudVN0cmluZyArPSBgICBcbjwvZGl2PlxuPC9zZWN0aW9uPlxuYFxuXG4gIHJldHVybiBtZW51U3RyaW5nXG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=