$(document).ready(function() {
  var results = [];
  console.log('Ready to go!');

  $('#results').hide();
  $('#searchButton').on('click', function() {
    $('#results').show();

    var query = $('#keyword').val();
    console.log(query);
    var cuisine = $("#cuisine").val() || [];
    console.log(cuisine);

    // var $xhr = fillRecipeResults(cuisine);
    // function fillRecipeResults(array){
    //   for (var i=0; i<array.length; i++){
    //     $.ajax({
    //       url: `https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/searchComplex?addRecipeInformation=true&cuisine=${array[i]}&limitLicense=false&number=3&offset=0&query=${query}&ranking=1&type=main+course`, // The URL to the API. You can get this by clicking on "Show CURL example" from an API profile
    //       type: 'GET', // The HTTP Method
    //       data: {}, // Additional parameters here
    //       datatype: 'json',
    //       // success: function(data) { alert(JSON.stringify(data)); },
    //       // error: function(err) { alert(err); },
    //       beforeSend: function(xhr) {
    //         xhr.setRequestHeader(); // Enter here your Mashape key
    //       }
    //     });//closes $.ajax
    //   }//closes fillRecipeResults for loop
    // }//closes fillRecipeResults function

    // var $xhr = $.ajax({
    //       url: `https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/searchComplex?addRecipeInformation=true&cuisine=${cuisine[0]}&limitLicense=false&number=1&offset=0&query=${query}&ranking=1&type=main+course`, // The URL to the API. You can get this by clicking on "Show CURL example" from an API profile
    //       type: 'GET', // The HTTP Method
    //       data: {}, // Additional parameters here
    //       datatype: 'json',
    //       // success: function(data) { alert(JSON.stringify(data)); },
    //       // error: function(err) { alert(err); },
    //       beforeSend: function(xhr) {
    //         xhr.setRequestHeader(); // Enter here your Mashape key
    //       }
    //     });//closes $.ajax

    // $xhr.done(function(data) {
    //   if ($xhr.status !== 200) {
    //     return;
    //   }
    //   console.log(data);
    //   fillResults(data);
    //   $('#youtube-playlist1').before(results);
    //   // $('#youtube-playlist2').before(results);
    //   // $('#youtube-playlist3').before(results);
    //
    // });//closes $xhr.done
    //
    // $xhr.fail(function() {
    //   alert("AJAX failed!");
    // });//closes $xhr.fail

    fillResults(data);
    $('#youtube-playlist1').before(results);


    // var tag = document.createElement('script');
    // tag.src = "https://www.youtube.com/iframe_api";
    // var firstScriptTag = document.getElementsByTagName('script')[0];
    // firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    var cuisinePlaylist1 = 'kq7cQNO0gYc';
    $("#youtube-playlist1").attr("src", `https://www.youtube.com/embed/${cuisinePlaylist1}`);
    var cuisinePlaylist2 = 'TSD30PDvLYM';
    $("#youtube-playlist1").attr("src", `https://www.youtube.com/embed/${cuisinePlaylist2}`);
    var cuisinePlaylist3 = 'WHryvQQu9LU';
    $("#youtube-playlist3").attr("src", `https://www.youtube.com/embed/${cuisinePlaylist3}`);

    //think of doing this as an empty variable with each new result pushed into it, then pushing that variable into the empty <div>
    function fillResults(data) {
      console.log('filling results');
      for (var i = 0; i < 3; i++) {
        var recipeId = $(`#recipe${i}`);
        //add if statement to skip over european and asian?

        recipeId.append(`<h3><span style='font-size:medium'>${data.results[i].title}</span></h3>`);
            // console.log(data.results[i].title);
        // results.push(`<h2 style='font-size:small'>Ready in ${data.results[i].readyInMinutes} minutes. Makes ${data.results[i].servings} servings.</h2>`);
        // results.push(`<p><a href="${data.results[i].sourceUrl}">Click here for recipe link!</a></p>`);
        // results.push(`<p><a href="${data.results[i].sourceUrl}">Click here for recipe link!</a> <a href="${pandora[pandoraLink]}">Why not some mood music too?</a></p>`);
        // console.log(data.results[i].cuisines[0]);
        // results.push(`<img src=${data.results[i].image}>`);
      }//closes fillResults for loop
      // console.log(results);
      //
      // return results;
    }//closes fillResults

            // var deferredStuff = $.Deferred();
            // deferredStuff.done(fillResults());
            // $("button").on("click", function() {
            //     fillResults();
            //     $('#results').append(results);
            //
            // });


  }); //closes on('click function

}); //document.ready closing


