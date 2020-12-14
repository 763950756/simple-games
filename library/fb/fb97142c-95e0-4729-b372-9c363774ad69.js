System.register(["cce.code-quality.cr", "cc", "./GameDefines.js"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, SkeletalAnimationComponent, Vec3, CCFloat, systemEvent, SystemEvent, tween, AnimationComponent, AudioClip, AudioSourceComponent, GameDefines, GameState, _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _temp, _crd, ccclass, property, tempVec3_a, MoveAction, MoveState, cocosAnim, PlayerController;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfGameDefines(extras) {
    _reporterNs.report("GameDefines", "./GameDefines", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameState(extras) {
    _reporterNs.report("GameState", "./GameDefines", _context.meta, extras);
  }

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
    _temp: void 0,
    MoveAction: void 0,
    MoveState: void 0
  });

  return {
    setters: [function (_cceCodeQualityCr) {
      _reporterNs = _cceCodeQualityCr;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      SkeletalAnimationComponent = _cc.SkeletalAnimationComponent;
      Vec3 = _cc.Vec3;
      CCFloat = _cc.CCFloat;
      systemEvent = _cc.systemEvent;
      SystemEvent = _cc.SystemEvent;
      tween = _cc.tween;
      AnimationComponent = _cc.AnimationComponent;
      AudioClip = _cc.AudioClip;
      AudioSourceComponent = _cc.AudioSourceComponent;
    }, function (_GameDefinesJs) {
      GameDefines = _GameDefinesJs.GameDefines;
      GameState = _GameDefinesJs.GameState;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "fb971QsleBHKbNynDY3dK1p", "PlayerController", _context.meta);

      ccclass = _decorator.ccclass;
      property = _decorator.property;
      tempVec3_a = new Vec3();

      (function (MoveAction) {
        MoveAction[MoveAction["LEFT"] = 0] = "LEFT";
        MoveAction[MoveAction["RIGHT"] = 1] = "RIGHT";
        MoveAction[MoveAction["UP"] = 2] = "UP";
      })(MoveAction || (MoveAction = {}));

      (function (MoveState) {
        MoveState[MoveState["RUNNING"] = 0] = "RUNNING";
        MoveState[MoveState["MOVING_LEFT"] = 1] = "MOVING_LEFT";
        MoveState[MoveState["MOVING_RIGHT"] = 2] = "MOVING_RIGHT";
        MoveState[MoveState["JUMPING"] = 3] = "JUMPING";
      })(MoveState || (MoveState = {}));

      cocosAnim = {
        idle: 'cocos_anim_idle',
        run: 'cocos_anim_run',
        jump: 'cocos_anim_jump'
      };

      _export("PlayerController", PlayerController = (_dec = ccclass('PlayerController'), _dec2 = property({
        type: CCFloat
      }), _dec3 = property({
        type: SkeletalAnimationComponent
      }), _dec4 = property({
        type: AudioClip
      }), _dec5 = property({
        type: AudioClip
      }), _dec(_class = (_class2 = (_temp = /*#__PURE__*/function (_Component) {
        _inheritsLoose(PlayerController, _Component);

        function PlayerController() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_this, "speed", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "playerAnimComp", _descriptor2, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "coinAC", _descriptor3, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "jumpAC", _descriptor4, _assertThisInitialized(_this));

          _this._pressedX = 0;
          _this._pressedY = 0;
          _this._moveState = MoveState.RUNNING;
          _this._gameState = (_crd && GameState === void 0 ? (_reportPossibleCrUseOfGameState({
            error: Error()
          }), GameState) : GameState).INIT;
          _this._audioSourceComp = null;
          return _this;
        }

        var _proto = PlayerController.prototype;

        _proto.start = function start() {
          // Your initialization goes here.
          this._audioSourceComp = this.getComponent(AudioSourceComponent);
        };

        _proto.onGameStateChanged = function onGameStateChanged(state) {
          switch (state) {
            case (_crd && GameState === void 0 ? (_reportPossibleCrUseOfGameState({
              error: Error()
            }), GameState) : GameState).INIT:
              this.onGameInit();
              break;

            case (_crd && GameState === void 0 ? (_reportPossibleCrUseOfGameState({
              error: Error()
            }), GameState) : GameState).PLAYING:
              this.onGamePlaying();
              break;

            case (_crd && GameState === void 0 ? (_reportPossibleCrUseOfGameState({
              error: Error()
            }), GameState) : GameState).END:
              this.onGameEnd();
              break;
          }

          this._gameState = state;
        };

        _proto.onGameInit = function onGameInit() {
          this.playerAnimComp.play(cocosAnim.idle);
          this.node.setPosition(tempVec3_a.set(0, 0, 0));
        };

        _proto.onGamePlaying = function onGamePlaying() {
          this._moveState = MoveState.RUNNING;
          this.playerAnimComp.play(cocosAnim.run);
          var jumpState = this.playerAnimComp.getState(cocosAnim.jump);
          jumpState.on(AnimationComponent.EventType.FINISHED, this.onJumpEnd, this);
          systemEvent.on(SystemEvent.EventType.TOUCH_START, this.onViewTouchStart, this);
          systemEvent.on(SystemEvent.EventType.TOUCH_END, this.onViewTouchEnd, this);
        };

        _proto.onGameEnd = function onGameEnd() {
          var jumpState = this.playerAnimComp.getState(cocosAnim.jump);
          jumpState.off(AnimationComponent.EventType.FINISHED, this.onJumpEnd, this);
          systemEvent.off(SystemEvent.EventType.TOUCH_START, this.onViewTouchStart, this);
          systemEvent.off(SystemEvent.EventType.TOUCH_END, this.onViewTouchEnd, this);
        };

        _proto.onTriggerEnter = function onTriggerEnter(event) {
          var triggerNode = event.otherCollider.node;

          if (triggerNode.name === 'Coin') {
            this._audioSourceComp.playOneShot(this.coinAC);

            if (this.onTriggerCoin) {
              this.onTriggerCoin(triggerNode);
            }
          } else if (triggerNode.name === 'RoadBlock') {
            var animComp = triggerNode.getComponent(AnimationComponent);
            var downName = 'block_down';
            var state = animComp.getState(downName);

            if (!state.isPlaying) {
              animComp.play(downName);
            }

            if (this.onTriggerBlock) {
              this.onTriggerBlock(triggerNode);
            }
          }
        };

        _proto.onViewTouchStart = function onViewTouchStart(event) {
          var location = event.getLocation(); // 获取节点坐标

          this._pressedX = location.x;
          this._pressedY = location.y;
        };

        _proto.onViewTouchEnd = function onViewTouchEnd(event) {
          var touchPoint = event.getLocation();
          var endX = this._pressedX - touchPoint.x;
          var endY = this._pressedY - touchPoint.y;

          if (Math.abs(endX) > Math.abs(endY)) {
            //手势向左右
            //判断向左还是向右 
            if (endX > 0) {
              // left
              this.move(MoveAction.LEFT);
            } else {
              // right
              this.move(MoveAction.RIGHT);
            }
          } else {
            //手势向上下
            //判断手势向上还是向下
            if (endY > 0) {// down
            } else {
              // up
              this.move(MoveAction.UP);
            }
          }
        };

        _proto.move = function move(moveAction) {
          var _this2 = this;

          switch (moveAction) {
            case MoveAction.LEFT:
              if (this._moveState === MoveState.RUNNING) {
                tween(this.node).by(0.5, {
                  position: new Vec3((_crd && GameDefines === void 0 ? (_reportPossibleCrUseOfGameDefines({
                    error: Error()
                  }), GameDefines) : GameDefines).leftLineX, 0, 0)
                }, {
                  onComplete: function onComplete() {
                    _this2._moveState = MoveState.RUNNING;
                  }
                }).start();
                this._moveState = MoveState.MOVING_LEFT;
              }

              break;

            case MoveAction.RIGHT:
              if (this._moveState === MoveState.RUNNING) {
                tween(this.node).by(0.5, {
                  position: new Vec3((_crd && GameDefines === void 0 ? (_reportPossibleCrUseOfGameDefines({
                    error: Error()
                  }), GameDefines) : GameDefines).rightLineX, 0, 0)
                }, {
                  onComplete: function onComplete() {
                    _this2._moveState = MoveState.RUNNING;
                  }
                }).start();
                this._moveState = MoveState.MOVING_RIGHT;
              }

              break;

            case MoveAction.UP:
              if (this._moveState === MoveState.RUNNING) {
                this._audioSourceComp.playOneShot(this.jumpAC);

                this.playerAnimComp.crossFade(cocosAnim.jump);
                var state = this.playerAnimComp.getState(cocosAnim.jump);
                state.speed = 1.5;
                tween(this.node).by(0.75, {
                  position: new Vec3(0, 0, 10)
                }, {
                  onComplete: function onComplete() {// this._moveState = MoveState.RUNNING;
                  }
                }).start();
                this._moveState = MoveState.JUMPING;
              }

              break;
          }
        };

        _proto.onJumpEnd = function onJumpEnd(type, state) {
          // const jumpState = this.playerAnimComp.getState(cocosAnim.jump);
          // jumpState.off(AnimationComponent.EventType.LASTFRAME, this.onJumpEnd, this);
          if ((state === null || state === void 0 ? void 0 : state.name) === cocosAnim.jump) {
            this.playerAnimComp.play(cocosAnim.run);
            this._moveState = MoveState.RUNNING;
          }
        };

        _proto.update = function update(deltaTime) {
          if (this._gameState === (_crd && GameState === void 0 ? (_reportPossibleCrUseOfGameState({
            error: Error()
          }), GameState) : GameState).PLAYING) {
            if (this._moveState === MoveState.JUMPING) {// this.node.translate(tempVec3_a.set(0, 0, this.speed * 1.5 * deltaTime));
            } else {
              this.node.translate(tempVec3_a.set(0, 0, this.speed * deltaTime));
            }
          }
        };

        _proto.onDestroy = function onDestroy() {
          systemEvent.off(SystemEvent.EventType.TOUCH_START, this.onViewTouchStart, this);
          systemEvent.off(SystemEvent.EventType.TOUCH_END, this.onViewTouchEnd, this);
        };

        return PlayerController;
      }(Component), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "speed", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 1;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "playerAnimComp", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "coinAC", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "jumpAC", [_dec5], {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vVXNlcnMvbWFjL0Rvd25sb2Fkcy9leGFtcGxlLTNkLW1hc3Rlci9zaW1wbGUtZ2FtZXMvYXNzZXRzL3NpbXBsZS1ydW4vc2NyaXB0cy9QbGF5ZXJDb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbIl9kZWNvcmF0b3IiLCJDb21wb25lbnQiLCJTa2VsZXRhbEFuaW1hdGlvbkNvbXBvbmVudCIsIlZlYzMiLCJDQ0Zsb2F0Iiwic3lzdGVtRXZlbnQiLCJTeXN0ZW1FdmVudCIsInR3ZWVuIiwiQW5pbWF0aW9uQ29tcG9uZW50IiwiQXVkaW9DbGlwIiwiQXVkaW9Tb3VyY2VDb21wb25lbnQiLCJHYW1lRGVmaW5lcyIsIkdhbWVTdGF0ZSIsImNjY2xhc3MiLCJwcm9wZXJ0eSIsInRlbXBWZWMzX2EiLCJNb3ZlQWN0aW9uIiwiTW92ZVN0YXRlIiwiY29jb3NBbmltIiwiaWRsZSIsInJ1biIsImp1bXAiLCJQbGF5ZXJDb250cm9sbGVyIiwidHlwZSIsIl9wcmVzc2VkWCIsIl9wcmVzc2VkWSIsIl9tb3ZlU3RhdGUiLCJSVU5OSU5HIiwiX2dhbWVTdGF0ZSIsIklOSVQiLCJfYXVkaW9Tb3VyY2VDb21wIiwic3RhcnQiLCJnZXRDb21wb25lbnQiLCJvbkdhbWVTdGF0ZUNoYW5nZWQiLCJzdGF0ZSIsIm9uR2FtZUluaXQiLCJQTEFZSU5HIiwib25HYW1lUGxheWluZyIsIkVORCIsIm9uR2FtZUVuZCIsInBsYXllckFuaW1Db21wIiwicGxheSIsIm5vZGUiLCJzZXRQb3NpdGlvbiIsInNldCIsImp1bXBTdGF0ZSIsImdldFN0YXRlIiwib24iLCJFdmVudFR5cGUiLCJGSU5JU0hFRCIsIm9uSnVtcEVuZCIsIlRPVUNIX1NUQVJUIiwib25WaWV3VG91Y2hTdGFydCIsIlRPVUNIX0VORCIsIm9uVmlld1RvdWNoRW5kIiwib2ZmIiwib25UcmlnZ2VyRW50ZXIiLCJldmVudCIsInRyaWdnZXJOb2RlIiwib3RoZXJDb2xsaWRlciIsIm5hbWUiLCJwbGF5T25lU2hvdCIsImNvaW5BQyIsIm9uVHJpZ2dlckNvaW4iLCJhbmltQ29tcCIsImRvd25OYW1lIiwiaXNQbGF5aW5nIiwib25UcmlnZ2VyQmxvY2siLCJsb2NhdGlvbiIsImdldExvY2F0aW9uIiwieCIsInkiLCJ0b3VjaFBvaW50IiwiZW5kWCIsImVuZFkiLCJNYXRoIiwiYWJzIiwibW92ZSIsIkxFRlQiLCJSSUdIVCIsIlVQIiwibW92ZUFjdGlvbiIsImJ5IiwicG9zaXRpb24iLCJsZWZ0TGluZVgiLCJvbkNvbXBsZXRlIiwiTU9WSU5HX0xFRlQiLCJyaWdodExpbmVYIiwiTU9WSU5HX1JJR0hUIiwianVtcEFDIiwiY3Jvc3NGYWRlIiwic3BlZWQiLCJKVU1QSU5HIiwidXBkYXRlIiwiZGVsdGFUaW1lIiwidHJhbnNsYXRlIiwib25EZXN0cm95Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBU0EsTUFBQUEsVSxPQUFBQSxVO0FBQVlDLE1BQUFBLFMsT0FBQUEsUztBQUFpQkMsTUFBQUEsMEIsT0FBQUEsMEI7QUFBNEJDLE1BQUFBLEksT0FBQUEsSTtBQUFNQyxNQUFBQSxPLE9BQUFBLE87QUFBU0MsTUFBQUEsVyxPQUFBQSxXO0FBQWFDLE1BQUFBLFcsT0FBQUEsVztBQUFhQyxNQUFBQSxLLE9BQUFBLEs7QUFBT0MsTUFBQUEsa0IsT0FBQUEsa0I7QUFBNkRDLE1BQUFBLFMsT0FBQUEsUztBQUFXQyxNQUFBQSxvQixPQUFBQSxvQjs7QUFDbExDLE1BQUFBLFcsa0JBQUFBLFc7QUFBYUMsTUFBQUEsUyxrQkFBQUEsUzs7Ozs7OztBQUNiQyxNQUFBQSxPLEdBQXNCYixVLENBQXRCYSxPO0FBQVNDLE1BQUFBLFEsR0FBYWQsVSxDQUFiYyxRO0FBRVhDLE1BQUFBLFUsR0FBYSxJQUFJWixJQUFKLEU7O2lCQUVkYSxVO0FBQUFBLFFBQUFBLFUsQ0FBQUEsVTtBQUFBQSxRQUFBQSxVLENBQUFBLFU7QUFBQUEsUUFBQUEsVSxDQUFBQSxVO1NBQUFBLFUsS0FB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QWxCLEVBQXFCLEtBQUsrQyxLQUFMLEdBQWFHLFNBQWxDLENBQXBCO0FBQ0g7QUFDSjtBQUNKLFM7O2VBRURFLFMsR0FBQSxxQkFBWTtBQUNSM0YsVUFBQUEsV0FBVyxDQUFDa0QsR0FBWixDQUFnQmpELFdBQVcsQ0FBQzBDLFNBQVosQ0FBc0JHLFdBQXRDLEVBQW1ELEtBQUtDLGdCQUF4RCxFQUEwRSxJQUExRTtBQUNBL0MsVUFBQUEsV0FBVyxDQUFDa0QsR0FBWixDQUFnQmpELFdBQVcsQ0FBQzBDLFNBQVosQ0FBc0JLLFNBQXRDLEVBQWlELEtBQUtDLGNBQXRELEVBQXNFLElBQXRFO0FBQ0gsUzs7O1FBekxpQ3JELFM7Ozs7O2lCQUdYLEM7Ozs7Ozs7aUJBRzZCLEk7Ozs7Ozs7aUJBRXpCLEk7Ozs7Ozs7aUJBRUEsSSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IF9kZWNvcmF0b3IsIENvbXBvbmVudCwgTm9kZSwgU2tlbGV0YWxBbmltYXRpb25Db21wb25lbnQsIFZlYzMsIENDRmxvYXQsIHN5c3RlbUV2ZW50LCBTeXN0ZW1FdmVudCwgdHdlZW4sIEFuaW1hdGlvbkNvbXBvbmVudCwgVG91Y2gsIENvbGxpZGVyQ29tcG9uZW50LCBJVHJpZ2dlckV2ZW50LCBBdWRpb0NsaXAsIEF1ZGlvU291cmNlQ29tcG9uZW50IH0gZnJvbSAnY2MnO1xuaW1wb3J0IHtHYW1lRGVmaW5lcywgR2FtZVN0YXRlfSBmcm9tICcuL0dhbWVEZWZpbmVzJztcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IF9kZWNvcmF0b3I7XG5cbmNvbnN0IHRlbXBWZWMzX2EgPSBuZXcgVmVjMygpO1xuXG5lbnVtIE1vdmVBY3Rpb24ge1xuICAgIExFRlQsXG4gICAgUklHSFQsXG4gICAgVVAsXG59XG5cbmVudW0gTW92ZVN0YXRlIHtcbiAgICBSVU5OSU5HLFxuICAgIE1PVklOR19MRUZULFxuICAgIE1PVklOR19SSUdIVCxcbiAgICBKVU1QSU5HLFxufVxuXG5jb25zdCBjb2Nvc0FuaW0gPSB7XG4gICAgaWRsZTogJ2NvY29zX2FuaW1faWRsZScsXG4gICAgcnVuOiAnY29jb3NfYW5pbV9ydW4nLFxuICAgIGp1bXA6ICdjb2Nvc19hbmltX2p1bXAnLFxufVxuXG5AY2NjbGFzcygnUGxheWVyQ29udHJvbGxlcicpXG5leHBvcnQgY2xhc3MgUGxheWVyQ29udHJvbGxlciBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgICBAcHJvcGVydHkoe3R5cGU6IENDRmxvYXR9KVxuICAgIHB1YmxpYyBzcGVlZDogbnVtYmVyID0gMTtcblxuICAgIEBwcm9wZXJ0eSh7dHlwZTogU2tlbGV0YWxBbmltYXRpb25Db21wb25lbnR9KVxuICAgIHB1YmxpYyBwbGF5ZXJBbmltQ29tcDogU2tlbGV0YWxBbmltYXRpb25Db21wb25lbnQgPSBudWxsO1xuICAgIEBwcm9wZXJ0eSh7dHlwZTogQXVkaW9DbGlwfSlcbiAgICBwdWJsaWMgY29pbkFDOiBBdWRpb0NsaXAgPSBudWxsO1xuICAgIEBwcm9wZXJ0eSh7dHlwZTogQXVkaW9DbGlwfSlcbiAgICBwdWJsaWMganVtcEFDOiBBdWRpb0NsaXAgPSBudWxsO1xuXG5cbiAgICBwdWJsaWMgb25UcmlnZ2VyQ29pbjogKGNvaW5Ob2RlOiBOb2RlKSA9PiB2b2lkO1xuICAgIHB1YmxpYyBvblRyaWdnZXJCbG9jazogKHJvYWRCbG9ja05vZGU6IE5vZGUpID0+IHZvaWQ7XG5cbiAgICBwcml2YXRlIF9wcmVzc2VkWCA9IDA7XG4gICAgcHJpdmF0ZSBfcHJlc3NlZFkgPSAwO1xuXG4gICAgcHJpdmF0ZSBfbW92ZVN0YXRlOiBNb3ZlU3RhdGUgPSBNb3ZlU3RhdGUuUlVOTklORztcbiAgICBwcml2YXRlIF9nYW1lU3RhdGU6IEdhbWVTdGF0ZSA9IEdhbWVTdGF0ZS5JTklUO1xuXG4gICAgcHJpdmF0ZSBfYXVkaW9Tb3VyY2VDb21wOiBBdWRpb1NvdXJjZUNvbXBvbmVudCA9IG51bGw7XG5cbiAgICBzdGFydCAoKSB7XG4gICAgICAgIC8vIFlvdXIgaW5pdGlhbGl6YXRpb24gZ29lcyBoZXJlLlxuICAgICAgICB0aGlzLl9hdWRpb1NvdXJjZUNvbXAgPSB0aGlzLmdldENvbXBvbmVudChBdWRpb1NvdXJjZUNvbXBvbmVudCk7XG4gICAgfVxuXG4gICAgb25HYW1lU3RhdGVDaGFuZ2VkKHN0YXRlOiBHYW1lU3RhdGUpIHtcbiAgICAgICAgc3dpdGNoKHN0YXRlKSB7XG4gICAgICAgICAgICBjYXNlIEdhbWVTdGF0ZS5JTklUOlxuICAgICAgICAgICAgICAgIHRoaXMub25HYW1lSW5pdCgpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBHYW1lU3RhdGUuUExBWUlORzpcbiAgICAgICAgICAgICAgICB0aGlzLm9uR2FtZVBsYXlpbmcoKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgR2FtZVN0YXRlLkVORDpcbiAgICAgICAgICAgICAgICB0aGlzLm9uR2FtZUVuZCgpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5fZ2FtZVN0YXRlID0gc3RhdGU7XG4gICAgfVxuXG4gICAgb25HYW1lSW5pdCgpIHtcbiAgICAgICAgdGhpcy5wbGF5ZXJBbmltQ29tcC5wbGF5KGNvY29zQW5pbS5pZGxlKTtcbiAgICAgICAgdGhpcy5ub2RlLnNldFBvc2l0aW9uKHRlbXBWZWMzX2Euc2V0KDAsIDAsIDApKTtcbiAgICB9XG5cbiAgICBvbkdhbWVQbGF5aW5nKCkge1xuICAgICAgICB0aGlzLl9tb3ZlU3RhdGUgPSBNb3ZlU3RhdGUuUlVOTklORztcbiAgICAgICAgdGhpcy5wbGF5ZXJBbmltQ29tcC5wbGF5KGNvY29zQW5pbS5ydW4pO1xuXG4gICAgICAgIGNvbnN0IGp1bXBTdGF0ZSA9IHRoaXMucGxheWVyQW5pbUNvbXAuZ2V0U3RhdGUoY29jb3NBbmltLmp1bXApO1xuICAgICAgICBqdW1wU3RhdGUub24oQW5pbWF0aW9uQ29tcG9uZW50LkV2ZW50VHlwZS5GSU5JU0hFRCwgdGhpcy5vbkp1bXBFbmQsIHRoaXMpO1xuXG4gICAgICAgIHN5c3RlbUV2ZW50Lm9uKFN5c3RlbUV2ZW50LkV2ZW50VHlwZS5UT1VDSF9TVEFSVCwgdGhpcy5vblZpZXdUb3VjaFN0YXJ0LCB0aGlzKTtcbiAgICAgICAgc3lzdGVtRXZlbnQub24oU3lzdGVtRXZlbnQuRXZlbnRUeXBlLlRPVUNIX0VORCwgdGhpcy5vblZpZXdUb3VjaEVuZCwgdGhpcyk7XG4gICAgfVxuXG4gICAgb25HYW1lRW5kKCkge1xuICAgICAgICBjb25zdCBqdW1wU3RhdGUgPSB0aGlzLnBsYXllckFuaW1Db21wLmdldFN0YXRlKGNvY29zQW5pbS5qdW1wKTtcbiAgICAgICAganVtcFN0YXRlLm9mZihBbmltYXRpb25Db21wb25lbnQuRXZlbnRUeXBlLkZJTklTSEVELCB0aGlzLm9uSnVtcEVuZCwgdGhpcyk7XG5cbiAgICAgICAgc3lzdGVtRXZlbnQub2ZmKFN5c3RlbUV2ZW50LkV2ZW50VHlwZS5UT1VDSF9TVEFSVCwgdGhpcy5vblZpZXdUb3VjaFN0YXJ0LCB0aGlzKTtcbiAgICAgICAgc3lzdGVtRXZlbnQub2ZmKFN5c3RlbUV2ZW50LkV2ZW50VHlwZS5UT1VDSF9FTkQsIHRoaXMub25WaWV3VG91Y2hFbmQsIHRoaXMpO1xuICAgIH1cblxuICAgIG9uVHJpZ2dlckVudGVyKGV2ZW50OiBJVHJpZ2dlckV2ZW50KSB7XG4gICAgICAgIGNvbnN0IHRyaWdnZXJOb2RlOiBOb2RlID0gZXZlbnQub3RoZXJDb2xsaWRlci5ub2RlO1xuICAgICAgICBpZiAodHJpZ2dlck5vZGUubmFtZSA9PT0gJ0NvaW4nKSB7XG4gICAgICAgICAgICB0aGlzLl9hdWRpb1NvdXJjZUNvbXAucGxheU9uZVNob3QodGhpcy5jb2luQUMpO1xuICAgICAgICAgICAgaWYgKHRoaXMub25UcmlnZ2VyQ29pbikge1xuICAgICAgICAgICAgICAgIHRoaXMub25UcmlnZ2VyQ29pbih0cmlnZ2VyTm9kZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAodHJpZ2dlck5vZGUubmFtZSA9PT0gJ1JvYWRCbG9jaycpIHtcbiAgICAgICAgICAgIGNvbnN0IGFuaW1Db21wID0gdHJpZ2dlck5vZGUuZ2V0Q29tcG9uZW50KEFuaW1hdGlvbkNvbXBvbmVudCk7XG4gICAgICAgICAgICBjb25zdCBkb3duTmFtZSA9ICdibG9ja19kb3duJztcbiAgICAgICAgICAgIGNvbnN0IHN0YXRlID0gYW5pbUNvbXAuZ2V0U3RhdGUoZG93bk5hbWUpO1xuICAgICAgICAgICAgaWYgKCFzdGF0ZS5pc1BsYXlpbmcpIHtcbiAgICAgICAgICAgICAgICBhbmltQ29tcC5wbGF5KGRvd25OYW1lKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLm9uVHJpZ2dlckJsb2NrKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5vblRyaWdnZXJCbG9jayh0cmlnZ2VyTm9kZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvblZpZXdUb3VjaFN0YXJ0KGV2ZW50OiBUb3VjaCkge1xuICAgICAgICBsZXQgbG9jYXRpb24gPSBldmVudC5nZXRMb2NhdGlvbigpOy8vIOiOt+WPluiKgueCueWdkOagh1xuICAgICAgICB0aGlzLl9wcmVzc2VkWCA9IGxvY2F0aW9uLng7XG4gICAgICAgIHRoaXMuX3ByZXNzZWRZID0gbG9jYXRpb24ueTtcbiAgICB9XG5cbiAgICBvblZpZXdUb3VjaEVuZChldmVudDogVG91Y2gpIHtcbiAgICAgICAgbGV0IHRvdWNoUG9pbnQgPSBldmVudC5nZXRMb2NhdGlvbigpO1xuICAgICAgICBsZXQgZW5kWCA9IHRoaXMuX3ByZXNzZWRYIC0gdG91Y2hQb2ludC54O1xuICAgICAgICBsZXQgZW5kWSA9IHRoaXMuX3ByZXNzZWRZIC0gdG91Y2hQb2ludC55O1xuICAgIFxuICAgICAgICBpZiAoTWF0aC5hYnMoZW5kWCkgPiBNYXRoLmFicyhlbmRZKSl7XG4gICAgICAgICAgICAvL+aJi+WKv+WQkeW3puWPs1xuICAgICAgICAgICAgLy/liKTmlq3lkJHlt6bov5jmmK/lkJHlj7MgXG4gICAgICAgICAgICBpZiAoZW5kWCAgPiAwKXtcbiAgICAgICAgICAgICAgICAvLyBsZWZ0XG4gICAgICAgICAgICAgICAgdGhpcy5tb3ZlKE1vdmVBY3Rpb24uTEVGVCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIHJpZ2h0XG4gICAgICAgICAgICAgICAgdGhpcy5tb3ZlKE1vdmVBY3Rpb24uUklHSFQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy/miYvlir/lkJHkuIrkuItcbiAgICAgICAgICAgIC8v5Yik5pat5omL5Yq/5ZCR5LiK6L+Y5piv5ZCR5LiLXG4gICAgICAgICAgICBpZiAoZW5kWSAgPiAwKXtcbiAgICAgICAgICAgICAgICAvLyBkb3duXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIHVwXG4gICAgICAgICAgICAgICAgdGhpcy5tb3ZlKE1vdmVBY3Rpb24uVVApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgfVxuICAgIH1cblxuICAgIG1vdmUobW92ZUFjdGlvbjogTW92ZUFjdGlvbikge1xuICAgICAgICBzd2l0Y2ggKG1vdmVBY3Rpb24pIHtcbiAgICAgICAgICAgIGNhc2UgTW92ZUFjdGlvbi5MRUZUOlxuICAgICAgICAgICAgICAgIGlmICh0aGlzLl9tb3ZlU3RhdGUgPT09IE1vdmVTdGF0ZS5SVU5OSU5HKSB7XG4gICAgICAgICAgICAgICAgICAgIHR3ZWVuKHRoaXMubm9kZSlcbiAgICAgICAgICAgICAgICAgICAgICAgIC5ieSgwLjUsIHtwb3NpdGlvbjogbmV3IFZlYzMoR2FtZURlZmluZXMubGVmdExpbmVYLCAwLCAwKX0sIHtvbkNvbXBsZXRlOiAoKT0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9tb3ZlU3RhdGUgPSBNb3ZlU3RhdGUuUlVOTklORztcbiAgICAgICAgICAgICAgICAgICAgICAgIH19KVxuICAgICAgICAgICAgICAgICAgICAgICAgLnN0YXJ0KCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX21vdmVTdGF0ZSA9IE1vdmVTdGF0ZS5NT1ZJTkdfTEVGVDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIE1vdmVBY3Rpb24uUklHSFQ6XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuX21vdmVTdGF0ZSA9PT0gTW92ZVN0YXRlLlJVTk5JTkcpIHtcbiAgICAgICAgICAgICAgICAgICAgdHdlZW4odGhpcy5ub2RlKVxuICAgICAgICAgICAgICAgICAgICAuYnkoMC41LCB7cG9zaXRpb246IG5ldyBWZWMzKEdhbWVEZWZpbmVzLnJpZ2h0TGluZVgsIDAsIDApfSwge29uQ29tcGxldGU6ICgpPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fbW92ZVN0YXRlID0gTW92ZVN0YXRlLlJVTk5JTkc7XG4gICAgICAgICAgICAgICAgICAgIH19KVxuICAgICAgICAgICAgICAgICAgICAuc3RhcnQoKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fbW92ZVN0YXRlID0gTW92ZVN0YXRlLk1PVklOR19SSUdIVDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIE1vdmVBY3Rpb24uVVA6XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuX21vdmVTdGF0ZSA9PT0gTW92ZVN0YXRlLlJVTk5JTkcpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fYXVkaW9Tb3VyY2VDb21wLnBsYXlPbmVTaG90KHRoaXMuanVtcEFDKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXJBbmltQ29tcC5jcm9zc0ZhZGUoY29jb3NBbmltLmp1bXApO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBzdGF0ZSA9IHRoaXMucGxheWVyQW5pbUNvbXAuZ2V0U3RhdGUoY29jb3NBbmltLmp1bXApO1xuICAgICAgICAgICAgICAgICAgICBzdGF0ZS5zcGVlZCA9IDEuNTtcbiAgICAgICAgICAgICAgICAgICAgdHdlZW4odGhpcy5ub2RlKVxuICAgICAgICAgICAgICAgICAgICAuYnkoMC43NSwge3Bvc2l0aW9uOiBuZXcgVmVjMygwLCAwLCAxMCl9LCB7b25Db21wbGV0ZTogKCk9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB0aGlzLl9tb3ZlU3RhdGUgPSBNb3ZlU3RhdGUuUlVOTklORztcbiAgICAgICAgICAgICAgICAgICAgfX0pXG4gICAgICAgICAgICAgICAgICAgIC5zdGFydCgpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9tb3ZlU3RhdGUgPSBNb3ZlU3RhdGUuSlVNUElORztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBcbiAgICBvbkp1bXBFbmQodHlwZSwgc3RhdGUpIHtcbiAgICAgICAgLy8gY29uc3QganVtcFN0YXRlID0gdGhpcy5wbGF5ZXJBbmltQ29tcC5nZXRTdGF0ZShjb2Nvc0FuaW0uanVtcCk7XG4gICAgICAgIC8vIGp1bXBTdGF0ZS5vZmYoQW5pbWF0aW9uQ29tcG9uZW50LkV2ZW50VHlwZS5MQVNURlJBTUUsIHRoaXMub25KdW1wRW5kLCB0aGlzKTtcbiAgICAgICAgaWYgKHN0YXRlPy5uYW1lID09PSBjb2Nvc0FuaW0uanVtcCkge1xuICAgICAgICAgICAgdGhpcy5wbGF5ZXJBbmltQ29tcC5wbGF5KGNvY29zQW5pbS5ydW4pO1xuICAgICAgICAgICAgdGhpcy5fbW92ZVN0YXRlID0gTW92ZVN0YXRlLlJVTk5JTkc7XG4gICAgICAgIH1cbiAgICB9XG5cblxuICAgIHVwZGF0ZSAoZGVsdGFUaW1lOiBudW1iZXIpIHtcbiAgICAgICAgaWYgKHRoaXMuX2dhbWVTdGF0ZSA9PT0gR2FtZVN0YXRlLlBMQVlJTkcpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLl9tb3ZlU3RhdGUgPT09IE1vdmVTdGF0ZS5KVU1QSU5HKSB7XG4gICAgICAgICAgICAgICAgLy8gdGhpcy5ub2RlLnRyYW5zbGF0ZSh0ZW1wVmVjM19hLnNldCgwLCAwLCB0aGlzLnNwZWVkICogMS41ICogZGVsdGFUaW1lKSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMubm9kZS50cmFuc2xhdGUodGVtcFZlYzNfYS5zZXQoMCwgMCwgdGhpcy5zcGVlZCAqIGRlbHRhVGltZSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25EZXN0cm95KCkge1xuICAgICAgICBzeXN0ZW1FdmVudC5vZmYoU3lzdGVtRXZlbnQuRXZlbnRUeXBlLlRPVUNIX1NUQVJULCB0aGlzLm9uVmlld1RvdWNoU3RhcnQsIHRoaXMpO1xuICAgICAgICBzeXN0ZW1FdmVudC5vZmYoU3lzdGVtRXZlbnQuRXZlbnRUeXBlLlRPVUNIX0VORCwgdGhpcy5vblZpZXdUb3VjaEVuZCwgdGhpcyk7XG4gICAgfVxufVxuIl19