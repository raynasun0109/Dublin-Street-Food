$(document).ready(function () {
    $('#quiz').hide();
});

let placeToGo = '';

function showQuiz() {
    $('#quiz').show();
}

function hideQuiz() {
    $('#quiz').hide();
    $('#quizResponse').hide();
} 

document.addEventListener('submit', function(event){

    event.preventDefault();

        var q1Val = $("input[name='q1']:checked").val();
        var q2Val = $("input[name='q2']:checked").val();
        var q3Val = $("input[name='q3']:checked").val();
        var q4Val = $("input[name='q4']:checked").val();
        var q5Val = $("input[name='q5']:checked").val();
        var q6Val = $("input[name='q6']:checked").val();
        var q7Val = $("input[name='q7']:checked").val();
        var q8Val = $("input[name='q8']:checked").val();
        var q9Val = $("input[name='q9']:checked").val();
        var q10Val = $("input[name='q10']:checked").val();
        var q11Val = $("input[name='q11']:checked").val();
        var q12Val = $("input[name='q12']:checked").val();
        var q13Val = $("input[name='q13']:checked").val();

    
        var answerArray = [q1Val,q2Val,q3Val,q4Val,q5Val,q6Val,q7Val,q8Val,q9Val,q10Val,q11Val,q12Val,q13Val];

        // The restaurants counter
        var restaurants = {
            chezMax: 0,
            commonsCafe: 0,
            carluccios: 0,
            tapasDeLola: 0,
            maneki: 0,
            bewley: 0,
            thePigsEar: 0,
            jwSweetMan: 0,
            theWindingStairs: 0,
            urbanBrewing:0,
            oldStoreHouse: 0,
            sole: 0,
            salamanca: 0,
            hangDai:0,
            thaiOrchidDublin:0,
            pickle:0,
            mosaTea:0,
            krewe:0,
            wigwam: 0,
            brotherHubbard: 0
        }
    
        for (let i in answerArray){
            switch (answerArray[i]) {
                case "o1":
                    restaurants.chezMax++;
                    restaurants.tapasDeLola++;
                    restaurants.maneki++;
                    restaurants.urbanBrewing++;
                    restaurants.hangDai++;
                    restaurants.wigwam++;
                    restaurants.commonsCafe--;
                    restaurants.carluccios--;
                    restaurants.thePigsEar--;
                    restaurants.salamanca--;
                    restaurants.thaiOrchidDublin--;
                    restaurants.mosaTea--;
                    restaurants.brotherHubbard--;
                    break;
                case "o2":
                    restaurants.commonsCafe++;
                    restaurants.carluccios++;
                    restaurants.thePigsEar++;
                    restaurants.salamanca++;
                    restaurants.thaiOrchidDublin++;
                    restaurants.mosaTea++;
                    restaurants.brotherHubbard++;
                    restaurants.chezMax--;
                    restaurants.tapasDeLola--;
                    restaurants.maneki--;
                    restaurants.urbanBrewing--;
                    restaurants.hangDai--;
                    restaurants.wigwam--;
                    break;
                case "o4":
                    restaurants.chezMax++;
                    restaurants.theWindingStairs++;
                    restaurants.urbanBrewing++;
                    restaurants.oldStoreHouse++;
                    break;
                case "o5":
                    restaurants.chezMax--;
                    restaurants.theWindingStairs--;
                    restaurants.urbanBrewing--;
                    restaurants.oldStoreHouse--;
                    break;
                case "o7":
                    restaurants.chezMax++;
                    restaurants.commonsCafe++;
                    restaurants.carluccios++;
                    restaurants.bewley++;
                    restaurants.thePigsEar++;
                    restaurants.jwSweetMan++;
                    restaurants.theWindingStairs++;
                    restaurants.urbanBrewing++;
                    restaurants.oldStoreHouse++;
                    restaurants.sole++;
                    restaurants.krewe++;
                    restaurants.wigwam++;
                    restaurants.brotherHubbard++;

                    restaurants.tapasDeLola--;
                    restaurants.maneki--;
                    restaurants.salamanca--;
                    restaurants.hangDai--;
                    restaurants.thaiOrchidDublin--;
                    restaurants.pickle--;
                    restaurants.mosaTea--;
                    break;
                case "o8":
                    restaurants.tapasDeLola++;
                    restaurants.maneki++;
                    restaurants.salamanca++;
                    restaurants.hangDai++;
                    restaurants.thaiOrchidDublin++;
                    restaurants.pickle++;
                    restaurants.mosaTea++;

                    restaurants.chezMax--;
                    restaurants.commonsCafe--;
                    restaurants.carluccios--;
                    restaurants.bewley--;
                    restaurants.thePigsEar--;
                    restaurants.jwSweetMan--;
                    restaurants.theWindingStairs--;
                    restaurants.urbanBrewing--;
                    restaurants.oldStoreHouse--;
                    restaurants.sole--;
                    restaurants.krewe--;
                    restaurants.wigwam--;
                    restaurants.brotherHubbard--;
                    break;
                case "o10":
                    restaurants.chezMax++;
                    restaurants.carluccios++;
                    restaurants.maneki++;
                    restaurants.bewley++;
                    restaurants.sole++;
                    restaurants.krewe++;
                    break;
                case "o11":
                    restaurants.commonsCafe++;
                    restaurants.tapasDeLola++;
                    restaurants.thePigsEar++;
                    restaurants.jwSweetMan++;
                    restaurants.theWindingStairs++;
                    restaurants.oldStoreHouse++;
                    restaurants.salamanca++;
                    restaurants.hangDai++;
                    restaurants.thaiOrchidDublin++;
                    restaurants.pickle++;
                    restaurants.brotherHubbard++;
                    break;
                case "o13":
                    restaurants.commonsCafe++;
                    restaurants.chezMax++;
                    restaurants.bewley++;
                    restaurants.thePigsEar++;
                    restaurants.jwSweetMan++;
                    restaurants.salamanca++;
                    restaurants.thaiOrchidDublin++;
                    restaurants.mosaTea++;
                    restaurants.brotherHubbard++;
                    break;
                case "o14":
                    restaurants.wigwam++;
                    restaurants.krewe++;
                    restaurants.pickle++;
                    restaurants.hangDai++;
                    restaurants.sole++;
                    restaurants.oldStoreHouse++;
                    restaurants.urbanBrewing++;
                    restaurants.theWindingStairs++;
                    restaurants.tapasDeLola++;
                    break;
                case "o16":
                    restaurants.chezMax++;
                    restaurants.tapasDeLola++;
                    restaurants.maneki++;
                    restaurants.thePigsEar++;
                    restaurants.jwSweetMan++;
                    restaurants.urbanBrewing++;
                    restaurants.oldStoreHouse++;
                    restaurants.sole++;
                    restaurants.hangDai++;
                    restaurants.pickle++;
                    restaurants.krewe++;
                    restaurants.wigwam++;
                    break;
                case "o17":
                    restaurants.commonsCafe++;
                    restaurants.carluccios++;
                    restaurants.bewley++;
                    restaurants.theWindingStairs++;
                    restaurants.salamanca++;
                    restaurants.thaiOrchidDublin++;
                    restaurants.mosaTea++;
                    restaurants.brotherHubbard++;
                    break;
                case "o19":
                    restaurants.commonsCafe++;
                    restaurants.bewley++;
                    restaurants.theWindingStairs++;
                    restaurants.mosaTea++;
                    restaurants.brotherHubbard++;
                    break;
                case "o20":
                    restaurants.wigwam++;
                    restaurants.hangDai++;
                    restaurants.maneki++;
                    break;
                case "o21":
                    restaurants.chezMax++;
                    restaurants.carluccios++;
                    restaurants.tapasDeLola++;
                    restaurants.thePigsEar++;
                    restaurants.jwSweetMan++;
                    restaurants.urbanBrewing++;
                    restaurants.oldStoreHouse++;
                    restaurants.sole++;
                    restaurants.salamanca++;
                    restaurants.thaiOrchidDublin++;
                    restaurants.pickle++;
                    restaurants.krewe++;
                    break;

                case "o22":
                    restaurants.mosaTea--;
                    restaurants.commonsCafe--;
                    restaurants.bewley--;
                    restaurants.brotherHubbard--;
                    restaurants.theWindingStairs--;
                    break;
                case "o23":
                    restaurants.mosaTea--;
                    restaurants.commonsCafe--;
                    restaurants.bewley--;
                    restaurants.brotherHubbard--;
                    restaurants.theWindingStairs--;
                    break;
                case "o24":
                    restaurants.bewley++;
                    break;
                case "o25":
                    restaurants.mosaTea--;
                    restaurants.commonsCafe--;
                    restaurants.bewley--;
                    restaurants.brotherHubbard--;
                    restaurants.theWindingStairs--;
                    break;
                case "o26":
                    restaurants.maneki++;
                    restaurants.hangDai++;
                    restaurants.thaiOrchidDublin++;
                    restaurants.pickle++;
                    restaurants.mosaTea++;
                    break;
                case "o27":
                    restaurants.chezMax++;
                    restaurants.commonsCafe++;
                    restaurants.carluccios++;
                    restaurants.bewley++;
                    restaurants.thePigsEar++;
                    restaurants.jwSweetMan++;
                    restaurants.theWindingStairs++;
                    restaurants.urbanBrewing++;
                    restaurants.oldStoreHouse++;
                    restaurants.sole++;
                    restaurants.salamanca++;
                    restaurants.brotherHubbard++;
                    break;
                case "o28":
                    restaurants.krewe++;
                    restaurants.tapasDeLola++;
                    break;
                
                case "o29":
                    restaurants.maneki++;
                    restaurants.hangDai++;
                    restaurants.thaiOrchidDublin++;
                    restaurants.pickle++;
                    restaurants.mosaTea++;
                    restaurants.chezMax++;
                    restaurants.carluccios++;
                    restaurants.salamanca++;
                    break;
                
                case "o30":
                    restaurants.commonsCafe++;;
                    restaurants.bewley;
                    restaurants.thePigsEar;
                    restaurants.jwSweetMan;
                    restaurants.theWindingStairs++;
                    restaurants.urbanBrewing++;
                    restaurants.oldStoreHouse++;
                    restaurants.brotherHubbard++;
                    break;

            }
        }
    
        function findMax(obj) {
        let keys = Object.keys(obj);
        let max = keys[0];
        for (let i = 1; i<keys.length;i++){
            let k = keys[i];
            if (obj[k] > obj[max]){
                max = k;
            }
        }
        return max;
        } 

        let preference = 'Your preference is ' + findMax(restaurants) + ' food.';

        placeToGo = findMax(restaurants).toLowerCase();

        $(document).ready(function(){
            $('#quiz').hide();

            $('#result').text(preference);

            $('#quizResponse').show();
        });

        let result = $('#result');

        console.log(preference);

        $.ajax({
            url: '/result',
            type: 'POST',
            contentType:'application/json',
            data: JSON.stringify({answer: result.val(preference), preference: findMax(restaurants)}),
            success: function(response){
                console.log(response);
            }
        });
});

