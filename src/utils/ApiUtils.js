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


function getExercises(success) {
  return fetch('/api/exercises', {
  headers: {
    'Accept': 'application/json',
  },
  }).then(checkStatus)
    .then(parseJSON)
    .then(success);
}

function createExercise(data) {
  return fetch('/api/exercises', {
  method: 'post',
  body: JSON.stringify(data),
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
  }).then(checkStatus)
}

function deleteExercise(id) {
  return fetch('/api/exercises/'+id, {
  method: 'delete',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
  }).then(checkStatus)
}

function getTimer(success) {
  return fetch('/api/timer', {
  headers: {
    'Accept': 'application/json',
  },
  }).then(checkStatus)
    .then(parseJSON)
    .then(success);
}

function toggleTimer(data) {
  return fetch('/api/timer/', {
  method: 'put',
  body: JSON.stringify(data),
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
  }).then(checkStatus);
}

function editExercise(id, data) {
  return fetch('/api/exercises/'+id, {
  method: 'put',
  body: JSON.stringify(data),
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
  }).then(checkStatus);
}


export { getExercises, getTimer, toggleTimer, editExercise, createExercise, deleteExercise };

