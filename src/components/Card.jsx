import React from "react";

const Card = () => {
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img
          src="https://cdn.neartail.com/1FAIpQLScVL3TX82e7LcGqYn_-PrVpXteJjDf9R240K7dgT7Lqtx26RA/1099963343/prdorgimage/2_KH%20BAIDLOWI%201.jpg"
          alt="Shoes"
          className="rounded-xl"
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">KH. Ahmad Baidlowi</h2>
        <p>Rp. 60.000 - 100.000</p>
        <div className="card-actions">
          <button className="btn btn-accent">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
