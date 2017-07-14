$(document).ready(function(){ 


  function gallery(navigation,pictures){  
  
      var navi = $(navigation);
      var pics = $(pictures);
      var activeClass = 'activenav'; 
    
      navi.find('li:first').addClass(activeClass);
      pics.find('li:not(:first)').hide();
     
      navi.find('li').on('mouseover click', function(){
      
        var activePic = $(this);
        var childNumber = activePic.index() + 1;
         
        activePic
          .addClass(activeClass)
          .siblings()
          .removeClass(activeClass);
        
        pics
          .find('li:nth-child(' + childNumber + ')')
          .stop(true, true).fadeIn()
          .siblings().hide();  
        
      });
  } 
  

  gallery('.navi','.pics');
 
});





