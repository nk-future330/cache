import { useState } from "react";

import "@assets/css/side-menu.css";
import LogoPic from "@assets/img/logo.svg";
import StakePic from "@assets/img/dollar-coin-stack.svg";
import MarketPic from "@assets/img/shop.svg";
import DashPic from "@assets/img/dashboard.svg";
import CachePic from "@assets/img/globe.svg";
import TwiterPic from "@assets/img/twiter.svg";
import NotebookPic from "@/assets/img/notebook.svg";
import TelegramPic from "@/assets/img/telegram.svg";

const menuItems = [
    {
        title: 'Stake',
        imgURL: StakePic,
        alt: 'Stake Pic',
        id: 0
    },
    {
        title: 'Marketplace',
        imgURL: MarketPic,
        alt: 'Marketplace Pic',
        id: 1
    },
    {
        title: 'Dashboard',
        imgURL: DashPic,
        alt: 'Dashboard Pic',
        id: 2
    },
    {
        title: 'Cache',
        imgURL: CachePic,
        alt: 'Cache Pic',
        id: 3
    }
];

const menuSocials = [
    {
        imgURL: TwiterPic,
        alt: 'Twiter Pic',
        width: 22,
        height: 23
    },
    {
        imgURL: NotebookPic,
        alt: 'Note Pic',
        width: 42.18,
        height: 30.39
    },
    {
        imgURL: TelegramPic,
        alt: 'Telegram Pic',
        width: 26.29,
        height: 23
    }
];

const SideMenu = () => {
    const [selectedId, setSelectedId] = useState(0);

    const handleClick = (id) => {
        console.log(id);
        setSelectedId(id);
    }

    return (
        <div className="side-menu-container">
            <div className="side-menu-logo-container">
                <div className="logo-pic">
                    <img
                        src={LogoPic}
                        alt="Cache Logo"
                        width={48.16}
                        height={55.37}
                    />
                </div>
                <div className="logo-title">
                    Cache
                </div>
            </div>
            <div className="side-menu-items-container">
                {
                    menuItems.map((item, idx) => {
                        return (
                            <div
                                key={idx}
                                className={`item-stake-container ${selectedId === idx ? 'clicked' : ''}`}
                                onClick={() => handleClick(idx)}
                            >
                                <div className="item-stake-pic">
                                    <img
                                        src={item.imgURL}
                                        alt={item.alt}
                                        width={18}
                                        height={18}
                                    />
                                </div>
                                <div className="item-stake-tile">
                                    {item.title}
                                </div>
                            </div>
                        );
                    })
                }
            </div>
            <div className="side-menu-price-container">
                <div className="menu-price-title">
                    $Cache Price: .47
                </div>
                <div className="menu-price-value">
                    +74%
                </div>
            </div>
            <div className="side-menu-socials-container">
                {
                    menuSocials.map((social, idx) => {
                        return (
                            <div
                                key={idx}
                                className="social-twiter-container"
                            >
                                <img
                                    src={social.imgURL}
                                    alt={social.alt}
                                    width={social.width}
                                    height={social.height}
                                />
                            </div>
                        );
                    })
                }
            </div>
        </div>
    );
}

export default SideMenu;