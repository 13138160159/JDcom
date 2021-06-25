/**
 *
 * @authors Your Name (you@example.org)
 * @date    2018-11-07 19:15:18
 * @version $Id$
 */

function animate (element,target,callback) {
    // 判断之前是否开启了定时器
    if (element.timerId) {
        clearInterval(element.timerId);
    }

    // 让每一个执行动画的元素，记录自己的定时器
    element.timerId=setInterval(function(){
        // 当前坐标
        var current=element.offsetLeft;
        // 步进
        var step=10;

        // 当当前位置 > 目标位置step应该是负数
        if(current>target){
            step=-Math.abs(step);
        }

        // 编码要避免硬编码
        if(Math.abs(current-target)<=Math.abs(step)){
            element.style.left=target+'px';
            clearInterval(element.timerId);
            if(callback){
                callback();
            }
            return;
        }
        current+=step;
        element.style.left=current+'px';
    },20);
}