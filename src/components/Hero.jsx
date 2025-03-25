import { Link } from "react-router-dom";
import hero from "../assets/catalog.png";
import img1 from "../assets/catalog.png";
import img2 from "../assets/pendek.png";
import img3 from "../assets/panjang.png";
import { useContext } from "react";
import { StoreContext } from "../StoreContext";

const Hero = () => {
  const { scrollList } = useContext(StoreContext)

  return (
    <>
      
      <div className="hero min-h-screen bg-base-200 px-4">
        <div className="hero-content flex-col lg:flex-row">
          <div className="pt-20">
            <h1 className="text-xl md:text-5xl font-medium">
              Open Pre Order
            </h1>
            <h1 className="text-md md:text-2xl mt-2 font-medium">
              Kaos Edisi Spesial Reuni Akbar dan Halal Bihalal ke-10
            </h1>
            <p className="py-6 md:text-xl font-light md:mr-44">
              Ikatan Santri dan Alumni  <span>PP Darul Lughah Wal Karomah</span>
            </p>
            <button className="btn btn-accent hidden md:block" onClick={scrollList} >
              <Link>List Produk</Link>
            </button>
          </div>
          {/* <div className="carousel carousel-item max-w-sm max-h-80 p-4 space-x-4 bg-gray-500 rounded-box">
            <div className="carousel-item">
              <img src={img1} className="rounded-box" />
            </div>
            <div className="carousel-item">
              <img src={img2} className="rounded-box" />
            </div>
            <div className="carousel-item">
              <img src={img3} className="rounded-box" />
            </div>
            <div className="carousel-item">
              <img src={img1} className="rounded-box" />
            </div>
            <div className="carousel-item">
              <img src={img2} className="rounded-box" />
            </div>
            <div className="carousel-item">
              <img src="https://daisyui.com/images/stock/photo-1559181567-c3190ca9959b.jpg" className="rounded-box" />
            </div>
            <div className="carousel-item">
              <img src="https://daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.jpg" className="rounded-box" />
            </div>
          </div> */}
          <img
          src={hero}
          className="max-w-sm rounded-lg shadow-2xl w-48 sm:w-60 md:w-80 md:mt-28 md:mr-10 mb-4"
        />
        </div>
      </div>
    </>
  );
};

export default Hero;
