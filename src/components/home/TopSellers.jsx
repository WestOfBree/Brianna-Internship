import React from "react";
import { Link } from "react-router-dom";
import AuthorImage from "../../images/author_thumbnail.jpg";
import axios from "axios";
import { useState, useEffect } from "react";
import Skeleton from "../UI/Skeleton";
import AOS from 'aos';
import 'aos/dist/aos.css';

const TopSellers = () => {
  AOS.init();
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
              <h2 data-aos="fade-up" data-aos-duration="1000">Top Sellers</h2>
              <div data-aos="fade-down" data-aos-duration="1000" className="small-border bg-color-2"></div>
            </div>
          </div>
          <div className="col-md-12">
            <ol className="author_list">
              {new Array(5).fill(0).map((topSellers, index) => (
                <li key={index}>  
                  <div className="author_list_pp">
                    <Skeleton width={50} height={50} borderRadius="50%" />
                  </div>  
                  <div className="author_list_info">
                    <Skeleton width={100} height={20} borderRadius="5px" marginBottom="10px" />
                    <Skeleton width={60} height={15} borderRadius="5px" />     
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
              <h2 data-aos="fade-up" data-aos-duration="1000">Top Sellers</h2>
              <div data-aos="fade-down" data-aos-duration="1000" className="small-border bg-color-2"></div>
            </div>
          </div>
          <div className="col-md-12">
            <ol data-aos="fade-up" data-aos-duration="1000" className="author_list">
              {topSellers.map((topSellers, index) => (
                <li key={index}>
                  <div className="author_list_pp">
                    <Link to={`/author/${topSellers.authorId}`}>
                      <img
                        className="lazy pp-author"
                        src={topSellers.authorImage}
                        alt=""
                      />
                      <i className="fa fa-check"></i>
                    </Link>
                  </div>
                  <div className="author_list_info">
                    <Link to={`/author/${topSellers.authorId}`}>{topSellers.authorName}</Link>
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
