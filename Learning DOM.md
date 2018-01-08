###### Learning DOM

------

## 什么是 DOM？

DOM 是 W3C（万维网联盟）的标准。

DOM 定义了访问 HTML 和 XML 文档的标准：

​	"W3C 文档对象模型是中立于平台与语言的接口，它允许程序和脚本动态地访问和更新文档的内容、结构和样式。"

W3C DOM 标准被分为 3 个不同的部分：

- 核心 DOM - 针对任何结构化文档的标准模型
- XML DOM - 针对 XML 文档的标准模型
- HTML DOM - 针对 HTML 文档的标准模型

编者注：DOM 是 Document Object Model（文档对象模型）的缩写。

------

## 什么是 XML DOM？

XML DOM 定义了所有 XML 元素的*对象*和*属性*，以及访问它们的*方法*。

如果您需要学习 XML DOM，请访问我们的 [XML DOM 教程](http://www.w3school.com.cn/xmldom/index.asp)。

## 什么是 HTML DOM？

HTML DOM 是：

- HTML 的标准对象模型
- HTML 的标准编程接口
- W3C 标准

HTML DOM 定义了所有 HTML 元素的*对象*和*属性*，以及访问它们的*方法*。

*换言之，HTML DOM 是关于如何获取、修改、添加或删除 HTML 元素的标准。*

**在 HTML DOM 中，所有事物都是节点。DOM 是被视为节点树的 HTML。**

**DOM节点**

HTML文档中的所有内容都是节点：

- 整个文档就是一个文档节点
- 每个html元素是元素节点
- html元素内的文本是文本节点
- 每个html属性是属性节点
- 注释是注释节点****

**HTML DOM 节点树**

HTML DOM 将HTML文档视为树结构。 这种结构被称为节点树：



**HTML DOM Tree 实例**

![HTML DOM Node Tree](http://www.w3school.com.cn/i/ct_htmltree.gif)

通过 HTML DOM，树中的所有节点均可通过 JavaScript 进行访问。所有 HTML 元素（节点）均可被修改，也可以创建或删除节点。

------

## 节点父、子和同胞

节点树中的节点彼此拥有层级关系。

父（parent）、子（child）和同胞（sibling）等术语用于描述这些关系。父节点拥有子节点。同级的子节点被称为同胞（兄弟或姐妹）。

- 在节点树中，顶端节点被称为根（root）
- 每个节点都有父节点、除了根（它没有父节点）
- 一个节点可拥有任意数量的子
- 同胞是拥有相同父节点的节点

下面的图片展示了节点树的一部分，以及节点之间的关系：

![DOM 节点关系](http://www.w3school.com.cn/i/dom_navigate.gif)

```html
<html>
  <head>
    <title>DOM 教程</title>
  </head>
  <body>
    <h1>DOM 第一课</h1>
    <p>Hello world!</p>
  </body>
</html>
```

**我们来分析一下这段代码**

- <html>节点没有父节点；它是根节点。
- <head> <body>的父节点都是<html>节点
- 文本节点'hello world!'的父节点是<p>节点

**并且：**

- <html> 节点拥有两个子节点：<head> 和 <body>
- <head> 节点拥有一个子节点：<title> 节点
- <title> 节点也拥有一个子节点：文本节点 "DOM 教程"
- <h1> 和 <p> 节点是同胞节点，同时也是 <body> 的子节点

**并且：**

- <head> 元素是 <html> 元素的首个子节点
- <body> 元素是 <html> 元素的最后一个子节点
- <h1> 元素是 <body> 元素的首个子节点
- <p> 元素是 <body> 元素的最后一个子节点

## 警告！

DOM 处理中的常见错误是希望元素节点包含文本。

在本例中：*<title>DOM 教程</title>*，元素节点 <title>，包含值为 "DOM 教程" 的*文本节点*。

可通过节点的 *innerHTML* 属性来访问文本节点的值。

您将在稍后的章节中学习更多有关 innerHTML 属性的知识。

# HTML DOM 方法

方法是我们可以在节点（HTML 元素）上执行的动作。

## 编程接口

可通过 JavaScript （以及其他编程语言）对 HTML DOM 进行访问。

所有 HTML 元素被定义为对象，而编程接口则是对象方法和对象属性。

方法是您能够执行的动作（比如添加或修改元素）。

属性是您能够获取或设置的值（比如节点的名称或内容）。

## getElementById() 方法

getElementById() 方法返回带有指定 ID 的元素：

### 例子

```javascript
var element=document.getElementById("intro");
```

## 一些 DOM 对象方法

这里提供一些您将在本教程中学到的常用方法：

| 方法                       | 描述                               |
| ------------------------ | -------------------------------- |
| getElementById()         | 返回带有指定 ID 的元素。                   |
| getElementsByTagName()   | 返回包含带有指定标签名称的所有元素的节点列表（集合/节点数组）。 |
| getElementsByClassName() | 返回包含带有指定类名的所有元素的节点列表。            |
| appendChild()            | 把新的子节点添加到指定节点。                   |
| removeChild()            | 删除子节点。                           |
| replaceChild()           | 替换子节点。                           |
| insertBefore()           | 在指定的子节点前面插入新的子节点。                |
| createAttribute()        | 创建属性节点。                          |
| createElement()          | 创建元素节点。                          |
| createTextNode()         | 创建文本节点。                          |
| getAttribute()           | 返回指定的属性值。                        |
| setAttribute()           | 把指定属性设置或修改为指定的值。                 |



# HTML DOM 属性

属性是节点（HTML 元素）的值，您能够获取或设置。

## 编程接口

可通过 JavaScript （以及其他编程语言）对 HTML DOM 进行访问。

所有 HTML 元素被定义为对象，而编程接口则是对象方法和对象属性。

方法是您能够执行的动作（比如添加或修改元素）。

属性是您能够获取或设置的值（比如节点的名称或内容）。

## innerHTML 属性

获取元素内容的最简单方法是使用 innerHTML 属性。

innerHTML 属性对于获取或替换 HTML 元素的内容很有用。

### 实例

下面的代码获取 id="intro" 的 <p> 元素的 innerHTML：

### 实例

```html
<html>
<body>

<p id="intro">Hello World!</p>

<script>
var txt=document.getElementById("intro").innerHTML;
document.write(txt);
</script>

</body>
</html>
```

在上面的例子中，getElementById 是一个方法，而 innerHTML 是属性。

innerHTML 属性可用于获取或改变任意 HTML 元素，包括 <html> 和 <body>。

## nodeName 属性

nodeName 属性规定节点的名称。

- nodeName 是只读的
- 元素节点的 nodeName 与标签名相同
- 属性节点的 nodeName 与属性名相同
- 文本节点的 nodeName 始终是 #text
- 文档节点的 nodeName 始终是 #document

注释：nodeName 始终包含 HTML 元素的大写字母标签名。

## nodeValue 属性

nodeValue 属性规定节点的值。

- 元素节点的 nodeValue 是 undefined 或 null
- 文本节点的 nodeValue 是文本本身
- 属性节点的 nodeValue 是属性值

## 获取元素的值

下面的例子会取回 <p id="intro"> 标签的文本节点值：

### 实例

```html
<html>
<body>

<p id="intro">Hello World!</p>

<script type="text/javascript">
x=document.getElementById("intro");
document.write(x.firstChild.nodeValue);
</script>

</body>
</html>
```

## nodeType 属性

nodeType 属性返回节点的类型。nodeType 是只读的。

比较重要的节点类型有：

| 元素类型 | NodeType |
| ---- | -------- |
| 元素   | 1        |
| 属性   | 2        |
| 文本   | 3        |
| 注释   | 8        |
| 文档   | 9        |

##### [HTML DOM 参考手册](http://www.w3school.com.cn/jsref/index.asp)

##### [HTML DOM 实例](http://www.w3school.com.cn/example/hdom_examples.asp)