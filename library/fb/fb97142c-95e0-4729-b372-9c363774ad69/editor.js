System.register(["cce.code-quality.cr", "cc", "./GameDefines.js"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, SkeletalAnimationComponent, Vec3, CCFloat, systemEvent, SystemEvent, tween, AnimationComponent, AudioClip, AudioSourceComponent, GameDefines, GameState, _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _temp, _crd, ccclass, property, tempVec3_a, MoveAction, MoveState, cocosAnim, PlayerController;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

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

      ({
        ccclass,
        property
      } = _decorator);
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
      }), _dec(_class = (_class2 = (_temp = class PlayerController extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "speed", _descriptor, this);

          _initializerDefineProperty(this, "playerAnimComp", _descriptor2, this);

          _initializerDefineProperty(this, "coinAC", _descriptor3, this);

          _initializerDefineProperty(this, "jumpAC", _descriptor4, this);

          this._pressedX = 0;
          this._pressedY = 0;
          this._moveState = MoveState.RUNNING;
          this._gameState = (_crd && GameState === void 0 ? (_reportPossibleCrUseOfGameState({
            error: Error()
          }), GameState) : GameState).INIT;
          this._audioSourceComp = null;
        }

        start() {
          // Your initialization goes here.
          this._audioSourceComp = this.getComponent(AudioSourceComponent);
        }

        onGameStateChanged(state) {
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
        }

        onGameInit() {
          this.playerAnimComp.play(cocosAnim.idle);
          this.node.setPosition(tempVec3_a.set(0, 0, 0));
        }

        onGamePlaying() {
          this._moveState = MoveState.RUNNING;
          this.playerAnimComp.play(cocosAnim.run);
          const jumpState = this.playerAnimComp.getState(cocosAnim.jump);
          jumpState.on(AnimationComponent.EventType.FINISHED, this.onJumpEnd, this);
          systemEvent.on(SystemEvent.EventType.TOUCH_START, this.onViewTouchStart, this);
          systemEvent.on(SystemEvent.EventType.TOUCH_END, this.onViewTouchEnd, this);
        }

        onGameEnd() {
          const jumpState = this.playerAnimComp.getState(cocosAnim.jump);
          jumpState.off(AnimationComponent.EventType.FINISHED, this.onJumpEnd, this);
          systemEvent.off(SystemEvent.EventType.TOUCH_START, this.onViewTouchStart, this);
          systemEvent.off(SystemEvent.EventType.TOUCH_END, this.onViewTouchEnd, this);
        }

        onTriggerEnter(event) {
          const triggerNode = event.otherCollider.node;

          if (triggerNode.name === 'Coin') {
            this._audioSourceComp.playOneShot(this.coinAC);

            if (this.onTriggerCoin) {
              this.onTriggerCoin(triggerNode);
            }
          } else if (triggerNode.name === 'RoadBlock') {
            const animComp = triggerNode.getComponent(AnimationComponent);
            const downName = 'block_down';
            const state = animComp.getState(downName);

            if (!state.isPlaying) {
              animComp.play(downName);
            }

            if (this.onTriggerBlock) {
              this.onTriggerBlock(triggerNode);
            }
          }
        }

        onViewTouchStart(event) {
          let location = event.getLocation(); // 获取节点坐标

          this._pressedX = location.x;
          this._pressedY = location.y;
        }

        onViewTouchEnd(event) {
          let touchPoint = event.getLocation();
          let endX = this._pressedX - touchPoint.x;
          let endY = this._pressedY - touchPoint.y;

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
        }

        move(moveAction) {
          switch (moveAction) {
            case MoveAction.LEFT:
              if (this._moveState === MoveState.RUNNING) {
                tween(this.node).by(0.5, {
                  position: new Vec3((_crd && GameDefines === void 0 ? (_reportPossibleCrUseOfGameDefines({
                    error: Error()
                  }), GameDefines) : GameDefines).leftLineX, 0, 0)
                }, {
                  onComplete: () => {
                    this._moveState = MoveState.RUNNING;
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
                  onComplete: () => {
                    this._moveState = MoveState.RUNNING;
                  }
                }).start();
                this._moveState = MoveState.MOVING_RIGHT;
              }

              break;

            case MoveAction.UP:
              if (this._moveState === MoveState.RUNNING) {
                this._audioSourceComp.playOneShot(this.jumpAC);

                this.playerAnimComp.crossFade(cocosAnim.jump);
                const state = this.playerAnimComp.getState(cocosAnim.jump);
                state.speed = 1.5;
                tween(this.node).by(0.75, {
                  position: new Vec3(0, 0, 10)
                }, {
                  onComplete: () => {// this._moveState = MoveState.RUNNING;
                  }
                }).start();
                this._moveState = MoveState.JUMPING;
              }

              break;
          }
        }

        onJumpEnd(type, state) {
          // const jumpState = this.playerAnimComp.getState(cocosAnim.jump);
          // jumpState.off(AnimationComponent.EventType.LASTFRAME, this.onJumpEnd, this);
          if ((state === null || state === void 0 ? void 0 : state.name) === cocosAnim.jump) {
            this.playerAnimComp.play(cocosAnim.run);
            this._moveState = MoveState.RUNNING;
          }
        }

        update(deltaTime) {
          if (this._gameState === (_crd && GameState === void 0 ? (_reportPossibleCrUseOfGameState({
            error: Error()
          }), GameState) : GameState).PLAYING) {
            if (this._moveState === MoveState.JUMPING) {// this.node.translate(tempVec3_a.set(0, 0, this.speed * 1.5 * deltaTime));
            } else {
              this.node.translate(tempVec3_a.set(0, 0, this.speed * deltaTime));
            }
          }
        }

        onDestroy() {
          systemEvent.off(SystemEvent.EventType.TOUCH_START, this.onViewTouchStart, this);
          systemEvent.off(SystemEvent.EventType.TOUCH_END, this.onViewTouchEnd, this);
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "speed", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 1;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "playerAnimComp", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "coinAC", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "jumpAC", [_dec5], {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vVXNlcnMvbWFjL0Rvd25sb2Fkcy9leGFtcGxlLTNkLW1hc3Rlci9zaW1wbGUtZ2FtZXMvYXNzZXRzL3NpbXBsZS1ydW4vc2NyaXB0cy9QbGF5ZXJDb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbIl9kZWNvcmF0b3IiLCJDb21wb25lbnQiLCJTa2VsZXRhbEFuaW1hdGlvbkNvbXBvbmVudCIsIlZlYzMiLCJDQ0Zsb2F0Iiwic3lzdGVtRXZlbnQiLCJTeXN0ZW1FdmVudCIsInR3ZWVuIiwiQW5pbWF0aW9uQ29tcG9uZW50IiwiQXVkaW9DbGlwIiwiQXVkaW9Tb3VyY2VDb21wb25lbnQiLCJHYW1lRGVmaW5lcyIsIkdhbWVTdGF0ZSIsImNjY2xhc3MiLCJwcm9wZXJ0eSIsInRlbXBWZWMzX2EiLCJNb3ZlQWN0aW9uIiwiTW92ZVN0YXRlIiwiY29jb3NBbmltIiwiaWRsZSIsInJ1biIsImp1bXAiLCJQbGF5ZXJDb250cm9sbGVyIiwidHlwZSIsIl9wcmVzc2VkWCIsIl9wcmVzc2VkWSIsIl9tb3ZlU3RhdGUiLCJSVU5OSU5HIiwiX2dhbWVTdGF0ZSIsIklOSVQiLCJfYXVkaW9Tb3VyY2VDb21wIiwic3RhcnQiLCJnZXRDb21wb25lbnQiLCJvbkdhbWVTdGF0ZUNoYW5nZWQiLCJzdGF0ZSIsIm9uR2FtZUluaXQiLCJQTEFZSU5HIiwib25HYW1lUGxheWluZyIsIkVORCIsIm9uR2FtZUVuZCIsInBsYXllckFuaW1Db21wIiwicGxheSIsIm5vZGUiLCJzZXRQb3NpdGlvbiIsInNldCIsImp1bXBTdGF0ZSIsImdldFN0YXRlIiwib24iLCJFdmVudFR5cGUiLCJGSU5JU0hFRCIsIm9uSnVtcEVuZCIsIlRPVUNIX1NUQVJUIiwib25WaWV3VG91Y2hTdGFydCIsIlRPVUNIX0VORCIsIm9uVmlld1RvdWNoRW5kIiwib2ZmIiwib25UcmlnZ2VyRW50ZXIiLCJldmVudCIsInRyaWdnZXJOb2RlIiwib3RoZXJDb2xsaWRlciIsIm5hbWUiLCJwbGF5T25lU2hvdCIsImNvaW5BQyIsIm9uVHJpZ2dlckNvaW4iLCJhbmltQ29tcCIsImRvd25OYW1lIiwiaXNQbGF5aW5nIiwib25UcmlnZ2VyQmxvY2siLCJsb2NhdGlvbiIsImdldExvY2F0aW9uIiwieCIsInkiLCJ0b3VjaFBvaW50IiwiZW5kWCIsImVuZFkiLCJNYXRoIiwiYWJzIiwibW92ZSIsIkxFRlQiLCJSSUdIVCIsIlVQIiwibW92ZUFjdGlvbiIsImJ5IiwicG9zaXRpb24iLCJsZWZ0TGluZVgiLCJvbkNvbXBsZXRlIiwiTU9WSU5HX0xFRlQiLCJyaWdodExpbmVYIiwiTU9WSU5HX1JJR0hUIiwianVtcEFDIiwiY3Jvc3NGYWRlIiwic3BlZWQiLCJKVU1QSU5HIiwidXBkYXRlIiwiZGVsdGFUaW1lIiwidHJhbnNsYXRlIiwib25EZXN0cm95Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFTQSxNQUFBQSxVLE9BQUFBLFU7QUFBWUMsTUFBQUEsUyxPQUFBQSxTO0FBQWlCQyxNQUFBQSwwQixPQUFBQSwwQjtBQUE0QkMsTUFBQUEsSSxPQUFBQSxJO0FBQU1DLE1BQUFBLE8sT0FBQUEsTztBQUFTQyxNQUFBQSxXLE9BQUFBLFc7QUFBYUMsTUFBQUEsVyxPQUFBQSxXO0FBQWFDLE1BQUFBLEssT0FBQUEsSztBQUFPQyxNQUFBQSxrQixPQUFBQSxrQjtBQUE2REMsTUFBQUEsUyxPQUFBQSxTO0FBQVdDLE1BQUFBLG9CLE9BQUFBLG9COztBQUNsTEMsTUFBQUEsVyxrQkFBQUEsVztBQUFhQyxNQUFBQSxTLGtCQUFBQSxTOzs7Ozs7O09BQ2Y7QUFBRUMsUUFBQUEsT0FBRjtBQUFXQyxRQUFBQTtBQUFYLE8sR0FBd0JkLFU7QUFFeEJlLE1BQUFBLFUsR0FBYSxJQUFJWixJQUFKLEU7O2lCQUVkYSxVO0FBQUFBLFFBQUFBLFUsQ0FBQUEsVTtBQUFBQSxRQUFBQSxVLENBQUFBLFU7QUFBQUEsUUFBQUEsVSxDQUFBQSxVO1NBQUFBLFUsS0FBQUEsVTs7aUJBTUFDLFM7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LEVBQTJDLENBQ3ZDO0FBQ0gsYUFGRCxNQUVPO0FBQ0gsbUJBQUtsRCxJQUFMLENBQVVxRCxTQUFWLENBQW9CaEYsVUFBVSxDQUFDNkIsR0FBWCxDQUFlLENBQWYsRUFBa0IsQ0FBbEIsRUFBcUIsS0FBSytDLEtBQUwsR0FBYUcsU0FBbEMsQ0FBcEI7QUFDSDtBQUNKO0FBQ0o7O0FBRURFLFFBQUFBLFNBQVMsR0FBRztBQUNSM0YsVUFBQUEsV0FBVyxDQUFDa0QsR0FBWixDQUFnQmpELFdBQVcsQ0FBQzBDLFNBQVosQ0FBc0JHLFdBQXRDLEVBQW1ELEtBQUtDLGdCQUF4RCxFQUEwRSxJQUExRTtBQUNBL0MsVUFBQUEsV0FBVyxDQUFDa0QsR0FBWixDQUFnQmpELFdBQVcsQ0FBQzBDLFNBQVosQ0FBc0JLLFNBQXRDLEVBQWlELEtBQUtDLGNBQXRELEVBQXNFLElBQXRFO0FBQ0g7O0FBekwyQyxPOzs7OztpQkFHckIsQzs7Ozs7OztpQkFHNkIsSTs7Ozs7OztpQkFFekIsSTs7Ozs7OztpQkFFQSxJIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgX2RlY29yYXRvciwgQ29tcG9uZW50LCBOb2RlLCBTa2VsZXRhbEFuaW1hdGlvbkNvbXBvbmVudCwgVmVjMywgQ0NGbG9hdCwgc3lzdGVtRXZlbnQsIFN5c3RlbUV2ZW50LCB0d2VlbiwgQW5pbWF0aW9uQ29tcG9uZW50LCBUb3VjaCwgQ29sbGlkZXJDb21wb25lbnQsIElUcmlnZ2VyRXZlbnQsIEF1ZGlvQ2xpcCwgQXVkaW9Tb3VyY2VDb21wb25lbnQgfSBmcm9tICdjYyc7XG5pbXBvcnQge0dhbWVEZWZpbmVzLCBHYW1lU3RhdGV9IGZyb20gJy4vR2FtZURlZmluZXMnO1xuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gX2RlY29yYXRvcjtcblxuY29uc3QgdGVtcFZlYzNfYSA9IG5ldyBWZWMzKCk7XG5cbmVudW0gTW92ZUFjdGlvbiB7XG4gICAgTEVGVCxcbiAgICBSSUdIVCxcbiAgICBVUCxcbn1cblxuZW51bSBNb3ZlU3RhdGUge1xuICAgIFJVTk5JTkcsXG4gICAgTU9WSU5HX0xFRlQsXG4gICAgTU9WSU5HX1JJR0hULFxuICAgIEpVTVBJTkcsXG59XG5cbmNvbnN0IGNvY29zQW5pbSA9IHtcbiAgICBpZGxlOiAnY29jb3NfYW5pbV9pZGxlJyxcbiAgICBydW46ICdjb2Nvc19hbmltX3J1bicsXG4gICAganVtcDogJ2NvY29zX2FuaW1fanVtcCcsXG59XG5cbkBjY2NsYXNzKCdQbGF5ZXJDb250cm9sbGVyJylcbmV4cG9ydCBjbGFzcyBQbGF5ZXJDb250cm9sbGVyIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICAgIEBwcm9wZXJ0eSh7dHlwZTogQ0NGbG9hdH0pXG4gICAgcHVibGljIHNwZWVkOiBudW1iZXIgPSAxO1xuXG4gICAgQHByb3BlcnR5KHt0eXBlOiBTa2VsZXRhbEFuaW1hdGlvbkNvbXBvbmVudH0pXG4gICAgcHVibGljIHBsYXllckFuaW1Db21wOiBTa2VsZXRhbEFuaW1hdGlvbkNvbXBvbmVudCA9IG51bGw7XG4gICAgQHByb3BlcnR5KHt0eXBlOiBBdWRpb0NsaXB9KVxuICAgIHB1YmxpYyBjb2luQUM6IEF1ZGlvQ2xpcCA9IG51bGw7XG4gICAgQHByb3BlcnR5KHt0eXBlOiBBdWRpb0NsaXB9KVxuICAgIHB1YmxpYyBqdW1wQUM6IEF1ZGlvQ2xpcCA9IG51bGw7XG5cblxuICAgIHB1YmxpYyBvblRyaWdnZXJDb2luOiAoY29pbk5vZGU6IE5vZGUpID0+IHZvaWQ7XG4gICAgcHVibGljIG9uVHJpZ2dlckJsb2NrOiAocm9hZEJsb2NrTm9kZTogTm9kZSkgPT4gdm9pZDtcblxuICAgIHByaXZhdGUgX3ByZXNzZWRYID0gMDtcbiAgICBwcml2YXRlIF9wcmVzc2VkWSA9IDA7XG5cbiAgICBwcml2YXRlIF9tb3ZlU3RhdGU6IE1vdmVTdGF0ZSA9IE1vdmVTdGF0ZS5SVU5OSU5HO1xuICAgIHByaXZhdGUgX2dhbWVTdGF0ZTogR2FtZVN0YXRlID0gR2FtZVN0YXRlLklOSVQ7XG5cbiAgICBwcml2YXRlIF9hdWRpb1NvdXJjZUNvbXA6IEF1ZGlvU291cmNlQ29tcG9uZW50ID0gbnVsbDtcblxuICAgIHN0YXJ0ICgpIHtcbiAgICAgICAgLy8gWW91ciBpbml0aWFsaXphdGlvbiBnb2VzIGhlcmUuXG4gICAgICAgIHRoaXMuX2F1ZGlvU291cmNlQ29tcCA9IHRoaXMuZ2V0Q29tcG9uZW50KEF1ZGlvU291cmNlQ29tcG9uZW50KTtcbiAgICB9XG5cbiAgICBvbkdhbWVTdGF0ZUNoYW5nZWQoc3RhdGU6IEdhbWVTdGF0ZSkge1xuICAgICAgICBzd2l0Y2goc3RhdGUpIHtcbiAgICAgICAgICAgIGNhc2UgR2FtZVN0YXRlLklOSVQ6XG4gICAgICAgICAgICAgICAgdGhpcy5vbkdhbWVJbml0KCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIEdhbWVTdGF0ZS5QTEFZSU5HOlxuICAgICAgICAgICAgICAgIHRoaXMub25HYW1lUGxheWluZygpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBHYW1lU3RhdGUuRU5EOlxuICAgICAgICAgICAgICAgIHRoaXMub25HYW1lRW5kKCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl9nYW1lU3RhdGUgPSBzdGF0ZTtcbiAgICB9XG5cbiAgICBvbkdhbWVJbml0KCkge1xuICAgICAgICB0aGlzLnBsYXllckFuaW1Db21wLnBsYXkoY29jb3NBbmltLmlkbGUpO1xuICAgICAgICB0aGlzLm5vZGUuc2V0UG9zaXRpb24odGVtcFZlYzNfYS5zZXQoMCwgMCwgMCkpO1xuICAgIH1cblxuICAgIG9uR2FtZVBsYXlpbmcoKSB7XG4gICAgICAgIHRoaXMuX21vdmVTdGF0ZSA9IE1vdmVTdGF0ZS5SVU5OSU5HO1xuICAgICAgICB0aGlzLnBsYXllckFuaW1Db21wLnBsYXkoY29jb3NBbmltLnJ1bik7XG5cbiAgICAgICAgY29uc3QganVtcFN0YXRlID0gdGhpcy5wbGF5ZXJBbmltQ29tcC5nZXRTdGF0ZShjb2Nvc0FuaW0uanVtcCk7XG4gICAgICAgIGp1bXBTdGF0ZS5vbihBbmltYXRpb25Db21wb25lbnQuRXZlbnRUeXBlLkZJTklTSEVELCB0aGlzLm9uSnVtcEVuZCwgdGhpcyk7XG5cbiAgICAgICAgc3lzdGVtRXZlbnQub24oU3lzdGVtRXZlbnQuRXZlbnRUeXBlLlRPVUNIX1NUQVJULCB0aGlzLm9uVmlld1RvdWNoU3RhcnQsIHRoaXMpO1xuICAgICAgICBzeXN0ZW1FdmVudC5vbihTeXN0ZW1FdmVudC5FdmVudFR5cGUuVE9VQ0hfRU5ELCB0aGlzLm9uVmlld1RvdWNoRW5kLCB0aGlzKTtcbiAgICB9XG5cbiAgICBvbkdhbWVFbmQoKSB7XG4gICAgICAgIGNvbnN0IGp1bXBTdGF0ZSA9IHRoaXMucGxheWVyQW5pbUNvbXAuZ2V0U3RhdGUoY29jb3NBbmltLmp1bXApO1xuICAgICAgICBqdW1wU3RhdGUub2ZmKEFuaW1hdGlvbkNvbXBvbmVudC5FdmVudFR5cGUuRklOSVNIRUQsIHRoaXMub25KdW1wRW5kLCB0aGlzKTtcblxuICAgICAgICBzeXN0ZW1FdmVudC5vZmYoU3lzdGVtRXZlbnQuRXZlbnRUeXBlLlRPVUNIX1NUQVJULCB0aGlzLm9uVmlld1RvdWNoU3RhcnQsIHRoaXMpO1xuICAgICAgICBzeXN0ZW1FdmVudC5vZmYoU3lzdGVtRXZlbnQuRXZlbnRUeXBlLlRPVUNIX0VORCwgdGhpcy5vblZpZXdUb3VjaEVuZCwgdGhpcyk7XG4gICAgfVxuXG4gICAgb25UcmlnZ2VyRW50ZXIoZXZlbnQ6IElUcmlnZ2VyRXZlbnQpIHtcbiAgICAgICAgY29uc3QgdHJpZ2dlck5vZGU6IE5vZGUgPSBldmVudC5vdGhlckNvbGxpZGVyLm5vZGU7XG4gICAgICAgIGlmICh0cmlnZ2VyTm9kZS5uYW1lID09PSAnQ29pbicpIHtcbiAgICAgICAgICAgIHRoaXMuX2F1ZGlvU291cmNlQ29tcC5wbGF5T25lU2hvdCh0aGlzLmNvaW5BQyk7XG4gICAgICAgICAgICBpZiAodGhpcy5vblRyaWdnZXJDb2luKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5vblRyaWdnZXJDb2luKHRyaWdnZXJOb2RlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmICh0cmlnZ2VyTm9kZS5uYW1lID09PSAnUm9hZEJsb2NrJykge1xuICAgICAgICAgICAgY29uc3QgYW5pbUNvbXAgPSB0cmlnZ2VyTm9kZS5nZXRDb21wb25lbnQoQW5pbWF0aW9uQ29tcG9uZW50KTtcbiAgICAgICAgICAgIGNvbnN0IGRvd25OYW1lID0gJ2Jsb2NrX2Rvd24nO1xuICAgICAgICAgICAgY29uc3Qgc3RhdGUgPSBhbmltQ29tcC5nZXRTdGF0ZShkb3duTmFtZSk7XG4gICAgICAgICAgICBpZiAoIXN0YXRlLmlzUGxheWluZykge1xuICAgICAgICAgICAgICAgIGFuaW1Db21wLnBsYXkoZG93bk5hbWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMub25UcmlnZ2VyQmxvY2spIHtcbiAgICAgICAgICAgICAgICB0aGlzLm9uVHJpZ2dlckJsb2NrKHRyaWdnZXJOb2RlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uVmlld1RvdWNoU3RhcnQoZXZlbnQ6IFRvdWNoKSB7XG4gICAgICAgIGxldCBsb2NhdGlvbiA9IGV2ZW50LmdldExvY2F0aW9uKCk7Ly8g6I635Y+W6IqC54K55Z2Q5qCHXG4gICAgICAgIHRoaXMuX3ByZXNzZWRYID0gbG9jYXRpb24ueDtcbiAgICAgICAgdGhpcy5fcHJlc3NlZFkgPSBsb2NhdGlvbi55O1xuICAgIH1cblxuICAgIG9uVmlld1RvdWNoRW5kKGV2ZW50OiBUb3VjaCkge1xuICAgICAgICBsZXQgdG91Y2hQb2ludCA9IGV2ZW50LmdldExvY2F0aW9uKCk7XG4gICAgICAgIGxldCBlbmRYID0gdGhpcy5fcHJlc3NlZFggLSB0b3VjaFBvaW50Lng7XG4gICAgICAgIGxldCBlbmRZID0gdGhpcy5fcHJlc3NlZFkgLSB0b3VjaFBvaW50Lnk7XG4gICAgXG4gICAgICAgIGlmIChNYXRoLmFicyhlbmRYKSA+IE1hdGguYWJzKGVuZFkpKXtcbiAgICAgICAgICAgIC8v5omL5Yq/5ZCR5bem5Y+zXG4gICAgICAgICAgICAvL+WIpOaWreWQkeW3pui/mOaYr+WQkeWPsyBcbiAgICAgICAgICAgIGlmIChlbmRYICA+IDApe1xuICAgICAgICAgICAgICAgIC8vIGxlZnRcbiAgICAgICAgICAgICAgICB0aGlzLm1vdmUoTW92ZUFjdGlvbi5MRUZUKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gcmlnaHRcbiAgICAgICAgICAgICAgICB0aGlzLm1vdmUoTW92ZUFjdGlvbi5SSUdIVCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvL+aJi+WKv+WQkeS4iuS4i1xuICAgICAgICAgICAgLy/liKTmlq3miYvlir/lkJHkuIrov5jmmK/lkJHkuItcbiAgICAgICAgICAgIGlmIChlbmRZICA+IDApe1xuICAgICAgICAgICAgICAgIC8vIGRvd25cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gdXBcbiAgICAgICAgICAgICAgICB0aGlzLm1vdmUoTW92ZUFjdGlvbi5VUCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICB9XG4gICAgfVxuXG4gICAgbW92ZShtb3ZlQWN0aW9uOiBNb3ZlQWN0aW9uKSB7XG4gICAgICAgIHN3aXRjaCAobW92ZUFjdGlvbikge1xuICAgICAgICAgICAgY2FzZSBNb3ZlQWN0aW9uLkxFRlQ6XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuX21vdmVTdGF0ZSA9PT0gTW92ZVN0YXRlLlJVTk5JTkcpIHtcbiAgICAgICAgICAgICAgICAgICAgdHdlZW4odGhpcy5ub2RlKVxuICAgICAgICAgICAgICAgICAgICAgICAgLmJ5KDAuNSwge3Bvc2l0aW9uOiBuZXcgVmVjMyhHYW1lRGVmaW5lcy5sZWZ0TGluZVgsIDAsIDApfSwge29uQ29tcGxldGU6ICgpPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX21vdmVTdGF0ZSA9IE1vdmVTdGF0ZS5SVU5OSU5HO1xuICAgICAgICAgICAgICAgICAgICAgICAgfX0pXG4gICAgICAgICAgICAgICAgICAgICAgICAuc3RhcnQoKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fbW92ZVN0YXRlID0gTW92ZVN0YXRlLk1PVklOR19MRUZUO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgTW92ZUFjdGlvbi5SSUdIVDpcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5fbW92ZVN0YXRlID09PSBNb3ZlU3RhdGUuUlVOTklORykge1xuICAgICAgICAgICAgICAgICAgICB0d2Vlbih0aGlzLm5vZGUpXG4gICAgICAgICAgICAgICAgICAgIC5ieSgwLjUsIHtwb3NpdGlvbjogbmV3IFZlYzMoR2FtZURlZmluZXMucmlnaHRMaW5lWCwgMCwgMCl9LCB7b25Db21wbGV0ZTogKCk9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9tb3ZlU3RhdGUgPSBNb3ZlU3RhdGUuUlVOTklORztcbiAgICAgICAgICAgICAgICAgICAgfX0pXG4gICAgICAgICAgICAgICAgICAgIC5zdGFydCgpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9tb3ZlU3RhdGUgPSBNb3ZlU3RhdGUuTU9WSU5HX1JJR0hUO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgTW92ZUFjdGlvbi5VUDpcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5fbW92ZVN0YXRlID09PSBNb3ZlU3RhdGUuUlVOTklORykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9hdWRpb1NvdXJjZUNvbXAucGxheU9uZVNob3QodGhpcy5qdW1wQUMpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYXllckFuaW1Db21wLmNyb3NzRmFkZShjb2Nvc0FuaW0uanVtcCk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHN0YXRlID0gdGhpcy5wbGF5ZXJBbmltQ29tcC5nZXRTdGF0ZShjb2Nvc0FuaW0uanVtcCk7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRlLnNwZWVkID0gMS41O1xuICAgICAgICAgICAgICAgICAgICB0d2Vlbih0aGlzLm5vZGUpXG4gICAgICAgICAgICAgICAgICAgIC5ieSgwLjc1LCB7cG9zaXRpb246IG5ldyBWZWMzKDAsIDAsIDEwKX0sIHtvbkNvbXBsZXRlOiAoKT0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRoaXMuX21vdmVTdGF0ZSA9IE1vdmVTdGF0ZS5SVU5OSU5HO1xuICAgICAgICAgICAgICAgICAgICB9fSlcbiAgICAgICAgICAgICAgICAgICAgLnN0YXJ0KCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX21vdmVTdGF0ZSA9IE1vdmVTdGF0ZS5KVU1QSU5HO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIFxuICAgIG9uSnVtcEVuZCh0eXBlLCBzdGF0ZSkge1xuICAgICAgICAvLyBjb25zdCBqdW1wU3RhdGUgPSB0aGlzLnBsYXllckFuaW1Db21wLmdldFN0YXRlKGNvY29zQW5pbS5qdW1wKTtcbiAgICAgICAgLy8ganVtcFN0YXRlLm9mZihBbmltYXRpb25Db21wb25lbnQuRXZlbnRUeXBlLkxBU1RGUkFNRSwgdGhpcy5vbkp1bXBFbmQsIHRoaXMpO1xuICAgICAgICBpZiAoc3RhdGU/Lm5hbWUgPT09IGNvY29zQW5pbS5qdW1wKSB7XG4gICAgICAgICAgICB0aGlzLnBsYXllckFuaW1Db21wLnBsYXkoY29jb3NBbmltLnJ1bik7XG4gICAgICAgICAgICB0aGlzLl9tb3ZlU3RhdGUgPSBNb3ZlU3RhdGUuUlVOTklORztcbiAgICAgICAgfVxuICAgIH1cblxuXG4gICAgdXBkYXRlIChkZWx0YVRpbWU6IG51bWJlcikge1xuICAgICAgICBpZiAodGhpcy5fZ2FtZVN0YXRlID09PSBHYW1lU3RhdGUuUExBWUlORykge1xuICAgICAgICAgICAgaWYgKHRoaXMuX21vdmVTdGF0ZSA9PT0gTW92ZVN0YXRlLkpVTVBJTkcpIHtcbiAgICAgICAgICAgICAgICAvLyB0aGlzLm5vZGUudHJhbnNsYXRlKHRlbXBWZWMzX2Euc2V0KDAsIDAsIHRoaXMuc3BlZWQgKiAxLjUgKiBkZWx0YVRpbWUpKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLnRyYW5zbGF0ZSh0ZW1wVmVjM19hLnNldCgwLCAwLCB0aGlzLnNwZWVkICogZGVsdGFUaW1lKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvbkRlc3Ryb3koKSB7XG4gICAgICAgIHN5c3RlbUV2ZW50Lm9mZihTeXN0ZW1FdmVudC5FdmVudFR5cGUuVE9VQ0hfU1RBUlQsIHRoaXMub25WaWV3VG91Y2hTdGFydCwgdGhpcyk7XG4gICAgICAgIHN5c3RlbUV2ZW50Lm9mZihTeXN0ZW1FdmVudC5FdmVudFR5cGUuVE9VQ0hfRU5ELCB0aGlzLm9uVmlld1RvdWNoRW5kLCB0aGlzKTtcbiAgICB9XG59XG4iXX0=