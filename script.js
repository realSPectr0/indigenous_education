const pages = [
  ["index.html", "Home"],
  ["about.html", "About"],
  ["programs.html", "Programs & Support"],
  ["communities.html", "Working With Communities"],
  ["volunteer.html", "Volunteer"],
  ["contact.html", "Contact"],
];

const current = location.pathname.split("/").pop() || "index.html";
const navLinks = pages
  .map(([href, label]) => `<a href="${href}" ${current === href ? 'aria-current="page"' : ""}>${label}</a>`)
  .join("");

document.querySelector("#site-header").innerHTML = `
  <header>
    <div class="utility-bar">
      <div class="container utility-inner">
        <span>Bay Area, California</span>
        <span>Independent student-led volunteer organization</span>
      </div>
    </div>
    <div class="main-header">
      <div class="container header-inner">
        <a class="brand" href="index.html" aria-label="Student STEM Community Collaborative home">
          <span class="brand-seal" aria-hidden="true"><b>S</b><small>STEM</small></span>
          <span class="brand-words"><strong>Student STEM</strong><small>Community Collaborative</small></span>
        </a>
        <div class="header-actions">
          <a href="communities.html"><small>Community organizations</small><strong>Talk with our team</strong></a>
          <a href="volunteer.html"><small>Students</small><strong>Volunteer with us</strong></a>
          <a class="contact-button" href="contact.html">Contact us</a>
        </div>
        <button class="menu-button" type="button" aria-expanded="false" aria-controls="mobile-nav">Menu</button>
      </div>
    </div>
    <nav class="nav-bar" aria-label="Main navigation"><div class="container desktop-nav">${navLinks}</div></nav>
    <nav id="mobile-nav" class="mobile-nav" aria-label="Mobile navigation">${navLinks}</nav>
  </header>
`;

document.querySelector("#site-footer").innerHTML = `
  <footer class="site-footer">
    <div class="container footer-grid">
      <div>
        <p class="footer-brand">Student STEM<br><span>Community Collaborative</span></p>
        <p class="footer-summary">A Bay Area student-led group offering tutoring, STEM, engineering, and academic support through projects developed with Native communities and community organizations.</p>
      </div>
      <div>
        <p class="footer-label">Quick links</p>
        <a href="about.html">About our group</a>
        <a href="programs.html">Programs and support</a>
        <a href="communities.html">For community organizations</a>
        <a href="volunteer.html">Student volunteering</a>
      </div>
      <div>
        <p class="footer-label">Contact</p>
        <p>Bay Area, California</p>
        <a href="mailto:contact@example.org">[contact@email.org]</a>
        <a class="footer-button" href="contact.html">Contact our team</a>
      </div>
    </div>
    <div class="footer-bottom"><div class="container">
      <span>© <span id="year"></span> Student STEM Community Collaborative</span>
      <span>We do not represent or imply endorsement by any tribal government or Native organization.</span>
    </div></div>
  </footer>
`;

document.querySelector("#year").textContent = new Date().getFullYear();

const menuButton = document.querySelector(".menu-button");
const mobileNav = document.querySelector("#mobile-nav");
menuButton.addEventListener("click", () => {
  const open = menuButton.getAttribute("aria-expanded") === "true";
  menuButton.setAttribute("aria-expanded", String(!open));
  mobileNav.classList.toggle("open", !open);
});
