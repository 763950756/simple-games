System.register(["cce.code-quality.cr", "cc", "./ShootingPlayerController.js", "./GameDefines.js"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, Node, ShootingPlayerController, ActionType, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _temp, _crd, ccclass, property, InputControl;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfShootingPlayerController(extras) {
    _reporterNs.report("ShootingPlayerController", "./ShootingPlayerController", _context.meta, extras);
  }

  function _reportPossibleCrUseOfActionType(extras) {
    _reporterNs.report("ActionType", "./GameDefines", _context.meta, extras);
  }

  _export({
    _dec: void 0,
    _dec2: void 0,
    _dec3: void 0,
    _class: void 0,
    _class2: void 0,
    _descriptor: void 0,
    _descriptor2: void 0,
    _temp: void 0
  });

  return {
    setters: [function (_cceCodeQualityCr) {
      _reporterNs = _cceCodeQualityCr;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Node = _cc.Node;
    }, function (_ShootingPlayerControllerJs) {
      ShootingPlayerController = _ShootingPlayerControllerJs.ShootingPlayerController;
    }, function (_GameDefinesJs) {
      ActionType = _GameDefinesJs.ActionType;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "5bf17fQN9lOwI0hmD3n6l8i", "InputControl", _context.meta);

      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("InputControl", InputControl = (_dec = ccclass('InputControl'), _dec2 = property({
        type: [Node]
      }), _dec3 = property({
        type: _crd && ShootingPlayerController === void 0 ? (_reportPossibleCrUseOfShootingPlayerController({
          error: Error()
        }), ShootingPlayerController) : ShootingPlayerController
      }), _dec(_class = (_class2 = (_temp = /*#__PURE__*/function (_Component) {
        _inheritsLoose(InputControl, _Component);

        function InputControl() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_this, "actionButtons", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "playerCtrl", _descriptor2, _assertThisInitialized(_this));

          return _this;
        }

        var _proto = InputControl.prototype;

        _proto.onLoad = function onLoad() {
          var _this2 = this;

          this.actionButtons.forEach(function (button) {
            button.on(Node.EventType.TOUCH_START, _this2.onTouchStart, _this2);
            button.on(Node.EventType.TOUCH_END, _this2.onTouchEnd, _this2);
          });
        };

        _proto.onTouchStart = function onTouchStart(event) {
          var node = event.currentTarget;

          if (node) {
            switch (node.name) {
              case 'Forward':
                this.playerCtrl.doAction((_crd && ActionType === void 0 ? (_reportPossibleCrUseOfActionType({
                  error: Error()
                }), ActionType) : ActionType).Forward, true);
                break;

              case 'Backward':
                this.playerCtrl.doAction((_crd && ActionType === void 0 ? (_reportPossibleCrUseOfActionType({
                  error: Error()
                }), ActionType) : ActionType).Backward, true);
                break;

              case 'Left':
                this.playerCtrl.doAction((_crd && ActionType === void 0 ? (_reportPossibleCrUseOfActionType({
                  error: Error()
                }), ActionType) : ActionType).Left, true);
                break;

              case 'Right':
                this.playerCtrl.doAction((_crd && ActionType === void 0 ? (_reportPossibleCrUseOfActionType({
                  error: Error()
                }), ActionType) : ActionType).Right, true);
                break;

              case 'Shoot':
                this.playerCtrl.doAction((_crd && ActionType === void 0 ? (_reportPossibleCrUseOfActionType({
                  error: Error()
                }), ActionType) : ActionType).Shoot, true);
                break;

              case 'ThrowGrenade':
                this.playerCtrl.doAction((_crd && ActionType === void 0 ? (_reportPossibleCrUseOfActionType({
                  error: Error()
                }), ActionType) : ActionType).ThrowGrenade, true);
                break;
            }
          }
        };

        _proto.onTouchEnd = function onTouchEnd(event) {
          var node = event.currentTarget;

          if (node) {
            switch (node.name) {
              case 'Forward':
                this.playerCtrl.doAction((_crd && ActionType === void 0 ? (_reportPossibleCrUseOfActionType({
                  error: Error()
                }), ActionType) : ActionType).Forward, false);
                break;

              case 'Backward':
                this.playerCtrl.doAction((_crd && ActionType === void 0 ? (_reportPossibleCrUseOfActionType({
                  error: Error()
                }), ActionType) : ActionType).Backward, false);
                break;

              case 'Left':
                this.playerCtrl.doAction((_crd && ActionType === void 0 ? (_reportPossibleCrUseOfActionType({
                  error: Error()
                }), ActionType) : ActionType).Left, false);
                break;

              case 'Right':
                this.playerCtrl.doAction((_crd && ActionType === void 0 ? (_reportPossibleCrUseOfActionType({
                  error: Error()
                }), ActionType) : ActionType).Right, false);
                break;
            }
          }
        };

        return InputControl;
      }(Component), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "actionButtons", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "playerCtrl", [_dec3], {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vVXNlcnMvbWFjL0Rvd25sb2Fkcy9leGFtcGxlLTNkLW1hc3Rlci9zaW1wbGUtZ2FtZXMvYXNzZXRzL3NpbXBsZS1zaG9vdGluZy9zY3JpcHRzL0lucHV0Q29udHJvbC50cyJdLCJuYW1lcyI6WyJfZGVjb3JhdG9yIiwiQ29tcG9uZW50IiwiTm9kZSIsIlNob290aW5nUGxheWVyQ29udHJvbGxlciIsIkFjdGlvblR5cGUiLCJjY2NsYXNzIiwicHJvcGVydHkiLCJJbnB1dENvbnRyb2wiLCJ0eXBlIiwib25Mb2FkIiwiYWN0aW9uQnV0dG9ucyIsImZvckVhY2giLCJidXR0b24iLCJvbiIsIkV2ZW50VHlwZSIsIlRPVUNIX1NUQVJUIiwib25Ub3VjaFN0YXJ0IiwiVE9VQ0hfRU5EIiwib25Ub3VjaEVuZCIsImV2ZW50Iiwibm9kZSIsImN1cnJlbnRUYXJnZXQiLCJuYW1lIiwicGxheWVyQ3RybCIsImRvQWN0aW9uIiwiRm9yd2FyZCIsIkJhY2t3YXJkIiwiTGVmdCIsIlJpZ2h0IiwiU2hvb3QiLCJUaHJvd0dyZW5hZGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFTQSxNQUFBQSxVLE9BQUFBLFU7QUFBWUMsTUFBQUEsUyxPQUFBQSxTO0FBQVdDLE1BQUFBLEksT0FBQUEsSTs7QUFDdkJDLE1BQUFBLHdCLCtCQUFBQSx3Qjs7QUFDQUMsTUFBQUEsVSxrQkFBQUEsVTs7Ozs7OztBQUNEQyxNQUFBQSxPLEdBQXNCTCxVLENBQXRCSyxPO0FBQVNDLE1BQUFBLFEsR0FBYU4sVSxDQUFiTSxROzs4QkFHSkMsWSxXQURaRixPQUFPLENBQUMsY0FBRCxDLFVBRUhDLFFBQVEsQ0FBQztBQUFDRSxRQUFBQSxJQUFJLEVBQUUsQ0FBQ04sSUFBRDtBQUFQLE9BQUQsQyxVQUVSSSxRQUFRLENBQUM7QUFBQ0UsUUFBQUEsSUFBSTtBQUFBO0FBQUE7QUFBTCxPQUFELEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztlQUdUQyxNLEdBQUEsa0JBQVM7QUFBQTs7QUFFTCxlQUFLQyxhQUFMLENBQW1CQyxPQUFuQixDQUEyQixVQUFDQyxNQUFELEVBQVk7QUFDbkNBLFlBQUFBLE1BQU0sQ0FBQ0MsRUFBUCxDQUFVWCxJQUFJLENBQUNZLFNBQUwsQ0FBZUMsV0FBekIsRUFBc0MsTUFBSSxDQUFDQyxZQUEzQyxFQUF5RCxNQUF6RDtBQUNBSixZQUFBQSxNQUFNLENBQUNDLEVBQVAsQ0FBVVgsSUFBSSxDQUFDWSxTQUFMLENBQWVHLFNBQXpCLEVBQW9DLE1BQUksQ0FBQ0MsVUFBekMsRUFBcUQsTUFBckQ7QUFDSCxXQUhEO0FBSUgsUzs7ZUFFREYsWSxHQUFBLHNCQUFhRyxLQUFiLEVBQWdDO0FBQzVCLGNBQU1DLElBQUksR0FBR0QsS0FBSyxDQUFDRSxhQUFuQjs7QUFDQSxjQUFJRCxJQUFKLEVBQVU7QUFDTixvQkFBT0EsSUFBSSxDQUFDRSxJQUFaO0FBQ0ksbUJBQUssU0FBTDtBQUNJLHFCQUFLQyxVQUFMLENBQWdCQyxRQUFoQixDQUF5QjtBQUFBO0FBQUEsOENBQVdDLE9BQXBDLEVBQTZDLElBQTdDO0FBQ0E7O0FBQ0osbUJBQUssVUFBTDtBQUNJLHFCQUFLRixVQUFMLENBQWdCQyxRQUFoQixDQUF5QjtBQUFBO0FBQUEsOENBQVdFLFFBQXBDLEVBQThDLElBQTlDO0FBQ0E7O0FBQ0osbUJBQUssTUFBTDtBQUNJLHFCQUFLSCxVQUFMLENBQWdCQyxRQUFoQixDQUF5QjtBQUFBO0FBQUEsOENBQVdHLElBQXBDLEVBQTBDLElBQTFDO0FBQ0E7O0FBQ0osbUJBQUssT0FBTDtBQUNJLHFCQUFLSixVQUFMLENBQWdCQyxRQUFoQixDQUF5QjtBQUFBO0FBQUEsOENBQVdJLEtBQXBDLEVBQTJDLElBQTNDO0FBQ0E7O0FBQ0osbUJBQUssT0FBTDtBQUNJLHFCQUFLTCxVQUFMLENBQWdCQyxRQUFoQixDQUF5QjtBQUFBO0FBQUEsOENBQVdLLEtBQXBDLEVBQTJDLElBQTNDO0FBQ0E7O0FBQ0osbUJBQUssY0FBTDtBQUNJLHFCQUFLTixVQUFMLENBQWdCQyxRQUFoQixDQUF5QjtBQUFBO0FBQUEsOENBQVdNLFlBQXBDLEVBQWtELElBQWxEO0FBQ0E7QUFsQlI7QUFvQkg7QUFDSixTOztlQUVEWixVLEdBQUEsb0JBQVdDLEtBQVgsRUFBa0I7QUFDZCxjQUFNQyxJQUFJLEdBQUdELEtBQUssQ0FBQ0UsYUFBbkI7O0FBQ0EsY0FBSUQsSUFBSixFQUFVO0FBQ04sb0JBQU9BLElBQUksQ0FBQ0UsSUFBWjtBQUNJLG1CQUFLLFNBQUw7QUFDSSxxQkFBS0MsVUFBTCxDQUFnQkMsUUFBaEIsQ0FBeUI7QUFBQTtBQUFBLDhDQUFXQyxPQUFwQyxFQUE2QyxLQUE3QztBQUNBOztBQUNKLG1CQUFLLFVBQUw7QUFDSSxxQkFBS0YsVUFBTCxDQUFnQkMsUUFBaEIsQ0FBeUI7QUFBQTtBQUFBLDhDQUFXRSxRQUFwQyxFQUE4QyxLQUE5QztBQUNBOztBQUNKLG1CQUFLLE1BQUw7QUFDSSxxQkFBS0gsVUFBTCxDQUFnQkMsUUFBaEIsQ0FBeUI7QUFBQTtBQUFBLDhDQUFXRyxJQUFwQyxFQUEwQyxLQUExQztBQUNBOztBQUNKLG1CQUFLLE9BQUw7QUFDSSxxQkFBS0osVUFBTCxDQUFnQkMsUUFBaEIsQ0FBeUI7QUFBQTtBQUFBLDhDQUFXSSxLQUFwQyxFQUEyQyxLQUEzQztBQUNBO0FBWlI7QUFjSDtBQUNKLFM7OztRQTFENkIzQixTOzs7OztpQkFFQyxFOzs7Ozs7O2lCQUVlLEkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBfZGVjb3JhdG9yLCBDb21wb25lbnQsIE5vZGUsIFZlYzMsIENvbGxpZGVyQ29tcG9uZW50LCBSaWdpZEJvZHlDb21wb25lbnQsIEV2ZW50VG91Y2ggfSBmcm9tICdjYyc7XG5pbXBvcnQgeyBTaG9vdGluZ1BsYXllckNvbnRyb2xsZXIgfSBmcm9tICcuL1Nob290aW5nUGxheWVyQ29udHJvbGxlcic7XG5pbXBvcnQgeyBBY3Rpb25UeXBlIH0gZnJvbSAnLi9HYW1lRGVmaW5lcyc7XG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBfZGVjb3JhdG9yO1xuXG5AY2NjbGFzcygnSW5wdXRDb250cm9sJylcbmV4cG9ydCBjbGFzcyBJbnB1dENvbnRyb2wgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIEBwcm9wZXJ0eSh7dHlwZTogW05vZGVdfSlcbiAgICBwdWJsaWMgYWN0aW9uQnV0dG9uczogTm9kZVtdID0gW107XG4gICAgQHByb3BlcnR5KHt0eXBlOiBTaG9vdGluZ1BsYXllckNvbnRyb2xsZXJ9KVxuICAgIHB1YmxpYyBwbGF5ZXJDdHJsOiBTaG9vdGluZ1BsYXllckNvbnRyb2xsZXIgPSBudWxsO1xuXG4gICAgb25Mb2FkKCkge1xuXG4gICAgICAgIHRoaXMuYWN0aW9uQnV0dG9ucy5mb3JFYWNoKChidXR0b24pID0+IHtcbiAgICAgICAgICAgIGJ1dHRvbi5vbihOb2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCwgdGhpcy5vblRvdWNoU3RhcnQsIHRoaXMpO1xuICAgICAgICAgICAgYnV0dG9uLm9uKE5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCwgdGhpcy5vblRvdWNoRW5kLCB0aGlzKTtcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBvblRvdWNoU3RhcnQoZXZlbnQ6IEV2ZW50VG91Y2gpIHtcbiAgICAgICAgY29uc3Qgbm9kZSA9IGV2ZW50LmN1cnJlbnRUYXJnZXQgYXMgTm9kZTtcbiAgICAgICAgaWYgKG5vZGUpIHtcbiAgICAgICAgICAgIHN3aXRjaChub2RlLm5hbWUpIHtcbiAgICAgICAgICAgICAgICBjYXNlICdGb3J3YXJkJzogIFxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYXllckN0cmwuZG9BY3Rpb24oQWN0aW9uVHlwZS5Gb3J3YXJkLCB0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAnQmFja3dhcmQnOiAgXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGxheWVyQ3RybC5kb0FjdGlvbihBY3Rpb25UeXBlLkJhY2t3YXJkLCB0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAnTGVmdCc6ICBcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXJDdHJsLmRvQWN0aW9uKEFjdGlvblR5cGUuTGVmdCwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgJ1JpZ2h0JzogIFxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYXllckN0cmwuZG9BY3Rpb24oQWN0aW9uVHlwZS5SaWdodCwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgJ1Nob290JzogIFxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYXllckN0cmwuZG9BY3Rpb24oQWN0aW9uVHlwZS5TaG9vdCwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgJ1Rocm93R3JlbmFkZSc6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGxheWVyQ3RybC5kb0FjdGlvbihBY3Rpb25UeXBlLlRocm93R3JlbmFkZSwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25Ub3VjaEVuZChldmVudCkge1xuICAgICAgICBjb25zdCBub2RlID0gZXZlbnQuY3VycmVudFRhcmdldCBhcyBOb2RlO1xuICAgICAgICBpZiAobm9kZSkge1xuICAgICAgICAgICAgc3dpdGNoKG5vZGUubmFtZSkge1xuICAgICAgICAgICAgICAgIGNhc2UgJ0ZvcndhcmQnOiAgXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGxheWVyQ3RybC5kb0FjdGlvbihBY3Rpb25UeXBlLkZvcndhcmQsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAnQmFja3dhcmQnOiAgXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGxheWVyQ3RybC5kb0FjdGlvbihBY3Rpb25UeXBlLkJhY2t3YXJkLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgJ0xlZnQnOiAgXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGxheWVyQ3RybC5kb0FjdGlvbihBY3Rpb25UeXBlLkxlZnQsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAnUmlnaHQnOiAgXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGxheWVyQ3RybC5kb0FjdGlvbihBY3Rpb25UeXBlLlJpZ2h0LCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufSJdfQ==