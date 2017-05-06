偶然在网上看到Wes Bos’ [#JavaScript30](https://javascript30.com/)，引起了我的兴趣。平时写代码用惯了各种库，都不知道自己原生javascript的水平。于是乎，我想挑战自己。
下面我将记录，每天挑战的收获。

# Day1  Drum Kit
收获如下：
#### 1.es6字符串模板：使用$传递

    `audio[data-key="${e.keyCode}"]`

#### 2.音频播放与重置：

     let audio=document.querySelect('audio');
    audio.currentTime=0;//重置播放时间
    audio.play();//播放音频

#### 3.监听动画结束事件（transitionend）

    let element = document.getElementById("slidingMenu");
    element.addEventListener("transitionend", function(event) {
      //当transform动画结束后，改变innerHTML;
      if(e.propertyName !== 'transform'){
     //e.propertyName 与transition关联的css属性名称；
        return;
      }else{
        element.innerHTML = "Done!";
      }
    }, false);

#### 4.将类数组转为真正的数组，Array.from
    
    let keys = Array.from(document.querySelectorAll('.key'));

此时keys成了真正的数组，因此可以使用数组的forEach函数了。