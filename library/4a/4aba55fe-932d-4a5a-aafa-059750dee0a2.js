System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _crd, Utils;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "4aba5X+ky1KWqr6BZdQ3uCi", "Utils", _context.meta);

      _export("Utils", Utils = /*#__PURE__*/function () {
        function Utils() {}

        Utils.walkNode = function walkNode(node, callback) {
          var _this = this;

          callback(node);
          node.children.forEach(function (childNode) {
            _this.walkNode(childNode, callback);
          });
        };

        return Utils;
      }());

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vVXNlcnMvbWFjL0Rvd25sb2Fkcy9leGFtcGxlLTNkLW1hc3Rlci9zaW1wbGUtZ2FtZXMvYXNzZXRzL3NpbXBsZS1zaG9vdGluZy9zY3JpcHRzL1V0aWxzLnRzIl0sIm5hbWVzIjpbIlV0aWxzIiwid2Fsa05vZGUiLCJub2RlIiwiY2FsbGJhY2siLCJjaGlsZHJlbiIsImZvckVhY2giLCJjaGlsZE5vZGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O3VCQUVhQSxLOzs7Y0FDRkMsUSxHQUFQLGtCQUFnQkMsSUFBaEIsRUFBNEJDLFFBQTVCLEVBQTJDO0FBQUE7O0FBQ3ZDQSxVQUFBQSxRQUFRLENBQUNELElBQUQsQ0FBUjtBQUNBQSxVQUFBQSxJQUFJLENBQUNFLFFBQUwsQ0FBY0MsT0FBZCxDQUFzQixVQUFDQyxTQUFELEVBQWU7QUFDakMsWUFBQSxLQUFJLENBQUNMLFFBQUwsQ0FBY0ssU0FBZCxFQUF5QkgsUUFBekI7QUFDSCxXQUZEO0FBR0gsUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5vZGUgfSBmcm9tIFwiY2NcIjtcblxuZXhwb3J0IGNsYXNzIFV0aWxzIHtcbiAgICBzdGF0aWMgd2Fsa05vZGUobm9kZTogTm9kZSwgY2FsbGJhY2s6IGFueSkge1xuICAgICAgICBjYWxsYmFjayhub2RlKTtcbiAgICAgICAgbm9kZS5jaGlsZHJlbi5mb3JFYWNoKChjaGlsZE5vZGUpID0+IHtcbiAgICAgICAgICAgIHRoaXMud2Fsa05vZGUoY2hpbGROb2RlLCBjYWxsYmFjayk7XG4gICAgICAgIH0pXG4gICAgfVxufVxuIl19