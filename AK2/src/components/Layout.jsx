import Nav from './Nav';

function Layout({ children }) {
  return (
    <div className="container">
      <header>
        <Nav />
      </header>
      <main>{children}</main>
      <footer>
        <p>&copy; 2025 Ressursarkiv</p>
      </footer>
    </div>
  );
}

export default Layout;
