let elForm = document.getElementById('form');
let elInput = document.getElementById('input');
let elText = document.querySelector('.title');
let elHour = [document.getElementById('hour'),
document.getElementById('hour2'),
document.getElementById('hour3'),
document.getElementById('hour4')];
let elTime = [document.getElementById('time'),
document.getElementById('time2'),
document.getElementById('time3'),
document.getElementById('time4')];



let number = elInput.value;
let time = [elHour[0].value, elHour[1].value, elHour[2].value, elHour[3].value];

const calcTime = (distance, speed, wrap) => {

    let result = distance / speed
    wrap.innerText = result.toFixed(2);
}

elForm.addEventListener('submit', function (e) {
    e.preventDefault();

    if (!isNaN(elInput.value) && elInput.value != 'e') {
       // for (let i = 0; i < time.length; i++) {
            calcTime(elInput.value, time[0], elTime[0]);
            calcTime(elInput.value, time[1], elTime[1]);
            calcTime(elInput.value, time[2], elTime[2]);
            calcTime(elInput.value, time[3], elTime[3]);
      //  }
    } else {
        elText.textContent = 'Raqam kiritish talab qilinadi!!!'
    }
})