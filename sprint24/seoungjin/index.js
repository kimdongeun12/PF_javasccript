 const d_day_message = document.querySelector("#d-day-message");
 const d_day_container = document.querySelector("#d_day_container");
 const intervalIdArr = [];
  d_day_container.style.display='none';
 d_day_message.innerHTML = '<h3>D-Day를 입력해 주세요.</h3>';
 const savedDate = localStorage.getItem('saved_date');

 

function userDate() {
    let input_year = document.getElementById("input_year").value;
    let input_month = document.getElementById("input_month").value;
    let input_date = document.getElementById("input_date").value;

   let inputDate = `${input_year}-${input_month}-${input_date}`;
   return inputDate;
}

function remain(data) {
    if(data !== savedDate) {
        localStorage.setItem('saved_date',data);
    }
    nowDate = new Date();
    newDate = new Date(data).setHours(0,0,0,0);
    remaining = (newDate - nowDate) / 1000;

    if(remaining <= 0) {
        d_day_message.innerHTML = '<h3>타이머가 종료되었습니다.</h3>';
        d_day_container.style.display='none';
        d_day_message.style.display = 'flex';
        setClearInterval();
        return;
    }else if (isNaN(remaining)) {
        d_day_message.innerHTML = '<h3>유효한 시간대가 아닙니다.</h3>';
        d_day_container.style.display='none';
        d_day_message.style.display = 'flex';
        setClearInterval();
        return;
    }else{
        
    }

    // let remainingDate = Math.floor(remaining / 3600 /24);
    // let remainingHour = Math.floor(remaining / 3600) % 24;
    // let remainingMin = Math.floor(remaining / 60) % 60;
    // let remainingSec = Math.floor(remaining ) % 60;

    // const days = document.querySelector("#days");
    // const hours = document.querySelector("#hours");
    // const min = document.querySelector("#min");
    // const sec = document.querySelector("#sec");

    const remainingObj = {
        remainingDate : Math.floor(remaining / 3600 /24),
        remainingHour : Math.floor(remaining / 3600) % 24,
        remainingMin : Math.floor(remaining / 60) % 60,
        remainingSec : Math.floor(remaining ) % 60
    };

    const documentObj = {
        days : document.querySelector("#days"),
        hours : document.querySelector("#hours"),
        min : document.querySelector("#min"),
        sec : document.querySelector("#sec")
    };

    const documentArr = ['days', 'hours', 'min', 'sec']
    const timeKeys = Object.keys(remainingObj);

    // for(let i = 0;i < timeKeys.length; i++) {
    //   documentObj[docKeys[i]].textContent = remainingObj[timeKeys[i]];
    // }

    const format =function(time) {
        if(time < 10) {
            return '0' + time;
        }else {
            return time;
        }
    }


    let i = 0;
    for(let tag of documentArr) {
       const remainingTime = format(remainingObj[timeKeys[i]]);
       document.getElementById(tag).textContent = remainingTime;
       i++
    }

    // let i = 0;
    // for(let key in documentObj) {
    //     documentObj[key].textContent = remainingObj[timeKeys[i]]
    //     i++
    // }

    // documentObj['days'].textContent = remainingObj.remainingDate;
    // documentObj['hours'].textContent = remainingObj.remainingHour;
    // documentObj['min'].textContent = remainingObj.remainingMin;
    // documentObj['sec'].textContent = remainingObj.remainingSec;

}

const starter = function(userInput) {
    if(!userInput) {
        userInput = userDate();
    }
    
    d_day_container.style.display='flex';
    d_day_message.style.display = 'none';
    setClearInterval();
    remain(userInput);
    const intervalId =  setInterval(() =>remain(userInput), 1000);
    intervalIdArr.push(intervalId)
}

const setClearInterval = function() {
    for(let i = 0;i<intervalIdArr.length;i++) {
        clearInterval(intervalIdArr[i]);
    }
}

const resetTimer = function() {
    localStorage.removeItem('saved_date');
    d_day_container.style.display='none';
    d_day_message.style.display = 'flex';
    d_day_message.innerHTML = '<h3>D-Day를 입력해 주세요.</h3>';
    setClearInterval();
}

if(savedDate) {
    starter(savedDate);
 }else{
    d_day_container.style.display='none';
    d_day_message.innerHTML = '<h3>D-Day를 입력해 주세요.</h3>';

 }