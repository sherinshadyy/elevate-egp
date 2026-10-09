/* =========================================================

   ELEVATE.EGP

   Interactions + English / Arabic

\========================================================= */



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





      packages_kicker: "Packages",
      packages_title: "Choose the setup that fits your brand.",
      packages_text: "Need something different? Send us a message and we can discuss a custom setup.",

      basic_label: "Basic",
      basic_title: "A clean and simple website to get started.",
      basic_1: "Clean & simple website design",
      basic_2: "Up to 10 products (you can add more!)",
      basic_3: "Essential pages: Home, About Us & Terms",
      basic_4: "1 minor revision",
      basic_button: "Ask about Basic",

      standard_label: "Standard",
      standard_title: "A customized website that reflects your brand.",
      standard_1: "Branded & customized design",
      standard_2: "Up to 2 custom sections per page: Home, About Us & Terms",
      standard_3: "Up to 15 products (you can add more!)",
      standard_4: "Custom Home, About Us & Terms pages",
      standard_5: "2 minor revisions",
      standard_button: "Ask about Standard",

      premium_label: "Premium",
      premium_title: "A fully customized experience built around your brand.",
      prem_1: "Fully customized concept & branded design",
      prem_2: "Up to 20 products (you can add more!)",
      prem_3: "Custom Home, About Us & Terms pages",
      prem_4: "Up to 5 custom sections on the homepage",
      prem_5: "Animations & interactions",
      prem_6: "3 minor revisions",
      premium_button: "Ask about Premium",

      pkg_note_1: "Product limits refer to the products added during setup. You can add more products to your store afterward.",

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





      packages_kicker: "الباقات",
      packages_title: "اختاري الباقة المناسبة لعلامتك التجارية.",
      packages_text: "تحتاجين إلى شيء مختلف؟ تواصلي معنا لمناقشة تصميم مخصص.",

      basic_label: "Basic",
      basic_title: "موقع بسيط واحترافي للبدء.",
      basic_1: "تصميم بسيط واحترافي للموقع",
      basic_2: "حتى 10 منتجات (يمكنك إضافة المزيد!)",
      basic_3: "الصفحات الأساسية: الرئيسية، من نحن، والشروط والأحكام",
      basic_4: "تعديل بسيط واحد",
      basic_button: "استفسري عن Basic",

      standard_label: "Standard",
      standard_title: "موقع مخصص يعكس هوية علامتك التجارية.",
      standard_1: "تصميم مخصص ومتناسق مع هوية البراند",
      standard_2: "حتى قسمين مخصصين لكل صفحة: الرئيسية، من نحن، والشروط والأحكام",
      standard_3: "حتى 15 منتجًا (يمكنك إضافة المزيد!)",
      standard_4: "صفحات مخصصة: الرئيسية، من نحن، والشروط والأحكام",
      standard_5: "تعديلان بسيطان",
      standard_button: "استفسري عن Standard",

      premium_label: "Premium",
      premium_title: "تجربة متكاملة بتصميم مخصص لهوية علامتك التجارية.",
      prem_1: "فكرة وتصميم مخصصان بالكامل لهوية البراند",
      prem_2: "حتى 20 منتجًا (يمكنك إضافة المزيد!)",
      prem_3: "صفحات مخصصة: الرئيسية، من نحن، والشروط والأحكام",
      prem_4: "حتى 5 أقسام مخصصة في الصفحة الرئيسية",
      prem_5: "حركات وتفاعلات",
      prem_6: "3 تعديلات بسيطة",
      premium_button: "استفسري عن Premium",

      pkg_note_1: "عدد المنتجات يشير إلى المنتجات التي نضيفها أثناء تجهيز المتجر. يمكنك إضافة المزيد من المنتجات بعد ذلك.",

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