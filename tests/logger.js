  // Just a test class to collect value while traversing
  class Logger {
    constructor() {
      this.values = [];
      this.log = this.log.bind(this);
    }
    log(value) {
      this.values.push(value);
    }
    clear() {
      this.values = [];
    }
  }

  export default Logger;