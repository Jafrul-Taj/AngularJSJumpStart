 function customersController() {
     this.sortBy = 'name';
     this.reverse = false;
     
     this.customers = [{
         joined: '2000-12-02',
         name: 'John',
         city: 'Chandler',
         Order: 9.9956
     }, {
         joined: '1965-01-25',
         name: 'Zed',
         city: 'Las Vegas',
         Order: 19.99
     }, {
         joined: '1995-03-28',
         name: 'Dave',
         city: 'Seattle',
         Order: 101.50
     }, {
         joined: '1944-06-15',
         name: 'Tina',
         city: 'New York',
         Order: 45.99
     }];

     this.doSort = function (propName) {
         this.sortBy = propName;
         this.reverse = !this.reverse;
     };
 }