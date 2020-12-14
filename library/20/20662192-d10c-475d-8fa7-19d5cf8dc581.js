System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, Prefab, instantiate, Vec3, CCInteger, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _temp, _crd, ccclass, property, ShootingGameManager;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

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

      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("ShootingGameManager", ShootingGameManager = (_dec = ccclass('ShootingGameManager'), _dec2 = property({
        type: Prefab
      }), _dec3 = property({
        type: CCInteger
      }), _dec(_class = (_class2 = (_temp = /*#__PURE__*/function (_Component) {
        _inheritsLoose(ShootingGameManager, _Component);

        function ShootingGameManager() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_this, "boxPrfb", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "bottomBoxNum", _descriptor2, _assertThisInitialized(_this));

          return _this;
        }

        var _proto = ShootingGameManager.prototype;

        _proto.start = function start() {
          // Your initialization goes here.
          this.generateBoxes();
        };

        _proto.generateBoxes = function generateBoxes() {
          var bottomBoxNum = this.bottomBoxNum;
          var boxSize = 1;

          for (var i = 0; i < bottomBoxNum; i++) {
            for (var j = 0; j < bottomBoxNum - i; j++) {
              var boxNode = instantiate(this.boxPrfb);
              var posX = i * boxSize / 2 + j;
              var posY = i + 0.1;
              boxNode.parent = this.node;
              boxNode.setWorldPosition(new Vec3(posX, posY, -10));
            }
          }
        } // update (deltaTime: number) {
        //     // Your update function goes here.
        // }
        ;

        return ShootingGameManager;
      }(Component), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "boxPrfb", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "bottomBoxNum", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 5;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vVXNlcnMvbWFjL0Rvd25sb2Fkcy9leGFtcGxlLTNkLW1hc3Rlci9zaW1wbGUtZ2FtZXMvYXNzZXRzL3NpbXBsZS1zaG9vdGluZy9zY3JpcHRzL1Nob290aW5nR2FtZU1hbmFnZXIudHMiXSwibmFtZXMiOlsiX2RlY29yYXRvciIsIkNvbXBvbmVudCIsIlByZWZhYiIsImluc3RhbnRpYXRlIiwiVmVjMyIsIkNDSW50ZWdlciIsImNjY2xhc3MiLCJwcm9wZXJ0eSIsIlNob290aW5nR2FtZU1hbmFnZXIiLCJ0eXBlIiwic3RhcnQiLCJnZW5lcmF0ZUJveGVzIiwiYm90dG9tQm94TnVtIiwiYm94U2l6ZSIsImkiLCJqIiwiYm94Tm9kZSIsImJveFByZmIiLCJwb3NYIiwicG9zWSIsInBhcmVudCIsIm5vZGUiLCJzZXRXb3JsZFBvc2l0aW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFTQSxNQUFBQSxVLE9BQUFBLFU7QUFBWUMsTUFBQUEsUyxPQUFBQSxTO0FBQVdDLE1BQUFBLE0sT0FBQUEsTTtBQUFRQyxNQUFBQSxXLE9BQUFBLFc7QUFBbUJDLE1BQUFBLEksT0FBQUEsSTtBQUFNQyxNQUFBQSxTLE9BQUFBLFM7Ozs7Ozs7QUFDekRDLE1BQUFBLE8sR0FBc0JOLFUsQ0FBdEJNLE87QUFBU0MsTUFBQUEsUSxHQUFhUCxVLENBQWJPLFE7O3FDQUdKQyxtQixXQURaRixPQUFPLENBQUMscUJBQUQsQyxVQUVIQyxRQUFRLENBQUM7QUFBQ0UsUUFBQUEsSUFBSSxFQUFFUDtBQUFQLE9BQUQsQyxVQUVSSyxRQUFRLENBQUM7QUFBQ0UsUUFBQUEsSUFBSSxFQUFFSjtBQUFQLE9BQUQsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2VBR1RLLEssR0FBQSxpQkFBUztBQUNMO0FBQ0EsZUFBS0MsYUFBTDtBQUNILFM7O2VBRURBLGEsR0FBQSx5QkFBZ0I7QUFDWixjQUFNQyxZQUFZLEdBQUcsS0FBS0EsWUFBMUI7QUFDQSxjQUFNQyxPQUFPLEdBQUcsQ0FBaEI7O0FBQ0EsZUFBSyxJQUFJQyxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHRixZQUFwQixFQUFrQ0UsQ0FBQyxFQUFuQyxFQUF1QztBQUNuQyxpQkFBSyxJQUFJQyxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFJSCxZQUFZLEdBQUdFLENBQXBDLEVBQXdDQyxDQUFDLEVBQXpDLEVBQTZDO0FBQ3pDLGtCQUFNQyxPQUFZLEdBQUdiLFdBQVcsQ0FBQyxLQUFLYyxPQUFOLENBQWhDO0FBQ0Esa0JBQU1DLElBQUksR0FBR0osQ0FBQyxHQUFHRCxPQUFKLEdBQWMsQ0FBZCxHQUFrQkUsQ0FBL0I7QUFDQSxrQkFBTUksSUFBSSxHQUFHTCxDQUFDLEdBQUcsR0FBakI7QUFDQUUsY0FBQUEsT0FBTyxDQUFDSSxNQUFSLEdBQWlCLEtBQUtDLElBQXRCO0FBQ0FMLGNBQUFBLE9BQU8sQ0FBQ00sZ0JBQVIsQ0FBeUIsSUFBSWxCLElBQUosQ0FBU2MsSUFBVCxFQUFlQyxJQUFmLEVBQXFCLENBQUMsRUFBdEIsQ0FBekI7QUFDSDtBQUNKO0FBQ0osUyxDQUVEO0FBQ0E7QUFDQTs7OztRQTNCcUNsQixTOzs7OztpQkFFWixJOzs7Ozs7O2lCQUVLLEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBfZGVjb3JhdG9yLCBDb21wb25lbnQsIFByZWZhYiwgaW5zdGFudGlhdGUsIE5vZGUsIFZlYzMsIENDSW50ZWdlcn0gZnJvbSAnY2MnO1xuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gX2RlY29yYXRvcjtcblxuQGNjY2xhc3MoJ1Nob290aW5nR2FtZU1hbmFnZXInKVxuZXhwb3J0IGNsYXNzIFNob290aW5nR2FtZU1hbmFnZXIgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIEBwcm9wZXJ0eSh7dHlwZTogUHJlZmFifSlcbiAgICBwdWJsaWMgYm94UHJmYjogUHJlZmFiID0gbnVsbDtcbiAgICBAcHJvcGVydHkoe3R5cGU6IENDSW50ZWdlcn0pXG4gICAgcHVibGljIGJvdHRvbUJveE51bTogbnVtYmVyID0gNTtcblxuICAgIHN0YXJ0ICgpIHtcbiAgICAgICAgLy8gWW91ciBpbml0aWFsaXphdGlvbiBnb2VzIGhlcmUuXG4gICAgICAgIHRoaXMuZ2VuZXJhdGVCb3hlcygpO1xuICAgIH1cblxuICAgIGdlbmVyYXRlQm94ZXMoKSB7XG4gICAgICAgIGNvbnN0IGJvdHRvbUJveE51bSA9IHRoaXMuYm90dG9tQm94TnVtO1xuICAgICAgICBjb25zdCBib3hTaXplID0gMTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBib3R0b21Cb3hOdW07IGkrKykgeyAgIFxuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCAoYm90dG9tQm94TnVtIC0gaSk7IGorKykge1xuICAgICAgICAgICAgICAgIGNvbnN0IGJveE5vZGU6Tm9kZSA9IGluc3RhbnRpYXRlKHRoaXMuYm94UHJmYik7XG4gICAgICAgICAgICAgICAgY29uc3QgcG9zWCA9IGkgKiBib3hTaXplIC8gMiArIGo7XG4gICAgICAgICAgICAgICAgY29uc3QgcG9zWSA9IGkgKyAwLjE7XG4gICAgICAgICAgICAgICAgYm94Tm9kZS5wYXJlbnQgPSB0aGlzLm5vZGU7XG4gICAgICAgICAgICAgICAgYm94Tm9kZS5zZXRXb3JsZFBvc2l0aW9uKG5ldyBWZWMzKHBvc1gsIHBvc1ksIC0xMCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gdXBkYXRlIChkZWx0YVRpbWU6IG51bWJlcikge1xuICAgIC8vICAgICAvLyBZb3VyIHVwZGF0ZSBmdW5jdGlvbiBnb2VzIGhlcmUuXG4gICAgLy8gfVxufVxuIl19