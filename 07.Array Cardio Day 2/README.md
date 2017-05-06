掌握了五个数组的方法
[文档](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Indexed_collections#数组的方法(array_methods))

#### 1.Array.prototype.some()
some(callback[, thisObject]) 只要数组中有一项在callback上被返回true，就返回true。

    function isNumber(value){
      return typeof value == 'number';
    }
    var a1 = [1, 2, 3];
    console.log(a1.some(isNumber)); //  true

#### 2.Array.prototype.every()
every(callback[, thisObject]) 当数组中每一个元素在callback上被返回true时就返回true。

    function isNumber(value){
      return typeof value == 'number';
    }
    var a1 = [1, 2, 3];
    console.log(a1.every(isNumber)); //true

#### 3.Array.prototype.find()

数组实例的find方法，用于找出第一个符合条件的数组成员。它的参数是一个回调函数，所有数组成员依次执行该回调函数，直到找出第一个返回值为true的成员，然后返回该成员。如果没有符合条件的成员，则返回undefined。
  
    [1, 4, -5, 10].find((n) => n < 0)
    // -5

#### 4.Array.prototype.findIndex()

数组实例的findIndex方法的用法与find方法非常类似，返回第一个符合条件的数组成员的位置，如果所有成员都不符合条件，则返回-1。

    [1, 5, 10, 15].findIndex(function(value, index, arr) {
      return value > 9;
    }) // 2

####  5.Array.prototype.splice();
splice(index, count_to_remove, addElement1, addElement2, ...)从数组移出一些元素，（可选）并替换它们。

    var myArray = new Array ("1", "2", "3", "4", "5");
    myArray.splice(1, 3, "a", "b", "c", "d"); 
    //["1", "a", "b", "c", "d", "5"]