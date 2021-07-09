---
title: Document Theme
order: 4
---

## 1. Title

```md
# h1

## h2

### h3

#### h4

##### h5

###### h6
```

Result:

# h1

## h2

### h3

#### h4

##### h5

###### h6

## 2. Font

```md
**Bold text**

_Italic text_

**_Italic bold text_**

~~Add strikethrough text~~
```

Result:

**Bold text**

_Italic text_

**_Italic bold text_**

~~Add strikethrough text~~

## 3. Reference

> Quoted content

## 4. Dividing line

```md
---
---
```

Result:

---

---

## 5. Pictures

```md
![demo](https://user-images.githubusercontent.com/507615/69481549-49b39d00-0e4d-11ea-87fd-1e7741f4bdf1.png'title')
```

Result:

![demo](https://user-images.githubusercontent.com/507615/69481549-49b39d00-0e4d-11ea-87fd-1e7741f4bdf1.png'title')

## 6. Hyperlink

```md
[Hyperlink name] (Hyperlink address)
```

Result:

[AntV](https://antv.vision/zh/)

Note: Markdown itself does not support link opening in a new page. If you want to open it in a new page, you can use the a tag of html language instead.

```md
<a href="Hyperlink address" target="_blank">Hyperlink name</a>
```

## 7. list

### Unordered List

```md
-List content

- List content
  -List content
```

Result:

-List content

- List content
  -List content

### Ordered List

```md
1. List content
2. List content
3. List content
```

Result:

1. List content
2. List content
3. List content

### List nesting

-Level 1 unordered list content

-Level 2 unordered list content
-Level 2 unordered list content

1. First-level ordered list content

   -Level 2 unordered list content
   -Level 2 unordered list content

2. Contents of the second-level ordered list
   1. Contents of the second-level ordered list
   2. Contents of the second-level ordered list

## 8. Form

### Only text

```md
| Text at the center | Text at the left | Text at the right |
| ------------------ | :--------------: | ----------------: |
| Content            |     Content      |           Content |
| Content            |     Content      |           Content |
```

Result:

| Text on the left | Text on the center | Text on the right |
| ---------------- | :----------------: | ----------------: |
| Content          |      Content       |           Content |
| Content          |      Content       |           Content |

### Text + Pictures

```md
| **General Interaction** | **Trigger**                                           | **Demo**                                                                                   |
| :---------------------- | :---------------------------------------------------- | ------------------------------------------------------------------------------------------ |
| Point to the side       | 🖱 Mouse: Hover                                        | ![](https://gw.alipayobjects.com/mdn/rms_f8c6a0/afts/img/A*M_JRSpYs41UAAAAAAAAAAAAAARQnAQ) |
| Select the edge         | 🖱 Mouse: click                                        | ![](https://gw.alipayobjects.com/mdn/rms_f8c6a0/afts/img/A*XWf4QY3T1-UAAAAAAAAAAAAAARQnAQ) |
| Uncheck                 | 🖱 Mouse: Click in the blank area <br /> Keyboard: Esc | ![](https://gw.alipayobjects.com/mdn/rms_f8c6a0/afts/img/A*ZpPCTIEv_P0AAAAAAAAAAAAAARQnAQ) |
```

Result:

| **General Interaction** | **Trigger**                                           | **Demo**                                                                                   |
| :---------------------- | :---------------------------------------------------- | ------------------------------------------------------------------------------------------ |
| Point to the side       | 🖱 Mouse: Hover                                        | ![](https://gw.alipayobjects.com/mdn/rms_f8c6a0/afts/img/A*M_JRSpYs41UAAAAAAAAAAAAAARQnAQ) |
| Select the edge         | 🖱 Mouse: Click                                        | ![](https://gw.alipayobjects.com/mdn/rms_f8c6a0/afts/img/A*XWf4QY3T1-UAAAAAAAAAAARQnAQ)    |
| Uncheck                 | 🖱 Mouse: Click in the blank area <br /> Keyboard: Esc | ![](https://gw.alipayobjects.com/mdn/rms_f8c6a0/afts/img/A*ZpPCTIEv_P0AAAAAAAAAAARQnAQ)    |

## 9. Code

### Single line of code

```md
`const AntV ='Liven Data Lively';`
```

Result:
`const AntV ='Liven Data Lively';`

### Code block

```js
const AntV = () => 'Liven Data Lively';

AntV();
```
