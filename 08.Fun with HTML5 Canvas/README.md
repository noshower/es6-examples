### Day8 Fun with HTML5 Canvas
这一天练习的是一个canvas画板，按下鼠标可以随意图画。
canva是 HTML5 新增的元素，可使用JavaScript脚本来绘制图形。
下面是我对canvas基础内容的笔记；

#### 定义canva元素

        <canvas id="canvas"></canvas>

#### canvas.getContext()

**语法：**

 >canvas.getContext(contextType, contextAttributes);

HTMLCanvasElement.getContext() 方法返回canvas 的上下文或者返回 null(如果上下文没有定义).

通过如下代码可以获取 canvas2d 上下文:

    let canvas = document.getElementById("canvas");
    let ctx = canvas.getContext("2d");

现在你已经获取到了2D 画布的渲染上下文，可以使用它画你想画的了.

#### 设置canvas大小

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

#### ctx.strokeStyle 

**语法**

>ctx.strokeStyle = color;

color值可以是可以转换成 CSS color 的值。

      ctx.strokeStyle = '#BADA55';

#### ctx.lineJoin

ctx.lineJoin 是 Canvas 2D API 用来设置2个长度不为0的相连部分（线段，圆弧，曲线）如何连接在一起的属性（长度为0的变形部分，其指定的末端和控制点在同一位置，会被忽略）

**语法**
>ctx.lineJoin = "bevel";
  ctx.lineJoin = "round";
  ctx.lineJoin = "miter";

**选项**

>此属性有3个值： round, bevel and miter。默认值是 miter。注意：如果2个相连部分在同一方向，那么lineJoin不会产生任何效果，因为在那种情况下不会出现连接区域。
- round
通过填充一个额外的，圆心在相连部分末端的扇形，绘制拐角的形状。 圆角的半径是线段的宽度。
- bevel
在相连部分的末端填充一个额外的以三角形为底的区域， 每个部分都有各自独立的矩形拐角。
- miter
通过延伸相连部分的外边缘，使其相交于一点，形成一个额外的菱形区域。这个设置可以通过 miterLimit 属性看到效果。

     ctx.lineJoin = 'round';

#### ctx.lineWidth

ctx.lineWidth是 Canvas 2D API 设置线段厚度的属性（即线段的宽度）。当获取属性值时，它可以返回当前的值（默认值是1.0 ）。 当给属性赋值时， 0、 负数、 Infinity 和 NaN 都会被忽略；除此之外，都会被赋予一个新值。

**语法**

> ctx.lineWidth = value;

     ctx.lineWidth=50;

#### ctx.globalCompositeOperation

ctx.globalCompositeOperation  属性设置要在绘制新形状时应用的合成操作的类型，其中type是用于标识要使用的合成或混合模式操作的字符串。

**语法**

>globalCompositeOperation = type
[可以选择的值](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Compositing)：
source-over |  source-in | source-out |source-atop
destination-over | destination-in | destination-out | destination-atop
lighter | copy | xor | multiply | screen | overlay
darken | lighten | color-dodge | color-burn | hard-light
soft-light | difference | exclusion | hue | saturation | color | luminosity



#### ctx.beginPath()
ctx.beginPath() 是 Canvas 2D API 通过清空子路径列表开始一个新路径的方法。 当你想创建一个新的路径时，调用此方法。

    ctx.beginPath();

#### ctx.moveTo()
ctx.moveTo() 是 Canvas 2D API 将一个新的子路径的起始点移动到(x，y)坐标的方法。

**语法**

 >ctx.moveTo(x, y); // 点的x坐标 点的y坐标

####   ctx.lineTo()
ctx.lineTo() 是 Canvas 2D API 使用直线连接子路径的终点到x，y坐标的方法（并不会真正地绘制）

**语法**

 >ctx.lineTo(x, y); //直线终点的x坐标 直线终点的y坐标

#### ctx.stroke();
ctx.stroke() 是 Canvas 2D API 使用非零环绕规则，根据当前的画线样式，绘制当前或已经存在的路径的方法。

**语法**
>ctx.stroke();

#### e.offsetX,e.offsetY
通过监听鼠标的事件，我们可以得到指针相对当前坐标系的border左上角开始的坐标

#### HSL颜色
**语法**
> HSL(H,S,L)
- H：Hue(色调)。0(或360)表示红色，120表示绿色，240表示蓝色，也可取其他数值来指定颜色。取值为：0 - 360
- S：Saturation(饱和度)。取值为：0.0% - 100.0%
- L：Lightness(亮度)。取值为：0.0% - 100.0%

     background-color: hsl(360, 50%, 50%);