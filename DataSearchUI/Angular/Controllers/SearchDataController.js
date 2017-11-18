// SearchDataController.js

var mod = angular.module('SearchApp');
mod.controller('SearchDataController',
    [
        "$scope", "$http", "AppNgConstants", function ($scope, $http, appNgConstants) {
            $scope.clientAccounts = [];
            $scope.accountProperties = [];

            $scope.PopUpAlert = function (accountName, propertyName) {
                alert("You have clicked" + accountName + " - " + propertyName);
            };

            $scope.GetProperties = function (index) {
                if (index== null || index == undefined || (index < 0 && index >= $scope.clientAccounts.length)) return;

                var accountId = $scope.clientAccounts[index].AccountId;
                if (!accountId || accountId <= 0) return;

                $http.get(appNgConstants.DataApiUrl + "/" + accountId)
                    .then(function (responseData) {
                        if (responseData.data.length === 0) {
                            $scope.showMsg = true;
                            $scope.textMsg = "You have not made any choices yet!";
                            //spinner.stop();
                        } else {
                            $scope.clientAccounts[index].Properties = [];
                            angular.copy(responseData.data, $scope.clientAccounts[index].Properties);
                            $scope.showMsg = false;
                            //spinner.stop();
                        }
                    }, function (errorData) { }

                    );
            };

            $http.get(appNgConstants.DataApiUrl)
                .then(function (responseData) {
                    if (responseData.data.length === 0) {
                        $scope.showMsg = true;
                        $scope.textMsg = "You have not made any choices yet!";
                        //spinner.stop();
                    } else {
                        angular.copy(responseData.data, $scope.clientAccounts);
                        $scope.showMsg = false;
                        //spinner.stop();
                    }
                }, function (errorData) { }

            );

        }
    ]);