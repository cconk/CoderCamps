$('#btn').on('click', function() {
  var newSeconds=0;
  if ($('#btn').val() == "Start") {
     $('#btn').val("Stop");
     var id = window.setInterval(function() {
       $('#seconds').html(parseInt(newSeconds=newSeconds+1));
     },1000);
  } else if ($('#btn').val() == "Stop") {
    window.clearInterval(id);
    $('#btn').val("Reset");
  } else {
    location.reload();
  }
});

  // do something every 1000 milliseconds (1 second)
//var id = window.setInterval(function() {
    // do something
//  }, 1000);

//  window.clearInterval(id);
