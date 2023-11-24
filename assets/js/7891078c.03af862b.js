"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2512],{9720:e=>{e.exports=JSON.parse('{"functions":[{"name":"ser","desc":"","params":[{"name":"x","desc":"","lua_type":"Region3int16"}],"returns":[{"desc":"","lua_type":"string"}],"function_type":"static","source":{"line":2624,"path":"src/init.lua"}},{"name":"des","desc":"","params":[{"name":"y","desc":"","lua_type":"string"}],"returns":[{"desc":"","lua_type":"Region3int16"}],"function_type":"static","source":{"line":2635,"path":"src/init.lua"}},{"name":"serarr","desc":"","params":[{"name":"x","desc":"","lua_type":"{ Region3int16 }"}],"returns":[{"desc":"","lua_type":"string"}],"function_type":"static","tags":["WARNING: Array serialization is unstable due to implementation oversight, use carefully"],"source":{"line":2650,"path":"src/init.lua"}},{"name":"desarr","desc":"","params":[{"name":"y","desc":"","lua_type":"string"}],"returns":[{"desc":"","lua_type":"{ Region3int16 }"}],"function_type":"static","source":{"line":2658,"path":"src/init.lua"}}],"properties":[],"types":[],"name":"Region3int16","desc":"Default bytes is 2, because int16 is 2 bytes. Region3int16 internally uses 2\'s compliment, where for example a value of 64700 is treated as -836. Beware of this when serdes-ing with uint.","source":{"line":2616,"path":"src/init.lua"}}')}}]);