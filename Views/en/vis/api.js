  
  //-------------------------------------------------------------------------------
  // Get feed list
  //-------------------------------------------------------------------------------
  function get_feed_list(apikey)
  {
    var list = [];
    $.ajax({                                      
      type: "GET",
      url: path+"feed/list.json?apikey="+apikey,           
      dataType: 'json',
      async: false,
      success: function(data) { list = data; }
    });
    return list;
  }

  //-------------------------------------------------------------------------------
  // Get feed data
  //-------------------------------------------------------------------------------
  function get_feed_data(feedID,start,end,resolution)
  {
    var feedIn = [];
    $.ajax({                                    
      url: path+'feed/data.json',                         
      data: "&apikey="+apikey+"&id="+feedID+"&start="+start+"&end="+end+"&res="+resolution,  
      dataType: 'json',                           
      async: false,
      success: function(datain) { feedIn = datain; }
    });
    return feedIn;
  }

  //-------------------------------------------------------------------------------
  // Get feed data
  //-------------------------------------------------------------------------------
  function get_multigraph(apikey)
  {
    var feedlist = [];
    $.ajax({                                      
      type: "GET",
      url: path+"multigraph/get.json?apikey="+apikey, //+apikey_write,     
      async: false,    
      dataType: 'json',     
      success: function(data){feedlist = data;}
    });
    return feedlist;
  }

  //-------------------------------------------------------------------------------
  // Get feed data
  //-------------------------------------------------------------------------------
  function save_multigraph(write_apikey,feedlist)
  {
    var feedlist_save = eval(JSON.stringify(feedlist));
    for(var i in feedlist_save) { feedlist_save[i].plot.data = null; }

    $.ajax({                                      
      type: "POST",
      url: path+"multigraph/save.json?apikey="+write_apikey,        
      data: "&data="+JSON.stringify(feedlist_save),
      success: function(msg) {console.log(msg);}
    });
  }
