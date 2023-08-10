
"use strict";
const form = document.querySelector("form");
const inputDay = document.querySelector("#day");
const inputMonth = document.querySelector("#month");
const inputYear = document.querySelector("#year");

const btn = document.querySelector("[data-btn]");


const outDay = document.querySelector("[data-ddd]");
const outMonth = document.querySelector("[data-mmm]");
const outYear = document.querySelector("[data-yyy]");

const date = new Date();
let day = date.getDate();
let month = 1 + date.getMonth();
let year = date.getFullYear();

const DaysMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
const lastDayOfMonth = DaysMonth[month-1];
const validation = () => {

    const inputs = document.querySelectorAll("input");
    let validator = true;
    inputs.forEach((i) =>{
        const parent = i.parentElement;
        if (!i.value){
            i.style.borderColor = "#E67B7C";
            parent.querySelector("small").innerHTML = "This filed is required";            
            parent.querySelector("label").style.color = "#E67B7C";
            validator = false;
        }else if (inputDay.value > 31){

            inputDay.style.borderColor = "#E67B7C";
            inputDay.parentElement.querySelector("small").innerHTML = "Must be a valid day";            
            inputDay.parentElement.querySelector("label").style.color = "#E67B7C";
            validator = false;

        }else if (inputMonth.value > 12) {
            inputMonth.style.borderColor = "#E67B7C";
            inputMonth.parentElement.querySelector("small").innerHTML = "Must be a valid month";            
            inputDay.parentElement.querySelector("label").style.color = "#E67B7C";
            validator = false;
        }else if (inputYear.value > year){
            inputYear.style.borderColor = "#E67B7C";
            inputYear.parentElement.querySelector("small").innerHTML = "Must be in the past";            
            inputYear.parentElement.querySelector("label").style.color = "#E67B7C";
            validator = false;
        }else {
            i.style.borderColor = "black";
            parent.querySelector("small").innerHTML = "";    
            parent.querySelector("label").style.color = "#716f6f";            
        
            validator = true;
        }

    });

    return validator
};

const handleSubmit = (e) => {
    e.preventDefault();
    if (validation()) {
     if (inputDay.value > day){
        day = day + lastDayOfMonth;
        month = month -1
     }
     if (inputMonth.value > month){
        month = month + 12;
        year = year - 1;
     }
     const d = day - inputDay.value;
     const m = month -inputMonth.value;
     const y = year -inputYear.value;

     outDay.innerHTML = d;
     outMonth.innerHTML = m;
     outYear.innerHTML = y;

    }


}


form.addEventListener("submit", handleSubmit);
