window.onscroll = percent // 执行函数
// 页面百分比
function percent() {
  let a = document.documentElement.scrollTop || window.pageYOffset, // 卷去高度
    b =
      Math.max(
        document.body.scrollHeight,
        document.documentElement.scrollHeight,
        document.body.offsetHeight,
        document.documentElement.offsetHeight,
        document.body.clientHeight,
        document.documentElement.clientHeight
      ) - document.documentElement.clientHeight, // 整个网页高度
    result = Math.round((a / b) * 100), // 计算百分比
    up = document.querySelector('#go-up') // 获取按钮

  if (result <= 95) {
    up.childNodes[0].style.display = 'none'
    up.childNodes[1].style.display = 'block'
    up.childNodes[1].innerHTML = result
  } else {
    up.childNodes[1].style.display = 'none'
    up.childNodes[0].style.display = 'block'
  }
}

// 控制台打印自定义内容
if (window.console) {
  var getTimeState_console = function () {
    var t = new Date().getHours(),
      e = ''
    return (
      4 >= t || t > 22
        ? (e = 'Good Night 🛌<br>')
        : 4 < t && t <= 10
        ? (e = 'Good Morning 🌮')
        : 10 < t && t <= 12
        ? (e = 'Good Noon 🍱')
        : 12 < t && t <= 17
        ? (e = 'Good Afternoon ☕')
        : 17 < t && t <= 22 && (e = 'Good Evening 🍇'),
      e
    )
  }
  Function.prototype.makeMulti = function () {
    let l = new String(this)
    l = l.substring(l.indexOf('/*') + 3, l.lastIndexOf('*/'))
    return l
  }
  let string = function () {
    /*
  _____         _             _ _ _                                      _         _____   _   _     _       _                          _ _ _                           
 |_   _|       | |           | (_) |                                    | |       |_   _| | | | |   (_)     | |                        | (_) |                          
   | |     __ _| |___  ___   | |_| | _____   _   _  ___  _   _      __ _| |__       | |   | |_| |__  _ _ __ | | __  _   _  ___  _   _  | |_| | _____   _ __ ___   ___   
   | |    / _` | / __|/ _ \  | | | |/ / _ \ | | | |/ _ \| | | |    / _` | '_ \      | |   | __| '_ \| | '_ \| |/ / | | | |/ _ \| | | | | | | |/ / _ \ | '_ ` _ \ / _ \  
  _| |_  | (_| | \__ \ (_) | | | |   <  __/ | |_| | (_) | |_| |_  | (_| | | | |_   _| |_  | |_| | | | | | | |   <  | |_| | (_) | |_| | | | |   <  __/ | | | | | |  __/_ 
 |_____|  \__,_|_|___/\___/  |_|_|_|\_\___|  \__, |\___/ \__,_( )  \__,_|_| |_( ) |_____|  \__|_| |_|_|_| |_|_|\_\  \__, |\___/ \__,_| |_|_|_|\_\___| |_| |_| |_|\___(_)
                                              __/ |           |/              |/                                     __/ |                                              
                                             |___/                                                                  |___/                                               */
  }
  console.log(string.makeMulti())
  console.log(getTimeState_console())
  console.log('欢迎访问%cXiaomo Blog', 'color:#1fc7b6;font-weight:bold')
  console.log('在这里相遇很幸运 💛💙')
}