console.log(placeToGo);

function updateMap(){

    $('#quizResponse').hide();

    console.log(placeToGo);

    if(placeToGo == 'chezMax'){
        map.addLayer(chezMax);
        map.removeLayer(originalPoint);
        chezMax.openPopup();
    }

    if(placeToGo == 'commonsCafe'){
        map.addLayer(commonsCafe);
        map.removeLayer(originalPoint);
        commonsCafe.openPopup();
    }

    if(placeToGo == 'carluccios'){
        map.addLayer(carluccios);
        map.removeLayer(originalPoint);
        carluccios.openPopup();
    }

    if(placeToGo == 'tapasDeLola'){
        map.addLayer(tapasDeLola);
        map.removeLayer(originalPoint);
        tapasDeLola.openPopup();
    }

    if(placeToGo == 'maneki'){
        map.addLayer(maneki);
        map.removeLayer(originalPoint);
        maneki.openPopup();
    }

    if(placeToGo == 'bewley'){
        map.addLayer(bewley);
        map.removeLayer(originalPoint);
        bewley.openPopup();
    }

    if(placeToGo == 'thePigsEar'){
        map.addLayer(thePigsEar);
        map.removeLayer(originalPoint);
        thePigsEar.openPopup();
    }

    if(placeToGo == 'jwSweetMan'){
        map.addLayer(jwSweetMan);
        map.removeLayer(originalPoint);
        jwSweetMan.openPopup();
    }

    if(placeToGo == 'theWindingStairs'){
        map.addLayer(theWindingStairs);
        map.removeLayer(originalPoint);
        theWindingStairs.openPopup();
    }

    if(placeToGo == 'urbanBrewing'){
        map.addLayer(urbanBrewing);
        map.removeLayer(originalPoint);
        urbanBrewing.openPopup();
    }

    if(placeToGo == 'oldStoreHouse'){
        map.addLayer(oldStoreHouse);
        map.removeLayer(originalPoint);
        oldStoreHouse.openPopup();
    }

    if(placeToGo == 'sole'){
        map.addLayer(sole);
        map.removeLayer(originalPoint);
        sole.openPopup();
    }

    if(placeToGo == 'salamanca'){
        map.addLayer(salamanca);
        map.removeLayer(originalPoint);
        salamanca.openPopup();
    }

    if(placeToGo == 'hangDai'){
        map.addLayer(hangDai);
        map.removeLayer(originalPoint);
        hangDai.openPopup();
    }

    if(placeToGo == 'thaiOrchidDublin'){
        map.addLayer(thaiOrchidDublin);
        map.removeLayer(originalPoint);
        thaiOrchidDublin.openPopup();
    }

    if(placeToGo == 'pickle'){
        map.addLayer(pickle);
        map.removeLayer(originalPoint);
        pickle.openPopup();
    }

    if(placeToGo == 'mosaTea'){
        map.addLayer(mosaTea);
        map.removeLayer(originalPoint);
        mosaTea.openPopup();
    }

    if(placeToGo == 'krewe'){
        map.addLayer(krewe);
        map.removeLayer(originalPoint);
        krewe.openPopup();
    }

    if(placeToGo == 'wigwam'){
        map.addLayer(wigwam);
        map.removeLayer(originalPoint);
        wigwam.openPopup();
    }

    if(placeToGo == 'brotherHubbard'){
        map.addLayer(brotherHubbard);
        map.removeLayer(originalPoint);
        brotherHubbard.openPopup();
    }
}

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

