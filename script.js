
const menuButton = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav-links");
const languageButton = document.getElementById("language-toggle");

const translations = {
  en: {
    navServices: "Our Services",
    navPackages: "Packages",
    navProcess: "Our Process",
    navAbout: "About Us",
    navContact: "Get in Touch",

    heroEyebrow: "BUILD · ELEVATE · GROW",
    heroTitle: "Custom E-Commerce<br>Solutions &amp; More",
    heroDescription: "We create stunning, high-performing websites, AI videos, and landing pages to help your business grow and stand out.",
    heroButton: "Explore Our Packages",

    packagesEyebrow: "OUR PACKAGES",
    packagesTitle: "Choose the Perfect Plan for Your Business",
    basicTitle: "Basic Website",
    basicDescription: "A clean and simple solution to get your business online.",
    basicFeature1: "Clean & simple website design",
    basicFeature2: "Up to 10 products (you can add more!)",
    basicFeature3: "Basic essential pages (Home, About Us & Terms)",
    basicFeature4: "1 minor revision",

    standardTitle: "Standard Website",
    standardDescription: "A professional website with more flexibility.",
    standardFeature1: "Branded & customized design",
    standardFeature2: "Up to 2 custom sections per page (Home, About Us, Terms)",
    standardFeature3: "Up to 15 products (you can add more!)",
    standardFeature4: "2 minor revisions",

    premiumTitle: "Premium Website",
    premiumDescription: "A fully customized experience for your brand.",
    premiumFeature1: "Fully customized concept & branded design",
    premiumFeature2: "Up to 20 products (you can add more!)",
    premiumFeature3: "Custom Home, About Us & Terms pages",
    premiumFeature4: "Up to 5 custom sections on the homepage",
    premiumFeature5: "Animations & interactions",
    premiumFeature6: "3 minor revisions",

    popular: "Most Popular",
    getStarted: "Get Started",

    aiEyebrow: "MAKE YOUR PRODUCTS STAND OUT",
    aiTitle: "AI Photoshoot",
    aiDescription: "Turn your products into stunning AI-generated visuals.",
    aiDuration: "◷ 10 Seconds",
    aiFeature1: "Realistic & aesthetic results",
    aiFeature2: "Enhance your brand story",
    aiFeature3: "Perfect for social media & ads",

    landingEyebrow: "A FIRST IMPRESSION THAT CONVERTS",
    landingTitle: "Landing Pages",
    landingDescription: "High-converting landing pages to turn visitors into customers.",
    landingFeature1: "Custom design",
    landingFeature2: "Compelling content",
    landingFeature3: "Designed for results",

    whyEyebrow: "WHY ELEVATE",
    whyTitle: "Everything Your Online Store Needs",
    whyIntro: "More than a website — the essentials to help your business move forward.",
    benefit1Title: "Custom design",
    benefit1Description: "A website designed around your brand instead of a generic template.",
    benefit2Title: "Product management",
    benefit2Description: "Products, prices, descriptions and store content can be managed after launch.",
    benefit3Title: "SEO & analytics",
    benefit3Description: "Basic SEO setup and analytics so your store is ready to be discovered and measured.",
    benefit4Title: "Store setup",
    benefit4Description: "We help put the essential pieces together so your ecommerce website is ready to launch.",

    processEyebrow: "HOW IT WORKS",
    processTitle: "From Idea to Online",
    processIntro: "A clear, collaborative process from the first conversation to launch.",
    step1Title: "Discover",
    step1Description: "We understand your brand, products and what your customers need.",
    step2Title: "Design",
    step2Description: "We shape the visual direction and create the main store experience.",
    step3Title: "Build",
    step3Description: "Your pages, products and ecommerce functionality are put together.",
    step4Title: "Launch",
    step4Description: "We make sure everything is ready and help you move forward.",

    closingEyebrow: "YOUR NEXT CHAPTER STARTS HERE",
    closingTitle: "Let’s Elevate Your Business Together",
    closingButton: "Contact Us",

    footerTagline: "Build · Elevate · Grow",
    footerInstagram: "Instagram",
    footerRights: "All rights reserved."
  },

  ar: {
    navServices: "خدماتنا",
    navPackages: "الباقات",
    navProcess: "مراحل العمل",
    navAbout: "من نحن",
    navContact: "تواصل معنا",

    heroEyebrow: "ابدأ · ارتقِ · انطلق",
    heroTitle: "حلول متكاملة للتجارة الإلكترونية والمزيد",
    heroDescription: "نصمم مواقع إلكترونية احترافية، وفيديوهات بالذكاء الاصطناعي، وصفحات هبوط تساعد مشروعك على النمو والتميز.",
    heroButton: "اكتشف باقاتنا",

    packagesEyebrow: "باقاتنا",
    packagesTitle: "اختار الباقة المناسبة لمشروعك",
    basicTitle: "الموقع الأساسي",
    basicDescription: "حل بسيط وأنيق لبدء تواجد مشروعك على الإنترنت.",
    basicFeature1: "تصميم موقع بسيط وأنيق",
    basicFeature2: "حتى 10 منتجات (يمكنك إضافة المزيد!)",
    basicFeature3: "الصفحات الأساسية (الرئيسية، من نحن، الشروط والأحكام)",
    basicFeature4: "تعديل بسيط واحد",

    standardTitle: "الموقع الاحترافي",
    standardDescription: "موقع احترافي بمساحة أكبر للتخصيص.",
    standardFeature1: "تصميم مخصص يعكس هوية علامتك التجارية",
    standardFeature2: "حتى قسمين مخصصين لكل صفحة",
    standardFeature3: "حتى 15 منتجًا (يمكنك إضافة المزيد!)",
    standardFeature4: "تعديلان بسيطان",

    premiumTitle: "الموقع المميز",
    premiumDescription: "تجربة متكاملة ومخصصة بالكامل لعلامتك التجارية.",
    premiumFeature1: "فكرة وتصميم مخصصان بالكامل لهوية علامتك",
    premiumFeature2: "حتى 20 منتجًا (يمكنك إضافة المزيد!)",
    premiumFeature3: "صفحات مخصصة للرئيسية ومن نحن والشروط",
    premiumFeature4: "حتى 5 أقسام مخصصة في الصفحة الرئيسية",
    premiumFeature5: "حركات وتفاعلات بصرية",
    premiumFeature6: "3 تعديلات بسيطة",

    popular: "الأكثر طلبًا",
    getStarted: "ابدأ الآن",

    aiEyebrow: "اجعل منتجاتك مميزة",
    aiTitle: "تصوير المنتجات بالذكاء الاصطناعي",
    aiDescription: "حوّل منتجاتك إلى صور وفيديوهات إبداعية باستخدام الذكاء الاصطناعي.",
    aiDuration: "◷ 10 ثوانٍ",
    aiFeature1: "نتائج واقعية وجذابة",
    aiFeature2: "إبراز هوية علامتك التجارية",
    aiFeature3: "مثالية للسوشيال ميديا والإعلانات",

    landingEyebrow: "انطباع أول يحوّل الزوار إلى عملاء",
    landingTitle: "صفحات الهبوط",
    landingDescription: "صفحات هبوط مصممة لجذب الزوار وتحويلهم إلى عملاء.",
    landingFeature1: "تصميم مخصص",
    landingFeature2: "محتوى جذاب",
    landingFeature3: "تصميم يركز على تحقيق النتائج",

    whyEyebrow: "لماذا ELEVATE؟",
    whyTitle: "كل ما يحتاجه متجرك الإلكتروني",
    whyIntro: "أكثر من مجرد موقع إلكتروني — كل الأساسيات التي تساعد مشروعك على النمو.",
    benefit1Title: "تصميم مخصص",
    benefit1Description: "موقع مصمم خصيصًا لعلامتك التجارية، وليس مجرد قالب تقليدي.",
    benefit2Title: "إدارة المنتجات",
    benefit2Description: "إمكانية إدارة المنتجات والأسعار والوصف ومحتوى المتجر بعد الإطلاق.",
    benefit3Title: "تحسين محركات البحث والتحليلات",
    benefit3Description: "إعدادات SEO أساسية وتحليلات تساعد على اكتشاف متجرك وقياس أدائه.",
    benefit4Title: "إعداد المتجر",
    benefit4Description: "نجهز العناصر الأساسية ليكون متجرك الإلكتروني مستعدًا للإطلاق.",

    processEyebrow: "كيف نعمل؟",
    processTitle: "من الفكرة إلى الإطلاق",
    processIntro: "خطوات واضحة وتعاون مستمر من أول تواصل وحتى إطلاق موقعك.",
    step1Title: "التعرّف على مشروعك",
    step1Description: "نفهم علامتك التجارية ومنتجاتك واحتياجات عملائك.",
    step2Title: "التصميم",
    step2Description: "نحدد الاتجاه البصري ونصمم تجربة المتجر الأساسية.",
    step3Title: "التنفيذ",
    step3Description: "نعمل على تجهيز الصفحات والمنتجات ووظائف المتجر الإلكتروني.",
    step4Title: "الإطلاق",
    step4Description: "نتأكد من جاهزية كل شيء ونساعدك على الانطلاق.",

    closingEyebrow: "خطوتك القادمة تبدأ من هنا",
    closingTitle: "خلينا نطوّر مشروعك مع بعض",
    closingButton: "تواصل معنا",

    footerTagline: "ابدأ · ارتقِ · انطلق",
    footerInstagram: "إنستجرام",
    footerRights: "جميع الحقوق محفوظة."
  }
};

function setLanguage(language) {
  const selectedTranslations = translations[language];

  document.documentElement.lang = language;
  document.documentElement.dir = language === "ar" ? "rtl" : "ltr";
  document.body.classList.toggle("is-arabic", language === "ar");

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;

    if (selectedTranslations[key]) {
      element.innerHTML = selectedTranslations[key];
    }
  });

  languageButton.textContent = language === "en" ? "AR" : "EN";
  languageButton.setAttribute(
    "aria-label",
    language === "en" ? "Switch to Arabic" : "Switch to English"
  );

  localStorage.setItem("elevate-language", language);
}

languageButton.addEventListener("click", () => {
  const currentLanguage = document.documentElement.lang;
  setLanguage(currentLanguage === "en" ? "ar" : "en");
});

menuButton.addEventListener("click", () => {
  const isOpen = menuButton.getAttribute("aria-expanded") === "true";

  menuButton.setAttribute("aria-expanded", String(!isOpen));
  nav.classList.toggle("open", !isOpen);
});

nav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    menuButton.setAttribute("aria-expanded", "false");
  });
});

document.getElementById("year").textContent = new Date().getFullYear();

const savedLanguage = localStorage.getItem("elevate-language") || "en";
setLanguage(savedLanguage);
