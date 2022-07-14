import { Link } from 'react-router-dom';

import { Returnimg } from '../../../assets/images';

import './style.css';

function ReturnLogin() {
  return (
    <div className="return-login">
      <Link to="/">
        <img src={Returnimg} alt="return" />
      </Link>
    </div>
  );
}

export { ReturnLogin };
