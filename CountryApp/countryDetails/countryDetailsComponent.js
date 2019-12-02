// ---------------- Angular-1 countryDetailsComp application demo -----------------

// "countryDetailsComp" initialization.
let countryDetailsComp = angular
  .module("countryDetailsApp", ["countryApp"])

  .component("countryDetailsComp", {
    templateUrl: "./countryDetails/countryDetails.html",
    bindings: {},

    controller: function countryDetailsController($scope, $element, $compile, countryDetailService) {
      var $countryCtrl = this;
      $countryCtrl.countries = null;
      this.$onInit = function() {
        $countryCtrl.countries = [
          {
            name: "India",
            capital: "New Delhi"
          },
          {
            name: "China",
            capital: "Bejing"
          },
          {
            name: "England",
            capital: "London"
          },
          {
            name: "Austrelia",
            capital: "Cidney"
          }
        ];
      };
      this.showChildComponent = function() {
        // Rendering child-component dynamically..
        let content = $compile("<country-component/>")($scope);
        countryDetailService.setChildComponent(content);
        $(".child-target").append(content);
      };
    }
  });
