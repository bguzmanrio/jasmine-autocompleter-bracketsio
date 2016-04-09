define(function(require, exports, module) {
  
  var JASMINE_AUTOCOMPLETER = "jasmine.autocompleter";

  var CommandManager = brackets.getModule("command/CommandManager");
  var AppInit = brackets.getModule("utils/AppInit");
  var KeyBindingManager = brackets.getModule('command/KeyBindingManager');
  var DocumentManager = brackets.getModule("document/DocumentManager");
  
  var currentDoc;
  var EditorManager;
  var editor;
  var resolver = require( 'lib/resolver' );

  var getEditor = function() {
    currentDoc = DocumentManager.getCurrentDocument();
    EditorManager = brackets.getModule("editor/EditorManager");
    editor = EditorManager.getCurrentFullEditor();
  };
  
  var getCurrentLine = function(){
    getEditor();
    var currentPos = editor.getCursorPos();
    var endPosition = editor.getCursorPos();
    var line = editor.document.getLine(currentPos.line);
    line = resolver.resolve( line );
    currentPos.ch = 0;
    endPosition.ch = line.length;
    currentDoc.replaceRange( line, currentPos, endPosition );
  };
  
  var registerShortCut = function(){
    CommandManager.register("Ctrl-Shift-j", JASMINE_AUTOCOMPLETER, getCurrentLine);
    KeyBindingManager.addBinding(JASMINE_AUTOCOMPLETER, "Ctrl-Shift-J");
  }

  AppInit.appReady( function() {
    registerShortCut();
  } );

});
