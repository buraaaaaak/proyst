## tasarım ve geliştirme

- [@burakbbyrmm](https://www.instagram.com/burakbbyrmm)

## proje linki

https://www.npmjs.com/package/proyst

## ne işe yarar?

- proyst.js, express ile oluşturulmuş projelerin kaynak dosyalarını korur, toplu, düzenli bir şekilde barındırır ve router sistemi sunar.

## changelog

bazı hatalar giderildi ve performans artırıldı.

## nasıl indirilir?

```npm
npm install proyst
```

## nasıl kullanılır?

proyst'u tanımlama işlemi

```javascript
const proyst = require("proyst")
```  

proyst'u bu şekilde dosyanıza tanımladığınız zaman, proje dosyanızda otomatik olarak bir proyst demosu oluşacak. proyst alt klasöründeki dosyaları düzenleyerek web sitenizde değişiklik yapabilirsiniz.

## bilinmesi gerekenler

- aşağıda verilen kod örneklerini, proyst klasöründe oluşan proyst.js dosyanıza uygulayabilirsiniz.
- bu kodlar sadece frontend kısım içindir.

```javascript
var homepage = "./pages/homepage.html"
var page_404 = "./pages/404.html"

/*
    web sitesi açıldığı zaman görüntülenecek sayfayı ayarlar. "/" rotası
*/
proyst.loadPageURL(homepage)

/*
    var olmayan bir sayfaya gidildiğinde görüntülenecek sayfayı ayarlar.
*/
proyst.err(page_404)

/*
    sayfanın yüklenmesi uzun sürerse, sayfada yükleyici gösterir.
    not: şu an için yükleyiciyi özelleştiremezsiniz.
*/
proyst.loader()

/*
    web sayfasının yüklenip yüklenmediğini, *true/false* olarak çıktı verir.
*/
proyst.loaded()
```  

+ aşağıda verilen kod örneklerini, web sayfanızdaki elementleri çağırırken kullanabilirsiniz.

```javascript
/*
- p.el(".class").getElement() - class değerinden element çağırır
- p.el("#class").getElement() - id değerinden element çağırır
- p.el("div").getElement() - isim değerinden elementi çağırır
*/

/*
    elementi gizler
*/
p.el(".class").hide()

/*
    elemente click eventi ekler
*/
p.el(".class").click(function() {
    proyst.loadPageURL(homepage)
})

```

## proyst.js kullanım örneği (backend)

```javascript
const proyst = require("proyst")
const path = require("path")
const express = require('express');
const app = express();

app.use("/pages", express.static(path.resolve(`proyst/pages`)));
app.use("/styles", express.static(path.resolve(`proyst/styles`)));

app.get('/proyst.js', function(req, res) {
    res.type('.js');
    res.send(proyst.app())
})

app.get('/', function(req, res) {
    res.sendFile('index.html', {
        root: '.'
    })
})

app.get('*', function(req, res) {
    res.sendFile('index.html', {
        root: '.'
    })
});

var PORT = 80
app.listen(PORT, function(err) {
    if (err) console.log(err);
    console.log("proyst is started. http://localhost:" + PORT);
});
```
  
## katkı

ayrıca, javascript dosyalarının minify işlemi için [uglify-js](https://www.npmjs.com/package/uglify-js) kullanıldı. 
  
