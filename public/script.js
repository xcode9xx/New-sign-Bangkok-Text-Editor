const _0x121253=_0x55dd;(function(_0x37cf9f,_0x756934){const _0xc68415=_0x55dd,_0x1323dd=_0x37cf9f();while(!![]){try{const _0x1060e8=-parseInt(_0xc68415(0xae))/0x1*(-parseInt(_0xc68415(0xb7))/0x2)+-parseInt(_0xc68415(0x9f))/0x3+-parseInt(_0xc68415(0xa1))/0x4+parseInt(_0xc68415(0xa4))/0x5+parseInt(_0xc68415(0xa3))/0x6*(-parseInt(_0xc68415(0xa9))/0x7)+-parseInt(_0xc68415(0x9e))/0x8*(parseInt(_0xc68415(0xa0))/0x9)+-parseInt(_0xc68415(0xb3))/0xa;if(_0x1060e8===_0x756934)break;else _0x1323dd['push'](_0x1323dd['shift']());}catch(_0x3331b3){_0x1323dd['push'](_0x1323dd['shift']());}}}(_0x448f,0x4f195));const canvas=document[_0x121253(0xb1)](_0x121253(0xb2)),ctx=canvas['getContext']('2d'),textInput=document['getElementById'](_0x121253(0x99)),fontSizeInput=document[_0x121253(0xb1)](_0x121253(0xb5));function _0x55dd(_0x2ef077,_0xb931a0){const _0x448f86=_0x448f();return _0x55dd=function(_0x55dd57,_0x5030f0){_0x55dd57=_0x55dd57-0x99;let _0x5f3c0d=_0x448f86[_0x55dd57];return _0x5f3c0d;},_0x55dd(_0x2ef077,_0xb931a0);}let fontSize=parseInt(fontSizeInput[_0x121253(0xb8)]);const image=new Image();image[_0x121253(0xb9)]=_0x121253(0xa2),image['onload']=()=>{initializeCanvas(),drawImageWithText();},textInput[_0x121253(0xa7)](_0x121253(0xa5),drawImageWithText),fontSizeInput[_0x121253(0xa7)](_0x121253(0xa5),()=>{const _0x4ec168=_0x121253;fontSize=parseInt(fontSizeInput[_0x4ec168(0xb8)]),drawImageWithText();});function initializeCanvas(){const _0x42a61f=_0x121253;canvas['width']=image['width'],canvas[_0x42a61f(0x9d)]=image['height'];}function drawImageWithText(){const _0x214b4d=_0x121253;ctx[_0x214b4d(0xa6)](0x0,0x0,canvas[_0x214b4d(0xba)],canvas[_0x214b4d(0x9d)]),ctx[_0x214b4d(0x9b)](image,0x0,0x0),ctx[_0x214b4d(0xaf)]=fontSize+'px\x20Arial',ctx[_0x214b4d(0xb0)]='white',ctx[_0x214b4d(0xaa)]='center',ctx['fillText'](textInput[_0x214b4d(0xb8)],canvas[_0x214b4d(0xba)]/0x2,canvas['height']/1.8),updateCurrentFontSize();}function downloadImage(){const _0xc3a3ec=_0x121253,_0x174ffe=Math[_0xc3a3ec(0xac)](Math[_0xc3a3ec(0xb4)]()*0x64)['toString']()['padStart'](0x2,'0'),_0x46b1da=document['createElement']('a');_0x46b1da[_0xc3a3ec(0xa8)]='edited_image_'+_0x174ffe+_0xc3a3ec(0xab),_0x46b1da[_0xc3a3ec(0x9a)]=canvas['toDataURL'](),_0x46b1da[_0xc3a3ec(0xb6)]();}function _0x448f(){const _0x50e157=['floor','textContent','1IAghJX','font','fillStyle','getElementById','canvas','2083840mKlpUp','random','fontSize','click','862478BetGPu','value','src','width','text-input','href','drawImage','current-font-size','height','240FWoFyJ','229632GUEsMy','23517VMbFyS','164584jXwzxb','./img/sign.webp','24AchuzY','2882230yArzvZ','input','clearRect','addEventListener','download','488656Cpbfky','textAlign','.png'];_0x448f=function(){return _0x50e157;};return _0x448f();}function updateCurrentFontSize(){const _0x2b0c14=_0x121253,_0x2a48ae=document['getElementById'](_0x2b0c14(0x9c));_0x2a48ae[_0x2b0c14(0xad)]=fontSize;}
