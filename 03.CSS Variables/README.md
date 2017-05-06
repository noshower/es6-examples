收获如下：

#### 1. :root

> :root伪类匹配文档树的根元素。应用到HTML，:root 即表示为<html>元素，除了优先级更高外，相当于html标签选择器。

语法：

    :root{样式属性}

#### 2.Custom properties 

前缀为--example-name的属性名称表示包含一个值的自定义属性。

自定义属性参与级联：它们中的每一个可以出现多次，变量的值将与由级联算法决定的自定义属性中定义的值相匹配。

语法：

    --somekeyword: left;
    --somecolor: #0000ff;
    --somecomplexvalue: 3px 6px rgb(20, 32, 54);

**例子：**

** HTML**

    <p id="firstParagraph">This paragraph should have a blue background and yellow text.</p>
    <p id="secondParagraph">This paragraph should have a yellow background and blue text.</p>
    <div id="container">
      <p id="thirdParagraph">This paragraph should have a green background and yellow text.</p>
   </div>

**CSS**

    :root {
      --first-color: #488cff;
      --second-color: #ffff8c;
    }
    #firstParagraph {
      background-color: var(--first-color);
      color: var(--second-color);
    }
    #secondParagraph {
      background-color: var(--second-color);
      color: var(--first-color);
    }
    #container {
      --first-color: #48ff32;
    }
    #thirdParagraph {
      background-color: var(--first-color);
      color: var(--second-color);
    }

#### 3.dataset属性

> HTML5在Element对象上定义了dataset属性。该属性指代一个对象，它的各属性对应于去掉前缀的data-属性。

注意，dataset属性是Element的data-属性的实时、双向接口。设置或删除dataset的一个属性就等同于设置或移除对应元素的data-属性。

      <div id="user" data-id="1234567890" data-user="johndoe" data-date-of-birth>John Doe</div>
    <script>
      let el = document.querySelector('#user');
      el.dataset.dateOfBirth = '1960-10-03';
      el.dataset.someDataAttr = 'mydata';
    </script>

#### 4.setProperty,getPropertyValue,removeProperty

-  getPropertyValue()方法，使用属性名获取元素style属性中的值
-  setProperty()方法，该目的是向元素的style属性中添加某个CSS属性
-  removeProperty() 方法，该属性的目的是要移除元素的style属性中的某个CSS属性
    
例子：

     <div class="box" style=" width: 200px;height: 200px;background: red;opacity: 0.9;border-radius: 50%;">

    </div>
    <button type="button" id="remove">删除背景</button>
    <button type="button" id="set">设置背景</button>
    <button type="button" id="get">获取背景</button>
    <script>
        let node = document.querySelector('.box');
        document.getElementById('remove').addEventListener('click', function() {
            node.style.removeProperty('background');

        });
        document.getElementById('set').addEventListener('click', function() {
            node.style.setProperty('background', 'blue');
        });
        document.getElementById('get').addEventListener('click', function() {
            console.log(node.style.getPropertyValue('background'));
        });
    </script>