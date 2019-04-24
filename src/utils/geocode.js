const request=require('request');
const geoCode=(address,cb)=>{
    const url='https://api.mapbox.com/geocoding/v5/mapbox.places/'+encodeURIComponent(address)+'.json?access_token=pk.eyJ1Ijoic3JpbmF0aGNvcGVuaGFnZW4iLCJhIjoiY2p1c2JqaTBsMDJlejQ0cDJsZjRrYnJ1NiJ9.9cGLlyheRCK8u6lg641DAA&limit=1';
      request({url,json:true},(error,{body})=>{

        if(error){
            cb('unable to connect',undefined)
        }else if(body.features.length===0){
            cb('no matching city',undefined)

        }else{
            cb(undefined,{
                 latitude:body.features[0].center[1],
                  longitude:body.features[0].center[0],
                  location:body.features[0].place_name

            })
        }
      })

}

module.exports=geoCode