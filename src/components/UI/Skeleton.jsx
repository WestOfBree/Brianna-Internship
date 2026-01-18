import React from "react";

const Skeleton = ({ width, height, borderRadius, children }) => {
  return (
    <div
      className="skeleton-box"
      style={{ width: width, height: height, borderRadius: borderRadius }}
    >
      {children ? (
        children
      ) : (
        <div className="nft_coll" key={"skeleton"}>
          <div className="nft_wrap">
            <div
              className="skeleton-box"
              style={{ width: "100%", height: "200px", borderRadius: "10px" }}
            ></div>
          </div>
          <div className="nft_coll_pp">
            <div
              className="skeleton-box"
              style={{ width: "50px", height: "50px", borderRadius: "50%" }}
            ></div>
          </div>
          <div className="nft_coll_info">
            <div
              className="skeleton-box"
              style={{
                width: "80%",
                height: "20px",
                borderRadius: "5px",
                marginBottom: "10px",
              }}
            ></div>
            <div
              className="skeleton-box"
              style={{ width: "60%", height: "15px", borderRadius: "5px" }}
            ></div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Skeleton;
