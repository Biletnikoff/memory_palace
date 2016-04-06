var app = angular.module("app",['ngMaterial', 'ngMdIcons'])

.controller("deck",  function($scope,  $mdDialog, $mdMedia) {

 $scope.d = [
   {
     deckname: 'NewDeck',
     deck: [
      {front: "a cappella", back: "without accompaniment"},
      {front: "avuncular" , back: "like an uncle"},
      {front: "collusion" , back: "conspiracy"},
      {front: "Javascript", back: "pain in the ass"},
      {front: "Angular", back: "$scope is fun to work with"}
    ]

  },
  {
    deckname:'The Newer Deck',
    deck:[
     {front: "a cppelsla", back: "without accompaniment"},
     {front: "1221ular" , back: "like an uncle"},
     {front: "coll21usion" , back: "conspiracy"},
     {front: "depred3ation", back: "preying on, plunder"},
     {front: "emascul3ate", back: "to castrate"}
   ]

 }
  ];
 this.topDirections = ['left', 'up'];
 this.bottomDirections = ['down', 'right'];
 this.isOpen = false;
 this.availableModes = ['md-fling', 'md-scale'];
 this.selectedMode = 'md-fling';
 this.availableDirections = ['up', 'down', 'left', 'right'];
 this.selectedDirection = 'left';
  $scope.showPrompt = function(ev) {
    // Appending dialog to document.body to cover sidenav in docs app
    var confirm = $mdDialog.prompt()
          .title('Add a Deck')
          .textContent('Your decks are belong to us')
          .placeholder('deck name')
          .targetEvent(ev)
          .ok('Okay!')
          .cancel('Cancel');
    return $mdDialog.show(confirm).then(function(name){
        $scope.addDeck(name);

    }, function(name) {
      
    });
      // $scope.d.push(obj);
      // $scope.d = [
        // {
        //   deckname: 'decktesfdssdfdsfds',
        //   deck:[]
        // }
      // ];
      // $scope.$apply(function(){
      //   $scope.d = $scope.d.concat(obj);
      //   console.log('inside apply');
      // });
      // console.log(decksname);
      // console.log($scope.d);




  };
$scope.addDeck = function(name){
  $scope.d.push({
    deckname: name,
    deck:[]
  });

};
$scope.cycleDeck = function(){
  $scope.index = 0;
  if ($scope.index >= $scope.meals.length-1){
      $scope.index = 0;
  }else{

    $scope.index += 1
  }
};
  var originatorEv;
$scope.openMenu = function($mdOpenMenu, ev) {
  originatorEv = ev;
  $mdOpenMenu(ev);
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
  $scope.showDeck = function($event, $index) {
    console.log($index);
    var parentEl = angular.element(document.body);
    $mdDialog.show({
      parent:parentEl,
      targetEvent: $event,
      template:
      '<md-dialog flex="60" aria-label="List dialog">' +
     '  <md-dialog-content>'+
     '    <md-card>'+
     '     <md-card-title>' +
     '      <md-card-title-text>'+
     '        <span class="md-headline">Deck Name</span>'+
     '      </md-card-title-text>'+
     '     </md-card-title>'+
     '     <md-card-content>'+
     '<md-list-item ng-model="decks">'+


    ' <div class="flip"> '+
    '  <div class="card" ng-class="{flipped:isFlipped}">'+
    '       <div class="face front"> '+
    '         <p> {{decks.deck[deckIndex].front}}</p>'+
    '     </div> '+
    '      <div class="face back"> '+
    '       <p> {{decks.deck[deckIndex].back}}</p>'+
    '       </div> '+

    '  </div>'+
    '</div>'+
     '     </md-card-content>'+

     '<md-card-actions layout="row" layout-align="end center" >'+
     '  <md-button ng-click="isFlipped=!isFlipped">Flip</md-button>'+
     '  <md-button>Again</md-button>'+
     '  <md-button ng-click="cycleDeck()">Next</md-button>'+
     '    </md-list-item></md-list>'+
     '</md-card>'+
     '  </md-dialog-content>' +
     '  <md-dialog-actions>' +
     '    <md-button ng-click="closeDialog()" class="md-primary">' +
     '      Close Deck' +
     '    </md-button>' +
     '  </md-dialog-actions>' +
     '</md-dialog>',
     locals: {
       items: $scope.d[$index]
     },
     controller: dialogCtrl

   });
  }
  function dialogCtrl($scope, $mdDialog, items) {
      $scope.deckIndex = 0;

       $scope.decks = items;
       $scope.closeDialog = function() {
         $mdDialog.hide();
       }
       $scope.cycleDeck = function(){
         $scope.isFlipped=false;
         if ($scope.deckIndex >= $scope.decks.length-1){
             $scope.deckIndex = 0;
         }else{

           $scope.deckIndex += 1
         }
       };
   };
});
