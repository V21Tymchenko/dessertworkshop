import { Link, Outlet } from 'react-router-dom';
import navItems from '../../helpers/navItems';
import MainHeader from '../../components/MainHeader/MainHeader';


const SharedLayout = () => {
  return (
    <>
      <MainHeader/>
      <header><nav>{navItems.map(({href, text}) => (
        <Link to={href} key={href}>{text}</Link>
      ))}</nav></header>
      <Outlet />
    </>
  );
};

export default SharedLayout;