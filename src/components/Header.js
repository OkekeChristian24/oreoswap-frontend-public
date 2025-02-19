import "../css/local/partials/components/_header.css";
import { useRef } from 'react';
import { useAlert } from 'react-alert'





const Header = ({isClicked, toggleMode, toggleNavbar, handleClick}) => {
    
    
    // Disable and enable scroll on sidebar toggle
    const safeDocument = typeof document !== 'undefined' ? document : {};
    const scrollBlocked = useRef();
    const html = safeDocument.documentElement;
    const { body } = safeDocument;

    const blockScroll = () => {
        if (!body || !body.style || scrollBlocked.current) return;
    
        const scrollBarWidth = window.innerWidth - html.clientWidth;
        const bodyPaddingRight =
            parseInt(window.getComputedStyle(body).getPropertyValue("padding-right")) || 0;
    
        /**
         * 1. Fixes a bug in iOS and desktop Safari whereby setting
         *    `overflow: hidden` on the html/body does not prevent scrolling.
         * 2. Fixes a bug in desktop Safari where `overflowY` does not prevent
         *    scroll if an `overflow-x` style is also applied to the body.
         */
        html.style.position = 'relative'; /* [1] */
        html.style.overflow = 'hidden'; /* [2] */
        body.style.position = 'relative'; /* [1] */
        body.style.overflow = 'hidden'; /* [2] */
        body.style.paddingRight = `${bodyPaddingRight + scrollBarWidth}px`;
    
        scrollBlocked.current = true;
    };

    const allowScroll = () => {
        if (!body || !body.style || !scrollBlocked.current) return;
    
        html.style.position = '';
        html.style.overflow = '';
        body.style.position = '';
        body.style.overflow = '';
        body.style.paddingRight = '';
    
        scrollBlocked.current = false;
    };
    
    
    const alert = useAlert()
    const showAlert = () => {
        alert.show("Coming Soon!!!")
    }

    // hamburger button color
    const hamLight = {
        background: '#FFFFFF'
    };
    const hamDark = {
        background: '#266150'
    };

    const sideBarBgClr = {
        "light": "#E6F0EE",
        "dark": "#27262C"
    };

    toggleNavbar ? blockScroll() : allowScroll();


    return(
        <header className="header">
            <div className="wrapper">
                <ul className="mobilenav list-unstyled">
                    <li className={toggleNavbar ? 'hide-visibility': 'd-block list-unstyled'}>
                        <a href="#"><img src={isClicked ? "img/oreoswap-white-logo.png" : "img/oreoswap-brown-logo.png"}  alt="Oreoswap logo" className="logo mr-auto" id="logo"/></a>
                    </li>
                     <li  className={toggleNavbar ? "hide-visibility" : " ml-auto"}>
                        <a href="javascript:void(0)" onClick={toggleMode} className="m-auto">
                              <i className={isClicked ? "bi bi-sun-fill sun-icon" :  "bi bi-moon-fill moon-icon"}></i>
                        </a>
                    </li>
                    <div className={toggleNavbar ? "ml-auto": "m-0"} onClick={handleClick}>
                        <div className={toggleNavbar ? 'ln1 hamburger' : 'hamburger ln01'} style={!isClicked ? hamDark : hamLight}></div>
                        <div className={toggleNavbar ? 'ln2 hamburger' : 'hamburger'} style={!isClicked ? hamDark : hamLight}></div>
                        <div className={toggleNavbar ? 'ln3 hamburger' : 'hamburger ln02'} style={!isClicked ? hamDark : hamLight}></div>
                    </div>
                </ul>
                <nav className={toggleNavbar ? 'nav1' : 'hide-mobilenav'} style={isClicked ? {backgroundColor: sideBarBgClr.dark} : {backgroundColor: sideBarBgClr.light}}>
                    <ul className={toggleNavbar ? "d-flex list-unstyled m-0" : "d-none list-unstyled m-0"}>
                        <li className={isClicked ? "sidebar-dark" : "sidebar-light"} onClick={toggleNavbar}>
                            <i className="bi bi-people-fill"></i><a href="https://oreoswap.com/team" target="_newtab">Team</a>
                        </li>
                        <li className={isClicked ? "sidebar-dark" : "sidebar-light"} onClick={toggleNavbar}>
                            <i className="bi bi-reception-4"></i><a href="https://oreoswap.com/info" target="_newtab">Info</a>
                        </li>
                        <li className={isClicked ? "sidebar-dark" : "sidebar-light"} onClick={toggleNavbar}>
                            <i className="bi bi-telephone-fill"></i><a href="https://oreoswap.com/contact" target="_newtab">Contact</a>
                        </li>
                        <li className={isClicked ? "sidebar-dark" : "sidebar-light"} onClick={toggleNavbar}>
                            <i className="bi bi-github"></i><a href="https://github.com/oreoswap" target="_newtab">Github</a>
                        </li>
                        <li className={isClicked ? "sidebar-dark" : "sidebar-light"} onClick={toggleNavbar}>
                            <i className="bi bi-journal-album"></i><a href="https://medium.com/@oreoswap/the-making-of-defi-1291a60053c3" target="_newtab">Blog</a>
                        </li>
                        <li onClick={toggleNavbar}>
                            <button className="navbar-button">
                                <a href="#" onClick={showAlert}>Use Exchange</a>
                            </button>
                        </li>
                    </ul>
                </nav>
                <div className="desktop-nav">
                    <nav className="topnav">
                        <ul className="d-flex list-unstyled my-3">
                            <li className="m-0">
                                <a href="/"><img src={isClicked ? "img/oreoswap-white-logo.png" :"img/oreoswap-brown-logo.png"}  alt="company logo" className="logo mr-auto"/></a>
                            </li>
                            <li className="ml-auto my-auto">
                                <a href="https://oreoswap.com/team" target="_newtab">Team</a>
                            </li>
                            <li className="my-auto">
                                <a href="https://oreoswap.com/info" target="_newtab">Info</a>
                            </li>
                            <li className="my-auto">
                                <a href="https://oreoswap.com/contact" target="_newtab">Contact</a>
                            </li>
                            <li className="my-auto">
                                <a href="https://github.com/oreoswap" target="_newtab">Github</a>
                            </li>
                            <li className="my-auto">
                                <a href="https://medium.com/@oreoswap/the-making-of-defi-1291a60053c3" target="_newtab">Blog</a>
                            </li>
                           <li  className="my-auto">
                                <a onClick={toggleMode} className="m-auto" style={{overflow : "hidden"}}>
                                    <i className={isClicked ? "bi bi-sun-fill sun-icon m-0" :  "bi bi-moon-fill moon-icon m-0"}></i>
                                </a>
                            </li>
                            <li  className="my-auto">
                                <button className="navbar-button m-0">
                                    <a href="#" onClick={showAlert}>Use Exchange</a>
                                </button>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
            
        </header>

    )
}


export default Header;