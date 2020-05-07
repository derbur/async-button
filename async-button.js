class AsyncButton extends HTMLButtonElement {
  _upgradeProperty(prop) {
    if (this.hasOwnProperty(prop)) {
      let value = this[prop];
      delete this[prop];
      this[prop] = value;
    }
  }

  constructor() {
    super();
    
    // Function to be performed on button click
    this.asyncAction;

    console.log('async-button is ready! 👌')
    this._upgradeProperty('asyncAction');
    this._upgradeProperty('disabled');

    this.addEventListener('click', async e => {
      if(this.asyncAction) {
        this.disabled = true;
        await this.asyncAction();
        this.disabled = false;
      }
    })
  }
}

customElements.define('async-button', AsyncButton, { extends: 'button' })