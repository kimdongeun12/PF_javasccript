const messageContainer = document.querySelector('.d-day-message');
const container = document.querySelector('.d-day-container');

container.style.display = 'none';
messageContainer.innerHTML = '<h3>D-day를 입력해 주세요.</h3>';

const newContainer = document.querySelector('.d-day-message');

const dateFormMaker = function () {
    const inputYear = document.querySelector('#target-year-input').value;
    const inputMonth = document.querySelector('#target-month-input').value;
    const inputDate = document.querySelector('#target-date-input').value;

    // const dateFormat = inputYear + '-' + inputMonth + '-' + inputDate;
    const dateFormat = `${inputYear}-${inputMonth}-${inputDate}`;
    return dateFormat;
};

const countMaker = function () {
    const targetDateInput = dateFormMaker();
    const nowDate = new Date();
    const targetDate = new Date(targetDateInput).setHours(0, 0, 0, 0);
    const remaining = (targetDate - nowDate) / 1000;

    if (remaining <= 0) {
        // console.log('타이머가 종료되었습니다.');
        container.style.display = 'none';
        newContainer.innerHTML = `<h3>타이머가 종료되었습니다.</h3>`;
        newContainer.style.display = 'flex';
        return;
    } else if (isNaN(remaining)) {
        // console.log('유효하지 않은 시간대입니다.');
        container.style.display = 'none';
        newContainer.innerHTML = `<h3>유효하지 않은 시간대입니다.</h3>`;
        newContainer.style.display = 'flex';
        return;
    }
    const remainungObj = {
        remainingDate : Math.floor(remaining / 3600 / 24),
        remainingHour : Math.floor(remaining / 3600) % 24,
        remainingMin : Math.floor(remaining / 60) % 60,
        remainingSec : Math.floor(remaining) % 60,
    }

    const documentArr = ['days' , 'hours' , 'min' , 'sec'];
    const timeKeys = Object.keys(remainungObj);
    let i= 0;
    for(let tag of documentArr){
        document.getElementById(tag).textContent = remainungObj[timeKeys[i]];
        i++
    }
};

const starter = function() {
    container.style.display = 'flex';
    messageContainer.style.display = 'none';
    let stop = 0;
    while(stop < 100){
        setTimeout(() => {
            countMaker();
        } , 1000 * stop)
        stop++
    }
};
