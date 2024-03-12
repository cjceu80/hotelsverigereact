import { db } from "./firebase";
import { child, get, ref } from "firebase/database";

//Return all hotells found by query string from request.uri.
export async function getHotels(query){
  //Control if string is viable query string.
  if (query == null || (query.indexOf("?") < 0))
    return null;

  //Split query in separate parts for each search param.
  const queryParams = query.substring(query.indexOf("?")+1).split("&");

  //Parse params to object.
  const queryParamsObject ={};
  queryParams.forEach((param)=> {
    queryParamsObject[param.substring(0, param.indexOf('='))] =  decodeURIComponent(param.substring(param.indexOf('=')+1))
  });
        let hits;
        const dbRef = ref(db);
        await get(child(dbRef, queryParamsObject['l'].toLowerCase())).then((snapshot) => {
            if (snapshot.exists()) {
              hits = snapshot.val();
            } else {
              console.log("No data available");
            }
          }).catch((error) => {
            console.error(error);
          });


  //Filter hotels by params in queryParamsObject. Not filtering by dates due to lack of database of hotels, their rooms and bookings etc.
    return {
    hotels: hits,
    dates: queryParamsObject["d"],
    search: queryParamsObject['l']
};
}

//Return hotel data for hotel by index.
export async function getHotel(id){
    let res;
    const dbRef = ref(db);
        await get(child(dbRef, id)).then((snapshot) => {
            if (snapshot.exists()) {
              res = snapshot.val();
            } else {
              console.log("No data available");
            }
          }).catch((error) => {
            console.error(error);
          });

    return res;
}