const FileService = require("../services/fileService")

//возвращает страницу
exports.index = function (request, response) {
    response.sendFile('index.html', { root: __dirname + '/../views' })
}

//запрос на получение данных из xlsx-файла
exports.getAll = function (request, response) {
    const fileService = new FileService()
    const data = fileService.getAll()
    response.json(data)
}

//запрос на поиск данных в xlsx-файле
exports.findItem = function (request, response) {

    //параметр, получаемый во время запроса
    let name = request.query.value

    const fileService = new FileService()
    const result = fileService.findItem(name)

    response.json({ ...result })
}