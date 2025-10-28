function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6md1LfCrqMH":
        Script1();
        break;
      case "5x8jtfbiF7w":
        Script2();
        break;
  }
}

function Script1()
{
  var currentDate = new Date()
var day = currentDate.getDate()
var month = currentDate.getMonth() + 1
var year = currentDate.getFullYear();
var player = GetPlayer();
var newName = month + "/" + day + "/" +year
player.SetVar("DateValue", newName);
}

function Script2()
{
  var player = GetPlayer();

var theName =(
player.GetVar("NameField")
)

var theDate =(
player.GetVar("DateValue")
)

var theScore =(
player.GetVar("correctcounter")
)

var Q1 =(
player.GetVar("TextEntry4")
)

var Q2 =(
player.GetVar("TextEntry5")
)

var Q3 =(
player.GetVar("TextEntry6")
)

var Q4 =(
player.GetVar("TextEntry7")
)

var theA1Q1 =(
player.GetVar("A1Q1")
)

var theA1Q2 =(
player.GetVar("A1Q2")
)

var theA1Q3 =(
player.GetVar("A1Q3")
)

var theA1Q4 =(
player.GetVar("A1Q4")
)

var theA1Q5 =(
player.GetVar("A1Q5")
)

var theA1Q6 =(
player.GetVar("A1Q6")
)

var theA2Q1 =(
player.GetVar("A2Q1")
)

var theA2Q2 =(
player.GetVar("A2Q2")
)

var theA2Q3 =(
player.GetVar("A2Q3")
)

var theA2Q4 =(
player.GetVar("A2Q4")
)

var theA2Q5 =(
player.GetVar("A2Q5")
)



var urlstring = ("printCertificate.html?print=" + theName + "&" + theDate + "&" + theScore + "&" + Q1 + "&" + Q2 + "&" + Q3 + "&" + Q4 + "&" + theA1Q1 + "&" + theA1Q2 + "&" + theA1Q3 + "&" + theA1Q4 + "&" + theA1Q5 + "&" + theA1Q6 + "&" + theA2Q1 + "&" + theA2Q2 + "&" + theA2Q3 + "&" + theA2Q4 + "&" + theA2Q5);

window.open(urlstring,"_blank","width=800,height=600,menubar=no");
}

