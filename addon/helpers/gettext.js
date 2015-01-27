import Ember from 'ember';

export function gettextHelper(args, kwargs) {
  var msgid = args[0];

  if (Object.getOwnPropertyNames(kwargs).length > 0) {
    return interpolate(gettext(msgid), kwargs, true);
  } else {
    return gettext(msgid);
  }
}

export function ngettextHelper(args, kwargs) {
  var singular = args[0];
  var plural = args[1];
  var count = args[2];

  kwargs.count = count;

  return interpolate(ngettext(singular, plural, count), kwargs, true);
}

export function pgettextHelper(args, kwargs) {
  var context = args[0];
  var msgid = args[1];

  if (Object.getOwnPropertyNames(kwargs).length > 0) {
    return interpolate(pgettext(context, msgid), kwargs, true);
  } else {
    return pgettext(context, msgid);
  }
}

export function npgettextHelper(args, kwargs) {
  var context = args[0];
  var singular = args[1];
  var plural = args[2];
  var count = args[3];

  kwargs.count = count;

  return interpolate(npgettext(context, singular, plural, count), kwargs, true);
}

export function registerGettextHelpers() {
  var makeBoundHelper = Ember.HTMLBars.makeBoundHelper;
  var registerHelper = Ember.HTMLBars.registerHelper;

  registerHelper('gettext', makeBoundHelper(gettextHelper));
  registerHelper('ngettext', makeBoundHelper(ngettextHelper));
  registerHelper('pgettext', makeBoundHelper(pgettextHelper));
  registerHelper('npgettext', makeBoundHelper(npgettextHelper));
}
