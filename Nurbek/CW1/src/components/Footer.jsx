import "./Footer.css";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <span>© {year} MySite</span>
        <span className="muted">Все права защищены.</span>
      </div>
    </footer>
  );
}
