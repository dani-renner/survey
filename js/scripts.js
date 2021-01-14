$(document).ready(function() {
    $("#formOne").submit(function(event) {
      event.preventDefault();
      const person1Input = $("input#person1").val();
      const personFood = $("input:radio[name=food]:checked").val();
      const personBeverage = $("#beverage").val();
      const dob = $("#born").val();
      const color = $("#color").val();

      $(".userName").text(person1Input);
      $(".userFood").text(personFood);
      $(".userBeverage").text(personBeverage);
      $(".userDob").text(dob);
      $(".userColor").text(color);
      $(".output").fadeIn();

  
    });

  });