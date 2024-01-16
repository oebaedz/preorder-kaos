import { useState } from "react";

const OrdererInfo = () => {
  const [nama, setNama] = useState('')
  const [noHP, setNoHP] = useState('')
  const [alamat, setAlamat] = useState('')

  return (
    <div className="space-y-4">
      <h3 className="mt-12 font-medium text-3xl">Informasi Pemesan</h3>
      <div className="mb-12 md:flex gap-4">
        <label className="form-control w-full">
          <div className="label">
            <span className="label-text text-lg font-medium">Nama</span>
          </div>
          <input
            type="text"
            placeholder="Masukkan nama"
            className="input input-bordered w-full"
            onChange={(e) => setNama(e.target.value)}
            value={nama}
            required
          />
        </label>
        <label className="form-control w-full">
          <div className="label">
            <span className="label-text text-lg font-medium">No. HP / WhatsApp</span>
          </div>
          <input
            type="text"
            placeholder="Masukkan nomor HP"
            className="input input-bordered w-full "
            onChange={(e) => setNoHP(e.target.value)}
            value={noHP}
          />
        </label>
        <label className="form-control w-full ">
          <div className="label">
            <span className="label-text text-lg font-medium">Alamat</span>
          </div>
          <input
            type="text"
            placeholder="Masukkan alamat"
            className="input input-bordered w-full"
            onChange={(e) => setAlamat(e.target.value)}
            value={alamat}
          />
        </label>
      </div>
    </div>
  );
};

export default OrdererInfo;
