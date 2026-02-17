/**
 * Attili & Associates - Global JavaScript
 */

const loadNavbar = () => {
  const isRoot = window.location.pathname.endsWith('index.html') || 
                 window.location.pathname === '/' || 
                 window.location.pathname.endsWith('/Website/');
  
  const toPages = isRoot ? 'pages/' : '';
  const toHome = isRoot ? 'index.html' : '../index.html';

  const navbarHTML = `
    <nav class="fixed top-4 w-full z-50 px-6">
      <div class="max-w-7xl mx-auto">
        <div class="flex justify-end gap-6 px-10 mb-2 text-[11px] font-bold tracking-wider text-slate-500 uppercase">
          <a href="tel:+919542460669" class="hover:text-blue-600 transition-colors flex items-center gap-2">
            <svg class="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 005.47 5.47l.772-1.548a1 1 0 011.06-.539l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path></svg>
            +91 9542460669
          </a>
          <a href="mailto:casaikumarattili@gmail.com" class="hover:text-blue-600 transition-colors flex items-center gap-2">
            <svg class="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg>
            casaikumarattili@gmail.com
          </a>
        </div>

        <div class="flex justify-between items-center bg-white/90 backdrop-blur-xl border border-white/20 py-3 px-8 rounded-full shadow-2xl">
          <a href="${toHome}" class="flex items-center gap-3 cursor-pointer group">
            <div class="relative flex items-center justify-center w-10 h-10 bg-blue-700 rounded-full shadow-sm group-hover:bg-blue-800 transition-all">
              <svg viewBox="0 0 100 100" class="w-7 h-7 fill-white">
                <text x="50%" y="50%" text-anchor="middle" dy=".35em" font-family="Arial, sans-serif" font-weight="900" font-size="45">CA</text>
              </svg>
            </div>
            <div class="flex flex-col leading-tight">
              <span class="text-lg font-bold text-slate-900 tracking-tight whitespace-nowrap">Attili & <span class="text-blue-600">Associates</span></span>
              <span class="text-[9px] uppercase tracking-[0.15em] text-gray-500 font-semibold whitespace-nowrap">Chartered Accountants</span>
            </div>
          </a>

          <ul class="hidden lg:flex items-center space-x-1 font-medium text-gray-700 text-sm">
            <li><a href="${toHome}" class="px-3 py-2 rounded-full hover:bg-blue-50 transition-all">Home</a></li>
            <li><a href="${toPages}about.html" class="px-3 py-2 rounded-full hover:bg-blue-50 transition-all">About Us</a></li>
            <li class="relative group">
              <button class="flex items-center px-3 py-2 rounded-full hover:bg-blue-50 transition-all">
                Services <svg class="w-4 h-4 ml-1 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
              </button>
              <div class="absolute left-0 mt-2 w-72 bg-white rounded-2xl shadow-2xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 overflow-hidden">
                <div class="py-2 flex flex-col text-xs font-semibold">
                  <a href="${toPages}services.html#corporate" class="px-5 py-2 hover:bg-blue-50 hover:text-blue-600 border-l-4 border-transparent hover:border-blue-600 transition-all">Corporate Services</a>
                  <a href="${toPages}services.html#audit" class="px-5 py-2 hover:bg-blue-50 hover:text-blue-600 border-l-4 border-transparent hover:border-blue-600 transition-all">Audit</a>
                  <a href="${toPages}services.html#nri" class="px-5 py-2 hover:bg-blue-50 hover:text-blue-600 border-l-4 border-transparent hover:border-blue-600 transition-all">Non-Resident Services</a>
                  <a href="${toPages}services.html#accounting" class="px-5 py-2 hover:bg-blue-50 hover:text-blue-600 border-l-4 border-transparent hover:border-blue-600 transition-all">Accounting Services</a>
                  <a href="${toPages}services.html#payroll" class="px-5 py-2 hover:bg-blue-50 hover:text-blue-600 border-l-4 border-transparent hover:border-blue-600 transition-all">Payroll</a>
                  <a href="${toPages}services.html#outsourcing" class="px-5 py-2 hover:bg-blue-50 hover:text-blue-600 border-l-4 border-transparent hover:border-blue-600 transition-all">Outsourcing Benefits</a>
                  <a href="${toPages}services.html#tax" class="px-5 py-2 hover:bg-blue-50 hover:text-blue-600 border-l-4 border-transparent hover:border-blue-600 transition-all">Income Tax</a>
                  <a href="${toPages}services.html#gst" class="px-5 py-2 hover:bg-blue-50 hover:text-blue-600 border-l-4 border-transparent hover:border-blue-600 transition-all">GST</a>
                  <a href="${toPages}services.html#governance" class="px-5 py-2 hover:bg-blue-50 hover:text-blue-600 border-l-4 border-transparent hover:border-blue-600 transition-all">Corporate Governance</a>
                  <a href="${toPages}services.html#tds" class="px-5 py-2 hover:bg-blue-50 hover:text-blue-600 border-l-4 border-transparent hover:border-blue-600 transition-all">TDS</a>
                  <a href="${toPages}services.html#advisory" class="px-5 py-2 hover:bg-blue-50 hover:text-blue-600 border-l-4 border-transparent hover:border-blue-600 transition-all">Financial Advisory</a>
                </div>
              </div>
            </li>
            <li><a href="${toPages}query.html" class="px-3 py-2 rounded-full hover:bg-blue-50 transition-all">Query</a></li>
            <li><a href="${toPages}careers.html" class="px-3 py-2 rounded-full hover:bg-blue-50 transition-all">Careers</a></li>
            <li><a href="${toPages}contact.html" class="ml-2 px-5 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 shadow-md transition-all">Contact Us</a></li>
          </ul>

          <button class="lg:hidden p-2 text-gray-600" id="menu-btn">
            <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" /></svg>
          </button>
        </div>
      </div>
    </nav>
  `;

  const container = document.getElementById('navbar');
  if (container) { container.innerHTML = navbarHTML; }
};

/**
 * --- SCROLL REVEAL ENGINE ---
 */
const initReveal = () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
};

document.addEventListener('DOMContentLoaded', () => {
  loadNavbar();
  initReveal(); // Trigger animations
});