
const request=require('request')
const forcast=(lat,lon,cb)=>{
const url='https://api.darksky.net/forecast/53cd88360485afc9d63b0617f67e7743/'+lat + ','+lon
request({url,json:true},(error,{body})=>{

    if(error){
        cb('Unable to connect',undefined)
    }else if(body.error){
        cb('unable to find location',undefined)
    }else{
        cb(undefined,body.daily.data[0].summary +'  It is currently  '+  body.currently.temperature+ '  degrees out. There is a  '+ body.currently.precipProbability + '% chance of rain')
    }
})
}
module.exports=forcast