function Header() {
  return (
    <header>
      <a className="logo" href="index.html">
        <img src="/images/logo.svg" alt="Logo" />
      </a>
      <nav>
        <ul>
          <li>
            <a href="faq.html">FAQs </a>
          </li>
          <li>
            <a
              className="download"
              href="https://bit.ly/3b91YMY"
              target="_blank"
            >
              Download Now
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
