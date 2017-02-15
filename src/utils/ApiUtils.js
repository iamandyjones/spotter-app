function getExercises(success) {
return fetch('/api/exercises', {
  headers: {
    Accept: 'application/json',
  },
}).then(checkStatus)
  .then(parseJSON)
  .then(success);
}

function getTimer(success) {
return fetch('/api/timer', {
  headers: {
    Accept: 'application/json',
  },
}).then(checkStatus)
  .then(parseJSON)
  .then(success);
}

function startTimer(data) {
    return fetch('/api/timer/', {
      method: 'put',
      body: JSON.stringify(data),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
    }).then(checkStatus);
  }

function checkStatus(response) {
    if (response.status >= 200 && response.status < 300) {
      return response;
    } else {
      const error = new Error(`HTTP Error ${response.statusText}`);
      error.status = response.statusText;
      error.response = response;
      console.log(error);
      throw error;
    }
  }

  function parseJSON(response) {
    return response.json();
  }




export function search() {
  return fetch('/api/exercises')
  .then(function(response) {
    return response.json()
  }).then(function(json) {
    console.log('parsed json: ', json)
  }).catch(function(ex) {
    console.log('parsing failed: ', ex)
  });
}

export function add() {
  return fetch('/api/exercises',{
  	method: 'post',
  	headers: {
  		'Accept': 'application/json',
  		'Content-Type': 'application/json'
  	},
  	body: JSON.stringify({
  		"title": "DB Rows",
  		"author": "Andy"
  	})
  })
  .then(function(response) {
    return response.json()
  }).then(function(json) {
    console.log('parsed json: ', json)
  }).catch(function(ex) {
    console.log('parsing failed: ', ex)
  });
}

export function edit() {
  return fetch('/api/exercises/5',{
  	method: 'put',
  	headers: {
  		'Accept': 'application/json',
  		'Content-Type': 'application/json'
  	},
  	body: JSON.stringify({
  		"author": "Andy S Jones"
  	})
  })
  .then(function(response) {
    return response.json()
  }).then(function(json) {
    console.log('parsed json: ', json)
  }).catch(function(ex) {
    console.log('parsing failed: ', ex)
  });
}

export { getExercises, getTimer, startTimer };

