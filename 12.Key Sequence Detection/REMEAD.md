### Day12  Key Sequence Detection
第十二天的目标是要完成按键按下的序列侦查，比如我们预设一个字符串“haha”，只要用户在浏览器中按顺序按下这四个字母，就可以触发所绑定的事件，这个功能也经常被公司在浏览器中为用户埋下小的把戏和惊喜。

收获：
#### Array.prototype.splice()
splice() 方法通过删除现有元素和/或添加新元素来更改数组的内容。
**语法**
>array.splice(start)
  array.splice(start, deleteCount) 
  array.splice(start, deleteCount, item1, item2, ...)

**参数**
- start​
指定修改的开始位置（从0计数）。如果超出了数组的长度，则从数组末尾开始添加内容；  如果start为负，则将其视为length + start，此处length为数组的长度。如果start的绝对值大于length，那么start视为0。
- deleteCount 可选
整数，表示要移除的数组元素的个数。如果 deleteCount 是 0，则不移除元素。如果 deleteCount 大于start 之后的元素的总数，则从 start 后面的元素都将被删除（含第 start 位）。
如果deleteCount被省略，则其相当于(arr.length - start)。
- item1, item2, ... 可选
要添加进数组的元素,从start 位置开始。如果不指定，则 splice() 将只删除数组元素。

例子：
 
    var myFish = ["angel", "clown", "mandarin", "surgeon"];

    //从第 2 位开始删除 0 个元素，插入 "drum"
    var removed = myFish.splice(2, 0, "drum");
    //运算后的 myFish:["angel", "clown", "drum", "mandarin",    "surgeon"]
    //被删除元素数组：[]，没有元素被删除

    //从第 3 位开始删除 1 个元素
    removed = myFish.splice(3, 1);
    //运算后的myFish：["angel", "clown", "drum", "surgeon"]
    //被删除元素数组：["mandarin"]

    //从第 2 位开始删除 1 个元素，然后插入 "trumpet"
    removed = myFish.splice(2, 1, "trumpet");
    //运算后的myFish: ["angel", "clown", "trumpet", "surgeon"]
    //被删除元素数组：["drum"]

    //从第 0 位开始删除 2 个元素，然后插入 "parrot", "anemone" 和 "blue"
    removed = myFish.splice(0, 2, "parrot", "anemone", "blue");
    //运算后的myFish：["parrot", "anemone", "blue", "trumpet",   "surgeon"]
    //被删除元素的数组：["angel", "clown"]

    //从第 3 位开始删除 2 个元素
    removed = myFish.splice(3, Number.MAX_VALUE);
    //运算后的myFish: ["parrot", "anemone", "blue"]
    //被删除元素的数组：["trumpet", "surgeon"]

#### String.prototype.includes()
includes() 方法用于判断一个字符串是否包含在另一个字符串中，根据情况返回true或false。
**语法**
> str.includes(searchString[, position])

**参数**

> 
- searchString
要在此字符串中搜索的字符串。
- position
可选。从当前字符串的哪个索引位置开始搜寻子字符串；默认值为0。
- 返回值
如果当前字符串包含被搜寻的字符串，就返回true；否则，返回false。

例子：

    var str = 'To be, or not to be, that is the question.';
    console.log(str.includes('To be'));       // true
    console.log(str.includes('question'));    // true
    console.log(str.includes('nonexistent')); // false
    console.log(str.includes('To be', 1));    // false
    console.log(str.includes('TO BE'));       // false