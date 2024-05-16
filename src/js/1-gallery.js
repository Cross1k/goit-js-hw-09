import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const images = [
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820__480.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820_1280.jpg',
    description: 'Hokkaido Flower',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg',
    description: 'Container Haulage Freight',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg',
    description: 'Aerial Beach View',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg',
    description: 'Flower Blooms',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg',
    description: 'Alpine Mountains',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg',
    description: 'Mountain Lake Sailing',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg',
    description: 'Alpine Spring Meadows',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg',
    description: 'Nature Landscape',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg',
    description: 'Lighthouse Coast Sea',
  },
];

const gallery = document.querySelector('.gallery');

gallery.style.padding = '0';
gallery.style.maxWidth = '1128px';
gallery.style.margin = '0 auto';
gallery.style.display = 'flex';
gallery.style.listStyleType = 'none';
gallery.style.gap = '24px';
gallery.style.flexWrap = 'wrap';

const frag = document.createDocumentFragment();

images.forEach(image => {
  const li = document.createElement('li');
  const a = document.createElement('a');
  const img = document.createElement('img');
  li.class = 'gallery-item';
  a.class = 'gallery-link';
  a.href = image.original;
  img.class = 'gallery-image';
  img.src = image.preview;
  img.alt = image.description;
  img.title = image.description;
  img.style.display = 'block';
  img.style.width = '360px';
  img.style.height = '200px';
  frag.append(li);
  li.append(a);
  a.append(img);
});

gallery.append(frag);

let gall = new SimpleLightbox('.gallery a', {
  captionDelay: 250,
});

gallery.addEventListener('mouseover', event => {
  if (event.target.nodeName !== 'IMG') {
    return;
  }
  event.target.style.transition = 'transform 400ms ease';
  event.target.style.transform = 'scale(1.04)';
});

gallery.addEventListener('mouseout', event => {
  if (event.target.nodeName !== 'IMG') {
    return;
  }
  event.target.style.transition = 'transform 0.4 ease';
  event.target.style.transform = 'scale(1)';
});
