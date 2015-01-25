# django-ember-gettext

Ember helpers for using Django JS translation functions in Handlebars.

Please note that this package only adds template helpers. For `makemessages` support you will need to install dedicated python library.

## Installation

First, install latest version of package in in your Ember-CLI project with following command:

```console
npm install --save-dev django-ember-gettext
```

Now add following line in your `app.js` to make Ember register addon's helpers:

```javascript
import 'django-ember-gettext/helpers/gettext';
```

Then add following global functions to your `.jshintrc` `predef` setting:

```javascript
"gettext",
"ngettext",
"gettext_noop",
"pgettext",
"npgettext",
"interpolate"
```

Finally make browser load Django JS catalog by adding it's `<script>` element above Ember's and your application's .js files in your template. Example configuration may look like this:

```html
<script src="/django-i18n.js"></script>
<script src="{% static "vendor.js" %}"></script>
<script src="{% static "app.js" %}"></script>
```

## In templates

This addon brings four helpers to your templates. Each helper accepts between one and four required arguments and any number of keyword arguments corresponding to `%(formats)s` in translated message.

To nest helpers use Ember 1.10 and HTMLBars.

### gettext

`gettext` helper has one required argument, `msgid`, that is either untranslated string or variable to translate:

```
{{gettext "We're sorry but this page is not available."}}
{{gettext user.title.name}}
```

### ngettext

`ngettext` helper has three required arguments: `singular`, `plural` and `count`. `count` argument is also available as `%(count)s` format:

```
{{ngettext "You have %(count)s message." "You have %(count)s messages." user.new_messages}}
```

### pgettext

`pgettext` helper has two required arguments, `context` and `msgid`:

```
{{ngettext "month" "May"}}
```

### npgettext

`ngettext` helper has four required arguments: `context`, `singular`, `plural` and `count`. `count` argument is automatically available as `%(count)s` format:

```
{{ngettext "months" "%(count)s may" "%(count)s mays" mays_left}}
```

## In .js files

Django supports translation of messages in JavaScript files out of the box. For its usage see Django documentation:

[Using the JavaScript translation catalog](https://docs.djangoproject.com/en/1.7/topics/i18n/translation/#using-the-javascript-translation-catalog)
