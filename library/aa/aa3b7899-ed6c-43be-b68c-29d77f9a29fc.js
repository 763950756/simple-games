System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, Node, director, _dec, _dec2, _class, _class2, _descriptor, _temp, _crd, ccclass, property, PhysicsConfig;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  _export({
    _dec: void 0,
    _dec2: void 0,
    _class: void 0,
    _class2: void 0,
    _descriptor: void 0,
    _temp: void 0
  });

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Node = _cc.Node;
      director = _cc.director;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "aa3b7iZ7WxDvraMKdd/min8", "PhysicsConfig", _context.meta);

      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("PhysicsConfig", PhysicsConfig = (_dec = ccclass("PhysicsConfig"), _dec2 = property({
        type: Node
      }), _dec(_class = (_class2 = (_temp = /*#__PURE__*/function (_Component) {
        _inheritsLoose(PhysicsConfig, _Component);

        function PhysicsConfig() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_this, "envSprite", _descriptor, _assertThisInitialized(_this));

          return _this;
        }

        var _proto = PhysicsConfig.prototype;

        _proto.start = function start() {
          if (CC_PHYSICS_CANNON) {
            this.envSprite.active = false;
            director.loadScene('simple-shooting/scenes/Main', null, null);
          } else {
            this.envSprite.active = true;
          }
        };

        return PhysicsConfig;
      }(Component), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "envSprite", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vVXNlcnMvbWFjL0Rvd25sb2Fkcy9leGFtcGxlLTNkLW1hc3Rlci9zaW1wbGUtZ2FtZXMvYXNzZXRzL3NpbXBsZS1zaG9vdGluZy9zY3JpcHRzL1BoeXNpY3NDb25maWcudHMiXSwibmFtZXMiOlsiX2RlY29yYXRvciIsIkNvbXBvbmVudCIsIk5vZGUiLCJkaXJlY3RvciIsImNjY2xhc3MiLCJwcm9wZXJ0eSIsIlBoeXNpY3NDb25maWciLCJ0eXBlIiwic3RhcnQiLCJDQ19QSFlTSUNTX0NBTk5PTiIsImVudlNwcml0ZSIsImFjdGl2ZSIsImxvYWRTY2VuZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQVNBLE1BQUFBLFUsT0FBQUEsVTtBQUFZQyxNQUFBQSxTLE9BQUFBLFM7QUFBV0MsTUFBQUEsSSxPQUFBQSxJO0FBQU1DLE1BQUFBLFEsT0FBQUEsUTs7Ozs7OztBQUM5QkMsTUFBQUEsTyxHQUFzQkosVSxDQUF0QkksTztBQUFTQyxNQUFBQSxRLEdBQWFMLFUsQ0FBYkssUTs7K0JBR0pDLGEsV0FEWkYsT0FBTyxDQUFDLGVBQUQsQyxVQUdIQyxRQUFRLENBQUM7QUFBRUUsUUFBQUEsSUFBSSxFQUFFTDtBQUFSLE9BQUQsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztlQUdUTSxLLEdBQUEsaUJBQVM7QUFDTCxjQUFJQyxpQkFBSixFQUF1QjtBQUNuQixpQkFBS0MsU0FBTCxDQUFlQyxNQUFmLEdBQXdCLEtBQXhCO0FBRUFSLFlBQUFBLFFBQVEsQ0FBQ1MsU0FBVCxDQUFtQiw2QkFBbkIsRUFBa0QsSUFBbEQsRUFBd0QsSUFBeEQ7QUFDSCxXQUpELE1BSU87QUFDSCxpQkFBS0YsU0FBTCxDQUFlQyxNQUFmLEdBQXdCLElBQXhCO0FBQ0g7QUFDSixTOzs7UUFiOEJWLFM7Ozs7O2lCQUdiLEkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBfZGVjb3JhdG9yLCBDb21wb25lbnQsIE5vZGUsIGRpcmVjdG9yIH0gZnJvbSBcImNjXCI7XG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBfZGVjb3JhdG9yO1xuXG5AY2NjbGFzcyhcIlBoeXNpY3NDb25maWdcIilcbmV4cG9ydCBjbGFzcyBQaHlzaWNzQ29uZmlnIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IE5vZGUgfSlcbiAgICBlbnZTcHJpdGU6IE5vZGUgPSBudWxsO1xuXG4gICAgc3RhcnQgKCkge1xuICAgICAgICBpZiAoQ0NfUEhZU0lDU19DQU5OT04pIHtcbiAgICAgICAgICAgIHRoaXMuZW52U3ByaXRlLmFjdGl2ZSA9IGZhbHNlO1xuXG4gICAgICAgICAgICBkaXJlY3Rvci5sb2FkU2NlbmUoJ3NpbXBsZS1zaG9vdGluZy9zY2VuZXMvTWFpbicsIG51bGwsIG51bGwpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5lbnZTcHJpdGUuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cblxufVxuIl19