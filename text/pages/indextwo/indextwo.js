const util = require('../../utils/util.js')
let app = getApp()


Page({

  /**
   * 页面的初始数据
   */
  data: {
    savatext: '保存图片',
    mainHeight: 0,
    selectIndex: 0,
    isShow: true,
    list: ['1-3年', '3-5年', '5-7年', '7-10年', '10-15年', '15年以上'],
    imglist: [
      'https://fapiao.gaodun.com/Public/cma/jiang_1.png', //奖状形状1
      'https://fapiao.gaodun.com/Public/cma/jiang_2.png', //奖状形状2
      'https://fapiao.gaodun.com/Public/cma/bg.jpg', //最底层背景
      'https://fapiao.gaodun.com/Public/cma/bm.jpg', //本命背景
      'https://fapiao.gaodun.com/Public/cma/x_bg.png', //白色背景
      'https://fapiao.gaodun.com/Public/cma/wx.png', //微信
    ],
    newList: [],
    result: [],
    resultlist: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },
  select(e) {
    this.setData({
      selectIndex: e.target.dataset.index,
    })
    app.globalData.two = e.target.dataset.item
    this.setData({
      result: [app.globalData.one, app.globalData.two]
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {
    const that = this;
    util.rem(463, (res) => {
      this.setData({
        mainHeight: res
      })
    })
    wx.getSystemInfo({
      success: function(res) {
        that.setData({
          systemInfo: res,
          rem: res.screenWidth / 750
        })
      }
    })
    this.setData({
      result: [app.globalData.one, app.globalData.two]
    })
  },
  rem(int) {
    return int * this.data.rem
  },
  /**
   * 下一步
   */
  next() {
    wx.showLoading({
      title: '正在计算',
      mask: true,
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
    let result = []
    if (this.data.result[0] == '会计/助理会计/出纳' && this.data.result[1] == '1-3年') {
      result = [{
          title: '初级会计职称',
          main: '会计职称是衡量个人会计业务水平高低的标准，会计职称越高，表明你会计业务水平越高。现有会计职称：初级、中级和高级，证书全国范围内有效。'
        }, {
          title: 'ACCA',
          main: 'ACCA在国内称为"国际注册会计师"，被认为是"国际财会界的通行证"。许多国家立法许可ACCA会员从事审计、投资顾问和破产执行工作。'

        },
        {
          title: 'CMA',
          main: 'CMA即美国注册管理会计师，是美国管理会计师协会（IMA）旗下的注册管理会计师认证（CMA认证），同时被誉为财会界的Mini-MBA及美国财会领域的三大黄金认证之一，在全球范围内被企业财务高管所认可。'

        }

      ]
    } else if (this.data.result[0] == '审计员/主管' && this.data.result[1] == '1-3年') {
      result = [{
          title: '中级会计职称',
          main: '会计职称是衡量个人会计业务水平高低的标准，会计职称越高，表明你会计业务水平越高。现有会计职称：初级、中级和高级，证书全国范围内有效。'
        }, {
          title: '审计师',
          main: '审计师是专门从事检查并进一步证实公司会计账目和报告的正确性、 合理性和可接受性的专业人员'
        },
        {
          title: 'CPA',
          main: '注册会计师缩写，从事社会审计/中介审计/独立审计等专业人士优选证书，CPA为中国唯一官方认可的注册会计师资质，唯一拥有签字权的执业资质。'
        }

      ]
    } else if (this.data.result[0] == '财务主管/经理' && this.data.result[1] == '1-3年') {
      result = [{
        title: 'CPA',
        main: '注册会计师缩写，从事社会审计/中介审计/独立审计等专业人士优选证书，CPA为中国唯一官方认可的注册会计师资质，唯一拥有签字权的执业资质。'

      }, {
        title: 'CMA',
        main: 'CMA即美国注册管理会计师，是美国管理会计师协会（IMA）旗下的注册管理会计师认证（CMA认证），同时被誉为财会界的Mini-MBA及美国财会领域的三大黄金认证之一，在全球范围内被企业财务高管所认可。'

      }]
    } else if (this.data.result[0] == '预算专员/主管' && this.data.result[1] == '1-3年') {
      result = [{
        title: '经济师',
        main: '经济师，是我国职称之一，设两个级别：经济专业初级资格、经济专业中级资格。参加考试并成绩合格者，获得相应级别的专业技术资格，由人事部统一发放合格证书。'

      }, {
        title: 'CMA',
        main: 'CMA即美国注册管理会计师，是美国管理会计师协会（IMA）旗下的注册管理会计师认证（CMA认证），同时被誉为财会界的Mini-MBA及美国财会领域的三大黄金认证之一，在全球范围内被企业财务高管所认可。'

      }]
    } else if (this.data.result[0] == '总会计师/财务总监' && this.data.result[1] == '1-3年') {
      result = [{
        title: 'CMA',
        main: 'CMA即美国注册管理会计师，是美国管理会计师协会（IMA）旗下的注册管理会计师认证（CMA认证），同时被誉为财会界的Mini-MBA及美国财会领域的三大黄金认证之一，在全球范围内被企业财务高管所认可。'

      }, {
        title: 'CFA',
        main: '全称 特许注册金融分析师，是全球投资业里最为严格与高含金量资格认证，被称为金融第一考的考试，为全球投资业在道德操守、专业标准及知识体系等方面设立了规范与标准。'
      }, {
        title: 'CPA',
        main: '注册会计师缩写，从事社会审计/中介审计/独立审计等专业人士优选证书，CPA为中国唯一官方认可的注册会计师资质，唯一拥有签字权的执业资质。'

      }]
    } else if (this.data.result[0] == '风险管理/控制' && this.data.result[1] == '1-3年') {
      result = [{
        title: 'FRM',
        main: '是全球金融风险管理领域顶级的权威国际资格认证，由美国“全球风险管理专业人士协会”开发。由人力资源和社会保障部批准为国家职业资格证书。'

      }, {
        title: 'CMA',
        main: 'CMA即美国注册管理会计师，是美国管理会计师协会（IMA）旗下的注册管理会计师认证（CMA认证），同时被誉为财会界的Mini-MBA及美国财会领域的三大黄金认证之一，在全球范围内被企业财务高管所认可。'
      }]
    } else if (this.data.result[0] == '债券/证券交易' && this.data.result[1] == '1-3年') {
      result = [{
        title: '证券从业',
        main: '证券从业资格证被称为证券行业的准入证，是进入银行或非银行金融机构、上市公司、投资公司、大型企业集团、财经媒体、政府经济部门的重要参考'

      }, {
        title: 'CFA',
        main: '全称 特许注册金融分析师，是全球投资业里最为严格与高含金量资格认证，被称为金融第一考的考试，为全球投资业在道德操守、专业标准及知识体系等方面设立了规范与标准。'

      }]
    } else if (this.data.result[0] == '投资分析员/经理' && this.data.result[1] == '1-3年') {
      result = [{
        title: 'CFA',
        main: '全称 特许注册金融分析师，是全球投资业里最为严格与高含金量资格认证，被称为金融第一考的考试，为全球投资业在道德操守、专业标准及知识体系等方面设立了规范与标准。'

      }, {
        title: 'CMA',
        main: 'CMA即美国注册管理会计师，是美国管理会计师协会（IMA）旗下的注册管理会计师认证（CMA认证），同时被誉为财会界的Mini-MBA及美国财会领域的三大黄金认证之一，在全球范围内被企业财务高管所认可。'

      }]
    } else if (this.data.result[0] == '融资/外汇专员' && this.data.result[1] == '1-3年') {
      result = [{
        title: '经济师',
        main: '经济师，是我国职称之一，设两个级别：经济专业初级资格、经济专业中级资格。参加考试并成绩合格者，获得相应级别的专业技术资格，由人事部统一发放合格证书。'

      }, {
        title: 'CFA',
        main: '全称 特许注册金融分析师，是全球投资业里最为严格与高含金量资格认证，被称为金融第一考的考试，为全球投资业在道德操守、专业标准及知识体系等方面设立了规范与标准。'

      }]
    } else if (this.data.result[0] == '会计/助理会计/出纳' && this.data.result[1] == '3-5年') {
      result = [{
        title: 'CPA',
        main: '注册会计师缩写，从事社会审计/中介审计/独立审计等专业人士优选证书，CPA为中国唯一官方认可的注册会计师资质，唯一拥有签字权的执业资质。'

      }, {
        title: 'CMA',
        main: 'CMA即美国注册管理会计师，是美国管理会计师协会（IMA）旗下的注册管理会计师认证（CMA认证），同时被誉为财会界的Mini-MBA及美国财会领域的三大黄金认证之一，在全球范围内被企业财务高管所认可。'

      }]
    } else if (this.data.result[0] == '审计员/主管' && this.data.result[1] == '3-5年') {
      result = [{
          title: 'USCPA',
          main: 'USCPA是IFRS时代世界通行证。可在全球范围内与多国的注册会计师体系完成互认。（加拿大、英国、中国香港、新西兰、澳大利亚、爱尔兰等）'
        }, {
          title: '审计师',
          main: '审计师是专门从事检查并进一步证实公司会计账目和报告的正确性、 合理性和可接受性的专业人员 '
        },
        {
          title: 'CPA',
          main: '注册会计师缩写，从事社会审计/中介审计/独立审计等专业人士优选证书，CPA为中国唯一官方认可的注册会计师资质，唯一拥有签字权的执业资质。'

        }

      ]
    } else if (this.data.result[0] == '财务主管/经理' && this.data.result[1] == '3-5年') {
      result = [{
        title: 'CMA',
        main: 'CMA即美国注册管理会计师，是美国管理会计师协会（IMA）旗下的注册管理会计师认证（CMA认证），同时被誉为财会界的Mini-MBA及美国财会领域的三大黄金认证之一，在全球范围内被企业财务高管所认可'

      }]
    } else if (this.data.result[0] == '预算专员/主管' && this.data.result[1] == '3-5年') {
      result = [{
        title: 'ACCA',
        main: 'ACCA在国内称为"国际注册会计师"，被认为是"国际财会界的通行证"。许多国家立法许可ACCA会员从事审计、投资顾问和破产执行工作。'

      }, {
        title: 'CMA',
        main: 'CMA即美国注册管理会计师，是美国管理会计师协会（IMA）旗下的注册管理会计师认证（CMA认证），同时被誉为财会界的Mini-MBA及美国财会领域的三大黄金认证之一，在全球范围内被企业财务高管所认可。'

      }]
    } else if (this.data.result[0] == '总会计师/财务总监' && this.data.result[1] == '3-5年') {
      result = [{
        title: 'CMA',
        main: 'CMA即美国注册管理会计师，是美国管理会计师协会（IMA）旗下的注册管理会计师认证（CMA认证），同时被誉为财会界的Mini-MBA及美国财会领域的三大黄金认证之一，在全球范围内被企业财务高管所认可。'

      }, {
        title: 'USCPA',
        main: 'USCPA是IFRS时代世界通行证。可在全球范围内与多国的注册会计师体系完成互认。（加拿大、英国、中国香港、新西兰、澳大利亚、爱尔兰等）'

      }]
    } else if (this.data.result[0] == '风险管理/控制' && this.data.result[1] == '3-5年') {
      result = [{
        title: 'FRM',
        main: '是全球金融风险管理领域顶级的权威国际资格认证，由美国“全球风险管理专业人士协会”开发。由人力资源和社会保障部批准为国家职业资格证书。'

      }, {
        title: 'CMA',
        main: 'CMA即美国注册管理会计师，是美国管理会计师协会（IMA）旗下的注册管理会计师认证（CMA认证），同时被誉为财会界的Mini-MBA及美国财会领域的三大黄金认证之一，在全球范围内被企业财务高管所认可。'

      }, {
        title: 'CFA',
        main: '全称 特许注册金融分析师，是全球投资业里最为严格与高含金量资格认证，被称为金融第一考的考试，为全球投资业在道德操守、专业标准及知识体系等方面设立了规范与标准。'

      }]
    } else if (this.data.result[0] == '债券/证券交易' && this.data.result[1] == '3-5年') {
      result = [{
        title: 'CFP',
        main: 'CFP国际金融理财师简称，全世界公认的金融理财行业权威等级证书。 广泛授予金融理财领域内的专业人员，包括理财经理、基金经理、财务总监、投资顾问、投资银行家、理财顾问等。'

      }, {
        title: 'CFA',
        main: '全称 特许注册金融分析师，是全球投资业里最为严格与高含金量资格认证，被称为金融第一考的考试，为全球投资业在道德操守、专业标准及知识体系等方面设立了规范与标准。'

      }]
    } else if (this.data.result[0] == '投资分析员/经理' && this.data.result[1] == '3-5年') {
      result = [{
        title: 'CFA',
        main: '全称 特许注册金融分析师，是全球投资业里最为严格与高含金量资格认证，被称为金融第一考的考试，为全球投资业在道德操守、专业标准及知识体系等方面设立了规范与标准。'

      }, {
        title: 'CMA',
        main: 'CMA即美国注册管理会计师，是美国管理会计师协会（IMA）旗下的注册管理会计师认证（CMA认证），同时被誉为财会界的Mini-MBA及美国财会领域的三大黄金认证之一，在全球范围内被企业财务高管所认可。'

      }, {
        title: 'CPA',
        main: '注册会计师缩写，从事社会审计/中介审计/独立审计等专业人士优选证书，CPA为中国唯一官方认可的注册会计师资质，唯一拥有签字权的执业资质。'

      }]
    } else if (this.data.result[0] == '融资/外汇专员' && this.data.result[1] == '3-5年') {
      result = [{
        title: 'FRM',
        main: '是全球金融风险管理领域顶级的权威国际资格认证，由美国“全球风险管理专业人士协会”开发。由人力资源和社会保障部批准为国家职业资格证书。'

      }, {
        title: 'CFA',
        main: '全称 特许注册金融分析师，是全球投资业里最为严格与高含金量资格认证，被称为金融第一考的考试，为全球投资业在道德操守、专业标准及知识体系等方面设立了规范与标准。'

      }, {
        title: 'CFP',
        main: 'CFP国际金融理财师简称，全世界公认的金融理财行业权威等级证书。 广泛授予金融理财领域内的专业人员，包括理财经理、基金经理、财务总监、投资顾问、投资银行家、理财顾问等。'

      }]
    } else if (this.data.result[0] == '会计/助理会计/出纳' && this.data.result[1] == '5-7年') {
      result = [{
        title: '高级会计职称',
        main: '会计职称是衡量个人会计业务水平高低的标准，会计职称越高，表明你会计业务水平越高。现有会计职称：初级、中级和高级，证书全国范围内有效。'

      }, {
        title: 'CMA',
        main: 'CMA即美国注册管理会计师，是美国管理会计师协会（IMA）旗下的注册管理会计师认证（CMA认证），同时被誉为财会界的Mini-MBA及美国财会领域的三大黄金认证之一，在全球范围内被企业财务高管所认可。'

      }]
    } else if (this.data.result[0] == '审计员/主管' && this.data.result[1] == '5-7年') {
      result = [{
          title: '经济师',
          main: '经济师，是我国职称之一，设两个级别：经济专业初级资格、经济专业中级资格。参加考试并成绩合格者，获得相应级别的专业技术资格，由人事部统一发放合格证书。'

        }, {
          title: '审计师',
          main: '审计师是专门从事检查并进一步证实公司会计账目和报告的正确性、合理性和可接受性的专业人员'

        },
        {
          title: 'CPA',
          main: '注册会计师缩写，从事社会审计/中介审计/独立审计等专业人士优选证书，CPA为中国唯一官方认可的注册会计师资质，唯一拥有签字权的执业资质。'
        }

      ]
    } else if (this.data.result[0] == '财务主管/经理' && this.data.result[1] == '5-7年') {
      result = [{
        title: 'CMA',
        main: 'CMA即美国注册管理会计师，是美国管理会计师协会（IMA）旗下的注册管理会计师认证（CMA认证），同时被誉为财会界的Mini-MBA及美国财会领域的三大黄金认证之一，在全球范围内被企业财务高管所认可。'

      }, {
        title: 'CPA',
        main: '注册会计师缩写，从事社会审计/中介审计/独立审计等专业人士优选证书，CPA为中国唯一官方认可的注册会计师资质，唯一拥有签字权的执业资质。'

      }, {
        title: 'ACCA',
        main: 'ACCA在国内称为"国际注册会计师"，被认为是"国际财会界的通行证"。许多国家立法许可ACCA会员从事审计、投资顾问和破产执行工作。'

      }]
    } else if (this.data.result[0] == '预算专员/主管' && this.data.result[1] == '5-7年') {
      result = [{
        title: '经济师',
        main: '经济师，是我国职称之一，设两个级别：经济专业初级资格、经济专业中级资格。参加考试并成绩合格者，获得相应级别的专业技术资格，由人事部统一发放合格证书。'

      }, {
        title: 'CMA',
        main: 'CMA即美国注册管理会计师，是美国管理会计师协会（IMA）旗下的注册管理会计师认证（CMA认证），同时被誉为财会界的Mini-MBA及美国财会领域的三大黄金认证之一，在全球范围内被企业财务高管所认可。'

      }]
    } else if (this.data.result[0] == '总会计师/财务总监' && this.data.result[1] == '5-7年') {
      result = [{
        title: 'CMA',
        main: 'CMA即美国注册管理会计师，是美国管理会计师协会（IMA）旗下的注册管理会计师认证（CMA认证），同时被誉为财会界的Mini-MBA及美国财会领域的三大黄金认证之一，在全球范围内被企业财务高管所认可。'

      }, {
        title: 'USCPA',
        main: 'USCPA是IFRS时代世界通行证。可在全球范围内与多国的注册会计师体系完成互认。（加拿大、英国、中国香港、新西兰、澳大利亚、爱尔兰等）'
      }, {
        title: 'CPA',
        main: '注册会计师缩写，从事社会审计/中介审计/独立审计等专业人士优选证书，CPA为中国唯一官方认可的注册会计师资质，唯一拥有签字权的执业资质。'

      }]
    } else if (this.data.result[0] == '风险管理/控制' && this.data.result[1] == '5-7年') {
      result = [{
        title: 'FRM',
        main: '是全球金融风险管理领域顶级的权威国际资格认证，由美国“全球风险管理专业人士协会”开发。由人力资源和社会保障部批准为国家职业资格证书。'

      }, {
        title: 'CFA',
        main: '全称 特许注册金融分析师，是全球投资业里最为严格与高含金量资格认证，被称为金融第一考的考试，为全球投资业在道德操守、专业标准及知识体系等方面设立了规范与标准。'

      }]
    } else if (this.data.result[0] == '债券/证券交易' && this.data.result[1] == '5-7年') {
      result = [{
        title: 'CFP',
        main: 'CFP国际金融理财师简称，全世界公认的金融理财行业权威等级证书。 广泛授予金融理财领域内的专业人员，包括理财经理、基金经理、财务总监、投资顾问、投资银行家、理财顾问等。'

      }, {
        title: 'CFA',
        main: '全称 特许注册金融分析师，是全球投资业里最为严格与高含金量资格认证，被称为金融第一考的考试，为全球投资业在道德操守、专业标准及知识体系等方面设立了规范与标准。'

      }]
    } else if (this.data.result[0] == '投资分析员/经理' && this.data.result[1] == '5-7年') {
      result = [{
        title: 'CFA',
        main: '全称 特许注册金融分析师，是全球投资业里最为严格与高含金量资格认证，被称为金融第一考的考试，为全球投资业在道德操守、专业标准及知识体系等方面设立了规范与标准。'

      }, {
        title: 'CMA',
        main: 'CMA即美国注册管理会计师，是美国管理会计师协会（IMA）旗下的注册管理会计师认证（CMA认证），同时被誉为财会界的Mini-MBA及美国财会领域的三大黄金认证之一，在全球范围内被企业财务高管所认可。'

      }, {
        title: '经济师',
        main: '经济师，是我国职称之一，设两个级别：经济专业初级资格、经济专业中级资格。参加考试并成绩合格者，获得相应级别的专业技术资格，由人事部统一发放合格证书。'

      }]
    } else if (this.data.result[0] == '融资/外汇专员' && this.data.result[1] == '5-7年') {
      result = [{
        title: '经济师',
        main: '经济师，是我国职称之一，设两个级别：经济专业初级资格、经济专业中级资格。参加考试并成绩合格者，获得相应级别的专业技术资格，由人事部统一发放合格证书。'

      }, {
        title: 'CFA',
        main: '全称 特许注册金融分析师，是全球投资业里最为严格与高含金量资格认证，被称为金融第一考的考试，为全球投资业在道德操守、专业标准及知识体系等方面设立了规范与标准。'

      }, {
        title: 'CFP',
        main: 'CFP国际金融理财师简称，全世界公认的金融理财行业权威等级证书。 广泛授予金融理财领域内的专业人员，包括理财经理、基金经理、财务总监、投资顾问、投资银行家、理财顾问等。'

      }]
    } else if (this.data.result[0] == '会计/助理会计/出纳' && this.data.result[1] == '7-10年') {
      result = [{
        title: 'ACCA',
        main: 'ACCA在国内称为"国际注册会计师"，被认为是"国际财会界的通行证"。许多国家立法许可ACCA会员从事审计、投资顾问和破产执行工作。'

      }, {
        title: 'CPA',
        main: '注册会计师缩写，从事社会审计/中介审计/独立审计等专业人士优选证书，CPA为中国唯一官方认可的注册会计师资质，唯一拥有签字权的执业资质。'

      }, {
        title: 'CMA',
        main: 'CMA即美国注册管理会计师，是美国管理会计师协会（IMA）旗下的注册管理会计师认证（CMA认证），同时被誉为财会界的Mini-MBA及美国财会领域的三大黄金认证之一，在全球范围内被企业财务高管所认可。'

      }]
    } else if (this.data.result[0] == '审计员/主管' && this.data.result[1] == '7-10年') {
      result = [{
          title: '经济师',
          main: '经济师，是我国职称之一，设两个级别：经济专业初级资格、经济专业中级资格。参加考试并成绩合格者，获得相应级别的专业技术资格，由人事部统一发放合格证书。'

        }, {
          title: 'CMA',
          main: 'CMA即美国注册管理会计师，是美国管理会计师协会（IMA）旗下的注册管理会计师认证（CMA认证），同时被誉为财会界的Mini-MBA及美国财会领域的三大黄金认证之一，在全球范围内被企业财务高管所认可。'

        },
        {
          title: 'CPA',
          main: '注册会计师缩写，从事社会审计/中介审计/独立审计等专业人士优选证书，CPA为中国唯一官方认可的注册会计师资质，唯一拥有签字权的执业资质。'

        }

      ]
    } else if (this.data.result[0] == '财务主管/经理' && this.data.result[1] == '7-10年') {
      result = [{
        title: 'CMA',
        main: 'CMA即美国注册管理会计师，是美国管理会计师协会（IMA）旗下的注册管理会计师认证（CMA认证），同时被誉为财会界的Mini-MBA及美国财会领域的三大黄金认证之一，在全球范围内被企业财务高管所认可。'

      }]
    } else if (this.data.result[0] == '预算专员/主管' && this.data.result[1] == '7-10年') {
      result = [{
        title: '税务师',
        main: '从事税务代理的专门人员，税务师资格的取得实行考试和认定制度，证书登记服务的具体工作由全国税务师行业协会负责。'

      }, {
        title: 'CMA',
        main: 'CMA即美国注册管理会计师，是美国管理会计师协会（IMA）旗下的注册管理会计师认证（CMA认证），同时被誉为财会界的Mini-MBA及美国财会领域的三大黄金认证之一，在全球范围内被企业财务高管所认可。'

      }]
    } else if (this.data.result[0] == '总会计师/财务总监' && this.data.result[1] == '7-10年') {
      result = [{
        title: 'CMA',
        main: 'CMA即美国注册管理会计师，是美国管理会计师协会（IMA）旗下的注册管理会计师认证（CMA认证），同时被誉为财会界的Mini-MBA及美国财会领域的三大黄金认证之一，在全球范围内被企业财务高管所认可。'

      }, {
        title: 'CPA',
        main: '注册会计师缩写，从事社会审计/中介审计/独立审计等专业人士优选证书，CPA为中国唯一官方认可的注册会计师资质，唯一拥有签字权的执业资质。'

      }]
    } else if (this.data.result[0] == '风险管理/控制' && this.data.result[1] == '7-10年') {
      result = [{
        title: 'FRM',
        main: '是全球金融风险管理领域顶级的权威国际资格认证，由美国“全球风险管理专业人士协会”开发。由人力资源和社会保障部批准为国家职业资格证书。'

      }, {
        title: 'CMA',
        main: 'CMA即美国注册管理会计师，是美国管理会计师协会（IMA）旗下的注册管理会计师认证（CMA认证），同时被誉为财会界的Mini-MBA及美国财会领域的三大黄金认证之一，在全球范围内被企业财务高管所认可。'

      }]
    } else if (this.data.result[0] == '债券/证券交易' && this.data.result[1] == '7-10年') {
      result = [{
        title: 'CFA',
        main: '全称 特许注册金融分析师，是全球投资业里最为严格与高含金量资格认证，被称为金融第一考的考试，为全球投资业在道德操守、专业标准及知识体系等方面设立了规范与标准。'

      }]
    } else if (this.data.result[0] == '投资分析员/经理' && this.data.result[1] == '7-10年') {
      result = [{
        title: 'CFA',
        main: '全称 特许注册金融分析师，是全球投资业里最为严格与高含金量资格认证，被称为金融第一考的考试，为全球投资业在道德操守、专业标准及知识体系等方面设立了规范与标准。'

      }, {
        title: 'CMA',
        main: 'CMA即美国注册管理会计师，是美国管理会计师协会（IMA）旗下的注册管理会计师认证（CMA认证），同时被誉为财会界的Mini-MBA及美国财会领域的三大黄金认证之一，在全球范围内被企业财务高管所认可。'

      }]
    } else if (this.data.result[0] == '融资/外汇专员' && this.data.result[1] == '7-10年') {
      result = [{
        title: 'CFA',
        main: '全称 特许注册金融分析师，是全球投资业里最为严格与高含金量资格认证，被称为金融第一考的考试，为全球投资业在道德操守、专业标准及知识体系等方面设立了规范与标准。'

      }]
    } else if (this.data.result[0] == '会计/助理会计/出纳' && this.data.result[1] == '10-15年') {
      result = [{
        title: 'CPA',
        main: '注册会计师缩写，从事社会审计/中介审计/独立审计等专业人士优选证书，CPA为中国唯一官方认可的注册会计师资质，唯一拥有签字权的执业资质。'

      }, {
        title: 'CMA',
        main: 'CMA即美国注册管理会计师，是美国管理会计师协会（IMA）旗下的注册管理会计师认证（CMA认证），同时被誉为财会界的Mini-MBA及美国财会领域的三大黄金认证之一，在全球范围内被企业财务高管所认可。'

      }]
    } else if (this.data.result[0] == '审计员/主管' && this.data.result[1] == '10-15年') {
      result = [{
          title: 'USCPA',
          main: 'USCPA是IFRS时代世界通行证。可在全球范围内与多国的注册会计师体系完成互认。（加拿大、英国、中国香港、新西兰、澳大利亚、爱尔兰等）'

        },
        {
          title: 'CPA',
          main: '注册会计师缩写，从事社会审计/中介审计/独立审计等专业人士优选证书，CPA为中国唯一官方认可的注册会计师资质，唯一拥有签字权的执业资质。'

        }

      ]
    } else if (this.data.result[0] == '财务主管/经理' && this.data.result[1] == '10-15年') {
      result = [{
        title: 'CMA',
        main: 'CMA即美国注册管理会计师，是美国管理会计师协会（IMA）旗下的注册管理会计师认证（CMA认证），同时被誉为财会界的Mini-MBA及美国财会领域的三大黄金认证之一，在全球范围内被企业财务高管所认可。'

      }]
    } else if (this.data.result[0] == '预算专员/主管' && this.data.result[1] == '10-15年') {
      result = [{
        title: 'CPA',
        main: '注册会计师缩写，从事社会审计/中介审计/独立审计等专业人士优选证书，CPA为中国唯一官方认可的注册会计师资质，唯一拥有签字权的执业资质。'

      }, {
        title: 'CMA',
        main: 'CMA即美国注册管理会计师，是美国管理会计师协会（IMA）旗下的注册管理会计师认证（CMA认证），同时被誉为财会界的Mini-MBA及美国财会领域的三大黄金认证之一，在全球范围内被企业财务高管所认可。'

      }]
    } else if (this.data.result[0] == '总会计师/财务总监' && this.data.result[1] == '10-15年') {
      result = [{
        title: 'CMA',
        main: 'CMA即美国注册管理会计师，是美国管理会计师协会（IMA）旗下的注册管理会计师认证（CMA认证），同时被誉为财会界的Mini-MBA及美国财会领域的三大黄金认证之一，在全球范围内被企业财务高管所认可。'

      }, {
        title: 'CPA',
        main: '注册会计师缩写，从事社会审计/中介审计/独立审计等专业人士优选证书，CPA为中国唯一官方认可的注册会计师资质，唯一拥有签字权的执业资质。'

      }, {
        title: 'CFA',
        main: '全称 特许注册金融分析师，是全球投资业里最为严格与高含金量资格认证，被称为金融第一考的考试，为全球投资业在道德操守、专业标准及知识体系等方面设立了规范与标准。'

      }]
    } else if (this.data.result[0] == '风险管理/控制' && this.data.result[1] == '10-15年') {
      result = [{
        title: 'FRM',
        main: '是全球金融风险管理领域顶级的权威国际资格认证，由美国“全球风险管理专业人士协会”开发。由人力资源和社会保障部批准为国家职业资格证书。'

      }, {
        title: 'CMA',
        main: 'CMA即美国注册管理会计师，是美国管理会计师协会（IMA）旗下的注册管理会计师认证（CMA认证），同时被誉为财会界的Mini-MBA及美国财会领域的三大黄金认证之一，在全球范围内被企业财务高管所认可。'

      }]
    } else if (this.data.result[0] == '债券/证券交易' && this.data.result[1] == '10-15年') {
      result = [{
        title: 'CFA',
        main: '全称 特许注册金融分析师，是全球投资业里最为严格与高含金量资格认证，被称为金融第一考的考试，为全球投资业在道德操守、专业标准及知识体系等方面设立了规范与标准。'

      }]
    } else if (this.data.result[0] == '投资分析员/经理' && this.data.result[1] == '10-15年') {
      result = [{
        title: 'CFA',
        main: '全称 特许注册金融分析师，是全球投资业里最为严格与高含金量资格认证，被称为金融第一考的考试，为全球投资业在道德操守、专业标准及知识体系等方面设立了规范与标准。'

      }, {
        title: 'CMA',
        main: 'CMA即美国注册管理会计师，是美国管理会计师协会（IMA）旗下的注册管理会计师认证（CMA认证），同时被誉为财会界的Mini-MBA及美国财会领域的三大黄金认证之一，在全球范围内被企业财务高管所认可。'

      }, {
        title: '经济师',
        main: '经济师，是我国职称之一，设两个级别：经济专业初级资格、经济专业中级资格。参加考试并成绩合格者，获得相应级别的专业技术资格，由人事部统一发放合格证书。',
      }]
    } else if (this.data.result[0] == '融资/外汇专员' && this.data.result[1] == '10-15年') {
      result = [{
        title: 'CFA',
        main: '全称 特许注册金融分析师，是全球投资业里最为严格与高含金量资格认证，被称为金融第一考的考试，为全球投资业在道德操守、专业标准及知识体系等方面设立了规范与标准。'

      }]
    } else if (this.data.result[0] == '会计/助理会计/出纳' && this.data.result[1] == '15年以上') {
      result = [{
        title: 'CPA',
        main: '注册会计师缩写，从事社会审计/中介审计/独立审计等专业人士优选证书，CPA为中国唯一官方认可的注册会计师资质，唯一拥有签字权的执业资质。'

      }, {
        title: 'CMA',
        main: 'CMA即美国注册管理会计师，是美国管理会计师协会（IMA）旗下的注册管理会计师认证（CMA认证），同时被誉为财会界的Mini-MBA及美国财会领域的三大黄金认证之一，在全球范围内被企业财务高管所认可。'

      }, {
        title: 'ACCA',
        main: 'ACCA在国内称为"国际注册会计师"，被认为是"国际财会界的通行证"。许多国家立法许可ACCA会员从事审计、投资顾问和破产执行工作。'

      }]
    } else if (this.data.result[0] == '审计员/主管' && this.data.result[1] == '15年以上') {
      result = [{
          title: '税务师',
          main: '从事税务代理的专门人员，税务师资格的取得实行考试和认定制度，证书登记服务的具体工作由全国税务师行业协会负责。'

        },
        {
          title: 'CPA',
          main: '注册会计师缩写，从事社会审计/中介审计/独立审计等专业人士优选证书，CPA为中国唯一官方认可的注册会计师资质，唯一拥有签字权的执业资质。'
        }

      ]
    } else if (this.data.result[0] == '财务主管/经理' && this.data.result[1] == '15年以上') {
      result = [{
        title: 'CMA',
        main: 'CMA即美国注册管理会计师，是美国管理会计师协会（IMA）旗下的注册管理会计师认证（CMA认证），同时被誉为财会界的Mini-MBA及美国财会领域的三大黄金认证之一，在全球范围内被企业财务高管所认可。'

      }, {
        title: 'CPA',
        main: '注册会计师缩写，从事社会审计/中介审计/独立审计等专业人士优选证书，CPA为中国唯一官方认可的注册会计师资质，唯一拥有签字权的执业资质。'

      }]
    } else if (this.data.result[0] == '预算专员/主管' && this.data.result[1] == '15年以上') {
      result = [{
        title: 'CPA',
        main: '注册会计师缩写，从事社会审计/中介审计/独立审计等专业人士优选证书，CPA为中国唯一官方认可的注册会计师资质，唯一拥有签字权的执业资质。'

      }, {
        title: 'CMA',
        main: 'CMA即美国注册管理会计师，是美国管理会计师协会（IMA）旗下的注册管理会计师认证（CMA认证），同时被誉为财会界的Mini-MBA及美国财会领域的三大黄金认证之一，在全球范围内被企业财务高管所认可。'

      }, {
        title: '经济师',
        main: '经济师，是我国职称之一，设两个级别：经济专业初级资格、经济专业中级资格。参加考试并成绩合格者，获得相应级别的专业技术资格，由人事部统一发放合格证书。'

      }]
    } else if (this.data.result[0] == '总会计师/财务总监' && this.data.result[1] == '15年以上') {
      result = [{
        title: 'CMA',
        main: 'CMA即美国注册管理会计师，是美国管理会计师协会（IMA）旗下的注册管理会计师认证（CMA认证），同时被誉为财会界的Mini-MBA及美国财会领域的三大黄金认证之一，在全球范围内被企业财务高管所认可。'

      }, {
        title: 'CPA',
        main: '注册会计师缩写，从事社会审计/中介审计/独立审计等专业人士优选证书，CPA为中国唯一官方认可的注册会计师资质，唯一拥有签字权的执业资质。'

      }, {
        title: 'USCPA',
        main: 'USCPA是IFRS时代世界通行证。可在全球范围内与多国的注册会计师体系完成互认。（加拿大、英国、中国香港、新西兰、澳大利亚、爱尔兰等）'

      }]
    } else if (this.data.result[0] == '风险管理/控制' && this.data.result[1] == '15年以上') {
      result = [{
        title: 'CFA',
        main: '全称 特许注册金融分析师，是全球投资业里最为严格与高含金量资格认证，被称为金融第一考的考试，为全球投资业在道德操守、专业标准及知识体系等方面设立了规范与标准。'

      }, {
        title: 'CMA',
        main: 'CMA即美国注册管理会计师，是美国管理会计师协会（IMA）旗下的注册管理会计师认证（CMA认证），同时被誉为财会界的Mini-MBA及美国财会领域的三大黄金认证之一，在全球范围内被企业财务高管所认可。'

      }]
    } else if (this.data.result[0] == '债券/证券交易' && this.data.result[1] == '15年以上') {
      result = [{
        title: 'CFA',
        main: '全称 特许注册金融分析师，是全球投资业里最为严格与高含金量资格认证，被称为金融第一考的考试，为全球投资业在道德操守、专业标准及知识体系等方面设立了规范与标准。'

      }, {
        title: 'CFP',
        main: 'CFP国际金融理财师简称，全世界公认的金融理财行业权威等级证书。 广泛授予金融理财领域内的专业人员，包括理财经理、基金经理、财务总监、投资顾问、投资银行家、理财顾问等。'

      }]
    } else if (this.data.result[0] == '投资分析员/经理' && this.data.result[1] == '15年以上') {
      result = [{
        title: 'CFA',
        main: '全称 特许注册金融分析师，是全球投资业里最为严格与高含金量资格认证，被称为金融第一考的考试，为全球投资业在道德操守、专业标准及知识体系等方面设立了规范与标准。'

      }, {
        title: 'CMA',
        main: 'CMA即美国注册管理会计师，是美国管理会计师协会（IMA）旗下的注册管理会计师认证（CMA认证），同时被誉为财会界的Mini-MBA及美国财会领域的三大黄金认证之一，在全球范围内被企业财务高管所认可。'

      }, {
        title: 'CFP',
        main: 'CFP国际金融理财师简称，全世界公认的金融理财行业权威等级证书。 广泛授予金融理财领域内的专业人员，包括理财经理、基金经理、财务总监、投资顾问、投资银行家、理财顾问等。'

      }]
    } else if (this.data.result[0] == '融资/外汇专员' && this.data.result[1] == '15年以上') {
      result = [{
        title: 'CFA',
        main: '全称 特许注册金融分析师，是全球投资业里最为严格与高含金量资格认证，被称为金融第一考的考试，为全球投资业在道德操守、专业标准及知识体系等方面设立了规范与标准。'

      }, {
        title: 'CMA',
        main: 'CMA即美国注册管理会计师，是美国管理会计师协会（IMA）旗下的注册管理会计师认证（CMA认证），同时被誉为财会界的Mini-MBA及美国财会领域的三大黄金认证之一，在全球范围内被企业财务高管所认可。'

      }, {
        title: 'FRM',
        main: '是全球金融风险管理领域顶级的权威国际资格认证，由美国“全球风险管理专业人士协会”开发。由人力资源和社会保障部批准为国家职业资格证书。'

      }]
    }
    this.setData({
      resultlist: result
    })
    this.downImg(this.data.imglist)
  },

  downImg(list) {
    var that = this
    let imglist = []
    let n = 0

    function up() {
      wx.downloadFile({
        url: list[n],
        success(res) {
          if (res.statusCode == 200) {
            imglist.push(res.tempFilePath)
            n++
            if (n == list.length) {
              that.setData({
                newList: imglist,
              })
              that.Canvas(that)
            } else {
              up(n)
            }
          }
        }
      })
    }
    up()

    // return imglist
  },
  /**
   * 创建画布内容
   */
  Canvas(that) {

    const ctx = wx.createCanvasContext('myCanvas');
    var that = this
    //绘制背景
    ctx.drawImage(that.data.newList[2], 0, 0, this.data.systemInfo.screenWidth, this.data.systemInfo.windowHeight);
    //绘制banner
    ctx.drawImage(that.data.newList[3], that.rem(10), that.rem(20), that.rem(730), that.rem(400))
    ctx.setFontSize(that.rem(26))
    ctx.setTextAlign('left')
    ctx.setFillStyle('white')
    //绘制证书解析标题
    ctx.fillText('证书解析：', that.rem(32), that.rem(500))
    ctx.draw(true)
    that.forlist(that.data.resultlist, that, ctx)
  },

  forlist(list, that, ctx) {
    for (let t = 0; t < list.length; t++) {
      that.drawtitle(ctx, list[t].title, t, that)
      that.tostringLength(list[t].title, t, list[t].main, 20, ctx, that)
    }
    ctx.draw(true)
    wx.hideLoading()
    that.setData({
      isShow: false
    })
  },
  erweima() {
    wx.previewImage({
      current: 'http://www.kiss-me.top/20181103113050.jpg', // 当前显示图片的http链接
      urls: ['http://www.kiss-me.top/20181103113050.jpg'] // 需要预览的图片http链接列表
    })
  },
  save() {
    var that = this
    if (that.data.savatext == '重新测试') {
      wx.reLaunch({
        url: '/pages/index/index'
      })
    } else {
      wx.showLoading({
        title: '正在保存...',
        mask: true,
        success: function(res) {},
        fail: function(res) {},
        complete: function(res) {},
      })
      setTimeout(function() {
        wx.canvasToTempFilePath({
          x: 0,
          y: 0,
          width: that.data.systemInfo.screenWidth,
          height: that.data.systemInfo.screenHeight,
          canvasId: 'myCanvas',
          success: function(res) {
            app.globalData.imgurl = res.tempFilePath
            wx.saveImageToPhotosAlbum({
              filePath: res.tempFilePath,
              success(res) {
                wx.hideLoading()
                wx.showToast({
                  title: '保存成功!',
                  icon: '',
                  image: '',
                  duration: 2000,
                  mask: true,
                  success: function(res) {},
                  fail: function(res) {},
                  complete: function(res) {},
                })
                that.setData({
                  savatext: '重新测试'
                })
              },
              fail(res) {},
              complete(res) {}
            })
          }
        })
      }, 1500)
    }
  },
  drawtitle(ctx, textmain, t, that) {
    //根据奖状的名字长度设置奖状样式
    ctx.drawImage(textmain.length > 4 ? that.data.newList[1] : that.data.newList[0], that.rem(60 + 219 * t), that.rem(200), that.rem(194), that.rem(132))
    ctx.setTextAlign('left')
    ctx.setFillStyle('#2862AB')
    ctx.draw(true)
    //字的展示形式
    if (textmain.length <= 3) {
      ctx.setFontSize(that.rem(55))
      ctx.fillText(textmain, that.rem(75 + 219 * t), that.rem(260))
    } else {
      ctx.setFontSize(that.rem(42))
      ctx.fillText(textmain.substr(0, 4), that.rem(75 + 219 * t), that.rem(255), that.rem(194))
      ctx.fillText(textmain.substr(4, 2), that.rem(75 + 219 * t), that.rem(300), that.rem(100))
    }
    ctx.draw(true)
  },
  tostringLength(title, n, textmain, length, ctx, that) {
    //设置证书类型解释框
    ctx.setFillStyle('white')
    ctx.draw(true)
    ctx.drawImage(that.data.newList[4], that.rem(32), that.rem(550 + 130 * n), that.rem(160), that.rem(40))
    ctx.draw(true)
    ctx.setFontSize(that.rem(26))
    ctx.setTextAlign('center')
    ctx.setFillStyle('#2862AB')
    ctx.draw(true)
    ctx.fillText(title, that.rem(110), that.rem(580 + 130 * n), that.rem(150))
    if (textmain.length / length > 1 && textmain.length / length < 2) {
      ctx.setTextAlign('left')
      ctx.setFillStyle('white')
      ctx.fillText(textmain.substr(0, length), that.rem(210), that.rem(580 + 130 * n), that.rem(500))
      ctx.fillText(textmain.substr(length, length), that.rem(210), that.rem(610 + 130 * n), that.rem(500))
    }
    if (textmain.length / length < 1) {
      ctx.setTextAlign('left')
      ctx.setFillStyle('white')
      ctx.fillText(textmain.substr(0, length), that.rem(210), that.rem(580 + 130 * n), that.rem(500))
    }
    if (textmain.length / length > 2 && textmain.length / length < 3) {
      ctx.setTextAlign('left')
      ctx.setFillStyle('white')
      ctx.fillText(textmain.substr(0, length), that.rem(210), that.rem(580 + 130 * n), that.rem(500))
      ctx.fillText(textmain.substr(length, length), that.rem(210), that.rem(610 + 130 * n), that.rem(500))
      ctx.fillText(textmain.substr(2 * length, length), that.rem(210), that.rem(640 + 130 * n), that.rem(500))
    }
    if (textmain.length / length > 3) {
      ctx.setTextAlign('left')
      ctx.setFillStyle('white')
      ctx.fillText(textmain.substr(0, length), that.rem(210), that.rem(580 + 130 * n), that.rem(500))
      ctx.fillText(textmain.substr(length, length), that.rem(210), that.rem(610 + 130 * n), that.rem(500))
      ctx.fillText(textmain.substr(2 * length, length), that.rem(210), that.rem(640 + 130 * n), that.rem(500))
      ctx.fillText(textmain.substr(3 * length, length), that.rem(210), that.rem(670 + 130 * n), that.rem(500))
    }
    ctx.drawImage(that.data.newList[5], that.rem(580), this.data.systemInfo.windowHeight - that.rem(210), that.rem(130), that.rem(180))
    ctx.draw(true)
  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {
    return {
      title: '一键分析本命证书',
      path: '/page/index/index'
    }
  }
})