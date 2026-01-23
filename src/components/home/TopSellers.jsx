import React from "react";
import { Link } from "react-router-dom";
import AuthorImage from "../../images/author_thumbnail.jpg";
import axios from "axios";
import { useState, useEffect } from "react";

const TopSellers = () => {
  const [topSellers, setTopSellers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    axios.get("https://us-central1-nft-cloud-functions.cloudfunctions.net/topSellers")
    .then((response) => {
      setTopSellers(response.data);
      setIsLoading(false);

    })
    .catch((error) => {
      console.error("Error fetching data:", error);
      setIsLoading(false);
    });
  }, []);
    if (topSellers.length === 0 || isLoading) {
    return <div>
    <section id="section-popular" className="pb-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-12"> 
            <div className="text-center">
              <h2>Top Sellers</h2>
              <div className="small-border bg-color-2"></div>
            </div>
          </div>
          <div className="col-md-12">
            <ol className="author_list">
              {new Array(5).fill(0).map((topSellers, index) => (
                <li key={index}>  
                  <div className="author_list_pp">
                    <div className="skeleton-box" style={{ width: '50px', height: '50px', borderRadius: '50%' }}></div>
                  </div>  
                  <div className="author_list_info">
                    <div className="skeleton-box" style={{ width: '100px', height: '20px', borderRadius: '5px', marginBottom: '10px' }}></div>
                    <div className="skeleton-box" style={{ width: '60px', height: '15px', borderRadius: '5px' }}></div>     
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  </div>;
  }
  else 
    return (
    <section id="section-popular" className="pb-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="text-center">
              <h2>Top Sellers</h2>
              <div className="small-border bg-color-2"></div>
            </div>
          </div>
          <div className="col-md-12">
            <ol className="author_list">
              {topSellers.map((topSellers, index) => (
                <li key={index}>
                  <div className="author_list_pp">
                    <Link to={`/author/${topSellers.id}`}>
                      <img
                        className="lazy pp-author"
                        src={topSellers.authorImage}
                        alt=""
                      />
                      <i className="fa fa-check"></i>
                    </Link>
                  </div>
                  <div className="author_list_info">
                    <Link to={`/author/${topSellers.id}`}>{topSellers.authorName}</Link>
                    <span>{topSellers.price} ETH</span>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
};


export default TopSellers;
