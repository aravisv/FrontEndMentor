const bar = document.querySelectorAll(".bar")
const spent_per_day = document.querySelectorAll(".spent-seen-on-hover");
let today = new Date()
let Day= today.getDay()
const data =[
    {
    "day": "mon",
    "amount" : 17.45
  },
  {
    "day": "tue",
    "amount": 34.91
  },
  {
    "day": "wed",
    "amount": 52.36
  },
  {
    "day": "thu",
    "amount": 31.07
  },
  {
    "day": "fri",
    "amount": 23.39
  },
  {
    "day": "sat",
    "amount": 43.28
  },
  {
    "day": "sun",
    "amount": 25.48
  }];

// Change column height

for (var i=0;i<7;i++){
    bar[i].style.height = `${Math.floor(data[i].amount*2.5)}px`;
    spent_per_day[i].innerHTML = `${Math.floor(data[i].amount)}$`;
}

// Change color by day of week
 
if (Day===0){
    bar[6].style.backgroundColor = "hsl(186, 34%, 60%)"
} else{
    bar[Day-1].style.backgroundColor= "hsl(186, 34%, 60%)"
}