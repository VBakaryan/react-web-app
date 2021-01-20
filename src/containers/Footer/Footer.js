import React from 'react'

import './Footer.scss'

function Footer(){
  return (
    <div className="app-footer">
     
        <div className="row">
          {/* Column1 */}
          <div className="col">
            <h4>Հետադարձ կապ</h4>
            <h4 className="list-unstyled">
              <li>Էլ․ հասցե՝ info@boxy.am</li>
              <li>Հեռ․՝+374 41 05-11-50</li>
              <li> </li>
            </h4>
          </div>
          {/* Column2 */}
          <div className="col">
            <h4>Սպասարկում</h4>
            <ui className="list-unstyled">
              <li>Հաճախ տրվող հարցեր</li>
              <li>Վերադարձի պայմաններ</li>
              <li>Օգտվելու կանոններ</li>
              <li>Առաքման պայմաններ</li>
            </ui>
          </div>
          {/* Column3 */}
          <div className="col">
            <h4>Գտիր մեզ սոց ցանցերում</h4>
            <ui className="list-unstyled">
              <li></li>
              <li></li>
              <li></li>
            </ui>
          </div>
        </div>
        <hr />
        <div className="row">
          <p className="col-sm">
            &copy;{new Date().getFullYear()} Boxy։ բոլոր իրավունքները պաշտպանված են։
          </p>
        </div>
      </div>
    
  );
}

export default Footer