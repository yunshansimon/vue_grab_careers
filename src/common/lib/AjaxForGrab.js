/**
 * Created by caoyang on 9/11/16.
 */
import {Promise} from 'es6-promise';
export default{
  get(url,params){
    return new Promise((resolve,reject)=>{
      Ajax('get',url,params,(res)=>{
        try{
          resolve(JSON.parse(res))
        }catch (e){
          reject({
            err:e.message,
            res:res
          })
        }
      },(err)=>{
        reject({
          err:err
        })
      })
    })

  }
}

function Ajax(method,url,params=null,successHandler,failedHandler=null,headers=null){
  method=method.toUpperCase()
  let xhr=new XMLHttpRequest()
  var paramStr=''
  xhr.onload=()=>{
    if(xhr.status===200){
      successHandler(xhr.response)
    }else{
      failedHandler && failedHandler(xhr.response || xhr.statusText)
    }
  }

  xhr.onerror=()=>{
    failedHandler && failedHandler(xhr.statusText)
  }

  if(method==='GET' && params){
    if(typeof params === 'object'){
      url=url+'?'+join_object_to_query_string(params)
    }else if(typeof params === 'string'){
      url=url+ '?' + params
    }
  }

  xhr.open(method,url,true)

  if(headers){
    for(let prop in headers){
      xhr.setRequestHeader(prop,headers[prop])
    }
  }

  if(method==='POST' || method==='PUT'){
    if(params && typeof params === 'object'){
      paramStr=join_object_to_query_string(params)
      xhr.send(paramStr)
    }else{
      xhr.send()
    }
  }else{
    xhr.send()
  }
}

function join_object_to_query_string (ob) {
  var paramStr = ''
  for (var param in ob) {
    paramStr += '&' + param + '=' + encodeURIComponent(ob[param])
  }
  return paramStr.substr(1)
}