export default `
  body {
    font-size: 16px;
    line-height: 1.4;
    max-width: 600px;
    margin: 0 auto;
  }

  .checkbox {
    position: relative;
  }

  .checkbox input[type="checkbox"] {
    width: 32px;
    margin: 0;
  }

  .checkbox input + svg {
    display: none;
  }

  .checkbox--is-checked input + svg {
    display: block;
    position: absolute;
    top: 8px;
    left: 8px;
    pointer-events: none;
  }

  textarea {
    width: 100% !important;
    min-height: 72px !important;
    height: auto !important;
    padding: 1rem;
    margin: 0;
    border: none;
    border-radius: 3px;
    
    line-height: 1.7;
    color: hsl(0,0%,20%);
    background: hsl(0,0%,95%);
  }

  .notification {
    position: fixed;
    top: 16px;
    right: 16px;
    z-index: 100;

    max-width: 320px;
    padding: 16px;
    border-radius: 6px;

    background-color: rgb(255, 255, 255);
    box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 0px 2px;
  }

  .message {
    display: flex;
  }

  .message svg {
    width: 1.5em;
    height: 1.5em;
    margin-right: 1em;
  }
  
  .message p {
    margin-top: 0;
  }

  .with-icon {
    display: flex;
    align-items: center;
  }

  .with-icon svg {
    opacity: .5;
    margin-right: .25em;
  }

  .rule {
    margin-top: 16px;
  }

  .rule + .rule {
    padding-top: 16px;
    border-top: 1px solid hsla(0,0%,0%,0.1);
  }

  .fields {
    display: flex;
    align-items: center;
    margin-top: 8px;
  }

  .fields > * + * {
    margin-left: .5em;
  }
`