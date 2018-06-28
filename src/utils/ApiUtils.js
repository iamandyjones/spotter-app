const API = '/api/';

const parseJSON = response => response.json();

const handleErrors = response => {

    if (response.ok) {
        return response;
    }

    return Promise.reject(response.status);

}

const getWorkouts = () => {
  return fetch(`${API}workouts/`, {
  headers: {
    'Accept': 'application/json',
  },
  }).then(handleErrors)
    .then(parseJSON)
}

const getWorkout = (id) => {
  return fetch(`${API}workouts/${id}`, {
  headers: {
    'Accept': 'application/json',
  },
  }).then(handleErrors)
    .then(parseJSON);
}

const deleteWorkout = id => {
  return fetch(`${API}workouts/${id}`, {
  method: 'DELETE',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
  }).then(handleErrors)
}

const createWorkout = data => {
  return fetch(`${API}workouts`, {
  method: 'POST',
  body: JSON.stringify(data),
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
  }).then(handleErrors)
    .then(() => data.id)
}

const editWorkout = (id, data) => {
  return fetch(`${API}workouts/${id}`, {
  method: 'PATCH',
  body: JSON.stringify(data),
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
  }).then(handleErrors);
}

const getExercises = id => {
  return fetch(`${API}exercises?workoutId=${id}`, {
  headers: {
    'Accept': 'application/json',
  },
  }).then(handleErrors)
    .then(parseJSON);
}

const createExercise = data => {
  fetch(`${API}exercises`, {
  method: 'POST',
  body: JSON.stringify(data),
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
  }).then(handleErrors)
  .catch(err => console.log(err));
}

const deleteExercise = id => {
  fetch(`${API}exercises/${id}`, {
  method: 'DELETE',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
  }).then(handleErrors)
  .catch(err => console.log(err));
}

const getTimer = () => {
  return fetch(`${API}timer`, {
  headers: {
    'Accept': 'application/json',
  },
  }).then(handleErrors)
    .then(parseJSON);
}

const toggleTimer = data => {
  fetch(`${API}timer/`, {
  method: 'PUT',
  body: JSON.stringify(data),
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
  }).then(handleErrors)
  .catch(err => console.log(err));
}

const editExercise = (id, data) => {
  fetch(`${API}exercises/${id}`, {
  method: 'PATCH',
  body: JSON.stringify(data),
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
  }).then(handleErrors)
  .catch(err => console.log(err));;
}

const getExerciseDatabase = () => {
    return fetch(`${API}exercise-list`, {
        headers: {
          'Accept': 'application/json',
        },
    })
    .then(handleErrors)
    .then(parseJSON)
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
  deleteExercise,
  getExerciseDatabase
};
