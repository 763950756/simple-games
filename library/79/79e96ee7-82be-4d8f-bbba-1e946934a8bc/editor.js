System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, ColliderComponent, RigidBodyComponent, _dec, _class, _temp, _crd, ccclass, property, Bullet;

  _export({
    _dec: void 0,
    _class: void 0,
    _temp: void 0
  });

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      ColliderComponent = _cc.ColliderComponent;
      RigidBodyComponent = _cc.RigidBodyComponent;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "79e967ngr5Nj7u6HpRpNKi8", "Bullet", _context.meta);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Bullet", Bullet = (_dec = ccclass('Bullet'), _dec(_class = (_temp = class Bullet extends Component {
        constructor(...args) {
          super(...args);
          this._collider = null;
          this._rigidBody = null;
          this._flyTime = 0;
          this._autoDestoryTime = 5;
        }

        onLoad() {
          // Your initialization goes here.
          this._collider = this.node.getComponent(ColliderComponent);
          this._rigidBody = this.node.getComponent(RigidBodyComponent);

          this._collider.on('onCollisionEnter', this.onCollisionEnter, this);
        }

        init(velocity) {
          this._rigidBody.setLinearVelocity(velocity);
        }

        onCollisionEnter(event) {// if(event.otherCollider.node.name == 'AirWell'||
          //    event.otherCollider.node.name == 'Monster'||
          //    event.otherCollider.node.name == 'tree'){
          //     this.node.destroy();
          // }
        }

        update(deltaTime) {
          // Your update function goes here.
          this._flyTime += deltaTime;

          if (this._flyTime >= this._autoDestoryTime) {
            this.node.destroy();
          }
        }

      }, _temp)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vVXNlcnMvbWFjL0Rvd25sb2Fkcy9leGFtcGxlLTNkLW1hc3Rlci9zaW1wbGUtZ2FtZXMvYXNzZXRzL3NpbXBsZS1zaG9vdGluZy9zY3JpcHRzL0J1bGxldC50cyJdLCJuYW1lcyI6WyJfZGVjb3JhdG9yIiwiQ29tcG9uZW50IiwiQ29sbGlkZXJDb21wb25lbnQiLCJSaWdpZEJvZHlDb21wb25lbnQiLCJjY2NsYXNzIiwicHJvcGVydHkiLCJCdWxsZXQiLCJfY29sbGlkZXIiLCJfcmlnaWRCb2R5IiwiX2ZseVRpbWUiLCJfYXV0b0Rlc3RvcnlUaW1lIiwib25Mb2FkIiwibm9kZSIsImdldENvbXBvbmVudCIsIm9uIiwib25Db2xsaXNpb25FbnRlciIsImluaXQiLCJ2ZWxvY2l0eSIsInNldExpbmVhclZlbG9jaXR5IiwiZXZlbnQiLCJ1cGRhdGUiLCJkZWx0YVRpbWUiLCJkZXN0cm95Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFTQSxNQUFBQSxVLE9BQUFBLFU7QUFBWUMsTUFBQUEsUyxPQUFBQSxTO0FBQXVCQyxNQUFBQSxpQixPQUFBQSxpQjtBQUFtQkMsTUFBQUEsa0IsT0FBQUEsa0I7Ozs7Ozs7T0FDekQ7QUFBRUMsUUFBQUEsT0FBRjtBQUFXQyxRQUFBQTtBQUFYLE8sR0FBd0JMLFU7O3dCQUdqQk0sTSxXQURaRixPQUFPLENBQUMsUUFBRCxDLHlCQUFSLE1BQ2FFLE1BRGIsU0FDNEJMLFNBRDVCLENBQ3NDO0FBQUE7QUFBQTtBQUFBLGVBRTFCTSxTQUYwQixHQUVLLElBRkw7QUFBQSxlQUcxQkMsVUFIMEIsR0FHTyxJQUhQO0FBQUEsZUFJMUJDLFFBSjBCLEdBSVAsQ0FKTztBQUFBLGVBSzFCQyxnQkFMMEIsR0FLQyxDQUxEO0FBQUE7O0FBT2xDQyxRQUFBQSxNQUFNLEdBQUk7QUFDTjtBQUNBLGVBQUtKLFNBQUwsR0FBaUIsS0FBS0ssSUFBTCxDQUFVQyxZQUFWLENBQXVCWCxpQkFBdkIsQ0FBakI7QUFDQSxlQUFLTSxVQUFMLEdBQWtCLEtBQUtJLElBQUwsQ0FBVUMsWUFBVixDQUF1QlYsa0JBQXZCLENBQWxCOztBQUVBLGVBQUtJLFNBQUwsQ0FBZU8sRUFBZixDQUFrQixrQkFBbEIsRUFBc0MsS0FBS0MsZ0JBQTNDLEVBQTZELElBQTdEO0FBQ0g7O0FBRURDLFFBQUFBLElBQUksQ0FBQ0MsUUFBRCxFQUFpQjtBQUNqQixlQUFLVCxVQUFMLENBQWdCVSxpQkFBaEIsQ0FBa0NELFFBQWxDO0FBQ0g7O0FBRURGLFFBQUFBLGdCQUFnQixDQUFDSSxLQUFELEVBQWEsQ0FDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNIOztBQUVEQyxRQUFBQSxNQUFNLENBQUVDLFNBQUYsRUFBcUI7QUFDdkI7QUFDQSxlQUFLWixRQUFMLElBQWlCWSxTQUFqQjs7QUFDQSxjQUFJLEtBQUtaLFFBQUwsSUFBaUIsS0FBS0MsZ0JBQTFCLEVBQTRDO0FBQ3hDLGlCQUFLRSxJQUFMLENBQVVVLE9BQVY7QUFDSDtBQUNKOztBQWpDaUMsTyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IF9kZWNvcmF0b3IsIENvbXBvbmVudCwgTm9kZSwgVmVjMywgQ29sbGlkZXJDb21wb25lbnQsIFJpZ2lkQm9keUNvbXBvbmVudCB9IGZyb20gJ2NjJztcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IF9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzKCdCdWxsZXQnKVxuZXhwb3J0IGNsYXNzIEJ1bGxldCBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgICBwcml2YXRlIF9jb2xsaWRlcjogQ29sbGlkZXJDb21wb25lbnQgPSBudWxsO1xuICAgIHByaXZhdGUgX3JpZ2lkQm9keTogUmlnaWRCb2R5Q29tcG9uZW50ID0gbnVsbDtcbiAgICBwcml2YXRlIF9mbHlUaW1lOiBudW1iZXIgPSAwO1xuICAgIHByaXZhdGUgX2F1dG9EZXN0b3J5VGltZTogbnVtYmVyID0gNTtcblxuICAgIG9uTG9hZCAoKSB7XG4gICAgICAgIC8vIFlvdXIgaW5pdGlhbGl6YXRpb24gZ29lcyBoZXJlLlxuICAgICAgICB0aGlzLl9jb2xsaWRlciA9IHRoaXMubm9kZS5nZXRDb21wb25lbnQoQ29sbGlkZXJDb21wb25lbnQpO1xuICAgICAgICB0aGlzLl9yaWdpZEJvZHkgPSB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KFJpZ2lkQm9keUNvbXBvbmVudCk7XG5cbiAgICAgICAgdGhpcy5fY29sbGlkZXIub24oJ29uQ29sbGlzaW9uRW50ZXInLCB0aGlzLm9uQ29sbGlzaW9uRW50ZXIsIHRoaXMpXG4gICAgfVxuXG4gICAgaW5pdCh2ZWxvY2l0eTogVmVjMykge1xuICAgICAgICB0aGlzLl9yaWdpZEJvZHkuc2V0TGluZWFyVmVsb2NpdHkodmVsb2NpdHkpO1xuICAgIH1cblxuICAgIG9uQ29sbGlzaW9uRW50ZXIoZXZlbnQ6IGFueSkge1xuICAgICAgICAvLyBpZihldmVudC5vdGhlckNvbGxpZGVyLm5vZGUubmFtZSA9PSAnQWlyV2VsbCd8fFxuICAgICAgICAvLyAgICBldmVudC5vdGhlckNvbGxpZGVyLm5vZGUubmFtZSA9PSAnTW9uc3Rlcid8fFxuICAgICAgICAvLyAgICBldmVudC5vdGhlckNvbGxpZGVyLm5vZGUubmFtZSA9PSAndHJlZScpe1xuICAgICAgICAvLyAgICAgdGhpcy5ub2RlLmRlc3Ryb3koKTtcbiAgICAgICAgLy8gfVxuICAgIH1cblxuICAgIHVwZGF0ZSAoZGVsdGFUaW1lOiBudW1iZXIpIHtcbiAgICAgICAgLy8gWW91ciB1cGRhdGUgZnVuY3Rpb24gZ29lcyBoZXJlLlxuICAgICAgICB0aGlzLl9mbHlUaW1lICs9IGRlbHRhVGltZTtcbiAgICAgICAgaWYgKHRoaXMuX2ZseVRpbWUgPj0gdGhpcy5fYXV0b0Rlc3RvcnlUaW1lKSB7XG4gICAgICAgICAgICB0aGlzLm5vZGUuZGVzdHJveSgpO1xuICAgICAgICB9XG4gICAgfVxufVxuIl19