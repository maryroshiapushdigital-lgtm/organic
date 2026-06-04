"use client";
import React, { useState, useEffect } from "react";
import "./Inner-page.css";

/* ---------- DATA ---------- */

const sizes = ["250g", "500g", "1 kg", "2 kg"];

const categoryMenu = [
  {
    title: "Rice & Malt",
    links: [
      "Rathasali Rice",
      "Thuyamalli Rice",
      "Karuppu Kavuni Rice",
      "Beetroot Multivitamin Malt",
      "Panchamirtha Malt",
    ],
  },
  {
    title: "Flours",
    dropdownClass: "flour-dropdown",
    links: [
      "Karuppu Kavuni Idiyappam Flour",
      "Rathasali Idiyappam Flour",
      "Thuyamalli Idiyappam Flour",
      "Mysore Malli Idiyappam Flour",
      "Karuppu Kavuni Puttu Flour",
      "Rathasali Puttu Flour",
      "Thuyamalli Puttu Flour",
      "Mysore Malli Puttu Flour",
      "Thuyamalli Kozhukattai Flour",
      "Karuppu Kavuni Kozhukattai Flour",
      "Rathasali Kozhukattai Flour",
      "Mysore Malli Kozhukattai Flour",
    ],
  },
  {
    title: "Soup & Health Mix",
    links: [
      "Karuppu Ulunthu Karuppu Kavuni Kali Mix",
      "Karuppu Kavuni Soup Mix",
      "Rathasali Soup Mix",
      "Mapillai Samba Health Mix",
      "Poongar Health Mix",
      "Karuppu Kavuni Health Mix",
      "Rathasali Health Mix",
    ],
  },
  {
    title: "Cookies",
    links: [
      "Rathasali Rice Cookies",
      "Thuyamalli Rice Cookies",
      "Mysore Malli Rice Cookies",
      "Multivitamin Cookies",
      "Panchamirtha Cookies",
      "Karuppu Kavuni Rice Cookies",
    ],
  },
  {
    title: "Vadam & Vathal",
    links: [
      "Mysore Malli Murukku Vadam",
      "Thanjavur Special Killu Vadam",
      "Thanjavur Special Kudaimilagai Vathal",
      "Mor Milagai Vathal",
      "Kothavarai Vathal",
    ],
  },
];

const thumbs = [
  "./Images/karupukavani-thumb-1.svg",
  "/Images/karupukavani-thumb-2.svg",
  "/Images/karupukavani-thumb-3.svg",
  "/Images/karupukavani-thumb-4.svg",
  "/Images/karupukavani-thumb-5.svg",
];

const features = [
  {
    icon: "./Images/shield.svg",
    title: "No Preservatives",
    text: "No additives, no artificial colors or flavours",
  },
  {
    icon: "./Images/hand.svg",
    title: "Single Ingredient",
    text: "Just Karuppu Kavuni rice flour. Nothing else.",
  },
  {
    icon: "./Images/Antioxident.svg",
    title: "Antioxidant-Rich",
    text: "Protect the body from oxidative stress & supports overall wellness.",
  },
  {
    icon: "./Images/age.svg",
    title: "Suitable for all age groups",
    text: "A Nourishing traditional mix enjoyed by childs, adults & elders",
  },
];

const ingredients = [
  {
    icon: "./Images/shop.svg",
    title: "Puttu flour",
    sub: "Karuppu Kavuni",
    qty: "1 cup",
  },
  {
    icon: "./Images/water.svg",
    title: "Water",
    sub: "Room temperature",
    qty: "as needed",
  },
  {
    icon: "./Images/salt.svg",
    title: "Salt",
    sub: "A small pinch",
    qty: "as needed",
  },
  {
    icon: "./Images/coconut.svg",
    title: "Grated coconut",
    sub: "Fresh, white",
    qty: "½ cup",
  },
];

const steps = [
  {
    tag: "Season",
    label: "STEP 01",
    title: "Add salt to the flour",
    text: "Take the puttu flour in a wide bowl. Add salt as needed and mix with your fingers.",
  },
  {
    tag: "Sprinkle",
    label: "STEP 02",
    title: "Add water little by little",
    text: "Sprinkle cool water in stages, mixing constantly. Never pour — too much water collapses the texture.",
  },
  {
    tag: "Check",
    label: "STEP 03",
    title: "Test the crumbly texture",
    text: "Press a handful: it should hold its shape, then crumble easily when you tap. That's the right moisture.",
  },
  {
    tag: "Layer base",
    label: "STEP 04",
    title: "Coconut at the bottom",
    text: "Add a layer of grated coconut at the bottom of the puttu maker. This becomes the sweet, fragrant first bite.",
  },
  {
    tag: "Build",
    label: "STEP 05",
    title: "Alternate flour & coconut",
    text: "Add a layer of prepared flour, then coconut, then flour again. Repeat until the puttu maker is full.",
  },
  {
    tag: "Steam & serve",
    label: "STEP 06",
    title: "5–7 minutes - hot from the cooker ",
    text: "Attach to the cooker and steam 5–7 minutes. Slide out, serve hot with banana & jaggery, or kadala curry.",
  },
];

