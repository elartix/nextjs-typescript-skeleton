// edit own instance of env variables
import _ from 'lodash';


export const environmentConfig: Record<string, string | boolean | number | undefined> = {
  BASE_URL: process.env.NEXT_APP_BASE_URL,
  SID: varString(process.env.NEXT_APP_SID) || varString(process.env.NEXT_PUBLIC_APP_SID),
  NAME: varString(process.env.NEXT_APP_NAME) || varString(process.env.NEXT_PUBLIC_APP_NAME),
  DEBUG: varBoolean(process.env.NEXT_APP_DEBUG) || varBoolean(process.env.NEXT_PUBLIC_APP_DEBUG),
  SERVICE_URL: process.env.NEXT_APP_SERVICE_URL,
  WEBSITE_URL: process.env.NEXT_APP_WEBSITE_URL,
  VERSION: varString(process.env.NEXT_APP_VERSION) || varString(process.env.NEXT_PUBLIC_APP_VERSION),
  PRODUCTION: varBoolean(process.env.NEXT_APP_PRODUCTION) || varBoolean(process.env.NEXT_PUBLIC_APP_PRODUCTION),
  MAX_UPLOAD_SIZE: Number(process.env.NEXT_APP_MAX_UPLOAD_SIZE),

  // DATE_FORMAT: process.env.NEXT_APP_DATE_FORMAT,
  // TIME_FORMAT: varString(process.env.NEXT_APP_TIME_FORMAT),
  // DATE_TIME_FORMAT: `${varString(process.env.NEXT_APP_DATE_FORMAT)} ${varString(process.env.NEXT_APP_TIME_FORMAT)}`,
};

// Log for PROD
environmentConfig.PRODUCTION && console.info(`%c Version: ${environmentConfig.VERSION} `
  , 'background: #3f68b1; color: #fff; font-weight: bolder; font-size: 14px;');

// ON debug mode for production using url params
environmentConfig.DEBUG = environmentConfig.DEBUG || /show_DEBUG/.test(window.location.href);

environmentConfig.DEBUG
&& console.info('%c CONFIG ', 'background: #EC1B24; color: #000; font-weight: bolder; font-size: 30px;'
  , '\n environmentConfig:', environmentConfig
);

export type EnvironmentConfigProperty = keyof typeof environmentConfig;
export type EnvironmentConfigPropertyValue = (typeof environmentConfig)[EnvironmentConfigProperty]
/**
 * config is a function which allow to define defaults
 * @param {String} prop
 * @param {*} defaults
 */
export const config = (prop: EnvironmentConfigProperty, defaults?: any): EnvironmentConfigPropertyValue => _.get(environmentConfig, prop, defaults);
config.all = () => Object.assign({}, environmentConfig);

/**
 *
 * @param {string} value
 * @returns {boolean}
 */
function varBoolean (value: string | undefined): boolean {
  return /^(true|1)$/i.test(<string>value);
}
/**
 *
 * @param {string} value
 * @returns {string[]|undefined}
 */
// eslint-disable-next-line no-unused-vars
function varArray (value: string): Array<string> | undefined {
  return value ? value.split(',') : void 0;
}
/**
 *
 * @param {string} value
 * @returns {string|undefined}
 */
function varString (value: string | undefined): string | undefined {
  return /^(null|undefined)$/i.test(<string>value) ? void 0 : value;
}
