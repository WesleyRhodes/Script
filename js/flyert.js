// 2023-12-15 22点08分
let url = $request.url;
let body = $response.body;
console.log('dy123_let url_in'+url);
console.log('Flyert=========================START================================================');

if (url.includes("timeline_tab_name")) {
    let obj = JSON.parse(body);
    obj.Variables.data.data=[]; 



    
}
