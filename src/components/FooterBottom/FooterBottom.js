import React from 'react';

import FacebookIcon from '../../assets/Icons/FacebookIcon';
import instagramIcon from '../../assets/Icons/instagram.png';

import './FooterBottom.scss';

function FooterBottom() {
  return (
    <div className="app-footer">
        <div className="app-footer__row">
          {/* Column1 */}
          <div className="app-footer__row__col">
            <h4>Հետադարձ կապ</h4>
            <ul className="app-footer__row__col__list-unstyled">
              <li>Էլ․ հասցե՝ info@boxy.am</li>
              <li>Հեռ․՝+374 41 05-11-50</li>
            </ul>
          </div>
          {/* Column2 */}
          <div className="app-footer__row__col">
            <h4>Սպասարկում</h4>
            <ul className="app-footer__row__col__list-unstyled">
              <li>Հաճախ տրվող հարցեր</li>
              <li>Վերադարձի պայմաններ</li>
              <li>Օգտվելու կանոններ</li>
              <li>Առաքման պայմաններ</li>
            </ul>
          </div>
          {/* Column3 */}
          <div className="app-footer__row__col">
            <h4>Գտիր մեզ սոց ցանցերում</h4>
            <div>
              <a href="https://www.facebook.com/boxyyerevan">
                <FacebookIcon />
              </a>
              <a href="instagram.com">
                  <img src={instagramIcon} alt="instagram-icon" className="app-footer__row__col__instagram_icon" />
              </a>
            </div>
            <ul className="list-unstyled">
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </div>
        </div>
        <div>
          <p className="app-footer__col-sm">
            &copy;{new Date().getFullYear()} Boxy։ բոլոր իրավունքները պաշտպանված են։
          </p>
        </div>
      </div>
    
  );
}

export default FooterBottom;