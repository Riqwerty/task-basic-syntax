export function romanToInteger(str) {
    const RomanToArabicMeanings = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000,
    };
    let result = 0;
    /*
    Напишите код, преобразующий число из римской записи в арабскую.
    На вход вы получите строку, ответом должно быть число.
     */
    let AfterMeanings = RomanToArabicMeanings[str[0]];
    for (let NumberRomans of str) {
        let BeforeMeanings = RomanToArabicMeanings[NumberRomans];
        result += BeforeMeanings;
        if (AfterMeanings < BeforeMeanings) {
            result -= AfterMeanings * 2;
        }
        AfterMeanings = BeforeMeanings;
    }
    return result;
}
