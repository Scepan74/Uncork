import React, { useState, useEffect, useRef, useContext } from "react";

const AppContext = React.createContext();
//Context provider component for global state and functions
const AppProvider = ({ children }) => {
  //state value used for parallax
  const [offset, setOffset] = useState(0);
  // state of visibility position for each title and animated boards
  const [visibility, setVisibility] = useState({
    board2: false,
    board4: false,
    title1: false,
    title2: false,
    title3: false,
    title4: false,
    title5: false,
  });

  //ovo moze oba da bude jedan state+++++++++++
  //modal  state
  const [isModalOpen, setIsModalOpen] = useState(false);
  //modal details
  const [modalProps, setModalProps] = useState({
    eventTarget: "",
    modalDetails: "",
  });
  //++++++++++++++++++++++++++
  //burger state
  const [isBurgerOpen, setIsBurgerOpen] = useState(false);
  // refs
  const landRef = useRef(null);
  const sec2Ref = useRef(null);
  const navbarRef = useRef(null);
  const winesRef = useRef(null);
  const burgerRef = useRef(null);
  const headerRef = useRef(null);
  const contactRef = useRef(null);

  //scroll triggers style changes on landing, section 2 and header
  const handleScroll = () => {
    landRef.current.style.opacity = "0";
    landRef.current.style.zIndex = "0";
    sec2Ref.current.style.opacity = "1";
    sec2Ref.current.style.transform = "scale(1)";
    sec2Ref.current.style.zIndex = "2";
    headerRef.current.style.display = "block";
    headerRef.current.style.background = "black";
    navbarRef.current.style.display = "block";
    navbarRef.current.style.transform = "translate(-50%, -6vh)";
    navbarRef.current.style.width = "90vw";
    navbarRef.current.style.fontSize = "0.8rem";
    navbarRef.current.style.lineHeight = "100%";
    setOffset(window.scrollY);
  };

  // function get's element using id argument and access its top position. Returns true as position reaches the viewport;
  const checkVisibility = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const { top } = element.getBoundingClientRect();
      // window.innerHeight - viewport's height, not the entire document's height but height of the window minus the scrollbars, address bar, toolbar or any browser's UI elements
      return top < window.innerHeight;
    }
    return false;
  };

  //updates visibility state. Functionally updates visibility state.
  const updateVisibility = () => {
    const ids = [
      "board2",
      "board4",
      "title1",
      "title2",
      "title3",
      "title4",
      "title5",
    ];
    //sets visibility state. For each element's id updateVisibility() is called passing id and returning updated visibility state
    setVisibility((prev) => {
      const newVisibility = {};
      ids.forEach((id) => (newVisibility[id] = checkVisibility(id)));
      return { ...prev, ...newVisibility };
    });
  };
  //calls updateVisibility on mount and window scroll event
  useEffect(() => {
    window.addEventListener("scroll", updateVisibility);
    updateVisibility(); // Check visibility on mount
    //clears event listener
    return () => {
      window.removeEventListener("scroll", updateVisibility);
    };
  }, []);

  //sets isModalOpen state to true and modalProps based on the event target and modal details.
  const showModal = (e, modalDetails) => {
    setModalProps({
      eventTarget: e.currentTarget.className,
      modalDetails,
    });
    setIsModalOpen(true);
  };
  //closes modal and resets state
  const closeModal = (e) => {
    setIsModalOpen(false);
    setModalProps({});
  };

  //removing the "Reserve" button from the DOM and displaying the book box
  const showBookBox = () => {
    //access to the "Reserve" button node and removal
    const reserveElement = document.querySelector(".reserve");
    reserveElement.parentNode.removeChild(reserveElement);
    //access to the bookBox node and display of it
    const bookBoxElement = document.querySelector("#book-box-container");
    bookBoxElement.style.display = "block";
  };

  return (
    <AppContext.Provider
      value={{
        showBookBox,
        handleScroll,
        showModal,
        closeModal,
        setOffset,
        setIsBurgerOpen,
        landRef,
        sec2Ref,
        navbarRef,
        headerRef,
        burgerRef,
        winesRef,
        contactRef,
        offset,
        visibility,
        isModalOpen,
        modalProps,
        isBurgerOpen,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
