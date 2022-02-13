/* Global Variables */

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();


const baseURL = "https://api.openweathermap.org/data/2.5/weather?zip=";
const apiKey = ",&appid=3fe22095ed2075b7bf081e3a93eed7f4&units=metric";



function zipaction(e){
    let zip=document.getElementById('zip').value;
    let feelings =document.getElementById('feelings').value;
    getweather(baseURL,zip,apiKey)
.then(function(data){
    console.log(data);
    postData('/add',{date:d, temp:data.main.temp, content:feelings})
show();
})
};
document.getElementById("generate").addEventListener("click",zipaction);



const getweather = async (baseURL,zip,apiKey)=>{

    const res = await fetch(baseURL+zip+apiKey);
    try{
        const data = await res.json();
        return data;
    }catch(error){
console.log("error",error);
    }
}


const postData=async(url='',data={})=>{
    console.log(data);
    const response = await fetch(url,{
method:'POST',
credentials:'same-origin',
headers:{
    'content-type':'application/json',
},body:JSON.stringify(data)
    });
    try{
        const newData=await response.json();
        console.log(newData);
        return newData;
    }
    catch(error){
        console.log("error",error);
    }
}

const show =async()=>{
    const request =await fetch("/all");
    try{
        const allData=await request.json();
        document.getElementById('date').innerHTML=`Date:${allData.date}`;
        document.getElementById('temp').innerHTML=`Temperature:${allData.temp}`;
        document.getElementById('content').innerHTML=`Feeling:${allData.content}`;
    }
    catch(error){
        console.log("error",error);
    }
}


