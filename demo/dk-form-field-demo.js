import { LitElement, html ,css} from 'lit-element';
import '../dk-form-field';
import '@material/mwc-checkbox/mwc-checkbox';
import {Theme} from '@dhruval/material-styles/theme';
import {Typography} from '@dhruval/material-styles/typography';
export class DkFormFieldDemo extends LitElement {

  static get styles(){
    return[
      Theme,
      Typography,
      css`
        :host{
          display: block;
          padding:24px;
        }
        h4{
          color: var(--mdc-theme-text-primary);
        }
      `
    ];
  }

  render() {
    return html`
      <h4 class="body1">Basic</h4>
      <dk-form-field label="This is checkbox">
        <mwc-checkbox></mwc-checkbox>
      </dk-form-field>

      <h4 class="body1">Disabled</h4>
      <dk-form-field label="This is disabled label" disabled>
        <mwc-checkbox></mwc-checkbox>
      </dk-form-field>
      <h4 class="body1">Custom theme</h4>
      <dk-form-field class="custom-theme" label="This is a custom label">
        <mwc-checkbox checked></mwc-checkbox>
      </dk-form-field>
      <h4 class="body1">End aligned label</h4>
      <dk-form-field alignEnd  label="This is a end aligned label">
        <mwc-checkbox></mwc-checkbox>
      </dk-form-field>
    `;
  }
}
customElements.define('dk-form-field-demo', DkFormFieldDemo);