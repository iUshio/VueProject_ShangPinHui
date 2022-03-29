<template>
  <div class="pagination">
    <button>上一页</button>
    <button v-if="startNumAndEndNum.start > 1">1</button>

    <button v-if="startNumAndEndNum.start > 2">···</button>

<!-- 中间部分 -->
    <template v-for="(page,index) in startNumAndEndNum.end" >
      <button  v-if="page >= startNumAndEndNum.start" :key="index">{{page}}</button>
    </template>

    <button v-if="startNumAndEndNum.end < totalPage - 1">···</button>
    <button v-if="startNumAndEndNum.end < totalPage">{{ totalPage }}</button>
    <button>下一页</button>

    <button style="margin-left: 30px">共 {{ total }} 条</button>
  </div>
</template>

<script>
export default {
  name: "Pagination",
  props: ["pageNo", "pageSize", "total", "continues"],
  computed: {
    // 计算出总共有多少页
    totalPage() {
      return Math.ceil(this.total / this.pageSize);
    },
    // 计算出连续的页码的起始数字与结束数字
    startNumAndEndNum() {
      const { continues, pageNo, totalPage } = this;
      // 先定义两个变量，存储起始数字与结束数字
      let start = 0,
        end = 0;
      // 连续页码数字（最少5页）
      if (continues >= totalPage) {
        start = 1;
        end = totalPage;
      } else {
        start = pageNo - Math.floor(continues / 2);
        end = pageNo + Math.floor(continues / 2);
        if (start < 1) {
          start = 1;
          end = continues;
        } else if (end > totalPage) {
          end = totalPage;
          start = totalPage - continues + 1;
        }
        return { start, end };
      }
    },
  },
};
</script>

<style lang="less" scoped>
.pagination {
  text-align: center;
  button {
    margin: 0 5px;
    background-color: #f4f4f5;
    color: #606266;
    outline: none;
    border-radius: 2px;
    padding: 0 4px;
    vertical-align: top;
    display: inline-block;
    font-size: 13px;
    min-width: 35.5px;
    height: 28px;
    line-height: 28px;
    cursor: pointer;
    box-sizing: border-box;
    text-align: center;
    border: 0;

    &[disabled] {
      color: #c0c4cc;
      cursor: not-allowed;
    }

    &.active {
      cursor: not-allowed;
      background-color: #409eff;
      color: #fff;
    }
  }
}
</style>
