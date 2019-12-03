let appRoot = angular
  .module("appRoot", ["countryDetailsApp"])

  .component("appRootComponent", {
    templateUrl: "./app/appTemplate.html",
    bindings: {},
    controller: function appRootController($scope, $compile) {
      this.$onInit = function() {
        let content = $compile("<country-details-comp/>")($scope);
        $(".other-component").append(content);
      };
    }
  });
  

