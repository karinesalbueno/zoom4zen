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
exports.id = "pages/api/cadastroTelecomunicacoes";
exports.ids = ["pages/api/cadastroTelecomunicacoes"];
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

/***/ "(api)/./pages/api/cadastroTelecomunicacoes.js":
/*!***********************************************!*\
  !*** ./pages/api/cadastroTelecomunicacoes.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\nconst db = __webpack_require__(/*! ../../db */ \"(api)/./db.js\");\nasync function handler(req, res) {\n    if (req.method === \"POST\") {\n        const { nome , telefone , email , endereco , possui_carro , experiencia  } = req.body;\n        if (!nome || !telefone || !email || possui_carro === undefined || experiencia === undefined) {\n            return res.status(400).json({\n                error: \"Todos os campos s\\xe3o obrigat\\xf3rios.\"\n            });\n        }\n        try {\n            // Verificando se o telefone já existe\n            const [telefoneExistente] = await db.query(\"SELECT * FROM telecomunicacoes WHERE telefone = ?\", [\n                telefone\n            ]);\n            if (telefoneExistente && telefoneExistente.length > 0) {\n                return res.status(400).json({\n                    error: \"Telefone j\\xe1 cadastrado.\"\n                });\n            }\n            // Verificando se o e-mail já existe\n            const [emailExistente] = await db.query(\"SELECT * FROM telecomunicacoes WHERE email = ?\", [\n                email\n            ]);\n            if (emailExistente && emailExistente.length > 0) {\n                return res.status(400).json({\n                    error: \"E-mail j\\xe1 cadastrado.\"\n                });\n            }\n            const [result] = await db.query(`INSERT INTO telecomunicacoes (nome, telefone, email, endereco, possui_carro, experiencia, data_cadastro) \r\n         VALUES (?, ?, ?, ?, ?, ?, NOW())`, [\n                nome,\n                telefone,\n                email,\n                endereco,\n                possui_carro,\n                experiencia\n            ]);\n            res.status(201).json({\n                message: \"Cadastro realizado com sucesso!\",\n                id: result.insertId\n            });\n        } catch (error) {\n            console.error(error);\n            res.status(500).json({\n                error: \"Erro ao cadastrar usu\\xe1rio.\"\n            });\n        }\n    } else {\n        res.status(405).json({\n            error: \"M\\xe9todo n\\xe3o permitido.\"\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvY2FkYXN0cm9UZWxlY29tdW5pY2Fjb2VzLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQSxNQUFNQSxFQUFFLEdBQUdDLG1CQUFPLENBQUMsK0JBQVUsQ0FBQztBQUVmLGVBQWVDLE9BQU8sQ0FBQ0MsR0FBRyxFQUFFQyxHQUFHLEVBQUU7SUFDNUMsSUFBSUQsR0FBRyxDQUFDRSxNQUFNLEtBQUssTUFBTSxFQUFFO1FBQ3ZCLE1BQU0sRUFBRUMsSUFBSSxHQUFFQyxRQUFRLEdBQUVDLEtBQUssR0FBRUMsUUFBUSxHQUFFQyxZQUFZLEdBQUVDLFdBQVcsR0FBRSxHQUFHUixHQUFHLENBQUNTLElBQUk7UUFFL0UsSUFBSSxDQUFDTixJQUFJLElBQUksQ0FBQ0MsUUFBUSxJQUFJLENBQUNDLEtBQUssSUFBSUUsWUFBWSxLQUFLRyxTQUFTLElBQUlGLFdBQVcsS0FBS0UsU0FBUyxFQUFFO1lBQ3pGLE9BQU9ULEdBQUcsQ0FBQ1UsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUM7Z0JBQUVDLEtBQUssRUFBRSx5Q0FBbUM7YUFBRSxDQUFDLENBQUM7UUFDaEYsQ0FBQztRQUVELElBQUk7WUFDQSxzQ0FBc0M7WUFDdEMsTUFBTSxDQUFDQyxpQkFBaUIsQ0FBQyxHQUFHLE1BQU1qQixFQUFFLENBQUNrQixLQUFLLENBQ3RDLG1EQUFtRCxFQUNuRDtnQkFBQ1gsUUFBUTthQUFDLENBQ2I7WUFFRCxJQUFJVSxpQkFBaUIsSUFBSUEsaUJBQWlCLENBQUNFLE1BQU0sR0FBRyxDQUFDLEVBQUU7Z0JBQ25ELE9BQU9mLEdBQUcsQ0FBQ1UsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUM7b0JBQUVDLEtBQUssRUFBRSw0QkFBeUI7aUJBQUUsQ0FBQyxDQUFDO1lBQ3RFLENBQUM7WUFFRCxvQ0FBb0M7WUFDcEMsTUFBTSxDQUFDSSxjQUFjLENBQUMsR0FBRyxNQUFNcEIsRUFBRSxDQUFDa0IsS0FBSyxDQUNuQyxnREFBZ0QsRUFDaEQ7Z0JBQUNWLEtBQUs7YUFBQyxDQUNWO1lBRUQsSUFBSVksY0FBYyxJQUFJQSxjQUFjLENBQUNELE1BQU0sR0FBRyxDQUFDLEVBQUU7Z0JBQzdDLE9BQU9mLEdBQUcsQ0FBQ1UsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUM7b0JBQUVDLEtBQUssRUFBRSwwQkFBdUI7aUJBQUUsQ0FBQyxDQUFDO1lBQ3BFLENBQUM7WUFFRCxNQUFNLENBQUNLLE1BQU0sQ0FBQyxHQUFHLE1BQU1yQixFQUFFLENBQUNrQixLQUFLLENBQzNCLENBQUM7Z0JBRUFaLElBQUk7Z0JBQUVDO2dCQUFVQyxLQUFLO2dCQUFFQztnQkFBVUM7Z0JBQWNDLFdBQVc7YUFBQyxDQUMvRDtZQUVEUCxHQUFHO2dCQUFvQmtCLE9BQU8sRUFBRTtnQkFBbUNDLEVBQUUsRUFBRUYsTUFBTSxDQUFDRyxRQUFRO2FBQUUsQ0FBQyxDQUFDO1FBQzlGLEVBQUU7WUFDRUMsT0FBTyxDQUFDVCxLQUFLO1lBQ2JaLEdBQUcsQ0FBQ1UsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUM7Z0JBQUVDLEtBQUssRUFBRTthQUE4QixDQUFDLENBQUM7UUFDbEUsQ0FBQztJQUNMO1FBQ0laLEdBQUcsQ0FBQ1U7WUFBbUJFLEtBQUssRUFBRTtTQUF5QixDQUFDLENBQUM7SUFDN0QsQ0FBQztBQUNMLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly96b29tNHplbi8uL3BhZ2VzL2FwaS9jYWRhc3Ryb1RlbGVjb211bmljYWNvZXMuanM/ZTUyMSJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBkYiA9IHJlcXVpcmUoJy4uLy4uL2RiJyk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKSB7XHJcbiAgICBpZiAocmVxLm1ldGhvZCA9PT0gJ1BPU1QnKSB7XHJcbiAgICAgICAgY29uc3QgeyBub21lLCB0ZWxlZm9uZSwgZW1haWwsIGVuZGVyZWNvLCBwb3NzdWlfY2Fycm8sIGV4cGVyaWVuY2lhIH0gPSByZXEuYm9keTtcclxuXHJcbiAgICAgICAgaWYgKCFub21lIHx8ICF0ZWxlZm9uZSB8fCAhZW1haWwgfHwgcG9zc3VpX2NhcnJvID09PSB1bmRlZmluZWQgfHwgZXhwZXJpZW5jaWEgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDApLmpzb24oeyBlcnJvcjogJ1RvZG9zIG9zIGNhbXBvcyBzw6NvIG9icmlnYXTDs3Jpb3MuJyB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIC8vIFZlcmlmaWNhbmRvIHNlIG8gdGVsZWZvbmUgasOhIGV4aXN0ZVxyXG4gICAgICAgICAgICBjb25zdCBbdGVsZWZvbmVFeGlzdGVudGVdID0gYXdhaXQgZGIucXVlcnkoXHJcbiAgICAgICAgICAgICAgICAnU0VMRUNUICogRlJPTSB0ZWxlY29tdW5pY2Fjb2VzIFdIRVJFIHRlbGVmb25lID0gPycsXHJcbiAgICAgICAgICAgICAgICBbdGVsZWZvbmVdXHJcbiAgICAgICAgICAgICk7XHJcblxyXG4gICAgICAgICAgICBpZiAodGVsZWZvbmVFeGlzdGVudGUgJiYgdGVsZWZvbmVFeGlzdGVudGUubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAwKS5qc29uKHsgZXJyb3I6ICdUZWxlZm9uZSBqw6EgY2FkYXN0cmFkby4nIH0pO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyBWZXJpZmljYW5kbyBzZSBvIGUtbWFpbCBqw6EgZXhpc3RlXHJcbiAgICAgICAgICAgIGNvbnN0IFtlbWFpbEV4aXN0ZW50ZV0gPSBhd2FpdCBkYi5xdWVyeShcclxuICAgICAgICAgICAgICAgICdTRUxFQ1QgKiBGUk9NIHRlbGVjb211bmljYWNvZXMgV0hFUkUgZW1haWwgPSA/JyxcclxuICAgICAgICAgICAgICAgIFtlbWFpbF1cclxuICAgICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChlbWFpbEV4aXN0ZW50ZSAmJiBlbWFpbEV4aXN0ZW50ZS5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDApLmpzb24oeyBlcnJvcjogJ0UtbWFpbCBqw6EgY2FkYXN0cmFkby4nIH0pO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBjb25zdCBbcmVzdWx0XSA9IGF3YWl0IGRiLnF1ZXJ5KFxyXG4gICAgICAgICAgICAgICAgYElOU0VSVCBJTlRPIHRlbGVjb211bmljYWNvZXMgKG5vbWUsIHRlbGVmb25lLCBlbWFpbCwgZW5kZXJlY28sIHBvc3N1aV9jYXJybywgZXhwZXJpZW5jaWEsIGRhdGFfY2FkYXN0cm8pIFxyXG4gICAgICAgICBWQUxVRVMgKD8sID8sID8sID8sID8sID8sIE5PVygpKWAsXHJcbiAgICAgICAgICAgICAgICBbbm9tZSwgdGVsZWZvbmUsIGVtYWlsLCBlbmRlcmVjbywgcG9zc3VpX2NhcnJvLCBleHBlcmllbmNpYV1cclxuICAgICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgICAgIHJlcy5zdGF0dXMoMjAxKS5qc29uKHsgbWVzc2FnZTogJ0NhZGFzdHJvIHJlYWxpemFkbyBjb20gc3VjZXNzbyEnLCBpZDogcmVzdWx0Lmluc2VydElkIH0pO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xyXG4gICAgICAgICAgICByZXMuc3RhdHVzKDUwMCkuanNvbih7IGVycm9yOiAnRXJybyBhbyBjYWRhc3RyYXIgdXN1w6FyaW8uJyB9KTtcclxuICAgICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJlcy5zdGF0dXMoNDA1KS5qc29uKHsgZXJyb3I6ICdNw6l0b2RvIG7Do28gcGVybWl0aWRvLicgfSk7XHJcbiAgICB9XHJcbn1cclxuIl0sIm5hbWVzIjpbImRiIiwicmVxdWlyZSIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJtZXRob2QiLCJub21lIiwidGVsZWZvbmUiLCJlbWFpbCIsImVuZGVyZWNvIiwicG9zc3VpX2NhcnJvIiwiZXhwZXJpZW5jaWEiLCJib2R5IiwidW5kZWZpbmVkIiwic3RhdHVzIiwianNvbiIsImVycm9yIiwidGVsZWZvbmVFeGlzdGVudGUiLCJxdWVyeSIsImxlbmd0aCIsImVtYWlsRXhpc3RlbnRlIiwicmVzdWx0IiwibWVzc2FnZSIsImlkIiwiaW5zZXJ0SWQiLCJjb25zb2xlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/cadastroTelecomunicacoes.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/cadastroTelecomunicacoes.js"));
module.exports = __webpack_exports__;

})();