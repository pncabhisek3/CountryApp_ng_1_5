let countryApp = angular
  .module("countryApp", ["populationApp"])
  .component("countryComponent", {
    templateUrl: "./country/countryTemplate.html",
    bindings: {},
    controller: function countryContrlller($scope, $element, $compile, countryService, countryDetailService) {
      
      this.$onInit =function(){
        // Rendering child-component dynamically..
      };
      
      this.showPopulationComponent= function(){
        let content = $compile("<population-component/>")($scope);;
        $(".population-target").append(content);
        countryService.setChildComponent(content);
      }

      this.closeCountryComponent= function(){
        countryDetailService.unrenderComponent();
      }
    }
  });
