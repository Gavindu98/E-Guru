import React from "react";
import Cover from "../../vendors/images/img1.jpg";
import defaultDp from "../../vendors/images/user.png"

const postCard: React.FC = () => {
  return (
    <div className="card bg-light text-white">
        <div className="dp-card">
        <img className="dp-icon" src={defaultDp} alt="Dp" />
        <div className="mt-1">
        <h6 className="text-info font-13">James warn </h6>
      <p className="text-info  font-11">rathnayakagavindu98@gmai.com</p>
      <p className="paddingTop font-9 text-muted">
        10 min ago
      </p>
        </div>
      
        </div>
        
      <img className="card-img" src={Cover} alt="Card image" />
      {/* <div className="card-img-overlay mt-70">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">
          This is a wider card with supporting text below as a natural lead-in
          to additional content. This content is a little bit longer.
        </p>
        <p className="card-text">Last updated 3 mins ago</p>
      </div> */}
      <div>
        <div className="dp-card ">
            <h6 className="text-dark font-13 p-4">5 Like</h6>
            <h6 className="text-dark font-13 p-4">10 Comment</h6>
            <hr/>
        </div>
        <div className="dp-card ">
            <h6 className="text-dark font-13 p-4">5 Like</h6>
            <h6 className="text-dark font-13 p-4">10 Comment</h6>
            <hr className="text-dark "/>
        </div>
      </div>
    </div>
  );
};

export default postCard;
