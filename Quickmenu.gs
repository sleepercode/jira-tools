function processQMAction(jsonFormData) {
  debug.log('=== processQMAction ===');
  debug.log(jsonFormData);

  var response = {status: true, message: null};
  var data = {
    //filter_id: 14401,
    jql: jsonFormData['search_jql'],
    startAt: jsonFormData['search_startat'] || 0,
    maxResults: jsonFormData['search_limit'] || 10,
    columns: jsonFormData['search_fields'].split(',')
  };

  try {
    insertIssuesFromFilter(data);
  } catch (err){
    response.status  = false;
    response.message = err;
    debug.error(err);
  }
  
  return response;
}
