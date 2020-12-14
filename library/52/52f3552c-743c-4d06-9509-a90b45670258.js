System.register(["cce.code-quality.cr", "cc", "./PlayerController.js"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, ColliderComponent, PlayerController, _dec, _dec2, _class, _class2, _descriptor, _temp, _crd, ccclass, property, ColliderChecker;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfPlayerController(extras) {
    _reporterNs.report("PlayerController", "./PlayerController", _context.meta, extras);
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
      ColliderComponent = _cc.ColliderComponent;
    }, function (_PlayerControllerJs) {
      PlayerController = _PlayerControllerJs.PlayerController;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "52f35UsdDxNBpUJqQtFZwJY", "ColliderChecker", _context.meta);

      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("ColliderChecker", ColliderChecker = (_dec = ccclass('ColliderChecker'), _dec2 = property({
        type: _crd && PlayerController === void 0 ? (_reportPossibleCrUseOfPlayerController({
          error: Error()
        }), PlayerController) : PlayerController
      }), _dec(_class = (_class2 = (_temp = /*#__PURE__*/function (_Component) {
        _inheritsLoose(ColliderChecker, _Component);

        function ColliderChecker() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_this, "playerCtrl", _descriptor, _assertThisInitialized(_this));

          return _this;
        }

        var _proto = ColliderChecker.prototype;

        _proto.start = function start() {
          // collider
          var collider = this.getComponent(ColliderComponent);
          collider.on('onTriggerEnter', this.onTriggerEnter, this);
        };

        _proto.onTriggerEnter = function onTriggerEnter(event) {
          if (this.playerCtrl) {
            this.playerCtrl.onTriggerEnter(event);
          }
        } // update (deltaTime: number) {
        //     // Your update function goes here.
        // }
        ;

        return ColliderChecker;
      }(Component), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "playerCtrl", [_dec2], {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vVXNlcnMvbWFjL0Rvd25sb2Fkcy9leGFtcGxlLTNkLW1hc3Rlci9zaW1wbGUtZ2FtZXMvYXNzZXRzL3NpbXBsZS1ydW4vc2NyaXB0cy9Db2xsaWRlckNoZWNrZXIudHMiXSwibmFtZXMiOlsiX2RlY29yYXRvciIsIkNvbXBvbmVudCIsIkNvbGxpZGVyQ29tcG9uZW50IiwiUGxheWVyQ29udHJvbGxlciIsImNjY2xhc3MiLCJwcm9wZXJ0eSIsIkNvbGxpZGVyQ2hlY2tlciIsInR5cGUiLCJzdGFydCIsImNvbGxpZGVyIiwiZ2V0Q29tcG9uZW50Iiwib24iLCJvblRyaWdnZXJFbnRlciIsImV2ZW50IiwicGxheWVyQ3RybCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQVNBLE1BQUFBLFUsT0FBQUEsVTtBQUFZQyxNQUFBQSxTLE9BQUFBLFM7QUFBaUJDLE1BQUFBLGlCLE9BQUFBLGlCOztBQUM3QkMsTUFBQUEsZ0IsdUJBQUFBLGdCOzs7Ozs7O0FBQ0RDLE1BQUFBLE8sR0FBc0JKLFUsQ0FBdEJJLE87QUFBU0MsTUFBQUEsUSxHQUFhTCxVLENBQWJLLFE7O2lDQUdKQyxlLFdBRFpGLE9BQU8sQ0FBQyxpQkFBRCxDLFVBU0hDLFFBQVEsQ0FBQztBQUFDRSxRQUFBQSxJQUFJO0FBQUE7QUFBQTtBQUFMLE9BQUQsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztlQUdUQyxLLEdBQUEsaUJBQVM7QUFDTDtBQUNBLGNBQU1DLFFBQVEsR0FBRyxLQUFLQyxZQUFMLENBQWtCUixpQkFBbEIsQ0FBakI7QUFDQU8sVUFBQUEsUUFBUSxDQUFDRSxFQUFULENBQVksZ0JBQVosRUFBOEIsS0FBS0MsY0FBbkMsRUFBbUQsSUFBbkQ7QUFDSCxTOztlQUVEQSxjLEdBQUEsd0JBQWVDLEtBQWYsRUFBcUM7QUFDakMsY0FBSSxLQUFLQyxVQUFULEVBQXFCO0FBQ2pCLGlCQUFLQSxVQUFMLENBQWdCRixjQUFoQixDQUErQkMsS0FBL0I7QUFDSDtBQUNKLFMsQ0FFRDtBQUNBO0FBQ0E7Ozs7UUF6QmlDWixTOzs7OztpQkFTSyxJIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgX2RlY29yYXRvciwgQ29tcG9uZW50LCBOb2RlLCBDb2xsaWRlckNvbXBvbmVudCwgSVRyaWdnZXJFdmVudCB9IGZyb20gJ2NjJztcbmltcG9ydCB7IFBsYXllckNvbnRyb2xsZXIgfSBmcm9tICcuL1BsYXllckNvbnRyb2xsZXInO1xuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gX2RlY29yYXRvcjtcblxuQGNjY2xhc3MoJ0NvbGxpZGVyQ2hlY2tlcicpXG5leHBvcnQgY2xhc3MgQ29sbGlkZXJDaGVja2VyIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICAvKiBjbGFzcyBtZW1iZXIgY291bGQgYmUgZGVmaW5lZCBsaWtlIHRoaXMgKi9cbiAgICAvLyBkdW1teSA9ICcnO1xuXG4gICAgLyogdXNlIGBwcm9wZXJ0eWAgZGVjb3JhdG9yIGlmIHlvdXIgd2FudCB0aGUgbWVtYmVyIHRvIGJlIHNlcmlhbGl6YWJsZSAqL1xuICAgIC8vIEBwcm9wZXJ0eVxuICAgIC8vIHNlcmlhbGl6YWJsZUR1bW15ID0gMDtcblxuICAgIEBwcm9wZXJ0eSh7dHlwZTogUGxheWVyQ29udHJvbGxlcn0pXG4gICAgcHVibGljIHBsYXllckN0cmw6IFBsYXllckNvbnRyb2xsZXIgPSBudWxsO1xuXG4gICAgc3RhcnQgKCkge1xuICAgICAgICAvLyBjb2xsaWRlclxuICAgICAgICBjb25zdCBjb2xsaWRlciA9IHRoaXMuZ2V0Q29tcG9uZW50KENvbGxpZGVyQ29tcG9uZW50KTtcbiAgICAgICAgY29sbGlkZXIub24oJ29uVHJpZ2dlckVudGVyJywgdGhpcy5vblRyaWdnZXJFbnRlciwgdGhpcyk7XG4gICAgfVxuXG4gICAgb25UcmlnZ2VyRW50ZXIoZXZlbnQ6IElUcmlnZ2VyRXZlbnQpIHtcbiAgICAgICAgaWYgKHRoaXMucGxheWVyQ3RybCkge1xuICAgICAgICAgICAgdGhpcy5wbGF5ZXJDdHJsLm9uVHJpZ2dlckVudGVyKGV2ZW50KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIHVwZGF0ZSAoZGVsdGFUaW1lOiBudW1iZXIpIHtcbiAgICAvLyAgICAgLy8gWW91ciB1cGRhdGUgZnVuY3Rpb24gZ29lcyBoZXJlLlxuICAgIC8vIH1cbn1cbiJdfQ==