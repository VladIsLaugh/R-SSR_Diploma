import Link from 'next/link'
import {useRouter} from 'next/router'
// import {parseCookies} from 'nookies'
// import cookie from 'js-cookie'
export const Navbar = ()=>{
   const router = useRouter()
  //  const cookieuser = parseCookies()
  //  const user =  cookieuser.user ? JSON.parse(cookieuser.user) : ""
 
   function isActive(route){
     if(route== router.pathname){
         return "active"
     }
     else ""
  }

    return(
        <nav>
        <div className="nav-wrapper #1565c0 blue darken-3">
          <Link href="/"><a className="brand-logo left">MyStore</a></Link>
          <ul id="nav-mobile" className="right">
          <li className={isActive('/cart')}><Link href="/cart"><a>cart</a></Link></li>
            {
          
              <li className={isActive('/create')}><Link href="/create"><a>create</a></Link></li>
            }
        
            
            <>
                <li className={isActive('/account')}><Link href="/account"><a>Account</a></Link></li>
                <li><button className="btn red" onClick={()=>{
                  cookie.remove('token')
                  cookie.remove('user')
                  router.push('/login')
                }}>logout</button></li>  
             </>   
            
 
           
           
          </ul>
        </div>
      </nav>
    )
}
