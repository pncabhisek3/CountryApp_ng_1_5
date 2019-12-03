countryDetailsComp.service("countryDetailService", function() {
  this.scope = null;
  this.isEditEnabled = false;
  this.index= null;
  this.setScope = function(_scope) {
    this.scope = _scope;
  };

  this.setChildComponent = function(childComp) {
    this.childComponent = childComp;
  };

  this.unrenderComponent = function() {
    $(this.childComponent).remove();
  };

  this.addCountry = function(country) {
    this.scope.countries.unshift(country);
  };

  this.setCountries = function(countries) {
    this.scope.countries = countries;
  };

  this.updateCountry= function(country, idx){
    this.scope.countries.splice(idx, 1);
    this.scope.countries.splice(idx,0,country);
  };

});
