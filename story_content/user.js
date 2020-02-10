function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6B3YqNBJaUd":
        Script1();
        break;
      case "6dsnB7dqGzg":
        Script2();
        break;
      case "6jrh3YeHTvN":
        Script3();
        break;
      case "5x07q5Fwm1C":
        Script4();
        break;
      case "6YdO64T69Zu":
        Script5();
        break;
      case "6n8h6q1sNej":
        Script6();
        break;
      case "6GczG3bLulc":
        Script7();
        break;
      case "6hr0WwFVdsI":
        Script8();
        break;
      case "5vkRgCpEwdW":
        Script9();
        break;
      case "6QzEuYnKYwK":
        Script10();
        break;
      case "6fSZw9FYJjG":
        Script11();
        break;
      case "6Dx7QRul60l":
        Script12();
        break;
  }
}

function Script1()
{
  $("#tab-customlink").hide();
}

function Script2()
{
  $("#tab-customlink").hide();
}

function Script3()
{
  var player = GetPlayer();
var email="nsdd_cne@ksmc.med.sa";
var subject=player.GetVar("Name");
var body_start="Dear Instructor,";
var mailto_link='mailto:'+email+'?subject='+subject+'&body='+body_start;
win=window.open(mailto_link,'emailWin');
}

function Script4()
{
  $("#tab-customlink").hide();
}

function Script5()
{
  $("#tab-customlink").hide();
}

function Script6()
{
  $("#tab-customlink").hide();
}

function Script7()
{
  $("#tab-customlink").hide();
}

function Script8()
{
  $("#tab-customlink").hide();
}

function Script9()
{
  $("#tab-customlink").hide();
}

function Script10()
{
  var currentTime = new Date()
var month = currentTime.getMonth() + 1
var day = currentTime.getDate()
var year = currentTime.getFullYear()
var dateString=month + "/" + day + "/" + year

var player = GetPlayer();
player.SetVar("SystemDate",dateString);
}

function Script11()
{
  $("#tab-customlink").show();
}

function Script12()
{
  window.print();
}

