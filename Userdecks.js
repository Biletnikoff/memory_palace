var app = angular.module("app",['ngMaterial', 'ngMdIcons'])

.controller("deck",  function($scope,  $mdDialog, $mdMedia) {
 $scope.d = [
    {front: "a cappella", back: "without accompaniment"},
    {front: "avuncular" , back: "like an uncle"},
    {front: "collusion" , back: "conspiracy"},
    {front: "depredation", back: "preying on, plunder"},
    {front: "emasculate", back: "to castrate"}
  ];
  $scope.showPrompt = function(ev) {
    // Appending dialog to document.body to cover sidenav in docs app
    var confirm = $mdDialog.prompt()
          .title('Add a Deck')
          .textContent('Bowser is a common name.')
          .placeholder('deck')
          .ariaLabel('deez decks')
          .targetEvent(ev)
          .ok('Okay!')
          .cancel('Cancel');
    $mdDialog.show(confirm).then(function(result) {
      $scope.status = 'You decided to name your dog ' + result + '.';
    }, function() {
      $scope.status = 'You didn\'t name your dog.';
    });
  };
  $scope.admin = [
    {
      link : '',
      title: 'Trash',
      icon: 'delete'
    },
    {
      link : 'showListBottomSheet($event)',
      title: 'Settings',
      icon: 'settings'
    }
  ];
});
