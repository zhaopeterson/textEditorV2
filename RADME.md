This the v2 version, user can select a portion of the text and use the controls to update the stle

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

  The updateTextStyle function always update the one and only mark tag