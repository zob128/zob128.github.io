function event1(){
    document.getElementById("tip1").innerHTML=document.getElementById("text1").value;
}
function event2(){
    document.getElementById("tip1").innerHTML = "noa";
    var param = 'params=fI1xT0c6t8lLC%2FQ8wAq4EfPfEG4IM3N1MDvPZU5I%2Fn%2FEi9mSjlUudiYe%2BGSq3tuxcGrzlk2xtE50L%2F07IqQ5bjFjSLfxESoGSW24P3CWYYPmLmep2mH9zovrvgVaX4Z66Cwu9UfWtsSMdxczm5z01A%3D%3D&encSecKey=75c6e564bcc245ff719cc4d2414b7d07c9c414d380aba58a29aff40e04b9fc3bdc7b020b3ff641e72a03c3fe49c6ec9fc49a4922b7b746718f749be6ea7a3fa61036bef3dc503c52ca69711c5874906b4db4831152e156aa0d73b88c49ebcc4c30231bf23ec15ba1250535268c0a79a78e832b396f4f56fd2e5497e4bba45611';
    var xhrtest = new XMLHttpRequest();
    xhrtest.open('POST','https://music.163.com/weapi/song/enhance/player/url/v1?csrf_token=',true);
    //xhrtest.setRequestHeader('','');
    //xhrtest.setRequestHeader('Authorization','_iuqxldmzr_=32; _ntes_nnid=25e99ff8c6f054e21d3bc1929ebdfe47,1613380622979; _ntes_nuid=25e99ff8c6f054e21d3bc1929ebdfe47; NMTID=00OJKBLttlMKjsqE0sai-705xxZ6v4AAAF3pPrnfg; WM_TID=USgG0%2B47dORFAAUFFAcqK8kh64i4%2B0Hn; WEVNSM=1.0.0; WNMCID=nbtleb.1614057907794.01.0; WM_NI=L%2BJIPfrumsmdYFnUlw4%2BR3AQ4bMcbOAXiq29fauE1jKRJa7dY5CwsjM807iOGbmfL9tr0H1Q1VDMD4LI2Zw9mwMPBniBrItyaXtQWb2gbj1rW9LmYBD%2FlKebsHm2j3qpZlU%3D; WM_NIKE=9ca17ae2e6ffcda170e2e6eeb4d93a9b93fabaeb72868e8ea2d54e938b8abaf45ced88a385bb69a3b0feb8dc2af0fea7c3b92a90f586aad36eb2aba394f0709b9aa2b6ef7df8f59ed4c45bf8be8384e1458388a792b133a6bfbba6b462898e8682b6709beb8d98f2628fe800d8ec4585bea387cf33b8ae00a9b45bf38a8caec7409097febbf633afa983b1c166ab9ebeaaf773a388bcb2d66af2b9ae8bb47a95e7848edc4a88f1a4ace86ab198a3d3e939b3b0968dd837e2a3; JSESSIONID-WYYY=UCSW227Soy%5CPujnXfIdptN%2Fm4QEYADt3f%2BgfT3Kosjq2GGCY8dvbwZAZrI30w4wWyW8Gyj5SFcFuCeEhVZs5N7FmcP%2FnwcHIpjm%2BEMoHd7VUT8BoC7%2FMqHtUVHGwtnTeDql9%5CFpRvun0og1dOu5kQ%2BZXWFJ4gasldJ6xRghIz0PTSNtI%3A1614075370292; playerid=57181879');
    //xhrtest.setRequestHeader('origin','https://music.163.com');
    //xhrtest.setRequestHeader('referer','https://music.163.com');
    //xhrtest.setRequestHeader('user-agent','Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.121 Safari/537.36');
    xhrtest.setRequestHeader('content-type','application/x-www-form-urlencoded');
    xhrtest.withCredentials = true;
    xhrtest.send(param);
    
    xhrtest.onreadystatechange = function() {
        if(xhrtest.readyState == 4){
            var result = xhrtest.responseText;
            //document.getElementById("tip1").innerHTML=result;
            var json = eval("("+result+")")
            document.getElementById("tip1").innerHTML=json.data[0].url;
            document.getElementById("a1").src=json.data[0].url;
        }
    }
}