const day = document.getElementById("day");
const month = document.getElementById("month");
const year = document.getElementById("year");

function getData(){
    let oldDay = day.value;
    let oldMonth = month.value;
    let oldYear = year.value;

    let newDate =new Date();
    console.log( (newDate.getDay()-1 ) - oldDay );
    console.log( (newDate.getMonth()+1)- oldMonth);
    console.log( (newDate.getFullYear())- oldYear);

}

