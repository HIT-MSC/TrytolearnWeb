### HTTP请求

跟踪了新浪的首页，我们来总结一下HTTP请求的流程：

步骤1：浏览器首先向服务器发送HTTP请求，请求包括：

方法：GET还是POST，GET仅请求资源，POST会附带用户数据；

路径：/full/url/path；

域名：由Host头指定：Host: www.sina.com.cn

以及其他相关的Header；

如果是POST，那么请求还包括一个Body，包含用户数据。

步骤2：服务器向浏览器返回HTTP响应，响应包括：

响应代码：200表示成功，3xx表示重定向，4xx表示客户端发送的请求有错误，5xx表示服务器端处理时发生了错误；

响应类型：由Content-Type指定；

以及其他相关的Header；

通常服务器的HTTP响应会携带内容，也就是有一个Body，包含响应的内容，网页的HTML源码就在Body中。

步骤3：如果浏览器还需要继续向服务器请求其他资源，比如图片，就再次发出HTTP请求，重复步骤1、2。

Web采用的HTTP协议采用了非常简单的请求-响应模式，从而大大简化了开发。当我们编写一个页面时，我们只需要在HTTP请求中把HTML发送出去，不需要考虑如何附带图片、视频等，浏览器如果需要请求图片和视频，它会发送另一个HTTP请求，因此，一个HTTP请求只处理一个资源。

HTTP响应如果包含body，也是通过`\r\n\r\n`来分隔的。请再次注意，Body的数据类型由`Content-Type`头来确定，如果是网页，Body就是文本，如果是图片，Body就是图片的二进制数据。

当存在`Content-Encoding`时，Body数据是被压缩的，最常见的压缩方式是gzip，所以，看到`Content-Encoding: gzip`时，需要将Body数据先解压缩，才能得到真正的数据。压缩的目的在于减少Body的大小，加快网络传输。

本节重点在于 HTTP 的完整流程和 HTTP 格式。HTTP 完整流程:

1. 浏览器向服务器发送一个 HTTP 格式的 request；
2. 服务器处理 request，向浏览器返回一个 Http 格式的 response；
3. 重复1、2步，请求其他资源。

HTTP 格式:POST请求比GET请求多个了 body(包含用户数据)。







无论多么复杂的Web应用程序，入口都是一个WSGI处理函数。HTTP请求的所有输入信息都可以通过`environ`获得，HTTP响应的输出都可以通过`start_response()`加上函数返回值作为Body。



```python
# server.py
from wsgiref.simple_server import make_server
from webpage import application


httpd = make_server('', 8000, application)
print('Serving HTTP on port 8000...')

httpd.serve_forever()
```

```python
def application(environ,start_response):
    start_response('200 OK',[('Content-Type','text/html')])
    body = '<h1>Hello, %s!</h1>' % (environ['PATH_INFO'][1:] or 'web')
    return [body.encode('utf-8')]
```

一个完整的 Web 应用包含了如下流程:

1. 浏览器向服务器发送一个 request；
2. 服务器接收并处理 request，然后生成一个 HTML 文件；
3. 服务器向浏览器返回一个包含 HTML 源码的 response；
4. 浏览器接收 HTML 并将其显示出来。

WSGI接口是用来干什么的呢? 它是用来接收并处理 request 的！一个基本的 WSGI 接口需要传入两个参数: 一个包含 request 信息的字典；一个返回 response 的方法。这两个方法需要由 Web 服务器提供，即由服务器调用 WSGI 接口从而实现完整 Web 应用的流程。