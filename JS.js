// Wait until the page is fully loaded
document.addEventListener("DOMContentLoaded", function () {

  // ======= Quick View Modal =======
  const modal = document.createElement("div");
  modal.id = "productModal";
  modal.style.display = "none";
  modal.style.position = "fixed";
  modal.style.top = "0";
  modal.style.left = "0";
  modal.style.width = "100%";
  modal.style.height = "100%";
  modal.style.background = "rgba(0, 0, 0, 0.5)";
  modal.style.justifyContent = "center";
  modal.style.alignItems = "center";
  modal.style.zIndex = "1000";

  modal.innerHTML = `
    <div style="background:white; padding: 20px; max-width: 400px; position: relative; border-radius: 8px;">
      <span id="closeModal" style="position:absolute; top:10px; right:15px; cursor:pointer;">&times;</span>
      <h3 id="modalTitle">Wig Name</h3>
      <p id="modalDesc">Detailed wig description goes here.</p>
    </div>
  `;

  document.body.appendChild(modal);

  document.getElementById("closeModal").onclick = () => {
    modal.style.display = "none";
  };

  window.onclick = (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  };

  // ======= Add event listeners to product cards =======
  const products = document.querySelectorAll(".wig-card");
  products.forEach((product) => {
    product.addEventListener("mouseenter", function () {
      this.style.boxShadow = "0 4px 10px rgba(0,0,0,0.3)";
    });

    product.addEventListener("mouseleave", function () {
      this.style.boxShadow = "none";
    });

    const viewBtn = product.querySelector(".quick-view");
    if (viewBtn) {
      viewBtn.addEventListener("click", function () {
        const title = product.querySelector(".wig-title").textContent;
        const desc = product.querySelector(".wig-description").textContent;
        document.getElementById("modalTitle").textContent = title;
        document.getElementById("modalDesc").textContent = desc;
        modal.style.display = "flex";
      });
    }
  });

  // ======= Tabs for product details =======
  const tabLinks = document.querySelectorAll(".tab-link");
  const tabContents = document.querySelectorAll(".tab-content");

  tabLinks.forEach((link) => {
    link.addEventListener("click", function () {
      tabLinks.forEach(l => l.classList.remove("active"));
      tabContents.forEach(c => c.style.display = "none");

      const target = this.getAttribute("data-tab");
      document.getElementById(target).style.display = "block";
      this.classList.add("active");
    });
  });

  // Set default tab active
  if (tabLinks.length > 0) {
    tabLinks[0].click();
  }
});
