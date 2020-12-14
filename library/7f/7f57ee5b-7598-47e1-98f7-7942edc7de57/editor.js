System.register(["cce.code-quality.cr", "cc", "./Bullet.js", "./GameDefines.js", "./Grenade.js"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, Node, AnimationComponent, systemEvent, SystemEvent, macro, Vec3, game, Quat, CCFloat, Prefab, director, instantiate, Bullet, ActionType, Grenade, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _temp, _crd, ccclass, property, PlayerAnimState, MoveDir, tempVec3_a, tempVec3_b, tempQuat_a, ShootingPlayerController;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfBullet(extras) {
    _reporterNs.report("Bullet", "./Bullet", _context.meta, extras);
  }

  function _reportPossibleCrUseOfActionType(extras) {
    _reporterNs.report("ActionType", "./GameDefines", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGrenade(extras) {
    _reporterNs.report("Grenade", "./Grenade", _context.meta, extras);
  }

  _export({
    _dec: void 0,
    _dec2: void 0,
    _dec3: void 0,
    _dec4: void 0,
    _dec5: void 0,
    _dec6: void 0,
    _dec7: void 0,
    _dec8: void 0,
    _dec9: void 0,
    _class: void 0,
    _class2: void 0,
    _descriptor: void 0,
    _descriptor2: void 0,
    _descriptor3: void 0,
    _descriptor4: void 0,
    _descriptor5: void 0,
    _descriptor6: void 0,
    _descriptor7: void 0,
    _descriptor8: void 0,
    _temp: void 0,
    PlayerAnimState: void 0,
    MoveDir: void 0
  });

  return {
    setters: [function (_cceCodeQualityCr) {
      _reporterNs = _cceCodeQualityCr;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Node = _cc.Node;
      AnimationComponent = _cc.AnimationComponent;
      systemEvent = _cc.systemEvent;
      SystemEvent = _cc.SystemEvent;
      macro = _cc.macro;
      Vec3 = _cc.Vec3;
      game = _cc.game;
      Quat = _cc.Quat;
      CCFloat = _cc.CCFloat;
      Prefab = _cc.Prefab;
      director = _cc.director;
      instantiate = _cc.instantiate;
    }, function (_BulletJs) {
      Bullet = _BulletJs.Bullet;
    }, function (_GameDefinesJs) {
      ActionType = _GameDefinesJs.ActionType;
    }, function (_GrenadeJs) {
      Grenade = _GrenadeJs.Grenade;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "7f57e5bdZhH4Zj3eULtx95X", "ShootingPlayerController", _context.meta);

      ({
        ccclass,
        property
      } = _decorator);

      (function (PlayerAnimState) {
        PlayerAnimState[PlayerAnimState["None"] = 0] = "None";
        PlayerAnimState[PlayerAnimState["Idle"] = 1] = "Idle";
        PlayerAnimState[PlayerAnimState["Running"] = 2] = "Running";
        PlayerAnimState[PlayerAnimState["Jumping"] = 3] = "Jumping";
        PlayerAnimState[PlayerAnimState["Shooting"] = 4] = "Shooting";
      })(PlayerAnimState || (PlayerAnimState = {}));

      (function (MoveDir) {
        MoveDir[MoveDir["Left"] = 0] = "Left";
        MoveDir[MoveDir["Right"] = 1] = "Right";
        MoveDir[MoveDir["Forward"] = 2] = "Forward";
        MoveDir[MoveDir["Backward"] = 3] = "Backward";
      })(MoveDir || (MoveDir = {}));

      tempVec3_a = new Vec3();
      tempVec3_b = new Vec3();
      tempQuat_a = new Quat();

      _export("ShootingPlayerController", ShootingPlayerController = (_dec = ccclass('ShootingPlayerController'), _dec2 = property({
        type: CCFloat
      }), _dec3 = property({
        type: Prefab
      }), _dec4 = property({
        type: Prefab
      }), _dec5 = property({
        type: Node
      }), _dec6 = property({
        type: Node
      }), _dec7 = property({
        type: Node
      }), _dec8 = property({
        type: CCFloat
      }), _dec9 = property({
        type: CCFloat
      }), _dec(_class = (_class2 = (_temp = class ShootingPlayerController extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "moveSpeed", _descriptor, this);

          _initializerDefineProperty(this, "BulletPrefab", _descriptor2, this);

          _initializerDefineProperty(this, "grenatePrfb", _descriptor3, this);

          _initializerDefineProperty(this, "firePoint", _descriptor4, this);

          _initializerDefineProperty(this, "throwPoint", _descriptor5, this);

          _initializerDefineProperty(this, "verticalViewNode", _descriptor6, this);

          _initializerDefineProperty(this, "viewUpAngle", _descriptor7, this);

          _initializerDefineProperty(this, "viewDownAngle", _descriptor8, this);

          this._animComp = null;
          this._animState = PlayerAnimState.None;
          this._animStateToNameMap = {};
          this._moveDirMap = {};
          this._velocity = new Vec3();
          this._rotHorizontalSpeed = 0.005;
          this._rotVerticalSpeed = 0.002;
          this._bulletSpeed = 50;
          this._grenadeForce = 50;
        }

        onLoad() {
          //键盘监听
          systemEvent.on(SystemEvent.EventType.KEY_UP, this.onKeyUp, this);
          systemEvent.on(SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this); //鼠标监听

          systemEvent.on(SystemEvent.EventType.MOUSE_UP, this.onMouseUp, this);
          systemEvent.on(SystemEvent.EventType.MOUSE_DOWN, this.onMouseDown, this);
          systemEvent.on(SystemEvent.EventType.MOUSE_MOVE, this.onMouseMove, this); //触摸监听

          systemEvent.on(SystemEvent.EventType.TOUCH_MOVE, this.onTouchMove, this);
          this._animStateToNameMap[PlayerAnimState.Idle] = 'Idle';
          this._animStateToNameMap[PlayerAnimState.Running] = 'Run';
          this._animStateToNameMap[PlayerAnimState.Jumping] = 'Jump';
          this._animStateToNameMap[PlayerAnimState.Shooting] = 'ShootTorsoArmsRifle';
          this._moveDirMap[MoveDir.Left] = new Vec3(1, 0, 0);
          this._moveDirMap[MoveDir.Right] = new Vec3(-1, 0, 0);
          this._moveDirMap[MoveDir.Forward] = new Vec3(0, 0, 1);
          this._moveDirMap[MoveDir.Backward] = new Vec3(0, 0, -1);
        }

        start() {
          // Your initialization goes here.
          this._animComp = this.node.getComponent(AnimationComponent);

          this._animComp.on(AnimationComponent.EventType.FINISHED, this.onAnimationEnd, this);

          this.changeToAnimState(PlayerAnimState.Idle);
        }

        doAction(action, enable) {
          switch (action) {
            case (_crd && ActionType === void 0 ? (_reportPossibleCrUseOfActionType({
              error: Error()
            }), ActionType) : ActionType).Forward:
              if (enable) {
                this._velocity.z = 1;
                this.changeToAnimState(PlayerAnimState.Running);
              } else {
                if (this._velocity.z > 0) {
                  this._velocity.z = 0;
                }

                this.checkToIdle();
              }

              break;

            case (_crd && ActionType === void 0 ? (_reportPossibleCrUseOfActionType({
              error: Error()
            }), ActionType) : ActionType).Backward:
              if (enable) {
                this._velocity.z = -1;
                this.changeToAnimState(PlayerAnimState.Running);
              } else {
                if (this._velocity.z < 0) {
                  this._velocity.z = 0;
                }

                this.checkToIdle();
              }

              break;

            case (_crd && ActionType === void 0 ? (_reportPossibleCrUseOfActionType({
              error: Error()
            }), ActionType) : ActionType).Left:
              if (enable) {
                this._velocity.x = 1;
                this.changeToAnimState(PlayerAnimState.Running);
              } else {
                if (this._velocity.x > 0) {
                  this._velocity.x = 0;
                }

                this.checkToIdle();
              }

              break;

            case (_crd && ActionType === void 0 ? (_reportPossibleCrUseOfActionType({
              error: Error()
            }), ActionType) : ActionType).Right:
              if (enable) {
                this._velocity.x = -1;
                this.changeToAnimState(PlayerAnimState.Running);
              } else {
                if (this._velocity.x < 0) {
                  this._velocity.x = 0;
                }

                this.checkToIdle();
              }

              break;

            case (_crd && ActionType === void 0 ? (_reportPossibleCrUseOfActionType({
              error: Error()
            }), ActionType) : ActionType).Shoot:
              if (enable) {
                this.changeToAnimState(PlayerAnimState.Shooting);
                this.shoot();
              }

              break;

            case (_crd && ActionType === void 0 ? (_reportPossibleCrUseOfActionType({
              error: Error()
            }), ActionType) : ActionType).ThrowGrenade:
              if (enable) {
                this.throwGrenade();
              }

              break;
          }
        }

        onKeyDown(event) {
          switch (event.keyCode) {
            case macro.KEY.a:
              this.doAction((_crd && ActionType === void 0 ? (_reportPossibleCrUseOfActionType({
                error: Error()
              }), ActionType) : ActionType).Left, true);
              break;

            case macro.KEY.d:
              this.doAction((_crd && ActionType === void 0 ? (_reportPossibleCrUseOfActionType({
                error: Error()
              }), ActionType) : ActionType).Right, true);
              break;

            case macro.KEY.w:
              this.doAction((_crd && ActionType === void 0 ? (_reportPossibleCrUseOfActionType({
                error: Error()
              }), ActionType) : ActionType).Forward, true);
              break;

            case macro.KEY.s:
              this.doAction((_crd && ActionType === void 0 ? (_reportPossibleCrUseOfActionType({
                error: Error()
              }), ActionType) : ActionType).Backward, true);
              break;

            case macro.KEY.g:
              this.doAction((_crd && ActionType === void 0 ? (_reportPossibleCrUseOfActionType({
                error: Error()
              }), ActionType) : ActionType).ThrowGrenade, true);
              break;

            case macro.KEY.space:
              // this.changeToAnimState(PlayerAnimState.Jumping);
              break;
          }
        }

        checkToIdle() {
          if (this._velocity.x === 0 && this._velocity.y === 0 && this._velocity.z === 0) {
            this.changeToAnimState(PlayerAnimState.Idle);
          }
        }

        onKeyUp(event) {
          switch (event.keyCode) {
            case macro.KEY.a:
              this.doAction((_crd && ActionType === void 0 ? (_reportPossibleCrUseOfActionType({
                error: Error()
              }), ActionType) : ActionType).Left, false);
              break;

            case macro.KEY.d:
              this.doAction((_crd && ActionType === void 0 ? (_reportPossibleCrUseOfActionType({
                error: Error()
              }), ActionType) : ActionType).Right, false);
              break;

            case macro.KEY.w:
              this.doAction((_crd && ActionType === void 0 ? (_reportPossibleCrUseOfActionType({
                error: Error()
              }), ActionType) : ActionType).Forward, false);
              break;

            case macro.KEY.s:
              this.doAction((_crd && ActionType === void 0 ? (_reportPossibleCrUseOfActionType({
                error: Error()
              }), ActionType) : ActionType).Backward, false);
              break;

            case macro.KEY.space:
              break;
          }
        }

        onMouseDown(event) {
          if (event.getButton() === 2) {
            game.canvas.requestPointerLock();
          }
        }

        onMouseUp(event) {
          if (event.getButton() === 0) {
            // 鼠标左键
            this.changeToAnimState(PlayerAnimState.Shooting);
            this.shoot();
          }
        }

        onMouseMove(event) {
          if (event.movementX != 0) {
            const horizontalRot = this.node.getRotation();
            Quat.rotateAround(horizontalRot, horizontalRot, Vec3.UNIT_Y, -event.movementX * this._rotHorizontalSpeed);
            this.node.setRotation(horizontalRot);
          }

          if (event.movementY != 0) {
            const verticalRot = this.verticalViewNode.getRotation();
            Quat.rotateAround(verticalRot, verticalRot, Vec3.UNIT_X, event.movementY * this._rotVerticalSpeed);
            verticalRot.getEulerAngles(tempVec3_a);

            if (tempVec3_a.x > this.viewDownAngle && tempVec3_a.x < this.viewUpAngle) {
              this.verticalViewNode.setRotation(verticalRot);
            }
          }
        }

        onTouchMove(event) {
          if (event.getDelta().x != 0) {
            const horizontalRot = this.node.getRotation();
            Quat.rotateAround(horizontalRot, horizontalRot, Vec3.UNIT_Y, -event.getDelta().x * this._rotHorizontalSpeed);
            this.node.setRotation(horizontalRot);
          }

          if (event.getDelta().y != 0) {
            const verticalRot = this.verticalViewNode.getRotation();
            Quat.rotateAround(verticalRot, verticalRot, Vec3.UNIT_X, event.getDelta().y * this._rotVerticalSpeed);
            verticalRot.getEulerAngles(tempVec3_a);

            if (tempVec3_a.x > this.viewDownAngle && tempVec3_a.x < this.viewUpAngle) {
              this.verticalViewNode.setRotation(verticalRot);
            }
          }
        }

        changeToAnimState(state) {
          if (this._animState === PlayerAnimState.Idle) {
            if (this._animState !== state) {
              this._animComp.play(this._animStateToNameMap[state]);

              this._animState = state;
            }
          } else {
            if (state === PlayerAnimState.Idle) {
              this._animComp.play(this._animStateToNameMap[state]);

              this._animState = state;
            }
          }
        }

        onAnimationEnd(type, state) {
          if (state.name === this._animStateToNameMap[PlayerAnimState.Shooting]) {
            this.changeToAnimState(PlayerAnimState.Idle);
          }
        }

        shoot() {
          let scene = director.getScene();
          let newBullet = instantiate(this.BulletPrefab); // ts-ignore

          scene.addChild(newBullet);
          newBullet.setPosition(this.firePoint.getWorldPosition());
          const bullet = newBullet.getComponent(_crd && Bullet === void 0 ? (_reportPossibleCrUseOfBullet({
            error: Error()
          }), Bullet) : Bullet);
          let dir = new Vec3(0, 0, 1);
          Vec3.transformQuat(dir, dir, this.firePoint.getWorldRotation());
          Vec3.multiplyScalar(dir, dir, this._bulletSpeed);
          bullet.init(dir);
        }

        throwGrenade() {
          let scene = director.getScene();
          let newGrenade = instantiate(this.grenatePrfb);
          scene.addChild(newGrenade);
          newGrenade.setPosition(this.throwPoint.getWorldPosition());
          const grenade = newGrenade.getComponent(_crd && Grenade === void 0 ? (_reportPossibleCrUseOfGrenade({
            error: Error()
          }), Grenade) : Grenade);
          let dir = new Vec3(0, 0, 1);
          Vec3.transformQuat(dir, dir, this.throwPoint.getWorldRotation());
          Vec3.multiplyScalar(dir, dir, this._grenadeForce);
          grenade.init(dir);
        }

        move(deltaTime) {
          let curPos = tempVec3_a;
          const dir = this._velocity;
          this.node.getWorldPosition(curPos);
          this.node.getWorldRotation(tempQuat_a);
          Vec3.transformQuat(tempVec3_b, dir, tempQuat_a);
          Vec3.scaleAndAdd(curPos, curPos, tempVec3_b, deltaTime * this.moveSpeed);
          this.node.setWorldPosition(curPos);
        }

        update(deltaTime) {
          // Your update function goes here.
          if (this._animState === PlayerAnimState.Running) {
            this.move(deltaTime);
          }
        }

        onDestroy() {
          // 取消键盘监听
          systemEvent.off(SystemEvent.EventType.KEY_UP, this.onKeyUp, this);
          systemEvent.off(SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this); // 取消鼠标监听

          systemEvent.off(SystemEvent.EventType.MOUSE_UP, this.onMouseUp, this);
          systemEvent.off(SystemEvent.EventType.MOUSE_DOWN, this.onMouseDown, this);
          systemEvent.off(SystemEvent.EventType.MOUSE_MOVE, this.onMouseMove, this); // 取消触摸监听

          systemEvent.off(SystemEvent.EventType.TOUCH_MOVE, this.onTouchMove, this);
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "moveSpeed", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 1;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "BulletPrefab", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "grenatePrfb", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "firePoint", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "throwPoint", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "verticalViewNode", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "viewUpAngle", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 60;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "viewDownAngle", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return -60;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vVXNlcnMvbWFjL0Rvd25sb2Fkcy9leGFtcGxlLTNkLW1hc3Rlci9zaW1wbGUtZ2FtZXMvYXNzZXRzL3NpbXBsZS1zaG9vdGluZy9zY3JpcHRzL1Nob290aW5nUGxheWVyQ29udHJvbGxlci50cyJdLCJuYW1lcyI6WyJfZGVjb3JhdG9yIiwiQ29tcG9uZW50IiwiTm9kZSIsIkFuaW1hdGlvbkNvbXBvbmVudCIsInN5c3RlbUV2ZW50IiwiU3lzdGVtRXZlbnQiLCJtYWNybyIsIlZlYzMiLCJnYW1lIiwiUXVhdCIsIkNDRmxvYXQiLCJQcmVmYWIiLCJkaXJlY3RvciIsImluc3RhbnRpYXRlIiwiQnVsbGV0IiwiQWN0aW9uVHlwZSIsIkdyZW5hZGUiLCJjY2NsYXNzIiwicHJvcGVydHkiLCJQbGF5ZXJBbmltU3RhdGUiLCJNb3ZlRGlyIiwidGVtcFZlYzNfYSIsInRlbXBWZWMzX2IiLCJ0ZW1wUXVhdF9hIiwiU2hvb3RpbmdQbGF5ZXJDb250cm9sbGVyIiwidHlwZSIsIl9hbmltQ29tcCIsIl9hbmltU3RhdGUiLCJOb25lIiwiX2FuaW1TdGF0ZVRvTmFtZU1hcCIsIl9tb3ZlRGlyTWFwIiwiX3ZlbG9jaXR5IiwiX3JvdEhvcml6b250YWxTcGVlZCIsIl9yb3RWZXJ0aWNhbFNwZWVkIiwiX2J1bGxldFNwZWVkIiwiX2dyZW5hZGVGb3JjZSIsIm9uTG9hZCIsIm9uIiwiRXZlbnRUeXBlIiwiS0VZX1VQIiwib25LZXlVcCIsIktFWV9ET1dOIiwib25LZXlEb3duIiwiTU9VU0VfVVAiLCJvbk1vdXNlVXAiLCJNT1VTRV9ET1dOIiwib25Nb3VzZURvd24iLCJNT1VTRV9NT1ZFIiwib25Nb3VzZU1vdmUiLCJUT1VDSF9NT1ZFIiwib25Ub3VjaE1vdmUiLCJJZGxlIiwiUnVubmluZyIsIkp1bXBpbmciLCJTaG9vdGluZyIsIkxlZnQiLCJSaWdodCIsIkZvcndhcmQiLCJCYWNrd2FyZCIsInN0YXJ0Iiwibm9kZSIsImdldENvbXBvbmVudCIsIkZJTklTSEVEIiwib25BbmltYXRpb25FbmQiLCJjaGFuZ2VUb0FuaW1TdGF0ZSIsImRvQWN0aW9uIiwiYWN0aW9uIiwiZW5hYmxlIiwieiIsImNoZWNrVG9JZGxlIiwieCIsIlNob290Iiwic2hvb3QiLCJUaHJvd0dyZW5hZGUiLCJ0aHJvd0dyZW5hZGUiLCJldmVudCIsImtleUNvZGUiLCJLRVkiLCJhIiwiZCIsInciLCJzIiwiZyIsInNwYWNlIiwieSIsImdldEJ1dHRvbiIsImNhbnZhcyIsInJlcXVlc3RQb2ludGVyTG9jayIsIm1vdmVtZW50WCIsImhvcml6b250YWxSb3QiLCJnZXRSb3RhdGlvbiIsInJvdGF0ZUFyb3VuZCIsIlVOSVRfWSIsInNldFJvdGF0aW9uIiwibW92ZW1lbnRZIiwidmVydGljYWxSb3QiLCJ2ZXJ0aWNhbFZpZXdOb2RlIiwiVU5JVF9YIiwiZ2V0RXVsZXJBbmdsZXMiLCJ2aWV3RG93bkFuZ2xlIiwidmlld1VwQW5nbGUiLCJnZXREZWx0YSIsInN0YXRlIiwicGxheSIsIm5hbWUiLCJzY2VuZSIsImdldFNjZW5lIiwibmV3QnVsbGV0IiwiQnVsbGV0UHJlZmFiIiwiYWRkQ2hpbGQiLCJzZXRQb3NpdGlvbiIsImZpcmVQb2ludCIsImdldFdvcmxkUG9zaXRpb24iLCJidWxsZXQiLCJkaXIiLCJ0cmFuc2Zvcm1RdWF0IiwiZ2V0V29ybGRSb3RhdGlvbiIsIm11bHRpcGx5U2NhbGFyIiwiaW5pdCIsIm5ld0dyZW5hZGUiLCJncmVuYXRlUHJmYiIsInRocm93UG9pbnQiLCJncmVuYWRlIiwibW92ZSIsImRlbHRhVGltZSIsImN1clBvcyIsInNjYWxlQW5kQWRkIiwibW92ZVNwZWVkIiwic2V0V29ybGRQb3NpdGlvbiIsInVwZGF0ZSIsIm9uRGVzdHJveSIsIm9mZiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBU0EsTUFBQUEsVSxPQUFBQSxVO0FBQVlDLE1BQUFBLFMsT0FBQUEsUztBQUFXQyxNQUFBQSxJLE9B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Ozs7aUJBRUMsSTs7Ozs7OztpQkFFTSxJOzs7Ozs7O2lCQUVILEU7Ozs7Ozs7aUJBRUUsQ0FBQyxFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgX2RlY29yYXRvciwgQ29tcG9uZW50LCBOb2RlLCBBbmltYXRpb25Db21wb25lbnQsIHN5c3RlbUV2ZW50LCBTeXN0ZW1FdmVudCwgbWFjcm8sIFZlYzMsIG1hdGgsIGdhbWUsIFF1YXQsIENDRmxvYXQsIFByZWZhYiwgZGlyZWN0b3IsIGluc3RhbnRpYXRlLCBTY2VuZSwgRXZlbnRNb3VzZSB9IGZyb20gJ2NjJztcbmltcG9ydCB7IEJ1bGxldCB9IGZyb20gJy4vQnVsbGV0JztcbmltcG9ydCB7IEFjdGlvblR5cGUgfSBmcm9tICcuL0dhbWVEZWZpbmVzJztcbmltcG9ydCB7IEdyZW5hZGUgfSBmcm9tICcuL0dyZW5hZGUnO1xuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gX2RlY29yYXRvcjtcblxuZW51bSBQbGF5ZXJBbmltU3RhdGUge1xuICAgIE5vbmUsXG4gICAgSWRsZSxcbiAgICBSdW5uaW5nLFxuICAgIEp1bXBpbmcsXG4gICAgU2hvb3RpbmcsXG59XG5cbmVudW0gTW92ZURpciB7XG4gICAgTGVmdCxcbiAgICBSaWdodCxcbiAgICBGb3J3YXJkLFxuICAgIEJhY2t3YXJkLFxufVxuXG5jb25zdCB0ZW1wVmVjM19hID0gbmV3IFZlYzMoKTtcbmNvbnN0IHRlbXBWZWMzX2IgPSBuZXcgVmVjMygpO1xuY29uc3QgdGVtcFF1YXRfYSA9IG5ldyBRdWF0KCk7XG5cbkBjY2NsYXNzKCdTaG9vdGluZ1BsYXllckNvbnRyb2xsZXInKVxuZXhwb3J0IGNsYXNzIFNob290aW5nUGxheWVyQ29udHJvbGxlciBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgQHByb3BlcnR5KHt0eXBlOiBDQ0Zsb2F0fSlcbiAgICBwdWJsaWMgbW92ZVNwZWVkOiBudW1iZXIgPSAxO1xuICAgIEBwcm9wZXJ0eSh7dHlwZTogUHJlZmFifSlcbiAgICBwdWJsaWMgQnVsbGV0UHJlZmFiOiBQcmVmYWIgPSBudWxsO1xuICAgIEBwcm9wZXJ0eSh7dHlwZTogUHJlZmFifSlcbiAgICBwdWJsaWMgZ3JlbmF0ZVByZmI6IFByZWZhYiA9IG51bGw7XG4gICAgQHByb3BlcnR5KHt0eXBlOiBOb2RlfSlcbiAgICBwdWJsaWMgZmlyZVBvaW50OiBOb2RlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoe3R5cGU6IE5vZGV9KVxuICAgIHB1YmxpYyB0aHJvd1BvaW50OiBOb2RlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoe3R5cGU6IE5vZGV9KVxuICAgIHB1YmxpYyB2ZXJ0aWNhbFZpZXdOb2RlOiBOb2RlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoe3R5cGU6IENDRmxvYXR9KVxuICAgIHB1YmxpYyB2aWV3VXBBbmdsZTogbnVtYmVyID0gNjA7XG4gICAgQHByb3BlcnR5KHt0eXBlOiBDQ0Zsb2F0fSlcbiAgICBwdWJsaWMgdmlld0Rvd25BbmdsZTogbnVtYmVyID0gLTYwO1xuXG4gICAgcHJpdmF0ZSBfYW5pbUNvbXA6IEFuaW1hdGlvbkNvbXBvbmVudCA9IG51bGw7XG4gICAgcHJpdmF0ZSBfYW5pbVN0YXRlOiBQbGF5ZXJBbmltU3RhdGUgPSBQbGF5ZXJBbmltU3RhdGUuTm9uZTtcbiAgICBwcml2YXRlIF9hbmltU3RhdGVUb05hbWVNYXA6IGFueSA9IHt9O1xuICAgIHByaXZhdGUgX21vdmVEaXJNYXA6IGFueSA9IHt9O1xuICAgIHByaXZhdGUgX3ZlbG9jaXR5OiBWZWMzID0gbmV3IFZlYzMoKTtcbiAgICBwcml2YXRlIF9yb3RIb3Jpem9udGFsU3BlZWQ6IG51bWJlciA9ICAwLjAwNTtcbiAgICBwcml2YXRlIF9yb3RWZXJ0aWNhbFNwZWVkOiBudW1iZXIgPSAwLjAwMjtcbiAgICBwcml2YXRlIF9idWxsZXRTcGVlZDogbnVtYmVyID0gNTA7XG4gICAgcHJpdmF0ZSBfZ3JlbmFkZUZvcmNlOiBudW1iZXIgPSA1MDtcblxuICAgIG9uTG9hZCgpIHtcbiAgICAgICAgLy/plK7nm5jnm5HlkKxcbiAgICAgICAgc3lzdGVtRXZlbnQub24oU3lzdGVtRXZlbnQuRXZlbnRUeXBlLktFWV9VUCx0aGlzLm9uS2V5VXAsdGhpcyk7XG4gICAgICAgIHN5c3RlbUV2ZW50Lm9uKFN5c3RlbUV2ZW50LkV2ZW50VHlwZS5LRVlfRE9XTix0aGlzLm9uS2V5RG93bix0aGlzKTtcbiAgICAgICAgXG4gICAgICAgIC8v6byg5qCH55uR5ZCsXG4gICAgICAgIHN5c3RlbUV2ZW50Lm9uKFN5c3RlbUV2ZW50LkV2ZW50VHlwZS5NT1VTRV9VUCwgdGhpcy5vbk1vdXNlVXAsIHRoaXMpO1xuICAgICAgICBzeXN0ZW1FdmVudC5vbihTeXN0ZW1FdmVudC5FdmVudFR5cGUuTU9VU0VfRE9XTiwgdGhpcy5vbk1vdXNlRG93biwgdGhpcyk7XG4gICAgICAgIHN5c3RlbUV2ZW50Lm9uKFN5c3RlbUV2ZW50LkV2ZW50VHlwZS5NT1VTRV9NT1ZFLHRoaXMub25Nb3VzZU1vdmUsdGhpcyk7XG4gICAgICAgIFxuICAgICAgICAvL+inpuaRuOebkeWQrFxuICAgICAgICBzeXN0ZW1FdmVudC5vbihTeXN0ZW1FdmVudC5FdmVudFR5cGUuVE9VQ0hfTU9WRSx0aGlzLm9uVG91Y2hNb3ZlLHRoaXMpO1xuXG4gICAgICAgIHRoaXMuX2FuaW1TdGF0ZVRvTmFtZU1hcFtQbGF5ZXJBbmltU3RhdGUuSWRsZV0gPSAnSWRsZSc7XG4gICAgICAgIHRoaXMuX2FuaW1TdGF0ZVRvTmFtZU1hcFtQbGF5ZXJBbmltU3RhdGUuUnVubmluZ10gPSAnUnVuJztcbiAgICAgICAgdGhpcy5fYW5pbVN0YXRlVG9OYW1lTWFwW1BsYXllckFuaW1TdGF0ZS5KdW1waW5nXSA9ICdKdW1wJztcbiAgICAgICAgdGhpcy5fYW5pbVN0YXRlVG9OYW1lTWFwW1BsYXllckFuaW1TdGF0ZS5TaG9vdGluZ10gPSAnU2hvb3RUb3Jzb0FybXNSaWZsZSc7XG5cblxuICAgICAgICB0aGlzLl9tb3ZlRGlyTWFwW01vdmVEaXIuTGVmdF0gPSBuZXcgVmVjMygxLCAwLCAwKTtcbiAgICAgICAgdGhpcy5fbW92ZURpck1hcFtNb3ZlRGlyLlJpZ2h0XSA9IG5ldyBWZWMzKC0xLCAwLCAwKTtcbiAgICAgICAgdGhpcy5fbW92ZURpck1hcFtNb3ZlRGlyLkZvcndhcmRdID0gbmV3IFZlYzMoMCwgMCwgMSk7XG4gICAgICAgIHRoaXMuX21vdmVEaXJNYXBbTW92ZURpci5CYWNrd2FyZF0gPSBuZXcgVmVjMygwLCAwLCAtMSk7XG4gICAgICAgIFxuICAgIH1cblxuICAgIHN0YXJ0ICgpIHtcbiAgICAgICAgLy8gWW91ciBpbml0aWFsaXphdGlvbiBnb2VzIGhlcmUuXG4gICAgICAgIHRoaXMuX2FuaW1Db21wID0gdGhpcy5ub2RlLmdldENvbXBvbmVudChBbmltYXRpb25Db21wb25lbnQpO1xuICAgICAgICB0aGlzLl9hbmltQ29tcC5vbihBbmltYXRpb25Db21wb25lbnQuRXZlbnRUeXBlLkZJTklTSEVELCB0aGlzLm9uQW5pbWF0aW9uRW5kLCB0aGlzKTtcbiAgICAgICAgdGhpcy5jaGFuZ2VUb0FuaW1TdGF0ZShQbGF5ZXJBbmltU3RhdGUuSWRsZSk7XG4gICAgfVxuXG4gICAgZG9BY3Rpb24oYWN0aW9uOiBBY3Rpb25UeXBlLCBlbmFibGU6IGJvb2xlYW4pIHtcbiAgICAgICAgc3dpdGNoKGFjdGlvbikge1xuICAgICAgICAgICAgY2FzZSBBY3Rpb25UeXBlLkZvcndhcmQ6XG4gICAgICAgICAgICAgICAgaWYgKGVuYWJsZSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl92ZWxvY2l0eS56ID0gMTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jaGFuZ2VUb0FuaW1TdGF0ZShQbGF5ZXJBbmltU3RhdGUuUnVubmluZyk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuX3ZlbG9jaXR5LnogPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl92ZWxvY2l0eS56ID0gMDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNoZWNrVG9JZGxlKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBBY3Rpb25UeXBlLkJhY2t3YXJkOlxuICAgICAgICAgICAgICAgIGlmIChlbmFibGUpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fdmVsb2NpdHkueiA9IC0xO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNoYW5nZVRvQW5pbVN0YXRlKFBsYXllckFuaW1TdGF0ZS5SdW5uaW5nKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5fdmVsb2NpdHkueiA8IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX3ZlbG9jaXR5LnogPSAwO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2hlY2tUb0lkbGUoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIEFjdGlvblR5cGUuTGVmdDpcbiAgICAgICAgICAgICAgICBpZiAoZW5hYmxlKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3ZlbG9jaXR5LnggPSAxO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNoYW5nZVRvQW5pbVN0YXRlKFBsYXllckFuaW1TdGF0ZS5SdW5uaW5nKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5fdmVsb2NpdHkueCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX3ZlbG9jaXR5LnggPSAwO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2hlY2tUb0lkbGUoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIEFjdGlvblR5cGUuUmlnaHQ6XG4gICAgICAgICAgICAgICAgaWYgKGVuYWJsZSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl92ZWxvY2l0eS54ID0gLTE7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2hhbmdlVG9BbmltU3RhdGUoUGxheWVyQW5pbVN0YXRlLlJ1bm5pbmcpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLl92ZWxvY2l0eS54IDwgMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fdmVsb2NpdHkueCA9IDA7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jaGVja1RvSWRsZSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgQWN0aW9uVHlwZS5TaG9vdDpcbiAgICAgICAgICAgICAgICBpZiAoZW5hYmxlKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2hhbmdlVG9BbmltU3RhdGUoUGxheWVyQW5pbVN0YXRlLlNob290aW5nKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zaG9vdCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgQWN0aW9uVHlwZS5UaHJvd0dyZW5hZGU6XG4gICAgICAgICAgICAgICAgaWYgKGVuYWJsZSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnRocm93R3JlbmFkZSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uS2V5RG93bihldmVudCl7XG4gICAgICAgIHN3aXRjaChldmVudC5rZXlDb2RlKSB7XG4gICAgICAgICAgICBjYXNlIG1hY3JvLktFWS5hOlxuICAgICAgICAgICAgICAgIHRoaXMuZG9BY3Rpb24oQWN0aW9uVHlwZS5MZWZ0LCB0cnVlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgbWFjcm8uS0VZLmQ6XG4gICAgICAgICAgICAgICAgdGhpcy5kb0FjdGlvbihBY3Rpb25UeXBlLlJpZ2h0LCB0cnVlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgbWFjcm8uS0VZLnc6XG4gICAgICAgICAgICAgICAgdGhpcy5kb0FjdGlvbihBY3Rpb25UeXBlLkZvcndhcmQsIHRydWUpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBtYWNyby5LRVkuczpcbiAgICAgICAgICAgICAgICB0aGlzLmRvQWN0aW9uKEFjdGlvblR5cGUuQmFja3dhcmQsIHRydWUpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBtYWNyby5LRVkuZzpcbiAgICAgICAgICAgICAgICB0aGlzLmRvQWN0aW9uKEFjdGlvblR5cGUuVGhyb3dHcmVuYWRlLCB0cnVlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgbWFjcm8uS0VZLnNwYWNlOlxuICAgICAgICAgICAgICAgIC8vIHRoaXMuY2hhbmdlVG9BbmltU3RhdGUoUGxheWVyQW5pbVN0YXRlLkp1bXBpbmcpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY2hlY2tUb0lkbGUoKSB7XG4gICAgICAgIGlmICh0aGlzLl92ZWxvY2l0eS54ID09PSAwICYmXG4gICAgICAgICAgICB0aGlzLl92ZWxvY2l0eS55ID09PSAwICYmXG4gICAgICAgICAgICB0aGlzLl92ZWxvY2l0eS56ID09PSAwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jaGFuZ2VUb0FuaW1TdGF0ZShQbGF5ZXJBbmltU3RhdGUuSWRsZSk7XG4gICAgICAgICAgICB9XG4gICAgfVxuXG4gICAgb25LZXlVcChldmVudCl7XG4gICAgICAgIHN3aXRjaChldmVudC5rZXlDb2RlKSB7XG4gICAgICAgICAgICBjYXNlIG1hY3JvLktFWS5hOlxuICAgICAgICAgICAgICAgIHRoaXMuZG9BY3Rpb24oQWN0aW9uVHlwZS5MZWZ0LCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIG1hY3JvLktFWS5kOlxuICAgICAgICAgICAgICAgIHRoaXMuZG9BY3Rpb24oQWN0aW9uVHlwZS5SaWdodCwgZmFsc2UpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBtYWNyby5LRVkudzpcbiAgICAgICAgICAgICAgICB0aGlzLmRvQWN0aW9uKEFjdGlvblR5cGUuRm9yd2FyZCwgZmFsc2UpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBtYWNyby5LRVkuczpcbiAgICAgICAgICAgICAgICB0aGlzLmRvQWN0aW9uKEFjdGlvblR5cGUuQmFja3dhcmQsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgbWFjcm8uS0VZLnNwYWNlOlxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25Nb3VzZURvd24oZXZlbnQpIHtcbiAgICAgICAgaWYgKGV2ZW50LmdldEJ1dHRvbigpID09PSAyKSB7XG4gICAgICAgICAgICBnYW1lLmNhbnZhcy5yZXF1ZXN0UG9pbnRlckxvY2soKTtcbiAgICAgICAgfSBcblxuICAgIH1cblxuICAgIG9uTW91c2VVcChldmVudCl7XG4gICAgICAgIGlmIChldmVudC5nZXRCdXR0b24oKSA9PT0gMCkgeyAgLy8g6byg5qCH5bem6ZSuXG4gICAgICAgICAgICB0aGlzLmNoYW5nZVRvQW5pbVN0YXRlKFBsYXllckFuaW1TdGF0ZS5TaG9vdGluZyk7XG4gICAgICAgICAgICB0aGlzLnNob290KCk7XG4gICAgICAgIH0gXG4gICAgfVxuXG4gICAgb25Nb3VzZU1vdmUoZXZlbnQ6RXZlbnRNb3VzZSl7ICAgIFxuICAgICAgICBpZihldmVudC5tb3ZlbWVudFggIT0gMCl7XG4gICAgICAgICAgICBjb25zdCBob3Jpem9udGFsUm90ID0gdGhpcy5ub2RlLmdldFJvdGF0aW9uKCk7XG4gICAgICAgICAgICBRdWF0LnJvdGF0ZUFyb3VuZChob3Jpem9udGFsUm90LCBob3Jpem9udGFsUm90LCBWZWMzLlVOSVRfWSwgLWV2ZW50Lm1vdmVtZW50WCAqIHRoaXMuX3JvdEhvcml6b250YWxTcGVlZCk7XG4gICAgICAgICAgICB0aGlzLm5vZGUuc2V0Um90YXRpb24oaG9yaXpvbnRhbFJvdCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZihldmVudC5tb3ZlbWVudFkgIT0gMCkge1xuICAgICAgICAgICAgY29uc3QgdmVydGljYWxSb3QgPSB0aGlzLnZlcnRpY2FsVmlld05vZGUuZ2V0Um90YXRpb24oKTtcbiAgICAgICAgICAgIFF1YXQucm90YXRlQXJvdW5kKHZlcnRpY2FsUm90LCB2ZXJ0aWNhbFJvdCwgVmVjMy5VTklUX1gsIGV2ZW50Lm1vdmVtZW50WSAqIHRoaXMuX3JvdFZlcnRpY2FsU3BlZWQpO1xuICAgICAgICAgICAgdmVydGljYWxSb3QuZ2V0RXVsZXJBbmdsZXModGVtcFZlYzNfYSlcbiAgICAgICAgICAgIGlmICh0ZW1wVmVjM19hLnggPiB0aGlzLnZpZXdEb3duQW5nbGUgJiYgdGVtcFZlYzNfYS54IDwgdGhpcy52aWV3VXBBbmdsZSkge1xuICAgICAgICAgICAgICAgIHRoaXMudmVydGljYWxWaWV3Tm9kZS5zZXRSb3RhdGlvbih2ZXJ0aWNhbFJvdCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvblRvdWNoTW92ZShldmVudCl7XG4gICAgICAgIGlmKGV2ZW50LmdldERlbHRhKCkueCAhPSAwKXtcbiAgICAgICAgICAgIGNvbnN0IGhvcml6b250YWxSb3QgPSB0aGlzLm5vZGUuZ2V0Um90YXRpb24oKTtcbiAgICAgICAgICAgIFF1YXQucm90YXRlQXJvdW5kKGhvcml6b250YWxSb3QsIGhvcml6b250YWxSb3QsIFZlYzMuVU5JVF9ZLCAtZXZlbnQuZ2V0RGVsdGEoKS54ICogdGhpcy5fcm90SG9yaXpvbnRhbFNwZWVkKTtcbiAgICAgICAgICAgIHRoaXMubm9kZS5zZXRSb3RhdGlvbihob3Jpem9udGFsUm90KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmKGV2ZW50LmdldERlbHRhKCkueSAhPSAwKSB7XG4gICAgICAgICAgICBjb25zdCB2ZXJ0aWNhbFJvdCA9IHRoaXMudmVydGljYWxWaWV3Tm9kZS5nZXRSb3RhdGlvbigpO1xuICAgICAgICAgICAgUXVhdC5yb3RhdGVBcm91bmQodmVydGljYWxSb3QsIHZlcnRpY2FsUm90LCBWZWMzLlVOSVRfWCwgZXZlbnQuZ2V0RGVsdGEoKS55ICogdGhpcy5fcm90VmVydGljYWxTcGVlZCk7XG4gICAgICAgICAgICB2ZXJ0aWNhbFJvdC5nZXRFdWxlckFuZ2xlcyh0ZW1wVmVjM19hKVxuICAgICAgICAgICAgaWYgKHRlbXBWZWMzX2EueCA+IHRoaXMudmlld0Rvd25BbmdsZSAmJiB0ZW1wVmVjM19hLnggPCB0aGlzLnZpZXdVcEFuZ2xlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy52ZXJ0aWNhbFZpZXdOb2RlLnNldFJvdGF0aW9uKHZlcnRpY2FsUm90KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNoYW5nZVRvQW5pbVN0YXRlKHN0YXRlOiBQbGF5ZXJBbmltU3RhdGUpIHtcbiAgICAgICAgaWYgKHRoaXMuX2FuaW1TdGF0ZSA9PT0gUGxheWVyQW5pbVN0YXRlLklkbGUpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLl9hbmltU3RhdGUgIT09IHN0YXRlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fYW5pbUNvbXAucGxheSh0aGlzLl9hbmltU3RhdGVUb05hbWVNYXBbc3RhdGVdKTtcbiAgICAgICAgICAgICAgICB0aGlzLl9hbmltU3RhdGUgPSBzdGF0ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmIChzdGF0ZSA9PT0gUGxheWVyQW5pbVN0YXRlLklkbGUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9hbmltQ29tcC5wbGF5KHRoaXMuX2FuaW1TdGF0ZVRvTmFtZU1hcFtzdGF0ZV0pO1xuICAgICAgICAgICAgICAgIHRoaXMuX2FuaW1TdGF0ZSA9IHN0YXRlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25BbmltYXRpb25FbmQodHlwZSwgc3RhdGUpIHtcbiAgICAgICAgaWYgKHN0YXRlLm5hbWUgPT09IHRoaXMuX2FuaW1TdGF0ZVRvTmFtZU1hcFtQbGF5ZXJBbmltU3RhdGUuU2hvb3RpbmddKSB7XG4gICAgICAgICAgICB0aGlzLmNoYW5nZVRvQW5pbVN0YXRlKFBsYXllckFuaW1TdGF0ZS5JZGxlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHNob290KCkge1xuICAgICAgICBsZXQgc2NlbmUgPSBkaXJlY3Rvci5nZXRTY2VuZSgpO1xuICAgICAgICBsZXQgbmV3QnVsbGV0OiBhbnkgPSBpbnN0YW50aWF0ZSh0aGlzLkJ1bGxldFByZWZhYik7XG4gICAgICAgIC8vIHRzLWlnbm9yZVxuICAgICAgICBzY2VuZS5hZGRDaGlsZChuZXdCdWxsZXQpO1xuICAgICAgICBuZXdCdWxsZXQuc2V0UG9zaXRpb24odGhpcy5maXJlUG9pbnQuZ2V0V29ybGRQb3NpdGlvbigpKTtcbiAgICAgICAgY29uc3QgYnVsbGV0OiBCdWxsZXQgPSBuZXdCdWxsZXQuZ2V0Q29tcG9uZW50KEJ1bGxldCk7XG4gICAgICAgIGxldCBkaXIgPSBuZXcgVmVjMygwLCAwLCAxKTtcbiAgICAgICAgVmVjMy50cmFuc2Zvcm1RdWF0KGRpciwgZGlyLCB0aGlzLmZpcmVQb2ludC5nZXRXb3JsZFJvdGF0aW9uKCkpO1xuICAgICAgICBWZWMzLm11bHRpcGx5U2NhbGFyKGRpciwgZGlyLCB0aGlzLl9idWxsZXRTcGVlZCk7XG4gICAgICAgIGJ1bGxldC5pbml0KGRpcik7XG4gICAgfVxuXG4gICAgdGhyb3dHcmVuYWRlKCkge1xuICAgICAgICBsZXQgc2NlbmUgPSBkaXJlY3Rvci5nZXRTY2VuZSgpO1xuICAgICAgICBsZXQgbmV3R3JlbmFkZTogYW55ID0gaW5zdGFudGlhdGUodGhpcy5ncmVuYXRlUHJmYik7XG4gICAgICAgIHNjZW5lLmFkZENoaWxkKG5ld0dyZW5hZGUpO1xuICAgICAgICBuZXdHcmVuYWRlLnNldFBvc2l0aW9uKHRoaXMudGhyb3dQb2ludC5nZXRXb3JsZFBvc2l0aW9uKCkpO1xuICAgICAgICBjb25zdCBncmVuYWRlOiBHcmVuYWRlID0gbmV3R3JlbmFkZS5nZXRDb21wb25lbnQoR3JlbmFkZSk7XG4gICAgICAgIGxldCBkaXIgPSBuZXcgVmVjMygwLCAwLCAxKTtcbiAgICAgICAgVmVjMy50cmFuc2Zvcm1RdWF0KGRpciwgZGlyLCB0aGlzLnRocm93UG9pbnQuZ2V0V29ybGRSb3RhdGlvbigpKTtcbiAgICAgICAgVmVjMy5tdWx0aXBseVNjYWxhcihkaXIsIGRpciwgdGhpcy5fZ3JlbmFkZUZvcmNlKTtcbiAgICAgICAgZ3JlbmFkZS5pbml0KGRpcik7XG4gICAgfVxuXG4gICAgbW92ZShkZWx0YVRpbWU6IG51bWJlcikge1xuICAgICAgICBsZXQgY3VyUG9zID0gdGVtcFZlYzNfYTtcbiAgICAgICAgY29uc3QgZGlyID0gdGhpcy5fdmVsb2NpdHk7XG4gICAgICAgIHRoaXMubm9kZS5nZXRXb3JsZFBvc2l0aW9uKGN1clBvcyk7XG4gICAgICAgIHRoaXMubm9kZS5nZXRXb3JsZFJvdGF0aW9uKHRlbXBRdWF0X2EpO1xuICAgICAgICBWZWMzLnRyYW5zZm9ybVF1YXQodGVtcFZlYzNfYiwgZGlyLCB0ZW1wUXVhdF9hKTtcbiAgICAgICAgVmVjMy5zY2FsZUFuZEFkZChjdXJQb3MsIGN1clBvcywgdGVtcFZlYzNfYiwgZGVsdGFUaW1lICogdGhpcy5tb3ZlU3BlZWQpO1xuICAgICAgICB0aGlzLm5vZGUuc2V0V29ybGRQb3NpdGlvbihjdXJQb3MpO1xuICAgIH1cblxuICAgIHVwZGF0ZSAoZGVsdGFUaW1lOiBudW1iZXIpIHtcbiAgICAgICAgLy8gWW91ciB1cGRhdGUgZnVuY3Rpb24gZ29lcyBoZXJlLlxuICAgICAgICBpZiAodGhpcy5fYW5pbVN0YXRlID09PSBQbGF5ZXJBbmltU3RhdGUuUnVubmluZykge1xuICAgICAgICAgICAgdGhpcy5tb3ZlKGRlbHRhVGltZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvbkRlc3Ryb3koKSB7XG4gICAgICAgIC8vIOWPlua2iOmUruebmOebkeWQrFxuICAgICAgICBzeXN0ZW1FdmVudC5vZmYoU3lzdGVtRXZlbnQuRXZlbnRUeXBlLktFWV9VUCx0aGlzLm9uS2V5VXAsdGhpcyk7XG4gICAgICAgIHN5c3RlbUV2ZW50Lm9mZihTeXN0ZW1FdmVudC5FdmVudFR5cGUuS0VZX0RPV04sdGhpcy5vbktleURvd24sdGhpcyk7XG4gICAgICAgIFxuICAgICAgICAvLyDlj5bmtojpvKDmoIfnm5HlkKxcbiAgICAgICAgc3lzdGVtRXZlbnQub2ZmKFN5c3RlbUV2ZW50LkV2ZW50VHlwZS5NT1VTRV9VUCwgdGhpcy5vbk1vdXNlVXAsIHRoaXMpO1xuICAgICAgICBzeXN0ZW1FdmVudC5vZmYoU3lzdGVtRXZlbnQuRXZlbnRUeXBlLk1PVVNFX0RPV04sIHRoaXMub25Nb3VzZURvd24sIHRoaXMpO1xuICAgICAgICBzeXN0ZW1FdmVudC5vZmYoU3lzdGVtRXZlbnQuRXZlbnRUeXBlLk1PVVNFX01PVkUsdGhpcy5vbk1vdXNlTW92ZSx0aGlzKTtcbiAgICAgICAgXG4gICAgICAgIC8vIOWPlua2iOinpuaRuOebkeWQrFxuICAgICAgICBzeXN0ZW1FdmVudC5vZmYoU3lzdGVtRXZlbnQuRXZlbnRUeXBlLlRPVUNIX01PVkUsdGhpcy5vblRvdWNoTW92ZSx0aGlzKTtcbiAgICB9XG59XG4iXX0=