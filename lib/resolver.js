define(function( require, exports ){
  
  var shortCuts = {
    'it': 'it',
    'i': 'it',
    't': 'it',
    'd': 'describe',
    'desc': 'describe',
    'describe': 'describe',
    'be': 'beforeEach',
    'each': 'beforeEach',
    'beforeeach': 'beforeEach',
    'beforeEach': 'beforeEach',
    'so':'spyOn',
    'spy':'spyOn',
    'spyon':'spyOn',
    'spyOn':'spyOn'
  };
  
  
  var generators = {
    'it': function( key, description, padding ){
      return padding + 'it(\'' + description + '\', function(){\n\n' + padding + '});'
    },
    'describe': function( key, description, padding ){
      return padding + 'describe( \'' + description + '\', function(){\n\n' + padding + '} );'
    },
    'beforeEach': function( key, description, padding ){
      return padding + 'beforeEach(function(){\n\n' + padding + '});'
    },
    'spyOn': function( key, fullMethod, padding){
      var splittedMethod = fullMethod.split('.');
      var methodName = splittedMethod.pop();
      return padding + 'spyOn( ' + splittedMethod.join('.') + ', \'' + methodName + '\' );'
    }
    
  };
  
  var resolveShortCut = function( shortcut ){
    var key = shortCuts[ shortcut ];
    if( !generators[ key ] ){
      key = null;
    }
    
    return key;
  };
  
  var generate = function( key ){
    return generators[ key ].apply( this, arguments );
  };
  
  exports.resolve = function( line ){
    var splittedLine = line.split(':');
    if( splittedLine.length > 1 ){      
      var keyWord = splittedLine[ 0 ];
      var description = splittedLine[ 1 ] || '';
      var cleanKeyWord = keyWord.replace(/\s/g,'');
      var leftPadding = keyWord.split( cleanKeyWord )[ 0 ];
      
      cleanKeyWord = resolveShortCut( cleanKeyWord );
      line = generate( cleanKeyWord, description, leftPadding );
    }
    
    return line;
    
  };
    
});