$(function(){
  var highlightedTag=null;
  //whether or not highlightedUL is null determines whether the highlighted item is a heading or a list item
  var highlightedUL=null;

  //mouseover checks for category headers
  $("#softwareheader").mouseover(function(){
    revertHighlight("#softwareheader");
    highlightOnMouseover("images/coverimages/software.png","#softwareheader","#softwareUL");
  });
  $("#musicheader").mouseover(function(){
    revertHighlight("#musicheader");
    highlightOnMouseover("images/musiccover.png","#musicheader", "#musicUL");
  });
  $("#designheader").mouseover(function(){
    revertHighlight("#designheader");
    highlightOnMouseover("images/soon.png","#designheader","#designUL");
  });
  $("#photoheader").mouseover(function(){
    revertHighlight("#photoheader");
    highlightOnMouseover("images/photocover.png","#photoheader","#photoUL");
  });
  $("#essayheader").mouseover(function(){
    revertHighlight("#essayheader");
    highlightOnMouseover("images/essaycover.jpg","#essayheader","#essayUL");
  });

  /**
    * mouseover checks for list items
  **/

  $("#freeweight").mouseover(function(){
    revertHighlight("#freeweight");
    highlightOnMouseover("images/soon.png","#freeweight",null);
  });

  $("#hanoh").mouseover(function(){
    revertHighlight("#hanoh");
    highlightOnMouseover("images/hanoh.png","#hanoh", null);
  });

  $("#aacc").mouseover(function(){
    revertHighlight("#aacc");
    highlightOnMouseover("images/aacc_1.png","#aacc",null);
  });

  $("#skphoto").mouseover(function(){
    revertHighlight("#skphoto");
    highlightOnMouseover("images/skphoto.jpg","#skphoto", null);
  });

  $("#identitymusicessay").mouseover(function(){
    revertHighlight("#identitymusicessay");
    highlightOnMouseover("images/coverimages/essay.png","#identitymusicessay", null);
  });

  $("#originalmusic").mouseover(function(){
    revertHighlight("#originalmusic");
    highlightOnMouseover("images/coverimages/season1.png","#originalmusic",null);
  });

  $("#playlists").mouseover(function(){
    revertHighlight("#playlists");
    highlightOnMouseover("images/coverimages/curatedplaylists.png","#playlists",null);
  });

  $("#twitch").mouseover(function(){
    revertHighlight("#twitch");
    highlightOnMouseover("images/twitch_design.png","#twitch",null);
  });

  $("#aaslcproject").mouseover(function(){
    revertHighlight("#aaslcproject");
    highlightOnMouseover("images/coverimages/aaslc.PNG","#aaslcproject",null);
  });

  $("#drakextobyfox").mouseover(function(){
    revertHighlight("#drakextobyfox");
    highlightOnMouseover("images/drakextobyfox.png","#drakextobyfox",null);
  });


  //convenience function for resetting highlighted item
  function revertHighlight(currtag){
    //not the first mouseover and previous mouseover wasn't this item
    if(highlightedTag == null || highlightedTag == currtag){
      return;
    }
    //prev highlighted item was a header
    else if(highlightedUL != null){
      $(highlightedTag).attr("style","background-color:#fca89f;");
      $(highlightedUL).attr("style","border-bottom:solid 3px #fca89f;");
    }
    //otherwise the prev highlighted item was a list item
    else{
      $(highlightedTag).attr("style","color:#fca89f;");
    }
  }

  //convenience function for highlighting headers on mouseover
  function highlightOnMouseover(imgsrc, currtag, ulname){
    $("#rightimg").attr("src", imgsrc);
    if(ulname != null){
      $(currtag).attr("style","background-color:#a2eeef;");
      $(ulname).attr("style","border-bottom:solid 3px #a2eeef;");
      highlightedUL=ulname;
      highlightedTag=currtag;
    }
    else{
      $(currtag).attr("style","color:#a2eeef;");
      highlightedTag=currtag;
      highlightedUL=null;
    }
  }
});
