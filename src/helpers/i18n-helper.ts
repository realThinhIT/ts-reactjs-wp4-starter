import I18n from '../services/i18n';
import { Callback } from 'i18next';
import { Component } from 'react';

export const t = (transName = ``, params = {}) => {
  return I18n.t(transName, params);
};

export const setLanguage = (
  languageCode = `vi`, 
  callback: Callback, 
  forceUpdateComponent: Component = undefined
) => {
  I18n.changeLanguage(languageCode, callback);

  try {
    forceUpdateComponent.forceUpdate();
  } catch (e) {
    console.log();
  }
};