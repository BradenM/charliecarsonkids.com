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

export default getStaticUrl;
