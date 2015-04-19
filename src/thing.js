// Is the convention to call it global?
(function (global) {

  function Thing() {
    return "Sup";
  }

  // What we will start with is by creating a proper constructor 
  Thing.create = function (options) {
    var Constructor = options.init;
    var prototype = Constructor.prototype;

    if (options.extend) {
      if (typeof options.extend !== "function") {
        throw "options.extend must be a function.";
      }
      Constructor.prototype = extend();
    }

    getMethods(options);

    return Constructor;

    function getMethods () {
      var reserved = [
        'init',
        'extend'
      ];
      for (var i in options) {
        if (options.hasOwnProperty(i) && reserved.indexOf(i) < 0) {
          Constructor.prototype[i] = options[i];
        }
      }
    };

    function extend () {
      var parentConstructor = options.extend;
       if (typeof global.Object.create === "function") {
         return global.Object.create(parentConstructor.prototype);
       } else {
         var fn = function () {};
         fn.prototype = parentConstructor.prototype;
         return new fn();
       }
    };

  };



  /*
   * var Person = Thing.create({
   *    init: function () {
   *    },
   *    eat: function () {
   *    },
   *    fly: function () {
   *    },
   *    extends: Being
   *  });
   *
   *  var Person = function () {
   *      this.haha = "wow";
   *  };
   */

 
  // What happens when there is already something called thing? 
  global.Thing = Thing;
})(window);
