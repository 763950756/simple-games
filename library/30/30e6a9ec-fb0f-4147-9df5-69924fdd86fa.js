System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, CCFloat, _dec, _dec2, _class, _class2, _descriptor, _temp, _crd, ccclass, property, AutoDestory;

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
      CCFloat = _cc.CCFloat;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "30e6ans+w9BR531aZJP3Yb6", "AutoDestory", _context.meta);

      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("AutoDestory", AutoDestory = (_dec = ccclass('AutoDestory'), _dec2 = property({
        type: CCFloat
      }), _dec(_class = (_class2 = (_temp = /*#__PURE__*/function (_Component) {
        _inheritsLoose(AutoDestory, _Component);

        function AutoDestory() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_this, "destroyTime", _descriptor, _assertThisInitialized(_this));

          _this._curPassedTime = 0;
          return _this;
        }

        var _proto = AutoDestory.prototype;

        _proto.start = function start() {// Your initialization goes here.
        };

        _proto.update = function update(deltaTime) {
          // Your update function goes here.
          this._curPassedTime += deltaTime;

          if (this._curPassedTime > this.destroyTime) {
            this.node.destroy();
          }
        };

        return AutoDestory;
      }(Component), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "destroyTime", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 1;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vVXNlcnMvbWFjL0Rvd25sb2Fkcy9leGFtcGxlLTNkLW1hc3Rlci9zaW1wbGUtZ2FtZXMvYXNzZXRzL3NpbXBsZS1zaG9vdGluZy9zY3JpcHRzL0F1dG9EZXN0b3J5LnRzIl0sIm5hbWVzIjpbIl9kZWNvcmF0b3IiLCJDb21wb25lbnQiLCJDQ0Zsb2F0IiwiY2NjbGFzcyIsInByb3BlcnR5IiwiQXV0b0Rlc3RvcnkiLCJ0eXBlIiwiX2N1clBhc3NlZFRpbWUiLCJzdGFydCIsInVwZGF0ZSIsImRlbHRhVGltZSIsImRlc3Ryb3lUaW1lIiwibm9kZSIsImRlc3Ryb3kiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFTQSxNQUFBQSxVLE9BQUFBLFU7QUFBWUMsTUFBQUEsUyxPQUFBQSxTO0FBQWlCQyxNQUFBQSxPLE9BQUFBLE87Ozs7Ozs7QUFDOUJDLE1BQUFBLE8sR0FBc0JILFUsQ0FBdEJHLE87QUFBU0MsTUFBQUEsUSxHQUFhSixVLENBQWJJLFE7OzZCQUdKQyxXLFdBRFpGLE9BQU8sQ0FBQyxhQUFELEMsVUFRSEMsUUFBUSxDQUFDO0FBQUNFLFFBQUFBLElBQUksRUFBRUo7QUFBUCxPQUFELEM7Ozs7Ozs7Ozs7Ozs7O2dCQUdESyxjLEdBQXlCLEM7Ozs7OztlQUVqQ0MsSyxHQUFBLGlCQUFTLENBQ0w7QUFDSCxTOztlQUVEQyxNLEdBQUEsZ0JBQVFDLFNBQVIsRUFBMkI7QUFDdkI7QUFDQSxlQUFLSCxjQUFMLElBQXVCRyxTQUF2Qjs7QUFDQSxjQUFJLEtBQUtILGNBQUwsR0FBc0IsS0FBS0ksV0FBL0IsRUFBNEM7QUFDeEMsaUJBQUtDLElBQUwsQ0FBVUMsT0FBVjtBQUNIO0FBQ0osUzs7O1FBdEI0QlosUzs7Ozs7aUJBUUEsQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IF9kZWNvcmF0b3IsIENvbXBvbmVudCwgTm9kZSwgQ0NGbG9hdCB9IGZyb20gJ2NjJztcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IF9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzKCdBdXRvRGVzdG9yeScpXG5leHBvcnQgY2xhc3MgQXV0b0Rlc3RvcnkgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIC8qIGNsYXNzIG1lbWJlciBjb3VsZCBiZSBkZWZpbmVkIGxpa2UgdGhpcyAqL1xuICAgIC8vIGR1bW15ID0gJyc7XG5cbiAgICAvKiB1c2UgYHByb3BlcnR5YCBkZWNvcmF0b3IgaWYgeW91ciB3YW50IHRoZSBtZW1iZXIgdG8gYmUgc2VyaWFsaXphYmxlICovXG4gICAgLy8gQHByb3BlcnR5XG4gICAgLy8gc2VyaWFsaXphYmxlRHVtbXkgPSAwO1xuICAgIEBwcm9wZXJ0eSh7dHlwZTogQ0NGbG9hdH0pXG4gICAgcHVibGljIGRlc3Ryb3lUaW1lOiBudW1iZXIgPSAxO1xuICAgIFxuICAgIHByaXZhdGUgX2N1clBhc3NlZFRpbWU6IG51bWJlciA9IDA7XG5cbiAgICBzdGFydCAoKSB7XG4gICAgICAgIC8vIFlvdXIgaW5pdGlhbGl6YXRpb24gZ29lcyBoZXJlLlxuICAgIH1cblxuICAgIHVwZGF0ZSAoZGVsdGFUaW1lOiBudW1iZXIpIHtcbiAgICAgICAgLy8gWW91ciB1cGRhdGUgZnVuY3Rpb24gZ29lcyBoZXJlLlxuICAgICAgICB0aGlzLl9jdXJQYXNzZWRUaW1lICs9IGRlbHRhVGltZTtcbiAgICAgICAgaWYgKHRoaXMuX2N1clBhc3NlZFRpbWUgPiB0aGlzLmRlc3Ryb3lUaW1lKSB7XG4gICAgICAgICAgICB0aGlzLm5vZGUuZGVzdHJveSgpO1xuICAgICAgICB9XG4gICAgfVxufVxuIl19