import {DIANXIN, LIANTONG, YIDONG, JIAOYU, GANGAOTAI, YATAI, OUMEI, FEIZHOU} from "./area";

const data = {
  "banner": {
    "pic_title": 'image/product/title.png',
    "title": '监控宝',
    "sub_title": '用户体验拨测',
    "intra": '主动式端到端监控，保障IT系统稳定可靠'
  },
  "modules": [{
    "name": "tabModule",
    "title": "打造全方位用户体验拨测",
    "intra": "基于业务、从全球节点主动模拟真实用户访问，持续监测应用程序、网站、网络和数字化服务的可用性和性能，提前诊断，帮助企业客户提升网络应用效能。",
    "maintabs": [{
      "pic": "",
      "name": "网站监控",
      "tabcons": {
        "intra": "7ⅹ24智能网站监测，全通道秒级故障告警，快速定位问题",
        "subtabs": [{
          "name": "可用率和响应时间分析",
          "html": {
            "pic": 'image/product/monitor/pic-a01.jpg',
            "text": '监测各地区和运营商的可用率和响应时间，展示监测点数据，帮助分析网站稳定性问题。'
          }
        }, {
          "name": "快照分析",
          "html": {
            "pic": 'image/product/monitor/pic-a02.jpg',
            "text": '记录全过程的访问数据，帮助客户了解故障发生时的网络状况，定位故障和性能瓶颈发生的位置，确定故障响应的范围。'
          } 
        }, {
          "name": "MTR报告",
          "html": {
            "pic": 'image/product/monitor/pic-a03.jpg',
            "text": '当网站监控任务发生请求超时、无法连接服务器、请求被拒绝或者无返回数据等网络问题时，系统执行MTR诊断命令并生成MTR报告。'
          }
        }, {
          "name": "告警通知",
          "html": {
            "pic": 'image/product/monitor/pic-a04.jpg',
            "text": '支持连续告警、重复告警以及自定义告警线，对故障、警报和系统通知进行统计，并提供历史快照的详细数据。'
          } 
        }, {
          "name": "多维度数据分析报告",
          "html": {
            "pic": 'image/product/monitor/pic-a05.jpg',
            "text": '提供监测点、运营商、地区、省份&运营商等多维度的报告统计。支持报告的导出，⽅便客户进行深入分析。'
          }
        }]
      }
    }, {
      "pic": "",
      "name": "页面性能监控",
      "tabcons": {
        "intra": "",
        "subtabs": [{
          "name": "网页整体性能分析",
          "html": {
            "pic": 'image/product/monitor/pic-b01.jpg',
            "text": '采用国际性能评估标准标准，对页面可用性、页面性能、资源可用性、资源性能、首屏时间等指标进行全面监控，数据逐层钻取，逐级分析定位性能问题。'
          }
        }, {
          "name": "CDN服务质量评估",
          "html": {
            "pic": 'image/product/monitor/pic-b02.jpg',
            "text": '提供监测点、运营商、地区、省份&对CDN服务厂商、CDN节点以及元素在CDN节点上的性能进行评估，分析CDN的性能，保证最佳的用户体验。'
          }
        }, {
          "name": "元素性能追踪",
          "html": {
            "pic": 'image/product/monitor/pic-b03.jpg',
            "text": '分析元素的相关性能指标帮助客户分辨元素的表现状态以及在不同主机上的表现状态，使客户能够及时对性能差的元素做出调整，避免元素对网页性能的影响。'
          }
        }, {
          "name": "页面可用性追踪",
          "html": {
            "pic": 'image/product/monitor/pic-b04.jpg',
            "text": '通过元素瀑布图和网络诊断图，对目标进行Ping以及TraceRoute分析，通过具体的信息来分析不可用的原因，进一步定位故障。'
          }
        }, {
          "name": "主机性能统计",
          "html": {
            "pic": 'image/product/monitor/pic-b05.jpg',
            "text": '分析不同域名下具体主机的表现状态，让用户能更好更清晰的了解目前各个主机情况，方便用户调整元素分布策略。'
          }
        }]
      }
    }, {
      "pic": "",
      "name": "API监控",
      "tabcons": {
        "intra": "",
        "subtabs": [{
          "name": "可用率和响应时间分析",
          "html": {
            "pic": 'image/product/monitor/pic-c01.jpg',
            "text": '按位置、区域、ISP统计API可用性和响应时间，以图表的形式显示不可用监控节点的趋势和故障原因比例，有助于分析和解决API稳定性问题。'
          }
        }, {
          "name": "正确性分析",
          "html": {
            "pic": 'image/product/monitor/pic-c02.jpg',
            "text": '验证数据的完整性，确保API能够返回正确的数据；以不同格式显示API的正确性分析数据，为API有效性分析提供方便。'
          }
        }, {
          "name": "事务监控",
          "html": {
            "pic": 'image/product/monitor/pic-c03.jpg',
            "text": '监控由多个步骤组成的事务。每个步骤对应一个API请求。事务监控可以监控简单或高度复杂的事务，如新用户注册、登录、搜索、结账等。'
          }
        },{
          "name": "快照分析",
          "html": {
            "pic": 'image/product/monitor/pic-c04.jpg',
            "text": '记录API请求、响应以及断言验证结果等信息。使用快照，问题分析和故障排除更加简单和高效。'
          }
        }]
      }
    }, {
      "pic": "",
      "name": "分布式监测网络",
      "tabcons": {
        "intra": "",
        "subtabs": [{
          "name": "大陆电信",
          "html": {
            "text": DIANXIN
          }
        }, {
          "name": "大陆联通",
          "html": {
            "text": LIANTONG
          }
        }, {
          "name": "大陆移动",
          "html": {
            "text": YIDONG
          }
        }, {
          "name": "教育网",
          "html": {
            "text": JIAOYU
          }
        }, {
          "name": "港澳台地区",
          "html": {
            "text": GANGAOTAI
          }
        }, {
          "name": "亚太地区",
          "html": {
            "text": YATAI
          }
        }, {
          "name": "欧美地区",
          "html": {
            "text": OUMEI
          }
        }, {
          "name": "非洲地区",
          "html": {
            "text": FEIZHOU
          }
        }]
      }
    }]
  }, {
    "name": "itemsA",
    "title": "应用场景",
    "wrapClass": "bg-blue",
    "items": [{
      "pic": "image/product/icon-a01.png",
      "title": "网络链路质量监控与评估",
      "text": "通过采集不同地区、不同运营商链路的时延、丢包、网络抖动情况，从时间、地域、运营商等维度综合分析网络链路质量及可用率，快速发现和准确定位网络问题，便于及时进行链路调整，保障全网用户的体验。"
    }, {
      "pic": "image/product/icon-a02.png",
      "title": "CDN监测",
      "text": "通过海量的分布式节点模仿真实用户访问，监控CDN性能，评估CDN的加速情况，确保最佳的用户体验，可用于CDN选型评估、CDN加速效果评估、CDN故障排查与定位等使用场景。"
    }, {
      "pic": "image/product/icon-a03.png",
      "title": "API接口监测",
      "text": "通过监控API接口的响应时间、可用性和正确性并及时告警来保证API服务的可靠性，可用于API接口性能优化、第三方API接口监控等使用场景。"
    }]
  }, {
    "name": "itemsB",
    "title": "产品优势",
    "moduleClass": "itemsB-tc",
    "items": [{
      "pic": "image/product/icon-b01.png",
      "title": "全球分布式监测网络",
      "text": "300+ 分布式监测节点覆盖全球112个城市以及主要运营商网络，网络规模持续扩大中。",
      "btn": {
        "text": "了解云智慧分布式网络详情",
        "url": ""
      }
    }, {
      "pic": "image/product/icon-b02.png",
      "title": "主动监测",
      "text": "监测节点按照预设规则模拟真实用户发起主动监测，实时掌控网络性能，聚焦用户体验。"
    }, {
      "pic": "image/product/icon-b03.png",
      "title": "立体化覆盖",
      "text": "HTTP/HTTPS/TCP/UDP/TR/DNS/PING等多种协议类型，全面问诊网络业务监控。"
    }, {
      "pic": "image/product/icon-b04.png",
      "title": "面向业务",
      "text": "通过包含多步请求的事物监控实现业务流程的监测，保障业务的稳定性和可用性。"
    }, {
      "pic": "image/product/icon-b05.png",
      "title": "持续监控",
      "text": "7*24小时全天候监测网站和网络性能，多渠道服务支持，减少可能发生的中断。"
    }, {
      "pic": "image/product/icon-b06.png",
      "title": "快照+MTR",
      "text": "先进的问题诊断与分析机制，问题发生之前和问题恢复之后的数据尽在掌握，快速定位故障。"
    }, {
      "pic": "image/product/icon-b07.png",
      "title": "灵活告警",
      "text": "短信、邮件、微信、语音、API等多种告警方式，确保告警能够被即时送达。"
    }, {
      "pic": "image/product/icon-b15.png",
      "title": "专业的分析报告",
      "text": "提供综合排名、竞品分析、同比/环比、日/周报等多维度的数据报告，满足专业化定制需求。"
    }]
  }, {
    "name": "itemsB",
    "title": "客户案例",
    "wrapClass": "case bg-blue service",
    "moduleClass": "itemsB",
    "picSize": "xs",
    "intra": "监控宝为广大互联网客户提供7*24小时的实时监控服务，帮助企业客户保证业务连续性、缩短故障时间、提升用户体验。",
    "items": [{
      "pic": "image/product/monitor/icon-11.png",
      "title": "小米商城",
      "text": "小米使用监控宝监控商城关键服务的用户访问体验，将RIO提升至10:1。"
    },{
      "pic": "image/product/monitor/icon-12.png",
      "title": "每日优鲜",
      "text": "每日优鲜使用监控宝监测业务系统的可用性和响应速度，缩短故障时间半小时。"
    },{
      "pic": "image/product/monitor/icon-13.png",
      "title": "Bilibili",
      "text": "Bilibili使用监控宝监测全球用户的访问体验，提高了用户的满意度。"
    },{
      "pic": "image/product/monitor/icon-14.png",
      "title": "易宝支付",
      "text": "易宝支付使用监控宝监测服务可用性和业务流程的完整性，保证用户体验。"
    }]
  }, {
    "name": "itemsA",
    "title": "服务模式",
    "moduleClass": "itemsA itemsA-btn",
    "hasBtn": true,
    "items": [{
      "pic": "image/product/icon-a31.png",
      "title": "SaaS模式",
      "text": "监控宝基于SaaS模式按使用配额收费，价格低廉，使用方便\\n★立即联系销售，获取报价详情",
      "tips": "想对企业内网、专网以及内网业务系统进行监控？请访问我们的<a href='./product-box.html'>IT监控魔盒</a>或者联系我们的售前专家获取帮助。",
      "url": ""
    }]
  }, {
    "name": "itemsH",
    "title": "文档与工具",
    "wrapClass": "bg-blue",
    "items": [{
      "pic": "image/product/monitor/icon-01.png",
      "title": "查看文档",
      "text": "查看监控宝相关文档"
    }, {
      "pic": "image/product/monitor/icon-02.png",
      "title": "快速入门",
      "text": "快速使用监控宝"
    }, {
      "pic": "image/product/monitor/icon-03.png",
      "title": "常见问题",
      "text": "产品使用FAQ"
    }, {
      "pic": "image/product/monitor/icon-04.png",
      "title": "API接口",
      "text": "查看监控宝的OpenAPI"
    }]
  }, {
    "name": "consulting",
    "text": "只需30秒，立即享用“全栈”IT性能监控服务",
    "url": ""
  }]
}

export default data