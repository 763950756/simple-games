System.register(["cce.code-quality.cr", "cc", "./PlayerController.js", "./GameDefines.js"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, Node, Prefab, instantiate, Vec3, NodePool, LabelComponent, math, AnimationComponent, PlayerController, GameDefines, GameState, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _temp, _crd, ccclass, property, tempVec3_a, GameManager;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

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

      ({
        ccclass,
        property
      } = _decorator);
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
      }), _dec(_class = (_class2 = (_temp = class GameManager extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "straitFloorPrfb", _descriptor, this);

          _initializerDefineProperty(this, "coinPrfb", _descriptor2, this);

          _initializerDefineProperty(this, "roadBlockPrfb", _descriptor3, this);

          _initializerDefineProperty(this, "playerCtrl", _descriptor4, this);

          _initializerDefineProperty(this, "coinScoreLabel", _descriptor5, this);

          _initializerDefineProperty(this, "initPanel", _descriptor6, this);

          _initializerDefineProperty(this, "playingPanel", _descriptor7, this);

          _initializerDefineProperty(this, "endPanel", _descriptor8, this);

          this._coinPool = new NodePool();
          this._coinNum = 0;
          this._straitFloorPool = new NodePool();
          this._roadBlockPool = new NodePool();
          this._checkPassedTime = 0;
          this._checkInterval = 1;
          this._activeFloors = [];
          this._curState = (_crd && GameState === void 0 ? (_reportPossibleCrUseOfGameState({
            error: Error()
          }), GameState) : GameState).INIT;
        }

        get coinNum() {
          return this._coinNum;
        }

        set coinNum(value) {
          this._coinNum = value;
          this.coinScoreLabel.string = '' + value;
        }

        set curState(value) {
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
        }

        get curState() {
          return this._curState;
        }

        start() {
          this.curState = (_crd && GameState === void 0 ? (_reportPossibleCrUseOfGameState({
            error: Error()
          }), GameState) : GameState).INIT;
          this.playerCtrl.onTriggerCoin = this.onCoinTriggered.bind(this);
          this.playerCtrl.onTriggerBlock = this.onBlockTriggered.bind(this);
        }

        reset() {
          // clear all
          this._activeFloors.forEach(floorNode => {
            this.destroyFloor(floorNode);
          });

          this._activeFloors = []; // init

          for (let i = 0; i < (_crd && GameDefines === void 0 ? (_reportPossibleCrUseOfGameDefines({
            error: Error()
          }), GameDefines) : GameDefines).maxActiveFloor; i++) {
            const posZ = i * (_crd && GameDefines === void 0 ? (_reportPossibleCrUseOfGameDefines({
              error: Error()
            }), GameDefines) : GameDefines).floorLength;
            let needItem = false;

            if (i > 1) {
              needItem = true;
            }

            this.generateFloor(tempVec3_a.set(0, 0, posZ), needItem);
          }
        }

        destroyFloor(floorNode) {
          for (let j = 0; j < floorNode.children.length; j++) {
            const child = floorNode.children[j];

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
        }

        generateFloor(pos, generateItem = false) {
          let floorNode = this.createStraitFloor(pos);

          this._activeFloors.push(floorNode);

          if (generateItem) {
            const generateType = math.randomRangeInt(0, 3);

            if (generateType === 1) {
              this.createCoin(floorNode, tempVec3_a.set(this.randomXPos(), 1, 0));
            } else if (generateType === 2) {
              this.createRoadBlock(floorNode, tempVec3_a.set(this.randomXPos(), 0, 0));
            }
          }
        }

        randomXPos() {
          const posXPool = [(_crd && GameDefines === void 0 ? (_reportPossibleCrUseOfGameDefines({
            error: Error()
          }), GameDefines) : GameDefines).leftLineX, (_crd && GameDefines === void 0 ? (_reportPossibleCrUseOfGameDefines({
            error: Error()
          }), GameDefines) : GameDefines).middleLineX, (_crd && GameDefines === void 0 ? (_reportPossibleCrUseOfGameDefines({
            error: Error()
          }), GameDefines) : GameDefines).rightLineX];
          const index = math.randomRangeInt(0, 3);
          const posX = posXPool[index];
          return posX;
        }

        createStraitFloor(pos) {
          let straitFloorNode = null;

          if (this._straitFloorPool.size() > 0) {
            straitFloorNode = this._straitFloorPool.get();
          } else {
            straitFloorNode = instantiate(this.straitFloorPrfb);
          }

          straitFloorNode.setPosition(pos);
          straitFloorNode.parent = this.node;
          return straitFloorNode;
        }

        createCoin(parent, localPos) {
          let coinNode = null;

          if (this._coinPool.size() > 0) {
            coinNode = this._coinPool.get();
          } else {
            coinNode = instantiate(this.coinPrfb);
          }

          coinNode.setPosition(localPos);
          coinNode.parent = parent;
          return coinNode;
        }

        createRoadBlock(parent, localPos) {
          let roadBlock = null;

          if (this._roadBlockPool.size() > 0) {
            roadBlock = this._roadBlockPool.get();
          } else {
            roadBlock = instantiate(this.roadBlockPrfb);
          }

          roadBlock.setPosition(localPos);
          roadBlock.parent = parent;
          const animComp = roadBlock.getComponent(AnimationComponent);
          const downName = 'block_down';
          const state = animComp.getState(downName);
          state.setTime(0);
          return roadBlock;
        }

        onCoinTriggered(coinNode) {
          this._coinNum++;
          this.coinScoreLabel.string = '' + this._coinNum;

          this._coinPool.put(coinNode);
        }

        onBlockTriggered(blockNode) {
          this.curState = (_crd && GameState === void 0 ? (_reportPossibleCrUseOfGameState({
            error: Error()
          }), GameState) : GameState).END;
        }

        checkToGenerateElem(deltaTime) {
          this._checkPassedTime += deltaTime;

          if (this._checkPassedTime > this._checkInterval) {
            // 隐藏在人物身后的Floor
            let backIndex = 0;

            for (let i = 0; i < this._activeFloors.length; i++) {
              const floor = this._activeFloors[i];

              if (floor.position.z > this.playerCtrl.node.position.z - (_crd && GameDefines === void 0 ? (_reportPossibleCrUseOfGameDefines({
                error: Error()
              }), GameDefines) : GameDefines).floorLength) {
                backIndex = i;
                break;
              }
            }

            if (backIndex > 0) {
              for (let i = 0; i < backIndex; i++) {
                const first = this._activeFloors.shift();

                this.destroyFloor(first);
                const last = this._activeFloors[this._activeFloors.length - 1];
                const posZ = last.position.z + (_crd && GameDefines === void 0 ? (_reportPossibleCrUseOfGameDefines({
                  error: Error()
                }), GameDefines) : GameDefines).floorLength;
                this.generateFloor(tempVec3_a.set(0, 0, posZ), true);
              }
            }

            this._checkPassedTime = 0;
          }
        }

        update(deltaTime) {
          // Your update function goes here.
          this.checkToGenerateElem(deltaTime);
        } // button events


        onStartButtonClicked() {
          this.curState = (_crd && GameState === void 0 ? (_reportPossibleCrUseOfGameState({
            error: Error()
          }), GameState) : GameState).PLAYING;
        }

        onRestartButtonClicked() {
          this.curState = (_crd && GameState === void 0 ? (_reportPossibleCrUseOfGameState({
            error: Error()
          }), GameState) : GameState).INIT;
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "straitFloorPrfb", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "coinPrfb", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "roadBlockPrfb", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "playerCtrl", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "coinScoreLabel", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "initPanel", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "playingPanel", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "endPanel", [_dec9], {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vVXNlcnMvbWFjL0Rvd25sb2Fkcy9leGFtcGxlLTNkLW1hc3Rlci9zaW1wbGUtZ2FtZXMvYXNzZXRzL3NpbXBsZS1ydW4vc2NyaXB0cy9HYW1lTWFuYWdlci50cyJdLCJuYW1lcyI6WyJfZGVjb3JhdG9yIiwiQ29tcG9uZW50IiwiTm9kZSIsIlByZWZhYiIsImluc3RhbnRpYXRlIiwiVmVjMyIsIk5vZGVQb29sIiwiTGFiZWxDb21wb25lbnQiLCJtYXRoIiwiQW5pbWF0aW9uQ29tcG9uZW50IiwiUGxheWVyQ29udHJvbGxlciIsIkdhbWVEZWZpbmVzIiwiR2FtZVN0YXRlIiwiY2NjbGFzcyIsInByb3BlcnR5IiwidGVtcFZlYzNfYSIsIkdhbWVNYW5hZ2VyIiwidHlwZSIsIl9jb2luUG9vbCIsIl9jb2luTnVtIiwiX3N0cmFpdEZsb29yUG9vbCIsIl9yb2FkQmxvY2tQb29sIiwiX2NoZWNrUGFzc2VkVGltZSIsIl9jaGVja0ludGVydmFsIiwiX2FjdGl2ZUZsb29ycyIsIl9jdXJTdGF0ZSIsIklOSVQiLCJjb2luTnVtIiwidmFsdWUiLCJjb2luU2NvcmVMYWJlbCIsInN0cmluZyIsImN1clN0YXRlIiwiaW5pdFBhbmVsIiwiYWN0aXZlIiwicGxheWluZ1BhbmVsIiwiZW5kUGFuZWwiLCJyZXNldCIsIlBMQVlJTkciLCJFTkQiLCJwbGF5ZXJDdHJsIiwib25HYW1lU3RhdGVDaGFuZ2VkIiwic3RhcnQiLCJvblRyaWdnZXJDb2luIiwib25Db2luVHJpZ2dlcmVkIiwiYmluZCIsIm9uVHJpZ2dlckJsb2NrIiwib25CbG9ja1RyaWdnZXJlZCIsImZvckVhY2giLCJmbG9vck5vZGUiLCJkZXN0cm95Rmxvb3IiLCJpIiwibWF4QWN0aXZlRmxvb3IiLCJwb3NaIiwiZmxvb3JMZW5ndGgiLCJuZWVkSXRlbSIsImdlbmVyYXRlRmxvb3IiLCJzZXQiLCJqIiwiY2hpbGRyZW4iLCJsZW5ndGgiLCJjaGlsZCIsIm5hbWUiLCJDb2luTm9kZU5hbWUiLCJwYXJlbnQiLCJwdXQiLCJCbG9ja05vZGVOYW1lIiwicG9zIiwiZ2VuZXJhdGVJdGVtIiwiY3JlYXRlU3RyYWl0Rmxvb3IiLCJwdXNoIiwiZ2VuZXJhdGVUeXBlIiwicmFuZG9tUmFuZ2VJbnQiLCJjcmVhdGVDb2luIiwicmFuZG9tWFBvcyIsImNyZWF0ZVJvYWRCbG9jayIsInBvc1hQb29sIiwibGVmdExpbmVYIiwibWlkZGxlTGluZVgiLCJyaWdodExpbmVYIiwiaW5kZXgiLCJwb3NYIiwic3RyYWl0Rmxvb3JOb2RlIiwic2l6ZSIsImdldCIsInN0cmFpdEZsb29yUHJmYiIsInNldFBvc2l0aW9uIiwibm9kZSIsImxvY2FsUG9zIiwiY29pbk5vZGUiLCJjb2luUHJmYiIsInJvYWRCbG9jayIsInJvYWRCbG9ja1ByZmIiLCJhbmltQ29tcCIsImdldENvbXBvbmVudCIsImRvd25OYW1lIiwic3RhdGUiLCJnZXRTdGF0ZSIsInNldFRpbWUiLCJibG9ja05vZGUiLCJjaGVja1RvR2VuZXJhdGVFbGVtIiwiZGVsdGFUaW1lIiwiYmFja0luZGV4IiwiZmxvb3IiLCJwb3NpdGlvbiIsInoiLCJmaXJzdCIsInNoaWZ0IiwibGFzdCIsInVwZGF0ZSIsIm9uU3RhcnRCdXR0b25DbGlja2VkIiwib25SZXN0YXJ0QnV0dG9uQ2xpY2tlZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQVNBLE1BQUFBLFUsT0FBQUEsVTtBQUFZQyxNQUFBQSxTLE9BQUFBLFM7QUFBV0MsTUFBQUEsSSxPQUFBQSxJO0FBQU1DLE1BQUFBLE0sT0FBQUEsTTtBQUFRQyxNQUFBQSxXLE9BQUFBLFc7QUFBYUMsTUFBQUEsSSxPQUFBQSxJO0FBQU1DLE1BQUFBLFEsT0FBQUEsUTtBQUFVQyxNQUFBQSxjLE9BQUFBLGM7QUFBZ0JDLE1BQUFBLEksT0FBQUEsSTtBQUFZQyxNQUFBQSxrQixPQUFBQSxrQjs7QUFDOUZDLE1BQUFBLGdCLHVCQUFBQSxnQjs7QUFDREMsTUFBQUEs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LHFCQUFLRSxhQUFMLENBQW1CeEMsVUFBVSxDQUFDeUMsR0FBWCxDQUFlLENBQWYsRUFBa0IsQ0FBbEIsRUFBcUJKLElBQXJCLENBQW5CLEVBQStDLElBQS9DO0FBQ0g7QUFDSjs7QUFFRCxpQkFBSzlCLGdCQUFMLEdBQXdCLENBQXhCO0FBQ0g7QUFDSjs7QUFFRHNGLFFBQUFBLE1BQU0sQ0FBRVIsU0FBRixFQUFxQjtBQUN2QjtBQUNBLGVBQUtELG1CQUFMLENBQXlCQyxTQUF6QjtBQUNILFNBeE5zQyxDQTBOdkM7OztBQUNBUyxRQUFBQSxvQkFBb0IsR0FBRztBQUNuQixlQUFLOUUsUUFBTCxHQUFnQjtBQUFBO0FBQUEsc0NBQVVNLE9BQTFCO0FBQ0g7O0FBRUR5RSxRQUFBQSxzQkFBc0IsR0FBRztBQUNyQixlQUFLL0UsUUFBTCxHQUFnQjtBQUFBO0FBQUEsc0NBQVVMLElBQTFCO0FBQ0g7O0FBak9zQyxPOzs7OztpQkFHTixJOzs7Ozs7O2lCQUdQLEk7Ozs7Ozs7aUJBRUssSTs7Ozs7OztpQkFHTyxJOzs7Ozs7O2lCQUVFLEk7Ozs7Ozs7aUJBR2YsSTs7Ozs7OztpQkFFRyxJOzs7Ozs7O2lCQUVKLEkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBfZGVjb3JhdG9yLCBDb21wb25lbnQsIE5vZGUsIFByZWZhYiwgaW5zdGFudGlhdGUsIFZlYzMsIE5vZGVQb29sLCBMYWJlbENvbXBvbmVudCwgbWF0aCwgZmluZCwgQW5pbWF0aW9uQ29tcG9uZW50IH0gZnJvbSAnY2MnO1xuaW1wb3J0IHsgUGxheWVyQ29udHJvbGxlciB9IGZyb20gJy4vUGxheWVyQ29udHJvbGxlcic7XG5pbXBvcnQge0dhbWVEZWZpbmVzLCBHYW1lU3RhdGUgfSBmcm9tICcuL0dhbWVEZWZpbmVzJztcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IF9kZWNvcmF0b3I7XG5cbmNvbnN0IHRlbXBWZWMzX2EgPSBuZXcgVmVjMygpO1xuXG5cbkBjY2NsYXNzKCdHYW1lTWFuYWdlcicpXG5leHBvcnQgY2xhc3MgR2FtZU1hbmFnZXIgZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gICAgQHByb3BlcnR5KHt0eXBlOiBQcmVmYWJ9KVxuICAgIHB1YmxpYyBzdHJhaXRGbG9vclByZmI6IFByZWZhYiA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoe3R5cGU6IFByZWZhYn0pXG4gICAgcHVibGljIGNvaW5QcmZiOiBQcmVmYWIgPSBudWxsO1xuICAgIEBwcm9wZXJ0eSh7dHlwZTogUHJlZmFifSlcbiAgICBwdWJsaWMgcm9hZEJsb2NrUHJmYjogUHJlZmFiID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eSh7dHlwZTogUGxheWVyQ29udHJvbGxlcn0pXG4gICAgcHVibGljIHBsYXllckN0cmw6IFBsYXllckNvbnRyb2xsZXIgPSBudWxsO1xuICAgIEBwcm9wZXJ0eSh7dHlwZTogTGFiZWxDb21wb25lbnR9KVxuICAgIHB1YmxpYyBjb2luU2NvcmVMYWJlbDogTGFiZWxDb21wb25lbnQgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KHt0eXBlOiBOb2RlfSlcbiAgICBwdWJsaWMgaW5pdFBhbmVsOiBOb2RlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoe3R5cGU6IE5vZGV9KVxuICAgIHB1YmxpYyBwbGF5aW5nUGFuZWw6IE5vZGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eSh7dHlwZTogTm9kZX0pXG4gICAgcHVibGljIGVuZFBhbmVsOiBOb2RlID0gbnVsbDtcblxuICAgIHByaXZhdGUgX2NvaW5Qb29sOiBOb2RlUG9vbCA9IG5ldyBOb2RlUG9vbCgpO1xuICAgIHByaXZhdGUgX2NvaW5OdW06IG51bWJlciA9IDA7XG4gICAgcHJpdmF0ZSBfc3RyYWl0Rmxvb3JQb29sOiBOb2RlUG9vbCA9IG5ldyBOb2RlUG9vbCgpO1xuICAgIHByaXZhdGUgX3JvYWRCbG9ja1Bvb2w6IE5vZGVQb29sID0gbmV3IE5vZGVQb29sKCk7XG4gICAgcHJpdmF0ZSBfY2hlY2tQYXNzZWRUaW1lOiBudW1iZXIgPSAwO1xuICAgIHByaXZhdGUgX2NoZWNrSW50ZXJ2YWw6IG51bWJlciA9IDE7XG4gICAgcHJpdmF0ZSBfYWN0aXZlRmxvb3JzOiBOb2RlW10gPSBbXTtcbiAgICBwcml2YXRlIF9jdXJTdGF0ZTogR2FtZVN0YXRlID0gR2FtZVN0YXRlLklOSVQ7XG5cbiAgICBnZXQgY29pbk51bSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2NvaW5OdW07XG4gICAgfVxuXG4gICAgc2V0IGNvaW5OdW0odmFsdWU6IG51bWJlcikge1xuICAgICAgICB0aGlzLl9jb2luTnVtID0gdmFsdWU7XG4gICAgICAgIHRoaXMuY29pblNjb3JlTGFiZWwuc3RyaW5nID0gJycrdmFsdWU7XG4gICAgfVxuXG4gICAgc2V0IGN1clN0YXRlKHZhbHVlOiBHYW1lU3RhdGUpIHtcbiAgICAgICAgc3dpdGNoKHZhbHVlKSB7XG4gICAgICAgICAgICBjYXNlIEdhbWVTdGF0ZS5JTklUOlxuICAgICAgICAgICAgICAgIHRoaXMuaW5pdFBhbmVsLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgdGhpcy5wbGF5aW5nUGFuZWwuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgdGhpcy5lbmRQYW5lbC5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB0aGlzLnJlc2V0KCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIEdhbWVTdGF0ZS5QTEFZSU5HOlxuICAgICAgICAgICAgICAgIHRoaXMuaW5pdFBhbmVsLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHRoaXMucGxheWluZ1BhbmVsLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgdGhpcy5jb2luTnVtID0gMDtcblxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBHYW1lU3RhdGUuRU5EOlxuICAgICAgICAgICAgICAgIHRoaXMucGxheWluZ1BhbmVsLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHRoaXMuZW5kUGFuZWwuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX2N1clN0YXRlID0gdmFsdWU7XG4gICAgICAgIHRoaXMucGxheWVyQ3RybC5vbkdhbWVTdGF0ZUNoYW5nZWQodmFsdWUpO1xuICAgIH1cblxuICAgIGdldCBjdXJTdGF0ZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2N1clN0YXRlO1xuICAgIH1cblxuICAgIHN0YXJ0ICgpIHtcbiAgICAgICAgdGhpcy5jdXJTdGF0ZSA9IEdhbWVTdGF0ZS5JTklUO1xuICAgICAgICB0aGlzLnBsYXllckN0cmwub25UcmlnZ2VyQ29pbiA9IHRoaXMub25Db2luVHJpZ2dlcmVkLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMucGxheWVyQ3RybC5vblRyaWdnZXJCbG9jayA9IHRoaXMub25CbG9ja1RyaWdnZXJlZC5iaW5kKHRoaXMpO1xuICAgIH1cblxuICAgIHJlc2V0KCkge1xuICAgICAgICAvLyBjbGVhciBhbGxcbiAgICAgICAgdGhpcy5fYWN0aXZlRmxvb3JzLmZvckVhY2goKGZsb29yTm9kZTogTm9kZSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5kZXN0cm95Rmxvb3IoZmxvb3JOb2RlKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuX2FjdGl2ZUZsb29ycyA9IFtdO1xuXG4gICAgICAgIC8vIGluaXRcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBHYW1lRGVmaW5lcy5tYXhBY3RpdmVGbG9vcjsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBwb3NaID0gaSAqIEdhbWVEZWZpbmVzLmZsb29yTGVuZ3RoO1xuICAgICAgICAgICAgbGV0IG5lZWRJdGVtID0gZmFsc2U7XG4gICAgICAgICAgICBpZiAoaSA+IDEpIHtcbiAgICAgICAgICAgICAgICBuZWVkSXRlbSA9IHRydWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuZ2VuZXJhdGVGbG9vcih0ZW1wVmVjM19hLnNldCgwLCAwLCBwb3NaKSwgbmVlZEl0ZW0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZGVzdHJveUZsb29yKGZsb29yTm9kZTogTm9kZSkge1xuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGZsb29yTm9kZS5jaGlsZHJlbi5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgY29uc3QgY2hpbGQgPSBmbG9vck5vZGUuY2hpbGRyZW5bal07XG4gICAgICAgICAgICBpZiAoY2hpbGQubmFtZSA9PT0gR2FtZURlZmluZXMuQ29pbk5vZGVOYW1lKSB7XG4gICAgICAgICAgICAgICAgY2hpbGQucGFyZW50ID0gbnVsbDtcbiAgICAgICAgICAgICAgICB0aGlzLl9jb2luUG9vbC5wdXQoY2hpbGQpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChjaGlsZC5uYW1lID09PSBHYW1lRGVmaW5lcy5CbG9ja05vZGVOYW1lKSB7XG4gICAgICAgICAgICAgICAgY2hpbGQucGFyZW50ID0gbnVsbDtcbiAgICAgICAgICAgICAgICB0aGlzLl9yb2FkQmxvY2tQb29sLnB1dChjaGlsZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9zdHJhaXRGbG9vclBvb2wucHV0KGZsb29yTm9kZSk7XG4gICAgfVxuXG4gICAgZ2VuZXJhdGVGbG9vcihwb3M6IFZlYzMsIGdlbmVyYXRlSXRlbTogYm9vbGVhbiA9IGZhbHNlKSB7XG4gICAgICAgIGxldCBmbG9vck5vZGUgPSB0aGlzLmNyZWF0ZVN0cmFpdEZsb29yKHBvcyk7XG4gICAgICAgIHRoaXMuX2FjdGl2ZUZsb29ycy5wdXNoKGZsb29yTm9kZSk7XG5cbiAgICAgICAgaWYgKGdlbmVyYXRlSXRlbSkge1xuICAgICAgICAgICAgY29uc3QgZ2VuZXJhdGVUeXBlID0gbWF0aC5yYW5kb21SYW5nZUludCgwLCAzKTtcbiAgICAgICAgICAgIGlmIChnZW5lcmF0ZVR5cGUgPT09IDEpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNyZWF0ZUNvaW4oZmxvb3JOb2RlLCB0ZW1wVmVjM19hLnNldCh0aGlzLnJhbmRvbVhQb3MoKSwgMSwgMCkpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChnZW5lcmF0ZVR5cGUgPT09IDIpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNyZWF0ZVJvYWRCbG9jayhmbG9vck5vZGUsIHRlbXBWZWMzX2Euc2V0KHRoaXMucmFuZG9tWFBvcygpLCAwLCAwKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByYW5kb21YUG9zKCkge1xuICAgICAgICBjb25zdCBwb3NYUG9vbDogbnVtYmVyW10gPSBbR2FtZURlZmluZXMubGVmdExpbmVYLCBHYW1lRGVmaW5lcy5taWRkbGVMaW5lWCwgR2FtZURlZmluZXMucmlnaHRMaW5lWF07XG4gICAgICAgIGNvbnN0IGluZGV4ID0gbWF0aC5yYW5kb21SYW5nZUludCgwLCAzKTtcbiAgICAgICAgY29uc3QgcG9zWDogbnVtYmVyID0gcG9zWFBvb2xbaW5kZXhdO1xuXG4gICAgICAgIHJldHVybiBwb3NYO1xuICAgIH1cblxuICAgIGNyZWF0ZVN0cmFpdEZsb29yKHBvczogVmVjMykge1xuICAgICAgICBsZXQgc3RyYWl0Rmxvb3JOb2RlOiBOb2RlID0gbnVsbDtcbiAgICAgICAgaWYgKHRoaXMuX3N0cmFpdEZsb29yUG9vbC5zaXplKCkgPiAwKSB7XG4gICAgICAgICAgICBzdHJhaXRGbG9vck5vZGUgPSB0aGlzLl9zdHJhaXRGbG9vclBvb2wuZ2V0KCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzdHJhaXRGbG9vck5vZGUgPSBpbnN0YW50aWF0ZSh0aGlzLnN0cmFpdEZsb29yUHJmYik7XG4gICAgICAgIH1cblxuICAgICAgICBzdHJhaXRGbG9vck5vZGUuc2V0UG9zaXRpb24ocG9zKTtcbiAgICAgICAgc3RyYWl0Rmxvb3JOb2RlLnBhcmVudCA9IHRoaXMubm9kZTtcblxuICAgICAgICByZXR1cm4gc3RyYWl0Rmxvb3JOb2RlO1xuICAgIH1cblxuICAgIGNyZWF0ZUNvaW4ocGFyZW50OiBOb2RlLCBsb2NhbFBvczogVmVjMykge1xuICAgICAgICBsZXQgY29pbk5vZGU6IE5vZGUgPSBudWxsO1xuICAgICAgICBpZiAodGhpcy5fY29pblBvb2wuc2l6ZSgpID4gMCkge1xuICAgICAgICAgICAgY29pbk5vZGUgPSB0aGlzLl9jb2luUG9vbC5nZXQoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvaW5Ob2RlID0gaW5zdGFudGlhdGUodGhpcy5jb2luUHJmYik7XG4gICAgICAgIH1cbiAgICAgICAgY29pbk5vZGUuc2V0UG9zaXRpb24obG9jYWxQb3MpO1xuICAgICAgICBjb2luTm9kZS5wYXJlbnQgPSBwYXJlbnQ7XG5cbiAgICAgICAgcmV0dXJuIGNvaW5Ob2RlO1xuICAgIH1cblxuICAgIGNyZWF0ZVJvYWRCbG9jayhwYXJlbnQ6IE5vZGUsIGxvY2FsUG9zOiBWZWMzKSB7XG4gICAgICAgIGxldCByb2FkQmxvY2s6IE5vZGUgPSBudWxsO1xuICAgICAgICBpZiAodGhpcy5fcm9hZEJsb2NrUG9vbC5zaXplKCkgPiAwKSB7XG4gICAgICAgICAgICByb2FkQmxvY2sgPSB0aGlzLl9yb2FkQmxvY2tQb29sLmdldCgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcm9hZEJsb2NrID0gaW5zdGFudGlhdGUodGhpcy5yb2FkQmxvY2tQcmZiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJvYWRCbG9jay5zZXRQb3NpdGlvbihsb2NhbFBvcyk7XG4gICAgICAgIHJvYWRCbG9jay5wYXJlbnQgPSBwYXJlbnQ7XG5cbiAgICAgICAgY29uc3QgYW5pbUNvbXAgPSByb2FkQmxvY2suZ2V0Q29tcG9uZW50KEFuaW1hdGlvbkNvbXBvbmVudCk7XG4gICAgICAgIGNvbnN0IGRvd25OYW1lID0gJ2Jsb2NrX2Rvd24nO1xuICAgICAgICBjb25zdCBzdGF0ZSA9IGFuaW1Db21wLmdldFN0YXRlKGRvd25OYW1lKTtcbiAgICAgICAgc3RhdGUuc2V0VGltZSgwKTtcblxuICAgICAgICByZXR1cm4gcm9hZEJsb2NrO1xuICAgIH1cblxuICAgIG9uQ29pblRyaWdnZXJlZChjb2luTm9kZTogTm9kZSkge1xuICAgICAgICB0aGlzLl9jb2luTnVtICsrO1xuICAgICAgICB0aGlzLmNvaW5TY29yZUxhYmVsLnN0cmluZyA9ICcnICsgdGhpcy5fY29pbk51bTtcbiAgICAgICAgdGhpcy5fY29pblBvb2wucHV0KGNvaW5Ob2RlKTtcbiAgICB9XG5cbiAgICBvbkJsb2NrVHJpZ2dlcmVkKGJsb2NrTm9kZTogTm9kZSkge1xuICAgICAgICB0aGlzLmN1clN0YXRlID0gR2FtZVN0YXRlLkVORDtcbiAgICB9XG5cbiAgICBjaGVja1RvR2VuZXJhdGVFbGVtKGRlbHRhVGltZTogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMuX2NoZWNrUGFzc2VkVGltZSArPSBkZWx0YVRpbWU7XG4gICAgICAgIGlmICh0aGlzLl9jaGVja1Bhc3NlZFRpbWUgPiB0aGlzLl9jaGVja0ludGVydmFsKSB7XG4gICAgICAgICAgICAvLyDpmpDol4/lnKjkurrnianouqvlkI7nmoRGbG9vclxuICAgICAgICAgICAgbGV0IGJhY2tJbmRleCA9IDA7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuX2FjdGl2ZUZsb29ycy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGNvbnN0IGZsb29yID0gdGhpcy5fYWN0aXZlRmxvb3JzW2ldO1xuICAgICAgICAgICAgICAgIGlmIChmbG9vci5wb3NpdGlvbi56ID4gKHRoaXMucGxheWVyQ3RybC5ub2RlLnBvc2l0aW9uLnogLSBHYW1lRGVmaW5lcy5mbG9vckxlbmd0aCkpIHtcbiAgICAgICAgICAgICAgICAgICAgYmFja0luZGV4ID0gaTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoYmFja0luZGV4ID4gMCkge1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYmFja0luZGV4OyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZmlyc3Q6IE5vZGUgPSB0aGlzLl9hY3RpdmVGbG9vcnMuc2hpZnQoKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kZXN0cm95Rmxvb3IoZmlyc3QpO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBsYXN0ID0gdGhpcy5fYWN0aXZlRmxvb3JzW3RoaXMuX2FjdGl2ZUZsb29ycy5sZW5ndGggLSAxXTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcG9zWiA9IGxhc3QucG9zaXRpb24ueiArIEdhbWVEZWZpbmVzLmZsb29yTGVuZ3RoO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmdlbmVyYXRlRmxvb3IodGVtcFZlYzNfYS5zZXQoMCwgMCwgcG9zWiksIHRydWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5fY2hlY2tQYXNzZWRUaW1lID0gMDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHVwZGF0ZSAoZGVsdGFUaW1lOiBudW1iZXIpIHtcbiAgICAgICAgLy8gWW91ciB1cGRhdGUgZnVuY3Rpb24gZ29lcyBoZXJlLlxuICAgICAgICB0aGlzLmNoZWNrVG9HZW5lcmF0ZUVsZW0oZGVsdGFUaW1lKTtcbiAgICB9XG5cbiAgICAvLyBidXR0b24gZXZlbnRzXG4gICAgb25TdGFydEJ1dHRvbkNsaWNrZWQoKSB7XG4gICAgICAgIHRoaXMuY3VyU3RhdGUgPSBHYW1lU3RhdGUuUExBWUlORztcbiAgICB9XG5cbiAgICBvblJlc3RhcnRCdXR0b25DbGlja2VkKCkge1xuICAgICAgICB0aGlzLmN1clN0YXRlID0gR2FtZVN0YXRlLklOSVQ7XG4gICAgfVxufVxuIl19