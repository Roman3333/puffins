import { Link } from 'react-router-dom';
import './Links.scss';

const links = [
  { label: 'FAQ', value: '/faq' },
  { label: 'Support', value: '/support' },
  { label: 'Docs', value: '/docs' },
];

export const Links = () => {
  return (
    <div className="puffins-links">
      <ul className="puffins-links__ul">
        {links.map(({ label, value }) => (
          <li key={value} className="puffins-links__li">
            <Link to={value} className="puffins-links__link">
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
