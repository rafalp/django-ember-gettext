import Ember from 'ember';

function gettextHelper(msgid, options) {
  if (Object.getOwnPropertyNames(options.hash).length > 0) {
    return interpolate(gettext(msgid), options.hash, true);
  } else {
    return gettext(msgid);
  }
}

function ngettextHelper(singular, plural, count, options) {
  options.hash.count = count;
  return interpolate(ngettext(singular, plural, count), options.hash, true);
}

function pgettextHelper(context, msgid, options) {
  if (Object.getOwnPropertyNames(options.hash).length > 0) {
    return interpolate(pgettext(context, msgid), options.hash, true);
  } else {
    return pgettext(context, msgid);
  }
}

function npgettextHelper(context, singular, plural, count, options) {
  options.hash.count = count;
  return interpolate(ngettext(singular, plural, count), options.hash, true);
}

export default function registerGettextHelpers() {
  Ember.Handlebars.helper('gettext', gettextHelper);
  Ember.Handlebars.helper('ngettext', ngettextHelper);
  Ember.Handlebars.helper('pgettext', pgettextHelper);
  Ember.Handlebars.helper('npgettext', npgettextHelper);
}
