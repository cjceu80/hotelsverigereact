
//Return all hotells found by query string from request.uri.
export function getHotels(query){
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

  //Filter hotels by params in queryParamsObject. Not filtering by dates due to lack of database of hotels, their rooms and bookings etc.
  return {
    hotels: hotel.filter((res) => !queryParamsObject['l'] || res.city.toLocaleLowerCase() == queryParamsObject['l'].toLocaleLowerCase()),
    dates: queryParamsObject["d"],
    search: queryParamsObject['l']
};
}

//Return hotel data for hotel by index.
export function getHotel(id){
    return hotel.find(hotel=>hotel.id==id);
}

const hotel = [
  {
    id: "1",
    name: "Hotell de Luxe",
    city: "Stockholm",
    rating: "4.1",
    distFromCenter: "2",
    features: ["Familjevänligt", "Gratis Wi-Fi", "Restaurang"],
    description: "Vill du träna har du tillgång till ett gym och efteråt kan du varva ned med en drink i en bar/lounge. Hotellet ligger dessutom 4,6 km från Skansen och 4,8 km från Vasamuseet. Den hjälpsamma personalen och läget brukar få höga betyg av våra resenärer. Kollektivtrafik finns i närheten. Det är bara några steg till Mårtensdal spårvagnshållplats och till Luma spårvagnshållplats tar det 6 minuter att gå.",
    restaurant: "Har många rum och Barnmeny med favoriträtter som pasta, pizza och mini-burgare. Anpassade portioner för små ätare. Färgglad och lekfull atmosfär. Restaurang bjuder på möjlighet att betala med betalkort.",
    booking: "Om du önskar att boka rum bredvid varandra, vänligen notera dina önskemål i ditt meddelande till hotellet till höger.",
    roomoptions: [{name: "Dubbelrum", beds: "2", price: "1099"}, {name: "Fyrmannarum", beds: "3", price: "1999"}, {name: "Familjerum", beds: "4", price: "2900"}],
    images: [
    'https://cdn.pixabay.com/photo/2016/12/06/03/09/stockholm-1885472_1280.jpg', 
    'https://cdn.pixabay.com/photo/2020/10/18/09/16/bedroom-5664221_1280.jpg',
    'https://cdn.pixabay.com/photo/2020/03/13/10/36/stairs-4927569_1280.jpg',
    'https://cdn.pixabay.com/photo/2016/09/18/03/28/travel-1677347_1280.jpg',
    'https://cdn.pixabay.com/photo/2016/07/08/23/36/beach-house-1505461_1280.jpg',
    'https://cdn.pixabay.com/photo/2015/01/16/08/54/motel-601218_1280.jpg',
    'https://cdn.pixabay.com/photo/2017/08/09/10/42/hotel-rooms-2614141_1280.jpg',
    'https://cdn.pixabay.com/photo/2016/11/18/22/21/restaurant-1837150_1280.jpg',
  ],
  },
  {
    id: "2",
    name: "Hotell Storm",
    city: "Stockholm",
    rating: "3.6",
    distFromCenter: "8",
    features: ["Familjevänligt", "Gratis Wi-Fi", "Restaurang", "Frukost ingår"],
    description: "Erbjuder boende med balkong, utomhusbadkar och grill, knappt 4 km från Göteborgs centralstation. Gratis WiFi finns i alla utrymmen. Boendet erbjuder också gästparkering. Alla boendeenheter har mikrovågsugn, kylskåp, kaffemaskin, spishäll och vattenkokare. Vissa boendeenheter har en platt-tv med satellitkanaler, ett välutrustat kök med diskmaskin samt eget badrum med duschkabin och hårtork.",
    restaurant: "Med många rum",
    booking: "Om du önskar att boka rum bredvid varandra, vänligen notera dina önskemål i ditt meddelande till hotellet till höger.",
    roomoptions: [{name: "Dubbelrum", beds: "2", price: "799"}, {name: "Fyrmannarum", beds: "3", price: "1590"}, {name: "Familjerum", beds: "4", price: "3490"}],
    images: [
    'https://cdn.pixabay.com/photo/2021/12/11/07/59/hotel-6862159_1280.jpg', 
    'https://cdn.pixabay.com/photo/2017/03/09/06/30/pool-2128578_1280.jpg',
    'https://cdn.pixabay.com/photo/2017/05/31/10/23/manor-house-2359884_1280.jpg',
    'https://cdn.pixabay.com/photo/2020/01/15/18/01/room-4768551_1280.jpg',
    'https://cdn.pixabay.com/photo/2015/09/07/19/12/hotel-928937_1280.jpg',
    'https://cdn.pixabay.com/photo/2016/12/20/21/37/breakfast-hotel-1921530_1280.jpg',
    'https://cdn.pixabay.com/photo/2020/08/27/07/31/restaurant-5521372_1280.jpg',
    
  ],
  },
  {
    id: "3",
    name: "Hotell 3",
    city: "Göteborg",
    rating: "3.8",
    distFromCenter: "8",
    features: ["Familjevänligt", "Gratis Wi-Fi", "Restaurang", "Frukost ingår"],
    description: "Alla boendeenheter har en sittgrupp, en tvättmaskin, ett eget badrum med hårtork och kostnadsfria badprodukter samt utsikt över trädgården. I det fullt utrustade köket finns diskmaskin, ugn, mikrovågsugn, brödrost och kaffemaskin.",
    restaurant: "Gött käk",
    booking: "Om du önskar att boka rum bredvid varandra, vänligen notera dina önskemål i ditt meddelande till hotellet till höger.",
    roomoptions: [{name: "Dubbelrum", beds: "2", price: "999"}, {name: "Fyrmannarum", beds: "3", price: "1329"}, {name: "Familjerum", beds: "4", price: "3890"}],
    images: [
      
    'https://cdn.pixabay.com/photo/2016/09/16/12/53/hotel-1673952_1280.jpg',
    'https://cdn.pixabay.com/photo/2014/12/27/14/37/living-room-581073_1280.jpg',
    'https://cdn.pixabay.com/photo/2014/07/10/17/17/bedroom-389254_1280.jpg',
    'https://cdn.pixabay.com/photo/2020/11/24/11/36/bedroom-5772286_1280.jpg',
    'https://cdn.pixabay.com/photo/2016/03/27/21/34/restaurant-1284351_1280.jpg',
    'https://cdn.pixabay.com/photo/2014/01/22/06/26/swimming-pool-249624_1280.jpg',
    
   ],
  },
  {
    id: "4",
    name: "Hotell Gargamel",
    city: "Malmö",
    rating: "4.4",
    distFromCenter: "2",
    features: ["Gratis Wi-Fi", "Frukost ingår"],
    description: "Apartments Goteborg A-R Lorets Gata ligger i Göteborg, 5 km från köpcentret Nordstan, 6 km från Ullevi och 6 km från Scandinavium. Här erbjuds ett fitnesscenter och en terrass. Här bor du 2,6 km från Slottsskogen och har tillgång till gratis WiFi och privat parkering på plats.",
    restaurant: "Här var det kymight",
    booking: "Om du önskar att boka rum bredvid varandra, vänligen notera dina önskemål i ditt meddelande till hotellet till höger.",
    roomoptions: [{name: "Dubbelrum", beds: "2", price: "699"}, {name: "Fyrmannarum", beds: "3", price: "1523"}, {name: "Familjerum", beds: "4", price: "3829"}],
    images: [
    'https://cdn.pixabay.com/photo/2022/10/23/02/26/hotel-7540353_1280.jpg',
    'https://cdn.pixabay.com/photo/2016/03/02/16/27/bed-1232590_1280.jpg',
    'https://cdn.pixabay.com/photo/2015/01/16/11/19/hotel-601327_1280.jpg',
    'https://cdn.pixabay.com/photo/2016/05/30/05/19/pool-1424291_1280.jpg',
    'https://cdn.pixabay.com/photo/2015/12/12/21/13/restaurant-1090136_1280.jpg',
    'https://cdn.pixabay.com/photo/2014/05/17/18/03/lobby-346426_1280.jpg', 
    ],
  },
  {
    id: "5",
    name: "5:ans Hotell",
    city: "Visby",
    rating: "4.8",
    distFromCenter: "2",
    features: ["Familjevänligt", "Gratis Wi-Fi", "Frukost ingår"],
    description: "Apartments Goteborg A-R Lorets Gata ligger i Göteborg, 5 km från köpcentret Nordstan, 6 km från Ullevi och 6 km från Scandinavium. Här erbjuds ett fitnesscenter och en terrass. Här bor du 2,6 km från Slottsskogen och har tillgång till gratis WiFi och privat parkering på plats.",
    restaurant: "Mat som bara den",
    booking: "Om du önskar att boka rum bredvid varandra, vänligen notera dina önskemål i ditt meddelande till hotellet till höger.",
    roomoptions: [{name: "Dubbelrum", beds: "2", price: "1190"}, {name: "Fyrmannarum", beds: "3", price: "2190"}, {name: "Familjerum", beds: "4", price: "6249"}],
    images: [
    'https://cdn.pixabay.com/photo/2020/05/09/09/13/house-5148865_1280.jpg',
    'https://cdn.pixabay.com/photo/2018/10/28/12/37/bedroom-3778695_1280.jpg',
    'https://cdn.pixabay.com/photo/2017/01/28/19/31/landscape-2016308_1280.jpg',
  
  
  
  
  ],
  }
]