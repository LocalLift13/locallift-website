/**
 * LocalLift - Main Interactive Script
 * Powers portfolio demos, quote calculator, mobile nav, and live modal viewers
 */

// Sample Demo Data for the 6 Local Business Archetypes
const DEMO_PROJECTS = {
  lawncare: {
    title: "Riverside Landscaping & Lawn Care",
    badge: "Lawn Care & Landscaping",
    industry: "Home Services",
    tagline: "Beautiful Lawns. Lasting Impressions.",
    problem: "Losing 40% of evening & weekend phone calls to competitors who had an instant estimate form.",
    solution: "Built a 30-second yard estimate calculator, clean service tiers (Mowing, Hardscaping, Cleanups), and automated SMS dispatch alerts.",
    results: "+58% monthly quote inquiries, $18,400 in new recurring seasonal contracts within 60 days.",
    previewColor: "#15803d",
    demoHtml: `
      <div class="bg-white min-h-full font-sans text-slate-800">
        <!-- Top Banner -->
        <div class="bg-emerald-900 text-emerald-100 text-xs py-2 px-4 flex justify-between items-center">
          <span>🌿 Serving Greater Metro Area & Surrounding Counties</span>
          <span class="font-bold">📞 Call / Text: (555) 349-LAWN</span>
        </div>
        <!-- Header -->
        <nav class="border-b px-6 py-4 flex items-center justify-between bg-white sticky top-0 shadow-sm">
          <div class="flex items-center gap-2">
            <span class="text-2xl">🌱</span>
            <span class="font-bold text-emerald-950 text-lg">Riverside <span class="text-emerald-600">Landscaping</span></span>
          </div>
          <div class="hidden md:flex gap-5 text-sm font-medium text-slate-600">
            <a href="#" class="text-emerald-700 font-bold">Home</a>
            <a href="#">Services</a>
            <a href="#">Gallery</a>
            <a href="#">Reviews (4.9★)</a>
          </div>
          <button onclick="alert('Demo: This triggers the instant lawn estimate modal!')" class="bg-emerald-600 hover:bg-emerald-700 text-white text-xs md:text-sm font-semibold px-4 py-2 rounded-lg shadow transition">
            Get Free Yard Estimate
          </button>
        </nav>
        <!-- Hero -->
        <div class="bg-gradient-to-r from-emerald-900 to-emerald-800 text-white py-12 px-6 text-center relative overflow-hidden">
          <div class="inline-block bg-emerald-700/60 text-emerald-200 text-xs font-semibold px-3 py-1 rounded-full mb-3">#1 Rated Lawn Care Company</div>
          <h1 class="text-2xl md:text-4xl font-extrabold mb-3">Beautiful Lawns. Lasting Impressions.</h1>
          <p class="text-emerald-100 text-sm max-w-xl mx-auto mb-6">Reliable weekly mowing, fertilization, seasonal cleanups, and custom patio hardscaping with zero contracts.</p>
          <div class="bg-white/95 text-slate-800 p-4 rounded-xl shadow-lg max-w-md mx-auto text-left">
            <h4 class="font-bold text-sm text-slate-900 mb-2">⚡ Instant 30-Second Estimate</h4>
            <div class="grid grid-cols-2 gap-2 mb-2">
              <input type="text" placeholder="Your Yard Size (sq ft)" class="border text-xs p-2 rounded w-full" value="0.25 - 0.5 Acre">
              <select class="border text-xs p-2 rounded w-full">
                <option>Weekly Mowing</option>
                <option>Aeration & Seeding</option>
                <option>Spring / Fall Cleanup</option>
                <option>Hardscape Patio</option>
              </select>
            </div>
            <button onclick="alert('Demo: Instant estimate calculated! Riverside owner notified instantly via SMS.')" class="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs py-2.5 rounded transition">
              Calculate Instant Price & Availability
            </button>
          </div>
        </div>
        <!-- Services Grid -->
        <div class="py-8 px-6 max-w-4xl mx-auto">
          <h3 class="text-center font-bold text-lg text-slate-900 mb-6">Our Core Services</h3>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div class="border rounded-xl p-4 bg-slate-50 hover:border-emerald-500 transition">
              <div class="text-2xl mb-1">🚜</div>
              <h4 class="font-bold text-sm text-slate-900">Weekly Lawn Mowing</h4>
              <p class="text-xs text-slate-600 mt-1">Crisp edging, string trimming, and driveway blowing with electric quiet mowers.</p>
              <span class="inline-block mt-3 text-xs font-bold text-emerald-700">From $45/visit →</span>
            </div>
            <div class="border rounded-xl p-4 bg-slate-50 hover:border-emerald-500 transition">
              <div class="text-2xl mb-1">🌿</div>
              <h4 class="font-bold text-sm text-slate-900">Weed Control & Feed</h4>
              <p class="text-xs text-slate-600 mt-1">Custom 5-step organic fertilization and pre-emergent crabgrass barrier.</p>
              <span class="inline-block mt-3 text-xs font-bold text-emerald-700">Seasonal plans →</span>
            </div>
            <div class="border rounded-xl p-4 bg-slate-50 hover:border-emerald-500 transition">
              <div class="text-2xl mb-1">🧱</div>
              <h4 class="font-bold text-sm text-slate-900">Pavers & Retaining Walls</h4>
              <p class="text-xs text-slate-600 mt-1">Transform your outdoor space with durable pavers, fire pits, and stone garden beds.</p>
              <span class="inline-block mt-3 text-xs font-bold text-emerald-700">Free design consult →</span>
            </div>
          </div>
        </div>
      </div>
    `
  },
  autodetailing: {
    title: "Apex Mobile Auto Detailing",
    badge: "Mobile Car Detailing",
    industry: "Automotive",
    tagline: "Showroom Shine Delivered to Your Driveway.",
    problem: "Owner spent 2+ hours every evening answering repetitive DMs about package prices and availability.",
    solution: "Created visual package cards (Interior, Exterior, Ceramic Coating) with live slot booking and upfront deposit capture.",
    results: "Bookings increased by 85%, phone inquiries reduced to qualified paying appointments.",
    previewColor: "#0284c7",
    demoHtml: `
      <div class="bg-slate-900 min-h-full font-sans text-slate-100">
        <div class="border-b border-slate-800 px-6 py-4 flex items-center justify-between bg-slate-950">
          <div class="flex items-center gap-2">
            <span class="text-blue-500 font-extrabold text-xl tracking-wider">APEX<span class="text-white">DETAIL</span></span>
          </div>
          <div class="text-xs text-slate-400">📍 We Come To Your Home or Office</div>
          <button onclick="alert('Demo: Online schedule picker opened!')" class="bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold px-3 py-1.5 rounded">Book Mobile Van</button>
        </div>
        <div class="py-10 px-6 text-center max-w-2xl mx-auto">
          <div class="text-blue-400 text-xs font-bold tracking-widest uppercase mb-2">5-Star Mobile Detailing Specialist</div>
          <h1 class="text-2xl md:text-3xl font-extrabold mb-3">Your Car Deserves a Complete Reset</h1>
          <p class="text-slate-400 text-xs mb-6">Fully equipped mobile detailing van with independent pure deionized water and power. 100% scratch-free wash guarantee.</p>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-3 text-left">
            <div class="bg-slate-800 border border-slate-700 p-4 rounded-xl">
              <span class="text-xs font-semibold text-blue-400">Standard</span>
              <h4 class="font-bold text-white text-sm">Express Refresh</h4>
              <p class="text-xl font-black text-white my-1">$120</p>
              <p class="text-slate-400 text-[11px] mb-3">Foam hand wash, wheel deep clean, interior vacuum & window buff.</p>
              <button onclick="alert('Package selected: Express Refresh')" class="w-full bg-slate-700 hover:bg-slate-600 text-white text-xs py-1.5 rounded font-medium">Select Package</button>
            </div>
            <div class="bg-blue-950 border-2 border-blue-500 p-4 rounded-xl relative">
              <div class="absolute -top-2 right-3 bg-blue-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full">MOST POPULAR</div>
              <span class="text-xs font-semibold text-blue-300">Signature</span>
              <h4 class="font-bold text-white text-sm">Full Interior + Exterior</h4>
              <p class="text-xl font-black text-white my-1">$240</p>
              <p class="text-slate-300 text-[11px] mb-3">Steam sanitation, hot water carpet extraction, clay bar, ceramic sealant.</p>
              <button onclick="alert('Package selected: Full Signature')" class="w-full bg-blue-600 hover:bg-blue-500 text-white text-xs py-1.5 rounded font-bold">Select Package</button>
            </div>
            <div class="bg-slate-800 border border-slate-700 p-4 rounded-xl">
              <span class="text-xs font-semibold text-blue-400">Elite</span>
              <h4 class="font-bold text-white text-sm">Ceramic Coating 3-Yr</h4>
              <p class="text-xl font-black text-white my-1">$650</p>
              <p class="text-slate-400 text-[11px] mb-3">Full paint correction, 9H ceramic shield, hydrophobic glass protection.</p>
              <button onclick="alert('Package selected: Ceramic Coating')" class="w-full bg-slate-700 hover:bg-slate-600 text-white text-xs py-1.5 rounded font-medium">Select Package</button>
            </div>
          </div>
        </div>
      </div>
    `
  },
  cleaning: {
    title: "SparklePro Commercial & Home Cleaning",
    badge: "Cleaning Businesses",
    industry: "Home Services",
    tagline: "Spotless Clean Spaces. Guaranteed Peace of Mind.",
    problem: "Prospects feared hidden charges and couldn't get a transparent quote without an awkward on-site walkthrough.",
    solution: "Designed an upfront room-by-room quote calculator with automated Google review showcases and bonded/insured trust badges.",
    results: "+72% conversion rate on online leads, 35 new recurring bi-weekly cleaning clients.",
    previewColor: "#0d9488",
    demoHtml: `
      <div class="bg-white min-h-full font-sans text-slate-800">
        <div class="bg-teal-50 border-b border-teal-100 px-6 py-3 flex items-center justify-between text-xs text-teal-900">
          <div class="flex items-center gap-2">
            <span class="bg-teal-600 text-white font-bold px-2 py-0.5 rounded text-[10px]">VERIFIED</span>
            <span>Licensed, Bonded & $2M Insured Local Cleaning Team</span>
          </div>
          <div class="font-bold text-teal-800">⭐ 4.95 / 5.0 (140+ Google Reviews)</div>
        </div>
        <div class="px-6 py-6 border-b flex justify-between items-center">
          <div class="font-black text-teal-900 text-lg flex items-center gap-1.5">
            <span class="text-teal-600">✨</span> SparklePro <span class="text-teal-600 font-normal">Cleaning</span>
          </div>
          <button onclick="alert('Demo: Online booking form initiated!')" class="bg-teal-600 text-white text-xs font-bold px-4 py-2 rounded-lg hover:bg-teal-700 shadow">
            Book In 60 Seconds
          </button>
        </div>
        <div class="py-8 px-6 max-w-2xl mx-auto text-center">
          <h2 class="text-2xl font-bold text-slate-900 mb-2">Instant Flat-Rate Home Cleaning</h2>
          <p class="text-slate-600 text-xs mb-6">No hidden fees, no surprise bills. Pick your home size and get a guaranteed quote instantly.</p>
          <div class="bg-slate-50 border rounded-2xl p-5 text-left shadow-sm">
            <div class="grid grid-cols-2 gap-3 mb-4">
              <div>
                <label class="text-[11px] font-bold text-slate-600 block mb-1">Bedrooms</label>
                <select class="w-full border rounded p-2 text-xs bg-white">
                  <option>1 Bedroom</option>
                  <option selected>2 Bedrooms</option>
                  <option>3 Bedrooms</option>
                  <option>4+ Bedrooms</option>
                </select>
              </div>
              <div>
                <label class="text-[11px] font-bold text-slate-600 block mb-1">Bathrooms</label>
                <select class="w-full border rounded p-2 text-xs bg-white">
                  <option>1 Bathroom</option>
                  <option selected>2 Bathrooms</option>
                  <option>3 Bathrooms</option>
                </select>
              </div>
            </div>
            <div class="flex justify-between items-center p-3 bg-teal-50 border border-teal-200 rounded-lg mb-3">
              <div>
                <span class="text-xs font-bold text-teal-950 block">Recurring Discount (Bi-Weekly)</span>
                <span class="text-[11px] text-teal-700">Save 20% on every clean</span>
              </div>
              <span class="text-base font-extrabold text-teal-800">$139 <span class="text-[10px] font-normal text-slate-500">/visit</span></span>
            </div>
            <button onclick="alert('Demo: Schedule chosen for SparklePro Cleaning!')" class="w-full bg-teal-600 text-white text-xs font-bold py-2.5 rounded-lg hover:bg-teal-700">
              Continue to Choose Date & Time →
            </button>
          </div>
        </div>
      </div>
    `
  },
  construction: {
    title: "Timberline Handyman & Remodeling",
    badge: "Construction & Handyman",
    industry: "Trades",
    tagline: "Solid Craftsmanship. Honest Estimates.",
    problem: "Relying on word-of-mouth left long dry spells between remodeling jobs; homeowners couldn't see proof of work.",
    solution: "Added an interactive before/after photo slider, an emergency fix dispatch button, and straightforward hourly / flat-rate job guides.",
    results: "+$42,000 in booked kitchen and bath remodels in 90 days; fully booked 3 weeks in advance.",
    previewColor: "#ea580c",
    demoHtml: `
      <div class="bg-stone-50 min-h-full font-sans text-stone-900">
        <header class="bg-stone-900 text-white px-6 py-4 flex justify-between items-center">
          <div class="font-extrabold tracking-wide text-lg text-amber-500">🔨 TIMBERLINE <span class="text-stone-300 font-light">HANDYMAN</span></div>
          <div class="text-xs bg-amber-500 text-stone-950 font-bold px-3 py-1 rounded">Lic #984210</div>
        </header>
        <div class="bg-stone-800 text-white py-8 px-6 text-center">
          <div class="text-amber-400 font-mono text-xs mb-1">REPAIRS • REMODELS • CARPENTRY • FIXTURES</div>
          <h2 class="text-2xl font-black mb-2">No Job Too Small. Done Right the First Time.</h2>
          <p class="text-stone-300 text-xs max-w-md mx-auto mb-4">From leaking faucets and drywall repairs to full basement finishing, get prompt service from a master carpenter.</p>
          <div class="flex justify-center gap-2">
            <button onclick="alert('Demo: Requesting Handyman Quote')" class="bg-amber-500 hover:bg-amber-600 text-stone-950 font-bold text-xs px-4 py-2 rounded">Request Free Estimate</button>
            <button onclick="alert('Demo: Dialing Emergency Repair Hotline')" class="bg-stone-700 hover:bg-stone-600 text-white font-semibold text-xs px-4 py-2 rounded">Emergency Repair</button>
          </div>
        </div>
        <div class="p-6 max-w-3xl mx-auto">
          <h3 class="text-sm font-bold text-stone-800 uppercase tracking-wider mb-3">Popular Services & Flat Rates</h3>
          <div class="grid grid-cols-2 md:grid-cols-4 gap-3 text-center">
            <div class="border border-stone-200 bg-white p-3 rounded-lg shadow-sm">
              <span class="text-xl">🚪</span>
              <div class="font-bold text-xs mt-1">Door & Lock Repair</div>
              <div class="text-amber-700 font-bold text-xs mt-1">From $85</div>
            </div>
            <div class="border border-stone-200 bg-white p-3 rounded-lg shadow-sm">
              <span class="text-xl">🚰</span>
              <div class="font-bold text-xs mt-1">Plumbing Fixtures</div>
              <div class="text-amber-700 font-bold text-xs mt-1">From $110</div>
            </div>
            <div class="border border-stone-200 bg-white p-3 rounded-lg shadow-sm">
              <span class="text-xl">🎨</span>
              <div class="font-bold text-xs mt-1">Drywall & Painting</div>
              <div class="text-amber-700 font-bold text-xs mt-1">From $140</div>
            </div>
            <div class="border border-stone-200 bg-white p-3 rounded-lg shadow-sm">
              <span class="text-xl">⚡</span>
              <div class="font-bold text-xs mt-1">Fan & Light Installs</div>
              <div class="text-amber-700 font-bold text-xs mt-1">From $95</div>
            </div>
          </div>
        </div>
      </div>
    `
  },
  restaurant: {
    title: "Cornerstone Cafe & Artisan Bakery",
    badge: "Restaurants & Coffee Shops",
    industry: "Hospitality & Food",
    tagline: "Locally Roasted Coffee. Freshly Baked Daily.",
    problem: "Menu was trapped in an unreadable PDF on Facebook; catering inquiries were getting lost in phone voicemails.",
    solution: "Built a fast mobile-first QR interactive menu, a dedicated catering order request form, and Google Maps local SEO integration.",
    results: "+220% online catering requests during holiday season, #1 local Google Maps ranking for 'artisan coffee near me'.",
    previewColor: "#b45309",
    demoHtml: `
      <div class="bg-amber-50/50 min-h-full font-sans text-amber-950">
        <div class="border-b border-amber-200/80 bg-white px-6 py-4 flex justify-between items-center">
          <div class="font-bold text-lg text-amber-900 flex items-center gap-1.5">
            <span>☕</span> Cornerstone <span class="font-light italic">Bakery</span>
          </div>
          <div class="text-xs font-semibold text-amber-800">Open Daily 6:30am - 4:00pm</div>
          <button onclick="alert('Demo: Online order / Catering order page!')" class="bg-amber-700 text-white text-xs font-semibold px-3 py-1.5 rounded-full hover:bg-amber-800">Order Pickup / Catering</button>
        </div>
        <div class="py-8 px-6 text-center max-w-xl mx-auto">
          <span class="text-amber-600 text-xs font-bold uppercase tracking-wider">Freshly Baked Every Morning</span>
          <h2 class="text-2xl font-serif font-bold text-amber-950 mt-1 mb-2">Artisan Coffee & Sourdough Pastries</h2>
          <p class="text-xs text-amber-800 mb-5">Single-origin roasts, laminated flaky croissants, and sourdough sandwiches made with heritage grains.</p>
          <div class="bg-white border border-amber-200 rounded-xl p-4 shadow-sm text-left">
            <div class="flex justify-between items-center border-b pb-2 mb-2">
              <span class="font-bold text-xs text-amber-950">Today's Featured Menu</span>
              <span class="text-[10px] bg-green-100 text-green-800 px-2 py-0.5 rounded font-bold">Baking Fresh Now</span>
            </div>
            <div class="space-y-2 text-xs">
              <div class="flex justify-between">
                <span>Almond Double-Baked Croissant</span>
                <span class="font-bold">$4.75</span>
              </div>
              <div class="flex justify-between">
                <span>Honey Lavender Oat Latte</span>
                <span class="font-bold">$5.25</span>
              </div>
              <div class="flex justify-between">
                <span>Prosciutto & Fig Focaccia</span>
                <span class="font-bold">$9.50</span>
              </div>
            </div>
            <button onclick="alert('Demo: Full digital mobile menu loaded!')" class="w-full mt-3 bg-amber-100 hover:bg-amber-200 text-amber-900 font-bold text-xs py-2 rounded text-center transition">
              View Complete Digital Menu (QR Ready)
            </button>
          </div>
        </div>
      </div>
    `
  },
  repair: {
    title: "Precision Small Engine & Appliance Repair",
    badge: "Independent Repair Businesses",
    industry: "Trades & Repair",
    tagline: "Fast Diagnosis. Honest Repairs. Zero Runaround.",
    problem: "Customers constantly called asking 'do you fix my model?' and had no easy way to describe issues or drop-off requests.",
    solution: "Created an automated brand compatibility checker, diagnostic triage intake form, and live repair status tracker.",
    results: "+45 repair drop-offs per month, eliminated 15 hours of phone tag every week.",
    previewColor: "#475569",
    demoHtml: `
      <div class="bg-slate-50 min-h-full font-sans text-slate-800">
        <header class="bg-slate-800 text-white px-6 py-4 flex justify-between items-center">
          <div class="font-black text-lg tracking-wide text-cyan-400">⚙️ PRECISION <span class="text-white font-normal">REPAIR</span></div>
          <div class="text-xs text-slate-300">Same-Day Diagnostic Drop-off</div>
        </header>
        <div class="py-8 px-6 text-center max-w-2xl mx-auto">
          <h2 class="text-2xl font-bold text-slate-900 mb-2">Lawnmower, Generator & Appliance Repair</h2>
          <p class="text-slate-600 text-xs mb-5">Factory-trained technician with 18+ years repairing Briggs & Stratton, Honda, Toro, Whirlpool, GE, and Bosch.</p>
          <div class="bg-white border border-slate-200 rounded-xl p-5 shadow-sm text-left">
            <h4 class="font-bold text-xs text-slate-900 mb-3">🛠️ Tell Us What Needs Fixing</h4>
            <div class="grid grid-cols-2 gap-2 mb-3">
              <select class="border text-xs p-2 rounded">
                <option>Riding / Push Mower</option>
                <option>Generator</option>
                <option>Snowblower / Trimmer</option>
                <option>Refrigerator / Dryer / Washer</option>
              </select>
              <input type="text" placeholder="Brand / Model (e.g. Honda HRX)" class="border text-xs p-2 rounded">
            </div>
            <textarea placeholder="Describe the symptom (e.g., won't start, leaking, loud rattling)" class="w-full border text-xs p-2 rounded mb-3" rows="2"></textarea>
            <button onclick="alert('Demo: Diagnostic intake submitted! Customer sent drop-off ticket.')" class="w-full bg-cyan-700 hover:bg-cyan-800 text-white text-xs font-bold py-2.5 rounded transition">
              Get Fast Diagnostic Estimate & Schedule Drop-Off
            </button>
          </div>
        </div>
      </div>
    `
  }
};

