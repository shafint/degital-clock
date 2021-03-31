const Show_Time=document.querySelector(".Show_Time");
const month_Show=document.querySelector(".month_Show");
setInterval(()=>{
    let MainDate=new Date();
    let getHours=Number(MainDate.getHours());
    let getminutes=Number(MainDate.getMinutes())
    let getseconds=Number(MainDate.getSeconds());
    var hours;
    var minutes;
    var seconds;
    var AmPm=getHours>=12? "PM":"AM";
    //seconds
    if(getseconds>=10){
        seconds=getseconds
    }else{
        seconds=`0${getseconds}`
    }
    //munites
    if(getminutes>=10){
        minutes=getminutes
    }else{
        minutes=`0${getminutes}`
    }
    //hours
    if(getHours>12){
        hours=`0${getHours-12}`
    }else if(getHours==12){
        hours=getHours;
    }else{
        hours=`0${getHours}`
    }
const TotalsTimes=`${hours}:${minutes}:${seconds} ${AmPm}`;

Show_Time.innerHTML=TotalsTimes;

},1000);

let timesat=new Date();

const date=timesat.getDate();
const monthLength=timesat.getMonth();
const setMonth=[
    "January",
    "February",
    "March",
    "April",
    "May",
    "Jun",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
]
const toalsMonth=setMonth[monthLength];
console.log(toalsMonth);
const gYear=timesat.getFullYear();
month_Show.innerHTML=`${date} ${toalsMonth.substr(0,3)},${gYear}`;