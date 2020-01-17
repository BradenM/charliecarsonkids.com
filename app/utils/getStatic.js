/**
 *
 * Create URLs for Static Assets
 *
 * Utils
 */

const STATIC_ROOT = 'https://static.charliecarsonkids.com';

const STATIC_PATHS = {
  icons: 'assets/icons/',
  anicons: 'assets/anicons/',
  images: 'assets/images/',
  products: 'products/',
};

const getStaticUrl = path => {
  const rootUrl = new URL(path, STATIC_ROOT).toString();
  const getUrl = fileName => {
    const fullUrl = new URL(fileName, rootUrl).toString();
    return fullUrl;
  };
  return getUrl;
};

export const IconURL = (name, size) =>
  getStaticUrl(STATIC_PATHS.icons)(`${name}-${size}.svg`);

export const AniconURL = name =>
  getStaticUrl(STATIC_PATHS.anicons)(`${name}.json`);

export const ImageURL = (name, size, format = 'png') => {
  let imgName = name;
  if (size !== undefined) {
    imgName = `${name}-${size}`;
  }
  return getStaticUrl(STATIC_PATHS.images)(`${imgName}.${format}`);
};

export const PlaceholderURL = size => `https://via.placeholder.com/${size}`;

export const ProductURL = name =>
  getStaticUrl(STATIC_PATHS.products)(`${name}.jpg`);

export default getStaticUrl;
