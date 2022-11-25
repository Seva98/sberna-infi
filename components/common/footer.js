export default function Footer() {
  const isEn = () => typeof window !== 'undefined' && window.location.href.includes('/en');
  return (
    <footer className="theme-bg-primary" style={{ marginBottom: '-24px' }}>
      <div className="container text-center p-5">
        <div>
          <a href="#" id="open_preferences_center">
            {isEn() ? 'Edit cookies preferences' : 'Upravit preference cookies'}
          </a>
        </div>
        <div>
          {isEn() ? 'All rights reserved' : 'Všechna práva vyhrazena'} © {new Date().getFullYear()} LH Store s.r.o.
        </div>
        <div>
          <span>Made by </span>
          <a href="https://sevcik.dev" style={{ margin: '0 auto' }}>
            sevcik.dev
          </a>
        </div>
      </div>
    </footer>
  );
}
