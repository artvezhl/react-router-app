import React, { FC } from "react";
import Layout from "../components/Layout/Layout";

interface news {
  albumId: number;
  id: number;
  thumbnailUrl: string;
  title: string;
  url: string;
}

interface NewsPageProps {
  news: Array<news>;
}

const NewsPage: FC<NewsPageProps> = ({ news }) => {
  return (
    <Layout>
      <div className="container">
        <div className="row row-cols-3">
          {news.map((item) => (
            <div key={item.id} className="col">
              <img src={item.thumbnailUrl} alt={item.title} />
              <h4>{item.title}</h4>
            </div>
          ))}
          <div className="col ">Column</div>
        </div>
      </div>
    </Layout>
  );
};

export default NewsPage;
