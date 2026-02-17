/* eslint-disable no-unused-vars */
(() => {
  const STORAGE = {
    theme: "theme",
    lang: "lang",
    billing: "billing", // "monthly" | "annual"
  };

  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));

  function setElText(id, value) {
    const el = document.getElementById(id);
    if (!el) return;
    el.textContent = value;
  }

  function setElHTML(id, value) {
    const el = document.getElementById(id);
    if (!el) return;
    el.innerHTML = value;
  }

  const content = {
    en: {
      navCap: "Capabilities",
      navNet: "Network",
      navPricing: "Pricing",
      navTestimonials: "Signal",

      heroTitle: "Production-ready OpenClaw & AI infrastructure",
      heroSub:
        "Private, hardware-locked AI agents that manage your operations and nourish your growth: zero security risks, 100% private cloud.",
      btnDeploy: "Request Deployment",
      btnWa: "Talk to Principal",
      heroLoc: "Dubai in-person + Remote Worldwide · Private by design",

      protoHead: "The Protocol",
      protocolText:
        "AI is like water. The <span class='font-semibold'>claw team</span> builds the pipes that ensure it flows into the correct part of your business on time and nourishes it.",

      capTitle: "Autonomous Capabilities",
      capSub: "ADD USE CASES VIA NATURAL LANGUAGE",

      netHead: "Potential Pilot Projects & Network",
      net1: "Digital Dubai",
      net2: "Property Finder",
      net3: "MDLBEAST",
      net4: "DBA Partners",

      t1Name: "Remote Setup",
      t1Sub: "First Agent Deployment",
      t1Btn: "Initiate Setup",
      t1List: ["Install + Hardening", "Unified Workspace Orchestration", "14-day Hypercare Support"],
      t2Tag: "The Filter",
      t2Name: "The Strategic Partner",
      t2Sub: "Advisory Retainer",
      t2Btn: "Request Briefing",
      t2List: ["Monthly Executive Briefing (Signal)", "Bi-Weekly Advisory Strategy Calls", "Tool Stack Efficiency Audit"],
      t3Name: "The Sovereign",
      t3Sub: "Full Ops Support",
      t3Btn: "Scale Care",
      t3List: ["Managed AI Operations", "Ongoing Updates & Drift checks", "Priority Support Line"],

      footHead: "Node Request",
      footSub: "Submit technical objectives to begin provisioning.",
      footBtn: "Request Node Provisioning",
      fName: "Name",
      fEmail: "Email",
      fMsg: "Technical Objectives...",
      waLabel: "Secure Line: ",

      pricingBillingMonthly: "Monthly",
      pricingBillingAnnual: "Annual (save 15%)",

      caps: [
        "Translate real-time",
        "Organize your inbox",
        "Answer support tickets",
        "Summarize documents",
        "Notify stakeholders",
        "Track expenses",
        "Manage subscriptions",
        "Negotiate deals",
        "Book travel",
        "...and infinitely more",
      ],
    },
    ar: {
      navCap: "القدرات",
      navNet: "الشبكة",
      navPricing: "الأسعار",
      navTestimonials: "الإشارات",

      heroTitle: "بنية تحتية للذكاء الاصطناعي و OpenClaw جاهزة للإنتاج",
      heroSub:
        "وكلاء ذكاء اصطناعي خاصون ومغلقون تقنياً يديرون عملياتك ويغذون نموك: صفر مخاطر أمنية، سحابة خاصة 100٪.",
      btnDeploy: "طلب النشر",
      btnWa: "تواصل مع المدير",
      heroLoc: "دبي حضورياً + عن بُعد عالمياً · خصوصية افتراضية",

      protoHead: "البروتوكول",
      protocolText:
        "الذكاء الاصطناعي مثل الماء. يقوم <span class='font-semibold'>فريق claw</span> ببناء الأنابيب التي تضمن تدفقه إلى الجزء الصحيح من عملك في الوقت المحدد وتغذيته.",

      capTitle: "القدرات الذاتية",
      capSub: "أضف حالات الاستخدام عبر اللغة الطبيعية",

      netHead: "مشاريع رائدة وشبكة شركاء محتملين",
      net1: "دبي الرقمية",
      net2: "بروبرتي فايندر",
      net3: "مدل بيست",
      net4: "شركاء DBA",

      t1Name: "إعداد عن بُعد",
      t1Sub: "أول نشر للوكيل",
      t1Btn: "بدء الإعداد",
      t1List: ["التثبيت + التأمين التقني", "تنسيق مساحة العمل الموحدة", "دعم مكثف لمدة 14 يوماً"],
      t2Tag: "المصفاة",
      t2Name: "الشريك الاستراتيجي",
      t2Sub: "اشتراك استشاري",
      t2Btn: "طلب إحاطة",
      t2List: ["إحاطة تنفيذية شهرية", "مكالمات استراتيجية نصف شهرية", "تدقيق كفاءة الأدوات التقنية"],
      t3Name: "السيادة",
      t3Sub: "دعم العمليات الكامل",
      t3Btn: "توسيع الرعاية",
      t3List: ["إدارة عمليات الذكاء الاصطناعي", "تحديثات مستمرة وفحص الانجراف", "خط دعم الأولوية"],

      footHead: "طلب عقدة (Node)",
      footSub: "قدم الأهداف الفنية لبدء عملية التجهيز.",
      footBtn: "طلب تجهيز العقدة",
      fName: "الاسم",
      fEmail: "البريد الإلكتروني",
      fMsg: "الأهداف الفنية...",
      waLabel: "الخط الآمن: ",

      pricingBillingMonthly: "شهرياً",
      pricingBillingAnnual: "سنوياً (وفر 15٪)",

      caps: [
        "الترجمة الفورية",
        "تنظيم البريد الوارد",
        "الرد على التذاكر",
        "تلخيص المستندات",
        "إخطار المعنيين",
        "تتبع المصاريف",
        "إدارة الاشتراكات",
        "تفاوض الصفقات",
        "حجز السفر",
        "...والمزيد بلا حدود",
      ],
    },
  };

  function getInitialLang() {
    const stored = localStorage.getItem(STORAGE.lang);
    if (stored === "en" || stored === "ar") return stored;
    const htmlLang = document.documentElement.getAttribute("lang");
    return htmlLang === "ar" ? "ar" : "en";
  }

  function setLanguage(lang) {
    const html = document.documentElement;
    html.setAttribute("lang", lang);
    html.setAttribute("dir", lang === "ar" ? "rtl" : "ltr");
    localStorage.setItem(STORAGE.lang, lang);

    const langData = content[lang];

    // Nav
    setElText("nav-cap", langData.navCap);
    setElText("nav-net", langData.navNet);
    setElText("nav-pricing", langData.navPricing);
    setElText("nav-testimonials", langData.navTestimonials);

    // Hero + protocol
    setElText("hero-title", langData.heroTitle);
    setElText("hero-sub", langData.heroSub);
    setElText("hero-loc", langData.heroLoc);
    setElText("btn-deploy", langData.btnDeploy);
    setElText("btn-wa", langData.btnWa);
    setElText("proto-head", langData.protoHead);
    setElHTML("protocol-text", langData.protocolText);

    // Capabilities + network + tiers
    setElText("cap-title", langData.capTitle);
    setElText("cap-sub", langData.capSub);

    setElText("net-head", langData.netHead);
    setElText("net-1", langData.net1);
    setElText("net-2", langData.net2);
    setElText("net-3", langData.net3);
    setElText("net-4", langData.net4);

    setElText("t1-name", langData.t1Name);
    setElText("t1-sub", langData.t1Sub);
    setElText("t1-btn", langData.t1Btn);
    const t1List = document.getElementById("t1-list");
    if (t1List) t1List.innerHTML = langData.t1List.map((li) => `<li>${li}</li>`).join("");

    setElText("t2-tag", langData.t2Tag);
    setElText("t2-name", langData.t2Name);
    setElText("t2-sub", langData.t2Sub);
    setElText("t2-btn", langData.t2Btn);
    const t2List = document.getElementById("t2-list");
    if (t2List) t2List.innerHTML = langData.t2List.map((li) => `<li>${li}</li>`).join("");

    setElText("t3-name", langData.t3Name);
    setElText("t3-sub", langData.t3Sub);
    setElText("t3-btn", langData.t3Btn);
    const t3List = document.getElementById("t3-list");
    if (t3List) t3List.innerHTML = langData.t3List.map((li) => `<li>${li}</li>`).join("");

    // Footer + WhatsApp
    setElText("foot-head", langData.footHead);
    setElText("foot-sub", langData.footSub);
    setElText("foot-btn", langData.footBtn);
    const fName = document.getElementById("f-name");
    const fEmail = document.getElementById("f-email");
    const fMsg = document.getElementById("f-msg");
    if (fName) fName.placeholder = langData.fName;
    if (fEmail) fEmail.placeholder = langData.fEmail;
    if (fMsg) fMsg.placeholder = langData.fMsg;
    setElText("wa-label", langData.waLabel);

    // Pricing toggle labels
    setElText("billing-monthly-label", langData.pricingBillingMonthly);
    setElText("billing-annual-label", langData.pricingBillingAnnual);

    // Capabilities pills
    const grid = document.getElementById("caps-grid");
    if (grid) {
      grid.innerHTML = langData.caps
        .map((c, i) => {
          const op = i < 4 ? "opacity-100" : i < 7 ? "opacity-70" : "opacity-50";
          return `<div class="select-none rounded-full bg-black/5 ring-1 ring-black/10 px-4 py-2 text-xs text-gray-800 ${op} hover:bg-black/8 transition dark:bg-white/6 dark:ring-white/10 dark:text-white dark:hover:bg-white/10" data-reveal>${c}</div>`;
        })
        .join("");
    }

    // Toggle button label
    const langBtn = document.getElementById("langBtn");
    if (langBtn) {
      langBtn.textContent = lang === "ar" ? "🇸🇦" : "🇺🇸";
      langBtn.setAttribute("aria-label", lang === "ar" ? "Switch language to English" : "تبديل اللغة إلى العربية");
    }
  }

  function initLanguageToggle() {
    const btn = document.getElementById("langBtn");
    if (!btn) return;
    btn.addEventListener("click", () => {
      const next = document.documentElement.getAttribute("lang") === "en" ? "ar" : "en";
      setLanguage(next);
      // Re-register reveals for newly injected pills
      requestAnimationFrame(() => initScrollReveal(true));
    });
  }

  let revealObserver;
  function initScrollReveal(forceRebind = false) {
    if (revealObserver && !forceRebind) return;
    if (revealObserver) revealObserver.disconnect();

    const els = $$("[data-reveal]");
    els.forEach((el) => el.classList.add("reveal"));

    revealObserver = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (!e.isIntersecting) continue;
          e.target.classList.add("is-visible");
          revealObserver.unobserve(e.target);
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -10% 0px" },
    );

    els.forEach((el) => revealObserver.observe(el));
  }

  function animateCounter(el) {
    const to = Number(el.getAttribute("data-to") || "0");
    const duration = Number(el.getAttribute("data-duration") || "1200");
    const prefix = el.getAttribute("data-prefix") || "";
    const suffix = el.getAttribute("data-suffix") || "";
    const start = performance.now();

    const format = (n) => {
      if (Number.isNaN(n)) return `${prefix}${to}${suffix}`;
      const rounded = Math.round(n);
      return `${prefix}${rounded.toLocaleString()}${suffix}`;
    };

    function tick(now) {
      const t = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - t, 3);
      el.textContent = format(to * eased);
      if (t < 1) requestAnimationFrame(tick);
    }

    requestAnimationFrame(tick);
  }

  function initCounters() {
    const counters = $$("[data-counter][data-to]");
    if (counters.length === 0) return;

    const obs = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (!e.isIntersecting) continue;
          animateCounter(e.target);
          obs.unobserve(e.target);
        }
      },
      { threshold: 0.35 },
    );

    counters.forEach((c) => obs.observe(c));
  }

  function initActiveNav() {
    const sectionIds = ["capabilities", "network", "pricing", "testimonials", "faq"];
    const links = new Map(sectionIds.map((id) => [id, $(`a[href="#${id}"]`)]));
    const sections = sectionIds.map((id) => document.getElementById(id)).filter(Boolean);
    if (sections.length === 0) return;

    const obs = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0))[0];
        if (!visible) return;
        const id = visible.target.id;
        for (const [sid, link] of links.entries()) {
          if (!link) continue;
          link.setAttribute("aria-current", sid === id ? "true" : "false");
        }
      },
      { rootMargin: "-40% 0px -45% 0px", threshold: [0.1, 0.2, 0.35] },
    );

    sections.forEach((s) => obs.observe(s));
  }

  function initPricingToggle() {
    const toggle = document.getElementById("pricingToggle");
    if (!toggle) return;
    const knob = document.getElementById("pricingKnob");

    const getBilling = () => {
      const stored = localStorage.getItem(STORAGE.billing);
      if (stored === "annual" || stored === "monthly") return stored;
      return "monthly";
    };

    const setBilling = (billing) => {
      localStorage.setItem(STORAGE.billing, billing);
      toggle.setAttribute("aria-checked", billing === "annual" ? "true" : "false");
      toggle.dataset.billing = billing;
      if (knob) {
        knob.classList.toggle("translate-x-1", billing !== "annual");
        knob.classList.toggle("translate-x-8", billing === "annual");
      }

      $$("[data-price]").forEach((el) => {
        const monthly = el.getAttribute("data-monthly");
        const annual = el.getAttribute("data-annual");
        const period = el.getAttribute("data-period");
        if (!monthly || !annual) return;
        el.textContent = billing === "annual" ? annual : monthly;
        const periodEl = period ? document.getElementById(period) : null;
        if (periodEl) periodEl.textContent = billing === "annual" ? "/ yr" : "/ mo";
      });

      const badge = document.getElementById("billingBadge");
      if (badge) badge.classList.toggle("opacity-100", billing === "annual");
    };

    setBilling(getBilling());

    toggle.addEventListener("click", () => {
      const current = toggle.dataset.billing === "annual" ? "annual" : "monthly";
      setBilling(current === "annual" ? "monthly" : "annual");
    });
  }

  function initTestimonialsCarousel() {
    const track = document.getElementById("testimonialsTrack");
    const prev = document.getElementById("testimonialsPrev");
    const next = document.getElementById("testimonialsNext");
    const dots = document.getElementById("testimonialsDots");
    const toggle = document.getElementById("testimonialsToggle");
    if (!track || !dots) return;

    const cards = $$("[data-testimonial-card]", track);
    if (cards.length === 0) return;

    let index = 0;
    let autoplay = false;
    const prefersReducedMotion =
      typeof window !== "undefined" &&
      "matchMedia" in window &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const renderDots = () => {
      dots.innerHTML = cards
        .map((_, i) => {
          const active = i === index;
          return `<button class="h-2 w-2 rounded-full ${active ? "bg-white" : "bg-white/30"} transition" aria-label="Go to testimonial ${
            i + 1
          }" data-dot="${i}"></button>`;
        })
        .join("");
      $$("[data-dot]", dots).forEach((b) => {
        b.addEventListener("click", () => scrollTo(Number(b.getAttribute("data-dot") || "0")));
      });
    };

    const scrollTo = (i) => {
      index = Math.max(0, Math.min(cards.length - 1, i));
      cards[index].scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
      renderDots();
    };

    const onPrev = () => scrollTo(index - 1);
    const onNext = () => scrollTo(index + 1);
    if (prev) prev.addEventListener("click", onPrev);
    if (next) next.addEventListener("click", onNext);

    let raf = 0;
    track.addEventListener(
      "scroll",
      () => {
        cancelAnimationFrame(raf);
        raf = requestAnimationFrame(() => {
          const centers = cards.map((c) => {
            const r = c.getBoundingClientRect();
            return Math.abs(r.left + r.width / 2 - window.innerWidth / 2);
          });
          const nearest = centers.indexOf(Math.min(...centers));
          if (nearest !== -1 && nearest !== index) {
            index = nearest;
            renderDots();
          }
        });
      },
      { passive: true },
    );

    renderDots();

    // Autoplay with accessible toggle, disabled when reduced motion is preferred
    let intervalId = 0;
    const updateToggleLabel = () => {
      if (!toggle) return;
      toggle.setAttribute("aria-pressed", autoplay ? "true" : "false");
      toggle.textContent = autoplay ? "Autoplay on" : "Autoplay off";
    };

    const startAutoplay = () => {
      if (prefersReducedMotion || autoplay || cards.length <= 1) return;
      autoplay = true;
      updateToggleLabel();
      intervalId = window.setInterval(() => {
        const nextIndex = (index + 1) % cards.length;
        scrollTo(nextIndex);
      }, 7000);
    };

    const stopAutoplay = () => {
      autoplay = false;
      updateToggleLabel();
      if (intervalId) {
        window.clearInterval(intervalId);
        intervalId = 0;
      }
    };

    if (toggle) {
      toggle.addEventListener("click", () => {
        if (autoplay) {
          stopAutoplay();
        } else {
          startAutoplay();
        }
      });
    }

    // Start autoplay by default unless reduced motion is requested
    if (!prefersReducedMotion) startAutoplay();
  }

  function initHeroParallax() {
    const layer = document.getElementById("heroFx");
    if (!layer) return;
    let ticking = false;

    const update = () => {
      ticking = false;
      const y = window.scrollY || 0;
      const damp = Math.min(1, y / 800);
      layer.style.transform = `translate3d(0, ${damp * 18}px, 0)`;
    };

    window.addEventListener(
      "scroll",
      () => {
        if (ticking) return;
        ticking = true;
        requestAnimationFrame(update);
      },
      { passive: true },
    );

    update();
  }

  function boot() {
    // i18n
    setLanguage(getInitialLang());
    initLanguageToggle();

    // UI systems
    initScrollReveal();
    initCounters();
    initActiveNav();
    initPricingToggle();
    initTestimonialsCarousel();
    initHeroParallax();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot);
  } else {
    boot();
  }
})();

