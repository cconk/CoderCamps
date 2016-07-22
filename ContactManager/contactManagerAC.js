var btn = document.getElementById('addNewContact');
btn.addEventListener('click',addNewContact);

var btn2 = document.getElementById('cancelNewContact');
btn2.addEventListener('click',cancelAddContact);

var contactListString = localStorage.getItem('contactListStore');
var contactList = JSON.parse(contactListString);

function addNewContact() {
  var newEmail=document.getElementById('inputEmail').value;
  var validEmail = /\S+@\S+\.\S+/;
  var newPhoneNum = document.getElementById('inputPhoneNum').value;
  var validPhoneNum = /^\d{3}-\d{3}-\d{4}$/;

  if (document.getElementById('inputFirstName').value=="" || document.getElementById('inputLastName').value=="" || !validEmail.test(newEmail) || !validPhoneNum.test(newPhoneNum)) {
    alert('Please enter a first and last name along with valid email address and phone number to add a contact');
  }

  else {

  var newContact = {
    contactFirstName: document.getElementById('inputFirstName').value,
    contactLastName: document.getElementById('inputLastName').value,
    contactEmail: document.getElementById('inputEmail').value,
    contactPhoneNum: document.getElementById('inputPhoneNum').value
  };
    contactList.push({contactFirstName: newContact.contactFirstName, contactLastName: newContact.contactLastName, contactEmail: newContact.contactEmail, contactPhoneNum: newContact.contactPhoneNum});
    var contactListString = JSON.stringify(contactList);
    localStorage.setItem('contactListStore',contactListString);
    document.getElementById('inputFirstName').value="";
    document.getElementById('inputLastName').value="";
    document.getElementById('inputEmail').value="";
    document.getElementById('inputPhoneNum').value="";
    newContact="";
  }
}

function cancelAddContact() {
  document.getElementById('inputFirstName').value="";
  document.getElementById('inputLastName').value="";
  document.getElementById('inputEmail').value="";
  document.getElementById('inputPhoneNum').value="";
  newContact="";
}
