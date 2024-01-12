import React from "react";

const Footer = () => {
  return (
    <footer className="py-10 gap-1 flex flex-col items-center">
      <div className="avatar">
        <div className="w-24 rounded-full">
          <img src="https://imgs.search.brave.com/RO3MpR1URuwU1cve-kDm_fH3BI5IWiA8pLvR8J3LR-s/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzk5L2Uy/LzVjLzk5ZTI1YzQz/ZWVjNTZjZjM5ODU2/ZTlhMzMyN2I1YmEx/LS1taW5pb24tc21p/bGUtbWluaW9uLWZh/Y2UuanBn" />
        </div>
      </div>
      <p>Created by IKSADA</p>
      <p>© 2024. All Rights Reserved</p>
    </footer>
  );
};

export default Footer;
