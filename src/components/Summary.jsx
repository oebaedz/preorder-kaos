import React from "react";

const Summary = ({cart}) => {
  return (
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>Item</th>
            <th className={`${cart ? 'hidden' : ''}`}>Harga</th>
            <th className={`${cart ? 'hidden' : ''}`}>Jml</th>
            <th >Total</th>
          </tr>
        </thead>
        <tbody>
          <tr className="hover">
            <td>
              <div className="flex items-center gap-3">
                <div className={`avatar ${cart ? 'hidden' : ''}`}>
                  <div className="mask mask-squircle w-10 h-10">
                    <img
                      src="https://cdn.neartail.com/1FAIpQLScVL3TX82e7LcGqYn_-PrVpXteJjDf9R240K7dgT7Lqtx26RA/1099963343/prdorgimage/2_KH%20BAIDLOWI%201.jpg"
                      alt="Avatar Tailwind CSS Component"
                    />
                  </div>
                </div>
                <div>
                  <div className="font-bold">Foto KH. Baidlowi</div>
                  <div className="text-sm opacity-50">Ukuran 14RS</div>
                </div>
              </div>
            </td>
            <td className={`${cart ? 'hidden' : ''}`}>Rp. 100.000</td>
            <td className={`${cart ? 'hidden' : ''}`}>2</td>
            <th>Rp. 200.000</th>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Summary;
