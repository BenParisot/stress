//backend logic
function Stress (signs, symptoms, methods) {
  this.signs = signs;
  this.symptoms = symptoms;
  this.methods = methods;
}

var warningSigns = [];
var healthSymptoms = [];
var copingMethods = [];

Stress.prototype.stressCheck = function() {
  if (warningSigns.length + healthSymptoms.length > copingMethods.length) {
    $("#bad-response").show();
  } else if (warningSigns.length + healthSymptoms.length < copingMethods.length) {
    $("#good-response").show();
  } else {
    $("#neutral-response").show();
  }

};

//user interface logic
$(document).ready(function(){
  $("form#transportation_survey").submit(function(event){
  event.preventDefault();
  $("input:checkbox[name=warning-signs]:checked").each(function() {
    var inputtedSigns = $(this).val();
    warningSigns.push(inputtedSigns);
  });
  $("input:checkbox[name=health-symptoms]:checked").each(function() {
    var inputtedSymptoms = $(this).val();
    healthSymptoms.push(inputtedSymptoms);
  });
  $("input:checkbox[name=coping-methods]:checked").each(function() {
    var inputtedMethods = $(this).val();
    copingMethods.push(inputtedMethods);
  });
  var stressLevel = new Stress(warningSigns, healthSymptoms, copingMethods);
  stressLevel.stressCheck();
  console.log(stressLevel);
});
});
