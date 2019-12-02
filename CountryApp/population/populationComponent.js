let populationApp = angular
  .module("populationApp", [])

  .component("populationComponent", {
    templateUrl: "./population/populationTemplate.html",
    bindings: {},
    controller: function populationController($scope, countryService) {
      $ctrl = this;

      this.closePopulationComponent = function() {
        countryService.unrenderComponent();
      };
    }
  });
