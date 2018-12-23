//モジュールのロード
const functions = require('firebase-functions');
const express = require('express');
const ejs = require('ejs');
//const request = require('request');
const path = require('path');

//Router #ファイルのロード
var indexRouter = require('./routes/index');

const app = express();

//オブジェクト作成
app.set('views','./views');
app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Router #アクセス処理
app.use('/', indexRouter);


exports.app = functions.https.onRequest(app);