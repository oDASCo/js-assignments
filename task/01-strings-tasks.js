'use strict';

/********************************************************************************************
 *                                                                                          *
 * Перед началом работы с таском, пожалуйста ознакомьтесь с туториалом:                     *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String  *
 *                                                                                          *
 ********************************************************************************************/


/**
 * Возвращает результат конкатенации двух строк
 *
 * @param {string} x
 * @param {string} y
 * @return {string}
 *
 * @example
 *   'aa', 'bb' => 'aabb'
 *   'aa',''    => 'aa'
 *   '',  'bb'  => 'bb'
 */
function concatenateStrings(x, y) {
    return x + y;
}


/**
 * Возвращает длинну строки
 *
 * @param {string} a
 * @return {number}
 *
 * @example
 *   'aaaaa' => 5
 *   'b'     => 1
 *   ''      => 0
 */
function getStringLength(a) {
    let number = a.length;
    return number;
}

/**
 * Возвращает строку образованную на основе шаблона и входных параметров firstName и lastName.
 * Важно! Вместо использования конкатенации, используйте шаблоны :
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/template_strings
 *
 * @param {string} firstName
 * @param {string} lastName
 * @return {string}
 *
 * @example
 *   'John','Doe'      => 'Hello, John Doe!'
 *   'Chuck','Norris'  => 'Hello, Chuck Norris!'
 */
function getStringFromTemplate(firstName, lastName) {
    return 'Hello, ' + firstName + ' ' + lastName + '!';
}

/**
 * Возвращает имя(First_Name) и фамилию(Last_Name) из шаблона 'Hello, First_Name Last_Name!'.
 *
 * @param {string} value
 * @return {string}
 *
 * @example
 *   'Hello, John Doe!' => 'John Doe'
 *   'Hello, Chuck Norris!' => 'Chuck Norris'
 */
function extractNameFromTemplate(value) {
    let arr = value.split("!");
    let str = arr[0].split(" ");
    return `${str[1]} ${str[2]}`;
}


/**
 * Возвращает первый символ полученной строки
 *
 * @param {string} value
 * @return {string}
 *
 * @example
 *   'John Doe'  => 'J'
 *   'cat'       => 'c'
 */
function getFirstChar(value) {
    return value.charAt(0);
}

/**
 * Удаляет крайние левые и правые символы пробела или табуляции из строки.
 *
 * @param {string} value
 * @return {string}
 *
 * @example
 *   '  Abracadabra'    => 'Abracadabra'
 *   'cat'              => 'cat'
 *   '\tHello, World! ' => 'Hello, World!'
 */
function removeLeadingAndTrailingWhitespaces(value) {
    return value.replace(/(^\s*)|(\s*)$/g, '');
}

/**
 * Возвращает заданную строку, повторяющуюся заданное число раз
 *
 * @param {string} value
 * @param {string} count
 * @return {string}
 *
 * @example
 *   'A', 5  => 'AAAAA'
 *   'cat', 3 => 'catcatcat'
 */
function repeatString(value, count) {
    let new_value = "";
    while (count-- > 0) new_value += value;
    return new_value;
}

/**
 * Удаляет первую встретившуюся последовательность симвоов из строки
 *
 * @param {string} str
 * @param {string} value
 * @return {string}
 *
 * @example
 *   'To be or not to be', 'not'  => 'To be or to be'
 *   'I like legends', 'end' => 'I like legs',
 *   'ABABAB','BA' => 'ABAB'
 */
function removeFirstOccurrences(str, value) {
    let val = new RegExp(value);
    return str.replace(val, '');
}

/**
 * Удаляет первую и последнюю угловую скобку в строке (тэге)
 *
 * @param {string} str
 * @return {string}
 *
 * @example
 *   '<div>' => 'div'
 *   '<span>' => 'span'
 *   '<a>' => 'a'
 */
function unbracketTag(str) {
    return str.replace(/^(<)|(>)$/g, '');
}


/**
 * Переводит все символы в строке в верхний регистр
 *
 * @param {string} str
 * @return {string}
 *
 * @example
 *   'Thunderstruck' => 'THUNDERSTRUCK'
 *  'abcdefghijklmnopqrstuvwxyz' => 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
 */
function convertToUpperCase(str) {
    return str.toUpperCase();
}

/**
 * Из строки адресов электронной почты разделенных точкой с запятой, образует массив этих адресов
 *
 * @param {string} str
 * @return {array}
 *
 * @example
 *   'angus.young@gmail.com;brian.johnson@hotmail.com;bon.scott@yahoo.com' => ['angus.young@gmail.com', 'brian.johnson@hotmail.com', 'bon.scott@yahoo.com']
 *   'info@gmail.com' => ['info@gmail.com']
 */
function extractEmails(str) {
    let array = str.split(";");
    return array;
}

