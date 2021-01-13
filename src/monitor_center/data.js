const data = {
  "banner": {
    "pic_title": 'image/product/title.png',
    "title": '监控中心',
    "sub_title": '数字化运维',
    "intra": '面向业务与IT的新一代可视化监控产品'
  },
  "intra": {
    "width": 'w65',
    "text": "基于智能分析算法实现数字化运营状态的全局掌控，帮助管理人员直观审视业务运营与IT运维中的有效信息，通过可视化管理与有效决策，提升资产管理与监控管理的效率。",
  },
  "modules": [{
    "name": "tabModule",
    "wrapClass": "bg-blue",
    "title": "全方位的企业管理视角",
    "intra": "按照用户使用场景对产品模块进行分类，帮助企业的CIO和运维Leader、业务Leader从业务健康、IT资源健康、用户体验、安全态势以及问题事件等多维度关心企业的IT运维和业务运营。",
    "maintabs": [{
      "pic": "",
      "name": "IT资源健康感知",
      "tabcons": {
        "intra": "面向不同的客户及客户需求，对IT资源按照资源类型等不同维度进行分类与监控",
        "subtabs": [{
          "name": "数据中心实时状态监控",
          "html": {
            "pic": 'image/product/monitor-center/pic-a01.jpg',
            "text": '对企业数据中心的资源使用情况以及健康状态进行实时监控，并及时预警'
          }
        }, {
          "name": "基础资源状态监控",
          "html": {
            "pic": 'image/product/monitor-center/pic-a03.jpg',
            "text": '实时掌握企业基础资源的使用情况、健康度状态以及告警信息'
          } 
        }, {
          "name": "网络健康实时动态监控",
          "html": {
            "pic": 'image/product/monitor-center/pic-a04.jpg',
            "text": '虚拟云资源的可用性等实时状态一目了然，为资源优化提供数据支持。'
          }
        }, {
          "name": "虚拟云资源实时监控",
          "html": {
            "pic": "image/product/monitor-center/pic-a05.jpg",
            "text": "实时、全面的监控企业IDC资源的使用情况、访问状态以及告警情况，及时进行问题预警。"
          } 
        }, {
          "name": "IDC客户感知监控",
          "html": {
            "pic": "image/product/monitor-center/pic-a06.jpg",
            "text": "以用户现有的CDN业务数据为基础，通过对数据的分析与聚合，最终以可视化大屏的方式实时、准确、客观地展示用户CDN的使用情况，实现了CDN数据的可视化。"
          } 
        }, {
          "name": "CDN服务质量感知与评估",
          "html": {
            "pic": 'image/product/monitor-center/pic-a02.jpg',
            "text": '实时掌握企业基础资源的使用情况、健康度状态以及告警信息'
          }
        }]
      }
    }, {
      "pic": "",
      "name": "业务健康感知",
      "tabcons": {
        "intra": "面向不同的客户及客户需求，对IT资源按照资源类型等不同维度进行分类与监控",
        "subtabs": [{
          "name": "业务系统健康度实时监控",
          "html": {
            "pic": "image/product/monitor-center/pic-b02.jpg",
            "text": "全面监控业务系统的资产情况、业务系统可用率、网络性能、服务器/数据库资源性能等关键指标"
          }
        }, {
          "name": "业务指标看版",
          "html": {
            "pic": "image/product/monitor-center/pic-b01.jpg",
            "text": "针对保险行业，可视化展示业务系统实时交易数据的统计和分析结果。"
          }
        }, {
          "name": "业务交易实时监控",
          "html": {
            "pic": "image/product/monitor-center/pic-b03.jpg",
            "text": "针对保险行业的业务特征，展示业务的实时交易额以及完成率分布等关键指标"
          }
        }, {
          "name": "业务流程跟踪",
          "html": {
            "pic": "image/product/monitor-center/pic-b04.jpg",
            "text": "接入客户业务系统的指标数据，定义符合实际场景的业务流程，并对业务流程进行可视化管控与跟踪。"
          }
        }]
      }
    }, {
      "pic": "",
      "name": "用户体验感知",
      "tabcons": {
        "intra": "面向不同的客户及客户需求，对IT资源按照资源类型等不同维度进行分类与监控",
        "subtabs": [{
          "name": "基于拨测的用户体验监控",
          "html": {
            "pic": "image/product/monitor-center/pic-c01.jpg",
            "text": "实时监控企业不同地区的网络访问状态、运营商的性能、故障的整体情况，帮助管理者整体分析应用的网络性能。"
          }
        }, {
          "name": "移动端真实用户体验监控",
          "html": {
            "pic": "image/product/monitor-center/pic-c02.jpg",
            "text": "实时监控移动App的真实运行状态。"
          }
        }]
      }
    }, {
      "pic": "",
      "name": "问题事件管控",
      "tabcons": {
        "intra": "面向不同的客户及客户需求，对IT资源按照资源类型等不同维度进行分类与监控",
        "subtabs": [{
          "name": "事件全局管控",
          "html": {
            "pic": "image/product/monitor-center/pic-d01.jpg",
            "text": "对企业的业务、服务、基础设施等设备告警事件进行全局的统一监控，让企业业务和IT的运行状态尽在掌握。"
          }
        }]
      }
    }]
  }, {
    "name": "itemsB",
    "title": "产品优势",
    "moduleClass": "itemsB itemsB-lc",
    "items": [{
      "pic": "image/product/icon-b01.png",
      "title": "跨平台数据整合",
      "text": "兼容各种数据源，能够跨平台所有IT与业务数据，实时处理海量数据，消除数据孤岛。"
    }, {
      "pic": "image/product/icon-b02.png",
      "title": "高度场景化",
      "text": "产品采用高度模块化的设计思路，按照场景划分模块，客户可以按需使用。"
    }, {
      "pic": "image/product/icon-b03.png",
      "title": "智能化融合",
      "text": "支持异常检测、自动阈值、自动推荐、动态基线等多种智能算法，满足不同数据场景需求。"
    }, {
      "pic": "image/product/icon-b04.png",
      "title": "多终端展示",
      "text": "支持PC、移动端以及大屏多终端多屏展示，满足全场景使用需求。"
    }, {
      "pic": "image/product/icon-b05.png",
      "title": "软硬件一体化",
      "text": "集软件、硬件于一体，提供一站式的用户服务，在软件应用的基础上，配备完善的大屏投放于控制终端，操作便捷，所见即所得。"
    }, {
      "pic": "image/product/icon-b06.png",
      "title": "新一代UI视觉",
      "text": "通过用户心智需求模型为中心的设计理念，采用AR增强现实技术和四维的创新视觉架构，给用户带来浸泡式视觉体验，实现视觉上的人机情感交流。"
    }, {
      "pic": "image/product/icon-b07.png",
      "title": "专业的定制化服务",
      "text": "提供多种大屏模版，开箱即用。同时提供一站式的定制化服务，满足客户的个性化需求。"
    }]
  }, {
    "name": "itemsD",
    "title": "客户案例",
    "wrapClass": "case bg-blue",
    "moduleClass": "itemsD",
    "items": [{
      "pic": "image/product/icon-21.png"
    },{
      "pic": "image/product/icon-22.png"
    },{
      "pic": "image/product/icon-23.png"
    },{
      "pic": "image/product/icon-24.png"
    },{
      "pic": "image/product/icon-25.png"
    },{
      "pic": "image/product/icon-26.png"
    }]
  }, {
    "name": "consulting",
    "text": "只需30秒，立即体验智能业务运维专家服务",
    "url": ""
  }]
}

export default data