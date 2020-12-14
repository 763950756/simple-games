System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, Prefab, instantiate, Vec3, Quat, tween, systemEvent, SystemEvent, CameraComponent, geometry, PhysicsSystem, loader, JsonAsset, ModelComponent, Texture2D, director, find, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _temp, _crd, ccclass, property, ray, tempQuat_a, Lobby;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

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
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Prefab = _cc.Prefab;
      instantiate = _cc.instantiate;
      Vec3 = _cc.Vec3;
      Quat = _cc.Quat;
      tween = _cc.tween;
      systemEvent = _cc.systemEvent;
      SystemEvent = _cc.SystemEvent;
      CameraComponent = _cc.CameraComponent;
      geometry = _cc.geometry;
      PhysicsSystem = _cc.PhysicsSystem;
      loader = _cc.loader;
      JsonAsset = _cc.JsonAsset;
      ModelComponent = _cc.ModelComponent;
      Texture2D = _cc.Texture2D;
      director = _cc.director;
      find = _cc.find;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "f8f65nzsiBIqqzZ74MY4hPw", "LobbyManager", _context.meta);

      ccclass = _decorator.ccclass;
      property = _decorator.property;
      ray = geometry.ray;
      tempQuat_a = new Quat();

      _export("Lobby", Lobby = (_dec = ccclass('Lobby'), _dec2 = property({
        type: Prefab
      }), _dec3 = property({
        type: CameraComponent
      }), _dec(_class = (_class2 = (_temp = /*#__PURE__*/function (_Component) {
        _inheritsLoose(Lobby, _Component);

        function Lobby() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_this, "coverPrfb", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "mainCamera", _descriptor2, _assertThisInitialized(_this));

          _this.coverWidth = 1;
          _this._coverList = [];
          _this._coverData = [];
          _this._curIndex = 0;
          _this._isLoading = false;
          return _this;
        }

        var _proto = Lobby.prototype;

        _proto.start = function start() {
          var persistCanvas = find('PersistCanvas');
          persistCanvas.active = false; // Your initialization goes here.

          this.loadCovers(); //this.tweenToIndex(this._curIndex, true);
          //鼠标监听

          systemEvent.on(SystemEvent.EventType.MOUSE_UP, this.onMouseUp, this); //触摸监听

          systemEvent.on(SystemEvent.EventType.TOUCH_END, this.onTouchEnd, this);
        };

        _proto.loadCovers = function loadCovers() {
          var _this2 = this;

          loader.loadRes('games.json', JsonAsset, function (err, jsonObj) {
            if (Array.isArray(jsonObj.json)) {
              _this2.generateCovers(jsonObj.json);
            }
          });
        };

        _proto.generateCovers = function generateCovers(coverData) {
          var _this3 = this;

          this._coverData = coverData;
          var coverNum = Math.max(coverData.length, 5); // 为了好看，默认至少五个

          var _loop = function _loop(i) {
            var coverNode = instantiate(_this3.coverPrfb);
            coverNode.name = '' + i;
            coverNode.parent = _this3.node;

            if (i < coverData.length) {
              var data = coverData[i];
              var modelComp = coverNode.getComponent(ModelComponent);
              var mat = modelComp.material;
              loader.loadRes(data.coverImgUrl, Texture2D, function (err, texture) {
                if (err) {
                  console.error(err);
                  return;
                }

                mat.setProperty('mainTexture', texture);

                if (i === coverData.length - 1) {
                  _this3.tweenToIndex(_this3._curIndex, true);
                }
              });
            }

            _this3._coverList.push(coverNode);
          };

          for (var i = 0; i < coverNum; i++) {
            _loop(i);
          }
        };

        _proto.tweenToIndex = function tweenToIndex(index, immediate) {
          if (immediate === void 0) {
            immediate = false;
          }

          if (index < 0 || index >= this._coverList.length) {
            return;
          }

          this._curIndex = index;

          for (var i = 0; i < this._coverList.length; i++) {
            var coverNode = this._coverList[i];
            var pos = new Vec3();
            var rot = new Quat();

            if (i !== this._curIndex) {
              var delta = (i - this._curIndex) * this.coverWidth;
              var diff = 1 - (Math.abs(delta) + 2) * 0.1;

              if (diff < 0.1) {
                diff = 0.1;
              }

              var sign = Math.sign(delta);
              var posX = delta * diff;
              var angle = -60 * sign;
              pos.set(posX, 0, 0);
              Quat.fromAxisAngle(rot, Vec3.UNIT_Y, angle / 180 * Math.PI);
            }

            if (immediate) {
              coverNode.setWorldPosition(pos);
              coverNode.setWorldRotation(rot);
            } else {
              tween(coverNode).to(0.5, {
                position: pos,
                rotation: rot
              }, {
                onComplete: function onComplete() {}
              }).start();
            }
          }
        };

        _proto.moveRight = function moveRight() {
          if (this._curIndex + 1 < this._coverList.length) {
            this.tweenToIndex(this._curIndex + 1);
          }
        };

        _proto.moveLeft = function moveLeft() {
          if (this._curIndex - 1 >= 0) {
            this.tweenToIndex(this._curIndex - 1);
          }
        };

        _proto.onClickPos = function onClickPos(mousePos) {
          var outRay = new ray();
          this.mainCamera.screenPointToRay(mousePos.x, mousePos.y, outRay);
          PhysicsSystem.instance.raycastClosest(outRay);

          if (PhysicsSystem.instance.raycastClosestResult.collider && PhysicsSystem.instance.raycastClosestResult.collider.node) {
            var node = PhysicsSystem.instance.raycastClosestResult.collider.node;
            var index = Number.parseInt(node.name);

            if (index < this._coverData.length) {
              if (this._isLoading) {
                return;
              }

              this._isLoading = true;
              var sceneUrl = this._coverData[index].sceneUrl;

              if (director.loadScene(sceneUrl)) {
                var persistCanvas = find('PersistCanvas');
                persistCanvas.active = true;
                this._isLoading = false;
              } else {
                this._isLoading = false;
              }
            }
          }
        };

        _proto.onMouseUp = function onMouseUp(event) {
          this.onClickPos(event.getLocation());
        };

        _proto.onTouchEnd = function onTouchEnd(touch, event) {
          this.onClickPos(event.getLocation());
        };

        _proto.onDestroy = function onDestroy() {
          //鼠标监听
          systemEvent.off(SystemEvent.EventType.MOUSE_UP, this.onMouseUp, this); //触摸监听

          systemEvent.off(SystemEvent.EventType.TOUCH_END, this.onTouchEnd, this);
        } // update (deltaTime: number) {
        //     // Your update function goes here.
        // }
        ;

        return Lobby;
      }(Component), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "coverPrfb", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "mainCamera", [_dec3], {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vVXNlcnMvbWFjL0Rvd25sb2Fkcy9leGFtcGxlLTNkLW1hc3Rlci9zaW1wbGUtZ2FtZXMvYXNzZXRzL2xvYmJ5L3NjcmlwdHMvTG9iYnlNYW5hZ2VyLnRzIl0sIm5hbWVzIjpbIl9kZWNvcmF0b3IiLCJDb21wb25lbnQiLCJQcmVmYWIiLCJpbnN0YW50aWF0ZSIsIlZlYzMiLCJRdWF0IiwidHdlZW4iLCJzeXN0ZW1FdmVudCIsIlN5c3RlbUV2ZW50IiwiQ2FtZXJhQ29tcG9uZW50IiwiZ2VvbWV0cnkiLCJQaHlzaWNzU3lzdGVtIiwibG9hZGVyIiwiSnNvbkFzc2V0IiwiTW9kZWxDb21wb25lbnQiLCJUZXh0dXJlMkQiLCJkaXJlY3RvciIsImZpbmQiLCJjY2NsYXNzIiwicHJvcGVydHkiLCJyYXkiLCJ0ZW1wUXVhdF9hIiwiTG9iYnkiLCJ0eXBlIiwiY292ZXJXaWR0aCIsIl9jb3Zlckxpc3QiLCJfY292ZXJEYXRhIiwiX2N1ckluZGV4IiwiX2lzTG9hZGluZyIsInN0YXJ0IiwicGVyc2lzdENhbnZhcyIsImFjdGl2ZSIsImxvYWRDb3ZlcnMiLCJvbiIsIkV2ZW50VHlwZSIsIk1PVVNFX1VQIiwib25Nb3VzZVVwIiwiVE9VQ0hfRU5EIiwib25Ub3VjaEVuZCIsImxvYWRSZXMiLCJlcnIiLCJqc29uT2JqIiwiQXJyYXkiLCJpc0FycmF5IiwianNvbiIsImdlbmVyYXRlQ292ZXJzIiwiY292ZXJEYXRhIiwiY292ZXJOdW0iLCJNYXRoIiwibWF4IiwibGVuZ3RoIiwiaSIsImNvdmVyTm9kZSIsImNvdmVyUHJmYiIsIm5hbWUiLCJwYXJlbnQiLCJub2RlIiwiZGF0YSIsIm1vZGVsQ29tcCIsImdldENvbXBvbmVudCIsIm1hdCIsIm1hdGVyaWFsIiwiY292ZXJJbWdVcmwiLCJ0ZXh0dXJlIiwiY29uc29sZSIsImVycm9yIiwic2V0UHJvcGVydHkiLCJ0d2VlblRvSW5kZXgiLCJwdXNoIiwiaW5kZXgiLCJpbW1lZGlhdGUiLCJwb3MiLCJyb3QiLCJkZWx0YSIsImRpZmYiLCJhYnMiLCJzaWduIiwicG9zWCIsImFuZ2xlIiwic2V0IiwiZnJvbUF4aXNBbmdsZSIsIlVOSVRfWSIsIlBJIiwic2V0V29ybGRQb3NpdGlvbiIsInNldFdvcmxkUm90YXRpb24iLCJ0byIsInBvc2l0aW9uIiwicm90YXRpb24iLCJvbkNvbXBsZXRlIiwibW92ZVJpZ2h0IiwibW92ZUxlZnQiLCJvbkNsaWNrUG9zIiwibW91c2VQb3MiLCJvdXRSYXkiLCJtYWluQ2FtZXJhIiwic2NyZWVuUG9pbnRUb1JheSIsIngiLCJ5IiwiaW5zdGFuY2UiLCJyYXljYXN0Q2xvc2VzdCIsInJheWNhc3RDbG9zZXN0UmVzdWx0IiwiY29sbGlkZXIiLCJOdW1iZXIiLCJwYXJzZUludCIsInNjZW5lVXJsIiwibG9hZFNjZW5lIiwiZXZlbnQiLCJnZXRMb2NhdGlvbiIsInRvdWNoIiwib25EZXN0cm95Iiwib2ZmIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFTQSxNQUFBQSxVLE9BQUFBLFU7QUFBWUMsTUFBQUEsUyxPQUFBQSxTO0FBQWlCQyxNQUFBQSxNLE9BQUFBLE07QUFBUUMsTUFBQUEsVyxPQUFBQSxXO0FBQWFDLE1BQUFBLEksT0FBQUEsSTtBQUFNQyxNQUFBQSxJLE9BQUFBLEk7QUFBTUMsTUFBQUEsSyxPQUFBQSxLO0FBQ25FQyxNQUFBQSxXLE9BQUFBLFc7QUFBYUMsTUFBQUEsVyxPQUFBQSxXO0FBQXlCQyxNQUFBQSxlLE9BQUFBLGU7QUFBaUJDLE1BQUFBLFEsT0FBQUEsUTtBQUFVQyxNQUFBQSxhLE9BQUFBLGE7QUFBZUMsTUFBQUEsTSxPQUFBQSxNO0FBQVFDLE1BQUFBLFMsT0FBQUEsUztBQUFXQyxNQUFBQSxjLE9BQUFBLGM7QUFBZ0JDLE1BQUFBLFMsT0FBQUEsUztBQUFlQyxNQUFBQSxRLE9BQUFBLFE7QUFBc0JDLE1BQUFBLEksT0FBQUEsSTs7Ozs7OztBQUNwSkMsTUFBQUEsTyxHQUFzQmxCLFUsQ0FBdEJrQixPO0FBQVNDLE1BQUFB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Q0MsTUFBZCxHQUF1QixJQUF2QjtBQUNBLHFCQUFLSCxVQUFMLEdBQWtCLEtBQWxCO0FBQ0gsZUFKRCxNQUlPO0FBQ0gscUJBQUtBLFVBQUwsR0FBa0IsS0FBbEI7QUFDSDtBQUNKO0FBQ0o7QUFDSixTOztlQUVEUSxTLEdBQUEsbUJBQVVzRSxLQUFWLEVBQTZCO0FBQ3pCLGVBQUtmLFVBQUwsQ0FBZ0JlLEtBQUssQ0FBQ0MsV0FBTixFQUFoQjtBQUNILFM7O2VBRURyRSxVLEdBQUEsb0JBQVdzRSxLQUFYLEVBQXlCRixLQUF6QixFQUE0QztBQUN4QyxlQUFLZixVQUFMLENBQWdCZSxLQUFLLENBQUNDLFdBQU4sRUFBaEI7QUFDSCxTOztlQUVERSxTLEdBQUEscUJBQVk7QUFDUjtBQUNBdEcsVUFBQUEsV0FBVyxDQUFDdUcsR0FBWixDQUFnQnRHLFdBQVcsQ0FBQzBCLFNBQVosQ0FBc0JDLFFBQXRDLEVBQWdELEtBQUtDLFNBQXJELEVBQWdFLElBQWhFLEVBRlEsQ0FJUjs7QUFDQTdCLFVBQUFBLFdBQVcsQ0FBQ3VHLEdBQVosQ0FBZ0J0RyxXQUFXLENBQUMwQixTQUFaLENBQXNCRyxTQUF0QyxFQUFpRCxLQUFLQyxVQUF0RCxFQUFrRSxJQUFsRTtBQUNILFMsQ0FFRDtBQUNBO0FBQ0E7Ozs7UUFuS3VCckMsUzs7Ozs7aUJBRUksSTs7Ozs7OztpQkFFVSxJIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgX2RlY29yYXRvciwgQ29tcG9uZW50LCBOb2RlLCBQcmVmYWIsIGluc3RhbnRpYXRlLCBWZWMzLCBRdWF0LCB0d2VlbiwgRXZlbnRUb3VjaCwgXG4gICAgc3lzdGVtRXZlbnQsIFN5c3RlbUV2ZW50LCBFdmVudE1vdXNlLCBDYW1lcmFDb21wb25lbnQsIGdlb21ldHJ5LCBQaHlzaWNzU3lzdGVtLCBsb2FkZXIsIEpzb25Bc3NldCwgTW9kZWxDb21wb25lbnQsIFRleHR1cmUyRCwganMsIGRpcmVjdG9yLCBWZWMyLCBnYW1lLCBmaW5kIH0gZnJvbSAnY2MnO1xuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gX2RlY29yYXRvcjtcblxuY29uc3QgeyByYXkgfSA9IGdlb21ldHJ5O1xuY29uc3QgdGVtcFF1YXRfYTogUXVhdCA9IG5ldyBRdWF0KCk7XG5cbmludGVyZmFjZSBJQ292ZXJEYXRhIHtcbiAgICBuYW1lOiBzdHJpbmc7XG4gICAgY292ZXJJbWdVcmw6IHN0cmluZztcbiAgICBzY2VuZVVybDogc3RyaW5nO1xufVxuXG5AY2NjbGFzcygnTG9iYnknKVxuZXhwb3J0IGNsYXNzIExvYmJ5IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBAcHJvcGVydHkoe3R5cGU6IFByZWZhYn0pXG4gICAgcHVibGljIGNvdmVyUHJmYjogUHJlZmFiID0gbnVsbDtcbiAgICBAcHJvcGVydHkoe3R5cGU6IENhbWVyYUNvbXBvbmVudH0pXG4gICAgcHVibGljIG1haW5DYW1lcmE6IENhbWVyYUNvbXBvbmVudCA9IG51bGw7XG5cbiAgICBwcml2YXRlIGNvdmVyV2lkdGg6IG51bWJlciA9IDE7XG4gICAgcHJpdmF0ZSBfY292ZXJMaXN0OiBOb2RlW10gPSBbXTtcbiAgICBwcml2YXRlIF9jb3ZlckRhdGE6IElDb3ZlckRhdGFbXSA9IFtdO1xuICAgIHByaXZhdGUgX2N1ckluZGV4ID0gMDtcbiAgICBwcml2YXRlIF9pc0xvYWRpbmcgPSBmYWxzZTtcbiAgICBzdGFydCAoKSB7XG4gICAgICAgIGNvbnN0IHBlcnNpc3RDYW52YXMgPSBmaW5kKCdQZXJzaXN0Q2FudmFzJylcbiAgICAgICAgcGVyc2lzdENhbnZhcy5hY3RpdmUgPSBmYWxzZTtcblxuICAgICAgICAvLyBZb3VyIGluaXRpYWxpemF0aW9uIGdvZXMgaGVyZS5cbiAgICAgICAgdGhpcy5sb2FkQ292ZXJzKCk7XG4gICAgICAgIC8vdGhpcy50d2VlblRvSW5kZXgodGhpcy5fY3VySW5kZXgsIHRydWUpO1xuXG5cbiAgICAgICAgLy/pvKDmoIfnm5HlkKxcbiAgICAgICAgc3lzdGVtRXZlbnQub24oU3lzdGVtRXZlbnQuRXZlbnRUeXBlLk1PVVNFX1VQLCB0aGlzLm9uTW91c2VVcCwgdGhpcyk7XG4gICAgICAgIFxuICAgICAgICAvL+inpuaRuOebkeWQrFxuICAgICAgICBzeXN0ZW1FdmVudC5vbihTeXN0ZW1FdmVudC5FdmVudFR5cGUuVE9VQ0hfRU5ELCB0aGlzLm9uVG91Y2hFbmQsIHRoaXMpO1xuICAgIH1cblxuICAgIGxvYWRDb3ZlcnMoKSB7XG4gICAgICAgIGxvYWRlci5sb2FkUmVzKCdnYW1lcy5qc29uJywgSnNvbkFzc2V0LCAoZXJyLCBqc29uT2JqKSA9PiB7XG4gICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShqc29uT2JqLmpzb24pKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5nZW5lcmF0ZUNvdmVycyhqc29uT2JqLmpzb24pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBnZW5lcmF0ZUNvdmVycyhjb3ZlckRhdGE6SUNvdmVyRGF0YVtdKSB7XG5cbiAgICAgICAgdGhpcy5fY292ZXJEYXRhID0gY292ZXJEYXRhO1xuICAgICAgICBjb25zdCBjb3Zlck51bSA9IE1hdGgubWF4KGNvdmVyRGF0YS5sZW5ndGgsIDUpOyAvLyDkuLrkuoblpb3nnIvvvIzpu5jorqToh7PlsJHkupTkuKpcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb3Zlck51bTsgaSsrKSB7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGNvbnN0IGNvdmVyTm9kZTogTm9kZSA9IGluc3RhbnRpYXRlKHRoaXMuY292ZXJQcmZiKTtcbiAgICAgICAgICAgIGNvdmVyTm9kZS5uYW1lID0gJycraTtcbiAgICAgICAgICAgIGNvdmVyTm9kZS5wYXJlbnQgPSB0aGlzLm5vZGU7XG5cbiAgICAgICAgICAgIGlmIChpIDwgY292ZXJEYXRhLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBjb3ZlckRhdGFbaV07XG5cbiAgICAgICAgICAgICAgICBjb25zdCBtb2RlbENvbXAgPSBjb3Zlck5vZGUuZ2V0Q29tcG9uZW50KE1vZGVsQ29tcG9uZW50KTtcbiAgICAgICAgICAgICAgICBjb25zdCBtYXQgPSBtb2RlbENvbXAubWF0ZXJpYWw7XG4gICAgICAgICAgICAgICAgbG9hZGVyLmxvYWRSZXMoZGF0YS5jb3ZlckltZ1VybCwgVGV4dHVyZTJELCAoZXJyLCB0ZXh0dXJlOiBUZXh0dXJlMkQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIG1hdC5zZXRQcm9wZXJ0eSgnbWFpblRleHR1cmUnLCB0ZXh0dXJlKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGkgPT09IGNvdmVyRGF0YS5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnR3ZWVuVG9JbmRleCh0aGlzLl9jdXJJbmRleCwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLl9jb3Zlckxpc3QucHVzaChjb3Zlck5vZGUpO1xuICAgICAgICB9XG5cbiAgICAgICAgXG4gICAgfVxuXG4gICAgdHdlZW5Ub0luZGV4KGluZGV4OiBudW1iZXIsIGltbWVkaWF0ZTogYm9vbGVhbiA9IGZhbHNlKSB7XG4gICAgICAgIGlmIChpbmRleCA8IDAgfHwgaW5kZXggPj0gdGhpcy5fY292ZXJMaXN0Lmxlbmd0aCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5fY3VySW5kZXggPSBpbmRleDtcblxuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgdGhpcy5fY292ZXJMaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBjb3Zlck5vZGUgPSB0aGlzLl9jb3Zlckxpc3RbaV07XG4gICAgICAgICAgICBjb25zdCBwb3MgPSBuZXcgVmVjMygpO1xuICAgICAgICAgICAgY29uc3Qgcm90OiBRdWF0ID0gbmV3IFF1YXQoKTtcbiAgICAgICAgICAgIGlmIChpICE9PSB0aGlzLl9jdXJJbmRleCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGRlbHRhID0gKGkgLSB0aGlzLl9jdXJJbmRleCkgKiB0aGlzLmNvdmVyV2lkdGg7XG4gICAgICAgICAgICAgICAgbGV0IGRpZmYgPSAoMSAtIChNYXRoLmFicyhkZWx0YSkgKyAyKSAqIDAuMSk7XG4gICAgICAgICAgICAgICAgaWYgKGRpZmYgPCAwLjEpIHtcbiAgICAgICAgICAgICAgICAgICAgZGlmZiA9IDAuMTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY29uc3Qgc2lnbiA9IE1hdGguc2lnbihkZWx0YSk7XG4gICAgICAgICAgICAgICAgbGV0IHBvc1ggPSBkZWx0YSAqIGRpZmY7XG4gICAgICAgICAgICAgICAgbGV0IGFuZ2xlID0gLTYwICogc2lnbjtcbiAgICAgICAgICAgICAgICBwb3Muc2V0KHBvc1gsIDAsIDApO1xuICAgICAgICAgICAgICAgIFF1YXQuZnJvbUF4aXNBbmdsZShyb3QsIFZlYzMuVU5JVF9ZLCBhbmdsZS8xODAgKiBNYXRoLlBJKVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoaW1tZWRpYXRlKSB7ICAgICAgIFxuICAgICAgICAgICAgICAgIGNvdmVyTm9kZS5zZXRXb3JsZFBvc2l0aW9uKHBvcyk7XG4gICAgICAgICAgICAgICAgY292ZXJOb2RlLnNldFdvcmxkUm90YXRpb24ocm90KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdHdlZW4oY292ZXJOb2RlKVxuICAgICAgICAgICAgICAgIC50bygwLjUsIHtwb3NpdGlvbjogcG9zLCByb3RhdGlvbjogcm90fSwge29uQ29tcGxldGU6ICgpPT4ge1xuICAgIFxuICAgICAgICAgICAgICAgIH19KVxuICAgICAgICAgICAgICAgIC5zdGFydCgpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBtb3ZlUmlnaHQoKSB7XG4gICAgICAgIGlmICh0aGlzLl9jdXJJbmRleCArIDEgPCB0aGlzLl9jb3Zlckxpc3QubGVuZ3RoKSB7XG4gICAgICAgICAgICB0aGlzLnR3ZWVuVG9JbmRleCh0aGlzLl9jdXJJbmRleCArIDEpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgbW92ZUxlZnQoKSB7XG4gICAgICAgIGlmICh0aGlzLl9jdXJJbmRleCAtIDEgPj0gMCkge1xuICAgICAgICAgICAgdGhpcy50d2VlblRvSW5kZXgodGhpcy5fY3VySW5kZXggLSAxKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uQ2xpY2tQb3MobW91c2VQb3M6IFZlYzIpIHtcbiAgICAgICAgY29uc3Qgb3V0UmF5ID0gbmV3IHJheSgpO1xuICAgICAgICB0aGlzLm1haW5DYW1lcmEuc2NyZWVuUG9pbnRUb1JheShtb3VzZVBvcy54LCBtb3VzZVBvcy55LCBvdXRSYXkpO1xuICAgICAgICBQaHlzaWNzU3lzdGVtLmluc3RhbmNlLnJheWNhc3RDbG9zZXN0KG91dFJheSk7XG4gICAgICAgIGlmIChQaHlzaWNzU3lzdGVtLmluc3RhbmNlLnJheWNhc3RDbG9zZXN0UmVzdWx0LmNvbGxpZGVyICYmXG4gICAgICAgICAgICBQaHlzaWNzU3lzdGVtLmluc3RhbmNlLnJheWNhc3RDbG9zZXN0UmVzdWx0LmNvbGxpZGVyLm5vZGUpIHtcbiAgICAgICAgICAgIGNvbnN0IG5vZGUgPSBQaHlzaWNzU3lzdGVtLmluc3RhbmNlLnJheWNhc3RDbG9zZXN0UmVzdWx0LmNvbGxpZGVyLm5vZGU7XG4gICAgICAgICAgICBjb25zdCBpbmRleCA9IE51bWJlci5wYXJzZUludChub2RlLm5hbWUpO1xuICAgIFxuICAgICAgICAgICAgaWYgKGluZGV4IDwgdGhpcy5fY292ZXJEYXRhLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLl9pc0xvYWRpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHRoaXMuX2lzTG9hZGluZyA9IHRydWU7XG4gICAgICAgICAgICAgICAgY29uc3Qgc2NlbmVVcmwgPSB0aGlzLl9jb3ZlckRhdGFbaW5kZXhdLnNjZW5lVXJsO1xuICAgICAgICAgICAgICAgIGlmIChkaXJlY3Rvci5sb2FkU2NlbmUoc2NlbmVVcmwpKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHBlcnNpc3RDYW52YXMgPSBmaW5kKCdQZXJzaXN0Q2FudmFzJylcbiAgICAgICAgICAgICAgICAgICAgcGVyc2lzdENhbnZhcy5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9pc0xvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9pc0xvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvbk1vdXNlVXAoZXZlbnQ6IEV2ZW50TW91c2UpIHtcbiAgICAgICAgdGhpcy5vbkNsaWNrUG9zKGV2ZW50LmdldExvY2F0aW9uKCkpO1xuICAgIH1cblxuICAgIG9uVG91Y2hFbmQodG91Y2g6IFRvdWNoLCBldmVudDogRXZlbnRUb3VjaCkge1xuICAgICAgICB0aGlzLm9uQ2xpY2tQb3MoZXZlbnQuZ2V0TG9jYXRpb24oKSk7XG4gICAgfVxuXG4gICAgb25EZXN0cm95KCkge1xuICAgICAgICAvL+m8oOagh+ebkeWQrFxuICAgICAgICBzeXN0ZW1FdmVudC5vZmYoU3lzdGVtRXZlbnQuRXZlbnRUeXBlLk1PVVNFX1VQLCB0aGlzLm9uTW91c2VVcCwgdGhpcyk7XG5cbiAgICAgICAgLy/op6bmkbjnm5HlkKxcbiAgICAgICAgc3lzdGVtRXZlbnQub2ZmKFN5c3RlbUV2ZW50LkV2ZW50VHlwZS5UT1VDSF9FTkQsIHRoaXMub25Ub3VjaEVuZCwgdGhpcyk7XG4gICAgfVxuXG4gICAgLy8gdXBkYXRlIChkZWx0YVRpbWU6IG51bWJlcikge1xuICAgIC8vICAgICAvLyBZb3VyIHVwZGF0ZSBmdW5jdGlvbiBnb2VzIGhlcmUuXG4gICAgLy8gfVxufVxuIl19