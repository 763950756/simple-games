System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, Node, director, _dec, _dec2, _class, _class2, _descriptor, _temp, _crd, ccclass, property, PhysicsConfig;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

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

      ({
        ccclass,
        property
      } = _decorator);

      _export("PhysicsConfig", PhysicsConfig = (_dec = ccclass("PhysicsConfig"), _dec2 = property({
        type: Node
      }), _dec(_class = (_class2 = (_temp = class PhysicsConfig extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "envSprite", _descriptor, this);
        }

        start() {
          if (CC_PHYSICS_CANNON) {
            this.envSprite.active = false;
            director.loadScene('simple-shooting/scenes/Main', null, null);
          } else {
            this.envSprite.active = true;
          }
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "envSprite", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vVXNlcnMvbWFjL0Rvd25sb2Fkcy9leGFtcGxlLTNkLW1hc3Rlci9zaW1wbGUtZ2FtZXMvYXNzZXRzL3NpbXBsZS1zaG9vdGluZy9zY3JpcHRzL1BoeXNpY3NDb25maWcudHMiXSwibmFtZXMiOlsiX2RlY29yYXRvciIsIkNvbXBvbmVudCIsIk5vZGUiLCJkaXJlY3RvciIsImNjY2xhc3MiLCJwcm9wZXJ0eSIsIlBoeXNpY3NDb25maWciLCJ0eXBlIiwic3RhcnQiLCJDQ19QSFlTSUNTX0NBTk5PTiIsImVudlNwcml0ZSIsImFjdGl2ZSIsImxvYWRTY2VuZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBU0EsTUFBQUEsVSxPQUFBQSxVO0FBQVlDLE1BQUFBLFMsT0FBQUEsUztBQUFXQyxNQUFBQSxJLE9BQUFBLEk7QUFBTUMsTUFBQUEsUSxPQUFBQSxROzs7Ozs7O09BQ2hDO0FBQUVDLFFBQUFBLE9BQUY7QUFBV0MsUUFBQUE7QUFBWCxPLEdBQXdCTCxVOzsrQkFHakJNLGEsV0FEWkYsT0FBTyxDQUFDLGVBQUQsQyxVQUdIQyxRQUFRLENBQUM7QUFBRUUsUUFBQUEsSUFBSSxFQUFFTDtBQUFSLE9BQUQsQyxvQ0FIYixNQUNhSSxhQURiLFNBQ21DTCxTQURuQyxDQUM2QztBQUFBO0FBQUE7O0FBQUE7QUFBQTs7QUFLekNPLFFBQUFBLEtBQUssR0FBSTtBQUNMLGNBQUlDLGlCQUFKLEVBQXVCO0FBQ25CLGlCQUFLQyxTQUFMLENBQWVDLE1BQWYsR0FBd0IsS0FBeEI7QUFFQVIsWUFBQUEsUUFBUSxDQUFDUyxTQUFULENBQW1CLDZCQUFuQixFQUFrRCxJQUFsRCxFQUF3RCxJQUF4RDtBQUNILFdBSkQsTUFJTztBQUNILGlCQUFLRixTQUFMLENBQWVDLE1BQWYsR0FBd0IsSUFBeEI7QUFDSDtBQUNKOztBQWJ3QyxPOzs7OztpQkFHdkIsSSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IF9kZWNvcmF0b3IsIENvbXBvbmVudCwgTm9kZSwgZGlyZWN0b3IgfSBmcm9tIFwiY2NcIjtcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IF9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzKFwiUGh5c2ljc0NvbmZpZ1wiKVxuZXhwb3J0IGNsYXNzIFBoeXNpY3NDb25maWcgZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gICAgQHByb3BlcnR5KHsgdHlwZTogTm9kZSB9KVxuICAgIGVudlNwcml0ZTogTm9kZSA9IG51bGw7XG5cbiAgICBzdGFydCAoKSB7XG4gICAgICAgIGlmIChDQ19QSFlTSUNTX0NBTk5PTikge1xuICAgICAgICAgICAgdGhpcy5lbnZTcHJpdGUuYWN0aXZlID0gZmFsc2U7XG5cbiAgICAgICAgICAgIGRpcmVjdG9yLmxvYWRTY2VuZSgnc2ltcGxlLXNob290aW5nL3NjZW5lcy9NYWluJywgbnVsbCwgbnVsbCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmVudlNwcml0ZS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICB9XG4gICAgfVxuXG59XG4iXX0=