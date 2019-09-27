"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.redrawSnippets = exports.handleRedrawSnippet = void 0;

var _constant = require("../constant");

var _utils = require("../utils");

var _ = require("./");

const handleRedrawSnippet = (snippet, dom) => {
  if (!snippet) throw new Error(_constant.errors.snippet.missingSnippet);
  const parsedDom = (0, _utils.parseDOM)(dom);
  if (!parsedDom) throw new Error(_constant.errors.utils.parseDomFailed);
  (0, _utils.removeAllChildNodes)(snippet);
  snippet.appendChild(parsedDom);
};

exports.handleRedrawSnippet = handleRedrawSnippet;

const redrawSnippets = snippets => {
  if (!snippets) throw new Error(_constant.errors.snippet.missingSnippets);
  const snippetsIds = Object.keys(snippets);
  const snippetsIdsLength = snippetsIds.length;
  if (snippetsIdsLength === 0) throw new Error(_constant.errors.snippet.missingSnippets);

  for (let i = -1; ++i < snippetsIdsLength;) {
    const snippetId = snippetsIds[i];
    const snippetDom = snippets[snippetId];
    const snippet = document.getElementById(snippetId);
    if (!snippet) throw new Error(_constant.errors.snippet.missingSnippet);
    handleRedrawSnippet(snippet, snippetDom);
    (0, _.registerHandlers)(snippet);
  }
};

