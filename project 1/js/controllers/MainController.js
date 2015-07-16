app.controller('MainController',['$scope', function($scope) {
  $scope.title = 'I like Angular. Keep studying';
  $scope.promo = 'method?';
  $scope.products = [
  {
    name: 'The Book of Trees',
    price: 19,
    pubdate: new Date('2014', '03', '08'),
    cover: 'img/the-book-of-trees.jpg',
    likes: 0,
    dislikes: 0
  },
  {
    name: 'Program or be Programmed',
    price: 8,
    pubdate: new Date('2013', '08', '01'),
    cover: 'img/program-or-be-programmed.jpg',
    likes: 0,
    dislikes: 0
  },
    
    {
    name: 'legend of drizzt: homeland',
    price: 11,
    pubdate: new Date('1995', '03', '20'),
    cover: 'http://ecx.images-amazon.com/images/I/51RWkb7OlGL._SY344_BO1,204,203,200_.jpg',
    likes: 0,
    dislikes: 0
    },

    {
    name: 'legend of drizzt: exile',
      price: 11,
      pubdate: new Date('1990', '12', '29'),
      cover: 'http://ecx.images-amazon.com/images/I/51MHC5A5MHL.jpg',
    likes: 0,
    dislikes: 0
    }
];
$scope.plusOne = function(index){
$scope.products[index].likes += 1;
};

$scope.minusOne = function(index){
  $scope.products[index].dislikes +=1;
};
}]);
