const List = () => (
  <div className="list-container">
    <div className="wishlist">
      <h2>Games</h2>
      <ul>
        <li>
          <a href="https://www.target.com/p/nintendo-game-38-watch-super-mario-bros/-/A-80893936">
            Nintendo Game &amp; Watch / Mario Handheld
          </a>
        </li>
        <li>
          <a href="https://www.target.com/p/sega-genesis-mini-console/-/A-54602693">
            SEGA Genesis Mini
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
            href="https://www.sotaclothing.com/collections/all-clothing/products/lowertown-unisex-tee"
            target="_blank"
          >
            this
          </a>{" "}
          or{" "}
          <a
            href="https://www.northmade.co/collections/mpls/products/mpls-sweatshirt-green?variant=32535396417585"
            target="_blank"
          >
            this
          </a>
          )
        </li>
        <li>Wool Socks</li>
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
    <div className="wishlist">
      <h2>Other</h2>
      <ul>
        <li>
          <a href="https://www.amazon.com/ROKR-Machinarium-Figures-Christmas-Birthday/dp/B0797K1Q9D/ref=sr_1_27">
            Puzzle
          </a>
        </li>
      </ul>
    </div>
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
