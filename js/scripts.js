//global variables assigned
var platformType = "";
var operatingSystem = "";
var mathFocus = "";
var workEnv = "";
var flexibility = "";
var gut = "";
var name = "";
var recommendation = "";
var lanRec = "";
var recommendation2 = ""

//comparison algorithm recommendation()
var recommendation = function(platformType, operatingSystem, mathFocus, workEnv, flexibility) {
  console.log("recommendation called");

  if(platformType === "mobile") {
    console.log("platformType- mobile" + platformType);
    return "java";
  }
  else if (platformType === "desktop") {
    if (operatingSystem === "windows") {
      console.log("platformType- desktop" + platformType + "operating sys windows -" + operatingSystem);
      return "c#";
    }
    else {
      console.log("platformType- desktop" + platformType + "operating sys other -" + operatingSystem);
      return "java";
    }
  }
  else if (platformType === "web") {

    if (mathFocus === "low") {                        // math - css, php
      console.log("math low- " + mathFocus)
      if (flexibility === "low") {                  // skill flexibility - css
        console.log("math low- " + mathFocus + "flexibility low- " + flexibility)
        return "css";
      }
      else {                                        // skill flexibility - php
        console.log("math low- " + mathFocus + "flexibility high- " + flexibility);
        return "php";
      }
    }
    else {                                      // math - c#, ruby, java
      console.log("math high- " + mathFocus);
      if (workEnv === "corporate") {              //workEnv - c#
        console.log("math high- " + mathFocus + "work Corp" + workEnv);
        return "c#";
      }
      else if (workEnv === "freelance") {
        console.log("math high- " + mathFocus + "work freelance- " + workEnv)
        return "css";
      }
      else {                                     // workEnv - ruby, java
        console.log("math high- " + mathFocus + "work other" + workEnv);
        if (flexibility === "high") {              //flex - java
          console.log("math high- " + mathFocus + "work other" + workEnv + "skill flexibility high- " + flexibility);
          return "java";
        }
        else {                                    //flex - ruby
          console.log("math high- " + mathFocus + "work other" + workEnv + "skill flexibility low- " + flexibility);
          return "ruby";
        }

      }
    }
  }
};

// second comparison based on get variable recommendation2()
var recommendation2 = function(gut) {
  console.log("rec 2 called");
  recommendation2 = $("input:radio[name=gut]:checked").val();
  console.log("rec 2 val" + recommendation2);
  return recommendation2
};


//variables set based on form
$(document).ready(function() {

//advance through each panel question
  $("#nextName").click(function() {
    if ($("#name").val() === "") {
        $("#namePanel").addClass("has-error");
        console.log("Put in a name");
    }
    else {
      $("#namePanel").hide();
      $("#platformTypePanel").show();
    }
  });
  $("#nextPlatform").click(function() {
    $("#platformTypePanel").hide();
    $("#operatingSystemPanel").show();
  });
  $("#nextOS").click(function() {
    $("#operatingSystemPanel").hide();
    $("#mathFocusPanel").show();
  });
  $("#nextMath").click(function() {
    $("#mathFocusPanel").hide();
    $("#workEnvPanel").show();
  });
  $("#nextWork").click(function() {
    $("#workEnvPanel").hide();
    $("#flexibilityPanel").show();
  });
  $("#nextFlex").click(function() {
    $("#flexibilityPanel").hide();
    $("#gutPanel").show();
  });

// on submit, set variables and  call recommendation()
  $("#inputForm form").submit(function(event) {
      $("#gutPanel").hide();
      $("#output").show();

      console.log("submit run");
    name = $("#name").val();
      console.log("NAME****" + name);
    platformType = $("input:radio[name=platformType]:checked").val();
      console.log(platformType);
    operatingSystem = $("#operatingSystem").val();
      console.log("OS " + operatingSystem);
    mathFocus = $("#mathFocus").val();
        console.log("****MATH " + mathFocus);
    workEnv = $("input:radio[name=workEnv]:checked").val();
      console.log("workEnv " + workEnv);
    flexibility = $("#flexibility").val();
      console.log("flex " + flexibility);
    gut = $("input:radio[name=gut]:checked").val();
      console.log(" ***** gut is" + gut);

    console.log("test variables set");
    console.log(recommendation(platformType, operatingSystem, mathFocus, workEnv, flexibility));
    console.log("NAME 2"+ name);
    $("#nameOutput").text(name);
    $("#recommendation").text(recommendation(platformType, operatingSystem, mathFocus, workEnv, flexibility)); //text recommendation to output div

    var langRec = recommendation(platformType, operatingSystem, mathFocus, workEnv, flexibility);
    console.log("Test" + langRec);

    var rec2 = recommendation2(gut);
    console.log(langRec + " " + rec2);
      if (rec2 != langRec) {
        console.log("UNEQUAL");
        $("#recommendation2").text("or maybe "+ rec2); //text recommendation to output div
      }

    //display logos
    if (langRec === "css") {
      $("#cssLogo").show();
    }
    else if (langRec === "php") {
      $("#phpLogo").show();
    }
    else if (langRec === "ruby") {
      $("#rubyLogo").show();
    }
    else if (langRec === "java") {
      $("#javaLogo").show();
    }
    else {
      $("#cSharpLogo").show();
      console.log("WHY NO C#");
    }

    $("#restart").click(function() {
      location.reload();
    });
    event.preventDefault();
  });
});
