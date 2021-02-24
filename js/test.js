// var param = 'aid=799209582&like=1&csrf=bc2b7f03813eca3e7a714b0447b540b8'
// var xhrtest = new XMLHttpRequest();
// xhrtest.open('POST','https://api.bilibili.com/x/web-interface/archive/like',true);
// xhrtest.withCredentials = true;
// xhrtest.setRequestHeader('content-type','application/x-www-form-urlencoded');
// xhrtest.send(param);
// xhrtest.onreadystatechange = function() {
//     if(xhrtest.readyState === 4 && xhrtest.status === 200){
//         console.log(xhrtest.responseText)
//     }
// }
var param = 'params=kYpGfAyOfE04UlLJ%2BaElHWY9v5ls2UjL5O4RjJkPkepQ42W%2FtLmB9o4wtQnW9eYPFJ3%2BjYkrmDMaEMxMKGRd0AolL71QJwV0bw2DtJE5KWN377pgKFTQxjFUUPkC4rkYWF454W4hXJlN8m30%2FqHVXg%3D%3D&encSecKey=607a63de1d77140e9cc8b812f8f403c0cf400e40806f2d9f857d960606ecce1e3e419d2a3a12ffd95a3717ba4ea964500390fbaa8a7b1b989369ba9db3fb3481ef67e773a6f7ed29e271880dd1cdee723bda06e7fd52e3da438a9d5a7cc2c6552315dd6702ace10581b875b4f2757164ac9574e4310dfed47ecaef4458749ec2';
var xhrtest = new XMLHttpRequest();
xhrtest.open('POST','https://music.163.com/weapi/song/enhance/player/url/v1?csrf_token=',true);
xhrtest.withCredentials = true;
xhrtest.setRequestHeader('user-agent','Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.121 Safari/537.36');
xhrtest.setRequestHeader('content-type','application/x-www-form-urlencoded');
xhrtest.send(param);
xhrtest.onreadystatechange = function() {
    if(xhrtest.readyState === 4 && xhrtest.status === 200){
        console.log(xhrtest.responseText)
    }
}