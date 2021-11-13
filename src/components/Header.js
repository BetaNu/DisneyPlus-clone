import React from 'react'
import styled from 'styled-components'

function Header() {
    return (
        <Nav>
            <Logo src="/images/logo.svg" />
            <NavMenu>
                <a href="#home">
                    <img src="/images/home-icon.svg" alt="Logo house" />
                    <span>HOME</span>
                </a>
                <a href="#search">
                    <img src="/images/search-icon.svg" alt="Logo search" />
                    <span>SEARCH</span>
                </a>
                <a href="#watchlist">
                    <img src="/images/watchlist-icon.svg" alt="Logo watchlist" />
                    <span>WATCHLIST</span>
                </a>
                <a href="#originals">
                    <img src="/images/original-icon.svg" alt="Logo originals" />
                    <span>ORIGINALS</span>
                </a>
                <a href="#movie">
                    <img src="/images/movie-icon.svg" alt="Logo movies" />
                    <span>MOVIES</span>
                </a>
                <a href="#series">
                    <img src="/images/series-icon.svg" alt="Logo series" />
                    <span>SERIES</span>
                </a>

            </NavMenu>
            <UserImg src="https://lh3.googleusercontent.com/ogw/ADea4I63qmgtEiNB25QEljGg_KwXPPNRrUNgiXF-lIG0=s83-c-mo" />
        </Nav>
    )
}

export default Header

const Nav = styled.nav`
    height: 70px;
    background: #090b13;
    display: flex;
    align-items: center;
    padding: 0 36px;
    overflow-x: hidden;
`

const Logo = styled.img`
    width: 80px;
`
const NavMenu = styled.div`
    display: flex;
    flex: 1;
    margin-left: 25px;
    align-items: center;

    a {
        display: flex;
        align-items: center;
        padding: 0 12px;
        cursor: pointer;

        &:link{
            text-decoration: none;
            color: white;
        }
        
        img {
            height: 20px;
        }

        span {
            font-size: 13px;
            letter-spacing: 1.42px;
            position: relative;
            /* Create an invisible white bar below */
            &:after {
                content: "";
                height: 2px;
                background: white;
                position: absolute;
                left: 0;
                right: 0;
                bottom: -6px;
                opacity: 0;
                transform-origin: left center;
                transform: scaleX(0);
                /* Make the bar appears slowly */
                transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
            }
        }

        /* Transform the bar from 0 to 100% width */
        &:hover {
            span:after {
                transform: scaleX(1);
                opacity: 1;
            }
        }
    }
`

const UserImg = styled.img`
    width: 48px;
    height: 48px;
    border-radius: 50%;
    cursor: pointer;
`
