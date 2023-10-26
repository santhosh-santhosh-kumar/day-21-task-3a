function show(){
    var input=document.getElementById('input')
    var n=input.value
   // console.log(n)
    show1(n)
}
    function show1(city){
        let res=fetch('https://api.openweathermap.org/data/2.5/weather?q='+city+'&appid=1e327aa2b6353a855baa06be0be817d4&units=metric')
        res.then((data)=>data.json()).then((data1)=>{
           console.log(data1)
            console.log(data1.main.temp)
            console.log(data1.wind.speed)

           console.log(city)
           if(data1.main.temp>60){
            var t=data1.main.temp+'c'+'🌤🌤🌤'
           }else{
            var t=data1.main.temp+'⛈⛈⛈'
            
           }
            alert(`${city}
Temprature = ${t}
Wind speed = ${data1.wind.speed}km/h`)
var input=document.getElementById('input')
 input.value='';
        }).catch((error)=>{
            alert('city not found')
        })
    }
