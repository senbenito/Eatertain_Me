$(document).ready(function() {
  console.log('Ready to go!');
  $('select').material_select();
  $(".button-collapse").sideNav({
    menuWidth: 300,
    edge: 'right',
    closeOnClick: true,
    });
  var results = [];
  $('#results').hide();
  $('#searchButton').on('click', function(event) {
    event.preventDefault();
    $('#results').show();
    var query = $('#keyword').val();
    console.log(query);
    var cuisine = $("#cuisine").val() || [];
    console.log(cuisine);

    var $xhr = fillRecipeResults(cuisine);
    function fillRecipeResults(array){
      console.log('Calling Spoonacular API');
      for (var i=0; i<array.length; i++){
        $.ajax({
          url: `https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/searchComplex?addRecipeInformation=true&cuisine=${array[i]}&limitLicense=false&number=3&offset=0&query=${query}&ranking=1&type=main+course`, // The URL to the API. You can get this by clicking on "Show CURL example" from an API profile
          type: 'GET', // The HTTP Method
          data: {}, // Additional parameters here
          datatype: 'json',
          // success: function(data) { alert(JSON.stringify(data)); },
          // error: function(err) { alert(err); },
          beforeSend: function(xhr) {
            xhr.setRequestHeader(); // Enter here your Mashape key
          }
        });//closes $.ajax
      }//closes fillRecipeResults for loop
    }//closes fillRecipeResults function

    $xhr.done(function(data) {
      if ($xhr.status !== 200) {
        return;
      }
      console.log(data);
      fillResults(data);
    });//closes $xhr.done

    $xhr.fail(function() {
      alert("AJAX failed!");
    });//closes $xhr.fail

    // fillResults(data); //use this data to access data object below for call-free testing

    function fillResults(data) {
      console.log('filling results');
      var cuisinePlaylist = [];

      for (var i = 0; i < 3; i++) {
        // var recipeCard = $(`#recipe${i}card`);
        var recipeImage = $(`#recipe${i}img`);
        var recipeTitle = $(`#recipe${i}title`);
        var recipeContent = $(`#recipe${i}content`);

        recipeImage.attr("src", `${data.results[i].image}`);
        recipeTitle.html(`${data.results[i].title}`);
        recipeContent.html(`Ready in ${data.results[i].readyInMinutes} minutes.<br> Makes ${data.results[i].servings} servings.`);

        // <p><a href="${data.results[i].sourceUrl}">Click here for recipe link!</a></p>

        switch (data.results[i].cuisines[0]) {
          case "african":
            cuisinePlaylist[i] = 'qEwnHf9Q23k?list=RDqEwnHf9Q23k';
            break;

          case "chines":
            cuisinePlaylist[i] = 'rERvjIrkrRc&list=RDrERvjIrkrRc';
            break;

          case "japanes":
            cuisinePlaylist[i] = 'DkW1iTyS8dk&list=RDDkW1iTyS8dk';
            break;

          case "asian":
            switch (data.results[i].cuisines[1]) {
              case korean:
                cuisinePlaylist[i] = '4tBnF46ybZk?list=PLCC67A0CADDE19926';
                break;

              case "vietnames":
                cuisinePlaylist[i] = 'fgPrp1KElQk&list=RDfgPrp1KElQk';
                break;

              case "thai":
                cuisinePlaylist[i] = 'SXXK4P2Ogs0&list=RDSXXK4P2Ogs0';
                break;

              default://indian
                cuisinePlaylist[i] = 'QE7uASiH9cM&list=RDQE7uASiH9cM';
            }//closes asian switch
            break;

          case "european":
            switch (data.results[i].cuisines[1]) {

              case "irish":
                cuisinePlaylist[i] = 'Ldf7T6TlV-o&list=PL4lVd8L3ra0GWQkVkiB9iNJo06aXyZoYS';
                break;

              case "eastern european":
                cuisinePlaylist[i] = '8zPfGezduJI&list=RD8zPfGezduJI';
                break;

              default://english
              cuisinePlaylist[i] = 'Qyclqo_AV2M&list=PLz2n4ChRKOrfqsabO_FKd70qHY67BDzHh';
            }//closes european switch
          break;

          case "mediterranean":
            switch (data.results[i].cuisines[2]) {
              case "french":
                cuisinePlaylist[i] = 'Oc1O6gB8F7M&list=RDOc1O6gB8F7M';
                break;

              default://italian
                cuisinePlaylist[i] = 'jwhP4vZAh18&list=RDjwhP4vZAh18';
            }//closes mediterranean switch
          break;

          case "mexican":
            cuisinePlaylist[i] = 'klVe7_2UEQ8&list=RDQMarbGOGwBBQ4';
            break;

          case "spanish":
            cuisinePlaylist[i] = 'A93m5DIbLw8&list=PLuS01ZdIZd4eWmMs8Q51oV7094Wx72jSb';
            break;

          case "jewish":
            cuisinePlaylist[i] = 'g3bjZlmsb4A&list=RDg3bjZlmsb4A';
            break;

          case "american":
            cuisinePlaylist[i] = 'nKI8Mo_v3d4&list=PLlu4hx7GfQgxQQq-5AaDFzn-EVvsQO2se';
            break;

          case "cajun":
            cuisinePlaylist[i] = 'fa8vyTfugcI&list=RDfa8vyTfugcI';
            break;

          case "southern":
            cuisinePlaylist[i] = 'Be-hXxc5yN0&list=RDBe-hXxc5yN0';
            break;

          case "greek":
            cuisinePlaylist[i] = 'SVAzB8Uj0KM&list=RDSVAzB8Uj0KM';
            break;

          case "german":
            cuisinePlaylist[i] = '_s44K8rkPRE&list=RD_s44K8rkPRE';
            break;

          case "scandinavian":
            cuisinePlaylist[i] = 'xFrGuyw1V8s&list=RDxFrGuyw1V8s';
            break;

          case "caribbean":
            cuisinePlaylist[i] = 'eMTYOYFyvTo&list=RDeMTYOYFyvTo';
            break;

          case "south american":
            cuisinePlaylist[i] = 'qGKrc3A6HHM&list=RDqGKrc3A6HHM';
            break;

          default://empty
            cuisinePlaylist[i] = 'ktjJtDmsy8A&list=RDktjJtDmsy8A';

        }
      }//closes fillResults for loop
      $("#youtube-playlist0").attr("src", `https://www.youtube.com/embed/${cuisinePlaylist[0]}`);
      $("#youtube-playlist1").attr("src", `https://www.youtube.com/embed/${cuisinePlaylist[1]}`);
      $("#youtube-playlist2").attr("src", `https://www.youtube.com/embed/${cuisinePlaylist[2]}`);
    }//closes fillResults

  }); //closes on('click function

}); //document.ready closing


