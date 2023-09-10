import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import ReactPaginate from "react-paginate";
import styles from "./PaginatedItems.module.css";
import Card2 from "./Card2.js";
import logo1 from "../Images/logo1.jpeg";
import logo2 from "../Images/logo2.jpeg";
import logo3 from "../Images/logo3.jpeg";
import logo4 from "../Images/logo4.jpeg";
import logo5 from "../Images/logo5.jpeg";
import logo6 from "../Images/logo6.jpeg";

// These are the example items, to simulate the fetching from other resources.
// const items = [1, 2, 3, 4, 5, 6];
const data = [
  {
    src: logo1,
    title: "Grilled Tomatoes at Home",
  },
  {
    src: logo2,
    title: "Snacks for Travel",
  },
  {
    src: logo3 ,
    title: "Post-Workout Recipes",
  },
  {
    src:logo4,
    title: "How to grill corn",
  },
  {
    src: logo5,
    title: "crunchwrap supreme",
  },
  {
    src:logo5,
    title: "crunchwrap supreme",
  },
];

function Items({ currentItems }) {
  return (
    <div className="flex md:justify-between md:flex-row items-center md:px-24 md:pb-16 flex-col justify-center px-8 pb-8 gap-10">
      {currentItems &&
        currentItems.map((item) => (
          <div>
            <Card2 img={item.src} title={item.title} />
          </div>
        ))}
    </div>
  );
}

export default function PaginatedItems({ itemsPerPage }) {
  // Item offsets are used here, although page offsets are also an option.
  const [itemOffset, setItemOffset] = useState(0);

  // Try retrieving things from other sources.
  // (This may be items loaded in a local state from an API endpoint with useEffect and useState, or items from props.)
  const endOffset = itemOffset + itemsPerPage;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = data.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(data.length / itemsPerPage);

  // The below function will be called when the user clicks to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % data.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  return (
    <>
      <Items currentItems={currentItems} />
      <ReactPaginate
        breakLabel="..."
        nextLabel=">"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="<"
        renderOnZeroPageCount={null}
        // Adding CSS styling to the pagination component by using the props provided by the react-paginate library
        containerClassName={styles.pagination}
        pageLinkClassName={styles.pageNum}
        previousLinkClassName={styles.pageNum}
        nextLinkClassName={styles.pageNum}
        activeLinkClassName={styles.active}
      />
    </>
  );
}
