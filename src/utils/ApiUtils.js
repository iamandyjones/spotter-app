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

function getWorkouts(success) {
  return fetch('/api/workouts/', {
  headers: {
    'Accept': 'application/json',
  },
  }).then(checkStatus)
    .then(parseJSON)
    .then(success); 
}

function getWorkout(id, success) {
  return fetch('/api/workouts/'+id, {
  headers: {
    'Accept': 'application/json',
  },
  }).then(checkStatus)
    .then(parseJSON)
    .then(success); 
}

function deleteWorkout(id) {
  return fetch('/api/workouts/'+id, {
  method: 'DELETE',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
  }).then(checkStatus)
}

function createWorkout(data, success) {
  return fetch('/api/workouts', {
  method: 'POST',
  body: JSON.stringify(data),
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
  }).then(checkStatus)
    .then(success)  
}

function editWorkout(id, data) {
  return fetch('/api/workouts/'+id, {
  method: 'PATCH',
  body: JSON.stringify(data),
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
  }).then(checkStatus);
}

function getExercises(id, success) {
  return fetch('/api/exercises?workoutId='+id, {
  headers: {
    'Accept': 'application/json',
  },
  }).then(checkStatus)
    .then(parseJSON)
    .then(success); 
}

function createExercise(data) {
  return fetch('/api/exercises', {
  method: 'POST',
  body: JSON.stringify(data),
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
  }).then(checkStatus)
}

function deleteExercise(id) {
  return fetch('/api/exercises/'+id, {
  method: 'DELETE',
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
  method: 'PUT',
  body: JSON.stringify(data),
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
  }).then(checkStatus);
}

function editExercise(id, data) {
  return fetch('/api/exercises/'+id, {
  method: 'PATCH',
  body: JSON.stringify(data),
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
  }).then(checkStatus);
}


export { 
  getWorkout, 
  getWorkouts, 
  createWorkout, 
  deleteWorkout,
  editWorkout, 
  getExercises, 
  getTimer, 
  toggleTimer, 
  editExercise, 
  createExercise, 
  deleteExercise };

