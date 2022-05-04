var myLib = {
	math: {
		real: {
			add: function (a, b){ return a + b; },
			sub: function (a, b){ return a - b; },
			mul: function (a, b){ return a * b; }
		},
		complex: {
			Num: function (real, img){/*code goes here*/},
			add: function (a, b){ return a + b; },
			sub: function (a, b){ return a - b; },
			mul: function (a, b){ return a * b; }
              },
              matrix: {
	               add: function (a, b){ /*matrix addition*/},
	               sub: function (a, b){ /*matrix subtraction*/},
	               mul: function (a, b){ /*matrix multiplication*/},
	               eye: function (size){ /*identity matrix*/},
	               dot: function (m, a){ /*dot product*/},
	               times:function(a, b){ /*element-wise multiplication*/}
	       }
	}
};


with (myLib.math.real) {
    var answer = sub(add (20, 22), mul(2,5));
}
  
with (myLib.math) {
    var ans = matrix.times(matrix.eye(4),complex.sub(
        new complex.Num (real.add(5, 2), -3), 
        new complex.Num(3,4)
        ));
}
  
realMath = myLib.math.real;
matrixMath = myLib.math.matrix;
complexMath = myLib.math.complex;
  
var answer = realMath.sub(realMath.add (20, 22), realMath.mul(2,5));
var ans = matrixMath.times(matrixMath.eye(4),complexMath.sub(
    new complexMath.Num(realMath.add(5,2),-3),
    new complexMath.Num(3,4)
    ));
  