class Middlewares {
  constructor(targetClassInstance) {
    //
    this.targetClassInstance = targetClassInstance;
    this.mwFunctions = [];
    this.currentObjectRequest = {}; // res
    // target or object
    const prototype = Object.getPrototypeOf(this.targetClassInstance);
    Object.getOwnPropertyNames(prototype).forEach((fn) => {
      if (fn !== "constructor") return this.createFn(fn);
    });
  }

  createFn(fn) {
    this[fn] = (args) => {
      this.req = args;
      //   console.log("here 4:   " + fn);
      //   console.log("here 1:   " + args);
      //   console.log("here 2:   " + this.req);

      this.executeMiddleware();
      return this.targetClassInstance[fn].call(this, this.req);
    };
  }

  // adds middlewares to the array of middlewares - middle functions (same as "use" in the example)
  addMwFunction(mwFunction) {
    this.mwFunctions.push(mwFunction);
  }

  executeMiddleware(i = 0) {
    if (i < this.mwFunctions.length) {
      this.mwFunctions[i].call(this, this.req, () => {
        // console.log("here 3:   " + this.req);
        this.executeMiddleware(i + 1);
      });
    }
  }
}
module.exports = Middlewares;
