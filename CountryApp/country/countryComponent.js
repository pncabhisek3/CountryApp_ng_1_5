let countryApp = angular
  .module("countryApp", ["populationApp"])
  .component("countryComponent", {
    templateUrl: "./country/countryTemplate.html",
    bindings: {},
    controller: function countryContrlller($scope, $element, $compile) {
      // Rendering child-component dynamically..
      let content = $compile("<population-component/>")($scope);
      $(".another-child-target").append(content);
    }
  });
