document.addEventListener("DOMContentLoaded", function () {
  const causes = [
    {
      id: 1,
      name: "Feed a Family Program",
      cat: "Food",
      img: "Images/cause1.jpg",
      desc: "Hot meals and grocery packages for vulnerable households.",
      raised: 72,
      goal: "$25,000",
    },
    {
      id: 2,
      name: "Clean Water Wells",
      cat: "Water",
      img: "Images/cause2.jpg",
      desc: "Drilling and maintaining boreholes in rural villages.",
      raised: 58,
      goal: "$40,000",
    },
    {
      id: 3,
      name: "Send a Child to School",
      cat: "Education",
      img: "Images/cause3.jpg",
      desc: "Tuition, uniforms and supplies for children in poverty.",
      raised: 84,
      goal: "$15,000",
    },
    {
      id: 4,
      name: "Mobile Health Clinics",
      cat: "Health",
      img: "Images/cause4.jpg",
      desc: "Free medical care for remote communities.",
      raised: 41,
      goal: "$60,000",
    },
    {
      id: 5,
      name: "Safe Shelter Project",
      cat: "Shelter",
      img: "Images/cause1.jpg",
      desc: "Rebuilding homes for displaced families.",
      raised: 33,
      goal: "$80,000",
    },
    {
      id: 6,
      name: "Winter Warmth Drive",
      cat: "Food",
      img: "Images/cause2.jpg",
      desc: "Blankets, coats and warm meals during cold months.",
      raised: 67,
      goal: "$12,000",
    },
  ];

  const causeGrid = document.getElementById("causesGrid");
  const filterButtons = document.querySelectorAll(".button-container .btn");

  function renderCauses(category) {
    const filteredCauses = category === "All" ? causes : causes.filter((cause) => cause.cat === category);
    causeGrid.innerHTML = filteredCauses
      .map(
        (cause) => `
          <div class="cause-card">
            <div class="cause-card-image">
              <img src="${cause.img}" alt="${cause.name}" />
            </div>
            <div class="cause-card-content">
              <span class="cause-category">${cause.cat}</span>
              <h5>${cause.name}</h5>
              <p>${cause.desc}</p>
              <div class="progress-bar">
                <div class="progress-fill" style="width: ${cause.raised}%"></div>
              </div>
              <p class="cause-meta">${cause.raised}% raised of ${cause.goal}</p>
              <a href="#donate" class="cause-btn">Donate</a>
            </div>
          </div>
        `
      )
      .join("");
  }

  filterButtons.forEach((button) => {
    button.addEventListener("click", function () {
      filterButtons.forEach((btn) => btn.classList.remove("active"));
      this.classList.add("active");
      renderCauses(this.textContent.trim());
    });
  });

  renderCauses("All");
});
