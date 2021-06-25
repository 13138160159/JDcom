// 1 给tab（a）注册事件
var links=document.querySelectorAll('.jd_tab_head a');
for (var i=0;i<links.length;i++) {
    var link=links[i];

    //让a记录自己的索引
    link.index=i;

    //注册事件
    link.onmouseover=linkMouseover;
}
//事件处理函数
function linkMouseover(){
    //让红线 到当前a下面
    var line=document.querySelector('.jd_line');
    // line.style.left=(this.offsetLeft+12)+'px';
    // console.log(this);
    // 动画
    animate(line,(this.offsetLeft+12));

    // 2 显示对应的详细内容
    var index=this.index;

    // 2.1 让所有的详细内容隐藏
    var uls=document.querySelectorAll('.jb_tab_content ul');
    for (var i=0;i<links.length;i++){
        var ul=uls[i];
        ul.className='';
    }

    //让当前tab对应的详细内容显示
    uls[index].className='current';
}