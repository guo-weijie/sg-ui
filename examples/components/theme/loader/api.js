import Element from 'main/index.js';
import { post, get } from './ajax';

const { version } = Element;

const host = 'https://element-api.ele.me/element/theme/';

export const getVars = () => {
  return get(`${host}getVariable?version=${version}`);
};

export const updateVars = (data, cb) => {
  return post(`${host}updateVariable?version=${version}`, data, cb);
};
