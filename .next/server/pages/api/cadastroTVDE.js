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
exports.id = "pages/api/cadastroTVDE";
exports.ids = ["pages/api/cadastroTVDE"];
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

/***/ "(api)/./pages/api/cadastroTVDE.js":
/*!***********************************!*\
  !*** ./pages/api/cadastroTVDE.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\nconst db = __webpack_require__(/*! ../../db */ \"(api)/./db.js\");\nasync function handler(req, res) {\n    if (req.method === \"POST\") {\n        const { nome , telefone , email , endereco , possui_carro  } = req.body;\n        if (!nome || !telefone || !email || !endereco || possui_carro === undefined) {\n            return res.status(400).json({\n                error: \"Todos os campos s\\xe3o obrigat\\xf3rios.\"\n            });\n        }\n        try {\n            const telefoneLimpo = telefone.trim();\n            // Verificando se o telefone já existe\n            const [telefoneExistente] = await db.query(\"SELECT * FROM tvda WHERE TRIM(telefone) = ?\", [\n                telefoneLimpo\n            ]);\n            if (telefoneExistente && telefoneExistente.length > 0) {\n                console.log(\"Telefone j\\xe1 cadastrado:\", telefoneExistente);\n                return res.status(400).json({\n                    error: \"Telefone j\\xe1 cadastrado.\"\n                });\n            }\n            // Verificando se o e-mail já existe\n            const [emailExistente] = await db.query(\"SELECT * FROM tvda WHERE email = ?\", [\n                email\n            ]);\n            if (emailExistente && emailExistente.length > 0) {\n                return res.status(400).json({\n                    error: \"E-mail j\\xe1 cadastrado.\"\n                });\n            }\n            // Inserir os dados no banco de dados\n            const [result] = await db.query(`INSERT INTO tvda (nome, telefone, email, endereco, possui_carro, data_cadastro) \r\n         VALUES (?, ?, ?, ?, ?, NOW())`, [\n                nome,\n                telefone,\n                email,\n                endereco,\n                possui_carro\n            ]);\n            res.status(201).json({\n                message: \"Cadastro realizado com sucesso!\",\n                id: result.insertId\n            });\n        } catch (error) {\n            console.error(error);\n            res.status(500).json({\n                error: \"Erro ao cadastrar usu\\xe1rio.\"\n            });\n        }\n    } else {\n        res.status(405).json({\n            error: \"M\\xe9todo n\\xe3o permitido.\"\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvY2FkYXN0cm9UVkRFLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQSxNQUFNQSxFQUFFLEdBQUdDLG1CQUFPLENBQUMsK0JBQVUsQ0FBQztBQUVmLGVBQWVDLE9BQU8sQ0FBQ0MsR0FBRyxFQUFFQyxHQUFHLEVBQUU7SUFDOUMsSUFBSUQsR0FBRyxDQUFDRSxNQUFNLEtBQUssTUFBTSxFQUFFO1FBQ3pCLE1BQU0sRUFBRUMsSUFBSSxHQUFFQyxRQUFRLEdBQUVDLEtBQUssR0FBRUMsUUFBUSxHQUFFQyxZQUFZLEdBQUUsR0FBR1AsR0FBRyxDQUFDUSxJQUFJO1FBRWxFLElBQUksQ0FBQ0wsSUFBSSxJQUFJLENBQUNDLFFBQVEsSUFBSSxDQUFDQyxLQUFLLElBQUksQ0FBQ0MsUUFBUSxJQUFJQyxZQUFZLEtBQUtFLFNBQVMsRUFBRTtZQUMzRSxPQUFPUixHQUFHLENBQUNTLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDO2dCQUFFQyxLQUFLLEVBQUUseUNBQW1DO2FBQUUsQ0FBQyxDQUFDO1FBQzlFLENBQUM7UUFFRCxJQUFJO1lBQ0YsTUFBTUMsYUFBYSxHQUFHVCxRQUFRLENBQUNVLElBQUksRUFBRTtZQUVyQyxzQ0FBc0M7WUFDdEMsTUFBTSxDQUFDQyxpQkFBaUIsQ0FBQyxHQUFHLE1BQU1sQixFQUFFLENBQUNtQixLQUFLLENBQ3hDLDZDQUE2QyxFQUM3QztnQkFBQ0gsYUFBYTthQUFDLENBQ2hCO1lBRUQsSUFBSUUsaUJBQWlCLElBQUlBLGlCQUFpQixDQUFDRSxNQUFNLEdBQUcsQ0FBQyxFQUFFO2dCQUNyREMsT0FBTyxDQUFDQyxHQUFHLENBQUMsNEJBQXlCLEVBQUVKLGlCQUFpQixDQUFDLENBQUM7Z0JBQzFELE9BQU9kLEdBQUcsQ0FBQ1MsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUM7b0JBQUVDLEtBQUssRUFBRSw0QkFBeUI7aUJBQUUsQ0FBQyxDQUFDO1lBQ3BFLENBQUM7WUFFRCxvQ0FBb0M7WUFDcEMsTUFBTSxDQUFDUSxjQUFjLENBQUMsR0FBRyxNQUFNdkIsRUFBRSxDQUFDbUIsS0FBSyxDQUNyQyxvQ0FBb0MsRUFDcEM7Z0JBQUNYLEtBQUs7YUFBQyxDQUNSO1lBRUQsSUFBSWUsY0FBYyxJQUFJQSxjQUFjLENBQUNILE1BQU0sR0FBRyxDQUFDLEVBQUU7Z0JBQy9DLE9BQU9oQixHQUFHLENBQUNTLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDO29CQUFFQyxLQUFLLEVBQUUsMEJBQXVCO2lCQUFFLENBQUMsQ0FBQztZQUNsRSxDQUFDO1lBRUQscUNBQXFDO1lBQ3JDLE1BQU0sQ0FBQ1MsTUFBTSxDQUFDLEdBQUcsTUFBTXhCLEVBQUUsQ0FBQ21CLEtBQUssQ0FDN0IsQ0FBQztnQkFFQWIsSUFBSTtnQkFBRUM7Z0JBQVVDLEtBQUs7Z0JBQUVDO2dCQUFVQzthQUFhLENBQ2hEO1lBRUROLEdBQUc7Z0JBQW9CcUIsT0FBTyxFQUFFO2dCQUFtQ0MsRUFBRSxFQUFFRixNQUFNLENBQUNHLFFBQVE7YUFBRSxDQUFDLENBQUM7UUFDNUYsRUFBRTtZQUNBTixPQUFPLENBQUNOLEtBQUs7WUFDYlgsR0FBRyxDQUFDUyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQztnQkFBRUMsS0FBSyxFQUFFO2FBQThCLENBQUMsQ0FBQztRQUNoRSxDQUFDO0lBQ0g7UUFDRVgsR0FBRyxDQUFDUztZQUFtQkUsS0FBSyxFQUFFO1NBQXlCLENBQUMsQ0FBQztJQUMzRCxDQUFDO0FBQ0gsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3pvb200emVuLy4vcGFnZXMvYXBpL2NhZGFzdHJvVFZERS5qcz8yNDNmIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGRiID0gcmVxdWlyZSgnLi4vLi4vZGInKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIocmVxLCByZXMpIHtcclxuICBpZiAocmVxLm1ldGhvZCA9PT0gJ1BPU1QnKSB7XHJcbiAgICBjb25zdCB7IG5vbWUsIHRlbGVmb25lLCBlbWFpbCwgZW5kZXJlY28sIHBvc3N1aV9jYXJybyB9ID0gcmVxLmJvZHk7XHJcblxyXG4gICAgaWYgKCFub21lIHx8ICF0ZWxlZm9uZSB8fCAhZW1haWwgfHwgIWVuZGVyZWNvIHx8IHBvc3N1aV9jYXJybyA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwMCkuanNvbih7IGVycm9yOiAnVG9kb3Mgb3MgY2FtcG9zIHPDo28gb2JyaWdhdMOzcmlvcy4nIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHRlbGVmb25lTGltcG8gPSB0ZWxlZm9uZS50cmltKCk7XHJcblxyXG4gICAgICAvLyBWZXJpZmljYW5kbyBzZSBvIHRlbGVmb25lIGrDoSBleGlzdGVcclxuICAgICAgY29uc3QgW3RlbGVmb25lRXhpc3RlbnRlXSA9IGF3YWl0IGRiLnF1ZXJ5KFxyXG4gICAgICAgICdTRUxFQ1QgKiBGUk9NIHR2ZGEgV0hFUkUgVFJJTSh0ZWxlZm9uZSkgPSA/JyxcclxuICAgICAgICBbdGVsZWZvbmVMaW1wb11cclxuICAgICAgKTtcclxuXHJcbiAgICAgIGlmICh0ZWxlZm9uZUV4aXN0ZW50ZSAmJiB0ZWxlZm9uZUV4aXN0ZW50ZS5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ1RlbGVmb25lIGrDoSBjYWRhc3RyYWRvOicsIHRlbGVmb25lRXhpc3RlbnRlKTtcclxuICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDApLmpzb24oeyBlcnJvcjogJ1RlbGVmb25lIGrDoSBjYWRhc3RyYWRvLicgfSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIFZlcmlmaWNhbmRvIHNlIG8gZS1tYWlsIGrDoSBleGlzdGVcclxuICAgICAgY29uc3QgW2VtYWlsRXhpc3RlbnRlXSA9IGF3YWl0IGRiLnF1ZXJ5KFxyXG4gICAgICAgICdTRUxFQ1QgKiBGUk9NIHR2ZGEgV0hFUkUgZW1haWwgPSA/JyxcclxuICAgICAgICBbZW1haWxdXHJcbiAgICAgICk7XHJcblxyXG4gICAgICBpZiAoZW1haWxFeGlzdGVudGUgJiYgZW1haWxFeGlzdGVudGUubGVuZ3RoID4gMCkge1xyXG4gICAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwMCkuanNvbih7IGVycm9yOiAnRS1tYWlsIGrDoSBjYWRhc3RyYWRvLicgfSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIEluc2VyaXIgb3MgZGFkb3Mgbm8gYmFuY28gZGUgZGFkb3NcclxuICAgICAgY29uc3QgW3Jlc3VsdF0gPSBhd2FpdCBkYi5xdWVyeShcclxuICAgICAgICBgSU5TRVJUIElOVE8gdHZkYSAobm9tZSwgdGVsZWZvbmUsIGVtYWlsLCBlbmRlcmVjbywgcG9zc3VpX2NhcnJvLCBkYXRhX2NhZGFzdHJvKSBcclxuICAgICAgICAgVkFMVUVTICg/LCA/LCA/LCA/LCA/LCBOT1coKSlgLFxyXG4gICAgICAgIFtub21lLCB0ZWxlZm9uZSwgZW1haWwsIGVuZGVyZWNvLCBwb3NzdWlfY2Fycm9dXHJcbiAgICAgICk7XHJcblxyXG4gICAgICByZXMuc3RhdHVzKDIwMSkuanNvbih7IG1lc3NhZ2U6ICdDYWRhc3RybyByZWFsaXphZG8gY29tIHN1Y2Vzc28hJywgaWQ6IHJlc3VsdC5pbnNlcnRJZCB9KTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xyXG4gICAgICByZXMuc3RhdHVzKDUwMCkuanNvbih7IGVycm9yOiAnRXJybyBhbyBjYWRhc3RyYXIgdXN1w6FyaW8uJyB9KTtcclxuICAgIH1cclxuICB9IGVsc2Uge1xyXG4gICAgcmVzLnN0YXR1cyg0MDUpLmpzb24oeyBlcnJvcjogJ03DqXRvZG8gbsOjbyBwZXJtaXRpZG8uJyB9KTtcclxuICB9XHJcbn1cclxuIl0sIm5hbWVzIjpbImRiIiwicmVxdWlyZSIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJtZXRob2QiLCJub21lIiwidGVsZWZvbmUiLCJlbWFpbCIsImVuZGVyZWNvIiwicG9zc3VpX2NhcnJvIiwiYm9keSIsInVuZGVmaW5lZCIsInN0YXR1cyIsImpzb24iLCJlcnJvciIsInRlbGVmb25lTGltcG8iLCJ0cmltIiwidGVsZWZvbmVFeGlzdGVudGUiLCJxdWVyeSIsImxlbmd0aCIsImNvbnNvbGUiLCJsb2ciLCJlbWFpbEV4aXN0ZW50ZSIsInJlc3VsdCIsIm1lc3NhZ2UiLCJpZCIsImluc2VydElkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/cadastroTVDE.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/cadastroTVDE.js"));
module.exports = __webpack_exports__;

})();