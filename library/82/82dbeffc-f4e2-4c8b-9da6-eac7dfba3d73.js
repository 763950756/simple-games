System.register(["cce.code-quality.cr", "cc", "./Utils.js"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, Vec3, ColliderComponent, RigidBodyComponent, director, Prefab, instantiate, Utils, _dec, _dec2, _class, _class2, _descriptor, _temp, _crd, ccclass, property, Grenade;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfUtils(extras) {
    _reporterNs.report("Utils", "./Utils", _context.meta, extras);
  }

  _export({
    _dec: void 0,
    _dec2: void 0,
    _class: void 0,
    _class2: void 0,
    _descriptor: void 0,
    _temp: void 0
  });

  return {
    setters: [function (_cceCodeQualityCr) {
      _reporterNs = _cceCodeQualityCr;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Vec3 = _cc.Vec3;
      ColliderComponent = _cc.ColliderComponent;
      RigidBodyComponent = _cc.RigidBodyComponent;
      director = _cc.director;
      Prefab = _cc.Prefab;
      instantiate = _cc.instantiate;
    }, function (_UtilsJs) {
      Utils = _UtilsJs.Utils;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "82dbe/89OJMi52m6sffuj1z", "Grenade", _context.meta);

      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("Grenade", Grenade = (_dec = ccclass('Grenade'), _dec2 = property({
        type: Prefab
      }), _dec(_class = (_class2 = (_temp = /*#__PURE__*/function (_Component) {
        _inheritsLoose(Grenade, _Component);

        function Grenade() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_this, "explosionPrfb", _descriptor, _assertThisInitialized(_this));

          _this._collider = null;
          _this._rigidBody = null;
          _this._flyTime = 0;
          _this._autoDestoryTime = 3;
          _this._explosionForce = 100;
          _this._explosionRadius = 10;
          return _this;
        }

        var _proto = Grenade.prototype;

        _proto.onLoad = function onLoad() {
          // Your initialization goes here.
          this._collider = this.node.getComponent(ColliderComponent);
          this._rigidBody = this.node.getComponent(RigidBodyComponent);

          this._collider.on('onCollisionEnter', this.onCollisionEnter, this);
        };

        _proto.init = function init(force) {
          this._rigidBody.applyImpulse(force, new Vec3(0, -1, 0));
        };

        _proto.onCollisionEnter = function onCollisionEnter(event) {
          this.explosion();
        };

        _proto.explosion = function explosion() {
          var _this2 = this;

          this.node.destroy();
          var scene = director.getScene();
          var explosion = instantiate(this.explosionPrfb);
          scene.addChild(explosion);
          explosion.setWorldPosition(this.node.getWorldPosition());
          var children = scene.children;
          children.forEach(function (node) {
            (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
              error: Error()
            }), Utils) : Utils).walkNode(node, function (node) {
              var rigid = node.getComponent(RigidBodyComponent);

              if (rigid) {
                var dir = new Vec3();
                Vec3.subtract(dir, node.getWorldPosition(), _this2.node.getWorldPosition());
                var dist = dir.length();

                if (dist < _this2._explosionRadius) {
                  dir.normalize();
                  Vec3.multiplyScalar(dir, dir, _this2._explosionForce / dist);
                  rigid.applyImpulse(dir);
                }
              }
            });
          });
        };

        _proto.update = function update(deltaTime) {
          // Your update function goes here.
          this._flyTime += deltaTime;

          if (this._flyTime >= this._autoDestoryTime) {
            this.explosion();
          }
        };

        return Grenade;
      }(Component), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "explosionPrfb", [_dec2], {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vVXNlcnMvbWFjL0Rvd25sb2Fkcy9leGFtcGxlLTNkLW1hc3Rlci9zaW1wbGUtZ2FtZXMvYXNzZXRzL3NpbXBsZS1zaG9vdGluZy9zY3JpcHRzL0dyZW5hZGUudHMiXSwibmFtZXMiOlsiX2RlY29yYXRvciIsIkNvbXBvbmVudCIsIlZlYzMiLCJDb2xsaWRlckNvbXBvbmVudCIsIlJpZ2lkQm9keUNvbXBvbmVudCIsImRpcmVjdG9yIiwiUHJlZmFiIiwiaW5zdGFudGlhdGUiLCJVdGlscyIsImNjY2xhc3MiLCJwcm9wZXJ0eSIsIkdyZW5hZGUiLCJ0eXBlIiwiX2NvbGxpZGVyIiwiX3JpZ2lkQm9keSIsIl9mbHlUaW1lIiwiX2F1dG9EZXN0b3J5VGltZSIsIl9leHBsb3Npb25Gb3JjZSIsIl9leHBsb3Npb25SYWRpdXMiLCJvbkxvYWQiLCJub2RlIiwiZ2V0Q29tcG9uZW50Iiwib24iLCJvbkNvbGxpc2lvbkVudGVyIiwiaW5pdCIsImZvcmNlIiwiYXBwbHlJbXB1bHNlIiwiZXZlbnQiLCJleHBsb3Npb24iLCJkZXN0cm95Iiwic2NlbmUiLCJnZXRTY2VuZSIsImV4cGxvc2lvblByZmIiLCJhZGRDaGlsZCIsInNldFdvcmxkUG9zaXRpb24iLCJnZXRXb3JsZFBvc2l0aW9uIiwiY2hpbGRyZW4iLCJmb3JFYWNoIiwid2Fsa05vZGUiLCJyaWdpZCIsImRpciIsInN1YnRyYWN0IiwiZGlzdCIsImxlbmd0aCIsIm5vcm1hbGl6ZSIsIm11bHRpcGx5U2NhbGFyIiwidXBkYXRlIiwiZGVsdGFUaW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBU0EsTUFBQUEsVSxPQUFBQSxVO0FBQVlDLE1BQUFBLFMsT0FBQUEsUztBQUFpQkMsTUFBQUEsSSxPQUFBQSxJO0FBQU1DLE1BQUFBLGlCLE9BQUFBLGlCO0FBQW1CQyxNQUFBQSxrQixPQUFBQSxrQjtBQUFtQ0MsTUFBQUEsUSxPQUFBQSxRO0FBQWlCQyxNQUFB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UUFBTCxJQUFpQixLQUFLQyxnQkFBMUIsRUFBNEM7QUFDeEMsaUJBQUtZLFNBQUw7QUFDSDtBQUNKLFM7OztRQTFEd0IzQixTOzs7OztpQkFFTSxJIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgX2RlY29yYXRvciwgQ29tcG9uZW50LCBOb2RlLCBWZWMzLCBDb2xsaWRlckNvbXBvbmVudCwgUmlnaWRCb2R5Q29tcG9uZW50LCBQaHlzaWNzU3lzdGVtLCBkaXJlY3RvciwgU2NlbmUsIFByZWZhYiwgaW5zdGFudGlhdGUgfSBmcm9tICdjYyc7XG5pbXBvcnQgeyBVdGlscyB9IGZyb20gJy4vVXRpbHMnO1xuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gX2RlY29yYXRvcjtcblxuQGNjY2xhc3MoJ0dyZW5hZGUnKVxuZXhwb3J0IGNsYXNzIEdyZW5hZGUgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIEBwcm9wZXJ0eSh7dHlwZTogUHJlZmFifSlcbiAgICBwdWJsaWMgZXhwbG9zaW9uUHJmYjogUHJlZmFiID0gbnVsbDtcbiAgICBcbiAgICBwcml2YXRlIF9jb2xsaWRlcjogQ29sbGlkZXJDb21wb25lbnQgPSBudWxsO1xuICAgIHByaXZhdGUgX3JpZ2lkQm9keTogUmlnaWRCb2R5Q29tcG9uZW50ID0gbnVsbDtcbiAgICBwcml2YXRlIF9mbHlUaW1lOiBudW1iZXIgPSAwO1xuICAgIHByaXZhdGUgX2F1dG9EZXN0b3J5VGltZTogbnVtYmVyID0gMztcbiAgICBwcml2YXRlIF9leHBsb3Npb25Gb3JjZSA9IDEwMDtcbiAgICBwcml2YXRlIF9leHBsb3Npb25SYWRpdXMgPSAxMDtcblxuICAgIG9uTG9hZCAoKSB7XG4gICAgICAgIC8vIFlvdXIgaW5pdGlhbGl6YXRpb24gZ29lcyBoZXJlLlxuICAgICAgICB0aGlzLl9jb2xsaWRlciA9IHRoaXMubm9kZS5nZXRDb21wb25lbnQoQ29sbGlkZXJDb21wb25lbnQpO1xuICAgICAgICB0aGlzLl9yaWdpZEJvZHkgPSB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KFJpZ2lkQm9keUNvbXBvbmVudCk7XG5cbiAgICAgICAgdGhpcy5fY29sbGlkZXIub24oJ29uQ29sbGlzaW9uRW50ZXInLCB0aGlzLm9uQ29sbGlzaW9uRW50ZXIsIHRoaXMpXG4gICAgfVxuXG4gICAgaW5pdChmb3JjZTogVmVjMykge1xuICAgICAgICB0aGlzLl9yaWdpZEJvZHkuYXBwbHlJbXB1bHNlKGZvcmNlLCBuZXcgVmVjMygwLCAtMSwgMCkpO1xuICAgIH1cblxuICAgIG9uQ29sbGlzaW9uRW50ZXIoZXZlbnQpIHtcbiAgICAgICAgdGhpcy5leHBsb3Npb24oKTtcbiAgICB9XG5cbiAgICBleHBsb3Npb24oKSB7XG4gICAgICAgIHRoaXMubm9kZS5kZXN0cm95KCk7XG4gICAgICAgIGNvbnN0IHNjZW5lOiBTY2VuZSA9IGRpcmVjdG9yLmdldFNjZW5lKCk7XG4gICAgICAgIGNvbnN0IGV4cGxvc2lvbjogYW55ID0gaW5zdGFudGlhdGUodGhpcy5leHBsb3Npb25QcmZiKTtcbiAgICAgICAgc2NlbmUuYWRkQ2hpbGQoZXhwbG9zaW9uKTtcbiAgICAgICAgZXhwbG9zaW9uLnNldFdvcmxkUG9zaXRpb24odGhpcy5ub2RlLmdldFdvcmxkUG9zaXRpb24oKSk7XG5cbiAgICAgICAgY29uc3QgY2hpbGRyZW46IGFueVtdID0gc2NlbmUuY2hpbGRyZW47XG4gICAgICAgIGNoaWxkcmVuLmZvckVhY2goKG5vZGU6Tm9kZSkgPT4ge1xuICAgICAgICAgICAgVXRpbHMud2Fsa05vZGUobm9kZSwgKG5vZGU6IE5vZGUpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCByaWdpZCA9IG5vZGUuZ2V0Q29tcG9uZW50KFJpZ2lkQm9keUNvbXBvbmVudCk7XG4gICAgICAgICAgICAgICAgaWYgKHJpZ2lkKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGRpciA9IG5ldyBWZWMzKCk7XG4gICAgICAgICAgICAgICAgICAgIFZlYzMuc3VidHJhY3QoZGlyLCBub2RlLmdldFdvcmxkUG9zaXRpb24oKSwgdGhpcy5ub2RlLmdldFdvcmxkUG9zaXRpb24oKSk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGRpc3Q6IG51bWJlciA9IGRpci5sZW5ndGgoKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRpc3QgPCB0aGlzLl9leHBsb3Npb25SYWRpdXMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpci5ub3JtYWxpemUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIFZlYzMubXVsdGlwbHlTY2FsYXIoZGlyLCBkaXIsIHRoaXMuX2V4cGxvc2lvbkZvcmNlIC8gZGlzdCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByaWdpZC5hcHBseUltcHVsc2UoZGlyKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KVxuICAgIH1cblxuICAgIHVwZGF0ZSAoZGVsdGFUaW1lOiBudW1iZXIpIHtcbiAgICAgICAgLy8gWW91ciB1cGRhdGUgZnVuY3Rpb24gZ29lcyBoZXJlLlxuICAgICAgICB0aGlzLl9mbHlUaW1lICs9IGRlbHRhVGltZTtcbiAgICAgICAgaWYgKHRoaXMuX2ZseVRpbWUgPj0gdGhpcy5fYXV0b0Rlc3RvcnlUaW1lKSB7XG4gICAgICAgICAgICB0aGlzLmV4cGxvc2lvbigpO1xuICAgICAgICB9XG4gICAgfVxufVxuIl19