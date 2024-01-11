const OrdererInfo = () => {
  return (
    <>
      <h3 className="mt-12 font-bold text-xl">Informasi Pemesan</h3>
      <div className="mb-12 md:flex gap-4">
        <label className="form-control w-full">
          <div className="label">
            <span className="label-text">Nama</span>
          </div>
          <input
            type="text"
            placeholder="Nama Anda"
            className="input input-bordered w-full"
          />
        </label>
        <label className="form-control w-full">
          <div className="label">
            <span className="label-text">No. HP / WhatsApp</span>
          </div>
          <input
            type="text"
            placeholder="Nomor Anda"
            className="input input-bordered w-full "
          />
        </label>
        <label className="form-control w-full ">
          <div className="label">
            <span className="label-text">Alamat</span>
          </div>
          <input
            type="text"
            placeholder="Alamat Anda"
            className="input input-bordered w-full "
          />
        </label>
      </div>
    </>
  );
};

export default OrdererInfo;
