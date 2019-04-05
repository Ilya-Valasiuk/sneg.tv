export const scrollToTop = () => {
  const scrollCol = document.body.querySelector('.snow-col-main');

  if (scrollCol) scrollCol.scrollTo(0, 0);
};