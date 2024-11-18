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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\nconst db = __webpack_require__(/*! ../../db */ \"(api)/./db.js\");\nasync function handler(req, res) {\n    if (req.method === \"POST\") {\n        const { nome , telefone , email , endereco , possui_carro  } = req.body;\n        if (!nome || !telefone || !email || !endereco || possui_carro === undefined) {\n            return res.status(400).json({\n                error: \"Todos os campos s\\xe3o obrigat\\xf3rios.\"\n            });\n        }\n        try {\n            const [result] = await db.query(`INSERT INTO clientes (nome, telefone, email, endereco, possui_carro, data_cadastro) \r\n         VALUES (?, ?, ?, ?, ?, NOW())`, [\n                nome,\n                telefone,\n                email,\n                endereco,\n                possui_carro\n            ]);\n            res.status(201).json({\n                message: \"Cadastro realizado com sucesso!\",\n                id: result.insertId\n            });\n        } catch (error) {\n            console.error(error);\n            res.status(500).json({\n                error: \"Erro ao cadastrar usu\\xe1rio.\"\n            });\n        }\n    } else {\n        res.status(405).json({\n            error: \"M\\xe9todo n\\xe3o permitido.\"\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvY2FkYXN0cmFyLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQSxNQUFNQSxFQUFFLEdBQUdDLG1CQUFPLENBQUMsK0JBQVUsQ0FBQztBQUVmLGVBQWVDLE9BQU8sQ0FBQ0MsR0FBRyxFQUFFQyxHQUFHLEVBQUU7SUFDOUMsSUFBSUQsR0FBRyxDQUFDRSxNQUFNLEtBQUssTUFBTSxFQUFFO1FBQ3pCLE1BQU0sRUFBRUMsSUFBSSxHQUFFQyxRQUFRLEdBQUVDLEtBQUssR0FBRUMsUUFBUSxHQUFFQyxZQUFZLEdBQUUsR0FBR1AsR0FBRyxDQUFDUSxJQUFJO1FBRWxFLElBQUksQ0FBQ0wsSUFBSSxJQUFJLENBQUNDLFFBQVEsSUFBSSxDQUFDQyxLQUFLLElBQUksQ0FBQ0MsUUFBUSxJQUFJQyxZQUFZLEtBQUtFLFNBQVMsRUFBRTtZQUMzRSxPQUFPUixHQUFHLENBQUNTLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDO2dCQUFFQyxLQUFLLEVBQUUseUNBQW1DO2FBQUUsQ0FBQyxDQUFDO1FBQzlFLENBQUM7UUFFRCxJQUFJO1lBQ0YsTUFBTSxDQUFDQyxNQUFNLENBQUMsR0FBRyxNQUFNaEIsRUFBRSxDQUFDaUIsS0FBSyxDQUM3QixDQUFDO2dCQUVBWCxJQUFJO2dCQUFFQztnQkFBVUMsS0FBSztnQkFBRUM7Z0JBQVVDO2FBQWEsQ0FDaEQ7WUFFRE4sR0FBRztnQkFBb0JjLE9BQU8sRUFBRTtnQkFBbUNDLEVBQUUsRUFBRUgsTUFBTSxDQUFDSSxRQUFRO2FBQUUsQ0FBQyxDQUFDO1FBQzVGLEVBQUU7WUFDQUMsT0FBTyxDQUFDTixLQUFLO1lBQ2JYLEdBQUcsQ0FBQ1MsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUM7Z0JBQUVDLEtBQUssRUFBRTthQUE4QixDQUFDLENBQUM7UUFDaEUsQ0FBQztJQUNIO1FBQ0VYLEdBQUcsQ0FBQ1M7WUFBbUJFLEtBQUssRUFBRTtTQUF5QixDQUFDLENBQUM7SUFDM0QsQ0FBQztBQUNILENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly96b29tNHplbi8uL3BhZ2VzL2FwaS9jYWRhc3RyYXIuanM/NGNkMCJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBkYiA9IHJlcXVpcmUoJy4uLy4uL2RiJyk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKSB7XHJcbiAgaWYgKHJlcS5tZXRob2QgPT09ICdQT1NUJykge1xyXG4gICAgY29uc3QgeyBub21lLCB0ZWxlZm9uZSwgZW1haWwsIGVuZGVyZWNvLCBwb3NzdWlfY2Fycm8gfSA9IHJlcS5ib2R5O1xyXG5cclxuICAgIGlmICghbm9tZSB8fCAhdGVsZWZvbmUgfHwgIWVtYWlsIHx8ICFlbmRlcmVjbyB8fCBwb3NzdWlfY2Fycm8gPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDApLmpzb24oeyBlcnJvcjogJ1RvZG9zIG9zIGNhbXBvcyBzw6NvIG9icmlnYXTDs3Jpb3MuJyB9KTtcclxuICAgIH1cclxuXHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCBbcmVzdWx0XSA9IGF3YWl0IGRiLnF1ZXJ5KFxyXG4gICAgICAgIGBJTlNFUlQgSU5UTyBjbGllbnRlcyAobm9tZSwgdGVsZWZvbmUsIGVtYWlsLCBlbmRlcmVjbywgcG9zc3VpX2NhcnJvLCBkYXRhX2NhZGFzdHJvKSBcclxuICAgICAgICAgVkFMVUVTICg/LCA/LCA/LCA/LCA/LCBOT1coKSlgLFxyXG4gICAgICAgIFtub21lLCB0ZWxlZm9uZSwgZW1haWwsIGVuZGVyZWNvLCBwb3NzdWlfY2Fycm9dIFxyXG4gICAgICApO1xyXG5cclxuICAgICAgcmVzLnN0YXR1cygyMDEpLmpzb24oeyBtZXNzYWdlOiAnQ2FkYXN0cm8gcmVhbGl6YWRvIGNvbSBzdWNlc3NvIScsIGlkOiByZXN1bHQuaW5zZXJ0SWQgfSk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcclxuICAgICAgcmVzLnN0YXR1cyg1MDApLmpzb24oeyBlcnJvcjogJ0Vycm8gYW8gY2FkYXN0cmFyIHVzdcOhcmlvLicgfSk7XHJcbiAgICB9XHJcbiAgfSBlbHNlIHtcclxuICAgIHJlcy5zdGF0dXMoNDA1KS5qc29uKHsgZXJyb3I6ICdNw6l0b2RvIG7Do28gcGVybWl0aWRvLicgfSk7XHJcbiAgfVxyXG59XHJcbiJdLCJuYW1lcyI6WyJkYiIsInJlcXVpcmUiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwibWV0aG9kIiwibm9tZSIsInRlbGVmb25lIiwiZW1haWwiLCJlbmRlcmVjbyIsInBvc3N1aV9jYXJybyIsImJvZHkiLCJ1bmRlZmluZWQiLCJzdGF0dXMiLCJqc29uIiwiZXJyb3IiLCJyZXN1bHQiLCJxdWVyeSIsIm1lc3NhZ2UiLCJpZCIsImluc2VydElkIiwiY29uc29sZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/cadastrar.js\n");

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