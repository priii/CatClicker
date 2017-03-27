var cats = {
  "catBio" :[{
      "catName" : "Tom",
       "catPic" :"images/tom.png",
       "catId"  :"1"
  },
 {
   "catName" : "MarieCat",
    "catPic" :"images/MarieCat.png",
    "catId"  :"2"
 },
 {
   "catName" : "Cleo",
    "catPic" :"images/Cleo.png",
    "catId"  :"3"
 },
 {
   "catName" : "Grumpy",
    "catPic" :"images/grumpy.jpg",
    "catId"  :"4"
 },
 {
   "catName" : "HelloKitty",
    "catPic" :"images/HelloKitty.jpg",
    "catId"  :"5"
 }]
};

var HTMLcatStart = '<div class="cat-entry"></div>';
var HTMLcatName = '<div class="date-text">%data%</div>';
var HTMLcatImage = '<img src ="%data%">';


cats.display = function(){
  for (catIdx = 0; catIdx < cats.catBio.length; catIdx++)
  {
      $("#cat").append(HTMLcatStart);
     var formattedcatName = HTMLcatName.replace("%data%",cats.catBio[catIdx].catName);
      var formattedcatPic = HTMLcatImage.replace("%data%",cats.catBio[catIdx].catPic);
      $('.cat-entry:last').append(formattedcatName);
      $('.cat-entry:last').append(formattedcatPic);
  }
};
cats.display();
//for (var i =0 ; cats.catBio.length; i++){
//  var cat = cats.catBio[i];

$(".cat-entry").each(function(index){
  var count = 0;
  $(this).on("click",function(){
    $(this).clone().appendTo("#display");
    count ++;
      $("#unique_count").html(count + "times clicked");
      });
});


/*$(document).ready(function(){

    $("#cat").click(function(){
      console.log(Object.keys(cats));
    $("#cat").clone().appendTo("#display");
  });

});
*/
$(document).ready(function(){
  var count =0;
  $("#cat").click(function(){
    count++;
    //console.log(count);
    $("#counter").html("Number of clicks: "+ count); //over writing the no of clicks
  });
});
