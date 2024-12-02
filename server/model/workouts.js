const express = require("express");
const app = express.Router();
const data = require("../data/workouts.json");
const db = require("./supabase");

const conn = db.getConnection();

/**
 * @typedef {import("../../client/src/models/workouts").Workout} Workout
 */

/**
 * @typedef {import("../../client/src/models/dataEnvelope").DataListEnvelope} DataListEnvelope
 * @typedef {import("../../client/src/models/dataEnvelope").DataEnvelope} DataEnvelope
 * @template T
 */

async function seed() {
    for (const workout of data.workouts) {
        await add(workout);
    }
}

/**
 * Get all wokrouts
 * @returns {Promise<DataListEnvelope<Workout>>}
 */
async function getAll() {
    const { data, error, count } = await conn
        .from("Workouts")
        .select("*", { count: "estimated" });

    return {
        isSuccess: true,
        message: error?.message,
        data: data,
        total: count,
    };
}

/**
 * Get all workouts created by a specific user
 * @param {number} id
 * @returns {Promise<DataListEnvelope<Workout>>}
 */
async function getWorkoutsByUserId(id) {
    const { data, error, count } = await conn
        .from("Workouts")
        .select("*", { count: "estimated" })
        .eq("userId", id);

    if (error && !data) {
        throw {
            isSuccess: false,
            message: "No workouts found for userId: " + id,
            data: [],
            status: 404,
        };
    }
    return {
        isSuccess: !error,
        message: error?.message,
        data: data,
        total: count,
    };
}

/**
 * Get workout by id
 * @param {number} id
 * @returns {Promise<DataEnvelope<Workout>>}
 */
async function getWorkoutById(id) {
    const { data, error } = await conn
        .from("Workouts")
        .select("*")
        .eq("id", id)
        .single();

    if (error && !data) {
        throw {
            isSuccess: false,
            message: "Workout not found for id: " + id,
            data: [],
            status: 404,
        };
    }
    return {
        isSuccess: !error,
        message: error?.message,
        data: data,
    };
}

/**
 * Add a new workout
 * @param {Workout} workout
 * @returns {Promise<DataEnvelope<Workout>>}
 */
async function add(workout) {
    const { data, error } = await conn
        .from("Workouts")
        .insert([
            {
                description: workout.description,
                dateOfPosting: workout.dateOfPosting,
                imageUrl: workout.imageUrl,
                distance: workout.distance,
                type: workout.type,
                duration: workout.duration,
                userId: workout.userId,
                location: workout.location,
            },
        ])
        .select("*")
        .single();

    return {
        isSuccess: !error,
        message: error?.message,
        data: data,
    };
}

/**
 * Update a workout
 * @param {number} id
 * @param {Workout} workout
 * @returns {Promise<DataEnvelope<Workout>>}
 */
async function update(id, workout) {
    const { data, error } = await conn
        .from("Workouts")
        .update([
            {
                description: workout.description,
                dateOfPosting: workout.dateOfPosting,
                imageUrl: workout.imageUrl,
                distance: workout.distance,
                type: workout.type,
                duration: workout.duration,
                userId: workout.userId,
                location: workout.location,
            },
        ])
        .eq("id", id)
        .select("*")
        .single();

    if (error && !data) {
        throw {
            isSuccess: false,
            message: "Workout not found for id: " + id,
            data: null,
            status: 404,
        };
    }

    return {
        isSuccess: !error,
        message: error?.message,
        data: data,
    };
}

/**
 * Remove a workout
 * @param {number} id
 * @returns {Promise<DataEnvelope<number>>}
 */
async function remove(id) {
    const { data, error } = await conn
        .from("Workouts")
        .delete()
        .eq("id", id)
        .select("*")
        .single();

    if (error && !data) {
        throw {
            isSuccess: false,
            message: "Workout not found for id: " + id,
            data: null,
            status: 404,
        };
    }
    return {
        isSuccess: !error,
        message: error?.message,
        data: data,
    };
}

module.exports = {
    getAll,
    getWorkoutById,
    getWorkoutsByUserId,
    add,
    update,
    remove,
    seed,
};
