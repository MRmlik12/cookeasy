import CookieConfig from './config';

export default {
  add: (config: CookieConfig): void => {
    document.cookie = `${config.name}=${config.value}; Path=${config.path}; Expires=${config.expires?.toUTCString()}`;
    return;
  },
  remove: (name: string): void => {
    document.cookie = `${name}= ; expires=${new Date().toUTCString()}`;
    return;
  },
  get: (name: string): string => {
    const value = document.cookie.split(`${name}=`);
    if (value.length == 1)
      return "";
    return value[1].toString();
  }
}
