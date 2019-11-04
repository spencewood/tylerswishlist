import React, { useState } from "react";
import Head from "next/head";
import List from "../components/list";
import { useInterval } from "../hooks/interval";
import Wreath from "../components/wreath";

const colors = ["red", "green"];

const shuffle = array => array.sort(() => Math.random() - 0.5);

const themes = shuffle(
  colors.reduce((acc, primary) => {
    colors.forEach(secondary => {
      if (primary !== secondary) {
        acc.push({ primary, secondary });
      }
    });
    return acc;
  }, [])
);

const Home = () => {
  const [themeIndex, setThemeIndex] = useState(0);

  useInterval(() => {
    setThemeIndex(themeIndex + 1);
  }, 800);

  const theme = themes[themeIndex % themes.length];

  return (
    <div>
      <Head>
        <title>Tyler's Wishlist</title>
      </Head>

      <div className="list-container">
        <h1 className="title">
          <Wreath theme={theme} />
          Tyler's Wishlist
          <Wreath theme={theme} />
        </h1>

        <List theme={theme} />
      </div>
      <style jsx global>
        {`
          body {
            background-color: ${theme.primary};
            background-image: url("images/bg.webp");
            background-repeat: repeat;
            color: white;
            font-family: "Mountains of Christmas", cursive;
            font-size: 16px;
          }

          @media screen and (min-width: 25.875em) {
            body {
              font-size: 22px;
            }
          }

          a {
            color: white;
          }

          a:hover {
            color: ${theme.secondary};
          }

          h1 {
            font-size: 3em;
          }

          h2 {
            font-size: 2.5em;
            padding-bottom: 0;
            margin-bottom: 0;
          }

          .title {
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column
            text-transform: uppercase;
          }

          .title svg {
            display: inline-block;
            width: 0.5em;
            padding: 0 20px;
          }

          .list-container {
            margin: 0 auto;
          }
        `}
      </style>
    </div>
  );
};

export default Home;
