$(document).ready(function() {
  console.log('Ready to go!');
  $('select').material_select();
  $(".button-collapse").sideNav({
    menuWidth: 300,
    edge: 'right',
    closeOnClick: true,
    });
}); //document.ready closing
