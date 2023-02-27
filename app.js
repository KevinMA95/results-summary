"use strict";

const reactionTxt = document.querySelector(".red-txt");
const reactionNum = document.querySelector(".red-num");
const reactionImg = document.querySelector(".reaction-img");
const memoryTxt = document.querySelector(".yellow-txt");
const memoryNum = document.querySelector(".yellow-num");
const memoryImg = document.querySelector(".memory-img");
const verbalTxt = document.querySelector(".green-txt");
const verbalNum = document.querySelector(".green-num");
const verbalImg = document.querySelector(".verbal-img");
const visualTxt = document.querySelector(".blue-txt");
const visualNum = document.querySelector(".blue-num");
const visualImg = document.querySelector(".visual-img");


const getData = async()=>{
    let data = await fetch("./data.json")
                .then(res => res.json())
    const postData = (index, imgEl, txtEl, numEl)=>{
        txtEl.textContent = data[index].category;
        numEl.textContent = data[index].score;
        imgEl.src = data[index].icon;
    }
    postData(0, reactionImg, reactionTxt, reactionNum);
    postData(1, memoryImg, memoryTxt, memoryNum);
    postData(2, verbalImg,  verbalTxt, verbalNum);
    postData(3, visualImg, visualTxt, visualNum);   
}

getData();
