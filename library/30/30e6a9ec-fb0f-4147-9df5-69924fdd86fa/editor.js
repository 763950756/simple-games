System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, CCFloat, _dec, _dec2, _class, _class2, _descriptor, _temp, _crd, ccclass, property, AutoDestory;

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
      CCFloat = _cc.CCFloat;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "30e6ans+w9BR531aZJP3Yb6", "AutoDestory", _context.meta);

      ({
        ccclass,
        property
      } = _decorator);

      _export("AutoDestory", AutoDestory = (_dec = ccclass('AutoDestory'), _dec2 = property({
        type: CCFloat
      }), _dec(_class = (_class2 = (_temp = class AutoDestory extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "destroyTime", _descriptor, this);

          this._curPassedTime = 0;
        }

        start() {// Your initialization goes here.
        }

        update(deltaTime) {
          // Your update function goes here.
          this._curPassedTime += deltaTime;

          if (this._curPassedTime > this.destroyTime) {
            this.node.destroy();
          }
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "destroyTime", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 1;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vVXNlcnMvbWFjL0Rvd25sb2Fkcy9leGFtcGxlLTNkLW1hc3Rlci9zaW1wbGUtZ2FtZXMvYXNzZXRzL3NpbXBsZS1zaG9vdGluZy9zY3JpcHRzL0F1dG9EZXN0b3J5LnRzIl0sIm5hbWVzIjpbIl9kZWNvcmF0b3IiLCJDb21wb25lbnQiLCJDQ0Zsb2F0IiwiY2NjbGFzcyIsInByb3BlcnR5IiwiQXV0b0Rlc3RvcnkiLCJ0eXBlIiwiX2N1clBhc3NlZFRpbWUiLCJzdGFydCIsInVwZGF0ZSIsImRlbHRhVGltZSIsImRlc3Ryb3lUaW1lIiwibm9kZSIsImRlc3Ryb3kiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQVNBLE1BQUFBLFUsT0FBQUEsVTtBQUFZQyxNQUFBQSxTLE9BQUFBLFM7QUFBaUJDLE1BQUFBLE8sT0FBQUEsTzs7Ozs7OztPQUNoQztBQUFFQyxRQUFBQSxPQUFGO0FBQVdDLFFBQUFBO0FBQVgsTyxHQUF3QkosVTs7NkJBR2pCSyxXLFdBRFpGLE9BQU8sQ0FBQyxhQUFELEMsVUFRSEMsUUFBUSxDQUFDO0FBQUNFLFFBQUFBLElBQUksRUFBRUo7QUFBUCxPQUFELEMsb0NBUmIsTUFDYUcsV0FEYixTQUNpQ0osU0FEakMsQ0FDMkM7QUFBQTtBQUFBOztBQUFBOztBQUFBLGVBVS9CTSxjQVYrQixHQVVOLENBVk07QUFBQTs7QUFZdkNDLFFBQUFBLEtBQUssR0FBSSxDQUNMO0FBQ0g7O0FBRURDLFFBQUFBLE1BQU0sQ0FBRUMsU0FBRixFQUFxQjtBQUN2QjtBQUNBLGVBQUtILGNBQUwsSUFBdUJHLFNBQXZCOztBQUNBLGNBQUksS0FBS0gsY0FBTCxHQUFzQixLQUFLSSxXQUEvQixFQUE0QztBQUN4QyxpQkFBS0MsSUFBTCxDQUFVQyxPQUFWO0FBQ0g7QUFDSjs7QUF0QnNDLE87Ozs7O2lCQVFWLEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBfZGVjb3JhdG9yLCBDb21wb25lbnQsIE5vZGUsIENDRmxvYXQgfSBmcm9tICdjYyc7XG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBfZGVjb3JhdG9yO1xuXG5AY2NjbGFzcygnQXV0b0Rlc3RvcnknKVxuZXhwb3J0IGNsYXNzIEF1dG9EZXN0b3J5IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICAvKiBjbGFzcyBtZW1iZXIgY291bGQgYmUgZGVmaW5lZCBsaWtlIHRoaXMgKi9cbiAgICAvLyBkdW1teSA9ICcnO1xuXG4gICAgLyogdXNlIGBwcm9wZXJ0eWAgZGVjb3JhdG9yIGlmIHlvdXIgd2FudCB0aGUgbWVtYmVyIHRvIGJlIHNlcmlhbGl6YWJsZSAqL1xuICAgIC8vIEBwcm9wZXJ0eVxuICAgIC8vIHNlcmlhbGl6YWJsZUR1bW15ID0gMDtcbiAgICBAcHJvcGVydHkoe3R5cGU6IENDRmxvYXR9KVxuICAgIHB1YmxpYyBkZXN0cm95VGltZTogbnVtYmVyID0gMTtcbiAgICBcbiAgICBwcml2YXRlIF9jdXJQYXNzZWRUaW1lOiBudW1iZXIgPSAwO1xuXG4gICAgc3RhcnQgKCkge1xuICAgICAgICAvLyBZb3VyIGluaXRpYWxpemF0aW9uIGdvZXMgaGVyZS5cbiAgICB9XG5cbiAgICB1cGRhdGUgKGRlbHRhVGltZTogbnVtYmVyKSB7XG4gICAgICAgIC8vIFlvdXIgdXBkYXRlIGZ1bmN0aW9uIGdvZXMgaGVyZS5cbiAgICAgICAgdGhpcy5fY3VyUGFzc2VkVGltZSArPSBkZWx0YVRpbWU7XG4gICAgICAgIGlmICh0aGlzLl9jdXJQYXNzZWRUaW1lID4gdGhpcy5kZXN0cm95VGltZSkge1xuICAgICAgICAgICAgdGhpcy5ub2RlLmRlc3Ryb3koKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiJdfQ==