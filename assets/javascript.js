$( document ).ready(function() {

    // Initialize Firebasevar config = {
    // CONNECT FIREBASE HERE




    
      var database = firebase.database();
    
    //when a child is added, we get the snapshot
    database.ref().on("child_added", function(snapshot){
    
        var newPost = snapshot.val();
        console.log("name is " + newPost.name);
        console.log("role is " + newPost.role);
        console.log("start date is " + newPost.startDate);
        console.log("monthly rate is " + newPost.monthlyRate);
        console.log("monthly rate is " + newPost.billedTotal);
        

        $("tbody").prepend("<tr><td class='text-center'>" + newPost.name + "</td>" +
                           "<td class='text-center'>" + newPost.role + "</td>" +
                           "<td class='text-center'>" + newPost.startDate + "</td>" +
                           "<td class='text-center'>" + newPost.monthsWorked + "</td>" +
                           "<td class='text-center'>" + newPost.monthlyRate + "</td>" +
                           "<td class='text-center'>" + newPost.billedTotal+ "</td></tr>");
    
    });
    
    
    
    
    
    
    
      $("#add-data").click(function() {
    
        var name = $("#name").val().trim();
        var role = $("#role").val().trim();
        var startDate = $("#start-date").val().trim();
        var monthlyRate = $("#monthly-rate").val().trim();
        var monthsWorked;
    
        console.log(role);
    
          function getMonthsWorked() {
            var d = new Date(startDate); 
            console.log(d);
            var startInMilliseconds = d.getTime();
            console.log(startInMilliseconds);
    
            var today = new Date();
            
            var todayDate = today.getTime();
            var dateDifference = (todayDate - startInMilliseconds);
            monthsWorked = Math.floor(dateDifference * .00000000039);
            console.log("months worked is " + monthsWorked);
          }
    
          getMonthsWorked();

          var billedTotal = monthsWorked * monthlyRate;
    
          database.ref().push({
            name: name,
            role : role,
            startDate : startDate,
            monthlyRate: monthlyRate,
            monthsWorked: monthsWorked,
            billedTotal: billedTotal
          });
    

        
        event.preventDefault();
    
      });
    
    
    
    });