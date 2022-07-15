import { Link } from 'react-router-dom';

import { Returnimg } from '../../../assets/images';

import { ImgReturn } from './styled';

function ReturnLogin() {
  return (
    <div className="return-login">
      <Link to="/">
        <ImgReturn src={Returnimg} alt="return" />
      </Link>
    </div>
  );
}

export { ReturnLogin };
