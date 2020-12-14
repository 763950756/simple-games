System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, ColliderComponent, RigidBodyComponent, _dec, _class, _temp, _crd, ccclass, property, Bullet;

  function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

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

      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("Bullet", Bullet = (_dec = ccclass('Bullet'), _dec(_class = (_temp = /*#__PURE__*/function (_Component) {
        _inheritsLoose(Bullet, _Component);

        function Bullet() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _this._collider = null;
          _this._rigidBody = null;
          _this._flyTime = 0;
          _this._autoDestoryTime = 5;
          return _this;
        }

        var _proto = Bullet.prototype;

        _proto.onLoad = function onLoad() {
          // Your initialization goes here.
          this._collider = this.node.getComponent(ColliderComponent);
          this._rigidBody = this.node.getComponent(RigidBodyComponent);

          this._collider.on('onCollisionEnter', this.onCollisionEnter, this);
        };

        _proto.init = function init(velocity) {
          this._rigidBody.setLinearVelocity(velocity);
        };

        _proto.onCollisionEnter = function onCollisionEnter(event) {// if(event.otherCollider.node.name == 'AirWell'||
          //    event.otherCollider.node.name == 'Monster'||
          //    event.otherCollider.node.name == 'tree'){
          //     this.node.destroy();
          // }
        };

        _proto.update = function update(deltaTime) {
          // Your update function goes here.
          this._flyTime += deltaTime;

          if (this._flyTime >= this._autoDestoryTime) {
            this.node.destroy();
          }
        };

        return Bullet;
      }(Component), _temp)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vVXNlcnMvbWFjL0Rvd25sb2Fkcy9leGFtcGxlLTNkLW1hc3Rlci9zaW1wbGUtZ2FtZXMvYXNzZXRzL3NpbXBsZS1zaG9vdGluZy9zY3JpcHRzL0J1bGxldC50cyJdLCJuYW1lcyI6WyJfZGVjb3JhdG9yIiwiQ29tcG9uZW50IiwiQ29sbGlkZXJDb21wb25lbnQiLCJSaWdpZEJvZHlDb21wb25lbnQiLCJjY2NsYXNzIiwicHJvcGVydHkiLCJCdWxsZXQiLCJfY29sbGlkZXIiLCJfcmlnaWRCb2R5IiwiX2ZseVRpbWUiLCJfYXV0b0Rlc3RvcnlUaW1lIiwib25Mb2FkIiwibm9kZSIsImdldENvbXBvbmVudCIsIm9uIiwib25Db2xsaXNpb25FbnRlciIsImluaXQiLCJ2ZWxvY2l0eSIsInNldExpbmVhclZlbG9jaXR5IiwiZXZlbnQiLCJ1cGRhdGUiLCJkZWx0YVRpbWUiLCJkZXN0cm95Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQVNBLE1BQUFBLFUsT0FBQUEsVTtBQUFZQyxNQUFBQSxTLE9BQUFBLFM7QUFBdUJDLE1BQUFBLGlCLE9BQUFBLGlCO0FBQW1CQyxNQUFBQSxrQixPQUFBQSxrQjs7Ozs7OztBQUN2REMsTUFBQUEsTyxHQUFzQkosVSxDQUF0QkksTztBQUFTQyxNQUFBQSxRLEdBQWFMLFUsQ0FBYkssUTs7d0JBR0pDLE0sV0FEWkYsT0FBTyxDQUFDLFFBQUQsQzs7Ozs7Ozs7Ozs7Z0JBR0lHLFMsR0FBK0IsSTtnQkFDL0JDLFUsR0FBaUMsSTtnQkFDakNDLFEsR0FBbUIsQztnQkFDbkJDLGdCLEdBQTJCLEM7Ozs7OztlQUVuQ0MsTSxHQUFBLGtCQUFVO0FBQ047QUFDQSxlQUFLSixTQUFMLEdBQWlCLEtBQUtLLElBQUwsQ0FBVUMsWUFBVixDQUF1QlgsaUJBQXZCLENBQWpCO0FBQ0EsZUFBS00sVUFBTCxHQUFrQixLQUFLSSxJQUFMLENBQVVDLFlBQVYsQ0FBdUJWLGtCQUF2QixDQUFsQjs7QUFFQSxlQUFLSSxTQUFMLENBQWVPLEVBQWYsQ0FBa0Isa0JBQWxCLEVBQXNDLEtBQUtDLGdCQUEzQyxFQUE2RCxJQUE3RDtBQUNILFM7O2VBRURDLEksR0FBQSxjQUFLQyxRQUFMLEVBQXFCO0FBQ2pCLGVBQUtULFVBQUwsQ0FBZ0JVLGlCQUFoQixDQUFrQ0QsUUFBbEM7QUFDSCxTOztlQUVERixnQixHQUFBLDBCQUFpQkksS0FBakIsRUFBNkIsQ0FDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNILFM7O2VBRURDLE0sR0FBQSxnQkFBUUMsU0FBUixFQUEyQjtBQUN2QjtBQUNBLGVBQUtaLFFBQUwsSUFBaUJZLFNBQWpCOztBQUNBLGNBQUksS0FBS1osUUFBTCxJQUFpQixLQUFLQyxnQkFBMUIsRUFBNEM7QUFDeEMsaUJBQUtFLElBQUwsQ0FBVVUsT0FBVjtBQUNIO0FBQ0osUzs7O1FBakN1QnJCLFMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBfZGVjb3JhdG9yLCBDb21wb25lbnQsIE5vZGUsIFZlYzMsIENvbGxpZGVyQ29tcG9uZW50LCBSaWdpZEJvZHlDb21wb25lbnQgfSBmcm9tICdjYyc7XG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBfZGVjb3JhdG9yO1xuXG5AY2NjbGFzcygnQnVsbGV0JylcbmV4cG9ydCBjbGFzcyBCdWxsZXQgZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gICAgcHJpdmF0ZSBfY29sbGlkZXI6IENvbGxpZGVyQ29tcG9uZW50ID0gbnVsbDtcbiAgICBwcml2YXRlIF9yaWdpZEJvZHk6IFJpZ2lkQm9keUNvbXBvbmVudCA9IG51bGw7XG4gICAgcHJpdmF0ZSBfZmx5VGltZTogbnVtYmVyID0gMDtcbiAgICBwcml2YXRlIF9hdXRvRGVzdG9yeVRpbWU6IG51bWJlciA9IDU7XG5cbiAgICBvbkxvYWQgKCkge1xuICAgICAgICAvLyBZb3VyIGluaXRpYWxpemF0aW9uIGdvZXMgaGVyZS5cbiAgICAgICAgdGhpcy5fY29sbGlkZXIgPSB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KENvbGxpZGVyQ29tcG9uZW50KTtcbiAgICAgICAgdGhpcy5fcmlnaWRCb2R5ID0gdGhpcy5ub2RlLmdldENvbXBvbmVudChSaWdpZEJvZHlDb21wb25lbnQpO1xuXG4gICAgICAgIHRoaXMuX2NvbGxpZGVyLm9uKCdvbkNvbGxpc2lvbkVudGVyJywgdGhpcy5vbkNvbGxpc2lvbkVudGVyLCB0aGlzKVxuICAgIH1cblxuICAgIGluaXQodmVsb2NpdHk6IFZlYzMpIHtcbiAgICAgICAgdGhpcy5fcmlnaWRCb2R5LnNldExpbmVhclZlbG9jaXR5KHZlbG9jaXR5KTtcbiAgICB9XG5cbiAgICBvbkNvbGxpc2lvbkVudGVyKGV2ZW50OiBhbnkpIHtcbiAgICAgICAgLy8gaWYoZXZlbnQub3RoZXJDb2xsaWRlci5ub2RlLm5hbWUgPT0gJ0FpcldlbGwnfHxcbiAgICAgICAgLy8gICAgZXZlbnQub3RoZXJDb2xsaWRlci5ub2RlLm5hbWUgPT0gJ01vbnN0ZXInfHxcbiAgICAgICAgLy8gICAgZXZlbnQub3RoZXJDb2xsaWRlci5ub2RlLm5hbWUgPT0gJ3RyZWUnKXtcbiAgICAgICAgLy8gICAgIHRoaXMubm9kZS5kZXN0cm95KCk7XG4gICAgICAgIC8vIH1cbiAgICB9XG5cbiAgICB1cGRhdGUgKGRlbHRhVGltZTogbnVtYmVyKSB7XG4gICAgICAgIC8vIFlvdXIgdXBkYXRlIGZ1bmN0aW9uIGdvZXMgaGVyZS5cbiAgICAgICAgdGhpcy5fZmx5VGltZSArPSBkZWx0YVRpbWU7XG4gICAgICAgIGlmICh0aGlzLl9mbHlUaW1lID49IHRoaXMuX2F1dG9EZXN0b3J5VGltZSkge1xuICAgICAgICAgICAgdGhpcy5ub2RlLmRlc3Ryb3koKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiJdfQ==