// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// No Node.js APIs are available in this process because
// `nodeIntegration` is turned off. Use `preload.js` to
// selectively enable features needed in the rendering
// process.

const fs=require('fs');         
//文件内容显示

//webview_监听
const wb=document.querySelector('#wb');
const loading=document.querySelector("#loading");
/*wb.addEventListener("did-start-loading",()=>{
    console.log("loading~~~~~~");
    loading.innerHTML="loading~~~~~~";
})
wb.addEventListener("did-stop-loading",()=>{
    console.log("OHHHHHHHHH!!!!!");
    loading.innerHTML="OHHHHHHHHH!!!!!";
    //实现网页重新定制
   /* wb.insertCSS(`                                      
   #su{
       background:red !important;
   }
      `)
    wb.executeJavaScript(`
    setTimeout(()=>{
        alert(document.getElementById('su').value);
    },2000);
    
    `)*/
//})  

function getProcessInfo() {
    console.log("getCPUUsage：", process.getCPUUsage());
}

const dragWrapper=document.getElementById("drag_test");
dragWrapper.addEventListener("drop",(e)=>{
    e.preventDefault();
    const files=e.dataTransfer.files;
    if(files&&files.length>0){
        const path=files[0].path;
        console.log('path:',path);              //文件路径的显示
        const content=fs.readFileSync(path);    //文件内容的显示
        console.log(content.toString());
    }
})

dragWrapper.addEventListener("dragover",(e)=>{
    e.preventDefault();
})
//阻止默认行为的发生


//弹出窗口

let subWin;

function openNewWindow(){
    subWin=window.open('popup_page.html',"popup");    //弹出窗口的实现
}

function closeWindow(){
    subWin.close();            //子窗口关闭
}

window.addEventListener("message",(msg)=>{
    console.log("接收到的消息：",msg);
})