document.addEventListener('DOMContentLoaded', function() {

  var clickWhitelist = [
    'input:not([type])',
    'input[type=text]',
    'input[type=search]',
    'input[type=url]',
    'input[type=tel]',
    'input[type=email]',
    'input[type=password]',
    'input[type=number]',
    'input[type=date]',
    'input[type=month]',
    'input[type=week]',
    'input[type=time]',
    'input[type=datetime]',
    'input[type=datetime-local]',
    'textarea',
    '[role=textbox]',
  ].join(',');

  function onKeyDown(event) {
    requestAnimationFrame(function() {
      var activeElement = findActiveElement();
      activeElement.addEventListener('blur', onBlur, true);
      addFocusRingAttribute(activeElement);
    });
  }

  function onClick(event) {
    var target = (typeof event.composedPath === 'function') ? event.composedPath()[0] : document.activeElement;
    var matches = target.matches(clickWhitelist);
    if (matches) {
      requestAnimationFrame(function() {
        target.addEventListener('blur', onBlur, true);
        addFocusRingAttribute(target);
      });
    }
  }

  function onBlur(event) {
    this.removeEventListener('blur', onBlur, false);
    removeFocusRingAttribute(event.target);
  }

  function addFocusRingAttribute(element) {
    var hasFocusringAttribute = element.hasAttribute('focus-ring');
    var isBodyElement = element === document.body;
    if (!hasFocusringAttribute && !isBodyElement) {
      element.setAttribute('focus-ring', '');
    }
  }

  function removeFocusRingAttribute(element) {
    var hasFocusringAttribute = element.hasAttribute('focus-ring');
    if (hasFocusringAttribute) {
      element.removeAttribute('focus-ring');
    }
  }

  function findActiveElement() {
    let activeElement = document.activeElement;
    while (activeElement && activeElement.shadowRoot && activeElement.shadowRoot.activeElement) {
      activeElement = activeElement.shadowRoot.activeElement;
    }
    return activeElement;
  }

  document.body.addEventListener('keydown', onKeyDown, true);
  document.body.addEventListener('click', onClick, true);

});
