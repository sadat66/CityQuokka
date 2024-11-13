import React from "react";
import ArticlePage from "./ArticlePage";
import Header from "@/app/sharedcomponents/Header";
import CityHeader from "../CityHeader";
import CustomFooter from "@/app/sharedcomponents/CustomFooter";
import ArticleText from "./ArticleText";

export default function page() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <div className="flex flex-col self-center w-full max-w-[1120px] max-md:max-w-full bg-white flex-grow">
        <Header />
        <CityHeader />
        <ArticlePage />
        <ArticleText/>
        <CustomFooter />
      </div>
    </div>
  );
}
