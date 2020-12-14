System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, Utils, _crd;

  _export("Utils", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "4aba5X+ky1KWqr6BZdQ3uCi", "Utils", _context.meta);

      _export("Utils", Utils = class Utils {
        static walkNode(node, callback) {
          callback(node);
          node.children.forEach(childNode => {
            this.walkNode(childNode, callback);
          });
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vVXNlcnMvbWFjL0Rvd25sb2Fkcy9leGFtcGxlLTNkLW1hc3Rlci9zaW1wbGUtZ2FtZXMvYXNzZXRzL3NpbXBsZS1zaG9vdGluZy9zY3JpcHRzL1V0aWxzLnRzIl0sIm5hbWVzIjpbIlV0aWxzIiwid2Fsa05vZGUiLCJub2RlIiwiY2FsbGJhY2siLCJjaGlsZHJlbiIsImZvckVhY2giLCJjaGlsZE5vZGUiXSwibWFwcGluZ3MiOiI7OztpQkFFYUEsSzs7Ozs7Ozs7Ozs7Ozt1QkFBQUEsSyxHQUFOLE1BQU1BLEtBQU4sQ0FBWTtBQUNmLGVBQU9DLFFBQVAsQ0FBZ0JDLElBQWhCLEVBQTRCQyxRQUE1QixFQUEyQztBQUN2Q0EsVUFBQUEsUUFBUSxDQUFDRCxJQUFELENBQVI7QUFDQUEsVUFBQUEsSUFBSSxDQUFDRSxRQUFMLENBQWNDLE9BQWQsQ0FBdUJDLFNBQUQsSUFBZTtBQUNqQyxpQkFBS0wsUUFBTCxDQUFjSyxTQUFkLEVBQXlCSCxRQUF6QjtBQUNILFdBRkQ7QUFHSDs7QUFOYyxPIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTm9kZSB9IGZyb20gXCJjY1wiO1xuXG5leHBvcnQgY2xhc3MgVXRpbHMge1xuICAgIHN0YXRpYyB3YWxrTm9kZShub2RlOiBOb2RlLCBjYWxsYmFjazogYW55KSB7XG4gICAgICAgIGNhbGxiYWNrKG5vZGUpO1xuICAgICAgICBub2RlLmNoaWxkcmVuLmZvckVhY2goKGNoaWxkTm9kZSkgPT4ge1xuICAgICAgICAgICAgdGhpcy53YWxrTm9kZShjaGlsZE5vZGUsIGNhbGxiYWNrKTtcbiAgICAgICAgfSlcbiAgICB9XG59XG4iXX0=