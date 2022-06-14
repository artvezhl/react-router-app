import React, { FC } from "react";
import "./Header.css";
import { Link } from "react-router-dom";

const Header: FC = () => {
  return (
    <>
      <nav className="container">
        <ul className="row header__links p-0">
          <li className="col">
            <Link className="header__link" to="/">
              Главная
            </Link>
          </li>
          <li className="col-8">
            <Link className="header__link" to="/news">
              Новости
            </Link>
          </li>
          <li className="col align-content-end text-end">
            <Link className="header__link" to="/profile">
              Профиль
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Header;
