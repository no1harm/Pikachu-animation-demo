!function(){
    function writeCode(prefix,code,fn){
        let domCode = document.querySelector('#code')
        let styleTag = document.querySelector('#styleTag')
        domCode.innerHTML = prefix || ''
        let n = 0
        let timer = setInterval(()=>{
            n = n+1
            domCode.innerHTML = Prism.highlight(prefix + code.substring(0,n), Prism.languages.css)
            domCode.scrollTop = domCode.scrollHeight
            styleTag.innerHTML = prefix + code.substring(0,n)
            if(n >= code.length){
                window.clearInterval(timer)
                fn && fn.call()
            }
        },10)
    }
    let code = `
/* 先给 Pikachu 加上点背景 */
.preview{
    display:flex;
    height: 100%;
    justify-content:center;
    align-items:center;
    background-color: #fee433;
}
.wrapper{
    width:100%;
    height:165px;
    position: relative;
}
/* 给 Pikachu 加上鼻子 */
.nose{
    border-radius:11px;
    border-width:12px;
    border:11px solid red;
    border-color:black transparent transparent;
    position: absolute;
    top:28px;
    left:50%;
    transform:translateX(-50%);
}
/* 来对眼睛 */
.eye {
    width:49px;
    height:49px;
    background-color: #2e2e2e;
    border-radius:50%;
    position: absolute;
    border:2px solid #000;
}
.eye.left {
    right:50%;
    margin-right: 90px;
}
.eye.right {
    left:50%;
    margin-left: 90px;
}
.eye::before{
    content:'';
    display: block;
    width:24px;
    height:24px;
    background-color: white;
    position: absolute;
    border-radius:50%;
    top:-1px;
    left:6px;
    border:2px solid #000;
}
/* Pikachu 还会脸红  */
.face{
    width:68px;
    height:68px;
    background-color: #fc0d1c;
    border-radius:50%;
    position: absolute;
    top:85px;
    border:2px solid black;
}
.face.left{
    right:50%;
    margin-right: 116px;
}
.face.right{
    left:50%;
    margin-left: 116px;
}
/* 刻画 Pikachu 的上嘴唇 */
.upperLip{
    width:80px;
    height:20px;
    border:3px solid black;
    position: absolute;
    transform:rotate(-20deg);
    border-top: none;
    top:52px;
    background-color: #fee433;
}
.upperLip.left{
    right:50%;
    border-top: none;
    border-right:none;
    border-bottom-left-radius:40px 25px;
}
.upperLip.right{
    transform:rotate(20deg);
    left:50%;
    border-top: none;
    border-left:none;
    border-bottom-right-radius:40px 25px;
}
/* 刻画 Pikachu 的下嘴唇 */
.lowerLip-wrapper{
    width:300px;
    height:108px;
    left:50%;
    position: absolute;
    transform:translateX(-50%);
    bottom:0;
    overflow:hidden;
}
.lowerLip{
    height:3500px;
    width:300px;
    background-color: #990513;
    border:2px solid black;
    position: absolute;
    bottom:0;
    left:50%;
    transform:translateX(-50%);
    border-radius: 200px/2000px;
    overflow:hidden;
}
/* 添加点儿高亮 */
.lowerLip::after{
    content:'';
    position: absolute;
    width:100px;
    height:100px;
    background-color: #fc4a62;
    bottom:0;
    left:50%;
    transform:translateX(-50%);
    bottom:-20px;
    border-radius:50px
}  
/* Done~，完成啦 */
`
    writeCode('',code)
}.call()