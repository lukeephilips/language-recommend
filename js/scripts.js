http://www.bestprogramminglanguagefor.me/q

name - string
date - date
platformType - [mobile, web, desktop]
operatingSystem - [windows, mac, dont care]
mathFocus - [0-4]
workEnv- [corporate, other]
flexibilty - [low, high]
gut [css, php, ruby, c#, java]

platformType
mobile
web
desktop

operatingSystem
windows
mac
i dont care

workEnv
  crawl in  = other
  work from the beach = freelance
  ping-pong = other
  shoes off, feet up = other
  predictable with lots of structure = corp
  do my job and go home = corp

gut
what scares you most?
  color schemess and off center divs - css
  having to show up to the same place everday -php
  working on the same project for 3 months -ruby
  inoptimized recursive formulas -java
  what if my company goes out of business -c#

math
math 0 to 4 slider


flexibility
Skill flexibility?
I know what I like, and I want to become an expert at inspect
I want to try it all!



//global variables assigned
var platformType = "";
var operatingSystem = "";
var mathFocus = 1;
var workEnv = "corporate";
var flexibility = "low"
var peeve = ""
var name = ""
//variables set based on form


//comparison algorithm
var recommendation = function(mathFocus, workEnv, flexibility) {
  console.log("recommendation run");
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

    if (mathFocus <= 1) {                        // math - css, php
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
recommendation(mathFocus, workEnv, flexibility));
