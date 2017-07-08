let doc = [{
  "domain": "prakhar",
  "role": "admin",
  "actions": {
    "post": "post",
    "guest": "true"
  },
  "toolId": "git"
}, {
  "domain": "prakhar",
  "role": "moderator",
  "actions": {
    "post": "true",
    "like": "true"
  },
  "toolId": "quora"
}]
let func = function(doc, done) {
  let arr = [];
  let obj = {};
  doc.forEach(function(elem) {
    Object.keys(elem.actions).map((key) => {
      //return { role: doc.role, toolid: doc.toolid, action: key, grant: doc.actions[key] }
      arr.push({ role: elem.role, toolid: elem.toolId, action: key, grant: elem.actions[key] });
    })
  });
  obj.domain = doc[0].domain;
  console.log(obj);
  console.log("Array is ", arr);
  obj.roleactions = arr;
  console.log("Final Obj", obj);
  return done(null, obj);
}
func((doc), (err, result) => {
  console.log("Result from Caller", result);
  let str = JSON.stringify(result)
  console.log(str);
  console.log(JSON.parse(str));
});
/*try {
    console.log(JSON.stringify(obj));
    //console.log("valid JSON",obj);
} catch (e) {
    console.log("not JSON");
}*/
//console.log("actionsArray",actionsArray);
