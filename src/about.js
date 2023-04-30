import image from './assest/1.jpg'

export function aboutUs() {
  return `
<section class="section has-background-light">
  <div class="container">
    <div class="columns is-vcentered">
      <div class="column is-two-thirds-desktop">
        <h2 class="title is-2">About Us</h2>
        <p class="subtitle is-4">Serving Fresh and Delicious Seafood Since 1995</p>
        <p>At The Seafood Shack, we pride ourselves on serving the freshest seafood possible. Our story began in 1995, when our founder, John Smith, started a small seafood restaurant in a quaint fishing village. His passion for quality seafood and dedication to his customers quickly earned him a loyal following, and the restaurant soon became a local favorite.</p>
        <p>Today, we continue to uphold John's commitment to sourcing only the best seafood, working closely with local fishermen to ensure that our fish and shellfish are sustainably sourced and of the highest quality. Our team of skilled chefs then prepare each dish with care, using simple yet flavorful ingredients that let the natural flavors of the seafood shine through.</p>
        <p>But our commitment to our customers doesn't end with our food. We also strive to create a warm and welcoming atmosphere, where our customers feel like family. So come on in and join us for a delicious meal and a great experience.</p>
      </div>
      <div class="column">
        <figure class="image is-3by2">
          <img src="${image}" alt="Fresh seafood on ice">
        </figure>
      </div>
    </div>
  </div>
</section>
`
}