var data = {
  "results": [
    {
      "vegetarian": false,
      "vegan": false,
      "glutenFree": true,
      "dairyFree": true,
      "veryHealthy": false,
      "cheap": false,
      "veryPopular": false,
      "sustainable": false,
      "weightWatcherSmartPoints": 13,
      "gaps": "no",
      "lowFodmap": false,
      "ketogenic": false,
      "whole30": true,
      "servings": 4,
      "preparationMinutes": 15,
      "cookingMinutes": 30,
      "sourceUrl": "http://www.justasdelish.com/kafta-stew/",
      "spoonacularSourceUrl": "https://spoonacular.com/kafta-stew-middle-eastern-meatball-stew-498013",
      "aggregateLikes": 90,
      "spoonacularScore": 94,
      "healthScore": 36,
      "creditText": "Just as Delish",
      "sourceName": "Just as Delish",
      "id": 498013,
      "title": "Kafta Stew (Middle Eastern Meatball Stew)",
      "readyInMinutes": 45,
      "image": "https://spoonacular.com/recipeImages/Kafta-Stew-(Middle-Eastern-Meatball-Stew)-498013.jpg",
      "imageType": "jpg",
      "cuisines": [
        "middl eastern"
      ],
      "dishTypes": [
        "lunch",
        "main course",
        "main dish",
        "dinner"
      ],
      "pricePerServing": 175.61,
      "analyzedInstructions": [
        {
          "name": "",
          "steps": [
            {
              "number": 1,
              "step": "Place all ingredients in a bowl and mix well with your hands. Chill for at least 30 minutes, this will make shaping the balls easier. Shape all into same size balls and chill until ready to cook.In a medium pot, heat oil and place the meatballs to sauté until browned on all sides.",
              "ingredients": [],
              "equipment": [
                {
                  "id": 404783,
                  "name": "bowl",
                  "image": "https://spoonacular.com/cdn/equipment_100x100/bowl.jpg"
                },
                {
                  "id": 404752,
                  "name": "pot",
                  "image": "https://spoonacular.com/cdn/equipment_100x100/stock-pot.jpg"
                }
              ]
            },
            {
              "number": 2,
              "step": "Remove and set aside. In the same pot, add carrots, potatoes and onions and sauté for a few minutes until they develop a skin.",
              "ingredients": [
                {
                  "id": 11362,
                  "name": "potato",
                  "image": "https://spoonacular.com/cdn/ingredients_100x100/potatoes-yukon-gold.jpg"
                },
                {
                  "id": 11124,
                  "name": "carrot",
                  "image": "https://spoonacular.com/cdn/ingredients_100x100/carrots.jpg"
                },
                {
                  "id": 11282,
                  "name": "onion",
                  "image": "https://spoonacular.com/cdn/ingredients_100x100/brown-onion.jpg"
                }
              ],
              "equipment": [
                {
                  "id": 404752,
                  "name": "pot",
                  "image": "https://spoonacular.com/cdn/equipment_100x100/stock-pot.jpg"
                }
              ]
            },
            {
              "number": 3,
              "step": "Add the diced tomatoes and stir around, making sure to remove all the yummy bits at the bottom of the pot.",
              "ingredients": [
                {
                  "id": 11529,
                  "name": "tomato",
                  "image": "https://spoonacular.com/cdn/ingredients_100x100/tomato.jpg"
                }
              ],
              "equipment": [
                {
                  "id": 404752,
                  "name": "pot",
                  "image": "https://spoonacular.com/cdn/equipment_100x100/stock-pot.jpg"
                }
              ]
            },
            {
              "number": 4,
              "step": "Add water, salt and pepper into the pot. Adjust taste to your liking before you add the kafta. After adding kafta, cover pot and simmer for 20-30 minutes or until the vegetables are tender when pricked with fork.",
              "ingredients": [
                {
                  "id": 2047,
                  "name": "salt and pepper",
                  "image": "https://spoonacular.com/cdn/ingredients_100x100/salt-and-pepper.jpg"
                },
                {
                  "id": 14412,
                  "name": "water",
                  "image": "https://spoonacular.com/cdn/ingredients_100x100/water.jpg"
                }
              ],
              "equipment": [
                {
                  "id": 404752,
                  "name": "pot",
                  "image": "https://spoonacular.com/cdn/equipment_100x100/stock-pot.jpg"
                }
              ]
            },
            {
              "number": 5,
              "step": "Serve warm.",
              "ingredients": [],
              "equipment": []
            }
          ]
        }
      ]
    },
    {
      "vegetarian": false,
      "vegan": false,
      "glutenFree": true,
      "dairyFree": false,
      "veryHealthy": false,
      "cheap": false,
      "veryPopular": false,
      "sustainable": false,
      "weightWatcherSmartPoints": 14,
      "gaps": "no",
      "lowFodmap": false,
      "ketogenic": false,
      "whole30": false,
      "servings": 4,
      "preparationMinutes": 5,
      "cookingMinutes": 15,
      "sourceUrl": "http://www.food.com/recipe/middle-eastern-lamb-307781",
      "spoonacularSourceUrl": "https://spoonacular.com/middle-eastern-lamb-97938",
      "aggregateLikes": 2,
      "spoonacularScore": 42,
      "healthScore": 8,
      "creditText": "Food.com",
      "sourceName": "Food.com",
      "id": 97938,
      "title": "Middle Eastern Lamb",
      "readyInMinutes": 20,
      "image": "https://spoonacular.com/recipeImages/middle-eastern-lamb-2-97938.jpg",
      "imageType": "jpg",
      "cuisines": [
        "middl eastern"
      ],
      "dishTypes": [
        "lunch",
        "main course",
        "main dish",
        "dinner"
      ],
      "pricePerServing": 209.94,
      "analyzedInstructions": []
    },
    {
      "vegetarian": false,
      "vegan": false,
      "glutenFree": true,
      "dairyFree": true,
      "veryHealthy": false,
      "cheap": false,
      "veryPopular": false,
      "sustainable": false,
      "weightWatcherSmartPoints": 5,
      "gaps": "no",
      "lowFodmap": false,
      "ketogenic": false,
      "whole30": true,
      "servings": 4,
      "preparationMinutes": 10,
      "cookingMinutes": 10,
      "sourceUrl": "http://feedmephoebe.com/2014/08/feeding-friends-grilled-lamb-kebabs-lebonese-fresh-tomato-salsa/",
      "spoonacularSourceUrl": "https://spoonacular.com/feeding-friends-grilled-lamb-kebabs-with-lebanese-fresh-tomato-salsa-609187",
      "aggregateLikes": 4,
      "spoonacularScore": 81,
      "healthScore": 43,
      "creditText": "Feed Me Phoebe",
      "sourceName": "Feed Me Phoebe",
      "id": 609187,
      "title": "Feeding Friends: Grilled Lamb Kebabs with Lebanese Fresh Tomato Salsa",
      "readyInMinutes": 140,
      "image": "https://spoonacular.com/recipeImages/Feeding-Friends--Grilled-Lamb-Kebabs-with-Lebanese-Fresh-Tomato-Salsa-609187.jpg",
      "imageType": "jpg",
      "cuisines": [
        "middl eastern"
      ],
      "dishTypes": [
        "lunch",
        "main course",
        "main dish",
        "dinner"
      ],
      "pricePerServing": 289.28,
      "analyzedInstructions": [
        {
          "name": "",
          "steps": [
            {
              "number": 1,
              "step": "Combine the ingredients for the marinade in a resealable plastic bag.",
              "ingredients": [],
              "equipment": [
                {
                  "id": 221671,
                  "name": "ziploc bags",
                  "image": "https://spoonacular.com/cdn/equipment_100x100/plastic-bag.jpg"
                }
              ]
            },
            {
              "number": 2,
              "step": "Add the lamb and toss to coat. Marinade in the refrigerator for at least 2 hours or overnight. Preheat an indoor grill pan or outdoor grill. Thread the zucchini ribbons and lamb onto the skewers, alternating, until you have 3 of each ingredient per skewer. You should have 8-10 kebabs total. Grill the lamb over high heat until nicely browned on all sides, 6-8 minutes total for medium rare.",
              "ingredients": [
                {
                  "id": 11477,
                  "name": "zucchini",
                  "image": "https://spoonacular.com/cdn/ingredients_100x100/zucchini.jpg"
                }
              ],
              "equipment": [
                {
                  "id": 404648,
                  "name": "grill pan",
                  "image": "https://spoonacular.com/cdn/equipment_100x100/grill-pan.jpg"
                },
                {
                  "id": 3065,
                  "name": "skewers",
                  "image": "https://spoonacular.com/cdn/equipment_100x100/wooden-skewers.jpg"
                },
                {
                  "id": 404706,
                  "name": "grill",
                  "image": "https://spoonacular.com/cdn/equipment_100x100/grill.jpg"
                }
              ]
            },
            {
              "number": 3,
              "step": "Serve the lamb on a platter alongside the Lebonese fresh tomato salsa.",
              "ingredients": [
                {
                  "id": 6164,
                  "name": "salsa",
                  "image": "https://spoonacular.com/cdn/ingredients_100x100/salsa.jpg"
                }
              ],
              "equipment": []
            }
          ]
        }
      ]
    }
  ],
};//closes data
