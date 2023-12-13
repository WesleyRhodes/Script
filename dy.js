let url = $request.url;

const TabArr = ["同城", "经验", "热点", "商城"];


if (/(tnc|dm)[^\/]+\.zijieapi.com\/get_domains\/v\d\/\?/.test(url)) {

url = url.replace(/\/\?/g, "");

console.log('dy123替换302成功⚠️');

const response = {

status: 302,

headers: { Location: url },

};

$done({ response });

} else if (/aweme\.snssdk\.com\/aweme\/homepage\/render/.test(url)) {

var i = JSON.parse($response.body);

if (i?.data?.tab_list) {

i.data.tab_list.forEach((tab, index) => {

if (tab.tab_type === "homepage_publish") {

i.data.tab_list.splice(index, 1);

} else if (tab.tab_type === "homepage_profile") {

tab.tab_title = "测试";

} else if (tab.tab_type === "homepage_home") {

tab.tab_title = "";

tab.extra.tab_list = tab.extra.tab_list.filter(

(tabs) => !TabArr.includes(tabs.tab_title)

);

}

});

}

$done({ body: JSON.stringify(i) });

} else {


console.log('dy123不符合302⚠️');


$done()

}
