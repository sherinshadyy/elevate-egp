const menuButton = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav-links");
const languageButton = document.getElementById("language-toggle");

const translations = {
  en: {
    navServices:"Our Services", navProcess:"Our Process", navContact:"Get in Touch",
    heroEyebrow:"BUILD · ELEVATE · GROW", heroTitle:"Custom E-Commerce<br>Solutions &amp; More",
    heroDescription:"We create stunning, high-performing websites, AI videos, and landing pages to help your business grow and stand out.",
    heroButton:"Explore Our Packages", packagesEyebrow:"OUR PACKAGES",
    packagesTitle:"Choose the Perfect Plan for Your Business",
    basicTitle:"Basic Website", basicDescription:"A clean and simple solution to get your business online.",
    basic1:"Clean & simple website design", basic2:"Up to 10 products (you can add more!)",
    basic3:"Basic essential pages (Home, About Us & Terms)", basic4:"1 minor revision",
    standardTitle:"Standard Website", standardDescription:"A professional website with more flexibility.",
    standard1:"Branded & customized design", standard2:"Up to 2 custom sections per page (Home, About Us, Terms)",
    standard3:"Up to 15 products (you can add more!)", standard4:"2 minor revisions",
    premiumTitle:"Premium Website", premiumDescription:"A fully customized experience for your brand.",
    premium1:"Fully customized concept & branded design", premium2:"Up to 20 products (you can add more!)",
    premium3:"Custom Home, About Us & Terms pages", premium4:"Up to 5 custom sections on the homepage",
    premium5:"Animations & interactions", premium6:"3 minor revisions",
    popular:"Most Popular", getStarted:"Get Started", detailsButton:"What’s Included?",
    aiEyebrow:"MAKE YOUR PRODUCTS STAND OUT", aiTitle:"AI Photoshoot",
    aiDescription:"Turn your products into stunning AI-generated visuals.", aiDuration:"◷ 10 Seconds",
    ai1:"Realistic & aesthetic results", ai2:"Enhance your brand story", ai3:"Perfect for social media & ads",
    landingEyebrow:"A FIRST IMPRESSION THAT CONVERTS", landingTitle:"Landing Pages",
    landingDescription:"High-converting landing pages to turn visitors into customers.",
    landing1:"Custom design", landing2:"Compelling content", landing3:"Designed for results",
    whyEyebrow:"WHY ELEVATE", whyTitle:"Everything Your Online Store Needs",
    whyIntro:"More than a website — the essentials to help your business move forward.",
    benefit1Title:"Custom design", benefit1:"A website designed around your brand instead of a generic template.",
    benefit2Title:"Product management", benefit2:"Products, prices, descriptions and store content can be managed after launch.",
    benefit3Title:"SEO & analytics", benefit3:"Basic SEO setup and analytics so your store is ready to be discovered and measured.",
    benefit4Title:"Store setup", benefit4:"We help put the essential pieces together so your ecommerce website is ready to launch.",
    processEyebrow:"HOW IT WORKS", processTitle:"From Idea to Online",
    processIntro:"A clear, collaborative process from the first conversation to launch.",
    step1Title:"Discover", step1:"We understand your brand, products and what your customers need.",
    step2Title:"Design", step2:"We shape the visual direction and create the main store experience.",
    step3Title:"Build", step3:"Your pages, products and ecommerce functionality are put together.",
    step4Title:"Launch", step4:"We make sure everything is ready and help you move forward.",
    closingEyebrow:"YOUR NEXT CHAPTER STARTS HERE", closingTitle:"Let’s Elevate Your Business Together",
    closingButton:"Contact Us", footerTagline:"Build · Elevate · Grow", footerInstagram:"Instagram",
    footerRights:"All rights reserved."
  },
  ar: {
    navServices:"خدماتنا", navProcess:"مراحل العمل", navContact:"تواصل معنا",
    heroEyebrow:"ابدأ · ارتقِ · انطلق", heroTitle:"حلول متكاملة للتجارة الإلكترونية<br>والمزيد",
    heroDescription:"نصمم مواقع إلكترونية احترافية، وفيديوهات بالذكاء الاصطناعي، وصفحات هبوط تساعد مشروعك على النمو والتميز.",
    heroButton:"اكتشف باقاتنا", packagesEyebrow:"باقاتنا",
    packagesTitle:"اختار الباقة المناسبة لمشروعك",
    basicTitle:"الموقع الأساسي", basicDescription:"حل بسيط وأنيق لبدء تواجد مشروعك على الإنترنت.",
    basic1:"تصميم موقع بسيط وأنيق", basic2:"حتى 10 منتجات (يمكنك إضافة المزيد!)",
    basic3:"الصفحات الأساسية (الرئيسية، من نحن، الشروط والأحكام)", basic4:"تعديل بسيط واحد",
    standardTitle:"الموقع الاحترافي", standardDescription:"موقع احترافي بمساحة أكبر للتخصيص.",
    standard1:"تصميم مخصص يعكس هوية علامتك التجارية", standard2:"حتى قسمين مخصصين لكل صفحة (الرئيسية، من نحن، الشروط)",
    standard3:"حتى 15 منتجًا (يمكنك إضافة المزيد!)", standard4:"تعديلان بسيطان",
    premiumTitle:"الموقع المميز", premiumDescription:"تجربة متكاملة ومخصصة بالكامل لعلامتك التجارية.",
    premium1:"فكرة وتصميم مخصصان بالكامل لهوية علامتك", premium2:"حتى 20 منتجًا (يمكنك إضافة المزيد!)",
    premium3:"صفحات مخصصة للرئيسية ومن نحن والشروط", premium4:"حتى 5 أقسام مخصصة في الصفحة الرئيسية",
    premium5:"حركات وتفاعلات بصرية", premium6:"3 تعديلات بسيطة",
    popular:"الأكثر طلبًا", getStarted:"ابدأ الآن", detailsButton:"ما الذي تتضمنه الباقات؟",
    aiEyebrow:"اجعل منتجاتك أكثر تميزًا", aiTitle:"تصوير المنتجات بالذكاء الاصطناعي",
    aiDescription:"حوّل منتجاتك إلى صور وفيديوهات إبداعية باستخدام الذكاء الاصطناعي.", aiDuration:"◷ 10 ثوانٍ",
    ai1:"نتائج واقعية وجذابة", ai2:"إبراز قصة علامتك التجارية", ai3:"مثالية للسوشيال ميديا والإعلانات",
    landingEyebrow:"انطباع أول يحوّل الزوار إلى عملاء", landingTitle:"صفحات الهبوط",
    landingDescription:"صفحات هبوط مصممة لجذب الزوار وتحويلهم إلى عملاء.",
    landing1:"تصميم مخصص", landing2:"محتوى جذاب", landing3:"تصميم يركز على تحقيق النتائج",
    whyEyebrow:"لماذا ELEVATE؟", whyTitle:"كل ما يحتاجه متجرك الإلكتروني",
    whyIntro:"أكثر من مجرد موقع إلكتروني — كل الأساسيات التي تساعد مشروعك على التقدم.",
    benefit1Title:"تصميم مخصص", benefit1:"موقع مصمم خصيصًا لعلامتك التجارية، وليس مجرد قالب تقليدي.",
    benefit2Title:"إدارة المنتجات", benefit2:"يمكنك إدارة المنتجات والأسعار والأوصاف ومحتوى المتجر بعد الإطلاق.",
    benefit3Title:"تحسين محركات البحث والتحليلات", benefit3:"إعدادات SEO أساسية وتحليلات تساعد على اكتشاف متجرك وقياس أدائه.",
    benefit4Title:"إعداد المتجر", benefit4:"نجهز العناصر الأساسية ليكون متجرك الإلكتروني مستعدًا للإطلاق.",
    processEyebrow:"كيف نعمل؟", processTitle:"من الفكرة إلى الإطلاق",
    processIntro:"خطوات واضحة وتعاون مستمر من أول تواصل وحتى إطلاق موقعك.",
    step1Title:"التعرّف على مشروعك", step1:"نفهم علامتك التجارية ومنتجاتك واحتياجات عملائك.",
    step2Title:"التصميم", step2:"نحدد الاتجاه البصري ونصمم تجربة المتجر الأساسية.",
    step3Title:"التنفيذ", step3:"نعمل على تجهيز الصفحات والمنتجات ووظائف المتجر الإلكتروني.",
    step4Title:"الإطلاق", step4:"نتأكد من جاهزية كل شيء ونساعدك على الانطلاق.",
    closingEyebrow:"خطوتك القادمة تبدأ من هنا", closingTitle:"خلينا نطوّر مشروعك مع بعض",
    closingButton:"تواصل معنا", footerTagline:"ابدأ · ارتقِ · انطلق", footerInstagram:"إنستجرام",
    footerRights:"جميع الحقوق محفوظة."
  }
};

