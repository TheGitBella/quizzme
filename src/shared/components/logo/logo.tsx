import { Quizzme } from '../../../assets/images';

import './style.css';

function Logo() {
  return (
    <div className="logo">
      <img src={Quizzme} alt="QuizzMe" className="img-logo" />
    </div>
  );
}

export { Logo };
