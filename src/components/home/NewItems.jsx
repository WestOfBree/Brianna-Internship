import React from "react";
import { Link } from "react-router-dom";
import AuthorImage from "../../images/author_thumbnail.jpg";
import nftImage from "../../images/nftImage.jpg";
import axios from "axios";
import { useState, useEffect } from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import CountDown from "../home/CountDown";
import AOS from 'aos';
import 'aos/dist/aos.css'; 

const NewItems = ({newItems, isLoading}) => {
AOS.init();
  if (newItems.length === 0 || isLoading) {
    return <div>
      <section id="section-items" className="no-bottom">
        <div className="container">
          <div className="row">
            <div className="col-lg-12"> 
              <div className="text-center">
                <h2 data-aos="fade-up" data-aos-duration="1000">New Items</h2>
                <div className="small-border bg-color-2"></div>
              </div>
            </div>
     <OwlCarousel className="owl-theme owl-loaded owl-drag" items={4} loop={true} margin={10} dots={false} loadingClass="owl-loading" responsive={{0:{items:1},600:{items:2},1000:{items:4}}} nav>
          
            {new Array(4).fill(0).map((newItems, index) => (
              <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12" key={index}>
                <div className="nft__item">
                  <div className="author_list_pp">
                    <div className="skeleton-box" style={{ width: '50px', height: '50px', borderRadius: '50%' }}></div>
                  </div>
                  <div className="de_countdown">
                    <div className="skeleton-box" style={{ width: '80px', height: '20px', borderRadius: '5px' }}></div>
                  </div>  
                  <div className="nft__item_wrap">
                    <div className="nft__item_extra">
                      <div className="nft__item_buttons"> 
                        <div className="skeleton-box" style={{ width: '80px', height: '30px', borderRadius: '5px', marginBottom: '10px' }}></div>
                        <div className="nft__item_share">
                          <div className="skeleton-box" style={{ width: '60px', height: '20px', borderRadius: '5px' }}></div>
                        </div>
                      </div>
                    </div>
                    <div className="skeleton-box" style={{ width: '100%', height: '200px', borderRadius: '10px' }}></div>
                  </div>
                  <div className="nft__item_info">
                    <div className="skeleton-box" style={{ width: '80%', height: '20px', borderRadius: '5px', marginBottom: '10px' }}></div>
                    <div className="skeleton-box" style={{ width: '60%', height: '15px', borderRadius: '5px', marginBottom: '10px' }}></div>
                  </div>
                </div>
              </div>
            ))}
          </OwlCarousel>
          </div>
        </div>
      </section>
    </div>;
  }   
  else
  return (
    <section id="section-items" className="no-bottom">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="text-center">
              <h2 data-aos="fade-up" data-aos-duration="1000">New Items</h2>
              <div data-aos="fade-down" data-aos-duration="1000" className="small-border bg-color-2"></div>
            </div>
          </div>
          <OwlCarousel data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200" className="owl-theme owl-loaded owl-drag" items={4} loop={true} margin={10} dots={false} loadingClass="owl-loading" responsive={{0:{items:1},600:{items:2},1000:{items:4}}} nav>
          {newItems.map((newItems, index) => (
              <div className="nft__item">
                <div className="author_list_pp">
                  <Link
                    to={`/author/${newItems.authorId}`}
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    title={`Creator: ${newItems.authorName}`}
                  >
                    <img className="lazy" src={newItems.authorImage} alt="" />
                    <i className="fa fa-check"></i>
                  </Link>
                </div>
                  <CountDown expiryDate={newItems.expiryDate} />
                <div className="nft__item_wrap">
                  <div className="nft__item_extra">
                    <div className="nft__item_buttons">
                      <button>Buy Now</button>
                      <div className="nft__item_share">
                        <h4>Share</h4>
                        <a href="" target="_blank" rel="noreferrer">
                          <i className="fa fa-facebook fa-lg"></i>
                        </a>
                        <a href="" target="_blank" rel="noreferrer">
                          <i className="fa fa-twitter fa-lg"></i>
                        </a>
                        <a href="">
                          <i className="fa fa-envelope fa-lg"></i>
                        </a>
                      </div>
                    </div>
                  </div>

                  <Link to={`/item-details/${newItems.nftId}`}>
                    <img
                      src={newItems.nftImage}
                      className="lazy nft__item_preview"
                      alt=""
                    />
                  </Link>
                </div>
                <div className="nft__item_info">
                  <Link to={`/item-details/${newItems.nftId}`}>
                    <h4>{newItems.title}</h4>
                  </Link>
                  <div className="nft__item_price">{newItems.price}</div>
                  <div className="nft__item_like">
                    <i className="fa fa-heart"></i>
                    <span>{newItems.likes}</span>
                  </div>
                </div>
              </div>

          ))}
          </OwlCarousel>
        </div>
      </div>
    </section>
  );
};

export default NewItems;
