export const isInView = (el) => {
  const rect = el.getBoundingClientRect();
  return (
      rect.left <= (window.innerWidth || document.documentElement.clientWidth)
  );
}