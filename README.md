# Focus-ring

Based on the proposed CSS [`:focus-ring`](https://drafts.csswg.org/selectors-4/#the-focusring-pseudo) pseudo-selector, this prototype adds a `focus-ring` attribute to the focused element, in situations in which the `:focus-ring` pseudo-selector should match. The polyfill will also work for elements that live in shadow DOM.

## Description
The Focus-ring Polyfill has some issues when used with shadow DOM. The Polyfill is not able to add the focus-ring class to focusable elements within the shadow DOM such as a buttons. This is due to the shadow DOM event model. Events bubble up from shadow DOM but the events are re-targeted. This means that the events look like they come from the host instead of its internal events within the shadow DOM.

## Getting started
1. Clone repo:
    ```
    git@github.com:emilbillberg/focus-ring-shadow-dom.git
    ```
2. Use a local server such as live-server or similar.

## Reproduce
- The Polyfill is NOT able to set the focus-ring class on the button element
- Go to the index.html file and change the Polymer Global setting to `shady` instead of `shadow`
- The Polyfill is able to set the focus-ring class on the button element

## Expected Results
The Polyfill should be able to set the focus-ring class on the button element when using Shadow DOM

## Actual Results
The Polyfill sets the focus-ring class on the top custom element. In the example above this will be the custom element `my-app`.