// Global UI Controller
document.addEventListener('DOMContentLoaded', () => {
  initMobileMenu();
  initDemoModal();
  initRoiCalculator();
  initQuoteWizard();
  initFaqAccordions();
  initPortfolioFilter();
});

/**
 * Mobile Navigation Drawer
 */
function initMobileMenu() {
  const toggleBtn = document.getElementById('mobileMenuToggle');
  const mobileMenu = document.getElementById('mobileMenu');
  if (!toggleBtn || !mobileMenu) return;

  toggleBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
  });

  // Close when clicking nav links inside mobile menu
  mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.add('hidden');
    });
  });
}

/**
 * Live Demo Modal Viewer
 */
function initDemoModal() {
  const modal = document.getElementById('demoModal');
  const modalContainer = document.getElementById('demoContainer');
  const modalTitle = document.getElementById('demoModalTitle');
  const modalBadge = document.getElementById('demoModalBadge');
  const modalProblem = document.getElementById('demoModalProblem');
  const modalSolution = document.getElementById('demoModalSolution');
  const modalResults = document.getElementById('demoModalResults');
  const closeBtn = document.getElementById('closeDemoModal');
  const desktopBtn = document.getElementById('demoViewDesktop');
  const mobileBtn = document.getElementById('demoViewMobile');
  const demoScreen = document.getElementById('demoScreen');

  if (!modal) return;

  window.openDemo = function(demoKey) {
    const data = DEMO_PROJECTS[demoKey];
    if (!data) return;

    if (modalTitle) modalTitle.textContent = data.title;
    if (modalBadge) modalBadge.textContent = data.badge;
    if (modalProblem) modalProblem.textContent = data.problem;
    if (modalSolution) modalSolution.textContent = data.solution;
    if (modalResults) modalResults.textContent = data.results;

    if (demoScreen) {
      demoScreen.innerHTML = data.demoHtml;
    }

    modal.classList.remove('modal-hidden');
    document.body.style.overflow = 'hidden';
  };

  function closeModal() {
    modal.classList.add('modal-hidden');
    document.body.style.overflow = '';
  }

  if (closeBtn) closeBtn.addEventListener('click', closeModal);

  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });

  // Device view toggles
  if (desktopBtn && mobileBtn && demoScreen) {
    desktopBtn.addEventListener('click', () => {
      demoScreen.style.maxWidth = '100%';
      desktopBtn.classList.add('bg-slate-700', 'text-white');
      desktopBtn.classList.remove('bg-slate-200', 'text-slate-700');
      mobileBtn.classList.remove('bg-slate-700', 'text-white');
      mobileBtn.classList.add('bg-slate-200', 'text-slate-700');
    });

    mobileBtn.addEventListener('click', () => {
      demoScreen.style.maxWidth = '390px';
      mobileBtn.classList.add('bg-slate-700', 'text-white');
      mobileBtn.classList.remove('bg-slate-200', 'text-slate-700');
      desktopBtn.classList.remove('bg-slate-700', 'text-white');
      desktopBtn.classList.add('bg-slate-200', 'text-slate-700');
    });
  }
}

