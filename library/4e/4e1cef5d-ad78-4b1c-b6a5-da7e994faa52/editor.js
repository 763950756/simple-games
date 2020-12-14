System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, game, director, _dec, _class, _crd, ccclass, property, TopBar;

  _export({
    _dec: void 0,
    _class: void 0
  });

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      game = _cc.game;
      director = _cc.director;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "4e1ce9drXhLHLal2n6ZT6pS", "TopBar", _context.meta);

      ({
        ccclass,
        property
      } = _decorator);

      _export("TopBar", TopBar = (_dec = ccclass('TopBar'), _dec(_class = class TopBar extends Component {
        /* class member could be defined like this */
        // dummy = '';

        /* use `property` decorator if your want the member to be serializable */
        // @property
        // serializableDummy = 0;
        start() {
          // Your initialization goes here.
          game.addPersistRootNode(this.node);
        }

        onHomeButtonClicked() {
          director.loadScene('lobby');
        } // update (deltaTime: number) {
        //     // Your update function goes here.
        // }


      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vVXNlcnMvbWFjL0Rvd25sb2Fkcy9leGFtcGxlLTNkLW1hc3Rlci9zaW1wbGUtZ2FtZXMvYXNzZXRzL2xvYmJ5L3NjcmlwdHMvVG9wQmFyLnRzIl0sIm5hbWVzIjpbIl9kZWNvcmF0b3IiLCJDb21wb25lbnQiLCJnYW1lIiwiZGlyZWN0b3IiLCJjY2NsYXNzIiwicHJvcGVydHkiLCJUb3BCYXIiLCJzdGFydCIsImFkZFBlcnNpc3RSb290Tm9kZSIsIm5vZGUiLCJvbkhvbWVCdXR0b25DbGlja2VkIiwibG9hZFNjZW5lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQVNBLE1BQUFBLFUsT0FBQUEsVTtBQUFZQyxNQUFBQSxTLE9BQUFBLFM7QUFBaUJDLE1BQUFBLEksT0FBQUEsSTtBQUFNQyxNQUFBQSxRLE9BQUFBLFE7Ozs7Ozs7T0FDdEM7QUFBRUMsUUFBQUEsT0FBRjtBQUFXQyxRQUFBQTtBQUFYLE8sR0FBd0JMLFU7O3dCQUdqQk0sTSxXQURaRixPQUFPLENBQUMsUUFBRCxDLGdCQUFSLE1BQ2FFLE1BRGIsU0FDNEJMLFNBRDVCLENBQ3NDO0FBQ2xDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBRUFNLFFBQUFBLEtBQUssR0FBSTtBQUNMO0FBQ0FMLFVBQUFBLElBQUksQ0FBQ00sa0JBQUwsQ0FBd0IsS0FBS0MsSUFBN0I7QUFDSDs7QUFFREMsUUFBQUEsbUJBQW1CLEdBQUc7QUFDbEJQLFVBQUFBLFFBQVEsQ0FBQ1EsU0FBVCxDQUFtQixPQUFuQjtBQUNILFNBZmlDLENBaUJsQztBQUNBO0FBQ0E7OztBQW5Ca0MsTyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IF9kZWNvcmF0b3IsIENvbXBvbmVudCwgTm9kZSwgZ2FtZSwgZGlyZWN0b3IgfSBmcm9tICdjYyc7XG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBfZGVjb3JhdG9yO1xuXG5AY2NjbGFzcygnVG9wQmFyJylcbmV4cG9ydCBjbGFzcyBUb3BCYXIgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIC8qIGNsYXNzIG1lbWJlciBjb3VsZCBiZSBkZWZpbmVkIGxpa2UgdGhpcyAqL1xuICAgIC8vIGR1bW15ID0gJyc7XG5cbiAgICAvKiB1c2UgYHByb3BlcnR5YCBkZWNvcmF0b3IgaWYgeW91ciB3YW50IHRoZSBtZW1iZXIgdG8gYmUgc2VyaWFsaXphYmxlICovXG4gICAgLy8gQHByb3BlcnR5XG4gICAgLy8gc2VyaWFsaXphYmxlRHVtbXkgPSAwO1xuXG4gICAgc3RhcnQgKCkge1xuICAgICAgICAvLyBZb3VyIGluaXRpYWxpemF0aW9uIGdvZXMgaGVyZS5cbiAgICAgICAgZ2FtZS5hZGRQZXJzaXN0Um9vdE5vZGUodGhpcy5ub2RlKTtcbiAgICB9XG5cbiAgICBvbkhvbWVCdXR0b25DbGlja2VkKCkge1xuICAgICAgICBkaXJlY3Rvci5sb2FkU2NlbmUoJ2xvYmJ5Jyk7XG4gICAgfVxuXG4gICAgLy8gdXBkYXRlIChkZWx0YVRpbWU6IG51bWJlcikge1xuICAgIC8vICAgICAvLyBZb3VyIHVwZGF0ZSBmdW5jdGlvbiBnb2VzIGhlcmUuXG4gICAgLy8gfVxufVxuIl19