const fs = require('fs')
const xlsx = require('xlsx')

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

module.exports = class FileService {

    constructor() {
        const workbook = xlsx.readFile('../name_js.xlsx')
        this.data = xlsx.utils.sheet_to_json(workbook.Sheets['1'])
    }

    getAll() {
        return [...this.data]
    }

    findItem(name) {

        let ru = Object.keys(matchingLetters)
        let en = Object.values(matchingLetters)

        for (let i = 0; i < this.data.length; i++) {

            let serial_1 = this.data[i].Name[0] + this.data[i].Name[4] + this.data[i].Name[5]
            let serial_2 = name[0] + name[4] + name[5]

            let number_1 = this.data[i].Name.slice(1, 4)
            let number_2 = name.slice(1, 4)

            let code_1 = this.data[i].Name.slice(6, this.data[i].Name.length)
            let code_2 = name.slice(6, name.length)

            // console.log({
            //     [serial_1]: serial_2,
            //     [number_1]: number_2,
            //     [code_1]: code_2
            // })

            if (number_1 == number_2 && code_1 == code_2) {

                if (serial_1 == serial_2) {
                    return {
                        flag: true,
                        index: i
                    }
                }
                else {

                    let flag = false

                    // console.log(serial_1, serial_2)

                    for (let j = 0; j < serial_1.length; j++) {

                        let letter_1 = serial_1[j]
                        let letter_2 = serial_2[j]

                        let ru_1 = ru.indexOf(letter_1)
                        let ru_2 = ru.indexOf(letter_2)

                        let en_1 = en.indexOf(letter_1)
                        let en_2 = en.indexOf(letter_2)

                        console.log({
                            letter_1,
                            letter_2,
                            ru_1,
                            ru_2,
                            en_1,
                            en_2
                        })

                        if (letter_1 == letter_2) {
                            flag = true;
                            continue;
                        }
                        else if (ru_1 != -1 && ru_2 == -1 && ru_1 == en_2) {
                            flag = true;
                            continue;
                        }
                        else if (ru_2 != -1 && ru_1 == -1 && ru_2 == en_1) {
                            flag = true;
                            continue;
                        }
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

            // if (this.data[i].Name == name) {
            //     return {
            //         flag: true,
            //         index: i
            //     }
            // }
        }
        return {
            flag: false
        }
    }

}