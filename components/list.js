const List = () => (
  <div className="list-container">
    <div className="wishlist">
      <h2>Games</h2>
      <ul>
        <li>
          <a
            href="https://www.target.com/p/nintendo-game-and-watch-the-legend-of-zelda/-/A-83757540"
            target="_blank"
          >
            Nintendo Game and Watch: The Legend of Zelda
          </a>
        </li>
        <li>
          <a
            href="https://www.target.com/s?searchTerm=nintendo+giftcard"
            target="_blank"
          >
            Nintendo gift card
          </a>
        </li>
      </ul>
    </div>
    <div className="wishlist">
      <h2>Clothes</h2>
      <ul>
        <li>
          MN themed shirts (L) (like{" "}
          <a
            href="https://i-like-you-minneapolis.myshopify.com/collections/t-shirt/products/t-shirt-stp-capital-city"
            target="_blank"
          >
            this
          </a>{" "}
          or{" "}
          <a
            href="https://www.sotaclothing.com/collections/mens-unisex/products/high-forest-unisex-tee"
            target="_blank"
          >
            this
          </a>
          )
        </li>
        <li>Hat (like <a href="https://patinastores.com/products/minnesota-sunset-trucker-hat" target="_blank">this</a> or <a href="https://i-like-you-minneapolis.myshopify.com/products/northmade-co-mpls-hat?_pos=3&_sid=1a5165d61&_ss=r" target="_blank">this</a>)</li>
        <li>Wool Socks (like <a href="https://nokomisshoes.com/shop/socks/mens/hiking-mens/3-pack-merino-wool-socks/" target="_blank">this</a>)</li>
        <li>Mittens (like <a href="https://nokomisshoes.com/shop/accessories/accessories-handwear/mittens/chopper-mitten-elk/" target="_blank">this</a>)</li>
      </ul>
    </div>
    <div className="wishlist">
      <h2>Coffee</h2>
      <ul>
        <li>Coffee beans</li>
        <li>Coffee gift card</li>
      </ul>
    </div>
    <div className="wishlist">
      <h2>Pizza</h2>
      <ul>
        <li>Parkway Pizza Gift Card</li>
      </ul>
    </div>
    <div className="wishlist">
      <h2>Beer</h2>
      <ul>
        <li>Elevated Gift Card</li>
      </ul>
    </div>
    {/* <div className="wishlist">
      <h2>Other</h2>
      <ul>
        <li>
          <a
            href="https://www.amazon.com/ROKR-Machinarium-Figures-Christmas-Birthday/dp/B0797K1Q9D/ref=sr_1_27"
            target="_blank"
          >
            Puzzle
          </a>
        </li>
        <li>
          <a
            href="https://www.target.com/p/10-7oz-4pk-stemless-cocktail-glasses-threshold-8482/-/A-76202142"
            target="_blank"
          >
            Cocktail glasses
          </a>
        </li>
      </ul>
    </div> */}
    <style jsx>{`
      .list-container {
        width: 500px;
      }

      .wishlist {
        margin: 0 4em;
      }

      @media screen and (min-width: 25.875em) {
        .wishlist {
          display: flex;
          align-items: left;
          justify-content: left;
          flex-direction: column;
        }
      }

      .wishlist > ul {
        list-style: none;
        padding: 0;
        margin-left: 1em;
        list-style-image: url("images/cane.svg");
      }

      .wishlist > ul li {
        display: list-item;
        padding: 0.25em 0;
        margin: 0;
      }
    `}</style>
  </div>
);

export default List;
