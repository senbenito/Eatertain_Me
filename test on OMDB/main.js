$(document).ready(function() {
  var results = [];

    console.log('Ready to go!');
    $('#results').hide();
    $('#searchButton').on('click', function() {
        $('#results').show();

        var cuisine = $("#movies").val() || [];
        // var searchCuisine = cuisine.join('%2C');
        console.log(cuisine);

        fillRecipeResults(cuisine);

          function fillRecipeResults(array){
            for (var i=0; i<array.length; i++){
              console.log(array[i]);
              var $xhr = $.ajax({
                url: `http://www.omdbapi.com/?t=${array[i]}`, // The URL to the API. You can get this by clicking on "Show CURL example" from an API profile
              //   type: 'GET', // The HTTP Method
              //   data: {}, // Additional parameters here
              //   datatype: 'json',
                });

          $xhr.done(function(data) {
              if ($xhr.status !== 200) {
                  return;
              }
              console.log(data);
              // fillResults();
              results.push(`<h3><span style='font-size:medium'>${data.Plot}</span></h3>`);

              $('#results').append(results);
            });
          $xhr.fail(function() {
                  alert("AJAX failed!");
            });
              //think of doing this as an empty variable with each new result pushed into it, then pushing that variable into the empty <div>

                // function fillResults() {
                //     for (var i = 0; i < 3; i++) {
                //         results.push(`<h3><span style='font-size:medium'>${data.Plot}</span></h3>`);
                //     }
                //     console.log(results);
                //     return results;
                // };
              };
        }
      });
    // });

    //document.ready closing
});
