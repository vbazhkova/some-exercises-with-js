// task 1
function filter(array, filterFn, inplace = false) {
    if (inplace) {
        let i = 0;
        while (i < array.length) {
            if (!filterFn(array[i])) {
                array.splice(i, 1);
            } else {
                i++;
            }
        }
      return array;
    } else {
        const result = [];
        for (let i = 0; i < array.length; i++) {
            if (filterFn(array[i])) {
            result.push(array[i]);
            }
        }
        return result;
    }
}

// task 2
function getTypeCounts(obj) {
    const result = {};
    for (const key in obj) {
        const type = typeof obj[key];
        if (result[type]) {
            result[type]++;
        } else {
            result[type] = 1;
        }
    }
    return result;
}

// task 3
function sum(a, b) {
    if (typeof a !== 'number') {
        throw new Error('The left operand is not number');
    }
    if (typeof b !== 'number') {
        throw new Error('The right operand is not number');
    }
    if (isNaN(a) || isNaN(b)) {
        throw new Error('Operands are not numbers');
    }
    return a + b;
}

// task 4
function getMinimalCVS(array) {
    const versions = [array.slice()];
  
    function head() {
        return versions[versions.length - 1].slice();
    }
  
    function history() {
        return versions.map((version) => version.slice());
    }
  
    function push(element) {
        const newVersion = versions[versions.length - 1].concat(element);
        versions.push(newVersion);
    }
  
    function pop() {
        const lastVersion = versions[versions.length - 1].slice();
        const lastElement = lastVersion.pop();
        const newVersion = lastVersion.slice();
        versions.push(newVersion);
        return lastElement;
    }
  
    return { head, history, push, pop };
}

// task 5
function globalToggle(className) {
    const elements = document.querySelectorAll(`.${className}`);
    if (elements.length === 0) {
        return;
    }
    const isDefault = elements[0].classList.contains(className);
    const newClass = isDefault ? `${className}_active` : className;
    elements.forEach((element) => {
        element.classList.remove(className, `${className}_active`);
        element.classList.add(newClass);
    });
}

// task 6
function hitOrRun(a, b) {
    const randomNumber = Math.floor(Math.random() * (b - a + 1)) + a;
    if (randomNumber < 2) {
        return "hit";
    }
    for (let i = 2; i <= Math.sqrt(randomNumber); i++) {
        if (randomNumber % i === 0) {
            return "hit";
        }
    }
    return "run";
}

// task 7
function snakeToCamel(str) {
    return str.replace(/_([a-z])/g, (match, letter) => letter.toUpperCase());
}

// task 8
function isSpam(text, keywords) {
    for (let i = 0; i < keywords.length; i++) {
        if (text.includes(keywords[i])) {
            return true;
        }
    }
    return false;
}

// task 9
function theWorld(ms) {
    const start = Date.now();
    console.log('Time will continue running in ' + (ms / 1000) + ' seconds');
    while (Date.now() - start < 1000) {}
    let newMs = ms
    if (newMs > 0) {
        newMs = newMs - 1000
        if (newMs > 0) {
            theWorld(newMs)
        }
    }
}

// task 10
function solutionFn(num) {
    while (num > 9) {
      num = num.toString().split('').reduce((acc, digit) => acc * digit, 1);
    }
    return num;
}