/**
 * ROI Calculator
 */
function initRoiCalculator() {
  const avgJobInput = document.getElementById('roiAvgJob');
  const newClientsInput = document.getElementById('roiNewClients');
  const monthlyRevenueEl = document.getElementById('roiMonthlyRevenue');
  const annualRevenueEl = document.getElementById('roiAnnualRevenue');
  const paybackDaysEl = document.getElementById('roiPaybackDays');

  if (!avgJobInput || !newClientsInput) return;

  function recalculate() {
    const jobVal = parseFloat(avgJobInput.value) || 250;
    const clients = parseFloat(newClientsInput.value) || 4;
    const monthlyGain = jobVal * clients;
    const annualGain = monthlyGain * 12;

    // Based on Starter $399 or Growth $599
    const packageCost = 599;
    const daysToPayback = Math.max(7, Math.round((packageCost / monthlyGain) * 30));

    if (monthlyRevenueEl) monthlyRevenueEl.textContent = `$${monthlyGain.toLocaleString()}`;
    if (annualRevenueEl) annualRevenueEl.textContent = `$${annualGain.toLocaleString()}`;
    if (paybackDaysEl) paybackDaysEl.textContent = `~${daysToPayback} days`;

    const jobValDisplay = document.getElementById('roiAvgJobDisplay');
    const clientsDisplay = document.getElementById('roiNewClientsDisplay');
    if (jobValDisplay) jobValDisplay.textContent = `$${jobVal}`;
    if (clientsDisplay) clientsDisplay.textContent = `${clients} / mo`;
  }

  avgJobInput.addEventListener('input', recalculate);
  newClientsInput.addEventListener('input', recalculate);
  recalculate();
}

