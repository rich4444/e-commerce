import React, { useState } from "react";
import Filters from "./Filters";
import { useDispatch } from "react-redux";
import { changeType } from "../../redux/typeSlice";
import NavbarStyled from "./NavbarStyled";
import IconClose from "./../../images/icons/icon-close.png";
import IconFilters from "./../../images/icons/icon-filters.png";
import IconMenu from "./../../images/icons/icon-menu.png";
import IconShop from "./../../images/icons/icon-shop.png";

const Navbar = () => {
    const dispatch = useDispatch();

    const [showFilters, setShowFilters] = useState(false);
    const [showNavbar, setShowNavbar] = useState(false);

    function NavbarItemClick(type) {
        setShowNavbar(!showNavbar);
        dispatch(changeType(type));
    }

    function ShowNavbar() {
        setShowNavbar(!showNavbar);
        setShowFilters(false);
    }

    function ShowFilters() {
        setShowFilters(!showFilters);
        setShowNavbar(false);
    }

    return (
        <NavbarStyled>
            <button className="show-navbar" onClick={ShowNavbar}>
                {showNavbar ? (
                    <img src={IconClose} alt="close icon" />
                ) : (
                    <img src={IconMenu} alt="menu icon" />
                )}
            </button>
            {showNavbar && (
                <ul id="navbar-small">
                    <li>
                        <button onClick={() => NavbarItemClick("ropa")}>
                            | ROPA
                        </button>
                    </li>
                    <li>
                        <button onClick={() => NavbarItemClick("cosplay")}>
                            | COSPLAY
                        </button>
                    </li>
                    <li>
                        <button onClick={() => NavbarItemClick("otros")}>
                            | OTROS
                        </button>
                    </li>
                    <li>
                        <button onClick={() => NavbarItemClick("all")}>
                            | TODO
                        </button>
                    </li>
                </ul>
            )}

            <button className="filters-button" onClick={ShowFilters}>
                {showFilters ? (
                    <img src={IconClose} alt="close icon" />
                ) : (
                    <img src={IconFilters} alt="filters icon" />
                )}
            </button>

            <button className="cart-button">
                <img src={IconShop} alt="shop icon" />
            </button>

            {showFilters && <Filters />}
        </NavbarStyled>
    );
};

export default Navbar;
