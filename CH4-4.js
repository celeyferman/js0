function dataType() {
    for (const n of arguments) {
      console.log(typeof(n));
   }
}

dataType (1, 6.2831, "pi*2", [function(){}, 1], {}, function () {});