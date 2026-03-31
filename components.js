/**
 * Finluence — Reusable Components
 *
 * Usage in any HTML page:
 *   <div data-component="site-nav"></div>
 *   <div data-component="site-footer"></div>
 *   <div data-component="partner-strip"></div>
 *   <div data-component="cta-strip-creators"></div>
 *   <div data-component="cta-strip-brokers"></div>
 *
 * Then add before </body>:
 *   <script src="components.js"></script>
 */

(function () {

  /* ─────────────────────────────────────────────
     COMPONENT: site-nav
     The main navigation bar (all pages)
  ───────────────────────────────────────────── */
  const page = (window.location.pathname.split('/').pop() || 'index.html').toLowerCase();

  const SITE_NAV = `
    <nav>
      <div class="nav-inner">
        <a class="logo" href="index.html">finluence</a>
        <button class="nav-toggle" aria-label="Menu">
          <span></span><span></span><span></span>
        </button>
        <div class="nav-links" id="navLinks">
          <a href="index.html"${page === 'index.html' || page === '' ? ' class="nav-active"' : ''}>Home</a>
          <a href="creators.html"${page === 'creators.html' ? ' class="nav-active"' : ''}>Creators</a>
          <a href="brokers.html"${page === 'brokers.html' ? ' class="nav-active"' : ''}>Brokers</a>
          <a href="#">Network</a>
          <a href="#">About</a>
        </div>
      </div>
    </nav>
    <div class="nav-overlay" id="navOverlay"></div>
    <button class="nav-close" id="navClose" aria-label="Close menu">&#x2715;</button>
  `;

  /* ─────────────────────────────────────────────
     COMPONENT: site-footer
     The main footer (all pages)
  ───────────────────────────────────────────── */
  const SITE_FOOTER = `
    <footer id="contact">
      <div class="wrap">
        <div class="footer-inner">
          <div>
            <span class="footer-logo">finluence</span>
            <p class="footer-tagline">Media for the trading world.</p>
          </div>
          <div class="footer-subscribe">
            <form class="footer-email-form" onsubmit="return false;">
              <input type="email" placeholder="Your email address" />
              <button type="submit" aria-label="Subscribe">
                <svg viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </button>
            </form>
          </div>
          <div class="footer-socials">
            <a href="#" aria-label="Instagram">
              <svg viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="5"/><circle cx="17.5" cy="6.5" r="1" fill="#fff" stroke="none"/></svg>
            </a>
            <a href="#" aria-label="YouTube">
              <svg viewBox="0 0 24 24"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="#fff" stroke="none"/></svg>
            </a>
            <a href="#" aria-label="TikTok">
              <svg viewBox="0 0 24 24"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"/></svg>
            </a>
            <a href="#" aria-label="X">
              <svg viewBox="0 0 24 24"><path d="M4 4l6.5 8L4 20h2l5.5-6.5L16 20h4l-6.5-8L20 4h-2l-5.5 6.5L8 4H4z" stroke-linejoin="round"/></svg>
            </a>
          </div>
          <div class="footer-copy">
            <a href="#">About Us</a>
            <span>·</span>
            <a href="mailto:hello@finluence.com">Contact Us</a>
            <span>·</span>
            <a href="#">Terms &amp; Conditions</a>
            <span>·</span>
            <a href="#">Privacy Policy</a>
            <span>·</span>
            <a href="#">Cookies Policy</a>
          </div>
        </div>
      </div>
    </footer>
  `;

  /* ─────────────────────────────────────────────
     COMPONENT: partner-strip
     Exclusive partner logos (creators & brokers pages)
  ───────────────────────────────────────────── */
  const PARTNER_STRIP = `
    <div class="partner-strip">
      <span>Exclusive Partnerships with:</span>
      <img src="public/AxiNew.png" alt="Axi" />
      <img src="public/PUPrimeNew.png" alt="PU Prime" />
      <img src="public/VantageNew.png" alt="Vantage" />
      <img src="public/vtmarkets-removebg-preview.png" alt="VT Markets" />
    </div>
  `;

  /* ─────────────────────────────────────────────
     COMPONENT: cta-strip-creators
     Closing CTA strip — creators page
  ───────────────────────────────────────────── */
  const CTA_STRIP_CREATORS = `
    <section class="closing-cta" id="apply">
      <div class="wrap">
        <div class="cta-strip">
          <div class="cta-strip-text">Join a trusted network of experts and builders shaping creators in:</div>
          <div class="cta-pills">
            <span class="cta-pill">Forex</span>
            <span class="cta-pill">Crypto</span>
            <span class="cta-pill">Fintech</span>
            <span class="cta-pill">Commodities</span>
            <span class="cta-pill">Web3</span>
            <span class="cta-pill">Affiliates</span>
          </div>
        </div>
      </div>
    </section>
  `;

  /* ─────────────────────────────────────────────
     COMPONENT: cta-strip-brokers
     Closing CTA strip — brokers page
  ───────────────────────────────────────────── */
  const CTA_STRIP_BROKERS = `
    <section class="closing-cta" id="apply">
      <div class="wrap">
        <div class="cta-strip">
          <div class="cta-strip-text">Join a trusted network of experts and builders shaping brokers in:</div>
          <div class="cta-pills">
            <span class="cta-pill">Forex</span>
            <span class="cta-pill">Crypto</span>
            <span class="cta-pill">Fintech</span>
            <span class="cta-pill">Commodities</span>
            <span class="cta-pill">Web3</span>
            <span class="cta-pill">Affiliates</span>
          </div>
        </div>
      </div>
    </section>
  `;

  /* ─────────────────────────────────────────────
     INJECT — replace all [data-component] divs
  ───────────────────────────────────────────── */
  const components = {
    'site-nav':           SITE_NAV,
    'site-footer':        SITE_FOOTER,
    'partner-strip':      PARTNER_STRIP,
    'cta-strip-creators': CTA_STRIP_CREATORS,
    'cta-strip-brokers':  CTA_STRIP_BROKERS,
  };

  document.querySelectorAll('[data-component]').forEach(function (el) {
    const name = el.dataset.component;
    if (components[name]) {
      const wrapper = document.createRange().createContextualFragment(components[name]);
      el.replaceWith(wrapper);
    }
  });

  /* ─────────────────────────────────────────────
     SHARED SCRIPT: Mobile nav toggle
     (runs after injection so nav elements exist)
  ───────────────────────────────────────────── */
  function initMobileNav() {
    const toggle  = document.querySelector('.nav-toggle');
    const links   = document.getElementById('navLinks');
    const overlay = document.getElementById('navOverlay');
    const closeBtn = document.getElementById('navClose');
    if (!toggle || !links) return;

    function openMenu() {
      links.classList.add('open');
      if (overlay) overlay.classList.add('open');
      if (closeBtn) closeBtn.classList.add('open');
      document.body.style.overflow = 'hidden';
    }
    function closeMenu() {
      links.classList.remove('open');
      if (overlay) overlay.classList.remove('open');
      if (closeBtn) closeBtn.classList.remove('open');
      document.body.style.overflow = '';
    }

    toggle.addEventListener('click', openMenu);
    if (closeBtn) closeBtn.addEventListener('click', closeMenu);
    if (overlay)  overlay.addEventListener('click', closeMenu);
    links.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', closeMenu);
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initMobileNav);
  } else {
    initMobileNav();
  }

})();