// var data = {
//   "results": [
//     {
//       "vegetarian": false,
//       "vegan": false,
//       "glutenFree": true,
//       "dairyFree": true,
//       "veryHealthy": false,
//       "cheap": false,
//       "veryPopular": false,
//       "sustainable": false,
//       "weightWatcherSmartPoints": 13,
//       "gaps": "no",
//       "lowFodmap": false,
//       "ketogenic": false,
//       "whole30": true,
//       "servings": 4,
//       "preparationMinutes": 15,
//       "cookingMinutes": 30,
//       "sourceUrl": "http://www.justasdelish.com/kafta-stew/",
//       "spoonacularSourceUrl": "https://spoonacular.com/kafta-stew-middle-eastern-meatball-stew-498013",
//       "aggregateLikes": 90,
//       "spoonacularScore": 94,
//       "healthScore": 36,
//       "creditText": "Just as Delish",
//       "sourceName": "Just as Delish",
//       "id": 498013,
//       "title": "Kafta Stew (Middle Eastern Meatball Stew)",
//       "readyInMinutes": 45,
//       "image": "https://spoonacular.com/recipeImages/Kafta-Stew-(Middle-Eastern-Meatball-Stew)-498013.jpg",
//       "imageType": "jpg",
//       "cuisines": [
//         "middl eastern"
//       ],
//       "dishTypes": [
//         "lunch",
//         "main course",
//         "main dish",
//         "dinner"
//       ],
//       "pricePerServing": 175.61,
//       "analyzedInstructions": [
//         {
//           "name": "",
//           "steps": [
//             {
//               "number": 1,
//               "step": "Place all ingredients in a bowl and mix well with your hands. Chill for at least 30 minutes, this will make shaping the balls easier. Shape all into same size balls and chill until ready to cook.In a medium pot, heat oil and place the meatballs to sauté until browned on all sides.",
//               "ingredients": [],
//               "equipment": [
//                 {
//                   "id": 404783,
//                   "name": "bowl",
//                   "image": "https://spoonacular.com/cdn/equipment_100x100/bowl.jpg"
//                 },
//                 {
//                   "id": 404752,
//                   "name": "pot",
//                   "image": "https://spoonacular.com/cdn/equipment_100x100/stock-pot.jpg"
//                 }
//               ]
//             },
//             {
//               "number": 2,
//               "step": "Remove and set aside. In the same pot, add carrots, potatoes and onions and sauté for a few minutes until they develop a skin.",
//               "ingredients": [
//                 {
//                   "id": 11362,
//                   "name": "potato",
//                   "image": "https://spoonacular.com/cdn/ingredients_100x100/potatoes-yukon-gold.jpg"
//                 },
//                 {
//                   "id": 11124,
//                   "name": "carrot",
//                   "image": "https://spoonacular.com/cdn/ingredients_100x100/carrots.jpg"
//                 },
//                 {
//                   "id": 11282,
//                   "name": "onion",
//                   "image": "https://spoonacular.com/cdn/ingredients_100x100/brown-onion.jpg"
//                 }
//               ],
//               "equipment": [
//                 {
//                   "id": 404752,
//                   "name": "pot",
//                   "image": "https://spoonacular.com/cdn/equipment_100x100/stock-pot.jpg"
//                 }
//               ]
//             },
//             {
//               "number": 3,
//               "step": "Add the diced tomatoes and stir around, making sure to remove all the yummy bits at the bottom of the pot.",
//               "ingredients": [
//                 {
//                   "id": 11529,
//                   "name": "tomato",
//                   "image": "https://spoonacular.com/cdn/ingredients_100x100/tomato.jpg"
//                 }
//               ],
//               "equipment": [
//                 {
//                   "id": 404752,
//                   "name": "pot",
//                   "image": "https://spoonacular.com/cdn/equipment_100x100/stock-pot.jpg"
//                 }
//               ]
//             },
//             {
//               "number": 4,
//               "step": "Add water, salt and pepper into the pot. Adjust taste to your liking before you add the kafta. After adding kafta, cover pot and simmer for 20-30 minutes or until the vegetables are tender when pricked with fork.",
//               "ingredients": [
//                 {
//                   "id": 2047,
//                   "name": "salt and pepper",
//                   "image": "https://spoonacular.com/cdn/ingredients_100x100/salt-and-pepper.jpg"
//                 },
//                 {
//                   "id": 14412,
//                   "name": "water",
//                   "image": "https://spoonacular.com/cdn/ingredients_100x100/water.jpg"
//                 }
//               ],
//               "equipment": [
//                 {
//                   "id": 404752,
//                   "name": "pot",
//                   "image": "https://spoonacular.com/cdn/equipment_100x100/stock-pot.jpg"
//                 }
//               ]
//             },
//             {
//               "number": 5,
//               "step": "Serve warm.",
//               "ingredients": [],
//               "equipment": []
//             }
//           ]
//         }
//       ]
//     },
//     {
//       "vegetarian": false,
//       "vegan": false,
//       "glutenFree": true,
//       "dairyFree": false,
//       "veryHealthy": false,
//       "cheap": false,
//       "veryPopular": false,
//       "sustainable": false,
//       "weightWatcherSmartPoints": 14,
//       "gaps": "no",
//       "lowFodmap": false,
//       "ketogenic": false,
//       "whole30": false,
//       "servings": 4,
//       "preparationMinutes": 5,
//       "cookingMinutes": 15,
//       "sourceUrl": "http://www.food.com/recipe/middle-eastern-lamb-307781",
//       "spoonacularSourceUrl": "https://spoonacular.com/middle-eastern-lamb-97938",
//       "aggregateLikes": 2,
//       "spoonacularScore": 42,
//       "healthScore": 8,
//       "creditText": "Food.com",
//       "sourceName": "Food.com",
//       "id": 97938,
//       "title": "Middle Eastern Lamb",
//       "readyInMinutes": 20,
//       "image": "https://spoonacular.com/recipeImages/middle-eastern-lamb-2-97938.jpg",
//       "imageType": "jpg",
//       "cuisines": [
//         "middl eastern"
//       ],
//       "dishTypes": [
//         "lunch",
//         "main course",
//         "main dish",
//         "dinner"
//       ],
//       "pricePerServing": 209.94,
//       "analyzedInstructions": []
//     },
//     {
//       "vegetarian": false,
//       "vegan": false,
//       "glutenFree": true,
//       "dairyFree": true,
//       "veryHealthy": false,
//       "cheap": false,
//       "veryPopular": false,
//       "sustainable": false,
//       "weightWatcherSmartPoints": 5,
//       "gaps": "no",
//       "lowFodmap": false,
//       "ketogenic": false,
//       "whole30": true,
//       "servings": 4,
//       "preparationMinutes": 10,
//       "cookingMinutes": 10,
//       "sourceUrl": "http://feedmephoebe.com/2014/08/feeding-friends-grilled-lamb-kebabs-lebonese-fresh-tomato-salsa/",
//       "spoonacularSourceUrl": "https://spoonacular.com/feeding-friends-grilled-lamb-kebabs-with-lebanese-fresh-tomato-salsa-609187",
//       "aggregateLikes": 4,
//       "spoonacularScore": 81,
//       "healthScore": 43,
//       "creditText": "Feed Me Phoebe",
//       "sourceName": "Feed Me Phoebe",
//       "id": 609187,
//       "title": "Feeding Friends: Grilled Lamb Kebabs with Lebanese Fresh Tomato Salsa",
//       "readyInMinutes": 140,
//       "image": "https://spoonacular.com/recipeImages/Feeding-Friends--Grilled-Lamb-Kebabs-with-Lebanese-Fresh-Tomato-Salsa-609187.jpg",
//       "imageType": "jpg",
//       "cuisines": [
//         "middl eastern"
//       ],
//       "dishTypes": [
//         "lunch",
//         "main course",
//         "main dish",
//         "dinner"
//       ],
//       "pricePerServing": 289.28,
//       "analyzedInstructions": [
//         {
//           "name": "",
//           "steps": [
//             {
//               "number": 1,
//               "step": "Combine the ingredients for the marinade in a resealable plastic bag.",
//               "ingredients": [],
//               "equipment": [
//                 {
//                   "id": 221671,
//                   "name": "ziploc bags",
//                   "image": "https://spoonacular.com/cdn/equipment_100x100/plastic-bag.jpg"
//                 }
//               ]
//             },
//             {
//               "number": 2,
//               "step": "Add the lamb and toss to coat. Marinade in the refrigerator for at least 2 hours or overnight. Preheat an indoor grill pan or outdoor grill. Thread the zucchini ribbons and lamb onto the skewers, alternating, until you have 3 of each ingredient per skewer. You should have 8-10 kebabs total. Grill the lamb over high heat until nicely browned on all sides, 6-8 minutes total for medium rare.",
//               "ingredients": [
//                 {
//                   "id": 11477,
//                   "name": "zucchini",
//                   "image": "https://spoonacular.com/cdn/ingredients_100x100/zucchini.jpg"
//                 }
//               ],
//               "equipment": [
//                 {
//                   "id": 404648,
//                   "name": "grill pan",
//                   "image": "https://spoonacular.com/cdn/equipment_100x100/grill-pan.jpg"
//                 },
//                 {
//                   "id": 3065,
//                   "name": "skewers",
//                   "image": "https://spoonacular.com/cdn/equipment_100x100/wooden-skewers.jpg"
//                 },
//                 {
//                   "id": 404706,
//                   "name": "grill",
//                   "image": "https://spoonacular.com/cdn/equipment_100x100/grill.jpg"
//                 }
//               ]
//             },
//             {
//               "number": 3,
//               "step": "Serve the lamb on a platter alongside the Lebonese fresh tomato salsa.",
//               "ingredients": [
//                 {
//                   "id": 6164,
//                   "name": "salsa",
//                   "image": "https://spoonacular.com/cdn/ingredients_100x100/salsa.jpg"
//                 }
//               ],
//               "equipment": []
//             }
//           ]
//         }
//       ]
//     }
//   ],
// };//closes data
