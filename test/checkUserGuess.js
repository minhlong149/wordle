const correct = "🟢";
const present = "🟡";
const absent = "🔴";

function isCorrect(letter) {
  return letter == correct;
}

function isPresent(letter) {
  return letter == present;
}

function isAbsent(letter) {
  return letter == absent;
}

function checkUserGuess(userGuess = getUserGuess(), solutionWord = keyword) {
  // Hàm này nhận giá trị đầu vào là 2 chuỗi ký tự
  // và trả về một mảng kết quả so sánh của hai chuỗi đó

  let result = [absent, absent, absent, absent, absent];

  // Kiểm tra điều kiện đúng ký tự đúng vị trí
  for (let i = 0; i < 5; i++) {
    if (userGuess.charAt(i) === solutionWord.charAt(i)) {
      result[i] = correct;
      const cutIndex = i;
      solutionWord = cutLetter(solutionWord, cutIndex);
    }
  }

  // Kiểm tra điều kiện đúng ký tự SAI vị trí
  for (let i = 0; i < 5; i++) {
    if (solutionWord.includes(userGuess.charAt(i)) && !isCorrect(result[i])) {
      result[i] = present;
      const cutIndex = solutionWord.indexOf(userGuess.charAt(i));
      solutionWord = cutLetter(solutionWord, cutIndex);
    }
  }

  return result;
}

function cutLetter(word, index) {
  return word.slice(0, index) + "-" + word.slice(index + 1);
}

module.exports = checkUserGuess;
