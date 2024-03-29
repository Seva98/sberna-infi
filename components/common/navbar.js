import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import logo from '../../assets/images/sberna-logo.png';
import { useState } from 'react';

const Navbar = () => {
  const [collapsed, setCollapsed] = useState(true);
  const router = useRouter();
  const isEn = () => typeof window !== 'undefined' && window.location.href.includes('/en');

  return (
    <nav className="navbar navbar-expand-lg navbar-light my-3">
      <div className="container">
        <button
          className="navbar-toggler"
          type="button"
          onClick={() => setCollapsed(!collapsed)}
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo01"
          aria-controls="navbarTogglerDemo01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        {/* <Link href="/">
          <a className="navbar-brand">
            <Image src={logo} alt="logo" height="48" width="200" />
          </a>
        </Link> */}
        <div className={`${collapsed ? 'collapse' : ''} navbar-collapse`} id="navbarTogglerDemo03">
          <div className="navbar-nav ms-auto auto">
            <div className={`nav-item nav-link me-4 ${router.pathname === '/' && 'is-active'}`}>
              <Link href={isEn() ? '/en' : '/'}>{isEn() ? 'Homepage' : 'Domů'}</Link>
            </div>
            <div className={`nav-item nav-link me-4 ${router.pathname === '/cenik' && 'is-active'}`}>
              <Link href={isEn() ? '/en/cenik' : '/cenik'}>{isEn() ? 'Price List' : 'Ceník'}</Link>
            </div>
            <div className={`nav-item nav-link me-4 ${router.pathname === '/svoz' && 'is-active'}`}>
              <Link href={isEn() ? '/en/svoz' : '/svoz'}>{isEn() ? 'Collection' : 'Svoz'}</Link>
            </div>
            <div className={`nav-item nav-link me-4 ${router.pathname === '/demolice' && 'is-active'}`}>
              <Link href={isEn() ? '/en/demolice' : '/demolice'}>{isEn() ? 'Demolition' : 'Demolice'}</Link>
            </div>
            {/* <div className={`nav-item nav-link me-4 ${router.pathname === '/sluzby' && 'is-active'}`}>
              <Link href="/sluzby">Služby</Link>
            </div> */}
            <div className={`nav-item nav-link me-4 ${router.pathname === '/kontakty' && 'is-active'}`}>
              <Link href={isEn() ? '/en/kontakty' : '/kontakty'}>{isEn() ? 'Contacts' : 'Kontakty'}</Link>
            </div>
            <div className={`nav-item nav-link me-4`}>
              <Link href="https://www.sbernakrmelin.cz/">Sběrna Krmelín</Link>
            </div>
            <div className={`nav-item nav-link me-4`}>
              <Link href="https://www.sbernahavirov.cz/">Sběrna Havířov</Link>
            </div>
            <div className={`nav-item nav-link me-4 `}>
              <Link href={isEn() ? '/' : '/en'} passHref>
                <Image src={`/assets/${isEn() ? 'czech-republic.png' : 'united-states.png'}`} width={24} height={24} alt="us" />
              </Link>
            </div>
            {/* <div className={`nav-item nav-link me-4 ${router.pathname === '/o-nas' && 'is-active'}`}>
              <Link href="/o-nas">O nás</Link>
            </div> */}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
