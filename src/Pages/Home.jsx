import React, { useState, useEffect } from "react";
import Slider from "../Components/Slider";
import RotateText from "../Components/RotateText";
import BookBox from "../Components/BookBox";
import Modal from "../Components/Modal";
import { useGlobalContext } from "../Components/Context";
import { Divide as Hamburger } from "hamburger-react";
import TestModeBadge from "../Components/TestModeBadge";

// component renders the home page.
const Home = () => {
  // context provider values
  const {
    showBookBox,
    handleScroll,
    setOffset,
    setIsBurgerOpen,
    // boardRef,
    // title2Ref,
    // title3Ref,
    // title4Ref,
    // title5Ref,
    // title6Ref,
    landRef,
    sec2Ref,
    navbarRef,
    headerRef,
    burgerRef,
    offset,
    visibility,
    isModalOpen,
    isBurgerOpen,
  } = useGlobalContext();

  // top of the page viewport on render and reference to header nod
  useEffect(() => {
    window.scrollTo(0, 0);
    const header = headerRef.current;
    const navbar = navbarRef.current;
    const burger = burgerRef.current;
    // screen size difference conditioning for responsive render
    if (window.innerWidth <= 768) {
      header.style.display = "none";
      //isBurgerOpen is toggle state of the hamburger/navbar in mobile screen size
      if (isBurgerOpen) {
        navbar.style.display = "block";
        header.style.display = "block";
        burger.style.display = "none";
      } else {
        navbar.style.display = "none";
      }
    }
  }, [isBurgerOpen]);

  // Handles the landing scroll event
  useEffect(() => {
    setOffset(0);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <main id="main-home">
      {isModalOpen && <Modal />}
      {/* --------------------landing intro for home page-------------------------------------*/}
      <section id="landing" ref={landRef}>
        {/* hamburger component from hamburger-react library */}
        <div className="burger" ref={burgerRef}>
          <Hamburger
            rounded
            direction="right"
            size={30}
            duration={1}
            color="#f5ee92"
            hideOutline={true}
            toggled={isBurgerOpen}
            toggle={setIsBurgerOpen}
            onToggle={(toggled) => {
              if (toggled) {
                setIsBurgerOpen(true);
                burgerRef.current.style.display = "none";
              } else {
                setIsBurgerOpen(false);
              }
            }}
          />
        </div>
        <div className="seal">
          <h1>UNCORK</h1>
        </div>
        {/* action in the first viewport */}
        <button className="reserve" onClick={showBookBox}>
          reservation
        </button>

        <div id="book-box-container" style={{ display: "none" }}>
          <BookBox />
        </div>
      </section>
      {/* -------------------------------------section2-home page---------------------------*/}
      <section id="section2" ref={sec2Ref}>
        <TestModeBadge className="home-test-badge" />
        <div className="title">
          <h1>UNCORK</h1>
          <h3>wine bar</h3>
        </div>
        <div id="book-box-container">
          <BookBox />
        </div>
      </section>
      {/* ------------------------------------section3--------------------------------------- */}
      <section id="section3">
        {/*on arrival to viewport (isVisible1), section title is rendered by RotateText component*/}
        <div
          className="title-text"
          id="title1"
          //  ref={title2Ref}
        >
          {visibility.title1 && (
            <div className="title-text-box">
              <div>
                <RotateText text="AFTER" />
              </div>
              <div>
                <RotateText text="-" />
              </div>
              <div>
                <RotateText text="OFFICE" />
              </div>
            </div>
          )}
        </div>

        <div id="ul-box">
          <div id="cat"></div>
          <ul>
            <li>after-work personal time</li>
            <li>relaxed afternoon chill</li>
            <li>extended office gossip</li>
            <li>discreet rendezvous</li>
          </ul>
        </div>
        <div className="image-box">
          <div id="img5"></div>
          <div id="img6"></div>
        </div>
        {/* -----------------parallax------------------------- */}
        <div className="parallax-box">
          <div
            id="img2"
            // each img in parallax is translated by offset * 0.1 times less than the previous img, so it moves slower
            style={{ transform: `translateY(-${offset * 0.1}px)` }}
          ></div>
          <div
            id="img3"
            style={{ transform: `translateY(-${offset * 0.2}px)` }}
          ></div>
          <div
            id="img4"
            style={{ transform: `translateY(-${offset * 0.3}px)` }}
          ></div>
        </div>
      </section>
      {/* ----------------------------------------section4----------------------------------- */}
      <section id="section4">
        <div
          className="title-text"
          id="title2"
          //  ref={title3Ref}
        >
          {visibility.title2 && (
            <div className="title-text-box">
              <div>
                <RotateText text=" AMBIENT " />
              </div>

              <div>
                <RotateText text="AL FRESCO" />
              </div>
            </div>
          )}
          {/* {isVisible2 ? (
            <div className="title-text-box">
              <div>
                <RotateText text=" AMBIENT " />
              </div>

              <div>
                <RotateText text="AL FRESCO" />
              </div>
            </div>
          ) : (
            ""
          )} */}
        </div>
        {/* each img is floating independently to others in speed and distance */}
        <div id="ambient-box">
          <div className="ambient" id="ambient1"></div>
          <div className="ambient" id="ambient2"></div>
          <div className="ambient" id="ambient3"></div>
          <div className="ambient" id="ambient4"></div>
          <div className="ambient" id="ambient5"></div>
          <div className="ambient" id="ambient6"></div>
        </div>
      </section>
      {/* ------------------------section5--------------------------------------- */}
      <section id="section5">
        <div
          className="title-text"
          id="title3"
          //  ref={title4Ref}
        >
          {visibility.title3 && (
            <div className="title-text-box">
              <div>
                <RotateText text=" MAKE YOUR " />
              </div>
              <div>
                <RotateText text="OWN BOARD" />
              </div>
            </div>
          )}
        </div>
        <h4>each unique masterpiece</h4>
        <div id="board-box">
          <div className="round" id="board1"></div>
          <div
            className="square"
            id="board2"
            // ref={boardRef}
            style={
              visibility.board2
                ? {
                    animation: "translate 1.5s ease-in forwards",
                  }
                : {}
            }
          ></div>
          <div className="round" id="board3"></div>
          <div
            className="square"
            id="board4"
            style={
              visibility.board4
                ? { animation: "translate 1.5s ease-in forwards" }
                : {}
            }
          ></div>
          <div id="text1" className="ul-container">
            <ul>
              <li>cheese</li>
              <li>nuts</li>
              <li>dried fruits</li>
            </ul>
          </div>
          <div id="text2" className="ul-container">
            <ul>
              <li>fresh fruits</li>
              <li>fresh veggies</li>
              <li>dried meats</li>
            </ul>
          </div>
          <div id="text3" className="ul-container">
            <ul>
              <li>cold cuts</li>
              <li>marmalade</li>
              <li>honey</li>
            </ul>
          </div>
          <div id="text4" className="ul-container">
            <ul>
              <li>toast</li>
              <li>crackers</li>
              <li>fresh bake</li>
            </ul>
          </div>
        </div>
      </section>
      {/* --------------------------------------section6----------------------------------------- */}
      <section id="section6">
        <div
          className="title-text"
          id="title4"
          //  ref={title5Ref}
        >
          {visibility.title4 && (
            <div className="title-text-box">
              <div>
                <RotateText text="THE CELLAR" />
              </div>
            </div>
          )}
        </div>
        {/* slider component renders flashing slider of images, also links to wines page */}
        <Slider />
      </section>
      {/* -------------------------------------------section7------------------------------------ */}
      <section id="section7">
        <div id="section7-title">
          <div
            className="title-text"
            id="title5"
            //  ref={title6Ref}
          >
            {visibility.title5 && (
              <div className="title-text-box">
                <div>
                  <RotateText text=" SOMMALIER" />
                </div>
                <div>
                  <RotateText text=" " />
                </div>
                <div>
                  <RotateText text="TEAM" />
                </div>
              </div>
            )}
          </div>
          <h4>at your service</h4>
        </div>
        <div id="som-box">
          <div className="som" id="som1">
            <div id="som-img1" className="som-img"></div>
            <p>Robert Parker</p>
          </div>

          <div className="som" id="som2">
            <div id="som-img2" className="som-img"></div>
            <p>Oz Clarke</p>
          </div>

          <div className="som" id="som3">
            <div id="som-img3" className="som-img"></div>
            <p>Jancis Robinson</p>
          </div>
        </div>

        <p>happy to assist your choice of wine and food pairing</p>
      </section>
    </main>
  );
};
export default Home;
