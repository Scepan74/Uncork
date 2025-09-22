import React, { useEffect, useState } from "react";
import wines from "../assets/data";
import WineCard from "../Components/WineCard";
import { useGlobalContext } from "./../Components/Context";
import { usePagination } from "../Components/usePagination";
import Modal from "../Components/Modal";

// page component renders a list of wine cards and navigates using pagination.
const Wines = () => {
  //context -  useRef access to navbar, header, isModalOpen and wines
  const { navbarRef, headerRef, winesRef, isModalOpen } = useGlobalContext();
  //state of current page number
  const [pageNumber, setPageNumber] = useState(1);
  //state contains the array of wine objects for the current page
  const [pageWines, setPageWines] = useState([]);
  //number of cards responsive to screen size
  const itemsPerPage =
    window.innerWidth <= 479
      ? wines.length
      : window.innerWidth <= 767
      ? 8
      : window.innerWidth <= 1024
      ? 10
      : 10;

  //custom hook usePagination takes wines array and number of itemsPerPage and returns an object containing array of pages and total number of pages
  const { arrayOfPages, totalPages } = usePagination({ wines, itemsPerPage });

  //sets decremented page number.If it is less than 1, it sets it to the last page.
  const prevPage = () => {
    setPageNumber((currentPageNumber) =>
      currentPageNumber === 1 ? totalPages : currentPageNumber - 1
    );
  };
  //sets incremented page number.If it is more than the total number of pages, it sets it to the first page.
  const nextPage = () => {
    setPageNumber((currentPageNumber) =>
      currentPageNumber === totalPages ? 1 : currentPageNumber + 1
    );
  };
  //sets page number to the specified page using index
  const gotoPage = (index) => setPageNumber(index + 1);

  //startIndex and endIndex slice the wines array based on the current page. Slice() method takes start and end parameters, but end is not included. So, startIndex (0 based) and endIndex (1 based) are used.
  useEffect(() => {
    //start of displayed wines in the array
    const startIndex = (pageNumber - 1) * itemsPerPage;
    //end of displayed wines in the array.
    const endIndex = startIndex + itemsPerPage;
    //slice() method returns a portion of an array into a new array object selected from start to end (end not included).
    setPageWines(wines.slice(startIndex, endIndex));
  }, [pageNumber]);

  useEffect(() => {
    //scroll to the top of the page on mount regardless of user scrolling previously
    window.scrollTo(0, 0);
    const header = headerRef.current;
    const navbar = navbarRef.current;
    // styling of navbar and header responsively
    if (header) {
      header.style.background = "black";
    }
    if (navbar) {
      navbar.style.width = "90vw";
      navbar.style.fontSize = "0.8rem";
      navbar.style.lineHeight = "100%";
      navbar.style.transform = "translate(-50%, -6vh)";
    }
  }, [headerRef, navbarRef]);

  return (
    <main id="wine-main">
      {/* toggles modal according to state */}
      {isModalOpen && <Modal />}
      <section className="wines-section" ref={winesRef}>
        <div className="wines-container">
          {/* rendering list of wine cards */}
          {pageWines.map((wine) => {
            return <WineCard key={wine.id} wine={wine} />;
          })}
        </div>
        {/*  pagination */}
        <div className="pagination-container">
          {/* prev button */}
          <button className="prev-btn " onClick={prevPage}>
            prev
          </button>
          {/* page buttons iterate through slice of wines array for that page. pageNumber is 1 based and index is 0 based, so active class is assigned to corresponding pageNumber-1 */}
          {arrayOfPages.map((pageArray, index) => {
            return (
              <button
                key={index}
                // active-btn class for active page
                className={`page-btn
            ${index === pageNumber - 1 ? "active-btn" : null}
            `}
                onClick={() => gotoPage(index)}
              >
                {index + 1}
              </button>
            );
          })}
          {/* next button */}
          <button className="next-btn" onClick={nextPage}>
            next
          </button>
        </div>
      </section>
    </main>
  );
};

export default Wines;
