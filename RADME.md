This the v2 version, user can select a portion of the text and use the controls to update the stle

You can veiw it on http://jssandboxes.com/jquery/texteditor-v2/

The strategy is to use a mark tag to wrap the selection.


function getSelectText() {
  var highlight, selection, selectedText;
    if (window.getSelection().isCollapsed == false) {
      selection = window.getSelection();
      selection = selection.getRangeAt(0)
      selectedText = selection.extractContents();
      var mark = document.createElement("mark");
      mark.appendChild(selectedText);
      selection.insertNode(mark);  
    }
  }

  Later on if there is more selection, convert the previously styled selection to a span tag (replace the mark tag)
	function markToSpan(){
	  $('.te-text mark').each(function(){
	    if($(this).hasAttr("style")) {
	      $(this).replaceWith(function() {
	        return $('<span/>', {
	          style: this.getAttribute('style'),
	          html: this.innerHTML
	        });
	      });
	    }
	  })
	}

  The updateTextStyle function always update the one and only mark tag

  I want to unwrap the selection (when the same selection is selected for the second time), however I have trouble to do that, also I did not try to do the algorithm involving new selectioncross or overlapping selections from the previous selection