// apiRoutes

const router = require("express").Router();
const Workout = require("../models/Workout");

// routes
// GET all workouts
router.get("/api/workouts", (req, res) => {
    Workout.find()
    .then(dbWorkouts => {
        res.json(dbWorkouts);
    })
    .catch(err => {
        res.json(err);
    })
});

// GET workouts by range of 7
router.get("/api/workouts/range", (req, res) => {
    Workout.find().limit(7)
    .then(dbWorkouts => {
        res.json(dbWorkouts);
    })
    .catch(err => {
        res.json(err);
    });
});

// POST - create workout
router.post("/api/workouts", (req, res) => {
    Workout.create({})
    .then(dbWorkout => {
        res.json(dbWorkout);
    })
    .catch(err => {
        res.json(err);
    });
});

// PUT - add exercise to workout
router.put("/api/workouts/:id", (req, res) =>{
    console.log(req.params.id)
    console.log(req.body)
    Workout.findByIdAndUpdate(
        req.params.id,
        {
            $push: {
                exercises: req.body
            }
        },
        { new: true, runValidators: true }
    )
    .then(dbWorkout => {
        res.json(dbWorkout);
    })
    .catch(err => {
        res.json(err);
    });
});


module.exports = router;