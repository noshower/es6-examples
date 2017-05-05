收获如下：

#### 1.Array.reduce()方法

>reduce() 方法接收一个函数作为累加器（accumulator），数组中的每个值（从左到右）开始缩减，最终为一个值。

**语法**

    arr.reduce([callback, initialValue])

**描述**

reduce 为数组中的每一个元素依次执行回调函数，不包括数组中被删除或从未被赋值的元素，接受四个参数：

   -  previousValu 上一次值
   - currentValue 当前值
   - currentIndex 当前值的索引
   - array 数组

回调函数第一次执行时，previousValue 和 currentValue可能是两个不同值其中的一个，如果reduce有initialValue参数，那么 previousValue等于 initialValue，并且currentValue等于数组中的第一个值；如果reduce没有 initialValue参数，那么previousValue等于数组中的第一个值，currentValue等于数组中的第二个值。

**注意**: 如果没有initialValue参数, reduce从index为1开始执行回调函数, 跳过第一个index. 如果有initialValue参数, reduce将从index为 0 开始执行回调.

如果数组是空的并且没有initialValue参数, 将会抛出TypeError错误. 如果数组只有一个元素并且没有初始值initialValue, 或者有initialValue但数组是空的, 这个唯一的值直接被返回而*不会调用回调函数*.

通常来说提供一个initialValue初始值更安全一点, 因为没有的话会出现3种可能的输出结果, 如下面的例子所示.

例子：

    var total = [0, 1, 2, 3].reduce(function(a, b) {
        return a + b;
    }, 0);
    // total =6

#### 2.console.table()

**通过console.table()打印数组**

      var languages = [
      { name: "JavaScript", fileExtension: ".js" },
      { name: "TypeScript", fileExtension: ".ts" },
      { name: "CoffeeScript", fileExtension: ".coffee" }
    ];
    console.log(languages);

**通过console.table()打印对象**

    var languages = {
        csharp: { name: "C#", paradigm: "object-oriented" },
        fsharp: { name: "F#", paradigm: "functional" }
    };
    console.table(languages);

**过滤显示的属性**

如果你想限定每一列是特定的属性，你还可以将他们的键作为一个数组，传给console.table()，作为其第二个参数： 

    console.table(languages, ["name", "paradigm"]);

如果只是想显示一个属性，则传字符串就足够了：

    console.table(languages, "name");