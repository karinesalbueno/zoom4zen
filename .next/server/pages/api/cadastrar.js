"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/cadastrar";
exports.ids = ["pages/api/cadastrar"];
exports.modules = {

/***/ "mysql2":
/*!*************************!*\
  !*** external "mysql2" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("mysql2");

/***/ }),

/***/ "(api)/./db.js":
/*!***************!*\
  !*** ./db.js ***!
  \***************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nconst mysql = __webpack_require__(/*! mysql2 */ \"mysql2\");\n// Configuração da conexão\nconst pool = mysql.createPool({\n    host: \"localhost\",\n    user: \"root\",\n    password: \"0000\",\n    database: \"zoom4zen\"\n});\nmodule.exports = pool.promise();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9kYi5qcy5qcyIsIm1hcHBpbmdzIjoiQUFBQTtBQUFBLE1BQU1BLEtBQUssR0FBR0MsbUJBQU8sQ0FBQyxzQkFBUSxDQUFDO0FBRS9CLDBCQUEwQjtBQUMxQixNQUFNQyxJQUFJLEdBQUdGLEtBQUssQ0FBQ0csVUFBVSxDQUFDO0lBQzVCQyxJQUFJLEVBQUUsV0FBVztJQUNqQkMsSUFBSSxFQUFFLE1BQU07SUFDWkMsUUFBUSxFQUFFLE1BQU07SUFDaEJDLFFBQVEsRUFBRSxVQUFVO0NBQ3JCLENBQUM7QUFFRkMsTUFBTSxDQUFDQyxPQUFPLEdBQUdQLElBQUksQ0FBQ1EsT0FBTyxFQUFFLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly96b29tNHplbi8uL2RiLmpzPzU2NjUiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgbXlzcWwgPSByZXF1aXJlKCdteXNxbDInKTtcclxuXHJcbi8vIENvbmZpZ3VyYcOnw6NvIGRhIGNvbmV4w6NvXHJcbmNvbnN0IHBvb2wgPSBteXNxbC5jcmVhdGVQb29sKHtcclxuICBob3N0OiAnbG9jYWxob3N0JywgXHJcbiAgdXNlcjogJ3Jvb3QnLCBcclxuICBwYXNzd29yZDogJzAwMDAnLCBcclxuICBkYXRhYmFzZTogJ3pvb200emVuJywgXHJcbn0pO1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBwb29sLnByb21pc2UoKTtcclxuIl0sIm5hbWVzIjpbIm15c3FsIiwicmVxdWlyZSIsInBvb2wiLCJjcmVhdGVQb29sIiwiaG9zdCIsInVzZXIiLCJwYXNzd29yZCIsImRhdGFiYXNlIiwibW9kdWxlIiwiZXhwb3J0cyIsInByb21pc2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./db.js\n");

/***/ }),

