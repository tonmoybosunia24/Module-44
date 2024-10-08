import { useState } from "react";
import Link from "../Link/Link";
import { IoMdMenu } from "react-icons/io";
import { IoCloseCircle } from "react-icons/io5";

const Navber = () => {

       const [open, setOpen] = useState(false);

       const routes = [
              { id: 1, path: '/', name: 'Home' },
              { id: 2, path: '/about', name: 'About' },
              { id: 3, path: '/blog', name: 'Blog' },
              { id: 4, path: '/contact', name: 'Contact' },
              { id: 5, path: '/services', name: 'Services' }
       ];

       return (
              <nav>
                     <div className="md:hidden" onClick={() => setOpen(!open)}>
                            {
                                   open === true ? <IoCloseCircle className="text-2xl" /> : <IoMdMenu className="text-xl" />
                            }     
                     </div>
                     <ul className={`md:flex absolute md:static duration-1000 bg-yellow-200 p-5 ${open ? "left-0" : "-left-60" }`}>
                            {
                                   routes.map(route => <Link key={route.id} route={route}></Link>)
                            }
                     </ul>
              </nav>
       );
};

export default Navber;