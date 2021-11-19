require('@testing-library/jest-dom/extend-expect');
require('matchmedia-polyfill');
require('matchmedia-polyfill/matchMedia.addListener');

global.fetch = jest.fn(() => Promise.resolve({}));
