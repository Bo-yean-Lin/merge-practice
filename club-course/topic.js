let topicsArray = [
    "尚未開學",
    "課程簡介",
    "隨機性",
    "隨機性-Lab",
    "重複性",
    "重複性2"
];

let startDate = new Date();

function setMonthAndDay(startMonth, startDay){
    
    startDate.setMonth(startMonth-1,startDay);
    
    startDate.setHours(0);
    startDate.setMinutes(0);
    startDate.setSeconds(0);
}


setMonthAndDay(3,2);