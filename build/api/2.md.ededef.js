(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{547:function(n,s){n.exports={content:["article",["p","请联系",["a",{title:null,href:"mailto:cigdata@cig.com.cn"},"cigdata@cig.com.cn"],"注册OpenAPI开放平台开发者账号，获得账号和密码。"],["hr"],["h1","获取Token"],["p","使用注册开发者得到的账号密码来获取Token，获取Token的API详情如下："],["h2","请求"],["ul",["li",["p","URL：",["a",{title:null,href:"https://jdy.cigdata.cn/api/access_token"},"https://jdy.cigdata.cn/api/access_token"]]],["li",["p","Method：POST"]],["li",["p","Header：\n  |  字段   |  类型   |  描述  |\n  | --- | --- | --- |\n  |  Content-Type   |  string   | 请求类型，允许值: application/json;charset=UTF-8 |\n  |  APIVersion   |  int | API版本，允许值:3 |"]],["li",["p","JSON参数\n  |  字段  |  类型  |  描述  |\n  | --- | --- | --- |\n  |   username  |  string  |   用户名  |\n  |   password  |  string  |   密码  |"]]],["h2","响应"],["p","请求成功接口将返回Token，用于调用数据报表API，返回的数据是JSON格式，字段信息如下：\n|  字段   |  类型  |  描述  |\n| --- | --- | --- | \n|  code   |   number  |  请参考",["strong","附录-返回码"]," |\n| message | string | 与code对应的提示信息 |\n|  data   |   object  | 数据对象 |"],["p",["em","筋斗云开放平台的所有API都返回code/message/data三个字段，code/message的含义是完全一样的，表示当前接口调用状态信息，具体的数据存放在data字段中，因此本文档后续只描述data中的字段信息。"],"\n获取Token接口data字段的信息如下：\n|  字段   |   类型  |  描述  |\n| --- | --- | --- |\n|  accessToken  |   string  |  调用数据报表接口时必须携带，有效期24小时  |\n|  refreshToken  |  string  | accessToken过期后，使用refreshToken调用刷新Token接口获得新Token，有效期30天 |"],["h2","示例"],["p","JAVA代码请求示例："],["pre",{lang:null,highlighted:'import org<span class="token punctuation">.</span>junit<span class="token punctuation">.</span>Test<span class="token comment" spellcheck="true">;</span>\nimport org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>http<span class="token punctuation">.</span>HttpEntity<span class="token comment" spellcheck="true">;</span>\nimport org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>http<span class="token punctuation">.</span>HttpHeaders<span class="token comment" spellcheck="true">;</span>\nimport org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>http<span class="token punctuation">.</span>MediaType<span class="token comment" spellcheck="true">;</span>\nimport org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>web<span class="token punctuation">.</span>client<span class="token punctuation">.</span>RestTemplate<span class="token comment" spellcheck="true">;</span>\n\npublic class OpenAPI {\n    public void <span class="token function">getToken</span><span class="token punctuation">(</span><span class="token punctuation">)</span>{\n        RestTemplate restTemplate <span class="token operator">=</span> new <span class="token function">RestTemplate</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>\n        String url <span class="token operator">=</span> <span class="token string">"https://jdy.cigdata.cn/api/access_token"</span><span class="token comment" spellcheck="true">;</span>\n        String str <span class="token operator">=</span> <span class="token string">"{\\"</span>username\\<span class="token string">":\\"</span>user1\\<span class="token string">",\\"</span>password\\<span class="token string">":\\"</span>pass1\\<span class="token string">"}"</span><span class="token comment" spellcheck="true">;</span>\n        HttpHeaders headers <span class="token operator">=</span> new <span class="token function">HttpHeaders</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>\n        headers<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">"APIVersion"</span><span class="token punctuation">,</span> <span class="token string">"3"</span><span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>\n        MediaType type <span class="token operator">=</span> MediaType<span class="token punctuation">.</span><span class="token function">parseMediaType</span><span class="token punctuation">(</span>"application<span class="token operator">/</span>json<span class="token comment" spellcheck="true">; charset=UTF-8");</span>\n        headers<span class="token punctuation">.</span><span class="token function">setContentType</span><span class="token punctuation">(</span>type<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>\n        HttpEntity request <span class="token operator">=</span> new <span class="token function">HttpEntity</span><span class="token punctuation">(</span>str<span class="token punctuation">,</span> headers<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>\n        String response <span class="token operator">=</span> restTemplate<span class="token punctuation">.</span><span class="token function">postForObject</span><span class="token punctuation">(</span>url<span class="token punctuation">,</span> request<span class="token punctuation">,</span> String<span class="token punctuation">.</span>class<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>\n        System<span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>response<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>\n    }\n}'},["code",'import org.junit.Test;\nimport org.springframework.http.HttpEntity;\nimport org.springframework.http.HttpHeaders;\nimport org.springframework.http.MediaType;\nimport org.springframework.web.client.RestTemplate;\n\npublic class OpenAPI {\n    public void getToken(){\n        RestTemplate restTemplate = new RestTemplate();\n        String url = "https://jdy.cigdata.cn/api/access_token";\n        String str = "{\\"username\\":\\"user1\\",\\"password\\":\\"pass1\\"}";\n        HttpHeaders headers = new HttpHeaders();\n        headers.set("APIVersion", "3");\n        MediaType type = MediaType.parseMediaType("application/json; charset=UTF-8");\n        headers.setContentType(type);\n        HttpEntity request = new HttpEntity(str, headers);\n        String response = restTemplate.postForObject(url, request, String.class);\n        System.out.println(response);\n    }\n}']],["p","返回内容："],["pre",{lang:null,highlighted:'{\n\t<span class="token string">"code"</span><span class="token punctuation">:</span> <span class="token string">"20000"</span><span class="token punctuation">,</span>\n\t<span class="token string">"message"</span><span class="token punctuation">:</span> <span class="token string">"数据返回正确"</span><span class="token punctuation">,</span>\n\t<span class="token string">"data"</span><span class="token punctuation">:</span> {\n\t\t<span class="token string">"accessToken"</span><span class="token punctuation">:</span> <span class="token string">"2UuHnZ8acWTUnLIOnh3wAO7hPeVz1HzH"</span><span class="token punctuation">,</span>\n\t\t<span class="token string">"refreshToken"</span><span class="token punctuation">:</span> <span class="token string">"9xZ0k4E8m9QOYw8vltDeSsb0i8JlaGts"</span>\n\t}\n}'},["code",'{\n\t"code": "20000",\n\t"message": "数据返回正确",\n\t"data": {\n\t\t"accessToken": "2UuHnZ8acWTUnLIOnh3wAO7hPeVz1HzH",\n\t\t"refreshToken": "9xZ0k4E8m9QOYw8vltDeSsb0i8JlaGts"\n\t}\n}']],["hr"],["h1","刷新Token"],["p","accessToken过期后，可以使用未过期的refreshToken调用此接口，获得一份新的accessToken和refreshToken，两个Token的过期时间都将重新计算。"],["h2","请求"],["ul",["li",["p","URL：",["a",{title:null,href:"https://jdy.cigdata.cn/api/refresh_token"},"https://jdy.cigdata.cn/api/refresh_token"]]],["li",["p","Method：POST"]],["li",["p","Header：\n  |  字段   |  类型   |  描述  |\n  | --- | --- | --- |\n  |  Content-Type   |  string   | 请求类型，允许值: application/json;charset=UTF-8 |\n  |  APIVersion   |  int   | API版本，允许值:3 |"]],["li",["p","JSON参数\n  |  字段  |  类型  |  描述  |\n  | --- | --- | --- |\n  |  refreshToken |  string  |   刷新Token  |"]]],["h2","响应"],["p","请求成功接口将返回两个新的Token，与刷新Token的返回格式是完全一致的，Data字段的信息如下：\n|  字段   |   类型  |  描述  |\n| --- | --- | --- |\n|  accessToken  |   string  |  调用数据报表接口时必须携带，有效期24小时  |\n|  refreshToken  |  string  | accessToken过期后，使用refreshToken调用刷新Token接口获得新Token，有效期30天 |"],["h2","示例"],["p","JAVA代码请求示例："],["pre",{lang:null,highlighted:'import org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>http<span class="token punctuation">.</span>HttpEntity<span class="token comment" spellcheck="true">;</span>\nimport org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>http<span class="token punctuation">.</span>HttpHeaders<span class="token comment" spellcheck="true">;</span>\nimport org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>http<span class="token punctuation">.</span>MediaType<span class="token comment" spellcheck="true">;</span>\nimport org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>web<span class="token punctuation">.</span>client<span class="token punctuation">.</span>RestTemplate<span class="token comment" spellcheck="true">;</span>\n \npublic class OpenAPI {\n    public void <span class="token function">refreshToken</span><span class="token punctuation">(</span><span class="token punctuation">)</span>{\n        RestTemplate restTemplate <span class="token operator">=</span> new <span class="token function">RestTemplate</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>\n        String url <span class="token operator">=</span> <span class="token string">"https://jdy.cigdata.cn/api/refresh_token"</span><span class="token comment" spellcheck="true">;</span>\n        String str <span class="token operator">=</span> <span class="token string">"{\\"</span>refresh_token\\<span class="token string">":\\"</span>9xZ0k4E8m9QOYw8vltDeSsb0i8JlaGts\\<span class="token string">"}"</span><span class="token comment" spellcheck="true">;</span>\n        HttpHeaders headers <span class="token operator">=</span> new <span class="token function">HttpHeaders</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>\n        headers<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">"APIVersion"</span><span class="token punctuation">,</span> <span class="token string">"3"</span><span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>\n        MediaType type <span class="token operator">=</span> MediaType<span class="token punctuation">.</span><span class="token function">parseMediaType</span><span class="token punctuation">(</span>"application<span class="token operator">/</span>json<span class="token comment" spellcheck="true">; charset=UTF-8");</span>\n        headers<span class="token punctuation">.</span><span class="token function">setContentType</span><span class="token punctuation">(</span>type<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>\n        HttpEntity request <span class="token operator">=</span> new <span class="token function">HttpEntity</span><span class="token punctuation">(</span>str<span class="token punctuation">,</span>headers<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>\n        String response <span class="token operator">=</span> restTemplate<span class="token punctuation">.</span><span class="token function">postForObject</span><span class="token punctuation">(</span>url<span class="token punctuation">,</span> request<span class="token punctuation">,</span> String<span class="token punctuation">.</span>class<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>\n        System<span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>response<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>\n    }\n}'},["code",'import org.springframework.http.HttpEntity;\nimport org.springframework.http.HttpHeaders;\nimport org.springframework.http.MediaType;\nimport org.springframework.web.client.RestTemplate;\n \npublic class OpenAPI {\n    public void refreshToken(){\n        RestTemplate restTemplate = new RestTemplate();\n        String url = "https://jdy.cigdata.cn/api/refresh_token";\n        String str = "{\\"refresh_token\\":\\"9xZ0k4E8m9QOYw8vltDeSsb0i8JlaGts\\"}";\n        HttpHeaders headers = new HttpHeaders();\n        headers.set("APIVersion", "3");\n        MediaType type = MediaType.parseMediaType("application/json; charset=UTF-8");\n        headers.setContentType(type);\n        HttpEntity request = new HttpEntity(str,headers);\n        String response = restTemplate.postForObject(url, request, String.class);\n        System.out.println(response);\n    }\n}']],["p","返回内容："],["pre",{lang:null,highlighted:'{\n\t<span class="token string">"code"</span><span class="token punctuation">:</span> <span class="token string">"20000"</span><span class="token punctuation">,</span>\n\t<span class="token string">"message"</span><span class="token punctuation">:</span> <span class="token string">"数据返回正确"</span><span class="token punctuation">,</span>\n\t<span class="token string">"data"</span><span class="token punctuation">:</span> {\n\t\t<span class="token string">"accessToken"</span><span class="token punctuation">:</span> <span class="token string">"2UuHnZ8acWTUnLIOnh3wAO7hPeVz1HzH"</span><span class="token punctuation">,</span>\n\t\t<span class="token string">"refreshToken"</span><span class="token punctuation">:</span> <span class="token string">"9xZ0k4E8m9QOYw8vltDeSsb0i8JlaGts"</span>\n\t}\n}'},["code",'{\n\t"code": "20000",\n\t"message": "数据返回正确",\n\t"data": {\n\t\t"accessToken": "2UuHnZ8acWTUnLIOnh3wAO7hPeVz1HzH",\n\t\t"refreshToken": "9xZ0k4E8m9QOYw8vltDeSsb0i8JlaGts"\n\t}\n}']]],meta:{title:"注册成为开发者",publishDate:"2021-12-12T00:00:00.000Z",filename:"api/2.md"}}}}]);