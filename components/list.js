const List = () => (
  <div className="list-container">
    <div className="wishlist">
      <h2>Games</h2>
      <ul>
        <li>
          <a
            href="https://www.target.com/s?searchTerm=nintendo+giftcard"
            target="_blank"
          >
            Nintendo gift card
          </a>
        </li>
        <li>
          <a
            href="https://www.amazon.com/Truck-Off-Food-Frenzy/dp/B073R8853C/ref=sr_1_1?keywords=truck+off+game&qid=1572828498&sr=8-1"
            target="_blank"
          >
            Truck Off board game
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
            href="https://www.sotaclothing.com/collections/mens-unisex/products/wood-lake-unisex-tee"
            target="_blank"
          >
            this
          </a>{" "}
          or{" "}
          <a
            href="https://upnorthtco.com/collections/mens-tees/products/mens-north-star-flake-tee"
            target="_blank"
          >
            this
          </a>
          )]
        </li>
        <li>
          Rugged pants (36/30) (like{" "}
          <a
            href="https://www.duluthtrading.com/mens-duluthflex-fire-hose-burly-carpenter-pants-46228.html"
            target="_blank"
          >
            this
          </a>
          )
        </li>
        <li>
          Casual shorts (L) (like{" "}
          <a
            href="https://www.target.com/p/men-s-knit-shorts-goodfellow-co-153/-/A-54196219?preselect=53820784"
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
