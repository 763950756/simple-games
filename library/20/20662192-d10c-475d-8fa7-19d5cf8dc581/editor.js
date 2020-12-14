System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, Prefab, instantiate, Vec3, CCInteger, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _temp, _crd, ccclass, property, ShootingGameManager;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  _export({
    _dec: void 0,
    _dec2: void 0,
    _dec3: void 0,
    _class: void 0,
    _class2: void 0,
    _descriptor: void 0,
    _descriptor2: void 0,
    _temp: void 0
  });

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Prefab = _cc.Prefab;
      instantiate = _cc.instantiate;
      Vec3 = _cc.Vec3;
      CCInteger = _cc.CCInteger;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "20662GS0QxHXY+nGdXPjcWB", "ShootingGameManager", _context.meta);

      ({
        ccclass,
        property
      } = _decorator);

      _export("ShootingGameManager", ShootingGameManager = (_dec = ccclass('ShootingGameManager'), _dec2 = property({
        type: Prefab
      }), _dec3 = property({
        type: CCInteger
      }), _dec(_class = (_class2 = (_temp = class ShootingGameManager extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "boxPrfb", _descriptor, this);

          _initializerDefineProperty(this, "bottomBoxNum", _descriptor2, this);
        }

        start() {
          // Your initialization goes here.
          this.generateBoxes();
        }

        generateBoxes() {
          const bottomBoxNum = this.bottomBoxNum;
          const boxSize = 1;

          for (let i = 0; i < bottomBoxNum; i++) {
            for (let j = 0; j < bottomBoxNum - i; j++) {
              const boxNode = instantiate(this.boxPrfb);
              const posX = i * boxSize / 2 + j;
              const posY = i + 0.1;
              boxNode.parent = this.node;
              boxNode.setWorldPosition(new Vec3(posX, posY, -10));
            }
          }
        } // update (deltaTime: number) {
        //     // Your update function goes here.
        // }


      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "boxPrfb", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "bottomBoxNum", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 5;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vVXNlcnMvbWFjL0Rvd25sb2Fkcy9leGFtcGxlLTNkLW1hc3Rlci9zaW1wbGUtZ2FtZXMvYXNzZXRzL3NpbXBsZS1zaG9vdGluZy9zY3JpcHRzL1Nob290aW5nR2FtZU1hbmFnZXIudHMiXSwibmFtZXMiOlsiX2RlY29yYXRvciIsIkNvbXBvbmVudCIsIlByZWZhYiIsImluc3RhbnRpYXRlIiwiVmVjMyIsIkNDSW50ZWdlciIsImNjY2xhc3MiLCJwcm9wZXJ0eSIsIlNob290aW5nR2FtZU1hbmFnZXIiLCJ0eXBlIiwic3RhcnQiLCJnZW5lcmF0ZUJveGVzIiwiYm90dG9tQm94TnVtIiwiYm94U2l6ZSIsImkiLCJqIiwiYm94Tm9kZSIsImJveFByZmIiLCJwb3NYIiwicG9zWSIsInBhcmVudCIsIm5vZGUiLCJzZXRXb3JsZFBvc2l0aW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQVNBLE1BQUFBLFUsT0FBQUEsVTtBQUFZQyxNQUFBQSxTLE9BQUFBLFM7QUFBV0MsTUFBQUEsTSxPQUFBQSxNO0FBQVFDLE1BQUFBLFcsT0FBQUEsVztBQUFtQkMsTUFBQUEsSSxPQUFBQSxJO0FBQU1DLE1BQUFBLFMsT0FBQUEsUzs7Ozs7OztPQUMzRDtBQUFFQyxRQUFBQSxPQUFGO0FBQVdDLFFBQUFBO0FBQVgsTyxHQUF3QlAsVTs7cUNBR2pCUSxtQixXQURaRixPQUFPLENBQUMscUJBQUQsQyxVQUVIQyxRQUFRLENBQUM7QUFBQ0UsUUFBQUEsSUFBSSxFQUFFUDtBQUFQLE9BQUQsQyxVQUVSSyxRQUFRLENBQUM7QUFBQ0UsUUFBQUEsSUFBSSxFQUFFSjtBQUFQLE9BQUQsQyxvQ0FKYixNQUNhRyxtQkFEYixTQUN5Q1AsU0FEekMsQ0FDbUQ7QUFBQTtBQUFBOztBQUFBOztBQUFBO0FBQUE7O0FBTS9DUyxRQUFBQSxLQUFLLEdBQUk7QUFDTDtBQUNBLGVBQUtDLGFBQUw7QUFDSDs7QUFFREEsUUFBQUEsYUFBYSxHQUFHO0FBQ1osZ0JBQU1DLFlBQVksR0FBRyxLQUFLQSxZQUExQjtBQUNBLGdCQUFNQyxPQUFPLEdBQUcsQ0FBaEI7O0FBQ0EsZUFBSyxJQUFJQyxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHRixZQUFwQixFQUFrQ0UsQ0FBQyxFQUFuQyxFQUF1QztBQUNuQyxpQkFBSyxJQUFJQyxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFJSCxZQUFZLEdBQUdFLENBQXBDLEVBQXdDQyxDQUFDLEVBQXpDLEVBQTZDO0FBQ3pDLG9CQUFNQyxPQUFZLEdBQUdiLFdBQVcsQ0FBQyxLQUFLYyxPQUFOLENBQWhDO0FBQ0Esb0JBQU1DLElBQUksR0FBR0osQ0FBQyxHQUFHRCxPQUFKLEdBQWMsQ0FBZCxHQUFrQkUsQ0FBL0I7QUFDQSxvQkFBTUksSUFBSSxHQUFHTCxDQUFDLEdBQUcsR0FBakI7QUFDQUUsY0FBQUEsT0FBTyxDQUFDSSxNQUFSLEdBQWlCLEtBQUtDLElBQXRCO0FBQ0FMLGNBQUFBLE9BQU8sQ0FBQ00sZ0JBQVIsQ0FBeUIsSUFBSWxCLElBQUosQ0FBU2MsSUFBVCxFQUFlQyxJQUFmLEVBQXFCLENBQUMsRUFBdEIsQ0FBekI7QUFDSDtBQUNKO0FBQ0osU0F2QjhDLENBeUIvQztBQUNBO0FBQ0E7OztBQTNCK0MsTzs7Ozs7aUJBRXRCLEk7Ozs7Ozs7aUJBRUssQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IF9kZWNvcmF0b3IsIENvbXBvbmVudCwgUHJlZmFiLCBpbnN0YW50aWF0ZSwgTm9kZSwgVmVjMywgQ0NJbnRlZ2VyfSBmcm9tICdjYyc7XG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBfZGVjb3JhdG9yO1xuXG5AY2NjbGFzcygnU2hvb3RpbmdHYW1lTWFuYWdlcicpXG5leHBvcnQgY2xhc3MgU2hvb3RpbmdHYW1lTWFuYWdlciBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgQHByb3BlcnR5KHt0eXBlOiBQcmVmYWJ9KVxuICAgIHB1YmxpYyBib3hQcmZiOiBQcmVmYWIgPSBudWxsO1xuICAgIEBwcm9wZXJ0eSh7dHlwZTogQ0NJbnRlZ2VyfSlcbiAgICBwdWJsaWMgYm90dG9tQm94TnVtOiBudW1iZXIgPSA1O1xuXG4gICAgc3RhcnQgKCkge1xuICAgICAgICAvLyBZb3VyIGluaXRpYWxpemF0aW9uIGdvZXMgaGVyZS5cbiAgICAgICAgdGhpcy5nZW5lcmF0ZUJveGVzKCk7XG4gICAgfVxuXG4gICAgZ2VuZXJhdGVCb3hlcygpIHtcbiAgICAgICAgY29uc3QgYm90dG9tQm94TnVtID0gdGhpcy5ib3R0b21Cb3hOdW07XG4gICAgICAgIGNvbnN0IGJveFNpemUgPSAxO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGJvdHRvbUJveE51bTsgaSsrKSB7ICAgXG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IChib3R0b21Cb3hOdW0gLSBpKTsgaisrKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgYm94Tm9kZTpOb2RlID0gaW5zdGFudGlhdGUodGhpcy5ib3hQcmZiKTtcbiAgICAgICAgICAgICAgICBjb25zdCBwb3NYID0gaSAqIGJveFNpemUgLyAyICsgajtcbiAgICAgICAgICAgICAgICBjb25zdCBwb3NZID0gaSArIDAuMTtcbiAgICAgICAgICAgICAgICBib3hOb2RlLnBhcmVudCA9IHRoaXMubm9kZTtcbiAgICAgICAgICAgICAgICBib3hOb2RlLnNldFdvcmxkUG9zaXRpb24obmV3IFZlYzMocG9zWCwgcG9zWSwgLTEwKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyB1cGRhdGUgKGRlbHRhVGltZTogbnVtYmVyKSB7XG4gICAgLy8gICAgIC8vIFlvdXIgdXBkYXRlIGZ1bmN0aW9uIGdvZXMgaGVyZS5cbiAgICAvLyB9XG59XG4iXX0=