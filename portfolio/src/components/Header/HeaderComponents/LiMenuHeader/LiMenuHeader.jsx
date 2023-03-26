import './LiMenuHeader.css';

const menuList = [
  { name: 'Home' },
  { name: 'Projects' },
  { name: 'Skills' },
];

export const LiMenuHeader = () => {
  return menuList.map((item, i) => (
    <li className="li-header" key={i}>
      <h3>{item.name}</h3>
    </li>
  ));
};
