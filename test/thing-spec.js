describe('Thing', function () {
  it('says hello world', function () {
    expect(Thing()).toEqual("Sup");
  });
  it('random', function () {
    var Msg = Thing.create({
      init: function () {},
      sup: function () { console.log("dawg"); }
    });
    var Wow = Thing.create({
      init: function () {
        console.log("constructor");
      },
      greet: function () {
        console.log("This is a greeting");
      },
      extend: Msg
    });

    var n = new Wow();
    n.greet();
    n.sup();
  });
});
