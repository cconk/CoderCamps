var contactListString = localStorage.getItem('contactListStore');
console.log(contactListString);
var contactList =JSON.parse(contactListString);
console.log(contactList);

createTable();

function createTable() {

  var contactTable = document.getElementById('table');
  var holder = "";
  for (var i=0; i < contactList.length; i++){
    holder += "<tr>";
    holder += "<td>" + contactList[i].contactFirstName + "</td>";
    holder += "<td>" + contactList[i].contactLastName + "</td>";
    holder += "<td>" + contactList[i].contactEmail + "</td>";
    holder += "<td>" + contactList[i].contactPhoneNum + "</td>";
    holder += "<td>" + "<button id = "+i+"class = 'deletebtn' type = 'button' onclick = 'deleteContactConfirm(this)' value = "+i+">Delete</button>" + "</td>";
    holder += "</tr>";
  }
  contactTable.innerHTML = holder;
}

function deleteContactConfirm(btn) {
  //remove movie from array and re-create table
  document.getElementById('modalContainer2').style.display="block";
  document.getElementById('okDialog').onclick = function (e) {
    e.preventDefault();
    var rowNumber = parseInt(btn.value);
    contactList.splice(rowNumber,1);
    createTable();
    contactListString = JSON.stringify(contactList);
    localStorage.setItem('contactListStore',contactListString);
    document.getElementById('modalContainer2').style.display ="none";
  }
  document.getElementById('cancelDialog').onclick = function(){
    document.getElementById('modalContainer2').style.display = "none";
  }
}