function random(){

    $('#quizResponse').hide();

    removeLayers();

    let randomNum = getRandomInt(20);
    console.log(randomNum);

    if(randomNum == 0){
        map.addLayer(chezMax);
        centerLeafletMapOnMarker(map, chezMax);
    }

    if(randomNum == 1){
        map.addLayer(commonsCafe);
        centerLeafletMapOnMarker(map, commonsCafe);
    }

    if(randomNum == 2){
        map.addLayer(carluccios);
        centerLeafletMapOnMarker(map, carluccios);
    }

    if(randomNum == 3){
        map.addLayer(tapasDeLola);
        centerLeafletMapOnMarker(map, tapasDeLola);
    }

    if(randomNum == 4){
        map.addLayer(maneki);
        centerLeafletMapOnMarker(map, maneki);
    }

    if(randomNum == 5){
        map.addLayer(bewley);
        centerLeafletMapOnMarker(map, bewley);
    }

    if(randomNum == 6){
        map.addLayer(thePigsEar);
        centerLeafletMapOnMarker(map, thePigsEar);
    }

    if(randomNum == 7){
        map.addLayer(jwSweetMan);
        centerLeafletMapOnMarker(map, jwSweetMan);
    }

    if(randomNum == 8){
        map.addLayer(theWindingStairs);
        centerLeafletMapOnMarker(map, theWindingStairs);
    }

    if(randomNum == 9){
        map.addLayer(urbanBrewing);
        centerLeafletMapOnMarker(map, urbanBrewing);
    }

    if(randomNum == 10){
        map.addLayer(oldStoreHouse);
        centerLeafletMapOnMarker(map, oldStoreHouse);
    }

    if(randomNum == 11){
        map.addLayer(sole);
        centerLeafletMapOnMarker(map, sole);
    }

    if(randomNum == 12){
        map.addLayer(salamanca);
        centerLeafletMapOnMarker(map, salamanca);
    }

    if(randomNum == 13){
        map.addLayer(hangDai);
        centerLeafletMapOnMarker(map, hangDai);
    }

    if(randomNum == 14){
        map.addLayer(thaiOrchidDublin);
        centerLeafletMapOnMarker(map, thaiOrchidDublin);
    }

    if(randomNum == 15){
        map.addLayer(pickle);
        centerLeafletMapOnMarker(map, pickle);
    }

    if(randomNum == 16){
        map.addLayer(mosaTea);
        centerLeafletMapOnMarker(map, mosaTea);
    }

    if(randomNum == 17){
        map.addLayer(krewe);
        centerLeafletMapOnMarker(map, krewe);
    }

    if(randomNum == 18){
        map.addLayer(wigwam);
        centerLeafletMapOnMarker(map, wigwam);
    }

    if(randomNum == 19){
        map.addLayer(brotherHubbard);
        centerLeafletMapOnMarker(map, brotherHubbard);
    }

}

function removeLayers(){
    map.removeLayer(originalPoint);
    map.removeLayer(chezMax);
    map.removeLayer(commonsCafe);
    map.removeLayer(carluccios);
    map.removeLayer(tapasDeLola);
    map.removeLayer(maneki);
    map.removeLayer(tapasDeLola);
    map.removeLayer(bewley);
    map.removeLayer(thePigsEar);
    map.removeLayer(jwSweetMan);
    map.removeLayer(theWindingStairs);
    map.removeLayer(urbanBrewing);
    map.removeLayer(oldStoreHouse);
    map.removeLayer(sole);
    map.removeLayer(salamanca);
    map.removeLayer(maneki);
    map.removeLayer(hangDai);
    map.removeLayer(thaiOrchidDublin);
    map.removeLayer(pickle);
    map.removeLayer(mosaTea);
    map.removeLayer(krewe);
    map.removeLayer(wigwam);
    map.removeLayer(brotherHubbard);
}

function centerLeafletMapOnMarker(map, marker) {
    var latLngs = [ marker.getLatLng() ];
    var markerBounds = L.latLngBounds(latLngs);
    map.fitBounds(markerBounds);
}