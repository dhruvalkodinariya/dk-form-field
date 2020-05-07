import { css } from 'lit-element';
import {Formfield} from '@material/mwc-formfield/mwc-formfield';

export class DkFormField extends Formfield {

  static get styles(){
    return[
      Formfield.styles,
      css`
        :host {
          display: block;
          --mdc-theme-text-primary-on-background: var(--mdc-theme-text-primary);
        }

        :host([disabled]) {
          pointer-events: none;
        }

        :host([disabled]) .mdc-form-field {
          color: var(--mdc-theme-text-disabled, rgba(0,0,0,0.38));
        }

        .mdc-form-field {
          font-size: inherit;
          line-height: inherit;
          font-family: inherit;
        }

        :host(:not([_hasLabel])) .mdc-form-field > label{
          padding-left: 0px;
          /* for alignEnd label */
          padding-right: 0px;
        }
      `
    ];
  }

  static get properties() {
    return {
      /**
       * Set to true to disabled click
       */
      disabled: { type: Boolean },
      
      /**
       *  True if label is available
       */
      _hasLabel: {
        type: Boolean,
        reflect: true
      }
    }
  }

  constructor() {
    super();
    this.disabled = false;
  }

  set label(value) {
    const oldValue = this._label;
    this._label = value;
    this._hasLabel = !!value;
    this.requestUpdate('label', oldValue);
  }

  get label() {
    return this._label;
  }

}
customElements.define('dk-form-field', DkFormField);