---
title: 文档主题规范
order: 4
---

## 一、标题

```md
# h1

## h2

### h3

#### h4

##### h5

###### h6
```

效果：

# h1

## h2

### h3

#### h4

##### h5

###### h6

## 二、字体

```md
**加粗文字**

_倾斜文字_

**_斜体加粗文字_**

~~加删除线文字~~
```

效果：

**加粗文字**

_倾斜文字_

**_斜体加粗文字_**

~~加删除线文字~~

## 三、引用

> 引用的内容

## 四、分割线

```md
---
---
```

效果：

---

---

## 五、图片

```md
![demo](https://user-images.githubusercontent.com/507615/69481549-49b39d00-0e4d-11ea-87fd-1e7741f4bdf1.png 'title')
```

效果：

![demo](https://user-images.githubusercontent.com/507615/69481549-49b39d00-0e4d-11ea-87fd-1e7741f4bdf1.png 'title')

## 六、超链接

```md
[超链接名](超链接地址)
```

效果：

[AntV](https://antv.vision/zh/)

注：Markdown 本身语法不支持链接在新页面中打开，如果想要在新页面中打开的话可以用 html 语言的 a 标签代替。

```md
<a href="超链接地址" target="_blank">超链接名</a>
```

## 七、列表

### 无序列表

```md
- 列表内容

* 列表内容

- 列表内容
```

效果：

- 列表内容

* 列表内容

- 列表内容

### 有序列表

```md
1. 列表内容
2. 列表内容
3. 列表内容
```

效果:

1. 列表内容
2. 列表内容
3. 列表内容

### 列表嵌套

- 一级无序列表内容

  - 二级无序列表内容
  - 二级无序列表内容

1. 一级有序列表内容

   - 二级无序列表内容
   - 二级无序列表内容

2. 二级有序列表内容
   1. 二级有序列表内容
   2. 二级有序列表内容

## 八、表格

### 纯文字

```md
| 文字居中 | 文字居左 | 文字居右 |
| -------- | :------: | -------: |
| 内容     |   内容   |     内容 |
| 内容     |   内容   |     内容 |
```

效果：

| 文字居左 | 文字居中 | 文字居右 |
| -------- | :------: | -------: |
| 内容     |   内容   |     内容 |
| 内容     |   内容   |     内容 |

### 文字 + 图片

```md
| **通用交互** | **触发**                              | **演示**                                                                                   |
| :----------- | :------------------------------------ | ------------------------------------------------------------------------------------------ |
| 指向边       | 🖱 鼠标：悬停                          | ![](https://gw.alipayobjects.com/mdn/rms_f8c6a0/afts/img/A*M_JRSpYs41UAAAAAAAAAAAAAARQnAQ) |
| 选中边       | 🖱 鼠标：单击                          | ![](https://gw.alipayobjects.com/mdn/rms_f8c6a0/afts/img/A*XWf4QY3T1-UAAAAAAAAAAAAAARQnAQ) |
| 取消选中     | 🖱 鼠标：单击空白区域 <br /> 键盘：Esc | ![](https://gw.alipayobjects.com/mdn/rms_f8c6a0/afts/img/A*ZpPCTIEv_P0AAAAAAAAAAAAAARQnAQ) |
```

效果：

| **通用交互** | **触发**                              | **演示**                                                                                   |
| :----------- | :------------------------------------ | ------------------------------------------------------------------------------------------ |
| 指向边       | 🖱 鼠标：悬停                          | ![](https://gw.alipayobjects.com/mdn/rms_f8c6a0/afts/img/A*M_JRSpYs41UAAAAAAAAAAAAAARQnAQ) |
| 选中边       | 🖱 鼠标：单击                          | ![](https://gw.alipayobjects.com/mdn/rms_f8c6a0/afts/img/A*XWf4QY3T1-UAAAAAAAAAAAAAARQnAQ) |
| 取消选中     | 🖱 鼠标：单击空白区域 <br /> 键盘：Esc | ![](https://gw.alipayobjects.com/mdn/rms_f8c6a0/afts/img/A*ZpPCTIEv_P0AAAAAAAAAAAAAARQnAQ) |

## 九、代码

### 单行代码

```md
    `const AntV = 'Liven Data Lively';`
```

效果：
`const AntV = 'Liven Data Lively';`

### 代码块

```js
const AntV = () => 'Liven Data Lively';

AntV();
```
