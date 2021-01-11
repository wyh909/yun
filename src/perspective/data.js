const data = {
  "banner": {
    "title": '透视宝',
    "sub_title": '面向业务的应用性能管理',
    "intra": '透视性能瓶颈，追踪问题根源，提升用户体验'
  },
  "modules": [{
    "name": "tabModule",
    "title": "端到端应用性能管理解决方案，消除应用全生命周期的性能问题",
    "intra": "通过主动监控终端用户真实体验及应用系统运行状态，实现针对业务系统的端到端性能监控与分析。",
    "maintabs": [{
      "pic": "",
      "name": "应用性能管理",
      "tabcons": {
        "intra": "追踪性能问题，快速定位应用缓慢、错误和异常，确保业务质量",
        "subtabs": [{
          "name": "自动发现全局应用拓扑",
          "html": {
            "pic": 'image/product/perspective/pic-a01.jpg',
            "text": '全自动发现所有应用及其关联关系，从整体分析一个应用及其关联应用的状态以及指标的变化趋势，快速发现隐藏的性能问题。'
          }
        }, {
          "name": "代码级问题诊断",
          "html": {
            "pic": 'image/product/perspective/pic-a02.jpg',
            "text": '捕获每个事物的单次请求快照，并提供应用程序方法、数据库、外部服务的堆栈信息，发现最慢元素，定位性能瓶颈。'
          } 
        }, {
          "name": "SQL/NoSQL数据库监控",
          "html": {
            "pic": 'image/product/perspective/pic-a03.jpg',
            "text": '获取每个SQL语句的性能指标，从数据库层面分析应用健康度，快速定位影响性能的各类数据库问题。'
          }
        }, {
          "name": "单用户追踪",
          "html": {
            "pic": 'image/product/perspective/pic-a04.jpg',
            "text": '灵活获取用户唯一身份标识，发现用户行为轨迹，实现重点客户的性能追踪。'
          } 
        }, {
          "name": "智能探针Smart Agent",
          "html": {
            "pic": 'image/product/perspective/pic-a05.jpg',
            "text": '支持快捷部署和智能发现，一键安装，自动发现，极速部署，管控无忧。'
          }
        }]
      }
    }, {
      "pic": "",
      "name": "移动端性能管理",
      "tabcons": {
        "intra": "",
        "subtabs": [{
          "name": "用户行为分析",
          "html": {
            "pic": "image/product/perspective/pic-b01.jpg",
            "text": "通过统计用户行为动作，分析出现问题的行为，确定影响的用户范围，定点优化，提升用户体验。"
          }
        }, {
          "name": "网络请求分析",
          "html": {
            "pic": "image/product/perspective/pic-b02.jpg",
            "text": "分析不同域名下请求性能，汇总网络错误信息，结合响应时间分解瀑布图，提升用户体验。"
          }
        }, {
          "name": "崩溃分析",
          "html": {
            "pic": "image/product/perspective/pic-b03.jpg",
            "text": "通过获取用户崩溃时的操作轨迹，还原崩溃现场，结合堆栈深入追踪，定位崩溃根因。"
          }
        }, {
          "name": "多维度组合分析",
          "html": {
            "pic": "image/product/perspective/pic-b04.jpg",
            "text": "基于应用程序版本、操作系统版本、设备类型、ISP类型等多个维度统计和分析APP性能指标，以发现和解决问题。"
          }
        }, {
          "name": "端到端请求分析",
          "html": {
            "pic": "image/product/perspective/pic-b05.jpg",
            "text": "基于应用程序版本、操作系统版本、设备类型、ISP类型等多个维度统计和分析APP性能指标，以发现和解决问题。"
          }
        }, {
          "name": "端到端请求分析",
          "html": {
            "pic": "image/product/perspective/pic-b06.jpg",
            "text": "通过前后端唯一标识，从前到后分析前端网络、后端方法、数据库等性能问题。"
          }
        }]
      }
    }, {
      "pic": "",
      "name": "浏览器&小程序性能管理",
      "tabcons": {
        "intra": "",
        "subtabs": [{
          "name": "全景地图分析",
          "html": {
            "pic": "image/product/perspective/pic-c01.jpg",
            "text": "通过地域热力图展示全球范围内用户真实体验，利用地域下钻获取不同地域用户体验详情。"
          }
        }, {
          "name": "页面加载耗时追踪",
          "html": {
            "pic": "image/product/perspective/pic-c02.jpg",
            "text": "通过分解前端页面加载响应时间，分析加载过程中各步骤耗时，定位性能瓶颈，为页面性能优化提供数据支撑"
          }
        },{
          "name": "JS错误分析",
          "html": {
            "pic": "image/product/perspective/pic-c03.jpg",
            "text": "统计页面出现的JS错误详情，利用错误堆栈代码追踪，深入分析具体JS错误信息，还原页面故障现场。"
          }
        }, {
          "name": "多维度数据分析",
          "html": {
            "pic": "image/product/perspective/pic-c04.jpg",
            "text": "提供操作系统、地域、运营商、浏览器等多维度分析数据，支持组合分析，定位问题关键点，优化性能问题，提升用户体验。"
          }
        }, {
          "name": "VIP用户体验监控",
          "html": {
            "pic": "image/product/perspective/pic-c05.jpg",
            "text": "通过Seesion、Cookie、URI参数获取用户ID，监控用户行为轨迹，解决各类用户体验问题。"
          }
        }, {
          "name": "智能探针Smart JS",
          "html": {
            "pic": "image/product/perspective/pic-c05.jpg",
            "text": "支持手动与自动注入，兼容主流浏览器、安装简单运行稳定google chrome、safari、firefox、IE、QQ"
          }
        }]
      }
    }]
  }, {
    "name": "itemsA",
    "title": "应用场景",
    "intra": "致力于剖析各行业IT服务管理挑战，结合实践和技术，提供有适合企业的咨询服务",
    "moduleClass": "itemsA",
    "wrapClass": "bg-blue",
    "items": [{
      "pic": "image/product/icon-a01.png",
      "title": "应用拓扑梳理",
      "text": "通过自动发现应用拓扑，梳理复杂的应用上下游关系和全局的服务依赖关系，从宏观把握应用及其关联应用的健康状态，在故障排查时快速定位各层级问题。"
    }, {
      "pic": "image/product/icon-a02.png",
      "title": "用户行为分析",
      "text": "通过统计海量的用户行为，分析存在问题的行为动作，判断问题影响范围，快速诊断、复现和解决问题。"
    }, {
      "pic": "image/product/icon-a03.png",
      "title": "代码级性能问题定位",
      "text": "通过堆栈追踪，一键定位最慢元素，快速发现响应慢的具体原因和优化方法。"
    }, {
      "pic": "image/product/icon-a04.png",
      "title": "崩溃、卡顿优化",
      "text": "通过捕获崩溃、卡顿信息，深入追踪和分析相关线程、Trace文件和信息，还原操作轨迹，快速排查和定位问题起因。"
    }, {
      "pic": "image/product/icon-a05.png",
      "title": "API接口监测",
      "text": "通过数据库分析，发现应用中的慢SQL语句，精准定位数据库读写瓶颈，以实现数据库性能的优化。"
    }, {
      "pic": "image/product/icon-a06.png",
      "title": "JS错误分析",
      "text": "通过监控网页访问时发生的JS错误，深入分析错误堆栈，排查错误起因。"
    }, {
      "pic": "image/product/icon-a07.png",
      "title": "多维度性能分析",
      "text": "从地域、浏览器、网页、运营商等多个维度对浏览器性能进行分析，快速定位各类问题，提升用户体验。"
    }]
  }, {
    "name": "itemsB",
    "title": "产品优势",
    "moduleClass": "itemsB itemsB-tc itemsB-cols3-l",
    "items": [{
      "pic": "image/product/icon-b11.png",
      "title": "智能探针Smart Agent",
      "text": "每个主机仅需安装一个代理，即可实现探针自动注入以及所有运行中应用的性能数据的采集。"
    }, {
      "pic": "image/product/icon-b12.png",
      "title": "基于容器的微服务架构监控",
      "text": "支持Docker、K8s等环境下的微服务监控，在大规模、多变的微服务环境下，快速定位性能瓶颈。"
    }, {
      "pic": "image/product/icon-b13.png",
      "title": "自动拓扑发现",
      "text": "通过部署探针，自动发现被监控应用系统各模块并自动追踪各业务模块间调用关系及吞吐率，形成应用系统整体拓扑，无需手工添加及配置。"
    }, {
      "pic": "image/product/icon-b14.png",
      "title": "端到端性能分析",
      "text": "通过串联整个请求，帮助客户分解前端加载、网络连接、后端响应等各环节的响应时间，定位性能瓶颈。"
    }, {
      "pic": "image/product/icon-b15.png",
      "title": "专业化的数据报告",
      "text": "提供自定义的日报、周报和月报，便于用户根据具体时间追溯历史数据，排查故障。"
    }, {
      "pic": "image/product/icon-b16.png",
      "title": "轻量，超高性能",
      "text": "支持海量数据处理，数据准确率高，对客户系统性能影响小。"
    }]
  }, {
    "name": "itemsB",
    "title": "客户案例",
    "wrapClass": "case bg-blue",
    "moduleClass": "itemsB",
    "picSize": "s",
    "tips": "透视宝为广大互联网客户提供7*24小时的实时监控服务，帮助企业客户保证业务连续性、缩短故障时间、提升用户体验。",
    "items": [{
      "pic": "image/product/perspective/icon-01.png",
      "title": "移动咪咕",
      "text": "移动咪咕使用透视宝移动端对咪咕互娱APP进行监控和数据分析，缩短了故障解决时间。"
    },{
      "pic": "image/product/perspective/icon-02.png",
      "title": "数云",
      "text": "数云科技使用透视宝监控精准定位性能问题，保证线上用户体验。"
    },{
      "pic": "image/product/perspective/icon-03.png",
      "title": "好大夫",
      "text": "好大夫在线使用透视宝移动端来追踪单个用户的使用体验，有效地处理用户反馈。"
    },{
      "pic": "image/product/perspective/icon-04.png",
      "title": "链家地产",
      "text": "链家地产使用透视宝快速发现和定位代码级性能问题及根因，保障了在线培训和考试系统运营效率和质量。"
    }]
  }, {
    "name": "itemsB",
    "title": "相关产品服务",
    "moduleClass": "itemsB itemsB-tc itemsB-vertical itemsB-vertical-s",
    "intra": "按模块独立报价",
    "picSize": "s",
    "items": [{
      "pic": "image/product/icon-b21.png",
      "title": "应用性能模块",
      "text": "按探针数量收费"
    }, {
      "pic": "image/product/icon-b22.png",
      "title": "浏览器端",
      "text": "按PV数收费"
    }, {
      "pic": "image/product/icon-b23.png",
      "title": "移动端",
      "text": "按月活收费"
    }, {
      "pic": "image/product/icon-b24.png",
      "title": "小程序",
      "text": "按打开次数收费"
    }],
    "picSizeB": 's',
    "intraB": "两种服务模式，满足您的多样化监控需求",
    "moduleClassB": "itemsB itemsB-tc itemsB-vertical",
    "itemsB": [{
      "pic": "image/product/icon-62.png",
      "title": "SaaS模式",
      "text": "按配额收费，价格更低廉"
    }, {
      "pic": "image/product/icon-61.png",
      "title": "私有部署模式",
      "text": "一次性买断，独享定制化需求"
    }] 
  }, {
    "name": "consulting",
    "text": "只需30秒，即可获得APM智能运维服务",
    "url": ""
  }]
}

export default data