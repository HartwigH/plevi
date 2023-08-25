import Image from "next/image";
import React from "react";

// Assets
import logoSvg from "../../assets/logo.svg";
import logoMobileSvg from "../../assets/logo-mobile.svg";
import accountSvg from "../../assets/account.svg";
import cartSvg from "../../assets/cart.svg";
import heartSvg from "../../assets/heart.svg";
import menuSvg from "../../assets/menu.svg";
import searchSvg from "../../assets/search.svg";
import searchLightSvg from "../../assets/search-light.svg";
import arrowDownSvg from "../../assets/arrow-down.svg";

export default function Header() {
  return (
    <div className="Header">
      <div className="Header__container">
        <div className="Header__container__main">
          <div className="Header__container__main__logos">
            <Image
              src={logoSvg}
              alt={"logo"}
              className="Header__container__main__logos__logo Header__container__main__logos__logo--desktop"
            />
            <Image
              src={logoMobileSvg}
              alt={"logo-mobile"}
              className="Header__container__main__logos__logo Header__container__main__logos__logo--mobile"
            />
          </div>
          <form className="Header__container__main__search">
            <div className="Header__container__main__search__wrapper">
              <input
                className="Header__container__main__search__wrapper__input"
                placeholder="Search for events, performers, venues"
              ></input>
              <button className="Header__container__main__search__wrapper__button">
                <Image
                  src={searchSvg}
                  alt={"search"}
                  className="Header__container__main__search__wrapper__button--mobile"
                />
                <Image
                  src={searchLightSvg}
                  alt={"search"}
                  className="Header__container__main__search__wrapper__button--desktop"
                />
              </button>
            </div>
          </form>
          <div className="Header__container__main__dash">
            <a className="Header__container__main__dash__user">
              <Image src={accountSvg} alt={"account"} />
              <p>Triin</p>
            </a>

            <a className="Header__container__main__dash__like">
              <Image src={heartSvg} alt={"like"} />
            </a>
            <a className="Header__container__main__dash__cart">
              <Image src={cartSvg} alt={"cart"} />
            </a>

            <a className="Header__container__main__dash__menu">
              <Image src={menuSvg} alt={"menu"} />
            </a>
          </div>
        </div>
        <div className="Header__container__secondary">
          <a>Kõik</a>
          <a>Täna</a>
          <a>Nädalavahetusel</a>
          <a>Uued</a>
          <a className="Header__container__secondary--active">Muusika</a>
          <a>Teater</a>
          <a>Kogupere</a>
          <a>Sport</a>
          <a>Festival</a>
          <a className="Header__container__secondary--dropdown">
            Veel
            <span>
              <Image src={arrowDownSvg} alt={"arrow-down"} />
            </span>
          </a>
          <hr />
          <a>PÖFF</a>
        </div>
      </div>
    </div>
  );
}
