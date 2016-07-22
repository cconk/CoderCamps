var btn1 = document.getElementById('saveDialog');
btn1.addEventListener('click',addNewMovie);
// delcare new movie
var movieList=[];

function createTable() {
  //create movie list
  var movieTable = document.getElementById('table');
  var holder = "";
  for (var i=0; i < movieList.length; i++){
    holder += "<tr>";
    holder += "<td>" + movieList[i].movieTitle + "</td>";
    holder += "<td>" + movieList[i].directorName + "</td>";
    holder += "<td>" + "<button id = "+i+"class = 'removebtn' type = 'button' onclick = 'removeMovieConfirm(this)' value = "+i+">Delete</button>" + "</td>";
    holder += "</tr>";
  }
  movieTable.innerHTML = holder;
}

function addNewMovie(){
  //create new movie and add to array
  var newMovie = {
    movieTitle: document.getElementById('movieTitle').value,
    directorName: document.getElementById('directorName').value
  };
  movieList.push({movieTitle:newMovie.movieTitle, directorName: newMovie.directorName});
  createTable();
  newMovie={};
  document.getElementById('movieTitle').value="";
  document.getElementById('directorName').value="";
}

function removeMovieConfirm(btn) {
  //remove movie from array and re-create table
  document.getElementById('modalContainer2').style.display="block";
  document.getElementById('okDialog').onclick = function (e) {
    e.preventDefault();
    var rowNumber = parseInt(btn.value);
    movieList.splice(rowNumber,1);
    createTable();
    document.getElementById('modalContainer2').style.display ="none";
  }
  document.getElementById('cancelDialog').onclick = function(){
    document.getElementById('modalContainer2').style.display = "none";
  }
}
