countryDetailsComp.service("countryDetailService", function(){
    this.setChildComponent= function(childComp){
        this.childComponent= childComp;
    }

    this.unrenderComponent= function(){
        $(this.childComponent).remove();
    }
});