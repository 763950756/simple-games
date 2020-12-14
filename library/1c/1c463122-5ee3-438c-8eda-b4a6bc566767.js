System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _crd, GameDefines, GameState;

  _export("GameState", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "1c463EiXuNDjI7atKa8Vmdn", "GameDefines", _context.meta);

      _export("GameDefines", GameDefines = function GameDefines() {});

      GameDefines.floorLength = 10;
      GameDefines.maxActiveFloor = 50;
      GameDefines.leftLineX = 5;
      GameDefines.middleLineX = 0;
      GameDefines.rightLineX = -5;
      GameDefines.CoinNodeName = 'Coin';
      GameDefines.BlockNodeName = 'RoadBlock';

      (function (GameState) {
        GameState[GameState["INIT"] = 0] = "INIT";
        GameState[GameState["PLAYING"] = 1] = "PLAYING";
        GameState[GameState["END"] = 2] = "END";
      })(GameState || _export("GameState", GameState = {}));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vVXNlcnMvbWFjL0Rvd25sb2Fkcy9leGFtcGxlLTNkLW1hc3Rlci9zaW1wbGUtZ2FtZXMvYXNzZXRzL3NpbXBsZS1ydW4vc2NyaXB0cy9HYW1lRGVmaW5lcy50cyJdLCJuYW1lcyI6WyJHYW1lRGVmaW5lcyIsImZsb29yTGVuZ3RoIiwibWF4QWN0aXZlRmxvb3IiLCJsZWZ0TGluZVgiLCJtaWRkbGVMaW5lWCIsInJpZ2h0TGluZVgiLCJDb2luTm9kZU5hbWUiLCJCbG9ja05vZGVOYW1lIiwiR2FtZVN0YXRlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OzZCQUFNQSxXOztBQUFBQSxNQUFBQSxXLENBQ0tDLFcsR0FBc0IsRTtBQUQzQkQsTUFBQUEsVyxDQUVLRSxjLEdBQXlCLEU7QUFGOUJGLE1BQUFBLFcsQ0FHS0csUyxHQUFvQixDO0FBSHpCSCxNQUFBQSxXLENBSUtJLFcsR0FBc0IsQztBQUozQkosTUFBQUEsVyxDQUtLSyxVLEdBQXFCLENBQUMsQztBQUwzQkwsTUFBQUEsVyxDQU1LTSxZLEdBQXVCLE07QUFONUJOLE1BQUFBLFcsQ0FPS08sYSxHQUF3QixXOztpQkFHOUJDLFM7QUFBQUEsUUFBQUEsUyxDQUFBQSxTO0FBQUFBLFFBQUFBLFMsQ0FBQUEsUztBQUFBQSxRQUFBQSxTLENBQUFBLFM7U0FBQUEsUyx5QkFBQUEsUyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIEdhbWVEZWZpbmVzIHtcbiAgICBzdGF0aWMgZmxvb3JMZW5ndGg6IG51bWJlciA9IDEwO1xuICAgIHN0YXRpYyBtYXhBY3RpdmVGbG9vcjogbnVtYmVyID0gNTA7XG4gICAgc3RhdGljIGxlZnRMaW5lWDogbnVtYmVyID0gNTtcbiAgICBzdGF0aWMgbWlkZGxlTGluZVg6IG51bWJlciA9IDA7XG4gICAgc3RhdGljIHJpZ2h0TGluZVg6IG51bWJlciA9IC01O1xuICAgIHN0YXRpYyBDb2luTm9kZU5hbWU6IHN0cmluZyA9ICdDb2luJztcbiAgICBzdGF0aWMgQmxvY2tOb2RlTmFtZTogc3RyaW5nID0gJ1JvYWRCbG9jayc7XG59XG5cbmVudW0gR2FtZVN0YXRlIHtcbiAgICBJTklULFxuICAgIFBMQVlJTkcsXG4gICAgRU5EXG59XG5cbmV4cG9ydCB7R2FtZURlZmluZXMsIEdhbWVTdGF0ZX0iXX0=