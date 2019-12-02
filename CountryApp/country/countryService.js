countryApp.service("countryService", function(){
    this.setChildComponent= function(childComp){
        this.childComponent= childComp;
    }

    this.unrenderComponent= function(){
        $(this.childComponent).remove();
    }
})