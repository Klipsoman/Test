import React from "react";
import style from "./Header.module.css";

const Header = ({ setNewGlassSymbol }) => {
  return (
    <header className={style.header}>
      <button
        onClick={() => {
          setNewGlassSymbol("BTCUSDT");
        }}
      >
        BTCUSDT
      </button>
      <button
        onClick={() => {
          setNewGlassSymbol("BTCRUB");
        }}
      >
        BTCRUB
      </button>
      <button
        onClick={() => {
          setNewGlassSymbol("BTCEUR");
        }}
      >
        BTCEUR
      </button>
      <button
        onClick={() => {
          setNewGlassSymbol("BTCGBP");
        }}
      >
        BTCGBP
      </button>
    </header>
  );
};

export default Header;
