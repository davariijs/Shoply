import { Fragment, useEffect, useState } from 'react';
import FilterPart from '../../components/FilterPart/FilterPart';
import { Outlet, useLocation } from "react-router-dom";


export default function Women() {

  const [path, setPath] = useState();
  const location = useLocation();

  
  useEffect(() => {
    function locationPath () {
    switch(location.pathname) {
      case "/women/t-shirts":
        setPath("T-Shirts");
        break;
        case "/women/shoes":
        setPath("Shoes");
        break;
        case "/women/coats":
        setPath("Coats");
        break;
        case "/women/dresses":
        setPath("Dresses");
        break;
        case "/women/hoodies":
        setPath("Hoodies");
        break;
      default:
        setPath("Tops");
    }
  }
  locationPath();
  }, [location.pathname]);

  return (
    <Fragment>
      <div className=' lg:my-20 container mx-auto lg:px-0 px-4 lg:flex gap-12'>
      <FilterPart className=""/>
      <div className='py-14 w-full'>
            <div className='flex text-2xl font-semibold pb-14'>
              {path}
            </div>
            <Outlet />
        </div>
      </div>
        
    </Fragment>
  )
}