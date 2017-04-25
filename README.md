# Focus-ring

Based on the proposed CSS [`:focus-ring`](https://drafts.csswg.org/selectors-4/#the-focusring-pseudo) pseudo-selector, this prototype adds a `focus-ring` attribute to the focused element, in situations in which the `:focus-ring` pseudo-selector should match. This polyfill also works for elements that live in shadow DOM.

## Description
The [focus-ring polyfill](https://github.com/WICG/focus-ring) has some issues when used with shadow DOM. The polyfill is not able to add the focus-ring class to focusable elements within the shadow DOM such as a buttons. This is due to the shadow DOM event model. Events bubble up from shadow DOM but the events are re-targeted. This means that the events look like they come from the host instead of its internal elements within the shadow DOM. This polyfill works around that issue and looks at the shadowroots' active element.

## Usage

```
  button {
    width: 30rem;
    padding: .8rem;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    border: 1px solid #000;
    border-radius: 0;
    box-sizing: border-box;
    font-size: 16px;
  }

  button:focus {
    outline: none;
  }

  button[focus-ring]:focus {
    box-shadow: 0px 0px 2px 2px red;
  }

```

## Getting started
1. Clone repo:
    ```
    git@github.com:emilbillberg/focus-ring.git
    ```
2. Use a local server such as live-server or similar.

3. Navigate to demo folder.

## Improvements
- the polyfill listens to the global click event. Some elements should receive the `focus-ring` pseudo-selector even though it did not get focused with the keyboard. An example of this is the `input[type=text]` element. In a perfect world it would be great to remove the global click event listener if possible.