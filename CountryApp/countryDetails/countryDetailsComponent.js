// ---------------- Angular-1 countryDetailsComp application demo -----------------
let countryDetailsComp = angular
  .module("countryDetailsApp", ["countryApp"])

  .component("countryDetailsComp", {
    templateUrl: "./countryDetails/countryDetails.html",
    bindings: {},

    controller: function countryDetailsController(
      $scope,
      $element,
      $compile,
      countryDetailService,
      countryService
    ) {
      let $countryCtrl = this;
      countryDetailService.setScope(this);

      this.renderChildComponent = function() {
        let content = $compile("<country-component/>")($scope);
        countryDetailService.setChildComponent(content);
        $(".child-target").append(content);
      };

      $countryCtrl.countries = null;
      this.$onInit = function() {
        // By default "isEditEnabled" will be false
        countryDetailService.isEditEnabled = false;
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
        this.renderChildComponent();
      };

      this.editCountry = function(idx) {
        // Rendering child-component dynamically..
        countryDetailService.isEditEnabled = true;
        countryDetailService.index = idx;
        countryService.setCountry(JSON.parse(JSON.stringify($countryCtrl.countries[idx])));
        countryService.onEditCallback();
      };

      this.deleteCountry = function(idx) {
        $countryCtrl.countries.splice(idx, 1);
      };
    }
  });
