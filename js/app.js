//angular.module("modulo", []); //declara modulo "ejemplo"
angular.module("modulo", [])

/*
FORMA BASICA:
angular.module("modulo", [])
.controller("MiControlador", [ "$scope", function ($scope){
  $scope.nombre="Nancy";
  function imprimir(ejemploParametro){
    alert("Hola "+$scope.nombre);
    console.log( ejemploParametro );
  }
  $scope.imprimir=imprimir;
}]);
*/

.controller("Mi2ctrl", Mi2ctrl);

Mi2ctrl.$inject=[]

function Mi2ctrl(){
  var vm=this;

  vm.nombre; //variable del valor del imput


  vm.persona = {
    nombre: "Nanzo",
    edad: 25,
  }; //objeto en js

  vm.lista=[22,18,12,16,90,24,37];

  function imprimir(ejemploParametro){
    vm.persona.nombre = vm.nombre;
    alert("Hola "+vm.persona.nombre);
    console.log( ejemploParametro );
  }


  // function imprimir(ejemploParametro){
    // alert("Hola "+vm.nombre);
    // console.log( ejemploParametro );
  // }
  vm.imprimir = imprimir;
}
