// const productItems = [
//   {
//    id: "led",
//     images: [
//       "assets/products/led/Image1.jpg",
//       "assets/products/led/Image2.jpg",
//       "assets/products/led/Image3.jpg"
//     ],
//     nameKey: "productLedName",
//     shortKey: "productLedShort",
//     longKey: "productLedLong"
//   },
//   {
//     id: "steel",
//     image: "assets/products/stainless-letters.svg",
//     nameKey: "productSteelName",
//     shortKey: "productSteelShort",
//     longKey: "productSteelLong"
//   },
//   {
//     id: "zincor",
//     image: "assets/products/zincor-letters.svg",
//     nameKey: "productZincorName",
//     shortKey: "productZincorShort",
//     longKey: "productZincorLong"
//   },
//   {
//     id: "iron",
//     image: "assets/products/iron-fabrication.svg",
//     nameKey: "productIronName",
//     shortKey: "productIronShort",
//     longKey: "productIronLong"
//   },
//   {
//     id: "acrylic",
//     image: "assets/products/acrylic-board.svg",
//     nameKey: "productAcrylicName",
//     shortKey: "productAcrylicShort",
//     longKey: "productAcrylicLong"
//   },
//   {
//     id: "shop",
//     image: "assets/products/shop-branding.svg",
//     nameKey: "productShopName",
//     shortKey: "productShopShort",
//     longKey: "productShopLong"
//   }
// ];

const productItems = [
  {
    id: "led",
    image: "assets/products/led/led-letters.svg",
    images: [
      "assets/products/led/Image1.jpg",
      "assets/products/led/Image2.jpg",
      "assets/products/led/Image3.jpg",
      "assets/products/led/Image4.jpg",
      "assets/products/led/Image5.jpg",
      "assets/products/led/Image6.jpg",
      "assets/products/led/Image7.jpg",
      "assets/products/led/Image8.jpg"
    ],
    nameKey: "productLedName",
    shortKey: "productLedShort",
    longKey: "productLedLong"
  },
  {
    id: "steel",
    image: "assets/products/stainless/stainless-letters.svg",
    images: [
      "assets/products/stainless/Image1.jpg",
      "assets/products/stainless/Image2.jpg",
      "assets/products/stainless/Image3.jpg"
    ],

    videos: [
    "assets/products/stainless/Video1.mp4"
    ],
    nameKey: "productSteelName",
    shortKey: "productSteelShort",
    longKey: "productSteelLong"
  },
  {
    id: "zincor",
    image: "assets/products/zincor/zincor-letters.svg",
    images: [
      "assets/products/zincor/Image1.jpg",
      "assets/products/zincor/Image2.jpg",
      "assets/products/zincor/Image3.jpg",
      "assets/products/zincor/Image4.jpg"
    ],
    nameKey: "productZincorName",
    shortKey: "productZincorShort",
    longKey: "productZincorLong"
  },
  {
    id: "iron",
    image: "assets/products/iron/iron-fabrication.svg",
    images: [
      "assets/products/iron/Image1.jpg",
      "assets/products/iron/Image2.jpg"
    ],
    nameKey: "productIronName",
    shortKey: "productIronShort",
    longKey: "productIronLong"
  },
  {
    id: "acrylic",
    image: "assets/products/acrylic/acrylic-board.svg",
    images: [
      "assets/products/acrylic/Image1.jpg",
      "assets/products/acrylic/Image2.jpg"
    ],
     videos: [
      "assets/products/acrylic/Video1.mp4",
      "assets/products/acrylic/Video2.mp4",
      "assets/products/acrylic/Video3.mp4",
      "assets/products/acrylic/Video4.mp4"
    ],
    nameKey: "productAcrylicName",
    shortKey: "productAcrylicShort",
    longKey: "productAcrylicLong"
  },
  {
    id: "shop",
    image: "assets/products/shop-branding/shop-branding.svg",
    images: [
      "assets/products/shop-branding/Image1.jpg",
      "assets/products/shop-branding/Image2.jpg",
      "assets/products/shop-branding/Image3.jpg",
      "assets/products/shop-branding/Image4.jpg",
      "assets/products/shop-branding/Image5.jpg",
      "assets/products/shop-branding/Image6.jpg",
      "assets/products/shop-branding/Image7.jpg"
    ],
    nameKey: "productShopName",
    shortKey: "productShopShort",
    longKey: "productShopLong"
  }
];