exports.redrawSnippets = redrawSnippets;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zZXJ2aWNlcy9zbmlwcGV0LnRzIl0sIm5hbWVzIjpbImhhbmRsZVJlZHJhd1NuaXBwZXQiLCJzbmlwcGV0IiwiZG9tIiwiRXJyb3IiLCJlcnJvcnMiLCJtaXNzaW5nU25pcHBldCIsInBhcnNlZERvbSIsInV0aWxzIiwicGFyc2VEb21GYWlsZWQiLCJhcHBlbmRDaGlsZCIsInJlZHJhd1NuaXBwZXRzIiwic25pcHBldHMiLCJtaXNzaW5nU25pcHBldHMiLCJzbmlwcGV0c0lkcyIsIk9iamVjdCIsImtleXMiLCJzbmlwcGV0c0lkc0xlbmd0aCIsImxlbmd0aCIsImkiLCJzbmlwcGV0SWQiLCJzbmlwcGV0RG9tIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOztBQUdBOztBQUVPLE1BQU1BLG1CQUFtQixHQUFHLENBQUNDLE9BQUQsRUFBbUJDLEdBQW5CLEtBQW1DO0FBQ3JFLE1BQUksQ0FBQ0QsT0FBTCxFQUFjLE1BQU0sSUFBSUUsS0FBSixDQUFVQyxpQkFBT0gsT0FBUCxDQUFlSSxjQUF6QixDQUFOO0FBQ2QsUUFBTUMsU0FBUyxHQUFHLHFCQUFTSixHQUFULENBQWxCO0FBRUEsTUFBSSxDQUFDSSxTQUFMLEVBQWdCLE1BQU0sSUFBSUgsS0FBSixDQUFVQyxpQkFBT0csS0FBUCxDQUFhQyxjQUF2QixDQUFOO0FBQ2hCLGtDQUFvQlAsT0FBcEI7QUFDQUEsRUFBQUEsT0FBTyxDQUFDUSxXQUFSLENBQW9CSCxTQUFwQjtBQUNBLENBUE07Ozs7QUFTQSxNQUFNSSxjQUFjLEdBQUlDLFFBQUQsSUFBd0I7QUFDckQsTUFBSSxDQUFDQSxRQUFMLEVBQWUsTUFBTSxJQUFJUixLQUFKLENBQVVDLGlCQUFPSCxPQUFQLENBQWVXLGVBQXpCLENBQU47QUFDZixRQUFNQyxXQUFXLEdBQUdDLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZSixRQUFaLENBQXBCO0FBQ0EsUUFBTUssaUJBQWlCLEdBQUdILFdBQVcsQ0FBQ0ksTUFBdEM7QUFFQSxNQUFJRCxpQkFBaUIsS0FBSyxDQUExQixFQUE2QixNQUFNLElBQUliLEtBQUosQ0FBVUMsaUJBQU9ILE9BQVAsQ0FBZVcsZUFBekIsQ0FBTjs7QUFDN0IsT0FBSyxJQUFJTSxDQUFDLEdBQUcsQ0FBQyxDQUFkLEVBQWlCLEVBQUVBLENBQUYsR0FBTUYsaUJBQXZCLEdBQTRDO0FBQzNDLFVBQU1HLFNBQVMsR0FBR04sV0FBVyxDQUFDSyxDQUFELENBQTdCO0FBQ0EsVUFBTUUsVUFBVSxHQUFHVCxRQUFRLENBQUNRLFNBQUQsQ0FBM0I7QUFDQSxVQUFNbEIsT0FBTyxHQUFHb0IsUUFBUSxDQUFDQyxjQUFULENBQXdCSCxTQUF4QixDQUFoQjtBQUVBLFFBQUksQ0FBQ2xCLE9BQUwsRUFBYyxNQUFNLElBQUlFLEtBQUosQ0FBVUMsaUJBQU9ILE9BQVAsQ0FBZUksY0FBekIsQ0FBTjtBQUNkTCxJQUFBQSxtQkFBbUIsQ0FBQ0MsT0FBRCxFQUFVbUIsVUFBVixDQUFuQjtBQUNBLDRCQUFpQm5CLE9BQWpCO0FBQ0E7QUFDRCxDQWZNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZXJyb3JzIH0gZnJvbSAnY29uc3RhbnQnXHJcbmltcG9ydCB7IHBhcnNlRE9NLCByZW1vdmVBbGxDaGlsZE5vZGVzIH0gZnJvbSAndXRpbHMnXHJcbmltcG9ydCB7IFNuaXBwZXRzIH0gZnJvbSAndHlwZXMnXHJcblxyXG5pbXBvcnQgeyByZWdpc3RlckhhbmRsZXJzIH0gZnJvbSAnc2VydmljZXMnXHJcblxyXG5leHBvcnQgY29uc3QgaGFuZGxlUmVkcmF3U25pcHBldCA9IChzbmlwcGV0OiBFbGVtZW50LCBkb206IHN0cmluZykgPT4ge1xyXG5cdGlmICghc25pcHBldCkgdGhyb3cgbmV3IEVycm9yKGVycm9ycy5zbmlwcGV0Lm1pc3NpbmdTbmlwcGV0KVxyXG5cdGNvbnN0IHBhcnNlZERvbSA9IHBhcnNlRE9NKGRvbSlcclxuXHJcblx0aWYgKCFwYXJzZWREb20pIHRocm93IG5ldyBFcnJvcihlcnJvcnMudXRpbHMucGFyc2VEb21GYWlsZWQpXHJcblx0cmVtb3ZlQWxsQ2hpbGROb2RlcyhzbmlwcGV0KVxyXG5cdHNuaXBwZXQuYXBwZW5kQ2hpbGQocGFyc2VkRG9tKVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgcmVkcmF3U25pcHBldHMgPSAoc25pcHBldHM6IFNuaXBwZXRzKSA9PiB7XHJcblx0aWYgKCFzbmlwcGV0cykgdGhyb3cgbmV3IEVycm9yKGVycm9ycy5zbmlwcGV0Lm1pc3NpbmdTbmlwcGV0cylcclxuXHRjb25zdCBzbmlwcGV0c0lkcyA9IE9iamVjdC5rZXlzKHNuaXBwZXRzKVxyXG5cdGNvbnN0IHNuaXBwZXRzSWRzTGVuZ3RoID0gc25pcHBldHNJZHMubGVuZ3RoXHJcblxyXG5cdGlmIChzbmlwcGV0c0lkc0xlbmd0aCA9PT0gMCkgdGhyb3cgbmV3IEVycm9yKGVycm9ycy5zbmlwcGV0Lm1pc3NpbmdTbmlwcGV0cylcclxuXHRmb3IgKGxldCBpID0gLTE7ICsraSA8IHNuaXBwZXRzSWRzTGVuZ3RoOyApIHtcclxuXHRcdGNvbnN0IHNuaXBwZXRJZCA9IHNuaXBwZXRzSWRzW2ldXHJcblx0XHRjb25zdCBzbmlwcGV0RG9tID0gc25pcHBldHNbc25pcHBldElkXVxyXG5cdFx0Y29uc3Qgc25pcHBldCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHNuaXBwZXRJZClcclxuXHJcblx0XHRpZiAoIXNuaXBwZXQpIHRocm93IG5ldyBFcnJvcihlcnJvcnMuc25pcHBldC5taXNzaW5nU25pcHBldClcclxuXHRcdGhhbmRsZVJlZHJhd1NuaXBwZXQoc25pcHBldCwgc25pcHBldERvbSlcclxuXHRcdHJlZ2lzdGVySGFuZGxlcnMoc25pcHBldClcclxuXHR9XHJcbn1cclxuIl19