import React from "react";

import ArticleContent from "./ArticleContent";
import Sidebar from "./Sidebar";

const ArticlePage: React.FC = () => {
  return (
    <div
      data-layername="desktop2ArticlePage"
      className="flex flex-col pt-9 bg-white"
    >
      <div className="flex flex-col items-end self-center w-full max-w-[1173px] max-md:max-w-full">
        <main className="self-stretch mt-28 max-md:mt-10 max-md:mr-2.5 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col">
            <ArticleContent />
            <Sidebar />
          </div>
        </main>
      </div>
    </div>
  );
};

export default ArticlePage;  
