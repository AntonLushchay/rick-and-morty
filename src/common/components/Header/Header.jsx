import logo from '../../../assets/images/logo.png';
import { NavLink } from 'react-router';
import s from './Header.module.css';

const getClassName = ({ isActive }) => {
    return isActive ? `${s.headerLink} ${s.active}` : s.headerLink;
};

export const Header = () => {
    return (
        <nav className={s.container}>
            <NavLink to='/rick-and-morty/' end>
                <img src={logo} alt='logotype' className={s.logo} />
            </NavLink>
            <NavLink to='/rick-and-morty/' className={getClassName} end>
                Home
            </NavLink>
            <NavLink to='/rick-and-morty/characters' className={getClassName}>
                Characters
            </NavLink>
            <NavLink to='/rick-and-morty/locations' className={getClassName}>
                Locations
            </NavLink>
            <NavLink to='/rick-and-morty/episodes' className={getClassName}>
                Episodes
            </NavLink>
        </nav>
    );
};
