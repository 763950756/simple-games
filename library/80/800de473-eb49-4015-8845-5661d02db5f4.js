System.register(["cce.code-quality.cr", "cc", "./PlayerController.js", "./GameDefines.js"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, Node, Prefab, instantiate, Vec3, NodePool, LabelComponent, math, AnimationComponent, PlayerController, GameDefines, GameState, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _temp, _crd, ccclass, property, tempVec3_a, GameManager;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfPlayerController(extras) {
    _reporterNs.report("PlayerController", "./PlayerController", _context.meta, extras);
  }

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
      Prefab = _cc.Prefab;
      instantiate = _cc.instantiate;
      Vec3 = _cc.Vec3;
      NodePool = _cc.NodePool;
      LabelComponent = _cc.LabelComponent;
      math = _cc.math;
      AnimationComponent = _cc.AnimationComponent;
    }, function (_PlayerControllerJs) {
      PlayerController = _PlayerControllerJs.PlayerController;
    }, function (_GameDefinesJs) {
      GameDefines = _GameDefinesJs.GameDefines;
      GameState = _GameDefinesJs.GameState;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "800deRz60lAFYhFVmHQLbX0", "GameManager", _context.meta);

      ccclass = _decorator.ccclass;
      property = _decorator.property;
      tempVec3_a = new Vec3();

      _export("GameManager", GameManager = (_dec = ccclass('GameManager'), _dec2 = property({
        type: Prefab
      }), _dec3 = property({
        type: Prefab
      }), _dec4 = property({
        type: Prefab
      }), _dec5 = property({
        type: _crd && PlayerController === void 0 ? (_reportPossibleCrUseOfPlayerController({
          error: Error()
        }), PlayerController) : PlayerController
      }), _dec6 = property({
        type: LabelComponent
      }), _dec7 = property({
        type: Node
      }), _dec8 = property({
        type: Node
      }), _dec9 = property({
        type: Node
      }), _dec(_class = (_class2 = (_temp = /*#__PURE__*/function (_Component) {
        _inheritsLoose(GameManager, _Component);

        function GameManager() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_this, "straitFloorPrfb", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "coinPrfb", _descriptor2, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "roadBlockPrfb", _descriptor3, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "playerCtrl", _descriptor4, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "coinScoreLabel", _descriptor5, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "initPanel", _descriptor6, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "playingPanel", _descriptor7, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "endPanel", _descriptor8, _assertThisInitialized(_this));

          _this._coinPool = new NodePool();
          _this._coinNum = 0;
          _this._straitFloorPool = new NodePool();
          _this._roadBlockPool = new NodePool();
          _this._checkPassedTime = 0;
          _this._checkInterval = 1;
          _this._activeFloors = [];
          _this._curState = (_crd && GameState === void 0 ? (_reportPossibleCrUseOfGameState({
            error: Error()
          }), GameState) : GameState).INIT;
          return _this;
        }

        var _proto = GameManager.prototype;

        _proto.start = function start() {
          this.curState = (_crd && GameState === void 0 ? (_reportPossibleCrUseOfGameState({
            error: Error()
          }), GameState) : GameState).INIT;
          this.playerCtrl.onTriggerCoin = this.onCoinTriggered.bind(this);
          this.playerCtrl.onTriggerBlock = this.onBlockTriggered.bind(this);
        };

        _proto.reset = function reset() {
          var _this2 = this;

          // clear all
          this._activeFloors.forEach(function (floorNode) {
            _this2.destroyFloor(floorNode);
          });

          this._activeFloors = []; // init

          for (var i = 0; i < (_crd && GameDefines === void 0 ? (_reportPossibleCrUseOfGameDefines({
            error: Error()
          }), GameDefines) : GameDefines).maxActiveFloor; i++) {
            var posZ = i * (_crd && GameDefines === void 0 ? (_reportPossibleCrUseOfGameDefines({
              error: Error()
            }), GameDefines) : GameDefines).floorLength;
            var needItem = false;

            if (i > 1) {
              needItem = true;
            }

            this.generateFloor(tempVec3_a.set(0, 0, posZ), needItem);
          }
        };

        _proto.destroyFloor = function destroyFloor(floorNode) {
          for (var j = 0; j < floorNode.children.length; j++) {
            var child = floorNode.children[j];

            if (child.name === (_crd && GameDefines === void 0 ? (_reportPossibleCrUseOfGameDefines({
              error: Error()
            }), GameDefines) : GameDefines).CoinNodeName) {
              child.parent = null;

              this._coinPool.put(child);
            } else if (child.name === (_crd && GameDefines === void 0 ? (_reportPossibleCrUseOfGameDefines({
              error: Error()
            }), GameDefines) : GameDefines).BlockNodeName) {
              child.parent = null;

              this._roadBlockPool.put(child);
            }
          }

          this._straitFloorPool.put(floorNode);
        };

        _proto.generateFloor = function generateFloor(pos, generateItem) {
          if (generateItem === void 0) {
            generateItem = false;
          }

          var floorNode = this.createStraitFloor(pos);

          this._activeFloors.push(floorNode);

          if (generateItem) {
            var generateType = math.randomRangeInt(0, 3);

            if (generateType === 1) {
              this.createCoin(floorNode, tempVec3_a.set(this.randomXPos(), 1, 0));
            } else if (generateType === 2) {
              this.createRoadBlock(floorNode, tempVec3_a.set(this.randomXPos(), 0, 0));
            }
          }
        };

        _proto.randomXPos = function randomXPos() {
          var posXPool = [(_crd && GameDefines === void 0 ? (_reportPossibleCrUseOfGameDefines({
            error: Error()
          }), GameDefines) : GameDefines).leftLineX, (_crd && GameDefines === void 0 ? (_reportPossibleCrUseOfGameDefines({
            error: Error()
          }), GameDefines) : GameDefines).middleLineX, (_crd && GameDefines === void 0 ? (_reportPossibleCrUseOfGameDefines({
            error: Error()
          }), GameDefines) : GameDefines).rightLineX];
          var index = math.randomRangeInt(0, 3);
          var posX = posXPool[index];
          return posX;
        };

        _proto.createStraitFloor = function createStraitFloor(pos) {
          var straitFloorNode = null;

          if (this._straitFloorPool.size() > 0) {
            straitFloorNode = this._straitFloorPool.get();
          } else {
            straitFloorNode = instantiate(this.straitFloorPrfb);
          }

          straitFloorNode.setPosition(pos);
          straitFloorNode.parent = this.node;
          return straitFloorNode;
        };

        _proto.createCoin = function createCoin(parent, localPos) {
          var coinNode = null;

          if (this._coinPool.size() > 0) {
            coinNode = this._coinPool.get();
          } else {
            coinNode = instantiate(this.coinPrfb);
          }

          coinNode.setPosition(localPos);
          coinNode.parent = parent;
          return coinNode;
        };

        _proto.createRoadBlock = function createRoadBlock(parent, localPos) {
          var roadBlock = null;

          if (this._roadBlockPool.size() > 0) {
            roadBlock = this._roadBlockPool.get();
          } else {
            roadBlock = instantiate(this.roadBlockPrfb);
          }

          roadBlock.setPosition(localPos);
          roadBlock.parent = parent;
          var animComp = roadBlock.getComponent(AnimationComponent);
          var downName = 'block_down';
          var state = animComp.getState(downName);
          state.setTime(0);
          return roadBlock;
        };

        _proto.onCoinTriggered = function onCoinTriggered(coinNode) {
          this._coinNum++;
          this.coinScoreLabel.string = '' + this._coinNum;

          this._coinPool.put(coinNode);
        };

        _proto.onBlockTriggered = function onBlockTriggered(blockNode) {
          this.curState = (_crd && GameState === void 0 ? (_reportPossibleCrUseOfGameState({
            error: Error()
          }), GameState) : GameState).END;
        };

        _proto.checkToGenerateElem = function checkToGenerateElem(deltaTime) {
          this._checkPassedTime += deltaTime;

          if (this._checkPassedTime > this._checkInterval) {
            // 隐藏在人物身后的Floor
            var backIndex = 0;

            for (var i = 0; i < this._activeFloors.length; i++) {
              var floor = this._activeFloors[i];

              if (floor.position.z > this.playerCtrl.node.position.z - (_crd && GameDefines === void 0 ? (_reportPossibleCrUseOfGameDefines({
                error: Error()
              }), GameDefines) : GameDefines).floorLength) {
                backIndex = i;
                break;
              }
            }

            if (backIndex > 0) {
              for (var _i = 0; _i < backIndex; _i++) {
                var first = this._activeFloors.shift();

                this.destroyFloor(first);
                var last = this._activeFloors[this._activeFloors.length - 1];
                var posZ = last.position.z + (_crd && GameDefines === void 0 ? (_reportPossibleCrUseOfGameDefines({
                  error: Error()
                }), GameDefines) : GameDefines).floorLength;
                this.generateFloor(tempVec3_a.set(0, 0, posZ), true);
              }
            }

            this._checkPassedTime = 0;
          }
        };

        _proto.update = function update(deltaTime) {
          // Your update function goes here.
          this.checkToGenerateElem(deltaTime);
        } // button events
        ;

        _proto.onStartButtonClicked = function onStartButtonClicked() {
          this.curState = (_crd && GameState === void 0 ? (_reportPossibleCrUseOfGameState({
            error: Error()
          }), GameState) : GameState).PLAYING;
        };

        _proto.onRestartButtonClicked = function onRestartButtonClicked() {
          this.curState = (_crd && GameState === void 0 ? (_reportPossibleCrUseOfGameState({
            error: Error()
          }), GameState) : GameState).INIT;
        };

        _createClass(GameManager, [{
          key: "coinNum",
          get: function get() {
            return this._coinNum;
          },
          set: function set(value) {
            this._coinNum = value;
            this.coinScoreLabel.string = '' + value;
          }
        }, {
          key: "curState",
          set: function set(value) {
            switch (value) {
              case (_crd && GameState === void 0 ? (_reportPossibleCrUseOfGameState({
                error: Error()
              }), GameState) : GameState).INIT:
                this.initPanel.active = true;
                this.playingPanel.active = false;
                this.endPanel.active = false;
                this.reset();
                break;

              case (_crd && GameState === void 0 ? (_reportPossibleCrUseOfGameState({
                error: Error()
              }), GameState) : GameState).PLAYING:
                this.initPanel.active = false;
                this.playingPanel.active = true;
                this.coinNum = 0;
                break;

              case (_crd && GameState === void 0 ? (_reportPossibleCrUseOfGameState({
                error: Error()
              }), GameState) : GameState).END:
                this.playingPanel.active = false;
                this.endPanel.active = true;
                break;
            }

            this._curState = value;
            this.playerCtrl.onGameStateChanged(value);
          },
          get: function get() {
            return this._curState;
          }
        }]);

        return GameManager;
      }(Component), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "straitFloorPrfb", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "coinPrfb", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "roadBlockPrfb", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "playerCtrl", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "coinScoreLabel", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "initPanel", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "playingPanel", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "endPanel", [_dec9], {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vVXNlcnMvbWFjL0Rvd25sb2Fkcy9leGFtcGxlLTNkLW1hc3Rlci9zaW1wbGUtZ2FtZXMvYXNzZXRzL3NpbXBsZS1ydW4vc2NyaXB0cy9HYW1lTWFuYWdlci50cyJdLCJuYW1lcyI6WyJfZGVjb3JhdG9yIiwiQ29tcG9uZW50IiwiTm9kZSIsIlByZWZhYiIsImluc3RhbnRpYXRlIiwiVmVjMyIsIk5vZGVQb29sIiwiTGFiZWxDb21wb25lbnQiLCJtYXRoIiwiQW5pbWF0aW9uQ29tcG9uZW50IiwiUGxheWVyQ29udHJvbGxlciIsIkdhbWVEZWZpbmVzIiwiR2FtZVN0YXRlIiwiY2NjbGFzcyIsInByb3BlcnR5IiwidGVtcFZlYzNfYSIsIkdhbWVNYW5hZ2VyIiwidHlwZSIsIl9jb2luUG9vbCIsIl9jb2luTnVtIiwiX3N0cmFpdEZsb29yUG9vbCIsIl9yb2FkQmxvY2tQb29sIiwiX2NoZWNrUGFzc2VkVGltZSIsIl9jaGVja0ludGVydmFsIiwiX2FjdGl2ZUZsb29ycyIsIl9jdXJTdGF0ZSIsIklOSVQiLCJzdGFydCIsImN1clN0YXRlIiwicGxheWVyQ3RybCIsIm9uVHJpZ2dlckNvaW4iLCJvbkNvaW5UcmlnZ2VyZWQiLCJiaW5kIiwib25UcmlnZ2VyQmxvY2siLCJvbkJsb2NrVHJpZ2dlcmVkIiwicmVzZXQiLCJmb3JFYWNoIiwiZmxvb3JOb2RlIiwiZGVzdHJveUZsb29yIiwiaSIsIm1heEFjdGl2ZUZsb29yIiwicG9zWiIsImZsb29yTGVuZ3RoIiwibmVlZEl0ZW0iLCJnZW5lcmF0ZUZsb29yIiwic2V0IiwiaiIsImNoaWxkcmVuIiwibGVuZ3RoIiwiY2hpbGQiLCJuYW1lIiwiQ29pbk5vZGVOYW1lIiwicGFyZW50IiwicHV0IiwiQmxvY2tOb2RlTmFtZSIsInBvcyIsImdlbmVyYXRlSXRlbSIsImNyZWF0ZVN0cmFpdEZsb29yIiwicHVzaCIsImdlbmVyYXRlVHlwZSIsInJhbmRvbVJhbmdlSW50IiwiY3JlYXRlQ29pbiIsInJhbmRvbVhQb3MiLCJjcmVhdGVSb2FkQmxvY2siLCJwb3NYUG9vbCIsImxlZnRMaW5lWCIsIm1pZGRsZUxpbmVYIiwicmlnaHRMaW5lWCIsImluZGV4IiwicG9zWCIsInN0cmFpdEZsb29yTm9kZSIsInNpemUiLCJnZXQiLCJzdHJhaXRGbG9vclByZmIiLCJzZXRQb3NpdGlvbiIsIm5vZGUiLCJsb2NhbFBvcyIsImNvaW5Ob2RlIiwiY29pblByZmIiLCJyb2FkQmxvY2siLCJyb2FkQmxvY2tQcmZiIiwiYW5pbUNvbXAiLCJnZXRDb21wb25lbnQiLCJkb3duTmFtZSIsInN0YXRlIiwiZ2V0U3RhdGUiLCJzZXRUaW1lIiwiY29pblNjb3JlTGFiZWwiLCJzdHJpbmciLCJibG9ja05vZGUiLCJFTkQiLCJjaGVja1RvR2VuZXJhdGVFbGVtIiwiZGVsdGFUaW1lIiwiYmFja0luZGV4IiwiZmxvb3IiLCJwb3NpdGlvbiIsInoiLCJmaXJzdCIsInNoaWZ0IiwibGFzdCIsInVwZGF0ZSIsIm9uU3RhcnRCdXR0b25DbGlja2VkIiwiUExBWUlORyIsIm9uUmVzdGFydEJ1dHRvbkNsaWNrZWQiLCJ2YWx1ZSIsImluaXRQYW5lbCIsImFjdGl2ZSIsInBsYXlpbmdQYW5lbCIsImVuZFBhbmVsIiwiY29pbk51bSIsIm9uR2FtZVN0YXRlQ2hhbmdlZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBU0EsTUFBQUEsVSxPQUFBQSxVO0FBQVlDLE1BQUFBLFMsT0FBQUEsUztBQUFXQyxNQUFBQSxJLE9BQUFBLEk7QUFBTUMsTUFBQUEsTSxPQUFBQSxNO0FBQVFDLE1BQUFBLFcsT0FBQUEsVztBQUFhQyxNQUFBQSxJLE9BQUFBLEk7QUFBTUMsTUFBQUEsUSxPQUFBQSxRO0FBQVVDLE1BQUFBLGMsT0FBQUEsYztBQUFnQkMsTUFBQUEsSSxPQUFBQSxJO0FBQVlDLE1BQUFBLGtCLE9BQUFBLGtCOztBQUM5RkMsTUFBQUEsZ0IsdUJBQUFBLGdCOztBQUNE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Q0FBVW5CLEdBQWY7QUFDSSxxQkFBS2lCLFlBQUwsQ0FBa0JELE1BQWxCLEdBQTJCLEtBQTNCO0FBQ0EscUJBQUtFLFFBQUwsQ0FBY0YsTUFBZCxHQUF1QixJQUF2QjtBQUNBO0FBaEJSOztBQW1CQSxpQkFBS2pGLFNBQUwsR0FBaUIrRSxLQUFqQjtBQUNBLGlCQUFLM0UsVUFBTCxDQUFnQmlGLGtCQUFoQixDQUFtQ04sS0FBbkM7QUFDSCxXOzhCQUVjO0FBQ1gsbUJBQU8sS0FBSy9FLFNBQVo7QUFDSDs7OztRQWxFNEJ4QixTOzs7OztpQkFHSSxJOzs7Ozs7O2lCQUdQLEk7Ozs7Ozs7aUJBRUssSTs7Ozs7OztpQkFHTyxJOzs7Ozs7O2lCQUVFLEk7Ozs7Ozs7aUJBR2YsSTs7Ozs7OztpQkFFRyxJOzs7Ozs7O2lCQUVKLEkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBfZGVjb3JhdG9yLCBDb21wb25lbnQsIE5vZGUsIFByZWZhYiwgaW5zdGFudGlhdGUsIFZlYzMsIE5vZGVQb29sLCBMYWJlbENvbXBvbmVudCwgbWF0aCwgZmluZCwgQW5pbWF0aW9uQ29tcG9uZW50IH0gZnJvbSAnY2MnO1xuaW1wb3J0IHsgUGxheWVyQ29udHJvbGxlciB9IGZyb20gJy4vUGxheWVyQ29udHJvbGxlcic7XG5pbXBvcnQge0dhbWVEZWZpbmVzLCBHYW1lU3RhdGUgfSBmcm9tICcuL0dhbWVEZWZpbmVzJztcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IF9kZWNvcmF0b3I7XG5cbmNvbnN0IHRlbXBWZWMzX2EgPSBuZXcgVmVjMygpO1xuXG5cbkBjY2NsYXNzKCdHYW1lTWFuYWdlcicpXG5leHBvcnQgY2xhc3MgR2FtZU1hbmFnZXIgZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gICAgQHByb3BlcnR5KHt0eXBlOiBQcmVmYWJ9KVxuICAgIHB1YmxpYyBzdHJhaXRGbG9vclByZmI6IFByZWZhYiA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoe3R5cGU6IFByZWZhYn0pXG4gICAgcHVibGljIGNvaW5QcmZiOiBQcmVmYWIgPSBudWxsO1xuICAgIEBwcm9wZXJ0eSh7dHlwZTogUHJlZmFifSlcbiAgICBwdWJsaWMgcm9hZEJsb2NrUHJmYjogUHJlZmFiID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eSh7dHlwZTogUGxheWVyQ29udHJvbGxlcn0pXG4gICAgcHVibGljIHBsYXllckN0cmw6IFBsYXllckNvbnRyb2xsZXIgPSBudWxsO1xuICAgIEBwcm9wZXJ0eSh7dHlwZTogTGFiZWxDb21wb25lbnR9KVxuICAgIHB1YmxpYyBjb2luU2NvcmVMYWJlbDogTGFiZWxDb21wb25lbnQgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KHt0eXBlOiBOb2RlfSlcbiAgICBwdWJsaWMgaW5pdFBhbmVsOiBOb2RlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoe3R5cGU6IE5vZGV9KVxuICAgIHB1YmxpYyBwbGF5aW5nUGFuZWw6IE5vZGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eSh7dHlwZTogTm9kZX0pXG4gICAgcHVibGljIGVuZFBhbmVsOiBOb2RlID0gbnVsbDtcblxuICAgIHByaXZhdGUgX2NvaW5Qb29sOiBOb2RlUG9vbCA9IG5ldyBOb2RlUG9vbCgpO1xuICAgIHByaXZhdGUgX2NvaW5OdW06IG51bWJlciA9IDA7XG4gICAgcHJpdmF0ZSBfc3RyYWl0Rmxvb3JQb29sOiBOb2RlUG9vbCA9IG5ldyBOb2RlUG9vbCgpO1xuICAgIHByaXZhdGUgX3JvYWRCbG9ja1Bvb2w6IE5vZGVQb29sID0gbmV3IE5vZGVQb29sKCk7XG4gICAgcHJpdmF0ZSBfY2hlY2tQYXNzZWRUaW1lOiBudW1iZXIgPSAwO1xuICAgIHByaXZhdGUgX2NoZWNrSW50ZXJ2YWw6IG51bWJlciA9IDE7XG4gICAgcHJpdmF0ZSBfYWN0aXZlRmxvb3JzOiBOb2RlW10gPSBbXTtcbiAgICBwcml2YXRlIF9jdXJTdGF0ZTogR2FtZVN0YXRlID0gR2FtZVN0YXRlLklOSVQ7XG5cbiAgICBnZXQgY29pbk51bSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2NvaW5OdW07XG4gICAgfVxuXG4gICAgc2V0IGNvaW5OdW0odmFsdWU6IG51bWJlcikge1xuICAgICAgICB0aGlzLl9jb2luTnVtID0gdmFsdWU7XG4gICAgICAgIHRoaXMuY29pblNjb3JlTGFiZWwuc3RyaW5nID0gJycrdmFsdWU7XG4gICAgfVxuXG4gICAgc2V0IGN1clN0YXRlKHZhbHVlOiBHYW1lU3RhdGUpIHtcbiAgICAgICAgc3dpdGNoKHZhbHVlKSB7XG4gICAgICAgICAgICBjYXNlIEdhbWVTdGF0ZS5JTklUOlxuICAgICAgICAgICAgICAgIHRoaXMuaW5pdFBhbmVsLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgdGhpcy5wbGF5aW5nUGFuZWwuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgdGhpcy5lbmRQYW5lbC5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB0aGlzLnJlc2V0KCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIEdhbWVTdGF0ZS5QTEFZSU5HOlxuICAgICAgICAgICAgICAgIHRoaXMuaW5pdFBhbmVsLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHRoaXMucGxheWluZ1BhbmVsLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgdGhpcy5jb2luTnVtID0gMDtcblxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBHYW1lU3RhdGUuRU5EOlxuICAgICAgICAgICAgICAgIHRoaXMucGxheWluZ1BhbmVsLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHRoaXMuZW5kUGFuZWwuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX2N1clN0YXRlID0gdmFsdWU7XG4gICAgICAgIHRoaXMucGxheWVyQ3RybC5vbkdhbWVTdGF0ZUNoYW5nZWQodmFsdWUpO1xuICAgIH1cblxuICAgIGdldCBjdXJTdGF0ZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2N1clN0YXRlO1xuICAgIH1cblxuICAgIHN0YXJ0ICgpIHtcbiAgICAgICAgdGhpcy5jdXJTdGF0ZSA9IEdhbWVTdGF0ZS5JTklUO1xuICAgICAgICB0aGlzLnBsYXllckN0cmwub25UcmlnZ2VyQ29pbiA9IHRoaXMub25Db2luVHJpZ2dlcmVkLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMucGxheWVyQ3RybC5vblRyaWdnZXJCbG9jayA9IHRoaXMub25CbG9ja1RyaWdnZXJlZC5iaW5kKHRoaXMpO1xuICAgIH1cblxuICAgIHJlc2V0KCkge1xuICAgICAgICAvLyBjbGVhciBhbGxcbiAgICAgICAgdGhpcy5fYWN0aXZlRmxvb3JzLmZvckVhY2goKGZsb29yTm9kZTogTm9kZSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5kZXN0cm95Rmxvb3IoZmxvb3JOb2RlKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuX2FjdGl2ZUZsb29ycyA9IFtdO1xuXG4gICAgICAgIC8vIGluaXRcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBHYW1lRGVmaW5lcy5tYXhBY3RpdmVGbG9vcjsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBwb3NaID0gaSAqIEdhbWVEZWZpbmVzLmZsb29yTGVuZ3RoO1xuICAgICAgICAgICAgbGV0IG5lZWRJdGVtID0gZmFsc2U7XG4gICAgICAgICAgICBpZiAoaSA+IDEpIHtcbiAgICAgICAgICAgICAgICBuZWVkSXRlbSA9IHRydWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuZ2VuZXJhdGVGbG9vcih0ZW1wVmVjM19hLnNldCgwLCAwLCBwb3NaKSwgbmVlZEl0ZW0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZGVzdHJveUZsb29yKGZsb29yTm9kZTogTm9kZSkge1xuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGZsb29yTm9kZS5jaGlsZHJlbi5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgY29uc3QgY2hpbGQgPSBmbG9vck5vZGUuY2hpbGRyZW5bal07XG4gICAgICAgICAgICBpZiAoY2hpbGQubmFtZSA9PT0gR2FtZURlZmluZXMuQ29pbk5vZGVOYW1lKSB7XG4gICAgICAgICAgICAgICAgY2hpbGQucGFyZW50ID0gbnVsbDtcbiAgICAgICAgICAgICAgICB0aGlzLl9jb2luUG9vbC5wdXQoY2hpbGQpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChjaGlsZC5uYW1lID09PSBHYW1lRGVmaW5lcy5CbG9ja05vZGVOYW1lKSB7XG4gICAgICAgICAgICAgICAgY2hpbGQucGFyZW50ID0gbnVsbDtcbiAgICAgICAgICAgICAgICB0aGlzLl9yb2FkQmxvY2tQb29sLnB1dChjaGlsZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9zdHJhaXRGbG9vclBvb2wucHV0KGZsb29yTm9kZSk7XG4gICAgfVxuXG4gICAgZ2VuZXJhdGVGbG9vcihwb3M6IFZlYzMsIGdlbmVyYXRlSXRlbTogYm9vbGVhbiA9IGZhbHNlKSB7XG4gICAgICAgIGxldCBmbG9vck5vZGUgPSB0aGlzLmNyZWF0ZVN0cmFpdEZsb29yKHBvcyk7XG4gICAgICAgIHRoaXMuX2FjdGl2ZUZsb29ycy5wdXNoKGZsb29yTm9kZSk7XG5cbiAgICAgICAgaWYgKGdlbmVyYXRlSXRlbSkge1xuICAgICAgICAgICAgY29uc3QgZ2VuZXJhdGVUeXBlID0gbWF0aC5yYW5kb21SYW5nZUludCgwLCAzKTtcbiAgICAgICAgICAgIGlmIChnZW5lcmF0ZVR5cGUgPT09IDEpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNyZWF0ZUNvaW4oZmxvb3JOb2RlLCB0ZW1wVmVjM19hLnNldCh0aGlzLnJhbmRvbVhQb3MoKSwgMSwgMCkpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChnZW5lcmF0ZVR5cGUgPT09IDIpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNyZWF0ZVJvYWRCbG9jayhmbG9vck5vZGUsIHRlbXBWZWMzX2Euc2V0KHRoaXMucmFuZG9tWFBvcygpLCAwLCAwKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByYW5kb21YUG9zKCkge1xuICAgICAgICBjb25zdCBwb3NYUG9vbDogbnVtYmVyW10gPSBbR2FtZURlZmluZXMubGVmdExpbmVYLCBHYW1lRGVmaW5lcy5taWRkbGVMaW5lWCwgR2FtZURlZmluZXMucmlnaHRMaW5lWF07XG4gICAgICAgIGNvbnN0IGluZGV4ID0gbWF0aC5yYW5kb21SYW5nZUludCgwLCAzKTtcbiAgICAgICAgY29uc3QgcG9zWDogbnVtYmVyID0gcG9zWFBvb2xbaW5kZXhdO1xuXG4gICAgICAgIHJldHVybiBwb3NYO1xuICAgIH1cblxuICAgIGNyZWF0ZVN0cmFpdEZsb29yKHBvczogVmVjMykge1xuICAgICAgICBsZXQgc3RyYWl0Rmxvb3JOb2RlOiBOb2RlID0gbnVsbDtcbiAgICAgICAgaWYgKHRoaXMuX3N0cmFpdEZsb29yUG9vbC5zaXplKCkgPiAwKSB7XG4gICAgICAgICAgICBzdHJhaXRGbG9vck5vZGUgPSB0aGlzLl9zdHJhaXRGbG9vclBvb2wuZ2V0KCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzdHJhaXRGbG9vck5vZGUgPSBpbnN0YW50aWF0ZSh0aGlzLnN0cmFpdEZsb29yUHJmYik7XG4gICAgICAgIH1cblxuICAgICAgICBzdHJhaXRGbG9vck5vZGUuc2V0UG9zaXRpb24ocG9zKTtcbiAgICAgICAgc3RyYWl0Rmxvb3JOb2RlLnBhcmVudCA9IHRoaXMubm9kZTtcblxuICAgICAgICByZXR1cm4gc3RyYWl0Rmxvb3JOb2RlO1xuICAgIH1cblxuICAgIGNyZWF0ZUNvaW4ocGFyZW50OiBOb2RlLCBsb2NhbFBvczogVmVjMykge1xuICAgICAgICBsZXQgY29pbk5vZGU6IE5vZGUgPSBudWxsO1xuICAgICAgICBpZiAodGhpcy5fY29pblBvb2wuc2l6ZSgpID4gMCkge1xuICAgICAgICAgICAgY29pbk5vZGUgPSB0aGlzLl9jb2luUG9vbC5nZXQoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvaW5Ob2RlID0gaW5zdGFudGlhdGUodGhpcy5jb2luUHJmYik7XG4gICAgICAgIH1cbiAgICAgICAgY29pbk5vZGUuc2V0UG9zaXRpb24obG9jYWxQb3MpO1xuICAgICAgICBjb2luTm9kZS5wYXJlbnQgPSBwYXJlbnQ7XG5cbiAgICAgICAgcmV0dXJuIGNvaW5Ob2RlO1xuICAgIH1cblxuICAgIGNyZWF0ZVJvYWRCbG9jayhwYXJlbnQ6IE5vZGUsIGxvY2FsUG9zOiBWZWMzKSB7XG4gICAgICAgIGxldCByb2FkQmxvY2s6IE5vZGUgPSBudWxsO1xuICAgICAgICBpZiAodGhpcy5fcm9hZEJsb2NrUG9vbC5zaXplKCkgPiAwKSB7XG4gICAgICAgICAgICByb2FkQmxvY2sgPSB0aGlzLl9yb2FkQmxvY2tQb29sLmdldCgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcm9hZEJsb2NrID0gaW5zdGFudGlhdGUodGhpcy5yb2FkQmxvY2tQcmZiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJvYWRCbG9jay5zZXRQb3NpdGlvbihsb2NhbFBvcyk7XG4gICAgICAgIHJvYWRCbG9jay5wYXJlbnQgPSBwYXJlbnQ7XG5cbiAgICAgICAgY29uc3QgYW5pbUNvbXAgPSByb2FkQmxvY2suZ2V0Q29tcG9uZW50KEFuaW1hdGlvbkNvbXBvbmVudCk7XG4gICAgICAgIGNvbnN0IGRvd25OYW1lID0gJ2Jsb2NrX2Rvd24nO1xuICAgICAgICBjb25zdCBzdGF0ZSA9IGFuaW1Db21wLmdldFN0YXRlKGRvd25OYW1lKTtcbiAgICAgICAgc3RhdGUuc2V0VGltZSgwKTtcblxuICAgICAgICByZXR1cm4gcm9hZEJsb2NrO1xuICAgIH1cblxuICAgIG9uQ29pblRyaWdnZXJlZChjb2luTm9kZTogTm9kZSkge1xuICAgICAgICB0aGlzLl9jb2luTnVtICsrO1xuICAgICAgICB0aGlzLmNvaW5TY29yZUxhYmVsLnN0cmluZyA9ICcnICsgdGhpcy5fY29pbk51bTtcbiAgICAgICAgdGhpcy5fY29pblBvb2wucHV0KGNvaW5Ob2RlKTtcbiAgICB9XG5cbiAgICBvbkJsb2NrVHJpZ2dlcmVkKGJsb2NrTm9kZTogTm9kZSkge1xuICAgICAgICB0aGlzLmN1clN0YXRlID0gR2FtZVN0YXRlLkVORDtcbiAgICB9XG5cbiAgICBjaGVja1RvR2VuZXJhdGVFbGVtKGRlbHRhVGltZTogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMuX2NoZWNrUGFzc2VkVGltZSArPSBkZWx0YVRpbWU7XG4gICAgICAgIGlmICh0aGlzLl9jaGVja1Bhc3NlZFRpbWUgPiB0aGlzLl9jaGVja0ludGVydmFsKSB7XG4gICAgICAgICAgICAvLyDpmpDol4/lnKjkurrnianouqvlkI7nmoRGbG9vclxuICAgICAgICAgICAgbGV0IGJhY2tJbmRleCA9IDA7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuX2FjdGl2ZUZsb29ycy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGNvbnN0IGZsb29yID0gdGhpcy5fYWN0aXZlRmxvb3JzW2ldO1xuICAgICAgICAgICAgICAgIGlmIChmbG9vci5wb3NpdGlvbi56ID4gKHRoaXMucGxheWVyQ3RybC5ub2RlLnBvc2l0aW9uLnogLSBHYW1lRGVmaW5lcy5mbG9vckxlbmd0aCkpIHtcbiAgICAgICAgICAgICAgICAgICAgYmFja0luZGV4ID0gaTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoYmFja0luZGV4ID4gMCkge1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYmFja0luZGV4OyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZmlyc3Q6IE5vZGUgPSB0aGlzLl9hY3RpdmVGbG9vcnMuc2hpZnQoKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kZXN0cm95Rmxvb3IoZmlyc3QpO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBsYXN0ID0gdGhpcy5fYWN0aXZlRmxvb3JzW3RoaXMuX2FjdGl2ZUZsb29ycy5sZW5ndGggLSAxXTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcG9zWiA9IGxhc3QucG9zaXRpb24ueiArIEdhbWVEZWZpbmVzLmZsb29yTGVuZ3RoO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmdlbmVyYXRlRmxvb3IodGVtcFZlYzNfYS5zZXQoMCwgMCwgcG9zWiksIHRydWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5fY2hlY2tQYXNzZWRUaW1lID0gMDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHVwZGF0ZSAoZGVsdGFUaW1lOiBudW1iZXIpIHtcbiAgICAgICAgLy8gWW91ciB1cGRhdGUgZnVuY3Rpb24gZ29lcyBoZXJlLlxuICAgICAgICB0aGlzLmNoZWNrVG9HZW5lcmF0ZUVsZW0oZGVsdGFUaW1lKTtcbiAgICB9XG5cbiAgICAvLyBidXR0b24gZXZlbnRzXG4gICAgb25TdGFydEJ1dHRvbkNsaWNrZWQoKSB7XG4gICAgICAgIHRoaXMuY3VyU3RhdGUgPSBHYW1lU3RhdGUuUExBWUlORztcbiAgICB9XG5cbiAgICBvblJlc3RhcnRCdXR0b25DbGlja2VkKCkge1xuICAgICAgICB0aGlzLmN1clN0YXRlID0gR2FtZVN0YXRlLklOSVQ7XG4gICAgfVxufVxuIl19