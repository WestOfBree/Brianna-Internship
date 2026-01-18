import React from "react";
import AuthorBanner from "../images/author_banner.jpg";
import AuthorItems from "../components/author/AuthorItems";
import { Link } from "react-router-dom";
import AuthorImage from "../images/author_thumbnail.jpg";
import axios from "axios";
import { useState, useEffect } from "react";
import Skeleton from "../components/UI/Skeleton";

const Author = () => {
  const [authorData, setAuthorData] = useState(null);
  const [loading , setLoading] = useState(true);
  useEffect(() => {
    axios
    .get(`https://us-central1-nft-cloud-functions.cloudfunctions.net/authors?author=${authorId}`)
      .then((response) => {
        setAuthorData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching author data:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div id="wrapper">
        <div className="no-bottom no-top" id="content">
          <div id="top"></div>  
          <section>
            <Skeleton width={"100%"} height={"400px"} borderRadius={"0px"} />
          </section>

          <section aria-label="section">    
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <div className="d_profile de-flex">
                    <div className="de-flex-col">
                      <div className="profile_avatar">  
                        <Skeleton width={"150px"} height={"150px"} borderRadius={"50%"} />                     
                        <div className="profile_name">
                          <h4>  
                            <Skeleton width={"200px"} height={"20px"} borderRadius={"5px"} />
                            <span className="profile_username">
                              <Skeleton width={"150px"} height={"15px"} borderRadius={"5px"} />
                            </span>
                            <span id="wallet" className="profile_wallet">
                              <Skeleton width={"250px"} height={"15px"} borderRadius={"5px"} /> 
                            </span>
                            <button id="btn_copy" title="Copy Text">
                              <Skeleton width={"50px"} height={"20px"} borderRadius={"5px"} />
                            </button>
                          </h4>
                        </div>
                      </div>
                    </div>
                    <div className="profile_follow de-flex">
                      <div className="de-flex-col">
                        <div className="profile_follower">
                          <Skeleton width={"100px"} height={"15px"} borderRadius={"5px"} />
                        </div>
                        <Link to="#" className="btn-main">
                          <Skeleton width={"80px"} height={"30px"} borderRadius={"5px"} />

                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="de_tab tab_simple">
                    <Skeleton width={"100%"} height={"400px"} borderRadius={"10px"} />  
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    );
  }

    else{

  return (
    <div id="wrapper">
      <div className="no-bottom no-top" id="content">
        <div id="top"></div>

        <section
          id="profile_banner"
          aria-label="section"
          className="text-light"
          data-bgimage="url(images/author_banner.jpg) top"
          style={{ background: `url(${AuthorBanner}) top` }}
        ></section>

        <section aria-label="section">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="d_profile de-flex">
                  <div className="de-flex-col">
                    <div className="profile_avatar">
                      <img src={authorData.authorImage} alt="" />

                      <i className="fa fa-check"></i>
                      <div className="profile_name">
                        <h4>
                          {authorData.authorName}
                          <span className="profile_username">@{authorData.tag}</span>
                          <span id="wallet" className="profile_wallet">
                            {authorData.address}
                          </span>
                          <button id="btn_copy" title="Copy Text">
                            Copy
                          </button>
                        </h4>
                      </div>
                    </div>
                  </div>
                  <div className="profile_follow de-flex">
                    <div className="de-flex-col">
                      <div className="profile_follower">{authorData.followers} followers</div>
                      <Link to="#" className="btn-main">
                        Follow
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-12">
                <div className="de_tab tab_simple">
                  <AuthorItems authorData={authorData} loading={loading}/>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
  }
};

export default Author;
