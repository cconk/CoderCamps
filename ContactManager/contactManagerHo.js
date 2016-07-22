var btn = document.getElementById('findContact');
btn.addEventListener('click',findContact);

var contactListString = localStorage.getItem('contactListStore');
var contactList = JSON.parse(contactListString);

function findContact() {
  var searchFirstName = document.getElementById('inputFirstName').value;
  var foundContactList = [];
  if (searchFirstName == "") {
    alert('Please enter a first name to search for a contact');
  }
  else {
    for (i=0; i < contactList.length; i++) {
    if (contactList[i].contactFirstName == searchFirstName) {
       foundContactList.push({foundContactFirstName: contactList[i].contactFirstName, foundContactLastName: contactList[i].contactLastName, foundContactEmail: contactList[i].contactEmail, foundContactPhoneNum: contactList[i].contactPhoneNum});
     }
   }
        var contactTable = document.getElementById('table');
        var holder = "";
        for (var i=0; i < foundContactList.length; i++) {
          holder += "<tr>";
          holder += "<td>" + foundContactList[i].foundContactFirstName + "</td>";
          holder += "<td>" + foundContactList[i].foundContactLastName + "</td>";
          holder += "<td>" + foundContactList[i].foundContactEmail + "</td>";
          holder += "<td>" + foundContactList[i].foundContactPhoneNum + "</td>";
          holder += "</tr>";
        }
        contactTable.innerHTML = holder;
        document.getElementById('inputFirstName').value="";
        searchFirstName="";
      }
  }
