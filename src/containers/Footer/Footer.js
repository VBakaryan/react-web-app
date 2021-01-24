import React from 'react';

import instagramIcon from '../../assets/Icons/instagram.png';

import './Footer.scss';

function Footer(){
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
             <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24">
              <g id="Group_682" data-name="Group 682" transform="translate(747.389 3368.981)">
                <path id="Path_63047" data-name="Path 63047" d="M22.625,25.938H1.375A1.376,1.376,0,0,1,0,24.561V3.376A1.376,1.376,0,0,1,1.375,2H22.625A1.376,1.376,0,0,1,24,3.376V24.561A1.376,1.376,0,0,1,22.625,25.938Z" transform="translate(-747.389 -3370.981)" fill="currentColor">
                </path>
                <path id="Path_63048" data-name="Path 63048" d="M310.575,202.153h1.482v-2.921a17.9,17.9,0,0,0-2.632-.232c-2.685,0-4.44,1.643-4.44,4.618v2.615H302v3.431h2.985v8.295h0V217.9h3.673v-8.232H311.4l.521-3.431h-3.26v-2.227A1.708,1.708,0,0,1,310.575,202.153Z" transform="translate(-1042.203 -3562.941)" fill="#fff"></path>
              </g>
             </svg>
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

export default Footer;