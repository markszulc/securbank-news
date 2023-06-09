import { createOptimizedPicture } from '../../scripts/lib-franklin.js';

export default function decorate(block) {
  /* change to ul, li */
  const ul = document.createElement('ul');
  [...block.children].forEach((row,index) => {
    const li = document.createElement('li');
    li.innerHTML = row.innerHTML;
    li.className = 'news' + index;

    [...li.children].forEach((div) => {
      if (div.children.length === 1 && div.querySelector('picture')) div.className = 'news-card-image';
      else div.className = 'news-card-body';
      });
    ul.append(li);
  });
  ul.querySelectorAll('img').forEach((img) => img.closest('picture').replaceWith(createOptimizedPicture(img.src, img.alt, false, [{ width: '750' }])));
  block.textContent = '';
  block.append(ul);
}
