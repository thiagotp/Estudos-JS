const { series, parallel } = require('gulp')
const gulp = require('gulp')

const { appHTML, appCSS, appIMGS, appJS } = require('./gulpTasks/app')
const { depsCSS, depsFonts } = require('./gulpTasks/deps')
const { servidor, monitorarArquivos } = require('./gulpTasks/servidor')

module.exports.default = series(
    parallel(
        series(
            appHTML,
            appCSS,
            appJS,
            appIMGS
        ),series(
            depsCSS,
            depsFonts
        )
    ),
    servidor,
    monitorarArquivos
)