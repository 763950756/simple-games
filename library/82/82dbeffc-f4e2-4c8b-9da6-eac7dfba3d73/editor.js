System.register(["cce.code-quality.cr", "cc", "./Utils.js"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, Vec3, ColliderComponent, RigidBodyComponent, director, Prefab, instantiate, Utils, _dec, _dec2, _class, _class2, _descriptor, _temp, _crd, ccclass, property, Grenade;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

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

      ({
        ccclass,
        property
      } = _decorator);

      _export("Grenade", Grenade = (_dec = ccclass('Grenade'), _dec2 = property({
        type: Prefab
      }), _dec(_class = (_class2 = (_temp = class Grenade extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "explosionPrfb", _descriptor, this);

          this._collider = null;
          this._rigidBody = null;
          this._flyTime = 0;
          this._autoDestoryTime = 3;
          this._explosionForce = 100;
          this._explosionRadius = 10;
        }

        onLoad() {
          // Your initialization goes here.
          this._collider = this.node.getComponent(ColliderComponent);
          this._rigidBody = this.node.getComponent(RigidBodyComponent);

          this._collider.on('onCollisionEnter', this.onCollisionEnter, this);
        }

        init(force) {
          this._rigidBody.applyImpulse(force, new Vec3(0, -1, 0));
        }

        onCollisionEnter(event) {
          this.explosion();
        }

        explosion() {
          this.node.destroy();
          const scene = director.getScene();
          const explosion = instantiate(this.explosionPrfb);
          scene.addChild(explosion);
          explosion.setWorldPosition(this.node.getWorldPosition());
          const children = scene.children;
          children.forEach(node => {
            (_crd && Utils === void 0 ? (_reportPossibleCrUseOfUtils({
              error: Error()
            }), Utils) : Utils).walkNode(node, node => {
              const rigid = node.getComponent(RigidBodyComponent);

              if (rigid) {
                const dir = new Vec3();
                Vec3.subtract(dir, node.getWorldPosition(), this.node.getWorldPosition());
                const dist = dir.length();

                if (dist < this._explosionRadius) {
                  dir.normalize();
                  Vec3.multiplyScalar(dir, dir, this._explosionForce / dist);
                  rigid.applyImpulse(dir);
                }
              }
            });
          });
        }

        update(deltaTime) {
          // Your update function goes here.
          this._flyTime += deltaTime;

          if (this._flyTime >= this._autoDestoryTime) {
            this.explosion();
          }
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "explosionPrfb", [_dec2], {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vVXNlcnMvbWFjL0Rvd25sb2Fkcy9leGFtcGxlLTNkLW1hc3Rlci9zaW1wbGUtZ2FtZXMvYXNzZXRzL3NpbXBsZS1zaG9vdGluZy9zY3JpcHRzL0dyZW5hZGUudHMiXSwibmFtZXMiOlsiX2RlY29yYXRvciIsIkNvbXBvbmVudCIsIlZlYzMiLCJDb2xsaWRlckNvbXBvbmVudCIsIlJpZ2lkQm9keUNvbXBvbmVudCIsImRpcmVjdG9yIiwiUHJlZmFiIiwiaW5zdGFudGlhdGUiLCJVdGlscyIsImNjY2xhc3MiLCJwcm9wZXJ0eSIsIkdyZW5hZGUiLCJ0eXBlIiwiX2NvbGxpZGVyIiwiX3JpZ2lkQm9keSIsIl9mbHlUaW1lIiwiX2F1dG9EZXN0b3J5VGltZSIsIl9leHBsb3Npb25Gb3JjZSIsIl9leHBsb3Npb25SYWRpdXMiLCJvbkxvYWQiLCJub2RlIiwiZ2V0Q29tcG9uZW50Iiwib24iLCJvbkNvbGxpc2lvbkVudGVyIiwiaW5pdCIsImZvcmNlIiwiYXBwbHlJbXB1bHNlIiwiZXZlbnQiLCJleHBsb3Npb24iLCJkZXN0cm95Iiwic2NlbmUiLCJnZXRTY2VuZSIsImV4cGxvc2lvblByZmIiLCJhZGRDaGlsZCIsInNldFdvcmxkUG9zaXRpb24iLCJnZXRXb3JsZFBvc2l0aW9uIiwiY2hpbGRyZW4iLCJmb3JFYWNoIiwid2Fsa05vZGUiLCJyaWdpZCIsImRpciIsInN1YnRyYWN0IiwiZGlzdCIsImxlbmd0aCIsIm5vcm1hbGl6ZSIsIm11bHRpcGx5U2NhbGFyIiwidXBkYXRlIiwiZGVsdGFUaW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFTQSxNQUFBQSxVLE9BQUFBLFU7QUFBWUMsTUFBQUEsUyxPQUFBQSxTO0FBQWlCQyxNQUFBQSxJLE9BQUFBLEk7QUFBTUMsTUFBQUEsaUIsT0FBQUEsaUI7QUFBbUJDLE1BQUFBLGtCLE9BQUFBLGtCO0FBQW1DQyxNQUFBQSxRLE9BQUFBLFE7QUFBaUJDLE1BQUFBLE0s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QUYsRUFBcUI7QUFDdkI7QUFDQSxlQUFLaEMsUUFBTCxJQUFpQmdDLFNBQWpCOztBQUNBLGNBQUksS0FBS2hDLFFBQUwsSUFBaUIsS0FBS0MsZ0JBQTFCLEVBQTRDO0FBQ3hDLGlCQUFLWSxTQUFMO0FBQ0g7QUFDSjs7QUExRGtDLE87Ozs7O2lCQUVKLEkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBfZGVjb3JhdG9yLCBDb21wb25lbnQsIE5vZGUsIFZlYzMsIENvbGxpZGVyQ29tcG9uZW50LCBSaWdpZEJvZHlDb21wb25lbnQsIFBoeXNpY3NTeXN0ZW0sIGRpcmVjdG9yLCBTY2VuZSwgUHJlZmFiLCBpbnN0YW50aWF0ZSB9IGZyb20gJ2NjJztcbmltcG9ydCB7IFV0aWxzIH0gZnJvbSAnLi9VdGlscyc7XG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBfZGVjb3JhdG9yO1xuXG5AY2NjbGFzcygnR3JlbmFkZScpXG5leHBvcnQgY2xhc3MgR3JlbmFkZSBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgQHByb3BlcnR5KHt0eXBlOiBQcmVmYWJ9KVxuICAgIHB1YmxpYyBleHBsb3Npb25QcmZiOiBQcmVmYWIgPSBudWxsO1xuICAgIFxuICAgIHByaXZhdGUgX2NvbGxpZGVyOiBDb2xsaWRlckNvbXBvbmVudCA9IG51bGw7XG4gICAgcHJpdmF0ZSBfcmlnaWRCb2R5OiBSaWdpZEJvZHlDb21wb25lbnQgPSBudWxsO1xuICAgIHByaXZhdGUgX2ZseVRpbWU6IG51bWJlciA9IDA7XG4gICAgcHJpdmF0ZSBfYXV0b0Rlc3RvcnlUaW1lOiBudW1iZXIgPSAzO1xuICAgIHByaXZhdGUgX2V4cGxvc2lvbkZvcmNlID0gMTAwO1xuICAgIHByaXZhdGUgX2V4cGxvc2lvblJhZGl1cyA9IDEwO1xuXG4gICAgb25Mb2FkICgpIHtcbiAgICAgICAgLy8gWW91ciBpbml0aWFsaXphdGlvbiBnb2VzIGhlcmUuXG4gICAgICAgIHRoaXMuX2NvbGxpZGVyID0gdGhpcy5ub2RlLmdldENvbXBvbmVudChDb2xsaWRlckNvbXBvbmVudCk7XG4gICAgICAgIHRoaXMuX3JpZ2lkQm9keSA9IHRoaXMubm9kZS5nZXRDb21wb25lbnQoUmlnaWRCb2R5Q29tcG9uZW50KTtcblxuICAgICAgICB0aGlzLl9jb2xsaWRlci5vbignb25Db2xsaXNpb25FbnRlcicsIHRoaXMub25Db2xsaXNpb25FbnRlciwgdGhpcylcbiAgICB9XG5cbiAgICBpbml0KGZvcmNlOiBWZWMzKSB7XG4gICAgICAgIHRoaXMuX3JpZ2lkQm9keS5hcHBseUltcHVsc2UoZm9yY2UsIG5ldyBWZWMzKDAsIC0xLCAwKSk7XG4gICAgfVxuXG4gICAgb25Db2xsaXNpb25FbnRlcihldmVudCkge1xuICAgICAgICB0aGlzLmV4cGxvc2lvbigpO1xuICAgIH1cblxuICAgIGV4cGxvc2lvbigpIHtcbiAgICAgICAgdGhpcy5ub2RlLmRlc3Ryb3koKTtcbiAgICAgICAgY29uc3Qgc2NlbmU6IFNjZW5lID0gZGlyZWN0b3IuZ2V0U2NlbmUoKTtcbiAgICAgICAgY29uc3QgZXhwbG9zaW9uOiBhbnkgPSBpbnN0YW50aWF0ZSh0aGlzLmV4cGxvc2lvblByZmIpO1xuICAgICAgICBzY2VuZS5hZGRDaGlsZChleHBsb3Npb24pO1xuICAgICAgICBleHBsb3Npb24uc2V0V29ybGRQb3NpdGlvbih0aGlzLm5vZGUuZ2V0V29ybGRQb3NpdGlvbigpKTtcblxuICAgICAgICBjb25zdCBjaGlsZHJlbjogYW55W10gPSBzY2VuZS5jaGlsZHJlbjtcbiAgICAgICAgY2hpbGRyZW4uZm9yRWFjaCgobm9kZTpOb2RlKSA9PiB7XG4gICAgICAgICAgICBVdGlscy53YWxrTm9kZShub2RlLCAobm9kZTogTm9kZSkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHJpZ2lkID0gbm9kZS5nZXRDb21wb25lbnQoUmlnaWRCb2R5Q29tcG9uZW50KTtcbiAgICAgICAgICAgICAgICBpZiAocmlnaWQpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZGlyID0gbmV3IFZlYzMoKTtcbiAgICAgICAgICAgICAgICAgICAgVmVjMy5zdWJ0cmFjdChkaXIsIG5vZGUuZ2V0V29ybGRQb3NpdGlvbigpLCB0aGlzLm5vZGUuZ2V0V29ybGRQb3NpdGlvbigpKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZGlzdDogbnVtYmVyID0gZGlyLmxlbmd0aCgpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoZGlzdCA8IHRoaXMuX2V4cGxvc2lvblJhZGl1cykge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlyLm5vcm1hbGl6ZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgVmVjMy5tdWx0aXBseVNjYWxhcihkaXIsIGRpciwgdGhpcy5fZXhwbG9zaW9uRm9yY2UgLyBkaXN0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJpZ2lkLmFwcGx5SW1wdWxzZShkaXIpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgdXBkYXRlIChkZWx0YVRpbWU6IG51bWJlcikge1xuICAgICAgICAvLyBZb3VyIHVwZGF0ZSBmdW5jdGlvbiBnb2VzIGhlcmUuXG4gICAgICAgIHRoaXMuX2ZseVRpbWUgKz0gZGVsdGFUaW1lO1xuICAgICAgICBpZiAodGhpcy5fZmx5VGltZSA+PSB0aGlzLl9hdXRvRGVzdG9yeVRpbWUpIHtcbiAgICAgICAgICAgIHRoaXMuZXhwbG9zaW9uKCk7XG4gICAgICAgIH1cbiAgICB9XG59XG4iXX0=