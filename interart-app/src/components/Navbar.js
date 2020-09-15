import React,{useState, useEffect} from 'react';
import './Navbar.scss';

function Navbar() {

    const [isScrolled, setIsScroll] = useState(false);

    function changeBackground(){
        if(window.scrollY>200){
            setIsScroll(true);
        }else{
            setIsScroll(false);
        }
       
    }

    useEffect(()=>{
        window.addEventListener("scroll",changeBackground);
        return ()=> window.removeEventListener("scroll",changeBackground)
    })


    return (
        <div className={isScrolled ? "navbar-customized nav-scrolled":"navbar-customized"}>
        <div className="inner-container">
            <div></div>
            <div><svg width="40" height="28" viewBox="0 0 40 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M33.8625 0.462524C33.651 0.46422 33.4488 0.5496 33.3 0.7L13.5 20.5C13.39 20.6135 13.3161 20.7571 13.2876 20.9125L12.15 26.5626C12.1228 26.6919 12.128 26.826 12.1652 26.9529C12.2025 27.0798 12.2706 27.1954 12.3635 27.2895C12.4563 27.3836 12.5711 27.4533 12.6974 27.4922C12.8238 27.5311 12.9578 27.5381 13.0876 27.5126L18.75 26.375C18.9055 26.3465 19.049 26.2726 19.1625 26.1626L38.9625 6.36252C39.0377 6.28812 39.0974 6.19956 39.1382 6.10193C39.1789 6.0043 39.1999 5.89956 39.1999 5.79377C39.1999 5.68799 39.1789 5.58325 39.1382 5.48562C39.0974 5.38799 39.0377 5.2994 38.9625 5.225L34.4376 0.7C34.3241 0.589963 34.1805 0.516032 34.025 0.4875C33.9719 0.473675 33.9174 0.465359 33.8625 0.462695V0.462524ZM33.8749 2.4L37.2624 5.7875L18.1999 24.8375L13.9624 25.7L14.7999 21.475L33.8749 2.4V2.4ZM2.00005 25.1375C1.33733 25.1375 0.800049 25.6748 0.800049 26.3375C0.800049 27.0002 1.33733 27.5375 2.00005 27.5375H9.20005C9.86277 27.5375 10.4 27.0002 10.4 26.3375C10.4 25.6748 9.86277 25.1375 9.20005 25.1375H2.00005V25.1375Z" fill="#FFFFF8" />
            </svg>
            </div>
        </div>


        </div>
    )
}

export default Navbar


