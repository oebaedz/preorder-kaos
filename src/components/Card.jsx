import { useState } from "react";

const Card = () => {

  const [item, setItem] = useState(0)

  const handleAddCart = (e) => {
    e.preventDefault()
    setItem(item + 1)
  }

  return (
    <div className="indicator">
      <div className="card w-96 max-w-fit md:max-w-full bg-base-100 shadow-xl">
        <figure className="px-3 pt-3">
          <img
            src="https://cdn.neartail.com/1FAIpQLScVL3TX82e7LcGqYn_-PrVpXteJjDf9R240K7dgT7Lqtx26RA/1099963343/prdorgimage/2_KH%20BAIDLOWI%201.jpg"
            alt="Shoes"
            className="rounded-xl"
          />
        </figure>
        <div className="card-body flex flex-row justify-between">
          <div>
          <h2 className="card-title">KH. Ahmad Baidlowi</h2>
          <p>Rp. 60.000 - 100.000</p>
          </div>
          <div className="card-actions">
            <button className="btn btn-accent" onClick={handleAddCart}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
            </button>
          </div>
        </div>
      </div>
      { item ? <span className="badge badge-accent badge-lg indicator-item">{item}</span> : "" }
      
    </div>
  );
};

export default Card;
