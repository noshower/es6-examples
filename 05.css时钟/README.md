对一些css属性有了更深理解：

#### 1.box-shadow属性

box-shadow 属性向**边框**添加一个或多个阴影。

语法：

    box-shadow: h-shadow v-shadow blur spread color inset;

注释：box-shadow 向框添加一个或多个阴影。该属性是由逗号分隔的阴影列表，每个阴影由 2-4 个长度值、可选的颜色值以及可选的 inset 关键词来规定。省略长度的值是 0。

   | 选择器        | 权重       | 
   | -------------   |:-------------:| 
   | h-shadow    |  必需。水平阴影的位置。允许负值。 | 
   |v-shadow     | 必需。垂直阴影的位置。允许负值。|
   |blur    | 可选。模糊距离。	 |
   | spread | 	可选。阴影的尺寸。|
   | color | 可选。阴影的颜色。|
   | inset | 可选。将外部阴影 (outset) 改为内部阴影。|

示例：

     box-shadow: 0 0 0 4px rgba(0, 0, 0, 0.1), 
      inset 0 0 0 3px #EFEFEF, 
      inset 0 0 10px black, 
      0 0 10px rgba(0, 0, 0, 0.2);

#### 1.transition属性

>css的transition允许css的属性值在一定的时间区间内平滑地过渡。这种效果可以在鼠标单击、获得焦点、被点击或对元素任何改变中触发，并圆滑地以动画效果改变CSS的属性值。

**定义和用法**
transition 属性是一个简写属性，用于设置四个过渡属性：

- transition-property
- transition-duration
- transition-timing-function
- transition-delay

**注释：请始终设置transition-duration属性，否则时长为 0，就不会产生过渡效果。**

语法：

    transition: property duration timing-function delay;

  | 选择器        | 权重       | 
  | -------------   |:-------------:| 
  |transition-property|规定设置过渡效果的 CSS 属性的名称。|
  |transition-duration|	规定完成过渡效果需要多少秒或毫秒。|
  |transition-timing-function|规定速度效果的速度曲线。|
  |transition-delay|定义过渡效果何时开始。|

例子：

     <style>
        .box {
            width: 100px;
            height: 100px;
            border-radius: 50%;
            transition: all 1s ease-out; /**设置all 只要css属性改变，就能产生动画，以平滑过渡**/
            background: red;
        }
        
        .active {
            width: 200px;
            height: 200px;
        }
    </style>
    <div class="box"></div>
    <script>
        setTimeout(function() {
            document.querySelector('.box').classList.add('active');
        }, 1000);
    </script>