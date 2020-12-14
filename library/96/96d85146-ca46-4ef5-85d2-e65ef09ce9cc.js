System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, Node, CCFloat, Vec3, _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _temp, _crd, ccclass, property, v3_a, v3_b, CameraFollow;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

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

      ccclass = _decorator.ccclass;
      property = _decorator.property;
      v3_a = new Vec3();
      v3_b = new Vec3();

      _export("CameraFollow", CameraFollow = (_dec = ccclass("CameraFollow"), _dec2 = property({
        type: Node
      }), _dec3 = property({
        type: CCFloat
      }), _dec4 = property(Vec3), _dec5 = property(Vec3), _dec(_class = (_class2 = (_temp = /*#__PURE__*/function (_Component) {
        _inheritsLoose(CameraFollow, _Component);

        function CameraFollow() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_this, "target", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "smoothSpeed", _descriptor2, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "offset", _descriptor3, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "lookAtOffset", _descriptor4, _assertThisInitialized(_this));

          return _this;
        }

        var _proto = CameraFollow.prototype;

        _proto.start = function start() {// Your initialization goes here.
        };

        _proto.update = function update(deltaTime) {
          // Your update function goes here.
          this.target.getWorldPosition(v3_a);
          Vec3.add(v3_b, v3_a, this.offset);
          Vec3.lerp(v3_b, this.node.position, v3_b, this.smoothSpeed);
          this.node.setWorldPosition(v3_b);
          Vec3.add(v3_a, v3_a, this.lookAtOffset);
          this.node.lookAt(v3_a);
        };

        return CameraFollow;
      }(Component), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "target", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "smoothSpeed", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0.125;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "offset", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return new Vec3();
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "lookAtOffset", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return new Vec3();
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vVXNlcnMvbWFjL0Rvd25sb2Fkcy9leGFtcGxlLTNkLW1hc3Rlci9zaW1wbGUtZ2FtZXMvYXNzZXRzL3NpbXBsZS1ydW4vc2NyaXB0cy9DYW1lcmFGb2xsb3cudHMiXSwibmFtZXMiOlsiX2RlY29yYXRvciIsIkNvbXBvbmVudCIsIk5vZGUiLCJDQ0Zsb2F0IiwiVmVjMyIsImNjY2xhc3MiLCJwcm9wZXJ0eSIsInYzX2EiLCJ2M19iIiwiQ2FtZXJhRm9sbG93IiwidHlwZSIsInN0YXJ0IiwidXBkYXRlIiwiZGVsdGFUaW1lIiwidGFyZ2V0IiwiZ2V0V29ybGRQb3NpdGlvbiIsImFkZCIsIm9mZnNldCIsImxlcnAiLCJub2RlIiwicG9zaXRpb24iLCJzbW9vdGhTcGVlZCIsInNldFdvcmxkUG9zaXRpb24iLCJsb29rQXRPZmZzZXQiLCJsb29rQXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFTQSxNQUFBQSxVLE9BQUFBLFU7QUFBWUMsTUFBQUEsUyxPQUFBQSxTO0FBQVdDLE1BQUFBLEksT0FBQUEsSTtBQUFNQyxNQUFBQSxPLE9BQUFBLE87QUFBU0MsTUFBQUEsSSxPQUFBQSxJOzs7Ozs7O0FBQ3ZDQyxNQUFBQSxPLEdBQXNCTCxVLENBQXRCSyxPO0FBQVNDLE1BQUFBLFEsR0FBYU4sVSxDQUFiTSxRO0FBRWJDLE1BQUFBLEksR0FBTyxJQUFJSCxJQUFKLEU7QUFDUEksTUFBQUEsSSxHQUFPLElBQUlKLElBQUosRTs7OEJBR0VLLFksV0FEWkosT0FBTyxDQUFDLGNBQUQsQyxVQVNIQyxRQUFRLENBQUM7QUFBQ0ksUUFBQUEsSUFBSSxFQUFFUjtBQUFQLE9BQUQsQyxVQUVSSSxRQUFRLENBQUM7QUFBQ0ksUUFBQUEsSUFBSSxFQUFFUDtBQUFQLE9BQUQsQyxVQUVSRyxRQUFRLENBQUNGLElBQUQsQyxVQUVSRSxRQUFRLENBQUNGLElBQUQsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztlQUdUTyxLLEdBQUEsaUJBQVMsQ0FDTDtBQUNILFM7O2VBRURDLE0sR0FBQSxnQkFBUUMsU0FBUixFQUEyQjtBQUN2QjtBQUNBLGVBQUtDLE1BQUwsQ0FBWUMsZ0JBQVosQ0FBNkJSLElBQTdCO0FBQ0FILFVBQUFBLElBQUksQ0FBQ1ksR0FBTCxDQUFTUixJQUFULEVBQWVELElBQWYsRUFBcUIsS0FBS1UsTUFBMUI7QUFDQWIsVUFBQUEsSUFBSSxDQUFDYyxJQUFMLENBQVVWLElBQVYsRUFBZ0IsS0FBS1csSUFBTCxDQUFVQyxRQUExQixFQUFvQ1osSUFBcEMsRUFBMEMsS0FBS2EsV0FBL0M7QUFDQSxlQUFLRixJQUFMLENBQVVHLGdCQUFWLENBQTJCZCxJQUEzQjtBQUVBSixVQUFBQSxJQUFJLENBQUNZLEdBQUwsQ0FBU1QsSUFBVCxFQUFlQSxJQUFmLEVBQXFCLEtBQUtnQixZQUExQjtBQUNBLGVBQUtKLElBQUwsQ0FBVUssTUFBVixDQUFpQmpCLElBQWpCO0FBQ0gsUzs7O1FBOUI2Qk4sUzs7Ozs7aUJBU1IsSTs7Ozs7OztpQkFFTyxLOzs7Ozs7O2lCQUVQLElBQUlHLElBQUosRTs7Ozs7OztpQkFFTSxJQUFJQSxJQUFKLEUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBfZGVjb3JhdG9yLCBDb21wb25lbnQsIE5vZGUsIENDRmxvYXQsIFZlYzMgfSBmcm9tIFwiY2NcIjtcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IF9kZWNvcmF0b3I7XG5cbmxldCB2M19hID0gbmV3IFZlYzMoKTtcbmxldCB2M19iID0gbmV3IFZlYzMoKTtcblxuQGNjY2xhc3MoXCJDYW1lcmFGb2xsb3dcIilcbmV4cG9ydCBjbGFzcyBDYW1lcmFGb2xsb3cgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIC8qIGNsYXNzIG1lbWJlciBjb3VsZCBiZSBkZWZpbmVkIGxpa2UgdGhpcyAqL1xuICAgIC8vIGR1bW15ID0gJyc7XG5cbiAgICAvKiB1c2UgYHByb3BlcnR5YCBkZWNvcmF0b3IgaWYgeW91ciB3YW50IHRoZSBtZW1iZXIgdG8gYmUgc2VyaWFsaXphYmxlICovXG4gICAgLy8gQHByb3BlcnR5XG4gICAgLy8gc2VyaWFsaXphYmxlRHVtbXkgPSAwO1xuXG4gICAgQHByb3BlcnR5KHt0eXBlOiBOb2RlfSlcbiAgICBwdWJsaWMgdGFyZ2V0OiBOb2RlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoe3R5cGU6IENDRmxvYXR9KVxuICAgIHB1YmxpYyBzbW9vdGhTcGVlZDogbnVtYmVyID0gMC4xMjU7XG4gICAgQHByb3BlcnR5KFZlYzMpXG4gICAgcHVibGljIG9mZnNldDogVmVjMyA9IG5ldyBWZWMzKCk7XG4gICAgQHByb3BlcnR5KFZlYzMpXG4gICAgcHVibGljIGxvb2tBdE9mZnNldDogVmVjMyA9IG5ldyBWZWMzKCk7XG5cbiAgICBzdGFydCAoKSB7XG4gICAgICAgIC8vIFlvdXIgaW5pdGlhbGl6YXRpb24gZ29lcyBoZXJlLlxuICAgIH1cblxuICAgIHVwZGF0ZSAoZGVsdGFUaW1lOiBudW1iZXIpIHtcbiAgICAgICAgLy8gWW91ciB1cGRhdGUgZnVuY3Rpb24gZ29lcyBoZXJlLlxuICAgICAgICB0aGlzLnRhcmdldC5nZXRXb3JsZFBvc2l0aW9uKHYzX2EpO1xuICAgICAgICBWZWMzLmFkZCh2M19iLCB2M19hLCB0aGlzLm9mZnNldCk7XG4gICAgICAgIFZlYzMubGVycCh2M19iLCB0aGlzLm5vZGUucG9zaXRpb24sIHYzX2IsIHRoaXMuc21vb3RoU3BlZWQpO1xuICAgICAgICB0aGlzLm5vZGUuc2V0V29ybGRQb3NpdGlvbih2M19iKTtcblxuICAgICAgICBWZWMzLmFkZCh2M19hLCB2M19hLCB0aGlzLmxvb2tBdE9mZnNldCk7XG4gICAgICAgIHRoaXMubm9kZS5sb29rQXQodjNfYSk7XG4gICAgfVxufVxuIl19