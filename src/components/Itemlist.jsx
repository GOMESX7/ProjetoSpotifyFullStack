import React from 'react';
import Singleitem from './Singleitem';
import {Link , useLocation} from "react-router-dom";



const Itemlist = ({ title  , items , itemsArray , path , idPath}) => {

const { pathname } = useLocation();
const isHome = pathname === "/";
const finalItems = isHome ? items : Infinity;

  return (
            <div className="item-list">
              <div className="item-list__header">
                <h2>{title} populares</h2>

                {isHome ? (
                  <Link to={path} className="item-list__link" >
                  <p className='grow'>Mostrar tudo</p> 
                  </Link> 
                ) : (
                  <></>
                )}
                
              </div>
      
              <div className="item-list__container">
              {itemsArray
              .filter((currentValue , index ) => index < finalItems)
              .map(( currObj , index) => (
                <Singleitem 
                idPath={idPath}
                {...currObj}
                key={`${title} - ${index}`}/>
              ))}
      
              </div>
            </div>
  )
}

export default Itemlist