/**
 * Interactive Quote Wizard & Estimator
 */
function initQuoteWizard() {
  const quoteForm = document.getElementById('quoteForm');
  if (!quoteForm) return;

  const budgetRadios = document.querySelectorAll('input[name="quote_budget"]');
  const serviceCheckboxes = document.querySelectorAll('input[name="services"]');
  const businessTypeSelect = document.getElementById('quote_business_type');
  const recommendedTierEl = document.getElementById('calcRecommendedTier');
  const estimatedPriceEl = document.getElementById('calcEstimatedPrice');
  const estimatedTimelineEl = document.getElementById('calcEstimatedTimeline');

  function updateEstimate() {
    let checkedCount = 0;
    serviceCheckboxes.forEach(cb => {
      if (cb.checked) checkedCount++;
    });

    let recTier = "Starter Website";
    let estPrice = "$399";
    let estTimeline = "5-7 Business Days";

    if (checkedCount >= 4) {
      recTier = "Full-Service Marketing";
      estPrice = "$799+";
      estTimeline = "10-14 Business Days";
    } else if (checkedCount >= 2) {
      recTier = "Business Growth";
      estPrice = "$599";
      estTimeline = "7-10 Business Days";
    }

    if (recommendedTierEl) recommendedTierEl.textContent = recTier;
    if (estimatedPriceEl) estimatedPriceEl.textContent = estPrice;
    if (estimatedTimelineEl) estimatedTimelineEl.textContent = estTimeline;
  }

  serviceCheckboxes.forEach(cb => cb.addEventListener('change', updateEstimate));
  if (businessTypeSelect) businessTypeSelect.addEventListener('change', updateEstimate);

  quoteForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(quoteForm);
    const data = Object.fromEntries(formData.entries());
    
    // Collect all selected services
    const services = [];
    serviceCheckboxes.forEach(cb => {
      if (cb.checked) services.push(cb.value);
    });
    data.services = services;

    // Show simulated confirmation modal
    showQuoteSuccess(data);
  });
}

