/**
 * Attili & Associates - Global JavaScript v3
 */

/* ─── SHARED FOOTER ──────────────────────────────────────────────────── */
const buildFooter = (toHome, toPages) => `
  <footer class="bg-slate-900 text-white pt-14 pb-0">
    <div class="max-w-7xl mx-auto px-4 md:px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12 pb-12">
      <div class="sm:col-span-2 lg:col-span-1">
        <a href="${toHome}" class="inline-flex items-center gap-3 mb-5 group">
          <div class="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
            <svg viewBox="0 0 100 100" class="w-6 h-6 fill-white"><text x="50%" y="50%" text-anchor="middle" dy=".35em" font-family="Arial,sans-serif" font-weight="900" font-size="45">CA</text></svg>
          </div>
          <div class="leading-tight">
            <div class="text-lg font-bold text-white">Attili &amp; <span class="text-blue-400">Associates</span></div>
            <div class="text-[9px] uppercase tracking-widest text-slate-500 font-semibold">Chartered Accountants</div>
          </div>
        </a>
        <p class="text-slate-400 text-sm leading-relaxed">Strategic financial guidance and compliance excellence you can trust.</p>
      </div>
      <div>
        <h4 class="text-sm font-bold uppercase tracking-widest text-slate-300 mb-5">Quick Links</h4>
        <ul class="space-y-3 text-slate-400 text-sm">
          <li><a href="${toHome}" class="hover:text-blue-400 transition-colors flex items-center gap-2"><span class="w-1 h-1 bg-blue-600 rounded-full inline-block flex-shrink-0"></span>Home</a></li>
          <li><a href="${toPages}about.html" class="hover:text-blue-400 transition-colors flex items-center gap-2"><span class="w-1 h-1 bg-blue-600 rounded-full inline-block flex-shrink-0"></span>About Us</a></li>
          <li><a href="${toPages}services.html" class="hover:text-blue-400 transition-colors flex items-center gap-2"><span class="w-1 h-1 bg-blue-600 rounded-full inline-block flex-shrink-0"></span>Our Services</a></li>
          <li><a href="${toPages}careers.html" class="hover:text-blue-400 transition-colors flex items-center gap-2"><span class="w-1 h-1 bg-blue-600 rounded-full inline-block flex-shrink-0"></span>Careers</a></li>
          <li><a href="${toPages}query.html" class="hover:text-blue-400 transition-colors flex items-center gap-2"><span class="w-1 h-1 bg-blue-600 rounded-full inline-block flex-shrink-0"></span>Submit a Query</a></li>
          <li><a href="${toPages}contact.html" class="hover:text-blue-400 transition-colors flex items-center gap-2"><span class="w-1 h-1 bg-blue-600 rounded-full inline-block flex-shrink-0"></span>Contact Us</a></li>
          <li><a href="${toPages}privacy-policy.html" class="hover:text-blue-400 transition-colors flex items-center gap-2"><span class="w-1 h-1 bg-blue-600 rounded-full inline-block flex-shrink-0"></span>Privacy Policy</a></li>
        </ul>
      </div>
      <div>
        <h4 class="text-sm font-bold uppercase tracking-widest text-slate-300 mb-5">Our Office</h4>
        <ul class="space-y-4 text-slate-400 text-sm">
          <li class="flex gap-3 items-start"><i class="fas fa-map-marker-alt text-blue-400 mt-0.5 flex-shrink-0"></i><span>City Hyderabad,<br>State - Telangana</span></li>
          <li class="flex gap-3 items-center"><i class="fas fa-phone-alt text-blue-400 flex-shrink-0"></i><a href="tel:+919542460669" class="hover:text-blue-400 transition-colors">+91 9542460669</a></li>
          <li class="flex gap-3 items-start"><i class="fas fa-envelope text-blue-400 mt-0.5 flex-shrink-0"></i><a href="mailto:casaikumarattili@gmail.com" class="hover:text-blue-400 transition-colors break-all">casaikumarattili@gmail.com</a></li>
        </ul>
      </div>
      <div>
        <h4 class="text-sm font-bold uppercase tracking-widest text-slate-300 mb-5">Working Hours</h4>
        <ul class="space-y-3 text-slate-400 text-sm">
          <li class="flex justify-between gap-4 items-center"><span class="text-slate-300">Mon – Fri</span><span class="whitespace-nowrap bg-slate-800 px-2 py-0.5 rounded text-xs">9:00 AM – 6:00 PM</span></li>
          <li class="flex justify-between gap-4 items-center"><span class="text-slate-300">Saturday</span><span class="whitespace-nowrap bg-slate-800 px-2 py-0.5 rounded text-xs">9:00 AM – 2:00 PM</span></li>
          <li class="flex justify-between gap-4 items-center"><span class="text-red-400">Sunday</span><span class="whitespace-nowrap bg-red-900/30 text-red-400 px-2 py-0.5 rounded text-xs">Closed</span></li>
        </ul>
        <a href="${toPages}contact.html" class="mt-6 inline-block w-full text-center py-3 bg-blue-600 text-white text-sm font-bold rounded-full hover:bg-blue-700 transition-all shadow-lg">Get In Touch</a>
      </div>
    </div>
    <div class="border-t border-slate-800">
      <div class="max-w-7xl mx-auto px-4 md:px-6 py-5 flex flex-col sm:flex-row justify-between items-center gap-3 text-slate-500 text-xs">
        <span>&copy; ${new Date().getFullYear()} Attili &amp; Associates. All rights reserved.</span>
        <div class="flex gap-5">
          <a href="${toPages}privacy-policy.html" class="hover:text-blue-400 transition-colors">Privacy Policy</a>
          <a href="${toPages}contact.html" class="hover:text-blue-400 transition-colors">Contact</a>
        </div>
      </div>
    </div>
  </footer>
`;

