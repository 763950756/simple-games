System.register(["cce.code-quality.cr", "cc", "./Bullet.js", "./GameDefines.js", "./Grenade.js"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, Node, AnimationComponent, systemEvent, SystemEvent, macro, Vec3, game, Quat, CCFloat, Prefab, director, instantiate, Bullet, ActionType, Grenade, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _temp, _crd, ccclass, property, PlayerAnimState, MoveDir, tempVec3_a, tempVec3_b, tempQuat_a, ShootingPlayerController;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

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

      ccclass = _decorator.ccclass;
      property = _decorator.property;

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
      }), _dec(_class = (_class2 = (_temp = /*#__PURE__*/function (_Component) {
        _inheritsLoose(ShootingPlayerController, _Component);

        function ShootingPlayerController() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_this, "moveSpeed", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "BulletPrefab", _descriptor2, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "grenatePrfb", _descriptor3, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "firePoint", _descriptor4, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "throwPoint", _descriptor5, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "verticalViewNode", _descriptor6, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "viewUpAngle", _descriptor7, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "viewDownAngle", _descriptor8, _assertThisInitialized(_this));

          _this._animComp = null;
          _this._animState = PlayerAnimState.None;
          _this._animStateToNameMap = {};
          _this._moveDirMap = {};
          _this._velocity = new Vec3();
          _this._rotHorizontalSpeed = 0.005;
          _this._rotVerticalSpeed = 0.002;
          _this._bulletSpeed = 50;
          _this._grenadeForce = 50;
          return _this;
        }

        var _proto = ShootingPlayerController.prototype;

        _proto.onLoad = function onLoad() {
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
        };

        _proto.start = function start() {
          // Your initialization goes here.
          this._animComp = this.node.getComponent(AnimationComponent);

          this._animComp.on(AnimationComponent.EventType.FINISHED, this.onAnimationEnd, this);

          this.changeToAnimState(PlayerAnimState.Idle);
        };

        _proto.doAction = function doAction(action, enable) {
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
        };

        _proto.onKeyDown = function onKeyDown(event) {
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
        };

        _proto.checkToIdle = function checkToIdle() {
          if (this._velocity.x === 0 && this._velocity.y === 0 && this._velocity.z === 0) {
            this.changeToAnimState(PlayerAnimState.Idle);
          }
        };

        _proto.onKeyUp = function onKeyUp(event) {
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
        };

        _proto.onMouseDown = function onMouseDown(event) {
          if (event.getButton() === 2) {
            game.canvas.requestPointerLock();
          }
        };

        _proto.onMouseUp = function onMouseUp(event) {
          if (event.getButton() === 0) {
            // 鼠标左键
            this.changeToAnimState(PlayerAnimState.Shooting);
            this.shoot();
          }
        };

        _proto.onMouseMove = function onMouseMove(event) {
          if (event.movementX != 0) {
            var horizontalRot = this.node.getRotation();
            Quat.rotateAround(horizontalRot, horizontalRot, Vec3.UNIT_Y, -event.movementX * this._rotHorizontalSpeed);
            this.node.setRotation(horizontalRot);
          }

          if (event.movementY != 0) {
            var verticalRot = this.verticalViewNode.getRotation();
            Quat.rotateAround(verticalRot, verticalRot, Vec3.UNIT_X, event.movementY * this._rotVerticalSpeed);
            verticalRot.getEulerAngles(tempVec3_a);

            if (tempVec3_a.x > this.viewDownAngle && tempVec3_a.x < this.viewUpAngle) {
              this.verticalViewNode.setRotation(verticalRot);
            }
          }
        };

        _proto.onTouchMove = function onTouchMove(event) {
          if (event.getDelta().x != 0) {
            var horizontalRot = this.node.getRotation();
            Quat.rotateAround(horizontalRot, horizontalRot, Vec3.UNIT_Y, -event.getDelta().x * this._rotHorizontalSpeed);
            this.node.setRotation(horizontalRot);
          }

          if (event.getDelta().y != 0) {
            var verticalRot = this.verticalViewNode.getRotation();
            Quat.rotateAround(verticalRot, verticalRot, Vec3.UNIT_X, event.getDelta().y * this._rotVerticalSpeed);
            verticalRot.getEulerAngles(tempVec3_a);

            if (tempVec3_a.x > this.viewDownAngle && tempVec3_a.x < this.viewUpAngle) {
              this.verticalViewNode.setRotation(verticalRot);
            }
          }
        };

        _proto.changeToAnimState = function changeToAnimState(state) {
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
        };

        _proto.onAnimationEnd = function onAnimationEnd(type, state) {
          if (state.name === this._animStateToNameMap[PlayerAnimState.Shooting]) {
            this.changeToAnimState(PlayerAnimState.Idle);
          }
        };

        _proto.shoot = function shoot() {
          var scene = director.getScene();
          var newBullet = instantiate(this.BulletPrefab); // ts-ignore

          scene.addChild(newBullet);
          newBullet.setPosition(this.firePoint.getWorldPosition());
          var bullet = newBullet.getComponent(_crd && Bullet === void 0 ? (_reportPossibleCrUseOfBullet({
            error: Error()
          }), Bullet) : Bullet);
          var dir = new Vec3(0, 0, 1);
          Vec3.transformQuat(dir, dir, this.firePoint.getWorldRotation());
          Vec3.multiplyScalar(dir, dir, this._bulletSpeed);
          bullet.init(dir);
        };

        _proto.throwGrenade = function throwGrenade() {
          var scene = director.getScene();
          var newGrenade = instantiate(this.grenatePrfb);
          scene.addChild(newGrenade);
          newGrenade.setPosition(this.throwPoint.getWorldPosition());
          var grenade = newGrenade.getComponent(_crd && Grenade === void 0 ? (_reportPossibleCrUseOfGrenade({
            error: Error()
          }), Grenade) : Grenade);
          var dir = new Vec3(0, 0, 1);
          Vec3.transformQuat(dir, dir, this.throwPoint.getWorldRotation());
          Vec3.multiplyScalar(dir, dir, this._grenadeForce);
          grenade.init(dir);
        };

        _proto.move = function move(deltaTime) {
          var curPos = tempVec3_a;
          var dir = this._velocity;
          this.node.getWorldPosition(curPos);
          this.node.getWorldRotation(tempQuat_a);
          Vec3.transformQuat(tempVec3_b, dir, tempQuat_a);
          Vec3.scaleAndAdd(curPos, curPos, tempVec3_b, deltaTime * this.moveSpeed);
          this.node.setWorldPosition(curPos);
        };

        _proto.update = function update(deltaTime) {
          // Your update function goes here.
          if (this._animState === PlayerAnimState.Running) {
            this.move(deltaTime);
          }
        };

        _proto.onDestroy = function onDestroy() {
          // 取消键盘监听
          systemEvent.off(SystemEvent.EventType.KEY_UP, this.onKeyUp, this);
          systemEvent.off(SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this); // 取消鼠标监听

          systemEvent.off(SystemEvent.EventType.MOUSE_UP, this.onMouseUp, this);
          systemEvent.off(SystemEvent.EventType.MOUSE_DOWN, this.onMouseDown, this);
          systemEvent.off(SystemEvent.EventType.MOUSE_MOVE, this.onMouseMove, this); // 取消触摸监听

          systemEvent.off(SystemEvent.EventType.TOUCH_MOVE, this.onTouchMove, this);
        };

        return ShootingPlayerController;
      }(Component), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "moveSpeed", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 1;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "BulletPrefab", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "grenatePrfb", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "firePoint", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "throwPoint", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "verticalViewNode", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "viewUpAngle", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 60;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "viewDownAngle", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return -60;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vVXNlcnMvbWFjL0Rvd25sb2Fkcy9leGFtcGxlLTNkLW1hc3Rlci9zaW1wbGUtZ2FtZXMvYXNzZXRzL3NpbXBsZS1zaG9vdGluZy9zY3JpcHRzL1Nob290aW5nUGxheWVyQ29udHJvbGxlci50cyJdLCJuYW1lcyI6WyJfZGVjb3JhdG9yIiwiQ29tcG9uZW50IiwiTm9kZSIsIkFuaW1hdGlvbkNvbXBvbmVudCIsInN5c3RlbUV2ZW50IiwiU3lzdGVtRXZlbnQiLCJtYWNybyIsIlZlYzMiLCJnYW1lIiwiUXVhdCIsIkNDRmxvYXQiLCJQcmVmYWIiLCJkaXJlY3RvciIsImluc3RhbnRpYXRlIiwiQnVsbGV0IiwiQWN0aW9uVHlwZSIsIkdyZW5hZGUiLCJjY2NsYXNzIiwicHJvcGVydHkiLCJQbGF5ZXJBbmltU3RhdGUiLCJNb3ZlRGlyIiwidGVtcFZlYzNfYSIsInRlbXBWZWMzX2IiLCJ0ZW1wUXVhdF9hIiwiU2hvb3RpbmdQbGF5ZXJDb250cm9sbGVyIiwidHlwZSIsIl9hbmltQ29tcCIsIl9hbmltU3RhdGUiLCJOb25lIiwiX2FuaW1TdGF0ZVRvTmFtZU1hcCIsIl9tb3ZlRGlyTWFwIiwiX3ZlbG9jaXR5IiwiX3JvdEhvcml6b250YWxTcGVlZCIsIl9yb3RWZXJ0aWNhbFNwZWVkIiwiX2J1bGxldFNwZWVkIiwiX2dyZW5hZGVGb3JjZSIsIm9uTG9hZCIsIm9uIiwiRXZlbnRUeXBlIiwiS0VZX1VQIiwib25LZXlVcCIsIktFWV9ET1dOIiwib25LZXlEb3duIiwiTU9VU0VfVVAiLCJvbk1vdXNlVXAiLCJNT1VTRV9ET1dOIiwib25Nb3VzZURvd24iLCJNT1VTRV9NT1ZFIiwib25Nb3VzZU1vdmUiLCJUT1VDSF9NT1ZFIiwib25Ub3VjaE1vdmUiLCJJZGxlIiwiUnVubmluZyIsIkp1bXBpbmciLCJTaG9vdGluZyIsIkxlZnQiLCJSaWdodCIsIkZvcndhcmQiLCJCYWNrd2FyZCIsInN0YXJ0Iiwibm9kZSIsImdldENvbXBvbmVudCIsIkZJTklTSEVEIiwib25BbmltYXRpb25FbmQiLCJjaGFuZ2VUb0FuaW1TdGF0ZSIsImRvQWN0aW9uIiwiYWN0aW9uIiwiZW5hYmxlIiwieiIsImNoZWNrVG9JZGxlIiwieCIsIlNob290Iiwic2hvb3QiLCJUaHJvd0dyZW5hZGUiLCJ0aHJvd0dyZW5hZGUiLCJldmVudCIsImtleUNvZGUiLCJLRVkiLCJhIiwiZCIsInciLCJzIiwiZyIsInNwYWNlIiwieSIsImdldEJ1dHRvbiIsImNhbnZhcyIsInJlcXVlc3RQb2ludGVyTG9jayIsIm1vdmVtZW50WCIsImhvcml6b250YWxSb3QiLCJnZXRSb3RhdGlvbiIsInJvdGF0ZUFyb3VuZCIsIlVOSVRfWSIsInNldFJvdGF0aW9uIiwibW92ZW1lbnRZIiwidmVydGljYWxSb3QiLCJ2ZXJ0aWNhbFZpZXdOb2RlIiwiVU5JVF9YIiwiZ2V0RXVsZXJBbmdsZXMiLCJ2aWV3RG93bkFuZ2xlIiwidmlld1VwQW5nbGUiLCJnZXREZWx0YSIsInN0YXRlIiwicGxheSIsIm5hbWUiLCJzY2VuZSIsImdldFNjZW5lIiwibmV3QnVsbGV0IiwiQnVsbGV0UHJlZmFiIiwiYWRkQ2hpbGQiLCJzZXRQb3NpdGlvbiIsImZpcmVQb2ludCIsImdldFdvcmxkUG9zaXRpb24iLCJidWxsZXQiLCJkaXIiLCJ0cmFuc2Zvcm1RdWF0IiwiZ2V0V29ybGRSb3RhdGlvbiIsIm11bHRpcGx5U2NhbGFyIiwiaW5pdCIsIm5ld0dyZW5hZGUiLCJncmVuYXRlUHJmYiIsInRocm93UG9pbnQiLCJncmVuYWRlIiwibW92ZSIsImRlbHRhVGltZSIsImN1clBvcyIsInNjYWxlQW5kQWRkIiwibW92ZVNwZWVkIiwic2V0V29ybGRQb3NpdGlvbiIsInVwZGF0ZSIsIm9uRGVzdHJveSIsIm9mZiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQVNBLE1BQUFBLFUsT0FBQUEsVTtBQUFZQyxNQUFBQSxTLE9BQUFBLFM7QUFBV0MsTUFBQUEs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WTtBQUNSO0FBQ0E5SCxVQUFBQSxXQUFXLENBQUMrSCxHQUFaLENBQWdCOUgsV0FBVyxDQUFDaUMsU0FBWixDQUFzQkMsTUFBdEMsRUFBNkMsS0FBS0MsT0FBbEQsRUFBMEQsSUFBMUQ7QUFDQXBDLFVBQUFBLFdBQVcsQ0FBQytILEdBQVosQ0FBZ0I5SCxXQUFXLENBQUNpQyxTQUFaLENBQXNCRyxRQUF0QyxFQUErQyxLQUFLQyxTQUFwRCxFQUE4RCxJQUE5RCxFQUhRLENBS1I7O0FBQ0F0QyxVQUFBQSxXQUFXLENBQUMrSCxHQUFaLENBQWdCOUgsV0FBVyxDQUFDaUMsU0FBWixDQUFzQkssUUFBdEMsRUFBZ0QsS0FBS0MsU0FBckQsRUFBZ0UsSUFBaEU7QUFDQXhDLFVBQUFBLFdBQVcsQ0FBQytILEdBQVosQ0FBZ0I5SCxXQUFXLENBQUNpQyxTQUFaLENBQXNCTyxVQUF0QyxFQUFrRCxLQUFLQyxXQUF2RCxFQUFvRSxJQUFwRTtBQUNBMUMsVUFBQUEsV0FBVyxDQUFDK0gsR0FBWixDQUFnQjlILFdBQVcsQ0FBQ2lDLFNBQVosQ0FBc0JTLFVBQXRDLEVBQWlELEtBQUtDLFdBQXRELEVBQWtFLElBQWxFLEVBUlEsQ0FVUjs7QUFDQTVDLFVBQUFBLFdBQVcsQ0FBQytILEdBQVosQ0FBZ0I5SCxXQUFXLENBQUNpQyxTQUFaLENBQXNCVyxVQUF0QyxFQUFpRCxLQUFLQyxXQUF0RCxFQUFrRSxJQUFsRTtBQUNILFM7OztRQXJTeUNqRCxTOzs7OztpQkFFZixDOzs7Ozs7O2lCQUVHLEk7Ozs7Ozs7aUJBRUQsSTs7Ozs7OztpQkFFSixJOzs7Ozs7O2lCQUVDLEk7Ozs7Ozs7aUJBRU0sSTs7Ozs7OztpQkFFSCxFOzs7Ozs7O2lCQUVFLENBQUMsRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IF9kZWNvcmF0b3IsIENvbXBvbmVudCwgTm9kZSwgQW5pbWF0aW9uQ29tcG9uZW50LCBzeXN0ZW1FdmVudCwgU3lzdGVtRXZlbnQsIG1hY3JvLCBWZWMzLCBtYXRoLCBnYW1lLCBRdWF0LCBDQ0Zsb2F0LCBQcmVmYWIsIGRpcmVjdG9yLCBpbnN0YW50aWF0ZSwgU2NlbmUsIEV2ZW50TW91c2UgfSBmcm9tICdjYyc7XG5pbXBvcnQgeyBCdWxsZXQgfSBmcm9tICcuL0J1bGxldCc7XG5pbXBvcnQgeyBBY3Rpb25UeXBlIH0gZnJvbSAnLi9HYW1lRGVmaW5lcyc7XG5pbXBvcnQgeyBHcmVuYWRlIH0gZnJvbSAnLi9HcmVuYWRlJztcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IF9kZWNvcmF0b3I7XG5cbmVudW0gUGxheWVyQW5pbVN0YXRlIHtcbiAgICBOb25lLFxuICAgIElkbGUsXG4gICAgUnVubmluZyxcbiAgICBKdW1waW5nLFxuICAgIFNob290aW5nLFxufVxuXG5lbnVtIE1vdmVEaXIge1xuICAgIExlZnQsXG4gICAgUmlnaHQsXG4gICAgRm9yd2FyZCxcbiAgICBCYWNrd2FyZCxcbn1cblxuY29uc3QgdGVtcFZlYzNfYSA9IG5ldyBWZWMzKCk7XG5jb25zdCB0ZW1wVmVjM19iID0gbmV3IFZlYzMoKTtcbmNvbnN0IHRlbXBRdWF0X2EgPSBuZXcgUXVhdCgpO1xuXG5AY2NjbGFzcygnU2hvb3RpbmdQbGF5ZXJDb250cm9sbGVyJylcbmV4cG9ydCBjbGFzcyBTaG9vdGluZ1BsYXllckNvbnRyb2xsZXIgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIEBwcm9wZXJ0eSh7dHlwZTogQ0NGbG9hdH0pXG4gICAgcHVibGljIG1vdmVTcGVlZDogbnVtYmVyID0gMTtcbiAgICBAcHJvcGVydHkoe3R5cGU6IFByZWZhYn0pXG4gICAgcHVibGljIEJ1bGxldFByZWZhYjogUHJlZmFiID0gbnVsbDtcbiAgICBAcHJvcGVydHkoe3R5cGU6IFByZWZhYn0pXG4gICAgcHVibGljIGdyZW5hdGVQcmZiOiBQcmVmYWIgPSBudWxsO1xuICAgIEBwcm9wZXJ0eSh7dHlwZTogTm9kZX0pXG4gICAgcHVibGljIGZpcmVQb2ludDogTm9kZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KHt0eXBlOiBOb2RlfSlcbiAgICBwdWJsaWMgdGhyb3dQb2ludDogTm9kZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KHt0eXBlOiBOb2RlfSlcbiAgICBwdWJsaWMgdmVydGljYWxWaWV3Tm9kZTogTm9kZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KHt0eXBlOiBDQ0Zsb2F0fSlcbiAgICBwdWJsaWMgdmlld1VwQW5nbGU6IG51bWJlciA9IDYwO1xuICAgIEBwcm9wZXJ0eSh7dHlwZTogQ0NGbG9hdH0pXG4gICAgcHVibGljIHZpZXdEb3duQW5nbGU6IG51bWJlciA9IC02MDtcblxuICAgIHByaXZhdGUgX2FuaW1Db21wOiBBbmltYXRpb25Db21wb25lbnQgPSBudWxsO1xuICAgIHByaXZhdGUgX2FuaW1TdGF0ZTogUGxheWVyQW5pbVN0YXRlID0gUGxheWVyQW5pbVN0YXRlLk5vbmU7XG4gICAgcHJpdmF0ZSBfYW5pbVN0YXRlVG9OYW1lTWFwOiBhbnkgPSB7fTtcbiAgICBwcml2YXRlIF9tb3ZlRGlyTWFwOiBhbnkgPSB7fTtcbiAgICBwcml2YXRlIF92ZWxvY2l0eTogVmVjMyA9IG5ldyBWZWMzKCk7XG4gICAgcHJpdmF0ZSBfcm90SG9yaXpvbnRhbFNwZWVkOiBudW1iZXIgPSAgMC4wMDU7XG4gICAgcHJpdmF0ZSBfcm90VmVydGljYWxTcGVlZDogbnVtYmVyID0gMC4wMDI7XG4gICAgcHJpdmF0ZSBfYnVsbGV0U3BlZWQ6IG51bWJlciA9IDUwO1xuICAgIHByaXZhdGUgX2dyZW5hZGVGb3JjZTogbnVtYmVyID0gNTA7XG5cbiAgICBvbkxvYWQoKSB7XG4gICAgICAgIC8v6ZSu55uY55uR5ZCsXG4gICAgICAgIHN5c3RlbUV2ZW50Lm9uKFN5c3RlbUV2ZW50LkV2ZW50VHlwZS5LRVlfVVAsdGhpcy5vbktleVVwLHRoaXMpO1xuICAgICAgICBzeXN0ZW1FdmVudC5vbihTeXN0ZW1FdmVudC5FdmVudFR5cGUuS0VZX0RPV04sdGhpcy5vbktleURvd24sdGhpcyk7XG4gICAgICAgIFxuICAgICAgICAvL+m8oOagh+ebkeWQrFxuICAgICAgICBzeXN0ZW1FdmVudC5vbihTeXN0ZW1FdmVudC5FdmVudFR5cGUuTU9VU0VfVVAsIHRoaXMub25Nb3VzZVVwLCB0aGlzKTtcbiAgICAgICAgc3lzdGVtRXZlbnQub24oU3lzdGVtRXZlbnQuRXZlbnRUeXBlLk1PVVNFX0RPV04sIHRoaXMub25Nb3VzZURvd24sIHRoaXMpO1xuICAgICAgICBzeXN0ZW1FdmVudC5vbihTeXN0ZW1FdmVudC5FdmVudFR5cGUuTU9VU0VfTU9WRSx0aGlzLm9uTW91c2VNb3ZlLHRoaXMpO1xuICAgICAgICBcbiAgICAgICAgLy/op6bmkbjnm5HlkKxcbiAgICAgICAgc3lzdGVtRXZlbnQub24oU3lzdGVtRXZlbnQuRXZlbnRUeXBlLlRPVUNIX01PVkUsdGhpcy5vblRvdWNoTW92ZSx0aGlzKTtcblxuICAgICAgICB0aGlzLl9hbmltU3RhdGVUb05hbWVNYXBbUGxheWVyQW5pbVN0YXRlLklkbGVdID0gJ0lkbGUnO1xuICAgICAgICB0aGlzLl9hbmltU3RhdGVUb05hbWVNYXBbUGxheWVyQW5pbVN0YXRlLlJ1bm5pbmddID0gJ1J1bic7XG4gICAgICAgIHRoaXMuX2FuaW1TdGF0ZVRvTmFtZU1hcFtQbGF5ZXJBbmltU3RhdGUuSnVtcGluZ10gPSAnSnVtcCc7XG4gICAgICAgIHRoaXMuX2FuaW1TdGF0ZVRvTmFtZU1hcFtQbGF5ZXJBbmltU3RhdGUuU2hvb3RpbmddID0gJ1Nob290VG9yc29Bcm1zUmlmbGUnO1xuXG5cbiAgICAgICAgdGhpcy5fbW92ZURpck1hcFtNb3ZlRGlyLkxlZnRdID0gbmV3IFZlYzMoMSwgMCwgMCk7XG4gICAgICAgIHRoaXMuX21vdmVEaXJNYXBbTW92ZURpci5SaWdodF0gPSBuZXcgVmVjMygtMSwgMCwgMCk7XG4gICAgICAgIHRoaXMuX21vdmVEaXJNYXBbTW92ZURpci5Gb3J3YXJkXSA9IG5ldyBWZWMzKDAsIDAsIDEpO1xuICAgICAgICB0aGlzLl9tb3ZlRGlyTWFwW01vdmVEaXIuQmFja3dhcmRdID0gbmV3IFZlYzMoMCwgMCwgLTEpO1xuICAgICAgICBcbiAgICB9XG5cbiAgICBzdGFydCAoKSB7XG4gICAgICAgIC8vIFlvdXIgaW5pdGlhbGl6YXRpb24gZ29lcyBoZXJlLlxuICAgICAgICB0aGlzLl9hbmltQ29tcCA9IHRoaXMubm9kZS5nZXRDb21wb25lbnQoQW5pbWF0aW9uQ29tcG9uZW50KTtcbiAgICAgICAgdGhpcy5fYW5pbUNvbXAub24oQW5pbWF0aW9uQ29tcG9uZW50LkV2ZW50VHlwZS5GSU5JU0hFRCwgdGhpcy5vbkFuaW1hdGlvbkVuZCwgdGhpcyk7XG4gICAgICAgIHRoaXMuY2hhbmdlVG9BbmltU3RhdGUoUGxheWVyQW5pbVN0YXRlLklkbGUpO1xuICAgIH1cblxuICAgIGRvQWN0aW9uKGFjdGlvbjogQWN0aW9uVHlwZSwgZW5hYmxlOiBib29sZWFuKSB7XG4gICAgICAgIHN3aXRjaChhY3Rpb24pIHtcbiAgICAgICAgICAgIGNhc2UgQWN0aW9uVHlwZS5Gb3J3YXJkOlxuICAgICAgICAgICAgICAgIGlmIChlbmFibGUpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fdmVsb2NpdHkueiA9IDE7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2hhbmdlVG9BbmltU3RhdGUoUGxheWVyQW5pbVN0YXRlLlJ1bm5pbmcpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLl92ZWxvY2l0eS56ID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fdmVsb2NpdHkueiA9IDA7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jaGVja1RvSWRsZSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgQWN0aW9uVHlwZS5CYWNrd2FyZDpcbiAgICAgICAgICAgICAgICBpZiAoZW5hYmxlKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3ZlbG9jaXR5LnogPSAtMTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jaGFuZ2VUb0FuaW1TdGF0ZShQbGF5ZXJBbmltU3RhdGUuUnVubmluZyk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuX3ZlbG9jaXR5LnogPCAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl92ZWxvY2l0eS56ID0gMDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNoZWNrVG9JZGxlKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBBY3Rpb25UeXBlLkxlZnQ6XG4gICAgICAgICAgICAgICAgaWYgKGVuYWJsZSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl92ZWxvY2l0eS54ID0gMTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jaGFuZ2VUb0FuaW1TdGF0ZShQbGF5ZXJBbmltU3RhdGUuUnVubmluZyk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuX3ZlbG9jaXR5LnggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl92ZWxvY2l0eS54ID0gMDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNoZWNrVG9JZGxlKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBBY3Rpb25UeXBlLlJpZ2h0OlxuICAgICAgICAgICAgICAgIGlmIChlbmFibGUpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fdmVsb2NpdHkueCA9IC0xO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNoYW5nZVRvQW5pbVN0YXRlKFBsYXllckFuaW1TdGF0ZS5SdW5uaW5nKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5fdmVsb2NpdHkueCA8IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX3ZlbG9jaXR5LnggPSAwO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2hlY2tUb0lkbGUoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIEFjdGlvblR5cGUuU2hvb3Q6XG4gICAgICAgICAgICAgICAgaWYgKGVuYWJsZSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNoYW5nZVRvQW5pbVN0YXRlKFBsYXllckFuaW1TdGF0ZS5TaG9vdGluZyk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2hvb3QoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIEFjdGlvblR5cGUuVGhyb3dHcmVuYWRlOlxuICAgICAgICAgICAgICAgIGlmIChlbmFibGUpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50aHJvd0dyZW5hZGUoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvbktleURvd24oZXZlbnQpe1xuICAgICAgICBzd2l0Y2goZXZlbnQua2V5Q29kZSkge1xuICAgICAgICAgICAgY2FzZSBtYWNyby5LRVkuYTpcbiAgICAgICAgICAgICAgICB0aGlzLmRvQWN0aW9uKEFjdGlvblR5cGUuTGVmdCwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIG1hY3JvLktFWS5kOlxuICAgICAgICAgICAgICAgIHRoaXMuZG9BY3Rpb24oQWN0aW9uVHlwZS5SaWdodCwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIG1hY3JvLktFWS53OlxuICAgICAgICAgICAgICAgIHRoaXMuZG9BY3Rpb24oQWN0aW9uVHlwZS5Gb3J3YXJkLCB0cnVlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgbWFjcm8uS0VZLnM6XG4gICAgICAgICAgICAgICAgdGhpcy5kb0FjdGlvbihBY3Rpb25UeXBlLkJhY2t3YXJkLCB0cnVlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgbWFjcm8uS0VZLmc6XG4gICAgICAgICAgICAgICAgdGhpcy5kb0FjdGlvbihBY3Rpb25UeXBlLlRocm93R3JlbmFkZSwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIG1hY3JvLktFWS5zcGFjZTpcbiAgICAgICAgICAgICAgICAvLyB0aGlzLmNoYW5nZVRvQW5pbVN0YXRlKFBsYXllckFuaW1TdGF0ZS5KdW1waW5nKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNoZWNrVG9JZGxlKCkge1xuICAgICAgICBpZiAodGhpcy5fdmVsb2NpdHkueCA9PT0gMCAmJlxuICAgICAgICAgICAgdGhpcy5fdmVsb2NpdHkueSA9PT0gMCAmJlxuICAgICAgICAgICAgdGhpcy5fdmVsb2NpdHkueiA9PT0gMCkge1xuICAgICAgICAgICAgICAgIHRoaXMuY2hhbmdlVG9BbmltU3RhdGUoUGxheWVyQW5pbVN0YXRlLklkbGUpO1xuICAgICAgICAgICAgfVxuICAgIH1cblxuICAgIG9uS2V5VXAoZXZlbnQpe1xuICAgICAgICBzd2l0Y2goZXZlbnQua2V5Q29kZSkge1xuICAgICAgICAgICAgY2FzZSBtYWNyby5LRVkuYTpcbiAgICAgICAgICAgICAgICB0aGlzLmRvQWN0aW9uKEFjdGlvblR5cGUuTGVmdCwgZmFsc2UpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBtYWNyby5LRVkuZDpcbiAgICAgICAgICAgICAgICB0aGlzLmRvQWN0aW9uKEFjdGlvblR5cGUuUmlnaHQsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgbWFjcm8uS0VZLnc6XG4gICAgICAgICAgICAgICAgdGhpcy5kb0FjdGlvbihBY3Rpb25UeXBlLkZvcndhcmQsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgbWFjcm8uS0VZLnM6XG4gICAgICAgICAgICAgICAgdGhpcy5kb0FjdGlvbihBY3Rpb25UeXBlLkJhY2t3YXJkLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIG1hY3JvLktFWS5zcGFjZTpcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uTW91c2VEb3duKGV2ZW50KSB7XG4gICAgICAgIGlmIChldmVudC5nZXRCdXR0b24oKSA9PT0gMikge1xuICAgICAgICAgICAgZ2FtZS5jYW52YXMucmVxdWVzdFBvaW50ZXJMb2NrKCk7XG4gICAgICAgIH0gXG5cbiAgICB9XG5cbiAgICBvbk1vdXNlVXAoZXZlbnQpe1xuICAgICAgICBpZiAoZXZlbnQuZ2V0QnV0dG9uKCkgPT09IDApIHsgIC8vIOm8oOagh+W3pumUrlxuICAgICAgICAgICAgdGhpcy5jaGFuZ2VUb0FuaW1TdGF0ZShQbGF5ZXJBbmltU3RhdGUuU2hvb3RpbmcpO1xuICAgICAgICAgICAgdGhpcy5zaG9vdCgpO1xuICAgICAgICB9IFxuICAgIH1cblxuICAgIG9uTW91c2VNb3ZlKGV2ZW50OkV2ZW50TW91c2UpeyAgICBcbiAgICAgICAgaWYoZXZlbnQubW92ZW1lbnRYICE9IDApe1xuICAgICAgICAgICAgY29uc3QgaG9yaXpvbnRhbFJvdCA9IHRoaXMubm9kZS5nZXRSb3RhdGlvbigpO1xuICAgICAgICAgICAgUXVhdC5yb3RhdGVBcm91bmQoaG9yaXpvbnRhbFJvdCwgaG9yaXpvbnRhbFJvdCwgVmVjMy5VTklUX1ksIC1ldmVudC5tb3ZlbWVudFggKiB0aGlzLl9yb3RIb3Jpem9udGFsU3BlZWQpO1xuICAgICAgICAgICAgdGhpcy5ub2RlLnNldFJvdGF0aW9uKGhvcml6b250YWxSb3QpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYoZXZlbnQubW92ZW1lbnRZICE9IDApIHtcbiAgICAgICAgICAgIGNvbnN0IHZlcnRpY2FsUm90ID0gdGhpcy52ZXJ0aWNhbFZpZXdOb2RlLmdldFJvdGF0aW9uKCk7XG4gICAgICAgICAgICBRdWF0LnJvdGF0ZUFyb3VuZCh2ZXJ0aWNhbFJvdCwgdmVydGljYWxSb3QsIFZlYzMuVU5JVF9YLCBldmVudC5tb3ZlbWVudFkgKiB0aGlzLl9yb3RWZXJ0aWNhbFNwZWVkKTtcbiAgICAgICAgICAgIHZlcnRpY2FsUm90LmdldEV1bGVyQW5nbGVzKHRlbXBWZWMzX2EpXG4gICAgICAgICAgICBpZiAodGVtcFZlYzNfYS54ID4gdGhpcy52aWV3RG93bkFuZ2xlICYmIHRlbXBWZWMzX2EueCA8IHRoaXMudmlld1VwQW5nbGUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnZlcnRpY2FsVmlld05vZGUuc2V0Um90YXRpb24odmVydGljYWxSb3QpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25Ub3VjaE1vdmUoZXZlbnQpe1xuICAgICAgICBpZihldmVudC5nZXREZWx0YSgpLnggIT0gMCl7XG4gICAgICAgICAgICBjb25zdCBob3Jpem9udGFsUm90ID0gdGhpcy5ub2RlLmdldFJvdGF0aW9uKCk7XG4gICAgICAgICAgICBRdWF0LnJvdGF0ZUFyb3VuZChob3Jpem9udGFsUm90LCBob3Jpem9udGFsUm90LCBWZWMzLlVOSVRfWSwgLWV2ZW50LmdldERlbHRhKCkueCAqIHRoaXMuX3JvdEhvcml6b250YWxTcGVlZCk7XG4gICAgICAgICAgICB0aGlzLm5vZGUuc2V0Um90YXRpb24oaG9yaXpvbnRhbFJvdCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZihldmVudC5nZXREZWx0YSgpLnkgIT0gMCkge1xuICAgICAgICAgICAgY29uc3QgdmVydGljYWxSb3QgPSB0aGlzLnZlcnRpY2FsVmlld05vZGUuZ2V0Um90YXRpb24oKTtcbiAgICAgICAgICAgIFF1YXQucm90YXRlQXJvdW5kKHZlcnRpY2FsUm90LCB2ZXJ0aWNhbFJvdCwgVmVjMy5VTklUX1gsIGV2ZW50LmdldERlbHRhKCkueSAqIHRoaXMuX3JvdFZlcnRpY2FsU3BlZWQpO1xuICAgICAgICAgICAgdmVydGljYWxSb3QuZ2V0RXVsZXJBbmdsZXModGVtcFZlYzNfYSlcbiAgICAgICAgICAgIGlmICh0ZW1wVmVjM19hLnggPiB0aGlzLnZpZXdEb3duQW5nbGUgJiYgdGVtcFZlYzNfYS54IDwgdGhpcy52aWV3VXBBbmdsZSkge1xuICAgICAgICAgICAgICAgIHRoaXMudmVydGljYWxWaWV3Tm9kZS5zZXRSb3RhdGlvbih2ZXJ0aWNhbFJvdCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjaGFuZ2VUb0FuaW1TdGF0ZShzdGF0ZTogUGxheWVyQW5pbVN0YXRlKSB7XG4gICAgICAgIGlmICh0aGlzLl9hbmltU3RhdGUgPT09IFBsYXllckFuaW1TdGF0ZS5JZGxlKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5fYW5pbVN0YXRlICE9PSBzdGF0ZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuX2FuaW1Db21wLnBsYXkodGhpcy5fYW5pbVN0YXRlVG9OYW1lTWFwW3N0YXRlXSk7XG4gICAgICAgICAgICAgICAgdGhpcy5fYW5pbVN0YXRlID0gc3RhdGU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAoc3RhdGUgPT09IFBsYXllckFuaW1TdGF0ZS5JZGxlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fYW5pbUNvbXAucGxheSh0aGlzLl9hbmltU3RhdGVUb05hbWVNYXBbc3RhdGVdKTtcbiAgICAgICAgICAgICAgICB0aGlzLl9hbmltU3RhdGUgPSBzdGF0ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uQW5pbWF0aW9uRW5kKHR5cGUsIHN0YXRlKSB7XG4gICAgICAgIGlmIChzdGF0ZS5uYW1lID09PSB0aGlzLl9hbmltU3RhdGVUb05hbWVNYXBbUGxheWVyQW5pbVN0YXRlLlNob290aW5nXSkge1xuICAgICAgICAgICAgdGhpcy5jaGFuZ2VUb0FuaW1TdGF0ZShQbGF5ZXJBbmltU3RhdGUuSWRsZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzaG9vdCgpIHtcbiAgICAgICAgbGV0IHNjZW5lID0gZGlyZWN0b3IuZ2V0U2NlbmUoKTtcbiAgICAgICAgbGV0IG5ld0J1bGxldDogYW55ID0gaW5zdGFudGlhdGUodGhpcy5CdWxsZXRQcmVmYWIpO1xuICAgICAgICAvLyB0cy1pZ25vcmVcbiAgICAgICAgc2NlbmUuYWRkQ2hpbGQobmV3QnVsbGV0KTtcbiAgICAgICAgbmV3QnVsbGV0LnNldFBvc2l0aW9uKHRoaXMuZmlyZVBvaW50LmdldFdvcmxkUG9zaXRpb24oKSk7XG4gICAgICAgIGNvbnN0IGJ1bGxldDogQnVsbGV0ID0gbmV3QnVsbGV0LmdldENvbXBvbmVudChCdWxsZXQpO1xuICAgICAgICBsZXQgZGlyID0gbmV3IFZlYzMoMCwgMCwgMSk7XG4gICAgICAgIFZlYzMudHJhbnNmb3JtUXVhdChkaXIsIGRpciwgdGhpcy5maXJlUG9pbnQuZ2V0V29ybGRSb3RhdGlvbigpKTtcbiAgICAgICAgVmVjMy5tdWx0aXBseVNjYWxhcihkaXIsIGRpciwgdGhpcy5fYnVsbGV0U3BlZWQpO1xuICAgICAgICBidWxsZXQuaW5pdChkaXIpO1xuICAgIH1cblxuICAgIHRocm93R3JlbmFkZSgpIHtcbiAgICAgICAgbGV0IHNjZW5lID0gZGlyZWN0b3IuZ2V0U2NlbmUoKTtcbiAgICAgICAgbGV0IG5ld0dyZW5hZGU6IGFueSA9IGluc3RhbnRpYXRlKHRoaXMuZ3JlbmF0ZVByZmIpO1xuICAgICAgICBzY2VuZS5hZGRDaGlsZChuZXdHcmVuYWRlKTtcbiAgICAgICAgbmV3R3JlbmFkZS5zZXRQb3NpdGlvbih0aGlzLnRocm93UG9pbnQuZ2V0V29ybGRQb3NpdGlvbigpKTtcbiAgICAgICAgY29uc3QgZ3JlbmFkZTogR3JlbmFkZSA9IG5ld0dyZW5hZGUuZ2V0Q29tcG9uZW50KEdyZW5hZGUpO1xuICAgICAgICBsZXQgZGlyID0gbmV3IFZlYzMoMCwgMCwgMSk7XG4gICAgICAgIFZlYzMudHJhbnNmb3JtUXVhdChkaXIsIGRpciwgdGhpcy50aHJvd1BvaW50LmdldFdvcmxkUm90YXRpb24oKSk7XG4gICAgICAgIFZlYzMubXVsdGlwbHlTY2FsYXIoZGlyLCBkaXIsIHRoaXMuX2dyZW5hZGVGb3JjZSk7XG4gICAgICAgIGdyZW5hZGUuaW5pdChkaXIpO1xuICAgIH1cblxuICAgIG1vdmUoZGVsdGFUaW1lOiBudW1iZXIpIHtcbiAgICAgICAgbGV0IGN1clBvcyA9IHRlbXBWZWMzX2E7XG4gICAgICAgIGNvbnN0IGRpciA9IHRoaXMuX3ZlbG9jaXR5O1xuICAgICAgICB0aGlzLm5vZGUuZ2V0V29ybGRQb3NpdGlvbihjdXJQb3MpO1xuICAgICAgICB0aGlzLm5vZGUuZ2V0V29ybGRSb3RhdGlvbih0ZW1wUXVhdF9hKTtcbiAgICAgICAgVmVjMy50cmFuc2Zvcm1RdWF0KHRlbXBWZWMzX2IsIGRpciwgdGVtcFF1YXRfYSk7XG4gICAgICAgIFZlYzMuc2NhbGVBbmRBZGQoY3VyUG9zLCBjdXJQb3MsIHRlbXBWZWMzX2IsIGRlbHRhVGltZSAqIHRoaXMubW92ZVNwZWVkKTtcbiAgICAgICAgdGhpcy5ub2RlLnNldFdvcmxkUG9zaXRpb24oY3VyUG9zKTtcbiAgICB9XG5cbiAgICB1cGRhdGUgKGRlbHRhVGltZTogbnVtYmVyKSB7XG4gICAgICAgIC8vIFlvdXIgdXBkYXRlIGZ1bmN0aW9uIGdvZXMgaGVyZS5cbiAgICAgICAgaWYgKHRoaXMuX2FuaW1TdGF0ZSA9PT0gUGxheWVyQW5pbVN0YXRlLlJ1bm5pbmcpIHtcbiAgICAgICAgICAgIHRoaXMubW92ZShkZWx0YVRpbWUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25EZXN0cm95KCkge1xuICAgICAgICAvLyDlj5bmtojplK7nm5jnm5HlkKxcbiAgICAgICAgc3lzdGVtRXZlbnQub2ZmKFN5c3RlbUV2ZW50LkV2ZW50VHlwZS5LRVlfVVAsdGhpcy5vbktleVVwLHRoaXMpO1xuICAgICAgICBzeXN0ZW1FdmVudC5vZmYoU3lzdGVtRXZlbnQuRXZlbnRUeXBlLktFWV9ET1dOLHRoaXMub25LZXlEb3duLHRoaXMpO1xuICAgICAgICBcbiAgICAgICAgLy8g5Y+W5raI6byg5qCH55uR5ZCsXG4gICAgICAgIHN5c3RlbUV2ZW50Lm9mZihTeXN0ZW1FdmVudC5FdmVudFR5cGUuTU9VU0VfVVAsIHRoaXMub25Nb3VzZVVwLCB0aGlzKTtcbiAgICAgICAgc3lzdGVtRXZlbnQub2ZmKFN5c3RlbUV2ZW50LkV2ZW50VHlwZS5NT1VTRV9ET1dOLCB0aGlzLm9uTW91c2VEb3duLCB0aGlzKTtcbiAgICAgICAgc3lzdGVtRXZlbnQub2ZmKFN5c3RlbUV2ZW50LkV2ZW50VHlwZS5NT1VTRV9NT1ZFLHRoaXMub25Nb3VzZU1vdmUsdGhpcyk7XG4gICAgICAgIFxuICAgICAgICAvLyDlj5bmtojop6bmkbjnm5HlkKxcbiAgICAgICAgc3lzdGVtRXZlbnQub2ZmKFN5c3RlbUV2ZW50LkV2ZW50VHlwZS5UT1VDSF9NT1ZFLHRoaXMub25Ub3VjaE1vdmUsdGhpcyk7XG4gICAgfVxufVxuIl19