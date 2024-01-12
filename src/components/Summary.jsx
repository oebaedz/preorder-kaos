import React from "react";

const Summary = () => {
  return (
    <div className="my-12">
      <h3 className="font-bold text-xl mb-4">Review Pesanan</h3>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Item</th>
              <th>Harga</th>
              <th>Jumlah</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr className="hover">
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
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
              <td>Rp. 100.000</td>
              <td>2</td>
              <th>Rp. 200.000</th>
            </tr>
            {/* row 2 */}
            <tr className="hover">
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img
                        src="https://cdn.neartail.com/1FAIpQLScVL3TX82e7LcGqYn_-PrVpXteJjDf9R240K7dgT7Lqtx26RA/1141992984/prdorgimage/81_semua%20(150x40cm%20-%20Copy.jpg"
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">Foto KH. Ali Wafa</div>
                    <div className="text-sm opacity-50">Ukuran 10RS</div>
                  </div>
                </div>
              </td>
              <td>Rp. 60.000</td>
              <td>1</td>
              <th>Rp. 60.000</th>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Summary;
