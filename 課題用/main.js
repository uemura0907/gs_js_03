// 日付を表示する関数
$(function(){
    var now_date  = new Date();
    const today = now_date.getFullYear()+ '/' +(now_date.getMonth()+1)+ '/' +now_date.getDate();
    $("#today").append(today);
});

const newPostRef = firebase.database().ref();
// クリックしたときの関数
$("#save").on("click", function(){
    newPostRef.push({
        today: $("#today").text(),//日付
        kamoku1: $("#kamoku1").val(), //名前
        kingaku1: $("#kingaku1").val(), //金額
    })
    $("#kamoku1").val("");
    $("#kingaku1").val("");
});
//受信処理
newPostRef.on("child_added", function (data) {
        let v = data.val();
        let k = data.key;
  

        const html = `<tr><th>${v.today}</th><td>${v.kamoku1}</td><td>${v.kingaku1}円</td><td><input type="button" id="delete" value="削除"></td>`;
  
        $("#list").prepend(html);
})
  


// $("#clear").on("click",function(){
//     localStorage.clear();
//     $("#list").empty();
// });
$("#delete").on("click",function(){


});
