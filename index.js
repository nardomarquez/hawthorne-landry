function hoverFeatured() {
  const projects = document.querySelectorAll(".featured-projects__project");
  const activeMedia = document.querySelector(".featured-projects__media");
  const activeMediaYear = document.querySelector(".featured-projects__year");
  const activeMediaImage = document.querySelector(".featured-projects__image");

  projects.forEach((project) => {
    project.addEventListener("mouseenter", () => {
      activeMediaYear.textContent = project.dataset.year;
      activeMediaImage.src = project.dataset.src;

      gsap.to(activeMedia, {
        autoAlpha: 1,
        duration: 0.5,
        ease: "power3.out",
      });
    });

    project.addEventListener("mouseleave", () => {
      gsap.to(activeMedia, {
        autoAlpha: 0,
        duration: 0.5,
        ease: "power3.out",
      });
    });
  });
}

function hoverArchive() {
  const projects = document.querySelectorAll(".archive__project");
  const cursor = document.querySelector(".cursor");

  projects.forEach((project) => {
    project.addEventListener("mouseenter", () => {
      const image = document.createElement("img");
      image.src = project.dataset.src;
      cursor.appendChild(image);
    });

    project.addEventListener("mouseleave", () => {
      const imgs = cursor.getElementsByTagName("img");
      if (imgs.length) {
        const lastImg = imgs[imgs.length - 1];

        Array.from(imgs).forEach((img, index) => {
          if (img !== lastImg) {
            img.remove();
          }
        });

        gsap.to(lastImg, {
          autoAlpha: 0,
          duration: 0.5,
          ease: "power3.out",
          onComplete: () => {
            lastImg.remove();
          },
        });
      }
    });
  });
}

window.addEventListener("DOMContentLoaded", () => {
  const cursor = document.querySelector(".cursor");

  hoverFeatured();
  hoverArchive();

  document.addEventListener("mousemove", function (e) {
    gsap.to(cursor, {
      x: e.clientX - 150,
      y: e.clientY - 200,
      duration: 1,
      ease: "power3.out",
    });
  });
});
