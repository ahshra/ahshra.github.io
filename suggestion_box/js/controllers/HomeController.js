app.controller("HomeController", [
	"$scope", 
	"suggestions", 
	function($scope, suggestions){
    $scope.helloWorld = "Hello Angular JS!";
    $scope.posts = suggestions.posts;
    $scope.addSuggestion = function(){
      if(!$scope.title || $scope.title === ""){
          return;
      } 
      $scope.posts.push({
          title: $scope.title,
          upvotes: 0,
          comments: []
      });
      $scope.title = ""; //clearing input
    };
      $scope.upVote = function(post){
      post.upvotes += 1;  
    };
}]);