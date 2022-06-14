import React from "react";
import Layout from "../components/Layout/Layout";
import "./PagesStyles.css";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import cover from "../images/susan-wilkinson-xuGGytlK0-E-unsplash.jpg";

const MainPage = () => {
  return (
    <Layout>
      <div className="main__cover row flex-column justify-content-center">
        <h1 className="text-center">Main page</h1>
        <img className="main__background" src={cover} alt="cover" />
      </div>
    </Layout>
  );
};

export default MainPage;
