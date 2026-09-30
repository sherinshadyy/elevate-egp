/* =========================================================
   ELEVATE.EGP
   Interactions + English / Arabic
========================================================= */

(function () {

  "use strict";


  /* =======================================================
     ELEMENTS
  ======================================================= */

  const header = document.querySelector(".site-header");
  const nav = document.querySelector(".site-nav");
  const toggle = document.querySelector(".nav-toggle");

  const languageButtons = document.querySelectorAll("[data-lang-toggle]");

  const reduceMotion =
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;


  /* =======================================================
     TRANSLATIONS
  ======================================================= */

  const translations = {

    en: {

      nav_work: "Work",
      nav_what: "What we do",
      nav_process: "Process",
      nav_packages: "Packages",
      nav_contact: "Contact",
      nav_instagram: "Instagram",

      hero_kicker: "Ecommerce web design",

      hero_title:
        "We build ecommerce websites that help brands grow.",

      hero_text:
        "Custom online stores for brands and businesses — designed to look right, work smoothly, and give you the tools to manage your business.",

      hero_button:
        "View packages",

      hero_instagram:
        "Visit Instagram",

      hero_meta_one:
        "Design",

      hero_meta_two:
        "Ecommerce",

      hero_meta_three:
        "Growth",

      scroll_text:
        "Scroll",


      work_kicker:
        "Example project",

      work_title:
        "One store, different screens.",

      work_text:
        "These screenshots show different parts of the same ecommerce store, from the homepage to product and shopping pages.",

      work_button:
        "See more on Instagram",


      what_kicker:
        "Your store",

      what_title:
        "Everything you need to run your ecommerce website.",

      what_text:
        "We don't just create the front end. Your store is set up so you can manage your products, track performance and continue growing after launch.",


      what_1_title:
        "Custom design",

      what_1_text:
        "A website designed around your brand instead of a generic template.",


      what_2_title:
        "Product management",

      what_2_text:
        "Products, prices, descriptions and store content can be managed after launch.",


      what_3_title:
        "SEO & analytics",

      what_3_text:
        "Basic SEO setup and analytics so your store is ready to be discovered and measured.",


      what_4_title:
        "Store setup",

      what_4_text:
        "We help put the essential pieces together so your ecommerce website is ready to launch.",


      process_kicker:
        "Process",

      process_title:
        "From idea to online store.",


      process_1_title:
        "Discover",

      process_1_text:
        "We understand your brand, products and what your customers need.",


      process_2_title:
        "Design",

      process_2_text:
        "We shape the visual direction and create the main store experience.",


      process_3_title:
        "Build",

      process_3_text:
        "Your pages, products and ecommerce functionality are put together.",


      process_4_title:
        "Launch",

      process_4_text:
        "We make sure everything is ready and help you move forward.",


      packages_kicker:
        "Packages",

      packages_title:
        "Choose the setup that fits your brand.",

      packages_text:
        "Need something different? Send us a message and we can discuss a custom setup.",


      basic_label:
        "Basic",

      basic_title:
        "A clean custom store to get started.",

      basic_1:
        "Branded & customized design",

      basic_2:
        "Up to 10 products added during setup",

      basic_3:
        "Custom Home, About & Terms pages",

      basic_4:
        "Up to 2 custom sections on homepage",

      basic_5:
        "Mobile & desktop optimized",

      basic_6:
        "1 minor revision",

      basic_7:
        "7-day support",

      basic_button:
        "Ask about Basic",


      premium_label:
        "Premium",

      premium_title:
        "A more expressive ecommerce experience.",

      prem_1:
        "Custom concept & branded design",

      prem_2:
        "Up to 20 products added during setup",

      prem_3:
        "Custom Home, About & Terms pages",

      prem_4:
        "Up to 4 custom sections",

      prem_5:
        "Animations & interactions",

      prem_6:
        "Mobile & desktop optimized",

      prem_7:
        "2 minor revisions",

      prem_8:
        "7-day support",

      premium_button:
        "Ask about Premium",


      shared_title:
        "Included with both packages",

      shared_1:
        "Basic SEO setup",

      shared_2:
        "Product management",

      shared_3:
        "Analytics",

      shared_4:
        "Unlimited products after setup",


      pkg_note_1:
        "The product quantity in each package refers to the products we add during setup. You can add as many additional products as you want afterward.",

      domain_note:
        "Domain setup available — ask us for details.",


      about_kicker:
        "About elevate",

      about_title:
        "Your website should feel like your brand.",

      about_text_1:
        "elevate.egp creates ecommerce websites for brands and businesses that want more than a basic online store.",

      about_text_2:
        "We focus on custom visual direction, clear shopping experiences and practical ecommerce tools — creating websites that look intentional and remain manageable after launch.",


      contact_kicker:
        "Contact",

      contact_title:
        "Have a brand to build?",

      contact_text:
        "For pricing, questions or custom requests, contact us through Instagram DMs.",

      contact_button:
        "Message us on Instagram",


      footer_text:
        "Ecommerce websites for brands ready to grow."

    },


    ar: {

      nav_work:
        "أعمالنا",

      nav_what:
        "ماذا نقدم",

      nav_process:
        "طريقة العمل",

      nav_packages:
        "الباقات",

      nav_contact:
        "تواصل معنا",

      nav_instagram:
        "إنستجرام",


      hero_kicker:
        "تصميم متاجر إلكترونية",

      hero_title:
        "نبني متاجر إلكترونية تساعد علامتك التجارية على النمو.",

      hero_text:
        "متاجر إلكترونية مخصصة للعلامات التجارية والأعمال — بتصميم مناسب لهويتك، وتجربة استخدام سلسة، وأدوات تساعدك على إدارة متجرك.",

      hero_button:
        "عرض الباقات",

      hero_instagram:
        "زيارة إنستجرام",

      hero_meta_one:
        "تصميم",

      hero_meta_two:
        "تجارة إلكترونية",

      hero_meta_three:
        "نمو",

      scroll_text:
        "مرر",


      work_kicker:
        "مشروع تجريبي",

      work_title:
        "متجر واحد، شاشات مختلفة.",

      work_text:
        "هذه الصور توضح أجزاء مختلفة من نفس المتجر الإلكتروني، بدايةً من الصفحة الرئيسية وحتى صفحات المنتجات والتسوق.",

      work_button:
        "شاهد المزيد على إنستجرام",


      what_kicker:
        "متجرك",

      what_title:
        "كل ما تحتاجه لإدارة متجرك الإلكتروني.",

      what_text:
        "نحن لا نصمم الواجهة فقط. يتم تجهيز متجرك بحيث يمكنك إدارة منتجاتك، متابعة أداء المتجر والاستمرار في تطويره بعد الإطلاق.",


      what_1_title:
        "تصميم مخصص",

      what_1_text:
        "موقع مصمم حول هوية علامتك التجارية بدلًا من قالب تقليدي.",


      what_2_title:
        "إدارة المنتجات",

      what_2_text:
        "يمكنك إدارة المنتجات والأسعار والوصف ومحتوى المتجر بعد الإطلاق.",


      what_3_title:
        "SEO وتحليلات",

      what_3_text:
        "إعداد أساسي لمحركات البحث وتحليلات تساعدك على متابعة أداء متجرك.",


      what_4_title:
        "تجهيز المتجر",

      what_4_text:
        "نساعدك في تجهيز العناصر الأساسية ليكون متجرك الإلكتروني جاهزًا للإطلاق.",


      process_kicker:
        "طريقة العمل",

      process_title:
        "من الفكرة إلى المتجر الإلكتروني.",


      process_1_title:
        "اكتشاف",

      process_1_text:
        "نتعرف على علامتك التجارية ومنتجاتك وما يحتاجه عملاؤك.",


      process_2_title:
        "تصميم",

      process_2_text:
        "نحدد الاتجاه البصري ونصمم تجربة المتجر الأساسية.",


      process_3_title:
        "تنفيذ",

      process_3_text:
        "نجهز الصفحات والمنتجات ووظائف المتجر الإلكتروني.",


      process_4_title:
        "إطلاق",

      process_4_text:
        "نتأكد من جاهزية المتجر ونساعدك على بدء العمل.",


      packages_kicker:
        "الباقات",

      packages_title:
        "اختاري الباقة المناسبة لعلامتك التجارية.",

      packages_text:
        "تحتاجين إلى شيء مختلف؟ تواصلي معنا لمناقشة تصميم مخصص.",


      basic_label:
        "Basic",

      basic_title:
        "متجر مخصص وبسيط للبدء.",

      basic_1:
        "تصميم مخصص ومتوافق مع هوية العلامة التجارية",

      basic_2:
        "إضافة حتى 10 منتجات أثناء تجهيز المتجر",

      basic_3:
        "صفحات مخصصة للرئيسية ومن نحن والشروط",

      basic_4:
        "حتى قسمين مخصصين في الصفحة الرئيسية",

      basic_5:
        "متوافق مع الهاتف والكمبيوتر",

      basic_6:
        "تعديل بسيط واحد",

      basic_7:
        "دعم لمدة 7 أيام",

      basic_button:
        "اسألي عن Basic",


      premium_label:
        "Premium",

      premium_title:
        "تجربة متجر إلكتروني أكثر تميزًا.",

      prem_1:
        "فكرة وتصميم مخصصان ومتوافقان مع الهوية",

      prem_2:
        "إضافة حتى 20 منتجًا أثناء تجهيز المتجر",

      prem_3:
        "صفحات مخصصة للرئيسية ومن نحن والشروط",

      prem_4:
        "حتى 4 أقسام مخصصة",

      prem_5:
        "حركات وتفاعلات",

      prem_6:
        "متوافق مع الهاتف والكمبيوتر",

      prem_7:
        "تعديلان بسيطان",

      prem_8:
        "دعم لمدة 7 أيام",

      premium_button:
        "اسألي عن Premium",


      shared_title:
        "متضمنة في الباقتين",

      shared_1:
        "إعداد أساسي لمحركات البحث",

      shared_2:
        "إدارة المنتجات",

      shared_3:
        "تحليلات المتجر",

      shared_4:
        "إمكانية إضافة عدد غير محدود من المنتجات بعد التجهيز",


      pkg_note_1:
        "عدد المنتجات في كل باقة يشير إلى المنتجات التي نضيفها لك أثناء تجهيز المتجر. يمكنك إضافة أي عدد من المنتجات الإضافية بنفسك بعد ذلك.",

      domain_note:
        "يتوفر إعداد الدومين — تواصلي معنا لمعرفة التفاصيل.",


      about_kicker:
        "عن elevate",

      about_title:
        "موقعك يجب أن يعكس هوية علامتك التجارية.",

      about_text_1:
        "elevate.egp تنشئ متاجر إلكترونية للعلامات التجارية والأعمال التي تريد أكثر من مجرد متجر تقليدي.",

      about_text_2:
        "نركز على التصميم المخصص، وتجربة التسوق الواضحة، والأدوات العملية لإدارة المتجر — لنقدم لك موقعًا مميزًا وسهل الإدارة بعد الإطلاق.",


      contact_kicker:
        "تواصل معنا",

      contact_title:
        "لديك علامة تجارية وتريدين بناء متجر؟",

      contact_text:
        "للاستفسار عن الأسعار أو الطلبات الخاصة، تواصلي معنا عبر رسائل إنستجرام.",

      contact_button:
        "راسلينا على إنستجرام",


      footer_text:
        "متاجر إلكترونية للعلامات التجارية المستعدة للنمو."

    }

  };


  /* =======================================================
     APPLY LANGUAGE
  ======================================================= */

  function applyLanguage(lang) {

    const dictionary = translations[lang] || translations.en;

    document.documentElement.lang = lang;

    document.documentElement.dir =
      lang === "ar" ? "rtl" : "ltr";

    document.body.classList.toggle(
      "rtl",
      lang === "ar"
    );


    document.querySelectorAll("[data-i18n]").forEach((element) => {

      const key = element.getAttribute("data-i18n");

      if (dictionary[key] !== undefined) {
        element.textContent = dictionary[key];
      }

    });


    document.querySelectorAll("[data-lang-label]").forEach((element) => {

      element.textContent =
        lang === "ar"
          ? "English"
          : "عربي";

    });


    languageButtons.forEach((button) => {

      button.setAttribute(
        "aria-label",
        lang === "ar"
          ? "تغيير اللغة إلى الإنجليزية"
          : "Switch language"
      );

    });


    document.title =
      lang === "ar"
        ? "elevate.egp — تصميم متاجر إلكترونية"
        : "elevate.egp — Ecommerce Web Design";


    localStorage.setItem(
      "elevate-language",
      lang
    );

  }


  /* =======================================================
     LANGUAGE TOGGLE
  ======================================================= */

  languageButtons.forEach((button) => {

    button.addEventListener("click", () => {

      const current =
        document.documentElement.lang === "ar"
          ? "ar"
          : "en";

      const next =
        current === "en"
          ? "ar"
          : "en";

      applyLanguage(next);

    });

  });


  /* =======================================================
     LOAD SAVED LANGUAGE
  ======================================================= */

  const savedLanguage =
    localStorage.getItem("elevate-language");


  if (savedLanguage === "ar" || savedLanguage === "en") {

    applyLanguage(savedLanguage);

  } else {

    applyLanguage("en");

  }


  /* =======================================================
     HEADER SCROLL
  ======================================================= */

  function onScroll() {

    if (!header) return;

    header.classList.toggle(
      "is-scrolled",
      window.scrollY > 8
    );

  }


  window.addEventListener(
    "scroll",
    onScroll,
    { passive: true }
  );


  onScroll();


  /* =======================================================
     MOBILE MENU
  ======================================================= */

  function closeMenu() {

    if (!toggle || !nav) return;

    toggle.setAttribute(
      "aria-expanded",
      "false"
    );

    toggle.setAttribute(
      "aria-label",
      document.documentElement.lang === "ar"
        ? "فتح القائمة"
        : "Open menu"
    );

    nav.classList.remove("is-open");

    if (header) {
      header.classList.remove("is-open");
    }

  }


  function openMenu() {

    if (!toggle || !nav) return;

    toggle.setAttribute(
      "aria-expanded",
      "true"
    );

    toggle.setAttribute(
      "aria-label",
      document.documentElement.lang === "ar"
        ? "إغلاق القائمة"
        : "Close menu"
    );

    nav.classList.add("is-open");

    if (header) {
      header.classList.add("is-open");
    }

  }


  if (toggle && nav) {

    toggle.addEventListener("click", () => {

      const isOpen =
        toggle.getAttribute("aria-expanded") === "true";

      if (isOpen) {
        closeMenu();
      } else {
        openMenu();
      }

    });


    nav.querySelectorAll("a").forEach((link) => {

      link.addEventListener(
        "click",
        closeMenu
      );

    });


    document.addEventListener("click", (event) => {

      if (!nav.classList.contains("is-open")) {
        return;
      }

      if (
        nav.contains(event.target) ||
        toggle.contains(event.target)
      ) {
        return;
      }

      closeMenu();

    });


    window.addEventListener("resize", () => {

      if (window.innerWidth > 720) {
        closeMenu();
      }

    });

  }


  /* =======================================================
     SMOOTH ANCHOR SCROLL
  ======================================================= */

  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {

    anchor.addEventListener("click", (event) => {

      const id =
        anchor.getAttribute("href");


      if (!id || id === "#") {
        return;
      }


      const target =
        document.querySelector(id);


      if (!target) {
        return;
      }


      event.preventDefault();


      const offset =
        (header ? header.offsetHeight : 68) + 10;


      const top =
        target.getBoundingClientRect().top +
        window.scrollY -
        offset;


      window.scrollTo({

        top: top,

        behavior:
          reduceMotion
            ? "auto"
            : "smooth"

      });

    });

  });


  /* =======================================================
     IMAGE FALLBACK
  ======================================================= */

  document.querySelectorAll(".shot img").forEach((img, index) => {

    img.addEventListener("error", function onError() {

      img.removeEventListener(
        "error",
        onError
      );


      const tones = [
        "#E4D6C8",
        "#C9B7A6",
        "#D8CBBE",
        "#B39A86",
        "#EBE6DF",
        "#C4A990"
      ];


      img.style.background =
        tones[index % tones.length];


      img.removeAttribute("src");


      img.alt =
        "Add screenshot to assets folder";

    });

  });


})();