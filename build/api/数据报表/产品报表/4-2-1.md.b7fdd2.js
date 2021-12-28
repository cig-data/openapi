(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{550:function(n,s){n.exports={content:["article",["hr"],["h2","请求"],["ul",["li",["p","URL：",["a",{title:null,href:"https://jdy.cigdata.cn/api/product/image"},"https://jdy.cigdata.cn/api/product/image"]]],["li",["p","Method：POST"]],["li",["p","Header：\n  |  字段   |  类型   |  描述  |\n  | --- | --- | --- |\n  |  Content-Type | string | 请求类型，允许值: application/json;charset=UTF-8 |\n  |  APIVersion |  int  | API版本，允许值:3 |\n  |  Access-Token  |  string  | access_token |"]],["li",["p","JSON参数\n  |  字段  |  类型  |  描述  |\n  | --- | --- | --- |\n  |  dateType | int |  开始/结束时间类型，必填，允许值：参考",["strong","附录-枚举值"],"  |\n  |  startDate |  string  |   开始时间，必填，参考",["strong","附录-枚举值"],"填写说明 |\n  |  endDate  |  string  |   结束时间，必填，参考",["strong","附录-枚举值"],'填写说明 |\n  |  carDimID | string | 车维度ID，支持同时查询多个，用","隔开，必填 |\n  |  carDimType | string | 车维度类型，必填，允许值：目前仅允许20(车型) |\n  |  spaceDimID | int | 地区维度ID，必填 |\n  |  spaceDimType | int | 地区维度类型，必填 |']]],["h2","响应"],["p","请求成功接口将返回产品关键词数据，data字段是数组类型，包含如下字段：\n|  字段   |  类型  |  描述  |\n| --- | --- | --- | \n| carDimName | string | 车维度 |\n| dimName | string | 关键词 |\n| count | int | 关键词统计值 |"],["h2","示例"],["p","JAVA代码请求示例："],["pre",{lang:null,highlighted:'import org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>http<span class="token punctuation">.</span>HttpEntity<span class="token comment" spellcheck="true">;</span>\nimport org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>http<span class="token punctuation">.</span>HttpHeaders<span class="token comment" spellcheck="true">;</span>\nimport org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>http<span class="token punctuation">.</span>MediaType<span class="token comment" spellcheck="true">;</span>\nimport org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>web<span class="token punctuation">.</span>client<span class="token punctuation">.</span>RestTemplate<span class="token comment" spellcheck="true">;</span>\n \npublic class OpenAPI {\n    public void <span class="token function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span>{\n        RestTemplate restTemplate <span class="token operator">=</span> new <span class="token function">RestTemplate</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>\n        String url <span class="token operator">=</span> <span class="token string">"https://jdy.cigdata.cn/api/product/image"</span><span class="token comment" spellcheck="true">;</span>\n        String str <span class="token operator">=</span> <span class="token string">"{\\"</span>dateType\\<span class="token string">":\\"</span><span class="token number">20</span>\\<span class="token string">",\\"</span>startDate\\<span class="token string">":\\"</span><span class="token number">2021</span><span class="token operator">-</span><span class="token number">07</span>\\<span class="token string">",\\"</span>endDate\\<span class="token string">":\\"</span><span class="token number">2021</span><span class="token operator">-</span><span class="token number">08</span>\\<span class="token string">",\\"</span>carDimID\\<span class="token string">":\\"</span><span class="token number">614</span><span class="token punctuation">,</span><span class="token number">633</span>\\<span class="token string">",\\"</span>carDimType\\<span class="token string">":\\"</span><span class="token number">20</span>\\<span class="token string">",\\"</span>spaceDimID\\<span class="token string">":1,\\"</span>spaceDimType\\<span class="token string">":40}"</span><span class="token comment" spellcheck="true">;</span>\n        HttpHeaders headers <span class="token operator">=</span> new <span class="token function">HttpHeaders</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>\n        headers<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">"APIVersion"</span><span class="token punctuation">,</span> <span class="token string">"3"</span><span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>\n        headers<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">"Access-Token"</span><span class="token punctuation">,</span> <span class="token string">"YourAccessToken"</span><span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>\n        MediaType type <span class="token operator">=</span> MediaType<span class="token punctuation">.</span><span class="token function">parseMediaType</span><span class="token punctuation">(</span>"application<span class="token operator">/</span>json<span class="token comment" spellcheck="true">; charset=UTF-8");</span>\n        headers<span class="token punctuation">.</span><span class="token function">setContentType</span><span class="token punctuation">(</span>type<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>\n        HttpEntity request <span class="token operator">=</span> new <span class="token function">HttpEntity</span><span class="token punctuation">(</span>str<span class="token punctuation">,</span>headers<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>\n        String response <span class="token operator">=</span> restTemplate<span class="token punctuation">.</span><span class="token function">postForObject</span><span class="token punctuation">(</span>url<span class="token punctuation">,</span> request<span class="token punctuation">,</span> String<span class="token punctuation">.</span>class<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>\n        System<span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>response<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>\n    }\n}'},["code",'import org.springframework.http.HttpEntity;\nimport org.springframework.http.HttpHeaders;\nimport org.springframework.http.MediaType;\nimport org.springframework.web.client.RestTemplate;\n \npublic class OpenAPI {\n    public void test(){\n        RestTemplate restTemplate = new RestTemplate();\n        String url = "https://jdy.cigdata.cn/api/product/image";\n        String str = "{\\"dateType\\":\\"20\\",\\"startDate\\":\\"2021-07\\",\\"endDate\\":\\"2021-08\\",\\"carDimID\\":\\"614,633\\",\\"carDimType\\":\\"20\\",\\"spaceDimID\\":1,\\"spaceDimType\\":40}";\n        HttpHeaders headers = new HttpHeaders();\n        headers.set("APIVersion", "3");\n        headers.set("Access-Token", "YourAccessToken");\n        MediaType type = MediaType.parseMediaType("application/json; charset=UTF-8");\n        headers.setContentType(type);\n        HttpEntity request = new HttpEntity(str,headers);\n        String response = restTemplate.postForObject(url, request, String.class);\n        System.out.println(response);\n    }\n}']],["p","返回数据结果示例如下："],["pre",{lang:null,highlighted:'{\n\t<span class="token string">"code"</span><span class="token punctuation">:</span> <span class="token string">"20000"</span><span class="token punctuation">,</span>\n\t<span class="token string">"message"</span><span class="token punctuation">:</span> <span class="token string">"数据返回正确"</span><span class="token punctuation">,</span>\n\t<span class="token string">"data"</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>\n        {\n\t\t\t<span class="token string">"carDimName"</span><span class="token punctuation">:</span> <span class="token string">"朗逸"</span><span class="token punctuation">,</span>\n\t\t\t<span class="token string">"count"</span><span class="token punctuation">:</span> <span class="token number">12</span><span class="token punctuation">,</span>\n\t\t\t<span class="token string">"dimName"</span><span class="token punctuation">:</span> <span class="token string">"环保"</span>\n\t\t}<span class="token punctuation">,</span> {\n\t\t\t<span class="token string">"carDimName"</span><span class="token punctuation">:</span> <span class="token string">"朗逸"</span><span class="token punctuation">,</span>\n\t\t\t<span class="token string">"count"</span><span class="token punctuation">:</span> <span class="token number">335</span><span class="token punctuation">,</span>\n\t\t\t<span class="token string">"dimName"</span><span class="token punctuation">:</span> <span class="token string">"成熟稳重"</span>\n\t\t}<span class="token punctuation">,</span> {\n\t\t\t<span class="token string">"carDimName"</span><span class="token punctuation">:</span> <span class="token string">"朗逸"</span><span class="token punctuation">,</span>\n\t\t\t<span class="token string">"count"</span><span class="token punctuation">:</span> <span class="token number">159</span><span class="token punctuation">,</span>\n\t\t\t<span class="token string">"dimName"</span><span class="token punctuation">:</span> <span class="token string">"经典"</span>\n\t\t}<span class="token punctuation">,</span> {\n\t\t\t<span class="token string">"carDimName"</span><span class="token punctuation">:</span> <span class="token string">"朗逸"</span><span class="token punctuation">,</span>\n\t\t\t<span class="token string">"count"</span><span class="token punctuation">:</span> <span class="token number">101</span><span class="token punctuation">,</span>\n\t\t\t<span class="token string">"dimName"</span><span class="token punctuation">:</span> <span class="token string">"中规中矩"</span>\n\t\t}<span class="token punctuation">,</span>\n\t\t<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>\n\t<span class="token punctuation">]</span>\n}'},["code",'{\n\t"code": "20000",\n\t"message": "数据返回正确",\n\t"data": [\n        {\n\t\t\t"carDimName": "朗逸",\n\t\t\t"count": 12,\n\t\t\t"dimName": "环保"\n\t\t}, {\n\t\t\t"carDimName": "朗逸",\n\t\t\t"count": 335,\n\t\t\t"dimName": "成熟稳重"\n\t\t}, {\n\t\t\t"carDimName": "朗逸",\n\t\t\t"count": 159,\n\t\t\t"dimName": "经典"\n\t\t}, {\n\t\t\t"carDimName": "朗逸",\n\t\t\t"count": 101,\n\t\t\t"dimName": "中规中矩"\n\t\t},\n\t\t...\n\t]\n}']]],meta:{title:"产品形象",publishDate:"2021-12-12T00:00:00.000Z",filename:"api/数据报表/产品报表/4-2-1.md"}}}}]);