function hoverProject() {
  const projects = document.querySelectorAll(".featured-projects__project");
  const activeMedia = document.querySelector(".featured-projects__media");
  const activeMediaImage = document.querySelector(".featured-projects__image");
  const activeMediaYear = document.querySelector(".featured-projects__year");

  projects.forEach((project) => {
    project.addEventListener("mouseenter", () => {
      activeMediaImage.src = project.dataset.src;
      activeMediaYear.textContent = project.dataset.year;
      activeMedia.style.display = "flex";
    });

    project.addEventListener("mouseleave", () => {
      activeMedia.style.display = "none";
    });
  });
}

window.addEventListener("DOMContentLoaded", () => {
  hoverProject();
});
