(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{548:function(n,s){n.exports={content:["article",["p","部分接口需要传入参数车维度ID(carDimID)，本接口用于获取车型所有信息，从而拿到车维度ID(carDimID)。"],["hr"],["h2","请求"],["ul",["li",["p","URL：",["a",{title:null,href:"https://jdy.cigdata.cn/api/models"},"https://jdy.cigdata.cn/api/models"]]],["li",["p","Method：POST"]],["li",["p","Header：\n  |  字段   |  类型   |  描述  |\n  | --- | --- | --- |\n  | Content-Type | string | 请求类型，允许值: application/json;charset=UTF-8 |\n  | APIVersion | int | API版本，允许值:3 |\n  | Access-Token | string | access_token |"]]],["h2","响应"],["p","请求成功接口将返回车型相关数据，data字段是数组类型，包含如下字段："],["table",["thead",["tr",["th","字段"],["th","类型"],["th","描述"]]],["tbody",["tr",["td","brandID"],["td","int"],["td","厂商ID"]],["tr",["td","brandName"],["td","string"],["td","厂商名称"]],["tr",["td","mainBrandID"],["td","int"],["td","品牌ID"]],["tr",["td","mainBrandName"],["td","string"],["td","品牌名称"]],["tr",["td","brandLevelID"],["td","int"],["td","品牌类型ID"]],["tr",["td","brandLevelName"],["td","string"],["td","品牌类型名称"]],["tr",["td","categoryID"],["td","int"],["td","级别ID"]],["tr",["td","categoryName"],["td","string"],["td","级别名称"]],["tr",["td","levelID"],["td","int"],["td","子级别ID"]],["tr",["td","levelName"],["td","string"],["td","子级别名称"]],["tr",["td","modelID"],["td","int"],["td","车型ID"]],["tr",["td","modelName"],["td","string"],["td","车型名称"]],["tr",["td","powerCategoryID"],["td","int"],["td","动力类型ID"]],["tr",["td","powerCategoryName"],["td","string"],["td","动力类型名称"]],["tr",["td","powerID"],["td","int"],["td","子动力类型ID"]],["tr",["td","powerName"],["td","string"],["td","子动力类型名称"]],["tr",["td","ventureID"],["td","int"],["td","厂商类型ID"]],["tr",["td","ventureName"],["td","string"],["td","厂商类型名称"]],["tr",["td","maxGuidePrice"],["td","float"],["td","最大指导价"]],["tr",["td","minGuidePrice"],["td","float"],["td","最小指导价"]]]],["h2","示例"],["p","JAVA代码请求示例："],["pre",{lang:null,highlighted:'import org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>http<span class="token punctuation">.</span>HttpEntity<span class="token comment" spellcheck="true">;</span>\nimport org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>http<span class="token punctuation">.</span>HttpHeaders<span class="token comment" spellcheck="true">;</span>\nimport org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>http<span class="token punctuation">.</span>MediaType<span class="token comment" spellcheck="true">;</span>\nimport org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>web<span class="token punctuation">.</span>client<span class="token punctuation">.</span>RestTemplate<span class="token comment" spellcheck="true">;</span>\n \npublic class OpenAPI {\n    public void <span class="token function">getModels</span><span class="token punctuation">(</span><span class="token punctuation">)</span>{\n        RestTemplate restTemplate <span class="token operator">=</span> new <span class="token function">RestTemplate</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>\n        String url <span class="token operator">=</span> <span class="token string">"https://jdy.cigdata.cn/api/models"</span><span class="token comment" spellcheck="true">;</span>\n        String str <span class="token operator">=</span> <span class="token string">"{}"</span><span class="token comment" spellcheck="true">;</span>\n        HttpHeaders headers <span class="token operator">=</span> new <span class="token function">HttpHeaders</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>\n        headers<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">"APIVersion"</span><span class="token punctuation">,</span> <span class="token string">"3"</span><span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>\n        headers<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">"Access-Token"</span><span class="token punctuation">,</span> <span class="token string">"YourAccessToken"</span><span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>\n        MediaType type <span class="token operator">=</span> MediaType<span class="token punctuation">.</span><span class="token function">parseMediaType</span><span class="token punctuation">(</span>"application<span class="token operator">/</span>json<span class="token comment" spellcheck="true">; charset=UTF-8");</span>\n        headers<span class="token punctuation">.</span><span class="token function">setContentType</span><span class="token punctuation">(</span>type<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>\n        HttpEntity request <span class="token operator">=</span> new <span class="token function">HttpEntity</span><span class="token punctuation">(</span>str<span class="token punctuation">,</span>headers<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>\n        String response <span class="token operator">=</span> restTemplate<span class="token punctuation">.</span><span class="token function">postForObject</span><span class="token punctuation">(</span>url<span class="token punctuation">,</span> request<span class="token punctuation">,</span> String<span class="token punctuation">.</span>class<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>\n        System<span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>response<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>\n    }\n}'},["code",'import org.springframework.http.HttpEntity;\nimport org.springframework.http.HttpHeaders;\nimport org.springframework.http.MediaType;\nimport org.springframework.web.client.RestTemplate;\n \npublic class OpenAPI {\n    public void getModels(){\n        RestTemplate restTemplate = new RestTemplate();\n        String url = "https://jdy.cigdata.cn/api/models";\n        String str = "{}";\n        HttpHeaders headers = new HttpHeaders();\n        headers.set("APIVersion", "3");\n        headers.set("Access-Token", "YourAccessToken");\n        MediaType type = MediaType.parseMediaType("application/json; charset=UTF-8");\n        headers.setContentType(type);\n        HttpEntity request = new HttpEntity(str,headers);\n        String response = restTemplate.postForObject(url, request, String.class);\n        System.out.println(response);\n    }\n}']],["p","返回数据结果示例如下："],["pre",{lang:null,highlighted:'{\n\t<span class="token string">"code"</span><span class="token punctuation">:</span> <span class="token string">"20000"</span><span class="token punctuation">,</span>\n\t<span class="token string">"message"</span><span class="token punctuation">:</span> <span class="token string">"数据返回正确"</span><span class="token punctuation">,</span>\n\t<span class="token string">"data"</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>\n        {\n\t\t\t<span class="token string">"modelID"</span><span class="token punctuation">:</span> <span class="token number">3640</span><span class="token punctuation">,</span>\n\t\t\t<span class="token string">"modelName"</span><span class="token punctuation">:</span> <span class="token string">"北汽昌河M50S"</span><span class="token punctuation">,</span>\n\t\t\t<span class="token string">"brandID"</span><span class="token punctuation">:</span> <span class="token number">177</span><span class="token punctuation">,</span>\n\t\t\t<span class="token string">"brandName"</span><span class="token punctuation">:</span> <span class="token string">"北汽昌河"</span><span class="token punctuation">,</span>\n\t\t\t<span class="token string">"levelID"</span><span class="token punctuation">:</span> <span class="token string">"mb"</span><span class="token punctuation">,</span>\n\t\t\t<span class="token string">"levelName"</span><span class="token punctuation">:</span> <span class="token string">"微面"</span><span class="token punctuation">,</span>\n\t\t\t<span class="token string">"mainBrandID"</span><span class="token punctuation">:</span> <span class="token number">79</span><span class="token punctuation">,</span>\n\t\t\t<span class="token string">"mainBrandName"</span><span class="token punctuation">:</span> <span class="token string">"北汽昌河"</span><span class="token punctuation">,</span>\n\t\t\t<span class="token string">"categoryID"</span><span class="token punctuation">:</span> <span class="token number">8</span><span class="token punctuation">,</span>\n\t\t\t<span class="token string">"categoryName"</span><span class="token punctuation">:</span> <span class="token string">"微面"</span><span class="token punctuation">,</span>\n\t\t\t<span class="token string">"powerID"</span><span class="token punctuation">:</span> <span class="token number">11</span><span class="token punctuation">,</span>\n\t\t\t<span class="token string">"powerName"</span><span class="token punctuation">:</span> <span class="token string">"汽油动力"</span><span class="token punctuation">,</span>\n\t\t\t<span class="token string">"powerCategoryID"</span><span class="token punctuation">:</span> <span class="token number">1</span><span class="token punctuation">,</span>\n\t\t\t<span class="token string">"powerCategoryName"</span><span class="token punctuation">:</span> <span class="token string">"燃油动力"</span><span class="token punctuation">,</span>\n\t\t\t<span class="token string">"minGuidePrice"</span><span class="token punctuation">:</span> <span class="token number">4.48</span><span class="token punctuation">,</span>\n\t\t\t<span class="token string">"maxGuidePrice"</span><span class="token punctuation">:</span> <span class="token number">5.38</span><span class="token punctuation">,</span>\n\t\t\t<span class="token string">"ventureID"</span><span class="token punctuation">:</span> <span class="token number">2</span><span class="token punctuation">,</span>\n\t\t\t<span class="token string">"ventureName"</span><span class="token punctuation">:</span> <span class="token string">"自主"</span><span class="token punctuation">,</span>\n\t\t\t<span class="token string">"brandLevelID"</span><span class="token punctuation">:</span> <span class="token number">1</span><span class="token punctuation">,</span>\n\t\t\t<span class="token string">"brandLevelName"</span><span class="token punctuation">:</span> <span class="token string">"非豪华"</span>\n\t\t}<span class="token punctuation">,</span>\n\t\t<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>\n\t<span class="token punctuation">]</span>\n}'},["code",'{\n\t"code": "20000",\n\t"message": "数据返回正确",\n\t"data": [\n        {\n\t\t\t"modelID": 3640,\n\t\t\t"modelName": "北汽昌河M50S",\n\t\t\t"brandID": 177,\n\t\t\t"brandName": "北汽昌河",\n\t\t\t"levelID": "mb",\n\t\t\t"levelName": "微面",\n\t\t\t"mainBrandID": 79,\n\t\t\t"mainBrandName": "北汽昌河",\n\t\t\t"categoryID": 8,\n\t\t\t"categoryName": "微面",\n\t\t\t"powerID": 11,\n\t\t\t"powerName": "汽油动力",\n\t\t\t"powerCategoryID": 1,\n\t\t\t"powerCategoryName": "燃油动力",\n\t\t\t"minGuidePrice": 4.48,\n\t\t\t"maxGuidePrice": 5.38,\n\t\t\t"ventureID": 2,\n\t\t\t"ventureName": "自主",\n\t\t\t"brandLevelID": 1,\n\t\t\t"brandLevelName": "非豪华"\n\t\t},\n\t\t...\n\t]\n}']]],meta:{title:"车维度字典",publishDate:"2021-12-12T00:00:00.000Z",filename:"api/字典接口/3-1.md"}}}}]);