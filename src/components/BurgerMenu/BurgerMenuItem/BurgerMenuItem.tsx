import { FC } from 'react';
import './BurgerMenuItem.scss';
import classNames from 'classnames';
import { NavLink } from 'react-router-dom';

interface BurgerMenuItemProps {
  title: string;
  to: string;
  isSelected: boolean;
  onClick: () => void;
}

export const BurgerMenuItem: FC<BurgerMenuItemProps> = ({ title, to, isSelected, onClick }) => (
  <li className="BurgerMenuItem" onClick={onClick} key={title}>
    <NavLink to={to} className={classNames(
      'BurgerMenuItem__link',
      { 'BurgerMenuItem__link--active': isSelected }
    )}>
      {title}
    </NavLink>
  </li>
);