function showQuoteSuccess(data) {
  const successModal = document.getElementById('quoteSuccessModal');
  const summaryBox = document.getElementById('quoteSummaryBox');

  if (summaryBox) {
    summaryBox.innerHTML = `
      <div class="bg-emerald-50 border border-emerald-200 rounded-xl p-4 text-left text-xs space-y-2 text-slate-700">
        <div class="font-bold text-emerald-900 text-sm border-b pb-1">Proposal Request Received!</div>
        <p><strong>Business:</strong> ${data.business_name || 'Your Business'}</p>
        <p><strong>Owner:</strong> ${data.owner_name || 'Business Owner'}</p>
        <p><strong>Contact Email:</strong> ${data.email || 'Provided'}</p>
        <p><strong>Category:</strong> ${data.business_type || 'Local Service'}</p>
        <p><strong>Selected Services:</strong> ${(data.services && data.services.length) ? data.services.join(', ') : 'Custom Package'}</p>
        <p><strong>Selected Budget:</strong> ${data.budget || '$500 - $800'}</p>
        <div class="mt-2 text-emerald-800 font-semibold bg-emerald-100/70 p-2 rounded">
          🎉 Next Step: We will review your business information and send your custom website roadmap within 24 hours.
        </div>
      </div>
    `;
  }

  if (successModal) {
    successModal.classList.remove('modal-hidden');
  }
}

