// apiRoutes - to be called from js files in public folder

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
      res.status(400).json(err);
    })
});

// GET workouts by range of 7
router.get("/api/workouts/range", (req, res) => {
    Workout.find().limit(7)
    .then(dbWorkouts => {
        res.json(dbWorkouts);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

// POST - create workout
router.post("/api/workouts", (req, res) => {
    Workout.create({})
    .then(dbWorkout => {
        res.json(dbWorkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

// PUT - add exercise to workout
router.put("/api/workouts/:id", (req, res) =>{
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
        res.status(400).json(err);
    });
});

module.exports = router;