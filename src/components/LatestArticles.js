import React, { useState } from "react";
import PaginatedItems from "./PaginatedItems";

const LatestArticles = () => {
  return (
    <div>
        <h1 className="font-source-sans-pro text-5xl font-bold md:text-left text-[#0E2368] text-center py-8 px-24">
            Latest Articles
        </h1>
      <div>
        <PaginatedItems itemsPerPage={3} />
      </div>
    </div>
  );
};

export default LatestArticles;
