//npm-библиотека для работы с xls и xlsx
const xlsx = require('xlsx')

//соотношения кириллицы и латиницы отсутствия ошибок
const matchingLetters = {
    'А': 'A',
    'В': 'B',
    'Е': 'E',
    'К': 'K',
    'М': 'M',
    'Н': 'H',
    'О': 'O',
    'Р': 'P',
    'С': 'C',
    'Т': 'T',
    'У': 'Y',
    'Х': "X"
}

//Реализация работы с файлом
module.exports = class FileService {

    //открытие и перевод файла в массив объектов
    constructor() {
        const workbook = xlsx.readFile('../name_js.xlsx')
        this.data = xlsx.utils.sheet_to_json(workbook.Sheets['1'])
    }

    //получение всех значений
    getAll() {
        return [...this.data]
    }

    //поиск значения в списке
    findItem(name) {

        let ru = Object.keys(matchingLetters)
        let en = Object.values(matchingLetters)

        //проходимся по каждому значению
        for (let i = 0; i < this.data.length; i++) {

            //находим сер. номера
            let serial_1 = this.data[i].Name[0] + this.data[i].Name[4] + this.data[i].Name[5]
            let serial_2 = name[0] + name[4] + name[5]

            //находим регис. номера
            let number_1 = this.data[i].Name.slice(1, 4)
            let number_2 = name.slice(1, 4)

            //находим коды региона
            let code_1 = this.data[i].Name.slice(6, this.data[i].Name.length)
            let code_2 = name.slice(6, name.length)

            //если рег. номера и коды региона совпадают
            if (number_1 == number_2 && code_1 == code_2) {

                //если сер. номера совпадают, то возвращаем положиительную метку
                //и индекс значения
                if (serial_1 == serial_2) {
                    return {
                        flag: true,
                        index: i
                    }
                }
                //иначе ищем соотношения в кириллице и латиницк
                else {

                    let flag = false

                    for (let j = 0; j < serial_1.length; j++) {

                        //получаем буквы
                        let letter_1 = serial_1[j]
                        let letter_2 = serial_2[j]

                        //ищем буквы в кириллице
                        let ru_1 = ru.indexOf(letter_1)
                        let ru_2 = ru.indexOf(letter_2)

                        //ищем буквы в латинице
                        let en_1 = en.indexOf(letter_1)
                        let en_2 = en.indexOf(letter_2)

                        // console.log({
                        //     letter_1,
                        //     letter_2,
                        //     ru_1,
                        //     ru_2,
                        //     en_1,
                        //     en_2
                        // })

                        //если буквы совпадают, переходим к следующ. буквам
                        if (letter_1 == letter_2) {
                            flag = true;
                            continue;
                        }
                        //если первая из кириллицы, а вторая из латиницы,
                        //а их соотношения равны
                        else if (ru_1 != -1 && ru_2 == -1 && ru_1 == en_2) {
                            flag = true;
                            continue;
                        }
                        //если вторая из кириллицы, а первая из латиницы,
                        //а их соотношения равны
                        else if (ru_2 != -1 && ru_1 == -1 && ru_2 == en_1) {
                            flag = true;
                            continue;
                        }
                        //если буквы не соотносятся, то выходим
                        else {
                            flag = false
                            break
                        }

                    }

                    if (flag == false) {
                        continue
                    }
                    else {
                        return {
                            flag: true,
                            index: i
                        }
                    }
                }

            }
            else {
                continue
            }
        }
        return {
            flag: false
        }
    }

}