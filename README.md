# AngularJS Bootstrap4 Modal
Simple wrapper for bootstarp 4 modal in angular 1

## Demo
https://plnkr.co/edit/uR2kkISXEKfjp5fJED2s

## Dependencies
1. Bootstrap 4
2. Angular JS >= 1.6

## Installation
1. `bower install angularjs-bootstrap4-modal`.
2. Add `wrapper.js` + dependencies
```html
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta/css/bootstrap.min.css">
<script src="https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.6.5/angular.js"></script>
<script src="https://code.jquery.com/jquery-3.2.1.slim.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.11.0/umd/popper.min.js"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta/js/bootstrap.min.js"></script>
<script src="bower_components/angularjs-bootstrap4-modal/wrapper.js></script>
```
## Usage

```js
/**
 * Opens bootstarp modal with templateUrl, controller and modalData.
 * 
 * @param {string} tmplUrl - template Url.
 * @param {string} controllerName - controller to bind to modal.
 * @param {*} [modalData] - this additional data will get injected as $scope.modalData.
 * 
 * @return {object} promise which will be resolved or rejected while closing the modal.
 */
 $bootstrap4Modal.show(tmplUrl, controllerName, modalData) 
```
``` js
/**
 * Closes the modal and resolves the modal promise with given data.
 * 
 * @param {*} data
 */
 $bootstrap4Modal.hide(data)
```
```js
/**
 * Closes the modal and rejects the modal promise with given data.
 * 
 * @param {*} data
 */
 $bootstrap4Modal.cancel(data)
```



