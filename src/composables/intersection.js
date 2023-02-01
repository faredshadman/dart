import { onMounted } from "vue";
export const intersection = (selector, options) => {
  onMounted(() => {
    const sections = document.querySelectorAll(selector);
    const observer = new IntersectionObserver(function (entries) {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = Array.from(sections).indexOf(entry.target);
          let className = index > 1 ? "animate-fade-top" : "animate-fade-left";
          sections.forEach((section) => {
            section.classList.remove(className);
          });
          sections[index].classList.add(className);
        }
      });
    }, options);
    sections.forEach((section) => {
      observer.observe(section);
    });
  });
};