window.closeQuoteModal = function() {
  const successModal = document.getElementById('quoteSuccessModal');
  if (successModal) successModal.classList.add('modal-hidden');
};

/**
 * FAQ Accordions
 */
function initFaqAccordions() {
  const faqToggles = document.querySelectorAll('.faq-toggle');
  faqToggles.forEach(toggle => {
    toggle.addEventListener('click', () => {
      const answer = toggle.nextElementSibling;
      const icon = toggle.querySelector('.faq-icon');
      const isOpen = answer.classList.contains('open');

      // Close other open accordions
      document.querySelectorAll('.faq-answer.open').forEach(openAns => {
        openAns.classList.remove('open');
        const parentIcon = openAns.previousElementSibling.querySelector('.faq-icon');
        if (parentIcon) parentIcon.style.transform = 'rotate(0deg)';
      });

      if (!isOpen) {
        answer.classList.add('open');
        if (icon) icon.style.transform = 'rotate(180deg)';
      }
    });
  });
}

/**
 * Portfolio Filter Tabs
 */
function initPortfolioFilter() {
  const filterBtns = document.querySelectorAll('.portfolio-filter-btn');
  const portfolioCards = document.querySelectorAll('.portfolio-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => {
        b.classList.remove('bg-emerald-600', 'text-white');
        b.classList.add('bg-white', 'text-slate-700');
      });
      btn.classList.add('bg-emerald-600', 'text-white');
      btn.classList.remove('bg-white', 'text-slate-700');

      const filter = btn.getAttribute('data-filter');
      portfolioCards.forEach(card => {
        if (filter === 'all' || card.getAttribute('data-category') === filter) {
          card.style.display = 'block';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}
