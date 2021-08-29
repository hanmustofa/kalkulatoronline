// query element #result
const resultElement = document.querySelector("#result");

// menghapus angka 0
function removeZero() {
  const value = resultElement.textContent;

  if (value == 0) {
    resultElement.innerHTML = "";
  }
}

// menghapus seluruh element
function allClear() {
  document.querySelector(".allClear").addEventListener("click", (event) => {
    resultElement.innerHTML = 0;
  });
}

// menghapus element value sebelumnya
function clearEntry() {
  document.querySelector(".clearEntry").addEventListener("click", (event) => {
    const resultValue = resultElement.textContent;
    if (resultValue.length > 1) {
      const resultArray = resultElement.textContent.split("");
      resultArray.splice(resultArray.length - 1, 2);
      resultElement.innerHTML = resultArray.join("");
    } else {
      resultElement.innerHTML = 0;
    }
  });
}

// menambah value
function addValue() {
  document.querySelectorAll(".item-value").forEach((item) => {
    item.addEventListener("click", (event) => {
      const value = item.textContent;
      if (value !== 0) {
        removeZero();
      }
      resultElement.innerHTML += value;
    });
  });
}

//  hasil dari operasi aritmatika
function getResultOperation() {
  document.querySelector(".btn-result").addEventListener("click", (event) => {
    removeZero();
    // pengoperasian aritmatika
    const resultEvaluation = eval(resultElement.textContent);
    // parse (merubah) ke number
    const parseResult = Number(resultEvaluation);

    // pengecekan jika ada koma tidaknya
    const pattern = /^[1-9]\d{0,2}(\.?\d{3})*(,\d+)?$/;

    if (!pattern.test(parseResult.toString())) {
      // membuat fix 2 angka di belakang koma
      parseResult.toFixed(2);
    }

    resultElement.innerHTML = parseResult;
  });
}

// pemanggilan function (invocation)
allClear();
clearEntry();
addValue();
getResultOperation();
