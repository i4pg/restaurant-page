import Img from './assest/2.jpg'

export function pageLoad() {
  const htmlString = `
<section class="hero is-medium is-info is-bold" id="home">
  <div class="hero-body">
    <div class="container">
      <h1 class="title has-text-centered">
        Welcome to The Seafood Shack
      </h1>
      <h2 class="subtitle has-text-centered">
        Serving the freshest catch from the ocean
      </h2>
    </div>
  </div>
</section>

<section class="section" id="subhero">
  <div class="container">
    <div class="columns is-vcentered">
      <div class="column">
        <p class="is-size-5">At The Seafood Shack, we're passionate about bringing you the best seafood possible. We work with local fishermen to ensure that our fish and shellfish are fresh and sustainably sourced. Our chefs then prepare each dish with care, using simple yet flavorful ingredients that let the natural flavors of the seafood shine through.</p>
        <p class="is-size-5">Whether you're in the mood for classic fish and chips, a lobster roll, or a more adventurous seafood dish, we have something for everyone. We also offer a selection of beers, wines, and cocktails to complement your meal.</p>
      </div>
      <div class="column">
        <figure class="image is-square">
          <img src="${Img}" alt="Fresh seafood on ice">
        </figure>
      </div>
    </div>
  </div>
</section>
`;

  return htmlString
}
