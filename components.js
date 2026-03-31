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
     COMPONENT: capabilities-creators
     What We Do carousel — creators page
  ───────────────────────────────────────────── */
  const CAPABILITIES_CREATORS = `
    <section class="capabilities">
      <div class="wrap">
        <div class="cap-header">
          <div class="cap-header-left">
            <h2>What We Do</h2>
            <p>Everything a trading creator needs, in one place.</p>
          </div>
          <a class="btn btn--purple btn-section-desktop" href="#apply" style="padding: 14px 36px; font-size: 15px; flex-shrink: 0; align-self: flex-start;">Partner With Us</a>
        </div>
      </div>
      <div class="cap-track-wrapper">
        <button class="carousel-arrow prev cap-prev" aria-label="Previous">&#8249;</button>
        <button class="carousel-arrow next cap-next" aria-label="Next">&#8250;</button>
        <div class="cap-track">
          <div class="cap-card">
            <div class="cap-img" style="background-image:url('public/creators/contentandpublishing.jpeg'); background-position: center center;"></div>
            <div class="cap-scrim"></div>
            <div class="cap-content">
              <h3>Content &amp; Publishing</h3>
              <p class="cap-desc">From content strategy to scheduling and distribution, we build the full publishing system around your channel — so you stay consistent across YouTube, TikTok and Instagram without losing creative momentum.</p>
            </div>
          </div>
          <div class="cap-card">
            <div class="cap-img" style="background-image:url('public/creators/event-apperances.png'); background-position: center center;"></div>
            <div class="cap-scrim"></div>
            <div class="cap-content">
              <h3>Events &amp; Appearances</h3>
              <p class="cap-desc">We place our creators at the industry's most important moments — from trading expos in Dubai to creator summits in London. The right room, the right audience, the right introduction.</p>
            </div>
          </div>
          <div class="cap-card">
            <div class="cap-img" style="background-image:url('public/creators/deal-manage.png'); background-position: center center;"></div>
            <div class="cap-scrim"></div>
            <div class="cap-content">
              <h3>Deal Management</h3>
              <p class="cap-desc">We handle every stage of the deal — contracts, negotiations, deliverables and payments — so you never have to chase a brand or navigate a contract alone. We protect you and make sure every deal runs on your terms.</p>
            </div>
          </div>
          <div class="cap-card">
            <div class="cap-img" style="background-image:url('https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=800&fit=crop')"></div>
            <div class="cap-scrim"></div>
            <div class="cap-content">
              <h3>Audience Growth</h3>
              <p class="cap-desc">We build growth strategies specifically for finance and trading audiences — cross-platform distribution, community building and monetisation frameworks that turn followers into a compounding, long-term asset.</p>
            </div>
          </div>
          <div class="cap-card">
            <div class="cap-img" style="background-image:url('https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=600&h=800&fit=crop')"></div>
            <div class="cap-scrim"></div>
            <div class="cap-content">
              <h3>Brand Representation</h3>
              <p class="cap-desc">We connect you directly with the world's leading trading brokers and brands — negotiating deals, managing relationships and making sure every partnership is built around your audience, not just your numbers.</p>
            </div>
          </div>
        </div>
      </div>
      <div class="btn-section-mobile wrap">
        <a class="btn btn--purple" href="#apply" style="padding: 14px 36px; font-size: 15px;">Partner With Us</a>
      </div>
    </section>
  `;

  /* ─────────────────────────────────────────────
     COMPONENT: capabilities-brokers
     What We Do carousel — brokers page
  ───────────────────────────────────────────── */
  const CAPABILITIES_BROKERS = `
    <section class="capabilities">
      <div class="wrap">
        <div class="cap-header">
          <div class="cap-header-left">
            <h2>What We Do</h2>
            <p>Everything a trading broker needs to go global.</p>
          </div>
          <a class="btn btn--purple btn-section-desktop" href="#apply" style="padding: 14px 36px; font-size: 15px; flex-shrink: 0; align-self: flex-start;">Partner With Us</a>
        </div>
      </div>
      <div class="cap-track-wrapper">
        <button class="carousel-arrow prev cap-prev" aria-label="Previous">&#8249;</button>
        <button class="carousel-arrow next cap-next" aria-label="Next">&#8250;</button>
        <div class="cap-track">
          <div class="cap-card">
            <div class="cap-img" style="background-image:url('public/contentandcampaigns.png'); background-position: center center;"></div>
            <div class="cap-scrim"></div>
            <div class="cap-content">
              <h3>Content &amp; Campaigns</h3>
              <p class="cap-desc">From campaign strategy to creator briefs and distribution, we build the full marketing system around your brand — so you stay consistent across YouTube, TikTok and Instagram without losing campaign momentum.</p>
            </div>
          </div>
          <div class="cap-card">
            <div class="cap-img" style="background-image:url('public/eventsandactivations.jpg'); background-position: center center;"></div>
            <div class="cap-scrim"></div>
            <div class="cap-content">
              <h3>Events &amp; Sponsorships</h3>
              <p class="cap-desc">From sports sponsorships to branded live events and industry activations, we place your brand in front of engaged trading audiences — at the moments they're most switched on and ready to act.</p>
            </div>
          </div>
          <div class="cap-card">
            <div class="cap-img" style="background-image:url('public/brandidentity.jpg'); background-position: center center;"></div>
            <div class="cap-scrim"></div>
            <div class="cap-content">
              <h3>Brand Identity</h3>
              <p class="cap-desc">From visual identity to brand positioning and content tone, we build the full brand system around your presence in trading media — so you stand out in a crowded market and stay memorable long term.</p>
            </div>
          </div>
          <div class="cap-card">
            <div class="cap-img" style="background-image:url('public/creators/contentandpublishing.jpeg'); background-position: center center;"></div>
            <div class="cap-scrim"></div>
            <div class="cap-content">
              <h3>Creator Sourcing</h3>
              <p class="cap-desc">From initial discovery to full vetting and onboarding, we find the right trading creators for your brand — matching your target audience, compliance requirements and campaign objectives so every partnership starts on solid ground.</p>
            </div>
          </div>
          <div class="cap-card">
            <div class="cap-img" style="background-image:url('public/creators/deal-manage.png'); background-position: center center;"></div>
            <div class="cap-scrim"></div>
            <div class="cap-content">
              <h3>Performance Reporting</h3>
              <p class="cap-desc">From campaign launch to final delivery, we track every metric that matters — reach, engagement, conversions and ROI — so you always know exactly what your investment is doing and where to go next.</p>
            </div>
          </div>
        </div>
      </div>
      <div class="btn-section-mobile wrap">
        <a class="btn btn--purple" href="#apply" style="padding: 14px 36px; font-size: 15px;">Partner With Us</a>
      </div>
    </section>
  `;

  /* ─────────────────────────────────────────────
     COMPONENT: represent-creators
     "We represent you" section — creators page
  ───────────────────────────────────────────── */
  const REPRESENT_CREATORS = `
    <section class="represent">
      <div class="wrap">
        <div class="mgmt-grid">
          <div class="mgmt-photo">
            <div class="bg"></div>
            <div class="scrim"></div>
            <div class="inner">
              <div>
                <span style="font-size:12px;font-weight:600;text-transform:uppercase;letter-spacing:0.1em;color:#ffffff;display:block;margin-bottom:8px;">CREATOR MONETIZATION</span>
                <h3>We represent you.</h3>
              </div>
            </div>
          </div>
          <div class="mgmt-info">
            <div class="magic-text" data-magic-text>We manage and represent trading creators — securing brand deals, expanding into new markets, and building long-term value. We negotiate, strategize and unlock new opportunities with you.</div>
            <div class="stats-bar">
              <div class="stat"><div class="num">35+</div><div class="lbl">Trading Creators</div></div>
              <div class="stat"><div class="num">27+</div><div class="lbl">Countries Covered</div></div>
            </div>
          </div>
        </div>
        <div class="sub-cards">
          <div class="sub-card">
            <div class="sub-icon"><svg viewBox="0 0 24 24"><path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/></svg></div>
            <h4>Brand Deals &amp; Partnerships</h4>
            <p>Direct access to the world's leading trading brokers and brands.</p>
          </div>
          <div class="sub-card">
            <div class="sub-icon"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M2 12h20"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg></div>
            <h4>Global Market Access</h4>
            <p>We open doors in markets across Europe, the Middle East and Asia.</p>
          </div>
          <div class="sub-card">
            <div class="sub-icon"><svg viewBox="0 0 24 24"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg></div>
            <h4>Predictable Content Strategy</h4>
            <p>A clear, consistent content plan built around your audience and goals.</p>
          </div>
          <div class="sub-card">
            <div class="sub-icon"><svg viewBox="0 0 24 24"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg></div>
            <h4>Full Management &amp; Support</h4>
            <p>We handle the business side so you can focus on what you do best.</p>
          </div>
        </div>
      </div>
    </section>
  `;

  /* ─────────────────────────────────────────────
     COMPONENT: represent-brokers
     "We work for you" section — brokers page
  ───────────────────────────────────────────── */
  const REPRESENT_BROKERS = `
    <section class="represent">
      <div class="wrap">
        <div class="mgmt-grid">
          <div class="mgmt-photo">
            <div class="bg"></div>
            <div class="scrim"></div>
            <div class="inner">
              <div>
                <span style="font-size:12px;font-weight:600;text-transform:uppercase;letter-spacing:0.1em;color:#ffffff;display:block;margin-bottom:8px;">HOW IT WORKS</span>
                <h3>We work for you.</h3>
              </div>
            </div>
          </div>
          <div class="mgmt-info">
            <div class="magic-text" data-magic-text>We connect and represent trading brokers — building creator campaigns, expanding into new markets, and delivering long-term audience value. We negotiate, strategize and unlock new opportunities with you.</div>
            <div class="stats-bar">
              <div class="stat"><div class="num">26+</div><div class="lbl">Broker Partners</div></div>
              <div class="stat"><div class="num">23+</div><div class="lbl">Countries Reached</div></div>
            </div>
          </div>
        </div>
        <div class="sub-cards">
          <div class="sub-card">
            <div class="sub-icon"><svg viewBox="0 0 24 24"><path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/></svg></div>
            <h4>Creator Sourcing &amp; Vetting</h4>
            <p>We find and qualify the right creators for your brand and target audience.</p>
          </div>
          <div class="sub-card">
            <div class="sub-icon"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M2 12h20"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg></div>
            <h4>Campaign Strategy &amp; Planning</h4>
            <p>We open doors to trading audiences across Europe, the Middle East and Asia.</p>
          </div>
          <div class="sub-card">
            <div class="sub-icon"><svg viewBox="0 0 24 24"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg></div>
            <h4>Compliance-Friendly Content</h4>
            <p>A clear, consistent campaign plan built around your objectives and budget.</p>
          </div>
          <div class="sub-card">
            <div class="sub-icon"><svg viewBox="0 0 24 24"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg></div>
            <h4>Full Campaign Management</h4>
            <p>We handle the business side so your team can focus on what matters most.</p>
          </div>
        </div>
      </div>
    </section>
  `;

  /* ─────────────────────────────────────────────
     COMPONENT: case-studies-creators
     Creator Case Studies carousel
  ───────────────────────────────────────────── */
  const CASE_STUDIES_CREATORS = `
    <section class="case-studies">
      <div class="wrap">
        <div class="section-top">
          <div>
            <h2>Creator Case Studies</h2>
            <p>From audience to income — here's how we did it.</p>
          </div>
          <a class="btn btn--purple btn-section-desktop" href="#apply" style="padding: 14px 36px; font-size: 15px; flex-shrink: 0; align-self: flex-start;">Partner With Us</a>
        </div>
      </div>
      <div class="case-carousel-wrap">
        <button class="carousel-arrow prev" onclick="var c=document.querySelector('.case-carousel'),s=c.querySelector('.case-card');c.scrollBy({left:-(s.offsetWidth+20),behavior:'smooth'})">&#8249;</button>
        <button class="carousel-arrow next" onclick="var c=document.querySelector('.case-carousel'),s=c.querySelector('.case-card');c.scrollBy({left:s.offsetWidth+20,behavior:'smooth'})">&#8250;</button>
        <div class="case-carousel">
          <div class="case-card" onclick="openCase('cs-dovy')" style="cursor:pointer;">
            <div class="case-img" style="background: url('public/creators/boaching-empire.jpg') center / cover no-repeat; width:100%; height:100%;"></div>
            <div class="case-scrim"></div>
            <div class="case-info">
              <div class="case-tag">Monetization &amp; Branding</div>
              <div class="case-title">Building a Coaching Empire from Scratch</div>
            </div>
          </div>
          <div class="case-card" onclick="openCase('cs-fxd')" style="cursor:pointer;">
            <div class="case-img" style="background: url('public/creators/followers-into-business.png') center / cover no-repeat; width:100%; height:100%;"></div>
            <div class="case-scrim"></div>
            <div class="case-info">
              <div class="case-tag">Brand Partnership &amp; Growth</div>
              <div class="case-title">Turning a Following into a Business</div>
            </div>
          </div>
          <div class="case-card" onclick="openCase('cs-smith')" style="cursor:pointer;">
            <div class="case-img" style="background: url('public/creators/zero-to-7000.jpeg') center / cover no-repeat; width:100%; height:100%;"></div>
            <div class="case-scrim"></div>
            <div class="case-info">
              <div class="case-tag">TikTok &amp; Community Growth</div>
              <div class="case-title">From Zero to 7,000 in 30 Days</div>
            </div>
          </div>
        </div>
      </div>
      <div class="btn-section-mobile wrap">
        <a class="btn btn--purple" href="#apply" style="padding: 14px 36px; font-size: 15px;">Partner With Us</a>
      </div>
    </section>
  `;

  /* ─────────────────────────────────────────────
     COMPONENT: case-studies-brokers
     Broker Case Studies carousel
  ───────────────────────────────────────────── */
  const CASE_STUDIES_BROKERS = `
    <section class="case-studies">
      <div class="wrap">
        <div class="section-top">
          <div>
            <h2>Broker Case Studies</h2>
            <p>From audience to income — here's how we did it.</p>
          </div>
          <a class="btn btn--purple btn-section-desktop" href="#apply" style="padding: 14px 36px; font-size: 15px; flex-shrink: 0; align-self: flex-start;">Partner With Us</a>
        </div>
      </div>
      <div class="case-carousel-wrap">
        <button class="carousel-arrow prev" onclick="var c=document.querySelector('.case-carousel'),s=c.querySelector('.case-card');c.scrollBy({left:-(s.offsetWidth+20),behavior:'smooth'})">&#8249;</button>
        <button class="carousel-arrow next" onclick="var c=document.querySelector('.case-carousel'),s=c.querySelector('.case-card');c.scrollBy({left:s.offsetWidth+20,behavior:'smooth'})">&#8250;</button>
        <div class="case-carousel">
          <div class="case-card" onclick="openCase('cs-bdswiss')" style="cursor:pointer;">
            <div class="case-img" style="background-image:url('public/creators/bdswiss-image.png'); background-size:cover; background-position:center; width:100%; height:100%;"></div>
            <div class="case-scrim"></div>
            <img class="case-logo" src="public/bdswiss-logo.png" alt="BDSwiss" />
            <div class="case-info">
              <div class="case-tag">Creator Campaign</div>
              <div class="case-title">33,000 FTDs in Under 12 Months</div>
            </div>
          </div>
          <div class="case-card" onclick="openCase('cs-vantage')" style="cursor:pointer;">
            <div class="case-img" style="background-image:url('public/creators/vantage-image.png'); background-size:cover; background-position:center; width:100%; height:100%;"></div>
            <div class="case-scrim"></div>
            <img class="case-logo" src="public/VantageNew.png" alt="Vantage" style="height:52px;" />
            <div class="case-info">
              <div class="case-tag">Retention &amp; Growth</div>
              <div class="case-title">$100M+ in Deposits</div>
            </div>
          </div>
          <div class="case-card" onclick="openCase('cs-bullo')" style="cursor:pointer;">
            <div class="case-img" style="background-image:url('public/creators/bullo-image.png'); background-size:cover; background-position:center; width:100%; height:100%;"></div>
            <div class="case-scrim"></div>
            <img class="case-logo" src="public/bullo-logo.png" alt="Bullo" />
            <div class="case-info">
              <div class="case-tag">Brand Strategy &amp; Sponsorships</div>
              <div class="case-title">60,000 Waitlist Signups</div>
            </div>
          </div>
        </div>
      </div>
      <div class="btn-section-mobile wrap">
        <a class="btn btn--purple" href="#apply" style="padding: 14px 36px; font-size: 15px;">Partner With Us</a>
      </div>
    </section>
  `;

  /* ─────────────────────────────────────────────
     COMPONENT: why-finluence-creators
     Why Partner with Finluence — creators stats & benefits
  ───────────────────────────────────────────── */
  const WHY_FINLUENCE_CREATORS = `
    <section class="why-finluence">
      <div class="wrap">
        <div class="section-head">
          <h2>Why Partner with Finluence?</h2>
          <p>A decade building the world's most connected trading media network.</p>
        </div>
        <div class="why-stats">
          <div class="why-stat-card">
            <img src="public/stat-views.jpeg" alt="Finluence creators" />
            <div class="stat-text">
              <div class="num">500M+</div>
              <div class="label">Views Generated</div>
              <div class="desc">across YouTube, TikTok, Instagram</div>
            </div>
          </div>
          <div class="why-stat-card">
            <img src="public/stat-revenue.jpeg" alt="Finluence team" />
            <div class="stat-text">
              <div class="num">$100M+</div>
              <div class="label">Partnership Revenue</div>
              <div class="desc">across 23+ countries since 2016</div>
            </div>
          </div>
        </div>
        <div class="benefits-box">
          <div class="benefits-list">
            <div class="benefit-item"><div class="b-icon"><svg viewBox="0 0 24 24"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg></div><span>Access to the worlds top trading brokers</span></div>
            <div class="benefit-item"><div class="b-icon"><svg viewBox="0 0 24 24"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg></div><span>Event invitations across Europe, Middle East &amp; Asia</span></div>
            <div class="benefit-item"><div class="b-icon"><svg viewBox="0 0 24 24"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg></div><span>Content strategy and publishing support</span></div>
            <div class="benefit-item"><div class="b-icon"><svg viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg></div><span>Deal negotiation and career management</span></div>
            <div class="benefit-item"><div class="b-icon"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg></div><span>Global audience growth across all platforms</span></div>
            <div class="benefit-item"><div class="b-icon"><svg viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg></div><span>Long-term representation, not one-off deals</span></div>
          </div>
        </div>
        <div class="partner-strip">
          <span>Exclusive Partnerships with:</span>
          <img src="public/AxiNew.png" alt="Axi" />
          <img src="public/PUPrimeNew.png" alt="PU Prime" />
          <img src="public/VantageNew.png" alt="Vantage" />
          <img src="public/vtmarkets-removebg-preview.png" alt="VT Markets" />
        </div>
      </div>
    </section>
  `;

  /* ─────────────────────────────────────────────
     COMPONENT: why-finluence-brokers
     Why Partner with Finluence — brokers stats & benefits
  ───────────────────────────────────────────── */
  const WHY_FINLUENCE_BROKERS = `
    <section class="why-finluence">
      <div class="wrap">
        <div class="section-head">
          <h2>Why Partner with Finluence?</h2>
          <p>A decade building the world's most connected trading media network.</p>
        </div>
        <div class="why-stats">
          <div class="why-stat-card">
            <img src="public/stat-views.jpeg" alt="Finluence creators" />
            <div class="stat-text">
              <div class="num">100K+</div>
              <div class="label">FTD's Achieved</div>
              <div class="desc">From Creators, Influencers &amp; Paid Traffic</div>
            </div>
          </div>
          <div class="why-stat-card">
            <img src="public/stat-revenue.jpeg" alt="Finluence team" />
            <div class="stat-text">
              <div class="num">$300M+</div>
              <div class="label">Deposits Sourced</div>
              <div class="desc">Across 23+ countries since 2016</div>
            </div>
          </div>
        </div>
        <div class="benefits-box">
          <div class="benefits-list">
            <div class="benefit-item"><div class="b-icon"><svg viewBox="0 0 24 24"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg></div><span>Access to the world's top trading creators</span></div>
            <div class="benefit-item"><div class="b-icon"><svg viewBox="0 0 24 24"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg></div><span>Event activations across Europe, Middle East &amp; Asia</span></div>
            <div class="benefit-item"><div class="b-icon"><svg viewBox="0 0 24 24"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg></div><span>Campaign strategy and content production support</span></div>
            <div class="benefit-item"><div class="b-icon"><svg viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg></div><span>Creator sourcing, vetting and deal management</span></div>
            <div class="benefit-item"><div class="b-icon"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg></div><span>Targeted audience reach across all major platforms</span></div>
            <div class="benefit-item"><div class="b-icon"><svg viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg></div><span>Long-term partnerships, not one-off campaigns</span></div>
          </div>
        </div>
        <div class="partner-strip">
          <span>We've worked with:</span>
          <img src="public/AxiNew.png" alt="Axi" />
          <img src="public/PUPrimeNew.png" alt="PU Prime" />
          <img src="public/VantageNew.png" alt="Vantage" />
          <img src="public/vtmarkets-removebg-preview.png" alt="VT Markets" />
        </div>
      </div>
    </section>
  `;

  /* ─────────────────────────────────────────────
     INJECT — replace all [data-component] divs
  ───────────────────────────────────────────── */
  const components = {
    // Shared
    'site-nav':                SITE_NAV,
    'site-footer':             SITE_FOOTER,
    'partner-strip':           PARTNER_STRIP,
    // Creators page
    'capabilities-creators':   CAPABILITIES_CREATORS,
    'represent-creators':      REPRESENT_CREATORS,
    'case-studies-creators':   CASE_STUDIES_CREATORS,
    'why-finluence-creators':  WHY_FINLUENCE_CREATORS,
    'cta-strip-creators':      CTA_STRIP_CREATORS,
    // Brokers page
    'capabilities-brokers':    CAPABILITIES_BROKERS,
    'represent-brokers':       REPRESENT_BROKERS,
    'case-studies-brokers':    CASE_STUDIES_BROKERS,
    'why-finluence-brokers':   WHY_FINLUENCE_BROKERS,
    'cta-strip-brokers':       CTA_STRIP_BROKERS,
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
