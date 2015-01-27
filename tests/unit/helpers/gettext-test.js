import Ember from 'ember';
import registerGettextHelpers from 'django-ember-gettext/helpers/gettext';
registerGettextHelpers();

module('Gettext Helpers');

// Test assertion
var container = document.getElementById('ember-testing');
function templateRendersTo(template, output) {
  var viewId = Ember.run(function() {
    var view = Ember.View.create({
      template: Ember.HTMLBars.compile(template)
    });
    view.appendTo(container);
    return view.elementId;
  });
  equal(document.getElementById(viewId).innerHTML, output);
}

// Test cases
var testCases = [
  ['{{gettext "Hello!"}}', '[Hello!]'],
  ['{{gettext "Hello, %(username)s!" username="Boberson"}}', '[Hello, Boberson!]'],
  ['{{gettext "Hello, %(username)s!" username=(gettext "Admin")}}', '[Hello, [Admin]!]'],

  ['{{ngettext "%(count)s apple" "%(count)s apples" 1}}', '[1 apple]'],
  ['{{ngettext "%(count)s apple" "%(count)s apples" 4}}', '[4 apples]'],
  ['{{ngettext "%(count)s apple, %(user)s" "%(count)s apples, %(user)s" 1 user="Bob"}}', '[1 apple, Bob]'],
  ['{{ngettext "%(count)s apple, %(user)s" "%(count)s apples, %(user)s" 4 user="Bob"}}', '[4 apples, Bob]'],
  ['{{ngettext "%(count)s apple, %(user)s" "%(count)s apples, %(user)s" 1 user=(gettext "Admin")}}', '[1 apple, [Admin]]'],
  ['{{ngettext "%(count)s apple, %(user)s" "%(count)s apples, %(user)s" 4 user=(gettext "Admin")}}', '[4 apples, [Admin]]'],

  ['{{pgettext "month" "Cold May"}}', '[Cold May]'],
  ['{{pgettext "month" "%(prefix)s May" prefix="Cold"}}', '[Cold May]'],
  ['{{pgettext "month" "%(prefix)s May" prefix=(gettext "Cold")}}', '[[Cold] May]'],

  ['{{npgettext "fruits" "%(count)s apple" "%(count)s apples" 1}}', '[1 apple]'],
  ['{{npgettext "fruits" "%(count)s apple" "%(count)s apples" 4}}', '[4 apples]'],
  ['{{npgettext "fruits" "%(count)s apple, %(user)s" "%(count)s apples, %(user)s" 1 user="Bob"}}', '[1 apple, Bob]'],
  ['{{npgettext "fruits" "%(count)s apple, %(user)s" "%(count)s apples, %(user)s" 4 user="Bob"}}', '[4 apples, Bob]'],
  ['{{npgettext "fruits" "%(count)s apple, %(user)s" "%(count)s apples, %(user)s" 1 user=(gettext "Admin")}}', '[1 apple, [Admin]]'],
  ['{{npgettext "fruits" "%(count)s apple, %(user)s" "%(count)s apples, %(user)s" 4 user=(gettext "Admin")}}', '[4 apples, [Admin]]'],
];

// Test runner
testCases.forEach(function(item) {

  var input = item[0],
      output = item[1];
  var caseName = '"' + input + '" was parsed into "' + output + '"';

  test(caseName, function() {
    templateRendersTo(input, output);
  });

});
