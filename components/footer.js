function Footer() {
  return (
    <footer>
      <div className="inner">
        <div className="main">
          <div className="row">
            <h4>Company</h4>
            <a href="https://whoscall.com" target="_blank">
              Gogolook
            </a>
            <a href="privacy.html">Privacy policy</a>
            <a href="terms.html">Terms of service</a>
          </div>
          <div className="row">
            <h4>Services</h4>
            <a href="https://intersense.ddns.net:9022/Contact/Message?lang=en&id=1">
              Contact
            </a>
            <a href="faq.html">FAQs</a>
          </div>
          <div className="row">
            <h4>Follow us</h4>
            <a href="https://www.facebook.com/MessageCheckerBR" target="_blank">
              Facebook
            </a>
            <a
              href="https://www.instagram.com/messagechecker/?igshid=YmMyMTA2M2Y="
              target="_blank"
            >
              Instagram
            </a>
          </div>
          <div className="row">
            <h1>Message Checker</h1>
            <a className="app01" href="https://bit.ly/3b91YMY" target="_blank">
              <img src="/images/app01.png" alt="Google Play" />
            </a>
          </div>
        </div>
        <div className="copyright">
          <p>© 2021 Gogolook. All Rights Reserved.</p>
          <div className="lang">English (US)</div>
          <div className="lang_box">
            <span>English (US)</span>
            <a href="tw/index.html">中文</a>
            <a href="pt/index.html">Português</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
