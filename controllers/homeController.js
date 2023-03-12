const { parseArgs } = require("util")
const FileService = require("../services/fileService")

exports.index = function (request, response) {

    response.sendFile('index.html', { root: __dirname + '/../views' })
}

exports.getAll = function (request, response) {
    const fileService = new FileService()
    const data = fileService.getAll()
    response.json(data)
}

exports.findItem = function (request, response) {

    let name = request.query.value

    const fileService = new FileService()
    const result = fileService.findItem(name)

    response.json({ ...result })
}