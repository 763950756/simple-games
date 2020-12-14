System.register(["cce.code-quality.cr", "cc", "./ShootingPlayerController.js", "./GameDefines.js"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, Node, ShootingPlayerController, ActionType, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _temp, _crd, ccclass, property, InputControl;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

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

      ({
        ccclass,
        property
      } = _decorator);

      _export("InputControl", InputControl = (_dec = ccclass('InputControl'), _dec2 = property({
        type: [Node]
      }), _dec3 = property({
        type: _crd && ShootingPlayerController === void 0 ? (_reportPossibleCrUseOfShootingPlayerController({
          error: Error()
        }), ShootingPlayerController) : ShootingPlayerController
      }), _dec(_class = (_class2 = (_temp = class InputControl extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "actionButtons", _descriptor, this);

          _initializerDefineProperty(this, "playerCtrl", _descriptor2, this);
        }

        onLoad() {
          this.actionButtons.forEach(button => {
            button.on(Node.EventType.TOUCH_START, this.onTouchStart, this);
            button.on(Node.EventType.TOUCH_END, this.onTouchEnd, this);
          });
        }

        onTouchStart(event) {
          const node = event.currentTarget;

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
        }

        onTouchEnd(event) {
          const node = event.currentTarget;

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
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "actionButtons", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "playerCtrl", [_dec3], {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vVXNlcnMvbWFjL0Rvd25sb2Fkcy9leGFtcGxlLTNkLW1hc3Rlci9zaW1wbGUtZ2FtZXMvYXNzZXRzL3NpbXBsZS1zaG9vdGluZy9zY3JpcHRzL0lucHV0Q29udHJvbC50cyJdLCJuYW1lcyI6WyJfZGVjb3JhdG9yIiwiQ29tcG9uZW50IiwiTm9kZSIsIlNob290aW5nUGxheWVyQ29udHJvbGxlciIsIkFjdGlvblR5cGUiLCJjY2NsYXNzIiwicHJvcGVydHkiLCJJbnB1dENvbnRyb2wiLCJ0eXBlIiwib25Mb2FkIiwiYWN0aW9uQnV0dG9ucyIsImZvckVhY2giLCJidXR0b24iLCJvbiIsIkV2ZW50VHlwZSIsIlRPVUNIX1NUQVJUIiwib25Ub3VjaFN0YXJ0IiwiVE9VQ0hfRU5EIiwib25Ub3VjaEVuZCIsImV2ZW50Iiwibm9kZSIsImN1cnJlbnRUYXJnZXQiLCJuYW1lIiwicGxheWVyQ3RybCIsImRvQWN0aW9uIiwiRm9yd2FyZCIsIkJhY2t3YXJkIiwiTGVmdCIsIlJpZ2h0IiwiU2hvb3QiLCJUaHJvd0dyZW5hZGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQVNBLE1BQUFBLFUsT0FBQUEsVTtBQUFZQyxNQUFBQSxTLE9BQUFBLFM7QUFBV0MsTUFBQUEsSSxPQUFBQSxJOztBQUN2QkMsTUFBQUEsd0IsK0JBQUFBLHdCOztBQUNBQyxNQUFBQSxVLGtCQUFBQSxVOzs7Ozs7O09BQ0g7QUFBRUMsUUFBQUEsT0FBRjtBQUFXQyxRQUFBQTtBQUFYLE8sR0FBd0JOLFU7OzhCQUdqQk8sWSxXQURaRixPQUFPLENBQUMsY0FBRCxDLFVBRUhDLFFBQVEsQ0FBQztBQUFDRSxRQUFBQSxJQUFJLEVBQUUsQ0FBQ04sSUFBRDtBQUFQLE9BQUQsQyxVQUVSSSxRQUFRLENBQUM7QUFBQ0UsUUFBQUEsSUFBSTtBQUFBO0FBQUE7QUFBTCxPQUFELEMsb0NBSmIsTUFDYUQsWUFEYixTQUNrQ04sU0FEbEMsQ0FDNEM7QUFBQTtBQUFBOztBQUFBOztBQUFBO0FBQUE7O0FBTXhDUSxRQUFBQSxNQUFNLEdBQUc7QUFFTCxlQUFLQyxhQUFMLENBQW1CQyxPQUFuQixDQUE0QkMsTUFBRCxJQUFZO0FBQ25DQSxZQUFBQSxNQUFNLENBQUNDLEVBQVAsQ0FBVVgsSUFBSSxDQUFDWSxTQUFMLENBQWVDLFdBQXpCLEVBQXNDLEtBQUtDLFlBQTNDLEVBQXlELElBQXpEO0FBQ0FKLFlBQUFBLE1BQU0sQ0FBQ0MsRUFBUCxDQUFVWCxJQUFJLENBQUNZLFNBQUwsQ0FBZUcsU0FBekIsRUFBb0MsS0FBS0MsVUFBekMsRUFBcUQsSUFBckQ7QUFDSCxXQUhEO0FBSUg7O0FBRURGLFFBQUFBLFlBQVksQ0FBQ0csS0FBRCxFQUFvQjtBQUM1QixnQkFBTUMsSUFBSSxHQUFHRCxLQUFLLENBQUNFLGFBQW5COztBQUNBLGNBQUlELElBQUosRUFBVTtBQUNOLG9CQUFPQSxJQUFJLENBQUNFLElBQVo7QUFDSSxtQkFBSyxTQUFMO0FBQ0kscUJBQUtDLFVBQUwsQ0FBZ0JDLFFBQWhCLENBQXlCO0FBQUE7QUFBQSw4Q0FBV0MsT0FBcEMsRUFBNkMsSUFBN0M7QUFDQTs7QUFDSixtQkFBSyxVQUFMO0FBQ0kscUJBQUtGLFVBQUwsQ0FBZ0JDLFFBQWhCLENBQXlCO0FBQUE7QUFBQSw4Q0FBV0UsUUFBcEMsRUFBOEMsSUFBOUM7QUFDQTs7QUFDSixtQkFBSyxNQUFMO0FBQ0kscUJBQUtILFVBQUwsQ0FBZ0JDLFFBQWhCLENBQXlCO0FBQUE7QUFBQSw4Q0FBV0csSUFBcEMsRUFBMEMsSUFBMUM7QUFDQTs7QUFDSixtQkFBSyxPQUFMO0FBQ0kscUJBQUtKLFVBQUwsQ0FBZ0JDLFFBQWhCLENBQXlCO0FBQUE7QUFBQSw4Q0FBV0ksS0FBcEMsRUFBMkMsSUFBM0M7QUFDQTs7QUFDSixtQkFBSyxPQUFMO0FBQ0kscUJBQUtMLFVBQUwsQ0FBZ0JDLFFBQWhCLENBQXlCO0FBQUE7QUFBQSw4Q0FBV0ssS0FBcEMsRUFBMkMsSUFBM0M7QUFDQTs7QUFDSixtQkFBSyxjQUFMO0FBQ0kscUJBQUtOLFVBQUwsQ0FBZ0JDLFFBQWhCLENBQXlCO0FBQUE7QUFBQSw4Q0FBV00sWUFBcEMsRUFBa0QsSUFBbEQ7QUFDQTtBQWxCUjtBQW9CSDtBQUNKOztBQUVEWixRQUFBQSxVQUFVLENBQUNDLEtBQUQsRUFBUTtBQUNkLGdCQUFNQyxJQUFJLEdBQUdELEtBQUssQ0FBQ0UsYUFBbkI7O0FBQ0EsY0FBSUQsSUFBSixFQUFVO0FBQ04sb0JBQU9BLElBQUksQ0FBQ0UsSUFBWjtBQUNJLG1CQUFLLFNBQUw7QUFDSSxxQkFBS0MsVUFBTCxDQUFnQkMsUUFBaEIsQ0FBeUI7QUFBQTtBQUFBLDhDQUFXQyxPQUFwQyxFQUE2QyxLQUE3QztBQUNBOztBQUNKLG1CQUFLLFVBQUw7QUFDSSxxQkFBS0YsVUFBTCxDQUFnQkMsUUFBaEIsQ0FBeUI7QUFBQTtBQUFBLDhDQUFXRSxRQUFwQyxFQUE4QyxLQUE5QztBQUNBOztBQUNKLG1CQUFLLE1BQUw7QUFDSSxxQkFBS0gsVUFBTCxDQUFnQkMsUUFBaEIsQ0FBeUI7QUFBQTtBQUFBLDhDQUFXRyxJQUFwQyxFQUEwQyxLQUExQztBQUNBOztBQUNKLG1CQUFLLE9BQUw7QUFDSSxxQkFBS0osVUFBTCxDQUFnQkMsUUFBaEIsQ0FBeUI7QUFBQTtBQUFBLDhDQUFXSSxLQUFwQyxFQUEyQyxLQUEzQztBQUNBO0FBWlI7QUFjSDtBQUNKOztBQTFEdUMsTzs7Ozs7aUJBRVQsRTs7Ozs7OztpQkFFZSxJIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgX2RlY29yYXRvciwgQ29tcG9uZW50LCBOb2RlLCBWZWMzLCBDb2xsaWRlckNvbXBvbmVudCwgUmlnaWRCb2R5Q29tcG9uZW50LCBFdmVudFRvdWNoIH0gZnJvbSAnY2MnO1xuaW1wb3J0IHsgU2hvb3RpbmdQbGF5ZXJDb250cm9sbGVyIH0gZnJvbSAnLi9TaG9vdGluZ1BsYXllckNvbnRyb2xsZXInO1xuaW1wb3J0IHsgQWN0aW9uVHlwZSB9IGZyb20gJy4vR2FtZURlZmluZXMnO1xuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gX2RlY29yYXRvcjtcblxuQGNjY2xhc3MoJ0lucHV0Q29udHJvbCcpXG5leHBvcnQgY2xhc3MgSW5wdXRDb250cm9sIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBAcHJvcGVydHkoe3R5cGU6IFtOb2RlXX0pXG4gICAgcHVibGljIGFjdGlvbkJ1dHRvbnM6IE5vZGVbXSA9IFtdO1xuICAgIEBwcm9wZXJ0eSh7dHlwZTogU2hvb3RpbmdQbGF5ZXJDb250cm9sbGVyfSlcbiAgICBwdWJsaWMgcGxheWVyQ3RybDogU2hvb3RpbmdQbGF5ZXJDb250cm9sbGVyID0gbnVsbDtcblxuICAgIG9uTG9hZCgpIHtcblxuICAgICAgICB0aGlzLmFjdGlvbkJ1dHRvbnMuZm9yRWFjaCgoYnV0dG9uKSA9PiB7XG4gICAgICAgICAgICBidXR0b24ub24oTm9kZS5FdmVudFR5cGUuVE9VQ0hfU1RBUlQsIHRoaXMub25Ub3VjaFN0YXJ0LCB0aGlzKTtcbiAgICAgICAgICAgIGJ1dHRvbi5vbihOb2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsIHRoaXMub25Ub3VjaEVuZCwgdGhpcyk7XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgb25Ub3VjaFN0YXJ0KGV2ZW50OiBFdmVudFRvdWNoKSB7XG4gICAgICAgIGNvbnN0IG5vZGUgPSBldmVudC5jdXJyZW50VGFyZ2V0IGFzIE5vZGU7XG4gICAgICAgIGlmIChub2RlKSB7XG4gICAgICAgICAgICBzd2l0Y2gobm9kZS5uYW1lKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAnRm9yd2FyZCc6ICBcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXJDdHJsLmRvQWN0aW9uKEFjdGlvblR5cGUuRm9yd2FyZCwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgJ0JhY2t3YXJkJzogIFxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYXllckN0cmwuZG9BY3Rpb24oQWN0aW9uVHlwZS5CYWNrd2FyZCwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgJ0xlZnQnOiAgXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGxheWVyQ3RybC5kb0FjdGlvbihBY3Rpb25UeXBlLkxlZnQsIHRydWUpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlICdSaWdodCc6ICBcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXJDdHJsLmRvQWN0aW9uKEFjdGlvblR5cGUuUmlnaHQsIHRydWUpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlICdTaG9vdCc6ICBcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXJDdHJsLmRvQWN0aW9uKEFjdGlvblR5cGUuU2hvb3QsIHRydWUpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlICdUaHJvd0dyZW5hZGUnOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYXllckN0cmwuZG9BY3Rpb24oQWN0aW9uVHlwZS5UaHJvd0dyZW5hZGUsIHRydWUpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uVG91Y2hFbmQoZXZlbnQpIHtcbiAgICAgICAgY29uc3Qgbm9kZSA9IGV2ZW50LmN1cnJlbnRUYXJnZXQgYXMgTm9kZTtcbiAgICAgICAgaWYgKG5vZGUpIHtcbiAgICAgICAgICAgIHN3aXRjaChub2RlLm5hbWUpIHtcbiAgICAgICAgICAgICAgICBjYXNlICdGb3J3YXJkJzogIFxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYXllckN0cmwuZG9BY3Rpb24oQWN0aW9uVHlwZS5Gb3J3YXJkLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgJ0JhY2t3YXJkJzogIFxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYXllckN0cmwuZG9BY3Rpb24oQWN0aW9uVHlwZS5CYWNrd2FyZCwgZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlICdMZWZ0JzogIFxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYXllckN0cmwuZG9BY3Rpb24oQWN0aW9uVHlwZS5MZWZ0LCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgJ1JpZ2h0JzogIFxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYXllckN0cmwuZG9BY3Rpb24oQWN0aW9uVHlwZS5SaWdodCwgZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn0iXX0=