const selectors = {
 navServices:".nav-links a[href='#packages']", navProcess:".nav-links a[href='#process']",
 navContact:".nav-contact [data-never]", heroEyebrow:".hero .eyebrow",
 heroTitle:".hero h1", heroDescription:".hero-description", heroButton:".hero .dark-button",
 packagesEyebrow:".packages .section-heading .eyebrow", packagesTitle:".packages h2",
 basicTitle:".package-card:nth-child(1) h3", basicDescription:".package-card:nth-child(1) .package-top p",
 basic1:".package-card:nth-child(1) li:nth-child(1)", basic2:".package-card:nth-child(1) li:nth-child(2)",
 basic3:".package-card:nth-child(1) li:nth-child(3)", basic4:".package-card:nth-child(1) li:nth-child(4)",
 standardTitle:".package-card:nth-child(2) h3", standardDescription:".package-card:nth-child(2) .package-top p",
 standard1:".package-card:nth-child(2) li:nth-child(1)", standard2:".package-card:nth-child(2) li:nth-child(2)",
 standard3:".package-card:nth-child(2) li:nth-child(3)", standard4:".package-card:nth-child(2) li:nth-child(4)",
 premiumTitle:".package-card:nth-child(3) h3", premiumDescription:".package-card:nth-child(3) .package-top p",
 premium1:".package-card:nth-child(3) li:nth-child(1)", premium2:".package-card:nth-child(3) li:nth-child(2)",
 premium3:".package-card:nth-child(3) li:nth-child(3)", premium4:".package-card:nth-child(3) li:nth-child(4)",
 premium5:".package-card:nth-child(3) li:nth-child(5)", premium6:".package-card:nth-child(3) li:nth-child(6)",
 popular:".popular", getStarted:".package-button", detailsButton:".package-details-link",
 aiEyebrow:".ai-feature .eyebrow", aiTitle:".ai-feature h2", aiDescription:".ai-feature .service-copy>p:not(.eyebrow)",
 aiDuration:".duration", ai1:".ai-feature li:nth-child(1)", ai2:".ai-feature li:nth-child(2)", ai3:".ai-feature li:nth-child(3)",
 landingEyebrow:".landing-feature .eyebrow", landingTitle:".landing-feature h2",
 landingDescription:".landing-feature .service-copy>p:not(.eyebrow)",
 landing1:".landing-feature li:nth-child(1)", landing2:".landing-feature li:nth-child(2)", landing3:".landing-feature li:nth-child(3)",
 whyEyebrow:".why .eyebrow", whyTitle:".why h2", whyIntro:".why .section-intro",
 benefit1Title:".benefit:nth-child(1) h3", benefit1:".benefit:nth-child(1) p",
 benefit2Title:".benefit:nth-child(2) h3", benefit2:".benefit:nth-child(2) p",
 benefit3Title:".benefit:nth-child(3) h3", benefit3:".benefit:nth-child(3) p",
 benefit4Title:".benefit:nth-child(4) h3", benefit4:".benefit:nth-child(4) p",
 processEyebrow:".process .eyebrow", processTitle:".process h2", processIntro:".process .section-intro",
 step1Title:".process-step:nth-child(1) h3", step1:".process-step:nth-child(1) p",
 step2Title:".process-step:nth-child(2) h3", step2:".process-step:nth-child(2) p",
 step3Title:".process-step:nth-child(3) h3", step3:".process-step:nth-child(3) p",
 step4Title:".process-step:nth-child(4) h3", step4:".process-step:nth-child(4) p",
 closingEyebrow:".closing .eyebrow", closingTitle:".closing h2", closingButton:".closing .dark-button",
 footerTagline:"footer p", footerInstagram:".footer-instagram span", footerRights:"footer small"
};
const original = new Map();
function setButtonLabel(el, label) {
  if (!el) return;
  const textNode = Array.from(el.childNodes).find(node => node.nodeType === Node.TEXT_NODE && node.textContent.trim());
  if (textNode) textNode.textContent = label + " ";
  else el.insertBefore(document.createTextNode(label + " "), el.firstChild);
}
function setLanguage(lang) {
  const dict=translations[lang];
  document.documentElement.lang=lang;
  document.documentElement.dir=lang==="ar"?"rtl":"ltr";
  document.body.classList.toggle("is-arabic",lang==="ar");
  for (const [key,selector] of Object.entries(selectors)) {
    const elements=document.querySelectorAll(selector);
    elements.forEach(el=>{
      if (!original.has(el)) original.set(el,el.innerHTML);
      if(key==="navContact" || key==="getStarted" || key==="heroButton" || key==="closingButton") return;
      else if(key==="footerRights") {
        const year=el.querySelector("#year"); el.innerHTML=`© ${year?.textContent||new Date().getFullYear()} elevate.egp. ${dict[key]}`;
      } else el.innerHTML=dict[key];
    });
  }
  const contact=document.querySelector(".nav-contact");
  setButtonLabel(contact, dict.navContact);
  document.querySelectorAll(".package-button").forEach(el => setButtonLabel(el, dict.getStarted));
  setButtonLabel(document.querySelector(".hero .dark-button"), dict.heroButton);
  setButtonLabel(document.querySelector(".closing .dark-button"), dict.closingButton);
  languageButton.textContent=lang==="en"?"AR":"EN";
  languageButton.setAttribute("aria-label",lang==="en"?"Switch to Arabic":"Switch to English");
  localStorage.setItem("elevate-language",lang);
}
languageButton?.addEventListener("click",()=>setLanguage(document.documentElement.lang==="en"?"ar":"en"));
menuButton?.addEventListener("click",()=>{
 const open=menuButton.getAttribute("aria-expanded")==="true";
 menuButton.setAttribute("aria-expanded",String(!open)); nav.classList.toggle("open",!open);
});
nav?.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>{
 nav.classList.remove("open");menuButton.setAttribute("aria-expanded","false");
}));
const year=document.getElementById("year"); if(year) year.textContent=new Date().getFullYear();
setLanguage(localStorage.getItem("elevate-language")||"en");
