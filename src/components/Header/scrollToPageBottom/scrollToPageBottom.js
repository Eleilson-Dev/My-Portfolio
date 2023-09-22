const scrollToPageBottom = () => {
  const { scrollTop } = document.documentElement;
  const header = document.querySelector('.header');

  if (!scrollTop) {
    header.style.boxShadow = '0px 0px 0px black';
    header.style.background = '';
    header.style.transition = '0.3s ease-in-out';
    return;
  }

  header.style.boxShadow = '0px 0px 10px black';
  header.style.background = '#130725';
  header.style.transition = '0.3s ease-in-out';
};

export default scrollToPageBottom;
