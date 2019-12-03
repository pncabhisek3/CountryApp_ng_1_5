countryApp.service("countryService", function() {
  this.setScope = function(_scope) {
    this.scope = _scope;
  };
  this.setChildComponent = function(childComp) {
    this.childComponent = childComp;
  };

  this.unrenderComponent = function() {
    $(this.childComponent).remove();
  };

  this.setCountry = function(country) {
    this.scope.country = country;
    this.getOldData();
  };

  this.getOldData= function(){
    return JSON.parse(JSON.stringify(this.scope.country));
  };

  this.onEditCallback = function(){
    $("#clear-country-btn").hide();
    $("#add-country-btn").text("Update");
  };
   
});
