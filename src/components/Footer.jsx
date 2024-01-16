import logo from '../assets/Logo.svg';

const Footer = () => {
  return (
    <footer className="py-10 gap-1 flex flex-col items-center">
      <div className="avatar">
        <div className="w-24">
          <img src={logo} alt='logo' />
        </div>
      </div>
      <p>Created by <a className='hover:text-red-500' href="https://instagram.com/oebaedz">Zbad</a>, IKSADA Creative Team</p>
      <p>© 2024. All Rights Reserved</p>
    </footer>
  );
};

export default Footer;