const benefits = [
  {
    icon: "./Images/shield.svg",
    title: "Traditional Karuppu Kavuni",
    text: "Sourced from heritage paddy farmers in Tamil Nadu.",
  },
  {
    icon: "./Images/Antioxident.svg",
    title: "Rich in antioxidants",
    text: "Anthocyanins from the whole black bran layer.",
  },
  {
    icon: "./Images/No preservatives.svg",
    title: "No preservatives",
    text: "Zero additives, zero artificial colours or flavours.",
  },
  {
    icon: "./Images/source.svg",
    title: "Source of fiber & energy",
    text: "Complex carbs, steady release fuels the morning.",
  },
  {
    icon: "./Images/Stomach.svg",
    title: "Supports healthy digestion",
    text: "Whole grain fiber, easy on the gut.",
  },
  {
    icon: "./Images/fam.svg",
    title: "For all age groups",
    text: "Children, adults, and elders - a kitchen staple.",
  },
];

const storage = [
  {
    icon: "./Images/store.svg",
    title: "Store cool & dry",
    text: "Keep in a cool, dry place away from direct sunlight and strong odours.",
  },
  {
    icon: "./Images/seal.svg",
    title: "Seal after every use",
    text: "Keep the resealable pouch tightly closed. Or decant into an airtight glass jar.",
  },
  {
    icon: "./Images/best.svg",
    title: "Best before 3 months from the date of packing",
    text: 'Printed on the back of every pouch — look for the "Best Before" stamp.',
  },
];

const contactInfo = [
  {
    icon: "/ph.png",
    alt: "phone",
    label: "PHONE",
    value: "+91 9940399388",
  },
  {
    icon: "/em.png",
    alt: "email",
    label: "EMAIL",
    value: " thirugailifestylecenter@gmail.com",
  },
  {
    icon: "/log1.png",
    alt: "location",
    label: "LOCATION",
    value: "Thirugai Life style Center, Thirukarugavur, Thanjavur - 614302",
    iconId: "location-icon",
  },
];

const TOTAL_ITEMS = 5;

