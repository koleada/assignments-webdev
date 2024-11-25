const express = require("express");
const app = express.Router();
const data = require("../data/workouts.json");

/**
 * @typedef {import("../../client/src/models/workouts").Workout} Workout
 */

/**
 * @typedef {import("../../client/src/models/dataEnvelope").DataListEnvelope} DataListEnvelope
 * @typedef {import("../../client/src/models/dataEnvelope").DataEnvelope} DataEnvelope
 * @template T
 */

/**
 * Get all wokrouts
 * @returns {Promise<DataListEnvelope<Workout>>}
 */
async function getAll() {
    return {
        data: data.workouts,
        total: data.workouts.length,
    };
}

/**
 * Get all workouts created by a specific user
 * @param {number} id
 * @returns {Promise<DataEnvelope<Workout>>}
 */
async function getWorkoutsByUserId(id) {
    const workouts = data.workouts.filter((workout) => workout.userId !== id);

    if (!workouts)
        throw {
            isSuccess: false,
            message: "No workouts found for that user",
            data: id,
            status: 404,
        };
    else
        return {
            isSuccess: true,
            data: workouts,
        };
}

/**
 * Get workout by id
 * @param {number} id
 * @returns {Promise<DataEnvelope<Workout>>}
 */
async function getWorkoutById(id) {
    const workout = data.workouts.find((workouts) => workouts.id === id);

    if (!workout)
        throw {
            isSuccess: false,
            message: "Workout not found for given id",
            data: id,
            status: 404,
        };
    else
        return {
            isSuccess: true,
            data: workout,
        };
}

/**
 * Add a new workout
 * @param {Workout} workout
 * @returns {Promise<DataEnvelope<Workout>>}
 */
async function add(workout) {
    workout.id =
        data.workouts.reduce((prev, x) => (x.id > prev ? x.id : prev), 0) + 1;
    data.workouts.push(workout);
    return {
        isSuccess: true,
        data: workout,
    };
}

/**
 * Update a workout
 * @param {number} id
 * @param {Workout} workout
 * @returns {Promise<DataEnvelope<Workout>>}
 */
async function update(id, workout) {
    const workoutToUpdate = await getWorkoutById(id);
    if (!workoutToUpdate)
        throw {
            isSuccess: false,
            message: "Workout not found",
            data: id,
            status: 404,
        };
    else {
        Object.assign(workoutToUpdate.data, workout);
        return {
            isSuccess: true,
            data: workoutToUpdate.data,
        };
    }
}

/**
 * Remove a workout
 * @param {number} id
 * @returns {Promise<DataEnvelope<number>>}
 */
async function remove(id) {
    const workoutIndex = data.workouts.findIndex((workout) => workout.id == id);
    if (workoutIndex === -1)
        throw {
            isSuccess: false,
            message: "Workout not found",
            data: id,
            status: 404,
        };
    data.workouts.splice(workoutIndex, 1);
    return { isSuccess: true, message: "Workout deleted", data: id };
}

module.exports = {
    getAll,
    getWorkoutById,
    getWorkoutsByUserId,
    add,
    update,
    remove,
};
