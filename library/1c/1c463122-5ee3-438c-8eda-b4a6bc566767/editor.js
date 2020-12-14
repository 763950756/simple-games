System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, GameDefines, _crd, GameState;

  _export("GameState", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "1c463EiXuNDjI7atKa8Vmdn", "GameDefines", _context.meta);

      _export("GameDefines", GameDefines = class GameDefines {});

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vVXNlcnMvbWFjL0Rvd25sb2Fkcy9leGFtcGxlLTNkLW1hc3Rlci9zaW1wbGUtZ2FtZXMvYXNzZXRzL3NpbXBsZS1ydW4vc2NyaXB0cy9HYW1lRGVmaW5lcy50cyJdLCJuYW1lcyI6WyJHYW1lRGVmaW5lcyIsImZsb29yTGVuZ3RoIiwibWF4QWN0aXZlRmxvb3IiLCJsZWZ0TGluZVgiLCJtaWRkbGVMaW5lWCIsInJpZ2h0TGluZVgiLCJDb2luTm9kZU5hbWUiLCJCbG9ja05vZGVOYW1lIiwiR2FtZVN0YXRlIl0sIm1hcHBpbmdzIjoiOzs7aUJBQU1BLFc7Ozs7Ozs7Ozs7Ozs7NkJBQUFBLFcsR0FBTixNQUFNQSxXQUFOLENBQWtCLEU7O0FBQVpBLE1BQUFBLFcsQ0FDS0MsVyxHQUFzQixFO0FBRDNCRCxNQUFBQSxXLENBRUtFLGMsR0FBeUIsRTtBQUY5QkYsTUFBQUEsVyxDQUdLRyxTLEdBQW9CLEM7QUFIekJILE1BQUFBLFcsQ0FJS0ksVyxHQUFzQixDO0FBSjNCSixNQUFBQSxXLENBS0tLLFUsR0FBcUIsQ0FBQyxDO0FBTDNCTCxNQUFBQSxXLENBTUtNLFksR0FBdUIsTTtBQU41Qk4sTUFBQUEsVyxDQU9LTyxhLEdBQXdCLFc7O2lCQUc5QkMsUztBQUFBQSxRQUFBQSxTLENBQUFBLFM7QUFBQUEsUUFBQUEsUyxDQUFBQSxTO0FBQUFBLFFBQUFBLFMsQ0FBQUEsUztTQUFBQSxTLHlCQUFBQSxTIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgR2FtZURlZmluZXMge1xuICAgIHN0YXRpYyBmbG9vckxlbmd0aDogbnVtYmVyID0gMTA7XG4gICAgc3RhdGljIG1heEFjdGl2ZUZsb29yOiBudW1iZXIgPSA1MDtcbiAgICBzdGF0aWMgbGVmdExpbmVYOiBudW1iZXIgPSA1O1xuICAgIHN0YXRpYyBtaWRkbGVMaW5lWDogbnVtYmVyID0gMDtcbiAgICBzdGF0aWMgcmlnaHRMaW5lWDogbnVtYmVyID0gLTU7XG4gICAgc3RhdGljIENvaW5Ob2RlTmFtZTogc3RyaW5nID0gJ0NvaW4nO1xuICAgIHN0YXRpYyBCbG9ja05vZGVOYW1lOiBzdHJpbmcgPSAnUm9hZEJsb2NrJztcbn1cblxuZW51bSBHYW1lU3RhdGUge1xuICAgIElOSVQsXG4gICAgUExBWUlORyxcbiAgICBFTkRcbn1cblxuZXhwb3J0IHtHYW1lRGVmaW5lcywgR2FtZVN0YXRlfSJdfQ==