export default function ProductDetails() {
  const [selectedSize, setSelectedSize] = useState("500g");
  const [index, setIndex] = useState(0);

  // Determine how many cards are visible based on viewport width
  const getVisibleItems = () => {
    if (typeof window === "undefined") return 3;
    if (window.innerWidth <= 768) return 1;
    if (window.innerWidth <= 1024) return 2;
    return 3;
  };

  const [visibleItems, setVisibleItems] = useState(3);

  // Add body class so navbar gets solid background on inner page only
  useEffect(() => {
    document.body.classList.add("inner-page-active");
    return () => document.body.classList.remove("inner-page-active");
  }, []);

  React.useEffect(() => {
    const handleResize = () => setVisibleItems(getVisibleItems());
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxIndex = TOTAL_ITEMS - visibleItems;

  const prev = () => setIndex((i) => Math.max(i - 1, 0));
  const next = () => setIndex((i) => Math.min(i + 1, maxIndex));

  return (
    <>
      <section className="category-main">
        <div className="category-menu">
          {categoryMenu.map((menu, i) => (
            <div className="menu-item" key={i}>
              <div className="menu-title">
              <span>{menu.title}</span>
              <img src="./Images/arrow.svg" alt="arrow" className="arrowss" />
</div>
              <div className={menu.dropdownClass ? `dropdown ${menu.dropdownClass}` : "dropdown"}>
                {menu.links.map((link, j) => (
                  <a href="#" key={j}>{link}</a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="product-page">
        <div className="product-container">

          {/* Left Gallery */}
          <div className="gallery">
            <div className="main-image">
              <img src="./Images/karupukavani.svg" alt="product" />
            </div>

            <div className="thumbs">
              {thumbs.map((thumb, i) => (
                <img src={thumb} alt="" key={i} />
              ))}
            </div>
          </div>

          {/* Right Content */}
          <div className="product-info">

            <span className="category">
              <img src="./Images/drop.svg" alt="dropdown" className="dropdown-icon" />
              HERITAGE FLOUR — STONE MILLED
            </span>

            <h1 className="product-title">Karuppu Kavuni Puttu Flour</h1>

            <h3>கருப்பு கவுனி புட்டு மாவு</h3>

            <p className="description">
              Made from premium traditional Karuppu Kavuni rice for
              soft, tasty, and healthy puttu preparation.
            </p>

            <div className="rating-row">
              <div>
                ⭐⭐⭐⭐⭐ <span>4.9 · 312 reviews</span>
              </div>

              <div className="sold">
                ● 1,480+ sold this month
              </div>
            </div>

            <hr />

            <div className="size-header">
              <h4 className="pack">PACK SIZE</h4>
              <span className="choose">Choose your weight</span>
            </div>

            <div className="size-options">
              {sizes.map((size) => (
                <button
                  key={size}
                  className={selectedSize === size ? "size-btn active" : "size-btn"}
                  onClick={() => setSelectedSize(size)}
                >
                  {size}
                </button>
              ))}
            </div>

            <div className="features-grid">
              {features.map((feature, i) => (
                <div className="feature-card" key={i}>
                  <div className="icon-circle">
                    <img src={feature.icon} alt="Shield" />
                  </div>
                  <div className="words">
                    <h5>{feature.title}</h5>
                    <p>{feature.text}</p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      <section className="recipe-section">

        <h2 className="desc-title">Description</h2>

        <h3 className="desc-subtitle">
          Traditional • Healthy • Nutritious
        </h3>

        <p className="desc-text">
          Made from premium traditional Karuppu Kavuni rice for soft,
          tasty, and healthy puttu preparation.
        </p>

        <h2 className="recipe-heading">
          How to prepare the <span>perfect</span> puttu
        </h2>

        {/* Ingredients Box */}
        <div className="ingredients-box">

          <div className="recipe-info">
            <span className="recipe-tag">RECIPE</span>

            <h3>Soft Karuppu Kavuni Puttu</h3>

            <p className="recipe-pre">Prep 5 mins - 7 mins</p>

            <h4>Main Ingredients</h4>

            <p>Karuppu Kavuni Rice Flour</p>
          </div>

          <div className="ingredients-grid">
            {ingredients.map((ing, i) => (
              <div className="ingredient-card" key={i}>
                <div className="icon-shadow">
                  <img src={ing.icon} alt={ing.title} className="ingredient-icon" />
                </div>
                <div className="sen">
                  <h5 className="ingredients">{ing.title}</h5>
                  <p className="ingredient-sub">{ing.sub}</p>
                </div>
                <span>{ing.qty}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Steps */}
        <div className="steps-grid">
          {steps.map((step, i) => (
            <div className="step-card" key={i}>
              <div className="step-top">
                <div className="tag">
                  <p className="step-tag" id="recipe">{step.tag}</p>
                  <span className="step-number">{i + 1}</span>
                </div>

                <span>{step.label}</span>
              </div>

              <h4>{step.title}</h4>

              <p>{step.text}</p>
            </div>
          ))}
        </div>

      </section>

      <section className="benefits-section">

        {/* Section Header */}
        <div className="benefits-header">
          <span className="benefits-tag">PRODUCT HIGHLIGHTS &amp; BENEFITS</span>
          <h2 className="benefits-title">
            Pure goodness, <span>nothing else</span>
          </h2>
          <p className="benefits-desc">
            A traditional, nutritious food choice for every age —
            made from a single heritage grain, milled the slow way,
            packed without compromise.
          </p>
        </div>

        {/* Two-column body */}
        <div className="benefits-body">

          {/* Left: 2×3 benefit cards */}
          <div className="benefits-left">
            <div className="benefits-grid1">
              {benefits.map((benefit, i) => (
                <div className="benefit-card" key={i}>
                  <div className="benefit-icon-circle">
                    <img src={benefit.icon} alt="" />
                  </div>
                  <h4>{benefit.title}</h4>
                  <p>{benefit.text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Storage box */}
   
          <div className="storage-box">
            <h3>STORAGE &amp; SHELF LIFE</h3>

            {storage.map((item, i) => (
              <div className="storage-item" key={i}>
                
                <div className="storage-item-inner">
                  <div className="storage-icon-circle">
                    <img src={item.icon} alt="" />
                  </div>
                  <div>
                    <h4>{item.title}</h4>
                    <p>{item.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
      <section className="pi-products" id="pi-products">
        {/* <img src="/back_paddy1.png" alt="background" className="pi-products-bg" /> */}

        <h3 className="pi-product-title">Related product</h3>
        <div className="heritage-main">
          <p className="heritage">More from our <span style={{ color: "#5A7C36" }}>heritage </span>collection</p>
        </div>
        <div className="pi-carousel-wrapper">

          {/* LEFT ARROW */}
          <button className="pi-arrow pi-left" onClick={prev}>
            <img src="/buttonleft.png" alt="Prev" />
          </button>

          <div className="pi-carousel-container">

            {/* TRACK - all items inside here */}
            <div
              className="pi-carousel-track"
              style={{ transform: `translateX(-${index * (100 / visibleItems)}%)` }}
            >

              {[
                {
                  img: "./Images/Thuyamalli-puttu.svg",
                  alt: "puttu",
                  // badge: "pi-badge pi-green",
                  // badgeText: "Puttu Flour",
                  title: "Thuyamalli Puttu Flour",
                  // desc: "Stone-ground black rice for traditional puttu",
                  // points: [
                  //   "✔ Antioxidant-rich",
                  //   "✔ Steamed breakfast staple",
                  //   "✔ Naturally fibrous",
                  // ],
                },
                {
                  img: "./Images/Rathasali-puttu.svg",
                  alt: "idiyappam",
                  // badge: "pi-badge pi-red",
                  // badgeText: "Idiyappam Flour",
                  title: "Rathasali Puttu Flour",
                  // desc: "Soft string-hopper flour from heritage black rice",
                  // points: [
                  //   "✔ Smooth, fine texture",
                  //   "✔ Healthier dinner choice",
                  //   "✔ Rich in minerals",
                  // ],
                },
                {
                  img: "./Images/Rathasali-idiyappam.svg",
                  alt: "puttu",
                  // badge: "pi-badge pi-crimson",
                  // badgeText: "Puttu Flour",
                  title: "Rathasali Idiyappam Flour",
                  // desc: "Iron-rich red rice for warm morning puttu",
                  // points: [
                  //   "✔ Boosts hemoglobin",
                  //   "✔ Energising start",
                  //   "✔ Easy to digest",
                  // ],
                },
                {
                  img: "./Images/Thuyamalli-idiyappam.svg",
                  alt: "puttu",

                  // badgeText: "Idiyappam Flour",
                  title: "Thuyamalli Idiyappam Flour",
                  // desc: "Delicate red rice idiyappam flour",
                  // points: [
                  //   "✔ Light dinner option",
                  //   "✔ Iron & fibre",
                  //   "✔ Naturally pigmented",
                  // ],
                },
                {
                  img: "./Images/Karupukavani-idiyapam.svg",
                  alt: "puttu",
                  // badge: "pi-badge pi-amber",
                 
                  title: "Karuppu Kavuni Idiyappam Flour",
                  // desc: "Aromatic white rice puttu flour",
                  // points: [
                  //   "✔ Soft & fluffy puttu",
                  //   "✔ Easy on the gut",
                  //   "✔ Diabetic-friendly",
                  // ],
                },

              ].map((item, i) => (
                <div className="pi-carousel-item" key={i}>
                  <div className="pi-card">

                    <div className="pi-img-box">
                      <img src={item.img} alt={item.alt} />

                      {/* <div className="pi-card-overlay">
                        <ul>
                          {item.points.map((point, index) => (
                            <li key={index}>{point}</li>
                          ))}
                        </ul>
                      </div> */}
                    </div>

                    <div className={item.badge}>{item.badgeText}</div>

                    <div className="pi-card-content">
                      <h4>{item.title}</h4>
                      <p>{item.desc}</p>
                    </div>

                  </div>
                </div>
              ))}

            </div>

          </div>

          {/* RIGHT ARROW */}
          <button className="pi-arrow pi-right" onClick={next}>
            <img src="/buttonright.png" alt="Next" />
          </button>

        </div>
      </section>
      <section className="contact-section" id="contact">
        {/* <img src="/heritage-bg.png" alt="background" className="products-bg11" /> */}

        {/* LEFT SIDE */}
        <div className="contact-left">

          <span className="contact-tag">GET IN TOUCH</span>

          <h2>
            Ready to switch to <br />
            <span>healthier living?</span>
          </h2>

          <p className="contact-desc">
            Contact us today to place your order or learn more about our heritage products.
          </p>

          {/* INFO BOXES */}
          <div className="contact-info">
            {contactInfo.map((info, i) => (
              <div className="info-box" key={i}>
                <div className="info-icon" id={info.iconId}>
                  <img src={info.icon} alt={info.alt} />
                </div>
                <div>
                  <span className="phone">{info.label}</span>
                  <p>{info.value}</p>
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* RIGHT SIDE FORM */}
        <div className="contact-form">

          <h3>Send us a message</h3>

          {/* Name & Phone */}
          <div className="form-row">
            <div className="form-group">
              <label className="name">Name</label>
              <input type="text" placeholder="Your name" />
            </div>

            <div className="form-group">
              <label className="name">Phone</label>
              <input type="text" placeholder="+91" />
            </div>
          </div>

          {/* Email */}
          <div className="form-group">
            <label className="name">Email</label>
            <input type="email" placeholder="you@example.com" />
          </div>

          {/* Message */}
          <div className="form-group">
            <label className="name">Message</label>
            <textarea placeholder="Tell us what you'd like to order..."></textarea>
          </div>

          <button className="contact-btn">
            Order Now →
          </button>

        </div>

      </section>
    </>
  );
}