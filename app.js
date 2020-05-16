// Class to represent a row in the seat reservations grid
function Item(id) {
    var self = this;
    self.id = id;
}

// Overall viewmodel for this screen, along with initial state
function ItemsViewModel() {
    var self = this;

    // Non-editable catalog data - would come from the server

    // Editable data
    self.myItems = ko.observableArray([
        new Item(1),
        new Item(2)
    ]);

    self.add = ()=>{ 
        self.myItems.push(new Item(self.myItems().length));
        console.log("click");
     }
}

ko.applyBindings(new ItemsViewModel());


