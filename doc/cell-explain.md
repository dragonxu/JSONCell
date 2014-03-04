如何使用
---------------------
1. 引入相关js文件，css文件
2. 编写JSON Cell的定义模版
        var bixTpl = {
            "_jc_cellTitle":"对象配置",     // 对象处理模块
            "_jc_dataControl":"object",    // 数据处理模块 必选 'input','object','select','multiple','superArray','textArea'
            "_jc_choosable":true,          // 是否可选 可选
            "_jc_choosableShow":true,      // 可选时是否默认展示  可选
            "zoomSpeedIn": 300,            // 生成json的固定值
            "zoomSpeedOut": 300,           // 生成json的固定值
            "overlayShow": false           // 生成json的固定值
            "zoomSpeedOut": {              // 淡出时间配置
                _jc_cellTitle:'淡出时间配置',    // 当前元素的标题
                _jc_dataControl:'input',       // cell 输入值的类型
                _jc_dataType:'number'          // cell 值的类型
            }
        }
3. 初始化工具
        var jsonCell = jsonCreater({
            target:'#dataTextArea',     // 目标TextArea容器
            cellConf:bizTpl,            // json模版
            convertBtn:'#convert'       // 转换按钮ID
        });
    

JSON 模版格式
---------------------

1.  容器类模块

    容器类模块，用于处理json中的对象，数组。这两种数据，内部都还会有具体的值容器。

    1.  对象数据解析
        
            {
                "_jc_cellTitle":"广告组件",     // 对应表单中的列明 必选
                "_jc_dataControl":"object",    // 数据处理模块 必选 'input','object','select','multiple','superArray','textArea'
                "_jc_choosable":true,          // 是否可选 可选
                "_jc_choosableShow":true,      // 可选时是否默认展示  可选
                "_namespace": "Motu.apps.WindowAd"  // 这是一个固定值
            }
    2. 超级数组模块
        
            {
                "_jc_cellTitle":"广告组件",     // 对应表单中的列明 必选
                "_jc_dataControl":"object",    // 数据处理模块 必选 'input','object','select','multiple','superArray','textArea'
                "_jc_choosable":true,          // 是否可选 可选
                "_jc_choosableShow":true,      // 可选时是否默认展示  可选
                "_namespace": "Motu.apps.WindowAd"  // 自定义变量
            }
        

2. 值模块
    1. 标准input值模块——当一个value值需要手工输入的时候。
        
            {
                _jc_pns:'',                     // 上级cell的namespace
                _jc_ns:'',                      // 当前元素的namespace
                _jc_cellTitle:'title',          // 当前元素的标题
                _jc_choosable:false,            // 是否可选
                _jc_dataControl:'input',        // cell 输入值的类型
                _jc_dataType:'string',          // cell 值的类型
                _jc_validate:undefined,         // cell 验证器配置
                _jc_parentNode:null,            // 父节点
                _jc_renderedFn: null,           // 渲染后callback方法
                _jc_parse:null,                 // 自定义解释方法，把cell返回值，格式化成用户需要的值
                _jc_translate:null,             // 自定义翻译方法, 把json的值，翻译成cell的值
                _jc_name:null                   // 值元素自定义name
            }
        
    2. 单选模块——当一个value值有多个备选参数，只能选一个的时候使用。
        
            {
                _jc_pns:'',                     // 上级cell的namespace
                _jc_ns:'',                      // 当前元素的namespace
                _jc_cellTitle:'title',          // 当前元素的标题
                _jc_choosable:false,            // 是否可选
                _jc_dataControl:'input',        // cell 输入值的类型
                _jc_dataType:'string',          // cell 值的类型
                _jc_validate:undefined,         // cell 验证器配置
                _jc_parentNode:null,            // 父节点
                _jc_renderedFn: null,           // 渲染后callback方法
                _jc_parse:null,                 // 自定义解释方法，把cell返回值，格式化成用户需要的值
                _jc_translate:null,             // 自定义翻译方法, 把json的值，翻译成cell的值
                _jc_name:null                   // 值元素自定义name
            }
        
    3. 多选模块——当一个value值有多个参数。
        
            {
                _jc_pns:'',                     // 上级cell的namespace
                _jc_ns:'',                      // 当前元素的namespace
                _jc_cellTitle:'title',          // 当前元素的标题
                _jc_choosable:false,            // 是否可选
                _jc_dataControl:'input',        // cell 输入值的类型
                _jc_dataType:'string',          // cell 值的类型
                _jc_validate:undefined,         // cell 验证器配置
                _jc_parentNode:null,            // 父节点
                _jc_renderedFn: null,           // 渲染后callback方法
                _jc_parse:null,                 // 自定义解释方法，把cell返回值，格式化成用户需要的值
                _jc_translate:null,             // 自定义翻译方法, 把json的值，翻译成cell的值
                _jc_name:null                   // 值元素自定义name
            }
        
    4. textarea长模块——
            {
                _jc_pns:'',                     // 上级cell的namespace
                _jc_ns:'',                      // 当前元素的namespace
                _jc_cellTitle:'title',          // 当前元素的标题
                _jc_choosable:false,            // 是否可选
                _jc_dataControl:'input',        // cell 输入值的类型
                _jc_dataType:'string',          // cell 值的类型
                _jc_validate:undefined,         // cell 验证器配置
                _jc_parentNode:null,            // 父节点
                _jc_renderedFn: null,           // 渲染后callback方法
                _jc_parse:null,                 // 自定义解释方法，把cell返回值，格式化成用户需要的值
                _jc_translate:null,             // 自定义翻译方法, 把json的值，翻译成cell的值
                _jc_name:null                   // 值元素自定义name
            }
        
    5. 固定值模块——隐藏input存值
            {
                _jc_pns:'',                     // 上级cell的namespace
                _jc_ns:'',                      // 当前元素的namespace
                _jc_cellTitle:'title',          // 当前元素的标题
                _jc_choosable:false,            // 是否可选
                _jc_dataControl:'input',        // cell 输入值的类型
                _jc_dataType:'string',          // cell 值的类型
                _jc_validate:undefined,         // cell 验证器配置
                _jc_parentNode:null,            // 父节点
                _jc_renderedFn: null,           // 渲染后callback方法
                _jc_parse:null,                 // 自定义解释方法，把cell返回值，格式化成用户需要的值
                _jc_translate:null,             // 自定义翻译方法, 把json的值，翻译成cell的值
                _jc_name:null                   // 值元素自定义name
            }
        


### Header 3

> This is a blockquote.
>
> This is the second paragraph in the blockquote.
>
> ## This is an H2 in a blockquote


Some of these words *are emphasized*.
Some of these words _are emphasized also_.

Use two asterisks for **strong emphasis**.
Or, if you prefer, __use two underscores instead__.