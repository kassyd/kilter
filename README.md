# kilter

### Dialog
dialog组件的使用方法:

可传参数:

        show:
          一个Boolean类型的参数控制对话框的显示隐藏

        title:   
          一个String类型的参数展示对话框头部的标题

        titlePosition:
          可选字符串(left, center)控制对话框头部标题的位置

可用方法:

        close:
          点击关闭按钮之后触发的方法(无参数)

### Datepicker
datepicker组件的使用方法:

可传参数:

        sureBtnText:
          String类型  展示确定按钮文字  默认值"确定"

        cancelBtnText:
          String类型  展示取消按钮文字  默认值"取消"
        
        defaultDate:
          String类型(结构为2018/8/29) 组件渲染是默认选择的日期 默认值为 当前日期

        startDate:
          String类型(结构为2018/8/29) 组件渲染是默认选择的事件 默认值为 当前日期-5年

        endDate:
          String类型(结构为2018/8/29) 组件渲染是默认选择的事件 默认值为 当前日期+5年

        hasYear:
          Boolean类型  是否渲染年

        hasMonth:
          Boolean类型  是否渲染月

        hasDay:
          Boolean类型  是否渲染天

可用方法:

        sure-click:
          点击确定按钮触发方法   参数(hierarchy, texts)
        cancel-click
          点击取消按钮触发方法

### selector
        

          