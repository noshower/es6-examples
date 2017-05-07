###Day11 - Custom Video Player

第十一天是要做一个自定义的视频播放器，在具有基本样式的前提下，实现视频的播放，暂停，进度条拖拽，音量加减，播放速度加减，快进快退的功能。

查看video的[属性](http://www.w3school.com.cn/jsref/dom_obj_video.asp)和[方法](http://www.runoob.com/tags/ref-eventattributes.html)

这次收获如下：

- 属性 paused：设置或返回视频是否暂停。
- 属性 currentTime：设置或返回视频中的当前播放位置（以秒计）。

>当设置该属性时，播放会跳跃到指定的位置。

- 属性 duration：返回视频的长度（以秒计)。

>如果未设置音频/视频，则返回 NaN (Not-a-Number)。

- 属性 volume：设置或返回视频的音量。

>  规定音频/视频的当前音量。必须是介于 0.0 与 1.0 之间的数字。
例值：
    1.0 是最高音量（默认）
    0.5 是一半音量 （50%）
    0.0 是静音

- 方法 onplay():当媒介数据将要开始播放时发生。
- 方法 onpause():当媒介数据暂停时发生。
- 方法 ontimeupdate():当媒介改变其播放位置时发生。

