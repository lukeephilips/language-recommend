// name - string
// date - date
// platformType - [mobile, web, desktop]
// operatingSystem - [windows, mac, other]
// mathFocus - [low, medium, high]
// workEnv- [corporate, startup, freelance]
// flexibility- [low, high]
// gut [css, php, ruby, c#, java]


//global variables assigned
var platformType = "";
var operatingSystem = "";
var mathFocus = "";
var workEnv = "";
var flexibility = "";
var gut = "";
var name = "";
var recommendation = "";
// var slideVal = 0;

// var recommendation2 = ""

//comparison algorithm

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

// var recommendation2 = function(gut) {
//   console.log("rec 2 called");
//   recommendation2 = $("input:radio[name=gut]:checked").val();
//   console.log("rec 2 val" + recommendation2);
//   return recommendation2
// };


//variables set based on form
$(document).ready(function() {


  // ### SLIDER Slider $('.slider').slider()

  $("#inputForm form").submit(function(event) {
      console.log("submit run");
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

    $("#recommendation").text(recommendation(platformType, operatingSystem, mathFocus, workEnv, flexibility)); //text recommendation to output div

    // recommendation2(gut);
    // console.log(recommendation + " " + recommendation2);
    //   if (recommendation != recommendation2) {
    //     console.log("UNEQUAL");
      // }
    // $("#recommendation2").text(recommendation2(gut)); //text recommendation to output div


    event.preventDefault();
  });

// ##### SLIDER
  // $("#testbutton").click(function(){
  //   slideVal = $(".slider".('getValue');
  //   console.log("button" + slideVal);
  //
  // });
});
