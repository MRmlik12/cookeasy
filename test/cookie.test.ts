import Cookie from '../src/cookie';
import assert from 'assert';


describe('Cookies test', () => {
  describe('Add cookie', () => {
    const date = new Date();
    Cookie.add({
      name: 'test',
      value: '123',
      expires: date,
      path: '/',
    });

    console.log(document.cookie);
  });
});