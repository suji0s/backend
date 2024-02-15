import express from "express";
import Department from "../../models/departmentSchema.js";

const router = express.Router();

router.post("/", async (req, res) => {
  const body = { ...req.body };
  await Department.create(body);
  res.status(201).json({ message: "Department added successfully" });
});

router.get("/", async (req, res) => {
  const departments = await Department.find();
  res.status(200).json(departments);
});

router.get("/id:", async (req, res) => {
  const { id } = req.params;
  const departments = await Department.find(id);
  res.status(201).json(departments);
});
router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  await Department.findByIdAndDelete(id);
  res.status(201).json({ message: "Department Deleted" });
});

router.patch("/:id", async (req, res) => {
  const { id } = req.params;
  const data = { ...req.body };
  await Department.findByIdAndUpdate(id, data);

  res.status(200).json({ message: "Department patched" });
});
export default router;