function t(key) {
  const lang = getCurrentLang();
  return translations[lang]?.[key] || translations.en[key] || key;
}

function renderProducts(limit) {
  const grids = document.querySelectorAll("[data-products-grid]");
  if (!grids.length) return;

  const visibleItems = limit ? productItems.slice(0, limit) : productItems;
  grids.forEach((grid) => {
    grid.innerHTML = visibleItems
      .map(
        (item) => `
          <div class="col-md-6 col-lg-4" data-aos="fade-up">
            <article class="product-card h-100" role="button" tabindex="0" data-product-id="${item.id}" aria-label="${t("viewDetails")}: ${t(item.nameKey)}">
              <div class="product-image-frame">
                <img src="${item.image}" alt="${t(item.nameKey)}" loading="lazy" class="product-img" onerror="this.closest('.product-image-frame').classList.add('image-missing')">
              </div>
              <div class="product-card-body">
                <h3>${t(item.nameKey)}</h3>
                <p>${t(item.shortKey)}</p>
                <span class="btn btn-outline-primary btn-sm product-card-action" aria-hidden="true">${t("viewDetails")}</span>
              </div>
            </article>
          </div>
        `
      )
      .join("");
  });
}

function setupProductModal() {
  function openProductModal(productId) {
    const item = productItems.find((product) => product.id === productId);
    if (!item) return;

    const modalElement = document.getElementById("productModal");
    if (!modalElement || !window.bootstrap) return;

    const carouselInner = modalElement.querySelector(".carousel-inner");

    let mediaItems = [];

    if (item.images) {
    mediaItems.push(
    ...item.images.map(img => ({
      type: "image",
      src: img
    }))
  );
    }

if (item.videos) {
  mediaItems.push(
    ...item.videos.map(video => ({
      type: "video",
      src: video
    }))
  );
}

carouselInner.innerHTML = mediaItems
  .map((media, index) => `
    <div class="carousel-item ${index === 0 ? "active" : ""}">
      ${
        media.type === "video"
        ?
        `<video class="d-block w-100 product-video"
               controls
               muted>
            <source src="${media.src}" type="video/mp4">
           </video>`
        :
        `<img src="${media.src}"
              class="d-block w-100"
              alt="${t(item.nameKey)}">`
      }
    </div>
  `)
  .join("");
    // const modalImage = modalElement.querySelector(".modal-product-image");
    // modalElement.dataset.activeProductId = item.id;
    // modalElement.querySelector(".modal-title").textContent = t(item.nameKey);
    // modalImage.src = item.image;
    // modalImage.alt = t(item.nameKey);
    // modalElement.querySelector(".modal-product-text").textContent = t(item.longKey);

    modalElement.classList.remove("modal-ready");
    requestAnimationFrame(() => modalElement.classList.add("modal-ready"));
    bootstrap.Modal.getOrCreateInstance(modalElement).show();
  }

  document.body.addEventListener("click", (event) => {
    const card = event.target.closest(".product-card[data-product-id]");
    if (!card) return;

    openProductModal(card.dataset.productId);
  });

  document.body.addEventListener("keydown", (event) => {
    if (event.key !== "Enter" && event.key !== " ") return;

    const card = event.target.closest(".product-card[data-product-id]");
    if (!card) return;

    event.preventDefault();
    openProductModal(card.dataset.productId);
  });
}

function setupCounters() {
  const counters = document.querySelectorAll("[data-counter]");
  if (!counters.length) return;

  const animateCounter = (counter) => {
    const target = Number(counter.dataset.counter);
    const duration = 1200;
    const start = performance.now();

    function update(now) {
      const progress = Math.min((now - start) / duration, 1);
      counter.textContent = Math.floor(progress * target).toLocaleString();
      if (progress < 1) requestAnimationFrame(update);
    }

    requestAnimationFrame(update);
  };

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !entry.target.dataset.counted) {
          entry.target.dataset.counted = "true";
          animateCounter(entry.target);
        }
      });
    },
    { threshold: 0.5 }
  );

  counters.forEach((counter) => observer.observe(counter));
}

