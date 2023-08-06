## 這是一份在Express框架製作登入機制的練習

## 示意圖 [DEMO](https://user-auth-zzrt6z5xsq-de.a.run.app/)

![](./public/image/screenshot.JPG)

## 功能

- 使用者在表單裡輸入帳密：email & password
- 發送表單，把帳密傳送給伺服器
- 伺服器拿到資料，開始比對內建的使用者名單
- 如果帳號或密碼錯誤，就彈回登入頁並且提示是哪一項錯誤
- 如果帳密組合正確，就進入welcome page，在此頁面上會顯示登入使用者的 firstName

## 測試帳號密碼如下

```javascript
const users = [
  {
    firstName: 'Tony',
    email: 'tony@stark.com',
    password: 'iamironman'
  },
  {
    firstName: 'Steve',
    email: 'captain@hotmail.com',
    password: 'icandothisallday'
  },
  {
    firstName: 'Peter',
    email: 'peter@parker.com',
    password: 'enajyram'
  },
  {
    firstName: 'Natasha',
    email: 'natasha@gamil.com',
    password: '*parol#@$!'
  },
  {
    firstName: 'Nick',
    email: 'nick@shield.com',
    password: 'password'
  }
]
```

## 開發工具

- body-parser 1.20.2
- express 4.18.2
- express-handlebars 7.1.1
- mongoose 7.4.2
