// Workout Model
// type, name and duration are required for both cardio and resistance

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
    day: {
        type: Date,
        default: Date.now()
    },
    exercises: [
        {
            type: {
                type: String,
                required: true
            },
            name: {
                type: String,
                required: true
            },
            duration: {
                type: Number,
                required: true
            },
            weight: {
                type: Number
            },
            reps: {
                type: Number
            },
            sets: {
                type: Number
            },
            distance: {
                type: Number
            }
        }
    ]
    },
    {
        toJSON: { virtuals: true }
    }
);

WorkoutSchema.virtual("totalDuration").get(function() {
    return this.exercises.reduce((durationTotal, exercise) => {
        return durationTotal + exercise.duration;
    },
    0);
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;