customElements.define('my-app', class extends HTMLElement {
  constructor() {
    super();
    const shadowRoot = this.attachShadow({ mode: 'open' });
    shadowRoot.innerHTML = `
      <style>

        :host {
            display: flex;
            flex-direction: column;
        }

        div {
          margin-bottom: .8rem;
        }

        :focus {
          outline: none;
        }

        [focus-ring]:focus {
          box-shadow: 0px 0px 2px 2px red;
        }

        a {
          font-size: 1.6rem;
          padding: .8rem;
          padding-left: 0;
        }

        input, textarea, button, select {
          width: 30rem;
          padding: .8rem;
          -webkit-appearance: none;
          -moz-appearance: none;
          appearance: none;
          border: 1px solid #000;
          border-radius: 0;
          box-sizing: border-box;
          font-size: 1.6rem;
        }

      </style>

      <h2>Links</h2>
      <div>
        <a href="#one">One</a>
        <a href="#two">Two</a>
        <a href="#three">Three</a>
      </div>

      <h2>Button</h2>
      <div>
        <button>Button 1</button>
      </div>

      <h2>Select</h2>
      <div>
        <select name="test">
          <option value="one" selected>1</option>
          <option value="two">2</option>
          <option value="three">3</option>
        </select>
      </div>

      <h2>Text input</h2>
      <div>
        <input type="text" placeholder="Value...">
      </div>

      <h2>Textarea</h2>
      <div>
        <textarea cols="30" rows="10"></textarea>
      </div>
    `;
  }
});
