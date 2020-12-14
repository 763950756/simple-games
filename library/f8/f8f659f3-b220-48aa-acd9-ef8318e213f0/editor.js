System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, Prefab, instantiate, Vec3, Quat, tween, systemEvent, SystemEvent, CameraComponent, geometry, PhysicsSystem, loader, JsonAsset, ModelComponent, Texture2D, director, find, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _temp, _crd, ccclass, property, ray, tempQuat_a, Lobby;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

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

      ({
        ccclass,
        property
      } = _decorator);
      ({
        ray
      } = geometry);
      tempQuat_a = new Quat();

      _export("Lobby", Lobby = (_dec = ccclass('Lobby'), _dec2 = property({
        type: Prefab
      }), _dec3 = property({
        type: CameraComponent
      }), _dec(_class = (_class2 = (_temp = class Lobby extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "coverPrfb", _descriptor, this);

          _initializerDefineProperty(this, "mainCamera", _descriptor2, this);

          this.coverWidth = 1;
          this._coverList = [];
          this._coverData = [];
          this._curIndex = 0;
          this._isLoading = false;
        }

        start() {
          const persistCanvas = find('PersistCanvas');
          persistCanvas.active = false; // Your initialization goes here.

          this.loadCovers(); //this.tweenToIndex(this._curIndex, true);
          //鼠标监听

          systemEvent.on(SystemEvent.EventType.MOUSE_UP, this.onMouseUp, this); //触摸监听

          systemEvent.on(SystemEvent.EventType.TOUCH_END, this.onTouchEnd, this);
        }

        loadCovers() {
          loader.loadRes('games.json', JsonAsset, (err, jsonObj) => {
            if (Array.isArray(jsonObj.json)) {
              this.generateCovers(jsonObj.json);
            }
          });
        }

        generateCovers(coverData) {
          this._coverData = coverData;
          const coverNum = Math.max(coverData.length, 5); // 为了好看，默认至少五个

          for (let i = 0; i < coverNum; i++) {
            const coverNode = instantiate(this.coverPrfb);
            coverNode.name = '' + i;
            coverNode.parent = this.node;

            if (i < coverData.length) {
              const data = coverData[i];
              const modelComp = coverNode.getComponent(ModelComponent);
              const mat = modelComp.material;
              loader.loadRes(data.coverImgUrl, Texture2D, (err, texture) => {
                if (err) {
                  console.error(err);
                  return;
                }

                mat.setProperty('mainTexture', texture);

                if (i === coverData.length - 1) {
                  this.tweenToIndex(this._curIndex, true);
                }
              });
            }

            this._coverList.push(coverNode);
          }
        }

        tweenToIndex(index, immediate = false) {
          if (index < 0 || index >= this._coverList.length) {
            return;
          }

          this._curIndex = index;

          for (let i = 0; i < this._coverList.length; i++) {
            const coverNode = this._coverList[i];
            const pos = new Vec3();
            const rot = new Quat();

            if (i !== this._curIndex) {
              const delta = (i - this._curIndex) * this.coverWidth;
              let diff = 1 - (Math.abs(delta) + 2) * 0.1;

              if (diff < 0.1) {
                diff = 0.1;
              }

              const sign = Math.sign(delta);
              let posX = delta * diff;
              let angle = -60 * sign;
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
                onComplete: () => {}
              }).start();
            }
          }
        }

        moveRight() {
          if (this._curIndex + 1 < this._coverList.length) {
            this.tweenToIndex(this._curIndex + 1);
          }
        }

        moveLeft() {
          if (this._curIndex - 1 >= 0) {
            this.tweenToIndex(this._curIndex - 1);
          }
        }

        onClickPos(mousePos) {
          const outRay = new ray();
          this.mainCamera.screenPointToRay(mousePos.x, mousePos.y, outRay);
          PhysicsSystem.instance.raycastClosest(outRay);

          if (PhysicsSystem.instance.raycastClosestResult.collider && PhysicsSystem.instance.raycastClosestResult.collider.node) {
            const node = PhysicsSystem.instance.raycastClosestResult.collider.node;
            const index = Number.parseInt(node.name);

            if (index < this._coverData.length) {
              if (this._isLoading) {
                return;
              }

              this._isLoading = true;
              const sceneUrl = this._coverData[index].sceneUrl;

              if (director.loadScene(sceneUrl)) {
                const persistCanvas = find('PersistCanvas');
                persistCanvas.active = true;
                this._isLoading = false;
              } else {
                this._isLoading = false;
              }
            }
          }
        }

        onMouseUp(event) {
          this.onClickPos(event.getLocation());
        }

        onTouchEnd(touch, event) {
          this.onClickPos(event.getLocation());
        }

        onDestroy() {
          //鼠标监听
          systemEvent.off(SystemEvent.EventType.MOUSE_UP, this.onMouseUp, this); //触摸监听

          systemEvent.off(SystemEvent.EventType.TOUCH_END, this.onTouchEnd, this);
        } // update (deltaTime: number) {
        //     // Your update function goes here.
        // }


      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "coverPrfb", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "mainCamera", [_dec3], {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vVXNlcnMvbWFjL0Rvd25sb2Fkcy9leGFtcGxlLTNkLW1hc3Rlci9zaW1wbGUtZ2FtZXMvYXNzZXRzL2xvYmJ5L3NjcmlwdHMvTG9iYnlNYW5hZ2VyLnRzIl0sIm5hbWVzIjpbIl9kZWNvcmF0b3IiLCJDb21wb25lbnQiLCJQcmVmYWIiLCJpbnN0YW50aWF0ZSIsIlZlYzMiLCJRdWF0IiwidHdlZW4iLCJzeXN0ZW1FdmVudCIsIlN5c3RlbUV2ZW50IiwiQ2FtZXJhQ29tcG9uZW50IiwiZ2VvbWV0cnkiLCJQaHlzaWNzU3lzdGVtIiwibG9hZGVyIiwiSnNvbkFzc2V0IiwiTW9kZWxDb21wb25lbnQiLCJUZXh0dXJlMkQiLCJkaXJlY3RvciIsImZpbmQiLCJjY2NsYXNzIiwicHJvcGVydHkiLCJyYXkiLCJ0ZW1wUXVhdF9hIiwiTG9iYnkiLCJ0eXBlIiwiY292ZXJXaWR0aCIsIl9jb3Zlckxpc3QiLCJfY292ZXJEYXRhIiwiX2N1ckluZGV4IiwiX2lzTG9hZGluZyIsInN0YXJ0IiwicGVyc2lzdENhbnZhcyIsImFjdGl2ZSIsImxvYWRDb3ZlcnMiLCJvbiIsIkV2ZW50VHlwZSIsIk1PVVNFX1VQIiwib25Nb3VzZVVwIiwiVE9VQ0hfRU5EIiwib25Ub3VjaEVuZCIsImxvYWRSZXMiLCJlcnIiLCJqc29uT2JqIiwiQXJyYXkiLCJpc0FycmF5IiwianNvbiIsImdlbmVyYXRlQ292ZXJzIiwiY292ZXJEYXRhIiwiY292ZXJOdW0iLCJNYXRoIiwibWF4IiwibGVuZ3RoIiwiaSIsImNvdmVyTm9kZSIsImNvdmVyUHJmYiIsIm5hbWUiLCJwYXJlbnQiLCJub2RlIiwiZGF0YSIsIm1vZGVsQ29tcCIsImdldENvbXBvbmVudCIsIm1hdCIsIm1hdGVyaWFsIiwiY292ZXJJbWdVcmwiLCJ0ZXh0dXJlIiwiY29uc29sZSIsImVycm9yIiwic2V0UHJvcGVydHkiLCJ0d2VlblRvSW5kZXgiLCJwdXNoIiwiaW5kZXgiLCJpbW1lZGlhdGUiLCJwb3MiLCJyb3QiLCJkZWx0YSIsImRpZmYiLCJhYnMiLCJzaWduIiwicG9zWCIsImFuZ2xlIiwic2V0IiwiZnJvbUF4aXNBbmdsZSIsIlVOSVRfWSIsIlBJIiwic2V0V29ybGRQb3NpdGlvbiIsInNldFdvcmxkUm90YXRpb24iLCJ0byIsInBvc2l0aW9uIiwicm90YXRpb24iLCJvbkNvbXBsZXRlIiwibW92ZVJpZ2h0IiwibW92ZUxlZnQiLCJvbkNsaWNrUG9zIiwibW91c2VQb3MiLCJvdXRSYXkiLCJtYWluQ2FtZXJhIiwic2NyZWVuUG9pbnRUb1JheSIsIngiLCJ5IiwiaW5zdGFuY2UiLCJyYXljYXN0Q2xvc2VzdCIsInJheWNhc3RDbG9zZXN0UmVzdWx0IiwiY29sbGlkZXIiLCJOdW1iZXIiLCJwYXJzZUludCIsInNjZW5lVXJsIiwibG9hZFNjZW5lIiwiZXZlbnQiLCJnZXRMb2NhdGlvbiIsInRvdWNoIiwib25EZXN0cm95Iiwib2ZmIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQVNBLE1BQUFBLFUsT0FBQUEsVTtBQUFZQyxNQUFBQSxTLE9BQUFBLFM7QUFBaUJDLE1BQUFBLE0sT0FBQUEsTTtBQUFRQyxNQUFBQSxXLE9BQUFBLFc7QUFBYUMsTUFBQUEsSSxPQUFBQSxJO0FBQU1DLE1BQUFBLEksT0FBQUEsSTtBQUFNQyxNQUFBQSxLLE9BQUFBLEs7QUFDbkVDLE1BQUFBLFcsT0FBQUEsVztBQUFhQyxNQUFBQSxXLE9BQUFBLFc7QUFBeUJDLE1BQUFBLGUsT0FBQUEsZTtBQUFpQkMsTUFBQUEsUSxPQUFBQSxRO0FBQVVDLE1BQUFBLGEsT0FBQUEsYTtBQUFlQyxNQUFBQSxNLE9BQUFBLE07QUFBUUMsTUFBQUEsUyxPQUFBQSxTO0FBQVdDLE1BQUFBLGMsT0FBQUEsYztBQUFnQkMsTUFBQUEsUyxPQUFBQSxTO0FBQWVDLE1BQUFBLFEsT0FBQUEsUTtBQUFzQkMsTUFBQUEsSSxPQUFBQSxJOzs7Ozs7O09BQ3RKO0FBQUVDLFFBQUFBLE9BQUY7QUFBV0MsUUFBQUE7QUFBWCxPLEdBQXdCbkIs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QUFDSCxlQUpELE1BSU87QUFDSCxxQkFBS0EsVUFBTCxHQUFrQixLQUFsQjtBQUNIO0FBQ0o7QUFDSjtBQUNKOztBQUVEUSxRQUFBQSxTQUFTLENBQUNzRSxLQUFELEVBQW9CO0FBQ3pCLGVBQUtmLFVBQUwsQ0FBZ0JlLEtBQUssQ0FBQ0MsV0FBTixFQUFoQjtBQUNIOztBQUVEckUsUUFBQUEsVUFBVSxDQUFDc0UsS0FBRCxFQUFlRixLQUFmLEVBQWtDO0FBQ3hDLGVBQUtmLFVBQUwsQ0FBZ0JlLEtBQUssQ0FBQ0MsV0FBTixFQUFoQjtBQUNIOztBQUVERSxRQUFBQSxTQUFTLEdBQUc7QUFDUjtBQUNBdEcsVUFBQUEsV0FBVyxDQUFDdUcsR0FBWixDQUFnQnRHLFdBQVcsQ0FBQzBCLFNBQVosQ0FBc0JDLFFBQXRDLEVBQWdELEtBQUtDLFNBQXJELEVBQWdFLElBQWhFLEVBRlEsQ0FJUjs7QUFDQTdCLFVBQUFBLFdBQVcsQ0FBQ3VHLEdBQVosQ0FBZ0J0RyxXQUFXLENBQUMwQixTQUFaLENBQXNCRyxTQUF0QyxFQUFpRCxLQUFLQyxVQUF0RCxFQUFrRSxJQUFsRTtBQUNILFNBL0pnQyxDQWlLakM7QUFDQTtBQUNBOzs7QUFuS2lDLE87Ozs7O2lCQUVOLEk7Ozs7Ozs7aUJBRVUsSSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IF9kZWNvcmF0b3IsIENvbXBvbmVudCwgTm9kZSwgUHJlZmFiLCBpbnN0YW50aWF0ZSwgVmVjMywgUXVhdCwgdHdlZW4sIEV2ZW50VG91Y2gsIFxuICAgIHN5c3RlbUV2ZW50LCBTeXN0ZW1FdmVudCwgRXZlbnRNb3VzZSwgQ2FtZXJhQ29tcG9uZW50LCBnZW9tZXRyeSwgUGh5c2ljc1N5c3RlbSwgbG9hZGVyLCBKc29uQXNzZXQsIE1vZGVsQ29tcG9uZW50LCBUZXh0dXJlMkQsIGpzLCBkaXJlY3RvciwgVmVjMiwgZ2FtZSwgZmluZCB9IGZyb20gJ2NjJztcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IF9kZWNvcmF0b3I7XG5cbmNvbnN0IHsgcmF5IH0gPSBnZW9tZXRyeTtcbmNvbnN0IHRlbXBRdWF0X2E6IFF1YXQgPSBuZXcgUXVhdCgpO1xuXG5pbnRlcmZhY2UgSUNvdmVyRGF0YSB7XG4gICAgbmFtZTogc3RyaW5nO1xuICAgIGNvdmVySW1nVXJsOiBzdHJpbmc7XG4gICAgc2NlbmVVcmw6IHN0cmluZztcbn1cblxuQGNjY2xhc3MoJ0xvYmJ5JylcbmV4cG9ydCBjbGFzcyBMb2JieSBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgQHByb3BlcnR5KHt0eXBlOiBQcmVmYWJ9KVxuICAgIHB1YmxpYyBjb3ZlclByZmI6IFByZWZhYiA9IG51bGw7XG4gICAgQHByb3BlcnR5KHt0eXBlOiBDYW1lcmFDb21wb25lbnR9KVxuICAgIHB1YmxpYyBtYWluQ2FtZXJhOiBDYW1lcmFDb21wb25lbnQgPSBudWxsO1xuXG4gICAgcHJpdmF0ZSBjb3ZlcldpZHRoOiBudW1iZXIgPSAxO1xuICAgIHByaXZhdGUgX2NvdmVyTGlzdDogTm9kZVtdID0gW107XG4gICAgcHJpdmF0ZSBfY292ZXJEYXRhOiBJQ292ZXJEYXRhW10gPSBbXTtcbiAgICBwcml2YXRlIF9jdXJJbmRleCA9IDA7XG4gICAgcHJpdmF0ZSBfaXNMb2FkaW5nID0gZmFsc2U7XG4gICAgc3RhcnQgKCkge1xuICAgICAgICBjb25zdCBwZXJzaXN0Q2FudmFzID0gZmluZCgnUGVyc2lzdENhbnZhcycpXG4gICAgICAgIHBlcnNpc3RDYW52YXMuYWN0aXZlID0gZmFsc2U7XG5cbiAgICAgICAgLy8gWW91ciBpbml0aWFsaXphdGlvbiBnb2VzIGhlcmUuXG4gICAgICAgIHRoaXMubG9hZENvdmVycygpO1xuICAgICAgICAvL3RoaXMudHdlZW5Ub0luZGV4KHRoaXMuX2N1ckluZGV4LCB0cnVlKTtcblxuXG4gICAgICAgIC8v6byg5qCH55uR5ZCsXG4gICAgICAgIHN5c3RlbUV2ZW50Lm9uKFN5c3RlbUV2ZW50LkV2ZW50VHlwZS5NT1VTRV9VUCwgdGhpcy5vbk1vdXNlVXAsIHRoaXMpO1xuICAgICAgICBcbiAgICAgICAgLy/op6bmkbjnm5HlkKxcbiAgICAgICAgc3lzdGVtRXZlbnQub24oU3lzdGVtRXZlbnQuRXZlbnRUeXBlLlRPVUNIX0VORCwgdGhpcy5vblRvdWNoRW5kLCB0aGlzKTtcbiAgICB9XG5cbiAgICBsb2FkQ292ZXJzKCkge1xuICAgICAgICBsb2FkZXIubG9hZFJlcygnZ2FtZXMuanNvbicsIEpzb25Bc3NldCwgKGVyciwganNvbk9iaikgPT4ge1xuICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoanNvbk9iai5qc29uKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuZ2VuZXJhdGVDb3ZlcnMoanNvbk9iai5qc29uKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZ2VuZXJhdGVDb3ZlcnMoY292ZXJEYXRhOklDb3ZlckRhdGFbXSkge1xuXG4gICAgICAgIHRoaXMuX2NvdmVyRGF0YSA9IGNvdmVyRGF0YTtcbiAgICAgICAgY29uc3QgY292ZXJOdW0gPSBNYXRoLm1heChjb3ZlckRhdGEubGVuZ3RoLCA1KTsgLy8g5Li65LqG5aW955yL77yM6buY6K6k6Iez5bCR5LqU5LiqXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY292ZXJOdW07IGkrKykge1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBjb25zdCBjb3Zlck5vZGU6IE5vZGUgPSBpbnN0YW50aWF0ZSh0aGlzLmNvdmVyUHJmYik7XG4gICAgICAgICAgICBjb3Zlck5vZGUubmFtZSA9ICcnK2k7XG4gICAgICAgICAgICBjb3Zlck5vZGUucGFyZW50ID0gdGhpcy5ub2RlO1xuXG4gICAgICAgICAgICBpZiAoaSA8IGNvdmVyRGF0YS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBkYXRhID0gY292ZXJEYXRhW2ldO1xuXG4gICAgICAgICAgICAgICAgY29uc3QgbW9kZWxDb21wID0gY292ZXJOb2RlLmdldENvbXBvbmVudChNb2RlbENvbXBvbmVudCk7XG4gICAgICAgICAgICAgICAgY29uc3QgbWF0ID0gbW9kZWxDb21wLm1hdGVyaWFsO1xuICAgICAgICAgICAgICAgIGxvYWRlci5sb2FkUmVzKGRhdGEuY292ZXJJbWdVcmwsIFRleHR1cmUyRCwgKGVyciwgdGV4dHVyZTogVGV4dHVyZTJEKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBtYXQuc2V0UHJvcGVydHkoJ21haW5UZXh0dXJlJywgdGV4dHVyZSk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChpID09PSBjb3ZlckRhdGEubGVuZ3RoIC0gMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50d2VlblRvSW5kZXgodGhpcy5fY3VySW5kZXgsIHRydWUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5fY292ZXJMaXN0LnB1c2goY292ZXJOb2RlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIFxuICAgIH1cblxuICAgIHR3ZWVuVG9JbmRleChpbmRleDogbnVtYmVyLCBpbW1lZGlhdGU6IGJvb2xlYW4gPSBmYWxzZSkge1xuICAgICAgICBpZiAoaW5kZXggPCAwIHx8IGluZGV4ID49IHRoaXMuX2NvdmVyTGlzdC5sZW5ndGgpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX2N1ckluZGV4ID0gaW5kZXg7XG5cbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHRoaXMuX2NvdmVyTGlzdC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgY292ZXJOb2RlID0gdGhpcy5fY292ZXJMaXN0W2ldO1xuICAgICAgICAgICAgY29uc3QgcG9zID0gbmV3IFZlYzMoKTtcbiAgICAgICAgICAgIGNvbnN0IHJvdDogUXVhdCA9IG5ldyBRdWF0KCk7XG4gICAgICAgICAgICBpZiAoaSAhPT0gdGhpcy5fY3VySW5kZXgpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBkZWx0YSA9IChpIC0gdGhpcy5fY3VySW5kZXgpICogdGhpcy5jb3ZlcldpZHRoO1xuICAgICAgICAgICAgICAgIGxldCBkaWZmID0gKDEgLSAoTWF0aC5hYnMoZGVsdGEpICsgMikgKiAwLjEpO1xuICAgICAgICAgICAgICAgIGlmIChkaWZmIDwgMC4xKSB7XG4gICAgICAgICAgICAgICAgICAgIGRpZmYgPSAwLjE7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbnN0IHNpZ24gPSBNYXRoLnNpZ24oZGVsdGEpO1xuICAgICAgICAgICAgICAgIGxldCBwb3NYID0gZGVsdGEgKiBkaWZmO1xuICAgICAgICAgICAgICAgIGxldCBhbmdsZSA9IC02MCAqIHNpZ247XG4gICAgICAgICAgICAgICAgcG9zLnNldChwb3NYLCAwLCAwKTtcbiAgICAgICAgICAgICAgICBRdWF0LmZyb21BeGlzQW5nbGUocm90LCBWZWMzLlVOSVRfWSwgYW5nbGUvMTgwICogTWF0aC5QSSlcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGltbWVkaWF0ZSkgeyAgICAgICBcbiAgICAgICAgICAgICAgICBjb3Zlck5vZGUuc2V0V29ybGRQb3NpdGlvbihwb3MpO1xuICAgICAgICAgICAgICAgIGNvdmVyTm9kZS5zZXRXb3JsZFJvdGF0aW9uKHJvdCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHR3ZWVuKGNvdmVyTm9kZSlcbiAgICAgICAgICAgICAgICAudG8oMC41LCB7cG9zaXRpb246IHBvcywgcm90YXRpb246IHJvdH0sIHtvbkNvbXBsZXRlOiAoKT0+IHtcbiAgICBcbiAgICAgICAgICAgICAgICB9fSlcbiAgICAgICAgICAgICAgICAuc3RhcnQoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG4gICAgfVxuXG4gICAgbW92ZVJpZ2h0KCkge1xuICAgICAgICBpZiAodGhpcy5fY3VySW5kZXggKyAxIDwgdGhpcy5fY292ZXJMaXN0Lmxlbmd0aCkge1xuICAgICAgICAgICAgdGhpcy50d2VlblRvSW5kZXgodGhpcy5fY3VySW5kZXggKyAxKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG1vdmVMZWZ0KCkge1xuICAgICAgICBpZiAodGhpcy5fY3VySW5kZXggLSAxID49IDApIHtcbiAgICAgICAgICAgIHRoaXMudHdlZW5Ub0luZGV4KHRoaXMuX2N1ckluZGV4IC0gMSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvbkNsaWNrUG9zKG1vdXNlUG9zOiBWZWMyKSB7XG4gICAgICAgIGNvbnN0IG91dFJheSA9IG5ldyByYXkoKTtcbiAgICAgICAgdGhpcy5tYWluQ2FtZXJhLnNjcmVlblBvaW50VG9SYXkobW91c2VQb3MueCwgbW91c2VQb3MueSwgb3V0UmF5KTtcbiAgICAgICAgUGh5c2ljc1N5c3RlbS5pbnN0YW5jZS5yYXljYXN0Q2xvc2VzdChvdXRSYXkpO1xuICAgICAgICBpZiAoUGh5c2ljc1N5c3RlbS5pbnN0YW5jZS5yYXljYXN0Q2xvc2VzdFJlc3VsdC5jb2xsaWRlciAmJlxuICAgICAgICAgICAgUGh5c2ljc1N5c3RlbS5pbnN0YW5jZS5yYXljYXN0Q2xvc2VzdFJlc3VsdC5jb2xsaWRlci5ub2RlKSB7XG4gICAgICAgICAgICBjb25zdCBub2RlID0gUGh5c2ljc1N5c3RlbS5pbnN0YW5jZS5yYXljYXN0Q2xvc2VzdFJlc3VsdC5jb2xsaWRlci5ub2RlO1xuICAgICAgICAgICAgY29uc3QgaW5kZXggPSBOdW1iZXIucGFyc2VJbnQobm9kZS5uYW1lKTtcbiAgICBcbiAgICAgICAgICAgIGlmIChpbmRleCA8IHRoaXMuX2NvdmVyRGF0YS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5faXNMb2FkaW5nKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB0aGlzLl9pc0xvYWRpbmcgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGNvbnN0IHNjZW5lVXJsID0gdGhpcy5fY292ZXJEYXRhW2luZGV4XS5zY2VuZVVybDtcbiAgICAgICAgICAgICAgICBpZiAoZGlyZWN0b3IubG9hZFNjZW5lKHNjZW5lVXJsKSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBwZXJzaXN0Q2FudmFzID0gZmluZCgnUGVyc2lzdENhbnZhcycpXG4gICAgICAgICAgICAgICAgICAgIHBlcnNpc3RDYW52YXMuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5faXNMb2FkaW5nID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5faXNMb2FkaW5nID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25Nb3VzZVVwKGV2ZW50OiBFdmVudE1vdXNlKSB7XG4gICAgICAgIHRoaXMub25DbGlja1BvcyhldmVudC5nZXRMb2NhdGlvbigpKTtcbiAgICB9XG5cbiAgICBvblRvdWNoRW5kKHRvdWNoOiBUb3VjaCwgZXZlbnQ6IEV2ZW50VG91Y2gpIHtcbiAgICAgICAgdGhpcy5vbkNsaWNrUG9zKGV2ZW50LmdldExvY2F0aW9uKCkpO1xuICAgIH1cblxuICAgIG9uRGVzdHJveSgpIHtcbiAgICAgICAgLy/pvKDmoIfnm5HlkKxcbiAgICAgICAgc3lzdGVtRXZlbnQub2ZmKFN5c3RlbUV2ZW50LkV2ZW50VHlwZS5NT1VTRV9VUCwgdGhpcy5vbk1vdXNlVXAsIHRoaXMpO1xuXG4gICAgICAgIC8v6Kem5pG455uR5ZCsXG4gICAgICAgIHN5c3RlbUV2ZW50Lm9mZihTeXN0ZW1FdmVudC5FdmVudFR5cGUuVE9VQ0hfRU5ELCB0aGlzLm9uVG91Y2hFbmQsIHRoaXMpO1xuICAgIH1cblxuICAgIC8vIHVwZGF0ZSAoZGVsdGFUaW1lOiBudW1iZXIpIHtcbiAgICAvLyAgICAgLy8gWW91ciB1cGRhdGUgZnVuY3Rpb24gZ29lcyBoZXJlLlxuICAgIC8vIH1cbn1cbiJdfQ==