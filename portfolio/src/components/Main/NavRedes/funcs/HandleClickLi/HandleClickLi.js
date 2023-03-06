export default function HandleClickLi(e) {
  const nodeList = document.querySelectorAll('.rds_conteiner');

  nodeList.forEach(li => {
    li.childNodes[2].classList.remove('dot_active');
  });

  const el = e.target;
  if (!el.parentElement.childNodes[2].classList.contains('dot_active')) {
    el.parentElement.childNodes[2].classList.add('dot_active');
    return
  }
  el.parentElement.childNodes[2].classList.remove('dot_active');

}
