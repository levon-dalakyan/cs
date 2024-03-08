const instructions = {
    "SET A": 0,
    "PRINT A": 1,
    "IFN A": 2,
    RET: 3,
    "DEC A": 4,
    JMP: 5,
};

const program = [
    // Ставим значения аккумулятора
    instructions["SET A"],
    // В 10
    10,

    // Выводим значение на экран
    instructions["PRINT A"],

    // Если A равно 0
    instructions["IFN A"],

    // Программа завершается
    instructions["RET"],

    // И возвращает 0
    0,

    // Уменьшаем A на 1
    instructions["DEC A"],

    // Устанавливаем курсор выполняемой инструкции
    instructions["JMP"],

    // В значение 2
    2,
];

execute(program);

function execute(program) {
    let i = 0;
    let a;

    while (true) {
        switch (program[i]) {
            case 0:
                a = program[i + 1];
                i = i + 2;
                break;
            case 1:
                console.log(a);
                i++;
                break;
            case 2:
                if (a === 0) {
                    i++;
                } else {
                    if (
                        program[i + 1] === 1 ||
                        program[i + 1] === 3 ||
                        program[i + 1] === 5
                    ) {
                        i = i + 3;
                    } else {
                        i = i + 2;
                    }
                }
                break;
            case 3:
                return program[i + 1];
            case 4:
                a--;
                i++;
                break;
            case 5:
                i = program[i + 1];
                break;
        }
    }
}