/* ─── NAVBAR ─────────────────────────────────────────────────────────── */
const loadNavbar = () => {
  const isRoot  = !window.location.pathname.includes('/pages/');
  const toPages = isRoot ? 'pages/' : '';
  const toHome  = isRoot ? 'index.html' : '../index.html';

  const navHTML = `
    <nav class="fixed top-0 left-0 w-full z-50 pt-2 px-3 md:px-6" id="main-nav">
      <!-- Mobile top bar: phone + email always visible -->
      <div class="flex md:hidden items-center justify-between px-2 mb-1.5 text-[11px] font-semibold text-slate-500">
        <a href="tel:+919542460669" class="flex items-center gap-1.5 hover:text-blue-600 transition-colors">
          <svg class="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 005.47 5.47l.772-1.548a1 1 0 011.06-.539l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path></svg>
          +91 9542460669
        </a>
        <a href="mailto:casaikumarattili@gmail.com" class="flex items-center gap-1.5 hover:text-blue-600 transition-colors">
          <svg class="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg>
          Email Us
        </a>
      </div>
      <!-- Desktop top bar -->
      <div class="hidden md:flex justify-end gap-6 px-10 mb-2 text-[11px] font-bold tracking-wider text-slate-500 uppercase">
        <a href="tel:+919542460669" class="hover:text-blue-600 transition-colors flex items-center gap-2">
          <svg class="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 005.47 5.47l.772-1.548a1 1 0 011.06-.539l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path></svg>
          +91 9542460669
        </a>
        <a href="mailto:casaikumarattili@gmail.com" class="hover:text-blue-600 transition-colors flex items-center gap-2">
          <svg class="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg>
          casaikumarattili@gmail.com
        </a>
      </div>
      <!-- Main pill -->
      <div class="flex justify-between items-center bg-white/95 backdrop-blur-xl border border-slate-200/60 py-3 px-4 md:px-8 rounded-full shadow-2xl shadow-slate-200/50">
        <a href="${toHome}" class="flex items-center gap-2 md:gap-3 cursor-pointer group flex-shrink-0">
          <div class="flex items-center justify-center w-9 h-9 md:w-10 md:h-10 bg-blue-700 rounded-full shadow-sm group-hover:bg-blue-800 transition-all duration-300">
            <svg viewBox="0 0 100 100" class="w-6 h-6 md:w-7 md:h-7 fill-white"><text x="50%" y="50%" text-anchor="middle" dy=".35em" font-family="Arial,sans-serif" font-weight="900" font-size="45">CA</text></svg>
          </div>
          <div class="flex flex-col leading-none gap-0.5">
            <span class="text-base md:text-lg font-extrabold text-blue-600 tracking-tight whitespace-nowrap">Attili &amp; Associates</span>
            <span class="text-[8px] md:text-[9px] uppercase tracking-[0.18em] text-slate-900 font-black whitespace-nowrap">Chartered Accountants</span>
          </div>
        </a>
        <ul class="hidden lg:flex items-center space-x-1 font-medium text-gray-700 text-sm">
          <li><a href="${toHome}" class="px-3 py-2 rounded-full hover:bg-blue-50 hover:text-blue-600 transition-all duration-200">Home</a></li>
          <li><a href="${toPages}about.html" class="px-3 py-2 rounded-full hover:bg-blue-50 hover:text-blue-600 transition-all duration-200">About Us</a></li>
          <li class="relative group">
            <button class="flex items-center px-3 py-2 rounded-full hover:bg-blue-50 hover:text-blue-600 transition-all duration-200">
              Services <svg class="w-4 h-4 ml-1 opacity-50 group-hover:rotate-180 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
            </button>
            <div class="absolute left-0 mt-2 w-72 bg-white rounded-2xl shadow-2xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 overflow-hidden translate-y-2 group-hover:translate-y-0">
              <div class="py-2 flex flex-col text-xs font-semibold">
                <a href="${toPages}services.html#corporate" class="px-5 py-2.5 hover:bg-blue-50 hover:text-blue-600 border-l-4 border-transparent hover:border-blue-600 transition-all">Corporate Services</a>
                <a href="${toPages}services.html#audit" class="px-5 py-2.5 hover:bg-blue-50 hover:text-blue-600 border-l-4 border-transparent hover:border-blue-600 transition-all">Audit</a>
                <a href="${toPages}services.html#nri" class="px-5 py-2.5 hover:bg-blue-50 hover:text-blue-600 border-l-4 border-transparent hover:border-blue-600 transition-all">Non-Resident Services</a>
                <a href="${toPages}services.html#accounting" class="px-5 py-2.5 hover:bg-blue-50 hover:text-blue-600 border-l-4 border-transparent hover:border-blue-600 transition-all">Accounting Services</a>
                <a href="${toPages}services.html#payroll" class="px-5 py-2.5 hover:bg-blue-50 hover:text-blue-600 border-l-4 border-transparent hover:border-blue-600 transition-all">Payroll</a>
                <a href="${toPages}services.html#outsourcing" class="px-5 py-2.5 hover:bg-blue-50 hover:text-blue-600 border-l-4 border-transparent hover:border-blue-600 transition-all">Outsourcing Benefits</a>
                <a href="${toPages}services.html#tax" class="px-5 py-2.5 hover:bg-blue-50 hover:text-blue-600 border-l-4 border-transparent hover:border-blue-600 transition-all">Income Tax</a>
                <a href="${toPages}services.html#gst" class="px-5 py-2.5 hover:bg-blue-50 hover:text-blue-600 border-l-4 border-transparent hover:border-blue-600 transition-all">GST</a>
                <a href="${toPages}services.html#governance" class="px-5 py-2.5 hover:bg-blue-50 hover:text-blue-600 border-l-4 border-transparent hover:border-blue-600 transition-all">Corporate Governance</a>
                <a href="${toPages}services.html#tds" class="px-5 py-2.5 hover:bg-blue-50 hover:text-blue-600 border-l-4 border-transparent hover:border-blue-600 transition-all">TDS</a>
                <a href="${toPages}services.html#advisory" class="px-5 py-2.5 hover:bg-blue-50 hover:text-blue-600 border-l-4 border-transparent hover:border-blue-600 transition-all">Financial Advisory</a>
              </div>
            </div>
          </li>
          <li><a href="${toPages}query.html" class="px-3 py-2 rounded-full hover:bg-blue-50 hover:text-blue-600 transition-all duration-200">Query</a></li>
          <li><a href="${toPages}careers.html" class="px-3 py-2 rounded-full hover:bg-blue-50 hover:text-blue-600 transition-all duration-200">Careers</a></li>
          <li><a href="${toPages}contact.html" class="ml-2 px-5 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 shadow-md transition-all duration-200">Contact Us</a></li>
        </ul>
        <button class="lg:hidden p-2 text-gray-600 rounded-full hover:bg-gray-100 transition-all flex-shrink-0" id="menu-btn" aria-label="Open menu">
          <svg id="hamburger-icon" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/></svg>
          <svg id="close-icon" class="h-6 w-6 hidden" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>
        </button>
      </div>
      <!-- Mobile drawer -->
      <div id="mobile-menu" class="lg:hidden hidden mt-2 bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden">
        <div class="flex flex-col py-4">
          <a href="${toHome}" class="px-6 py-3 text-gray-700 font-semibold hover:bg-blue-50 hover:text-blue-600 transition-all">Home</a>
          <a href="${toPages}about.html" class="px-6 py-3 text-gray-700 font-semibold hover:bg-blue-50 hover:text-blue-600 transition-all">About Us</a>
          <div>
            <button id="mobile-services-btn" class="w-full flex justify-between items-center px-6 py-3 text-gray-700 font-semibold hover:bg-blue-50 hover:text-blue-600 transition-all">
              Services
              <svg id="services-arrow" class="w-4 h-4 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
            </button>
            <div id="mobile-services-list" class="hidden bg-slate-50 border-t border-slate-100">
              <a href="${toPages}services.html#corporate" class="block px-10 py-2.5 text-sm text-gray-600 hover:text-blue-600 border-l-4 border-transparent hover:border-blue-600 transition-all">Corporate Services</a>
              <a href="${toPages}services.html#audit" class="block px-10 py-2.5 text-sm text-gray-600 hover:text-blue-600 border-l-4 border-transparent hover:border-blue-600 transition-all">Audit</a>
              <a href="${toPages}services.html#nri" class="block px-10 py-2.5 text-sm text-gray-600 hover:text-blue-600 border-l-4 border-transparent hover:border-blue-600 transition-all">Non-Resident Services</a>
              <a href="${toPages}services.html#accounting" class="block px-10 py-2.5 text-sm text-gray-600 hover:text-blue-600 border-l-4 border-transparent hover:border-blue-600 transition-all">Accounting Services</a>
              <a href="${toPages}services.html#payroll" class="block px-10 py-2.5 text-sm text-gray-600 hover:text-blue-600 border-l-4 border-transparent hover:border-blue-600 transition-all">Payroll</a>
              <a href="${toPages}services.html#outsourcing" class="block px-10 py-2.5 text-sm text-gray-600 hover:text-blue-600 border-l-4 border-transparent hover:border-blue-600 transition-all">Outsourcing Benefits</a>
              <a href="${toPages}services.html#tax" class="block px-10 py-2.5 text-sm text-gray-600 hover:text-blue-600 border-l-4 border-transparent hover:border-blue-600 transition-all">Income Tax</a>
              <a href="${toPages}services.html#gst" class="block px-10 py-2.5 text-sm text-gray-600 hover:text-blue-600 border-l-4 border-transparent hover:border-blue-600 transition-all">GST</a>
              <a href="${toPages}services.html#governance" class="block px-10 py-2.5 text-sm text-gray-600 hover:text-blue-600 border-l-4 border-transparent hover:border-blue-600 transition-all">Corporate Governance</a>
              <a href="${toPages}services.html#tds" class="block px-10 py-2.5 text-sm text-gray-600 hover:text-blue-600 border-l-4 border-transparent hover:border-blue-600 transition-all">TDS</a>
              <a href="${toPages}services.html#advisory" class="block px-10 py-2.5 text-sm text-gray-600 hover:text-blue-600 border-l-4 border-transparent hover:border-blue-600 transition-all">Financial Advisory</a>
            </div>
          </div>
          <a href="${toPages}query.html" class="px-6 py-3 text-gray-700 font-semibold hover:bg-blue-50 hover:text-blue-600 transition-all">Query</a>
          <a href="${toPages}careers.html" class="px-6 py-3 text-gray-700 font-semibold hover:bg-blue-50 hover:text-blue-600 transition-all">Careers</a>
          <a href="${toPages}privacy-policy.html" class="px-6 py-3 text-gray-700 font-semibold hover:bg-blue-50 hover:text-blue-600 transition-all">Privacy Policy</a>
          <div class="px-6 pt-3 pb-4 border-t border-slate-100 mt-2">
            <a href="${toPages}contact.html" class="w-full py-3 bg-blue-600 text-white font-bold rounded-full text-center block hover:bg-blue-700 transition-all shadow-md">Contact Us</a>
          </div>
        </div>
      </div>
    </nav>
  `;

  const navContainer = document.getElementById('navbar');
  if (navContainer) navContainer.innerHTML = navHTML;

  const footerEl = document.getElementById('site-footer');
  if (footerEl) footerEl.innerHTML = buildFooter(toHome, toPages);

  // Mobile menu logic
  const menuBtn    = document.getElementById('menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const hamIcon    = document.getElementById('hamburger-icon');
  const closeIcon  = document.getElementById('close-icon');
  const svcBtn     = document.getElementById('mobile-services-btn');
  const svcList    = document.getElementById('mobile-services-list');
  const svcArrow   = document.getElementById('services-arrow');

  if (menuBtn && mobileMenu) {
    menuBtn.addEventListener('click', () => {
      const open = !mobileMenu.classList.contains('hidden');
      mobileMenu.classList.toggle('hidden');
      hamIcon.classList.toggle('hidden', !open);
      closeIcon.classList.toggle('hidden', open);
    });
  }
  if (svcBtn && svcList) {
    svcBtn.addEventListener('click', () => {
      svcList.classList.toggle('hidden');
      svcArrow.style.transform = svcList.classList.contains('hidden') ? '' : 'rotate(180deg)';
    });
  }
  if (mobileMenu) {
    mobileMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
        hamIcon.classList.remove('hidden');
        closeIcon.classList.add('hidden');
      });
    });
  }
};

/* ─── SCROLL REVEAL ──────────────────────────────────────────────────── */
const initReveal = () => {
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add('active');
    });
  }, { threshold: 0.08 });
  document.querySelectorAll('.reveal').forEach(el => obs.observe(el));
};

document.addEventListener('DOMContentLoaded', () => {
  loadNavbar();
  initReveal();
});
