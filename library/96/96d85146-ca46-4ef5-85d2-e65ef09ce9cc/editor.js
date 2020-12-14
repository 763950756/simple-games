System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, Node, CCFloat, Vec3, _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _temp, _crd, ccclass, property, v3_a, v3_b, CameraFollow;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  _export({
    _dec: void 0,
    _dec2: void 0,
    _dec3: void 0,
    _dec4: void 0,
    _dec5: void 0,
    _class: void 0,
    _class2: void 0,
    _descriptor: void 0,
    _descriptor2: void 0,
    _descriptor3: void 0,
    _descriptor4: void 0,
    _temp: void 0
  });

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Node = _cc.Node;
      CCFloat = _cc.CCFloat;
      Vec3 = _cc.Vec3;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "96d85FGykZO9YXS5l7wnOnM", "CameraFollow", _context.meta);

      ({
        ccclass,
        property
      } = _decorator);
      v3_a = new Vec3();
      v3_b = new Vec3();

      _export("CameraFollow", CameraFollow = (_dec = ccclass("CameraFollow"), _dec2 = property({
        type: Node
      }), _dec3 = property({
        type: CCFloat
      }), _dec4 = property(Vec3), _dec5 = property(Vec3), _dec(_class = (_class2 = (_temp = class CameraFollow extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "target", _descriptor, this);

          _initializerDefineProperty(this, "smoothSpeed", _descriptor2, this);

          _initializerDefineProperty(this, "offset", _descriptor3, this);

          _initializerDefineProperty(this, "lookAtOffset", _descriptor4, this);
        }

        start() {// Your initialization goes here.
        }

        update(deltaTime) {
          // Your update function goes here.
          this.target.getWorldPosition(v3_a);
          Vec3.add(v3_b, v3_a, this.offset);
          Vec3.lerp(v3_b, this.node.position, v3_b, this.smoothSpeed);
          this.node.setWorldPosition(v3_b);
          Vec3.add(v3_a, v3_a, this.lookAtOffset);
          this.node.lookAt(v3_a);
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "target", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "smoothSpeed", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 0.125;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "offset", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return new Vec3();
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "lookAtOffset", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return new Vec3();
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vVXNlcnMvbWFjL0Rvd25sb2Fkcy9leGFtcGxlLTNkLW1hc3Rlci9zaW1wbGUtZ2FtZXMvYXNzZXRzL3NpbXBsZS1ydW4vc2NyaXB0cy9DYW1lcmFGb2xsb3cudHMiXSwibmFtZXMiOlsiX2RlY29yYXRvciIsIkNvbXBvbmVudCIsIk5vZGUiLCJDQ0Zsb2F0IiwiVmVjMyIsImNjY2xhc3MiLCJwcm9wZXJ0eSIsInYzX2EiLCJ2M19iIiwiQ2FtZXJhRm9sbG93IiwidHlwZSIsInN0YXJ0IiwidXBkYXRlIiwiZGVsdGFUaW1lIiwidGFyZ2V0IiwiZ2V0V29ybGRQb3NpdGlvbiIsImFkZCIsIm9mZnNldCIsImxlcnAiLCJub2RlIiwicG9zaXRpb24iLCJzbW9vdGhTcGVlZCIsInNldFdvcmxkUG9zaXRpb24iLCJsb29rQXRPZmZzZXQiLCJsb29rQXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQVNBLE1BQUFBLFUsT0FBQUEsVTtBQUFZQyxNQUFBQSxTLE9BQUFBLFM7QUFBV0MsTUFBQUEsSSxPQUFBQSxJO0FBQU1DLE1BQUFBLE8sT0FBQUEsTztBQUFTQyxNQUFBQSxJLE9BQUFBLEk7Ozs7Ozs7T0FDekM7QUFBRUMsUUFBQUEsT0FBRjtBQUFXQyxRQUFBQTtBQUFYLE8sR0FBd0JOLFU7QUFFMUJPLE1BQUFBLEksR0FBTyxJQUFJSCxJQUFKLEU7QUFDUEksTUFBQUEsSSxHQUFPLElBQUlKLElBQUosRTs7OEJBR0VLLFksV0FEWkosT0FBTyxDQUFDLGNBQUQsQyxVQVNIQyxRQUFRLENBQUM7QUFBQ0ksUUFBQUEsSUFBSSxFQUFFUjtBQUFQLE9BQUQsQyxVQUVSSSxRQUFRLENBQUM7QUFBQ0ksUUFBQUEsSUFBSSxFQUFFUDtBQUFQLE9BQUQsQyxVQUVSRyxRQUFRLENBQUNGLElBQUQsQyxVQUVSRSxRQUFRLENBQUNGLElBQUQsQyxvQ0FmYixNQUNhSyxZQURiLFNBQ2tDUixTQURsQyxDQUM0QztBQUFBO0FBQUE7O0FBQUE7O0FBQUE7O0FBQUE7O0FBQUE7QUFBQTs7QUFpQnhDVSxRQUFBQSxLQUFLLEdBQUksQ0FDTDtBQUNIOztBQUVEQyxRQUFBQSxNQUFNLENBQUVDLFNBQUYsRUFBcUI7QUFDdkI7QUFDQSxlQUFLQyxNQUFMLENBQVlDLGdCQUFaLENBQTZCUixJQUE3QjtBQUNBSCxVQUFBQSxJQUFJLENBQUNZLEdBQUwsQ0FBU1IsSUFBVCxFQUFlRCxJQUFmLEVBQXFCLEtBQUtVLE1BQTFCO0FBQ0FiLFVBQUFBLElBQUksQ0FBQ2MsSUFBTCxDQUFVVixJQUFWLEVBQWdCLEtBQUtXLElBQUwsQ0FBVUMsUUFBMUIsRUFBb0NaLElBQXBDLEVBQTBDLEtBQUthLFdBQS9DO0FBQ0EsZUFBS0YsSUFBTCxDQUFVRyxnQkFBVixDQUEyQmQsSUFBM0I7QUFFQUosVUFBQUEsSUFBSSxDQUFDWSxHQUFMLENBQVNULElBQVQsRUFBZUEsSUFBZixFQUFxQixLQUFLZ0IsWUFBMUI7QUFDQSxlQUFLSixJQUFMLENBQVVLLE1BQVYsQ0FBaUJqQixJQUFqQjtBQUNIOztBQTlCdUMsTzs7Ozs7aUJBU2xCLEk7Ozs7Ozs7aUJBRU8sSzs7Ozs7OztpQkFFUCxJQUFJSCxJQUFKLEU7Ozs7Ozs7aUJBRU0sSUFBSUEsSUFBSixFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgX2RlY29yYXRvciwgQ29tcG9uZW50LCBOb2RlLCBDQ0Zsb2F0LCBWZWMzIH0gZnJvbSBcImNjXCI7XG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBfZGVjb3JhdG9yO1xuXG5sZXQgdjNfYSA9IG5ldyBWZWMzKCk7XG5sZXQgdjNfYiA9IG5ldyBWZWMzKCk7XG5cbkBjY2NsYXNzKFwiQ2FtZXJhRm9sbG93XCIpXG5leHBvcnQgY2xhc3MgQ2FtZXJhRm9sbG93IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICAvKiBjbGFzcyBtZW1iZXIgY291bGQgYmUgZGVmaW5lZCBsaWtlIHRoaXMgKi9cbiAgICAvLyBkdW1teSA9ICcnO1xuXG4gICAgLyogdXNlIGBwcm9wZXJ0eWAgZGVjb3JhdG9yIGlmIHlvdXIgd2FudCB0aGUgbWVtYmVyIHRvIGJlIHNlcmlhbGl6YWJsZSAqL1xuICAgIC8vIEBwcm9wZXJ0eVxuICAgIC8vIHNlcmlhbGl6YWJsZUR1bW15ID0gMDtcblxuICAgIEBwcm9wZXJ0eSh7dHlwZTogTm9kZX0pXG4gICAgcHVibGljIHRhcmdldDogTm9kZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KHt0eXBlOiBDQ0Zsb2F0fSlcbiAgICBwdWJsaWMgc21vb3RoU3BlZWQ6IG51bWJlciA9IDAuMTI1O1xuICAgIEBwcm9wZXJ0eShWZWMzKVxuICAgIHB1YmxpYyBvZmZzZXQ6IFZlYzMgPSBuZXcgVmVjMygpO1xuICAgIEBwcm9wZXJ0eShWZWMzKVxuICAgIHB1YmxpYyBsb29rQXRPZmZzZXQ6IFZlYzMgPSBuZXcgVmVjMygpO1xuXG4gICAgc3RhcnQgKCkge1xuICAgICAgICAvLyBZb3VyIGluaXRpYWxpemF0aW9uIGdvZXMgaGVyZS5cbiAgICB9XG5cbiAgICB1cGRhdGUgKGRlbHRhVGltZTogbnVtYmVyKSB7XG4gICAgICAgIC8vIFlvdXIgdXBkYXRlIGZ1bmN0aW9uIGdvZXMgaGVyZS5cbiAgICAgICAgdGhpcy50YXJnZXQuZ2V0V29ybGRQb3NpdGlvbih2M19hKTtcbiAgICAgICAgVmVjMy5hZGQodjNfYiwgdjNfYSwgdGhpcy5vZmZzZXQpO1xuICAgICAgICBWZWMzLmxlcnAodjNfYiwgdGhpcy5ub2RlLnBvc2l0aW9uLCB2M19iLCB0aGlzLnNtb290aFNwZWVkKTtcbiAgICAgICAgdGhpcy5ub2RlLnNldFdvcmxkUG9zaXRpb24odjNfYik7XG5cbiAgICAgICAgVmVjMy5hZGQodjNfYSwgdjNfYSwgdGhpcy5sb29rQXRPZmZzZXQpO1xuICAgICAgICB0aGlzLm5vZGUubG9va0F0KHYzX2EpO1xuICAgIH1cbn1cbiJdfQ==