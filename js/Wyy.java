package exam.sium1;

import com.alibaba.fastjson.JSONArray;
import com.alibaba.fastjson.JSONObject;
import jdk.nashorn.api.scripting.ScriptObjectMirror;
import net.dongliu.requests.Requests;

import javax.script.Invocable;
import javax.script.ScriptEngine;
import javax.script.ScriptEngineManager;
import java.io.FileReader;
import java.util.HashMap;
import java.util.Map;

public class Wyy {
    private Map<String,Object> headers;
    private Map<String,Object> params;
    private String url = "https://music.163.com/weapi/song/enhance/player/url/v1?csrf_token=";
    private String encText = "";
    private String encSecKey = "";
    public Wyy(){
        headers = new HashMap<>();
        params = new HashMap<>();
    }
    public void setUserAgent(String UA){
        this.headers.put("user-agent",UA);
        String cookie = "_iuqxldmzr_=32; _ntes_nnid=25e99ff8c6f054e21d3bc1929ebdfe47,1613380622979; _ntes_nuid=25e99ff8c6f054e21d3bc1929ebdfe47; NMTID=00OJKBLttlMKjsqE0sai-705xxZ6v4AAAF3pPrnfg; WM_TID=USgG0%2B47dORFAAUFFAcqK8kh64i4%2B0Hn; WM_NI=zgZJZiIkizRDwAlDM1QRjrPW4l3el%2FeX3NejXXuifPi7U%2BOao1pGzuFWAMmeZUY%2BEy7dEN5xJaSNuBzqQnBLuvl0yasiVNbEfEc7G%2BGTWwvWvOBfG17%2B2T3P%2FIaR6Z2wbkc%3D; WM_NIKE=9ca17ae2e6ffcda170e2e6eea8d14bfcebbb89e952f1968ba2c15e929e8abab645b1e99cadf04694baf7b7c22af0fea7c3b92abab996abd9638bb5a79bd150b59fa4a5d03b938ea693d35df8b4fd86ef25a788fdafe8629c88bb8ae55cabe99bccce6badefc0a8f97f86898faef06f9a8b97ccc873f5bc8bafb8748abf9daff84abaaf9f8fc148b7aaa4d1fc6bb1b79aafe14fa69badd8c621858c9998f55db6918e87c63bf5f5feb5b25ced97afb3b552f2a9ae8ce237e2a3; WEVNSM=1.0.0; WNMCID=mnwgih.1613736239880.01.0; JSESSIONID-WYYY=iCwXv7x2921Wykq8Ii2WCQgju3qegu9a1QdRvW%5CG1Gt8nK1IBXtkka%2F9PZPUSJdxlbFvcpR2rZ2XzRTOOG%5CvpqxICjkMtqofJ9m3bDzzHTQsGxXjMdhpcWBOYlxPK3HU%2FJ8nIQC5Ddw4nUvqE2IENwu%2Fy%5Cjnj5HE6kEWWEo7aSuPP%2BmD%3A1613742673730; playerid=74550401";
        this.headers.put("cookie",cookie);
    }
    public Map<String,Object> getHeaders()
    {
        this.headers.putIfAbsent("referer", "https://music.163.com/");
        return this.headers;
    }
    public Map<String,Object> getParams(){
        a();
        params.put("params",encText);
        params.put("encSecKey",encSecKey);
        return this.params;
    }
    public void a(){
        ScriptEngineManager manager = new ScriptEngineManager();
        ScriptEngine engine = manager.getEngineByName("js");
        try {
            String path = "G:\\软件学习\\idea\\output\\climbinsect\\youdao\\lib\\wyyt.js";
            FileReader fileReader = new FileReader(path);
            engine.eval(fileReader);
            if (engine instanceof Invocable) {
                Invocable invocable = (Invocable) engine;
                ScriptObjectMirror mirror = (ScriptObjectMirror) invocable.invokeFunction("d","{\"ids\":\"[22636699]\",\"level\":\"standard\",\"encodeType\":\"aac\",\"csrf_token\":\"\"}","010001","00e0b509f6259df8642dbc35662901477df22677ec152b5ff68ace615bb7b725152b3ab17a876aea8a5aa76d2e417629ec4ee341f56135fccf695280104e0312ecbda92557c93870114af6c9d05c4f7f0c3685b7a46bee255932575cce10b424d813cfe4875d3e82047b97ddef52741d546b8e289dc6935b3ece0462db0a22b8e7","0CoJUm6Qyw8W8jud");
                encText = (String) mirror.get("encText");
                encSecKey = (String) mirror.get("encSecKey");
            }
        }catch (Exception e){e.printStackTrace();}
    }
    public String getResult(){
        return Requests.post(url).headers(getHeaders()).body(getParams()).send().readToText();
    }
    public static void resultConduct(String st){
        JSONObject object = ((JSONObject) ((JSONArray) (JSONObject.parseObject(st)).get("data")).get(0));
        System.out.println(object.get("url"));
    }
    public static void main(String[] args) {
        Wyy wyy = new Wyy();
        wyy.setUserAgent("Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.121 Safari/537.36");
        String st = wyy.getResult();
        System.out.println(st);
        resultConduct(st);
    }
}