/***/ "(api)/./pages/api/cadastrar.js":
/*!********************************!*\
  !*** ./pages/api/cadastrar.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\nconst db = __webpack_require__(/*! ../../db */ \"(api)/./db.js\");\nasync function handler(req, res) {\n    if (req.method === \"POST\") {\n        const { nome , email , senha  } = req.body;\n        if (!nome || !email || !senha) {\n            return res.status(400).json({\n                error: \"Todos os campos s\\xe3o obrigat\\xf3rios.\"\n            });\n        }\n        try {\n            const [result] = await db.query(\"INSERT INTO usuarios (nome, email, senha) VALUES (?, ?, ?)\", [\n                nome,\n                email,\n                senha\n            ] // Substitua por uma senha criptografada em produção!\n            );\n            res.status(201).json({\n                message: \"Usu\\xe1rio cadastrado com sucesso!\",\n                id: result.insertId\n            });\n        } catch (error) {\n            console.error(error);\n            res.status(500).json({\n                error: \"Erro ao cadastrar usu\\xe1rio.\"\n            });\n        }\n    } else {\n        res.status(405).json({\n            error: \"M\\xe9todo n\\xe3o permitido.\"\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvY2FkYXN0cmFyLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQSxNQUFNQSxFQUFFLEdBQUdDLG1CQUFPLENBQUMsK0JBQVUsQ0FBQztBQUVmLGVBQWVDLE9BQU8sQ0FBQ0MsR0FBRyxFQUFFQyxHQUFHLEVBQUU7SUFDOUMsSUFBSUQsR0FBRyxDQUFDRSxNQUFNLEtBQUssTUFBTSxFQUFFO1FBQ3pCLE1BQU0sRUFBRUMsSUFBSSxHQUFFQyxLQUFLLEdBQUVDLEtBQUssR0FBRSxHQUFHTCxHQUFHLENBQUNNLElBQUk7UUFFdkMsSUFBSSxDQUFDSCxJQUFJLElBQUksQ0FBQ0MsS0FBSyxJQUFJLENBQUNDLEtBQUssRUFBRTtZQUM3QixPQUFPSixHQUFHLENBQUNNLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDO2dCQUFFQyxLQUFLLEVBQUUseUNBQW1DO2FBQUUsQ0FBQyxDQUFDO1FBQzlFLENBQUM7UUFFRCxJQUFJO1lBQ0YsTUFBTSxDQUFDQyxNQUFNLENBQUMsR0FBRyxNQUFNYixFQUFFLENBQUNjLEtBQUssQ0FDN0IsNERBQTRELEVBQzVEO2dCQUFDUixJQUFJO2dCQUFFQyxLQUFLO2dCQUFFQyxLQUFLO2FBQUMsQ0FBQyxxREFBcUQ7YUFDM0U7WUFDREosR0FBRyxDQUFDTSxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQztnQkFBRUksT0FBTyxFQUFFLG9DQUFpQztnQkFBRUMsRUFBRSxFQUFFSCxNQUFNLENBQUNJLFFBQVE7YUFBRSxDQUFDLENBQUM7UUFDNUYsRUFBRSxPQUFPTCxLQUFLLEVBQUU7WUFDZE0sT0FBTyxDQUFDTixLQUFLLENBQUNBLEtBQUssQ0FBQyxDQUFDO1lBQ3JCUixHQUFHLENBQUNNLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDO2dCQUFFQyxLQUFLLEVBQUUsK0JBQTRCO2FBQUUsQ0FBQyxDQUFDO1FBQ2hFLENBQUM7SUFDSCxPQUFPO1FBQ0xSLEdBQUcsQ0FBQ00sTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUM7WUFBRUMsS0FBSyxFQUFFLDZCQUF1QjtTQUFFLENBQUMsQ0FBQztJQUMzRCxDQUFDO0FBQ0gsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3pvb200emVuLy4vcGFnZXMvYXBpL2NhZGFzdHJhci5qcz80Y2QwIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGRiID0gcmVxdWlyZSgnLi4vLi4vZGInKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIocmVxLCByZXMpIHtcclxuICBpZiAocmVxLm1ldGhvZCA9PT0gJ1BPU1QnKSB7XHJcbiAgICBjb25zdCB7IG5vbWUsIGVtYWlsLCBzZW5oYSB9ID0gcmVxLmJvZHk7XHJcblxyXG4gICAgaWYgKCFub21lIHx8ICFlbWFpbCB8fCAhc2VuaGEpIHtcclxuICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAwKS5qc29uKHsgZXJyb3I6ICdUb2RvcyBvcyBjYW1wb3Mgc8OjbyBvYnJpZ2F0w7NyaW9zLicgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgW3Jlc3VsdF0gPSBhd2FpdCBkYi5xdWVyeShcclxuICAgICAgICAnSU5TRVJUIElOVE8gdXN1YXJpb3MgKG5vbWUsIGVtYWlsLCBzZW5oYSkgVkFMVUVTICg/LCA/LCA/KScsXHJcbiAgICAgICAgW25vbWUsIGVtYWlsLCBzZW5oYV0gLy8gU3Vic3RpdHVhIHBvciB1bWEgc2VuaGEgY3JpcHRvZ3JhZmFkYSBlbSBwcm9kdcOnw6NvIVxyXG4gICAgICApO1xyXG4gICAgICByZXMuc3RhdHVzKDIwMSkuanNvbih7IG1lc3NhZ2U6ICdVc3XDoXJpbyBjYWRhc3RyYWRvIGNvbSBzdWNlc3NvIScsIGlkOiByZXN1bHQuaW5zZXJ0SWQgfSk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcclxuICAgICAgcmVzLnN0YXR1cyg1MDApLmpzb24oeyBlcnJvcjogJ0Vycm8gYW8gY2FkYXN0cmFyIHVzdcOhcmlvLicgfSk7XHJcbiAgICB9XHJcbiAgfSBlbHNlIHtcclxuICAgIHJlcy5zdGF0dXMoNDA1KS5qc29uKHsgZXJyb3I6ICdNw6l0b2RvIG7Do28gcGVybWl0aWRvLicgfSk7XHJcbiAgfVxyXG59XHJcbiJdLCJuYW1lcyI6WyJkYiIsInJlcXVpcmUiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwibWV0aG9kIiwibm9tZSIsImVtYWlsIiwic2VuaGEiLCJib2R5Iiwic3RhdHVzIiwianNvbiIsImVycm9yIiwicmVzdWx0IiwicXVlcnkiLCJtZXNzYWdlIiwiaWQiLCJpbnNlcnRJZCIsImNvbnNvbGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/cadastrar.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/cadastrar.js"));
module.exports = __webpack_exports__;

})();