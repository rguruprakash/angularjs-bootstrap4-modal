(function() {
  angular
    .module('bootstrap4-modal', [])
  
  angular
    .module('bootstrap4-modal')
    .service('$bootstrap4Modal', bootstrap4ModalService);

  bootstrap4ModalService.$inject = [
    '$compile', 
    '$rootScope', 
    '$templateRequest', 
    '$templateCache', 
    '$q',
    '$controller'
  ];
    
  function bootstrap4ModalService($compile, $rootScope, $templateRequest, $templateCache, $q, $controller) {
    var el;
    var modalDeferred;
    
    var getTemplate = function(tmplUrl) {
      var deferred = $q.defer();
      var template = $templateCache.get(tmplUrl);
      if(!template) {
        $templateRequest(tmplUrl).then(function(response) {
          deferred.resolve(response);
        }, function(error) {
          deferred.reject(error);
        });
      } else {
        deferred.resolve(template);
      }
      return deferred.promise;
    }
    
    /**
     * Opens bootstarp modal with templateUrl, controller and modalData.
     * 
     * @param {string} tmplUrl - template Url.
     * @param {string} controllerName - controller to bind to modal.
     * @param {*} [modalData] - this additional data will get injected as $scope.modalData.
     * 
     * @return {object} promise which will be resolved or rejected while closing the modal.
     */
    var show = function(tmplUrl, controllerName, modalData) {
      hide();
      el = undefined;
      modalDeferred = $q.defer();
      getTemplate(tmplUrl).then(function(template) {
        var $scope = $rootScope.$new();
        if(modalData) {
          $scope.modalData = modalData;
        }
        var ctrl = $controller(controllerName, {
          $scope: $scope
        });
        var compiledData = $compile(template)($scope);
        compiledData.controller = ctrl;
        el = $(compiledData);
        el.appendTo('body');
        el.modal('show');
      }, function(error) {
        modalDeferred.reject(error);
      });
      return modalDeferred.promise;
    }
    
    var close = function() {
      el.modal('hide');
      el.on('hidden.bs.modal', function (e) {
        el.remove();
      });
    }
    
    /**
     * Closes the modal and resolves the modal promise with given data.
     * 
     * @param {*} data
     */
    var hide = function(data) {
      if(el && modalDeferred) {
        close();
        modalDeferred.resolve(data);
      }
    }
    
    /**
     * Closes the modal and rejects the modal promise with given data.
     * 
     * @param {*} data
     */
    var cancel = function(data) {
      if(el && modalDeferred) {
        close();
        modalDeferred.reject(data);
      }
    }
    
    return {
      show: show,
      hide: hide,
      cancel: cancel
    }
  }
})();
