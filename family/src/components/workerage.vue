<template>
  <div>
    <div id="workerAge"></div>
  </div>
</template>
<script>
  import echarts from 'echarts';
  import data from 'static/data/data.json';
export default{
  data(){
    return{
      chart:null
    };
  },
  methods:{
    drawBar(id){
      this.chart=echarts.init(document.getElementById('workerAge'));
      this.chart.setOption({
        title:'职员年龄情况',
        legend:['人数'],
        tooltip: {
          trigger: 'axis'
        },
        toolbox: {
          feature: {
            magicType:{show: true, type: ['line', 'bar']},
            saveAsImage: {show: true},
            dataView: {show: true, readOnly: false}
          },
          top: 10,
          right: 15
        },
        calculable: true,
        grid: {
          left: '3%',
          right: '6%',
          bottom: '3%',
          containLabel: true
        },
        xAxis:[
          {
            type:'category',
            data:data.workerAge.age
          }
        ],
        yAxis:[
          {
            type:'value',
            name:'人数',
            max:50
          }
        ],
        series:[
          {
            name:'年龄区间',
            type:'bar',
            markPoint:{
              data:[
                {type:'max',name:'最大值'},
                {type:'min',name:"最小值"}
              ]
            },
            markLine:{
              data:[
                {type:'average',name:'平均值'}
              ]
            },
            itemStyle: {
              normal: {
                barBorderRadius: 20,
                color: '#726dd1',
                shadowColor: 'rgba(0, 0, 0, 0.4)',
                shadowBlur: 20
              }
            },
            data:data.workerAge.num

          }
        ]

      })

    }
  },
  mounted() {//todo33
    this.$nextTick(function() {
      this.drawBar('workerAge');
      var that = this;
      var resizeTimer = null;
      window.onresize = function() {
        if (resizeTimer) clearTimeout(resizeTimer);
        resizeTimer = setTimeout(function() {
          that.drawBar('workerAge');
        }, 100);
      }
    });
  }
}
</script>
<style scoped>
  #workerAge {
    position: relative;
    left: 50%;
    width: 90%;
    height: 600px;
    margin-left: -45%;
    box-shadow: 0 0 10px #726dd1;
    border-radius: 10px;
  }
</style>
