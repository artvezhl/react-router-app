import React from "react";
import Layout from "../components/Layout/Layout";

const NotFoundPage = () => {
  return (
    <Layout>
      <div className="flex-column">
        <h2 className="text-center">404</h2>
        <p className="text-center">page not found</p>
      </div>
    </Layout>
  );
};

export default NotFoundPage;