function setupContactForm() {
  const form = document.getElementById("contactForm");
  if (!form) return;

  const alertBox = document.getElementById("formAlert");
  const submitButton = form.querySelector("[type='submit']");
  const whatsappButton = document.getElementById("whatsappButton");
  const whatsappNumber = "966500000000";

  function formMessage() {
    const data = new FormData(form);
    return [
      "Shanu Advertising & Design",
      `${t("whatsappMessageName")}: ${data.get("name") || ""}`,
      `${t("whatsappMessagePhone")}: ${data.get("phone") || ""}`,
      `${t("whatsappMessageEmail")}: ${data.get("email") || ""}`,
      `${t("whatsappMessageCompany")}: ${data.get("company") || ""}`,
      `${t("whatsappMessageSubject")}: ${data.get("subject") || ""}`,
      `${t("whatsappMessageBody")}: ${data.get("message") || ""}`
    ].join("\n");
  }

  function updateWhatsappLink() {
    whatsappButton.href = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(formMessage())}`;
  }

  function showFormAlert(key, type) {
    alertBox.dataset.messageKey = key;
    alertBox.textContent = t(key);
    alertBox.className = `alert alert-${type}`;
  }

  form.addEventListener("input", updateWhatsappLink);
  updateWhatsappLink();

  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    alertBox.className = "alert d-none";

    if (!form.checkValidity()) {
      form.classList.add("was-validated");
      showFormAlert("errorMessage", "danger");
      return;
    }

    submitButton.disabled = true;
    submitButton.dataset.loading = "true";
    submitButton.textContent = t("loadingMessage");

    const payload = new FormData(form);
    payload.append("access_key", form.dataset.accessKey || "YOUR_WEB3FORMS_ACCESS_KEY");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: payload
      });
      const result = await response.json();
      if (!response.ok || result.success === false) throw new Error("Form submission failed");

      showFormAlert("successMessage", "success");
      form.reset();
      form.classList.remove("was-validated");
      updateWhatsappLink();
    } catch (error) {
      showFormAlert("errorMessage", "danger");
    } finally {
      submitButton.disabled = false;
      delete submitButton.dataset.loading;
      submitButton.textContent = t("sendMessage");
    }
  });

  document.addEventListener("languageChanged", () => {
    updateWhatsappLink();

    if (alertBox.dataset.messageKey) {
      alertBox.textContent = t(alertBox.dataset.messageKey);
    }

    submitButton.textContent = submitButton.dataset.loading ? t("loadingMessage") : t("sendMessage");
  });
}

function setupMediaFallbacks() {
  const heroVideo = document.querySelector("[data-video-path]");
  if (heroVideo) {
    fetch(heroVideo.dataset.videoPath, { method: "HEAD" })
      .then((response) => {
        if (!response.ok) return;
        const source = document.createElement("source");
        source.src = heroVideo.dataset.videoPath;
        source.type = "video/mp4";
        heroVideo.appendChild(source);
        heroVideo.load();
      })
      .catch(() => {});
  }

  const ownerImage = document.querySelector("[data-owner-image]");
  if (ownerImage) {
    ownerImage.addEventListener("error", () => {
      ownerImage.src = "assets/icons/owner-placeholder.svg";
    });
  }

  document.querySelectorAll("[data-qr-fallback]").forEach((image) => {
    image.addEventListener("error", () => {
      image.src = "assets/icons/qr-placeholder.svg";
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const productLimit = document.body.dataset.page === "home" ? 3 : null;
  renderProducts(productLimit);
  setupProductModal();
  setupCounters();
  setupContactForm();
  setupMediaFallbacks();

  if (window.AOS) {
    AOS.init({ duration: 700, once: true, offset: 80 });
  }
});

document.addEventListener("languageChanged", () => {
  const productLimit = document.body.dataset.page === "home" ? 3 : null;
  renderProducts(productLimit);

  const modalElement = document.getElementById("productModal");
  const activeProduct = productItems.find((product) => product.id === modalElement?.dataset.activeProductId);
  
  if (modalElement && activeProduct) {
    modalElement.querySelector(".modal-title").textContent = t(activeProduct.nameKey);
    modalElement.querySelector(".modal-product-image").alt = t(activeProduct.nameKey);
    modalElement.querySelector(".modal-product-text").textContent = t(activeProduct.longKey);
  }
});
