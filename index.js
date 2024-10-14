function hoverFeatured() {
  const projects = document.querySelectorAll(".featured-projects__project");
  const activeMedia = document.querySelector(".featured-projects__media");

  projects.forEach((project) => {
    project.addEventListener("mouseenter", () => {
      const image = document.createElement("img");
      image.src = project.dataset.src;
      activeMedia.appendChild(image);
    });

    project.addEventListener("mouseleave", () => {
      const imgs = activeMedia.getElementsByTagName("img");

      if (imgs.length) {
        const lastImg = imgs[imgs.length - 1];

        Array.from(imgs).forEach((img, index) => {
          if (img !== lastImg) {
            img.remove();
          }
        });

        gsap.to(lastImg, {
          opacity: 0,
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

  document.addEventListener("mousemove", function (e) {
    gsap.to(cursor, {
      x: e.clientX - 150,
      y: e.clientY - 200,
      duration: 1,
      ease: "power3.out",
    });
  });
}

window.addEventListener("DOMContentLoaded", () => {
  hoverFeatured();
  hoverArchive();
});
