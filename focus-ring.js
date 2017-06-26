document.addEventListener('DOMContentLoaded', function() {
  var inputWhiteList = {
    'text': true,
    'search': true,
    'url': true,
    'tel': true,
    'email': true,
    'password': true,
    'number': true,
    'date': true,
    'month': true,
    'week': true,
    'time': true,
    'datetime': true,
    'datetime-local': true,
  };

  function onKeyDown(event) {
    requestAnimationFrame(function() {
      var activeElement = findActiveElement();
      addFocusRingAttribute(activeElement);
    });
  }

  function onClick(event) {
    var target = (typeof event.composedPath === 'function') ? event.composedPath()[0] : document.activeElement;
    var matches = matchesWhiteList(target);
    if (matches) {
      requestAnimationFrame(function() {
        addFocusRingAttribute(target);
      });
    }
  }

  function onBlur(event) {
    removeFocusRingAttribute(event.target);
  }

  function onWindowFocus(event) {
    if (event.target === event.currentTarget) {
      requestAnimationFrame(function() {
        var activeElement = findActiveElement();
        addFocusRingAttribute(activeElement);
      });
    }
  }

  function addFocusRingAttribute(element) {
    var hasFocusringAttribute = element.hasAttribute('focus-ring');
    var isBodyElement = element === document.body;
    if (!hasFocusringAttribute && !isBodyElement) {
      element.addEventListener('blur', onBlur, { capture: false, passive: true });
      element.setAttribute('focus-ring', '');
    }
  }

  function removeFocusRingAttribute(element) {
    var hasFocusringAttribute = element.hasAttribute('focus-ring');
    if (hasFocusringAttribute) {
      element.removeEventListener('blur', onBlur, { capture: false, passive: true });
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

  function matchesWhiteList(target) {
    var type = target.type;
    var tagName = target.tagName;

    if (tagName == 'INPUT' && inputWhiteList[type] && !target.readonly) {
      return true;
    }

    if (tagName == 'TEXTAREA' && !target.readonly) {
      return true
    }

    if (target.contentEditable == 'true') {
      return true;
    }

    return false;
  }

  document.body.addEventListener('keydown', onKeyDown, true);
  document.body.addEventListener('click', onClick, true);
  window.addEventListener('focus', onWindowFocus, true);
});
