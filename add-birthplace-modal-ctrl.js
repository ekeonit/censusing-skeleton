
angular.module('censusing')
    .controller('AddBirthplaceModalCtrl', ['$scope', '$modalInstance'
        function ($scope, $modalInstance) {

            // hack for angular-ui modal form scope bug
            $scope.form = {};

        }
    ]);