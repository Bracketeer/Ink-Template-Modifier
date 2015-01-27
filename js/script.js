$(document).ready(function () {
    /////////////////
    //color Picker//
    ////////////////
     $('input.color').change(function () {
        var addColor = $("input[name=color]").val(); 
        $('.header').css({'background-color': addColor, 'border-color': addColor});
        $('.color-blue').css('color', addColor);
        $('.button td').css('background', addColor);

        $('.background-image').css('background-color', addColor);
        $('.background-image2').css('background-color', addColor);
      });
     /////////////////
    //color Picker Secondary//
    ////////////////
     $('input#color2').change(function () {
     var addColor2 = $("input[name=color2]").val();
         $('table.secondary td').css({'background': addColor2, 'border-color': addColor2});
});
     /////////////////
    //color Picker Primary Border and Rollover//
    ////////////////
     $('input#color3').change(function () {
     var addColor3 = $("input[name=color3]").val();
         //$('table.button td').css('border-color', addColor3);
         $('.secondary:hover td').css('background', addColor3);
  });
     /////////////////
    //color Picker Secondary//
    ////////////////
    // $('input#color4').change(function () {
    // var addColor4 = $("input[name=color4]").val();
    //     $('table.secondary td').css({'background': addColor4, 'border-color': addColor2});
//});
      //////////////////
    //Logo Image script//    
     //////////////////
    
    $('#addLogo').click(function () {
        $('#rowHeader').removeClass('displayNone');
    	var addLogo = $("input[name=Logo]").val();
        $('table.headerID').addClass('header');    
        $('#Logoimage').attr("height", "75px");
        if(addLogo === "Logo URL"){   
        $('#Logoimage').attr("src", "http://placehold.it/150x75")
        }
            else{
         $('img#Logoimage').attr("src", addLogo);    
            }
    });
        
    $('#removeLogo').click (function() {
        
        $('img#Logoimage').removeAttr('src');
        $('img#Logoimage').removeAttr('height');
        $('table.headerID').removeClass('header'); 
        
    });   
      ///////////////////
    //subheadline script//    
     ///////////////////
    $('#addSubheadline').click(function () {
        $('#subheadline').empty ();
    	var addSubheadline = $("input[name=subheadline]").val();
        $('#subheadline').append (addSubheadline);
    });
    $('#removeSubheadline').click (function() {
        $('#subheadline').empty ();
    });
     /////////////////
    //headline script//   
     ////////////////
    $('#addheadline').click(function () {
        $('#headline').empty ();
    	var addHeadline = $("input[name=headline]").val();
        $('#headline').append (addHeadline);
    });
    $('#removeheadline').click (function() {
        $('#headline').empty ();
    });
      ///////////////////////
    //Video Thumbnail script//
     ///////////////////////
    $('#addVideoThumbnail').click(function () {
    	var addVideoThumbnail = $("input[name=VideoThumbnail]").val();
        $('img#heroimage').attr("src", addVideoThumbnail);
    });
    $('#removeVideoThumbnail').click (function() {
        $('img#heroimage').removeAttr('src');
    });
      //////////////
    //Teaser script//
     //////////////
    $('textarea#TeaserID').change(function () {
    	var addTeaser = $("textarea[name=Teaser]").val();
        $('#Teaser').text(addTeaser);
    });
    $('#removeTeaser').click (function() {
        $('#Teaser').empty ();
    }); 
      /////////////////////////
    //YouTube Video URL script//
     /////////////////////////
    $('#addYoutubeURL').click(function () {
        $('#YoutubeURL').empty ();
    	var addYoutubeURL = $("input[name=YoutubeURL]").val();
        $('#YoutubeURL').append ('<a href="'+ addYoutubeURL + '"> Watch the Video »</a>');
    });
    $('#removeYoutubeURL').click (function() {
        $('#YoutubeURL').empty ();
    });
      ////////////////////////
    //Secondary CTA URL script//
     /////////////////////////
    $('#addSecondaryCTA').click(function () {
    	var addSecondaryCTA = $("input[name=SecondaryCTA]").val();
        $('#SecondaryCTA').attr('href', addSecondaryCTA);
    });
    $('#removeSecondaryCTA').click (function() {
        $('#SecondaryCTA').empty ();
    });
      ///////////////////
    //Home Search script//
     ///////////////////
    $('#addHomeSearch').click(function () {
        var addHomeSearch = $("input[name=HomeSearch]").val();
        $('#HomeSearch').attr('href', addHomeSearch);
        
  });
    $('#removeHomeSearch').click (function() {
        $('#HomeSearch').empty ();
    });
    /////////////////////////////
    //Home value location script//
     ///////////////////////////
    $('#addCTALocation').click(function () {
        $('#CTALocation').empty ();
        var addCTALocation = $("input[name=CTALocation]").val();
        $('#CTALocation').append('<b>Full ' + addCTALocation + ' Home Search</b>');
        
  });
    $('#removeHomeValueLocation').click (function() {
        $('#CTALocation').empty ();
    });
      //////////////////
    //Home value script//
     //////////////////
    $('#addHomeValue').click(function () {
        var addHomeValue = $("input[name=HomeValue]").val();
        $('#HomeValue').attr('href', addHomeValue);
        
  });
    $('#removeHomeValue').click (function() {
        $('#HomeValue').empty ();
    });
     //////////////////
    //Client Name script//
     //////////////////
    $('#addClientName').click(function () {
        var addClientName = $("input[name=ClientName]").val();
        $('#ClientName').replaceWith('<p class="color-blue contact-text" style="text-align:center;" id="ClientName">' + addClientName + '</p>');
        
  });
    $('#removeClientName').click (function() {
        $('#ClientName').empty ();
    });
    //////////////////
    //Client Email script//
     //////////////////
    $('#addClientEmail').click(function () {
        var addClientEmail = $("input[name=ClientEmail]").val();
        $('#ClientEmail').replaceWith('<a id="ClientEmail" href="mailto:' + addClientEmail +'">' + addClientEmail + '</a>');
        
  });
    $('#removeClientEmail').click (function() {
        $('#ClientEmail').empty ();
    });
     //////////////////
    //Client Phone script//
     //////////////////
    $('#addClientPhone').click(function () {
        var addClientPhone = $("input[name=ClientPhone]").val();
        $('#ClientPhone').replaceWith('<p class="color-blue  contact-text" style="text-align:center;" id="ClientPhone">' + addClientPhone +'</p>');
        
  });
    $('#removeClientEmail').click (function() {
        $('#ClientEmail').empty ();
    });
     ///////////////////////
    //Client Thumbnail script//
     ///////////////////////
    $("input.ClientPhoto").click(function () {
        $('#ClientPhoto').empty ();
    	var addClientPhoto = $("input[name=ClientPhoto]").val();
        $('#ClientPhoto').append ('<img src="' + addClientPhoto + '" width="130px" />');
    });
    $('#removeClientPhoto').click (function() {
        $('#ClientPhoto').empty ();
    });
});

