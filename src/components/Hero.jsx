import { Link } from "react-router-dom";
import hero from "../assets/catalog.jpg";
import { useContext } from "react";
import { StoreContext } from "../StoreContext";

const Hero = () => {
  const {scrollList} = useContext(StoreContext)

  return (
    <div className="hero min-h-screen bg-base-200 px-4">
      <div className="hero-content flex-col lg:flex-row">
        <div className="pt-20">
          <h1 className="text-xl md:text-5xl font-medium">
            Pre Order Foto Masyayikh
          </h1>
          <h1 className="text-md md:text-2xl mt-2 font-medium">
            Chapter II | 01-30 April 2024
          </h1>
          <p className="py-6 md:text-xl font-light md:mr-44">
            Nyara, ngireng se messenah foto-foto pengasuh kita <span>di PP Darul Lughah Wal Karomah</span>
          </p>
          <button className="btn btn-accent hidden md:block" onClick={scrollList} >
            <Link>List Foto</Link>
          </button>
        </div>
        <img
          src={hero}
          className="max-w-sm rounded-lg shadow-2xl w-48 sm:w-60 md:w-80 md:mt-28 md:mr-10 mb-4"
        />
      </div>
    </div>
  );
};

export default Hero;
