let countryApp = angular
  .module("countryApp", ["populationApp"])
  .component("countryComponent", {
    templateUrl: "./country/countryTemplate.html",
    bindings: {},

    controller: function countryContrlller(
      $scope,
      $element,
      $compile,
      countryService,
      countryDetailService
    ) {
      countryService.setScope(this);
      this.country = null;
      this.$onInit = function() {
        // Rendering child-component dynamically..

        this.empty_country = {
          name: null,
          capital: null
        };
        this.country = JSON.parse(JSON.stringify(this.empty_country));
      };

      this.showPopulationComponent = function() {
        let content = $compile("<population-component/>")($scope);
        $(".population-target").append(content);
        countryService.setChildComponent(content);
      };

      this.closeCountryComponent = function() {
        countryDetailService.unrenderComponent();
      };

      this.addCountryData = function() {
        if (!this.country.name) return;
        // Add new country / update country to database..
        if (countryDetailService.isEditEnabled) {
          this.country = countryDetailService.updateCountry(
            this.country,
            countryDetailService.index
          );
        } else countryDetailService.addCountry(this.country);
        this.clearCountryData();
      };

      this.clearCountryData = function() {
        this.country = this.empty_country;
      };
    }
  });
