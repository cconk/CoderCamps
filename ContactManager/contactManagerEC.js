var contactListString = localStorage.getItem('contactListStore');
var contactList =JSON.parse(contactListString);

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
    holder += "<td>" + "<button id = "+i+"class = 'editbtn' type = 'button' onclick = 'editContactConfirm(this)' value = "+i+">Edit</button>" + "</td>";
    holder += "</tr>";
  }
  contactTable.innerHTML = holder;
}

function editContactConfirm(btn) {
  document.getElementById('modalContainer2').style.display="block";
  document.getElementById('contactFirstName').value=contactList[btn.value].contactFirstName;
  document.getElementById('contactLastName').value=contactList[btn.value].contactLastName;
  document.getElementById('contactEmail').value=contactList[btn.value].contactEmail;
  document.getElementById('contactPhoneNum').value=contactList[btn.value].contactPhoneNum;
  document.getElementById('saveDialog').onclick = function (e) {
    e.preventDefault();
    if (document.getElementById('contactFirstName').value=="" || document.getElementById('contactLastName').value=="") {
        alert('Please enter a first and last name to add a contact');
    }
    else {
    contactList[btn.value].contactFirstName=document.getElementById('contactFirstName').value;
    contactList[btn.value].contactLastName=document.getElementById('contactLastName').value;
    contactList[btn.value].contactEmail=document.getElementById('contactEmail').value;
    contactList[btn.value].contactPhoneNum=document.getElementById('contactPhoneNum').value;
    createTable();
    contactListString = JSON.stringify(contactList);
    localStorage.setItem('contactListStore',contactListString);
    document.getElementById('modalContainer2').style.display ="none";
  }
  document.getElementById('cancelDialog').onclick = function(){
    document.getElementById('modalContainer2').style.display = "none";
  }

  }
}
