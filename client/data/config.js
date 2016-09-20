import Raven from 'raven-js';

const sentry_key = 'f6d75f9b4da4408aa7fa374add12d57b';
const sentry_app = '99978';
export const sentry_url = `https://${sentry_key}@app.getsentry.com/${sentry_app}`;

export function logException(ex, context) {
  Raven.captureException(ex, {
    extra: context
  });
  /*eslint no-console:0*/
  window && window.console && console.error && console.error(ex);
}
