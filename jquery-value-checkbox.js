$.fn.valueCheckbox = function(options) {
  var options = $.extend(options);
  
  if(options.strict           == undefined){ options.strict           = true; }
  if(options.checked_value    == undefined){ options.checked_value    = "true"; }
  if(options.unchecked_value  == undefined){ options.unchecked_value  = "false"; }
  
  return this.each(function(){
    var checkbox = $(this);
    
    
    /* Detect default values if possible */
    if(options.strict){
      
      /* Force checkbox value to be the checked/unchecked values set in options
       * if strict */
      if(checkbox.attr("checked")){
        checkbox.attr("value", options.checked_value);
      } else { checkbox.attr("value", options.unchecked_value); }
    } else {
      
      /* Otherwise try and pick up the checked or unchecked value directly */
      if(checkbox.attr("checked")){
        options.checked_value = checkbox.attr("value");
      } else { options.unchecked_value = checkbox.attr("value"); }
    }
     
    
    checkbox.click(function(){
      if(checkbox.attr("checked")){
        checkbox.attr("value", options.checked_value);
      } else { checkbox.attr("value", options.unchecked_value); }
    });
  });
};