# 初步体验tsconfig.json

##　常规配置

~~~
{
  "compilerOptions": {
    // "incremental": true,
    "target": "es5",          /*目录语言版本*/
    "module": "commonjs",     /*指定生成代码模板标准*/
   "sourceMap": true,         /*生成目录文件的sourceMap文件*/
    "removeComments": true,   /*删除注释*/
    "noImplicitAny": true,   /*不允许隐藏any*/
    "preserveConstEnums": true, // 保留const 或者 enum声明
    "outDir": "./dist"
  },
  "files": [                 // 指定待编译文件
    "./src/index.ts",
    // "./test/a.ts",
    // "./test/b.ts"
  ]
}

~~~