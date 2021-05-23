import Link from "next/link";
import { useRouter } from "next/router";
// import {parseCookies} from 'nookies'
// import cookie from 'js-cookie'
export const Navbar = () => {
  const router = useRouter();
  //  const cookieuser = parseCookies()
  //  const user =  cookieuser.user ? JSON.parse(cookieuser.user) : ""

  function isActive(route) {
    if (route == router.pathname) {
      return "active";
    } else "";
  }

  return (
    <nav>
      <div className="nav-wrapper #1565c0 blue darken-3">
        <Link href="/">
          <a className="brand-logo left">Covid-19 tracker</a>
        </Link>
        <ul id="nav-mobile" className="right">
          <li className={isActive("/")}>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li className={isActive("/map")}>
            <Link href="/map">
              <a>Map</a>
            </Link>
          </li>

          <li className={isActive("/charts")}>
            <Link href="/charts">
              <a>Charts</a>
            </Link>
          </li>
          <li className={isActive("/table")}>
            <Link href="/table">
              <a>Table</a>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
