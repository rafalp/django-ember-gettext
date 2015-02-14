import registerGettextHelpers from 'django-ember-gettext/lib/main';

export default {
  name: 'register-django-gettext-helpers',
  initialize: function() {
    registerGettextHelpers();
  }
}
