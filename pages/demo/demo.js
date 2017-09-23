// pages/demo/demo.js

 var obj= require('../../data/list.js');

Page({

  /**
   * 页面的初始数据
   */
  data: {
     imgUrls:[
       '/images/simg.jpg',
       '/images/img_info.jpg'   

     ],
     indicatorDots: false,
     autoplay: true,
     interval: 2000,
     duration: 1000,
     circular:false,
     indicatorDots:true,
     indicatorColor:"#fff",
     activeColor:"#48C23D",
     arr:obj.list,
     bool:false
     

  },
  onTap:function(res){
    var id = res.currentTarget.dataset.id
    // console.log(id)
    
    wx.navigateTo({
      url:'detail/detail?id='+id
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})