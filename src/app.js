
const app = angular.module('myApp', ['angularMoment']);

    app.run((amMoment) => {
        amMoment.changeLocale('pl');
    })

    app.controller('myCtrl', ($scope, $http, moment, $location, $anchorScroll) => {

        $scope.url = window.location.href;

    $http.get('http://localhost:3000').then( (response) => {

        $scope.comments = response.data.comments;
        $scope.initialLength = $scope.comments.length;
        $scope.profile = response.data.profile;
    },
        (err) => {
            console.log("Something went wrong! " + err);
        }
    
    );



    $scope.addComment = () => {

        $scope.comments.push(
            {
                "name":"Mike Ross",
                "body": $scope.newComment,
                 time: new Date() 
            }
        );

        scrollToBottom();
        $scope.newComment = '';
    }

    $scope.addLike = () => {

        $scope.profile.likes++;
    }

    $scope.addFollowers = () => {
        
        $scope.profile.followers++;
    }

});

let scrollToBottom = () => {
    let myDiv = document.getElementById('wrapper');
    myDiv.scrollTop = myDiv.scrollHeight;
}
