/**
 * Created by Administrator on 2017/3/18.
 */

require('./main.css');
var sub = require('./sub');
var app  = document.createElement('div');
app.innerHTML = '<h1>Hello 1 World</h1>';
app.appendChild(sub());
document.body.appendChild(app);