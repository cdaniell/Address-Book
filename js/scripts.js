
function Contact(first, last, number, email) {
  this.firstName = first;
  this.lastName = last;
  this.number = number;
  this.email = email;
}


Contact.prototype.fullName = function() {
  return this.firstName + " " + this.lastName;
}
Number.prototype.number = function() {
  return this.number;
}
Email.prototype.email = function() {
  return this.email;
}

function resetFields() {
    $("input#first-name").val("");
    $("input#last-name").val("");
	$("input#number").val("");
	$("input#email").val("");
    
    
}

$(document).ready(function() {
  
  $("#add-address").click(function() {
 

  $("form#new-contact").submit(function(event) {
    event.preventDefault();

    var inputtedFirstName = $("input#first-name").val();
    var inputtedLastName = $("input#last-name").val();
	var inputtedNumber = $("input#number").val();
	var inputtedEmail = $("input#email").val();
    var newContact = new Contact(inputtedFirstName, inputtedLastName);

   

    $("ul#contacts").append("<li><span class='contact'>" + newContact.fullName() + "</span></li>");

    $(".contact").last().click(function() {
      $("#show-contact").show();
      $("#show-contact h2").text(newContact.fullName());
      $(".first-name").text(newContact.firstName);
      $(".last-name").text(newContact.lastName);
	  $(".number").number(newContact.number);
	  $(".email").email(newContact.email);
     
    });

    resetFields();
  
  });
  });
});