/**
 * Возвращает строковое предстваление фигуры с заданной шириной и высотой
 * используя псевдографические символы: '┌', '─', '┐', '│', '└', '┘'.
 *
 * @param {number} width
 * @param {number} height
 * @return {string}
 *
 * @example
 *
 *            '┌────┐\n'+
 *  (6,4) =>  '│    │\n'+
 *            '│    │\n'+
 *            '└────┘\n'
 *
 *  (2,2) =>  '┌┐\n'+
 *            '└┘\n'
 *
 *             '┌──────────┐\n'+
 *  (12,3) =>  '│          │\n'+
 *             '└──────────┘\n'
 *
 */
function getRectangleString(width, height) {
    const angle_1 = '┌';
    const line_1 = '─';
    const angle_2 = '┐';
    const line_2 = '│';
    const angle_3 = '└';
    const angle_4 = '┘';
    const space = " ";

    let line_width = width - 2;

    let repeat_line_1 = "";
    while (line_width-- > 0) repeat_line_1 += line_1;

    let repeat_space = space.repeat(width - 2);

    let top_line = `${angle_1}${repeat_line_1}${angle_2}\n`

    let middle_line = line_2 + repeat_space + line_2 + '\n'
    let bottom_line = `${angle_3}${repeat_line_1}${angle_4}\n`

    let repeat_middle_line = middle_line.repeat(height - 2);


    return top_line + repeat_middle_line + bottom_line;

}


/**
 * Закодировать указанную строку при помощи ROT13 шифрования (*)
 * See details:  https://en.wikipedia.org/wiki/ROT13
 *
 * @param {string} str
 * @return {string}
 *
 * @example
 *
 *   'hello' => 'uryyb'
 *   'Why did the chicken cross the road?' => 'Jul qvq gur puvpxra pebff gur ebnq?'
 *   'Gb trg gb gur bgure fvqr!' => 'To get to the other side!'
 *   'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz' => 'NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm'
 *
 */
function encodeToRot13(str) {
    let input     = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    let output    = 'NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm';
    let index     = x => input.indexOf(x);
    let translate = x => index(x) > -1 ? output[index(x)] : x;
    return str.split('').map(translate).join('');
}

/**
 * Возвращает булевое значение, является ли входной параметр строкой
 * @param {string} value
 * @return {boolean}
 *
 * @example
 *   isString() => false
 *   isString(null) => false
 *   isString([]) => false
 *   isString({}) => false
 *   isString('test') => true
 *   isString(new String('test')) => true
 */
function isString(value) {

    let myStr = String(value);

    if (myStr.indexOf('test')  > -1) {
        return true;
    } else
        return false;

}


/**
 * Возвращает id игровой карты
 *
 * Исходная доска игровых карт представлена следующим порядком строк:
 *
 *  'A♣','2♣','3♣','4♣','5♣','6♣','7♣','8♣','9♣','10♣','J♣','Q♣','K♣',
 *  'A♦','2♦','3♦','4♦','5♦','6♦','7♦','8♦','9♦','10♦','J♦','Q♦','K♦',
 *  'A♥','2♥','3♥','4♥','5♥','6♥','7♥','8♥','9♥','10♥','J♥','Q♥','K♥',
 *  'A♠','2♠','3♠','4♠','5♠','6♠','7♠','8♠','9♠','10♠','J♠','Q♠','K♠'
 *
 * (see https://en.wikipedia.org/wiki/Standard_52-card_deck)
 * Function returns the zero-based index of specified card in the initial deck above.
 *
 * @param {string} value
 * @return {number}
 *
 * @example
 *   'A♣' => 0
 *   '2♣' => 1
 *   '3♣' => 2
 *     ...
 *   'Q♠' => 50
 *   'K♠' => 51
 */
function getCardId(value) {
    let cardArr =  ['A♣', '2♣','3♣','4♣','5♣','6♣','7♣','8♣','9♣','10♣','J♣','Q♣','K♣',
        'A♦','2♦','3♦','4♦','5♦','6♦','7♦','8♦','9♦','10♦','J♦','Q♦','K♦',
 'A♥','2♥','3♥','4♥','5♥','6♥','7♥','8♥','9♥','10♥','J♥','Q♥','K♥',
 'A♠','2♠','3♠','4♠','5♠','6♠','7♠','8♠','9♠','10♠','J♠','Q♠','K♠'];

    return cardArr.indexOf(value);

}


module.exports = {
    concatenateStrings: concatenateStrings,
    getStringLength: getStringLength,
    getStringFromTemplate: getStringFromTemplate,
    extractNameFromTemplate: extractNameFromTemplate,
    getFirstChar: getFirstChar,
    removeLeadingAndTrailingWhitespaces: removeLeadingAndTrailingWhitespaces,
    repeatString: repeatString,
    removeFirstOccurrences: removeFirstOccurrences,
    unbracketTag: unbracketTag,
    convertToUpperCase: convertToUpperCase,
    extractEmails: extractEmails,
    getRectangleString: getRectangleString,
    encodeToRot13: encodeToRot13,
    isString: isString,
    getCardId: getCardId
};
