// Class to represent a row in view model
function Item(id) {
    var self = this;
    self.id = id;
}

// Overall viewmodel for this screen, along with initial state
function ItemsViewModel() {
    var self = this;

    // Editable data
    self.myItems = ko.observableArray([
        new Item(1),
        new Item(2)
    ]);

    // Add item
    self.add = ()=>{ 
        self.myItems.push(new Item(self.myItems().length));
        console.log("click");
     }
}

//init binding to the html page
ko.applyBindings(new ItemsViewModel());


