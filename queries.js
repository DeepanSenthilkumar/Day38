1.
db.topics.aggregate([{ $match: { date: "October" } }, { $lookup: { from: "task", let: { topic: "$topics" }, pipeline: [{ $match: { $expr: { $and: [{ $eq: ["$topics", "$$topic"] }, { $eq: ["$date", "October"] }] } } }, { $project: { _id: 0, task: 1 } }], as: "tasks" } }, { $project: { _id: 0, topic: "$topics", tasks: "$tasks.task" } }])

2.
db.company_drive.find({ Appearing_date: { $gte: "15 oct-2020", $lte: "31 oct-2020" } })


3.
db.company_drive.aggregate([{ $lookup: { from: "users", localField: "Company_name", foreignField: "company_appeared", as: "students" } }, { $project: { _id: 0, company_drive: "$Company_name", appearing_date: "$Appearing_date", students: "$students.student_name" } }])


4.
db.codekata.aggregate([{ $project: { _id: 0, problem_name: 1, total_problems_solved: { $size: "$completed_students" } } }])


5.
db.mentors.find({ $expr: { $gt: [{ $toInt: "$no_of_mentee" }, 15] } })


6.
db.attendance.aggregate([{ $match: { absent_date: { $gte: "15 oct-2020", $lte: "31 oct-2020" } } }, { $lookup: { from: "task", localField: "student_name", foreignField: "not_submitted", as: "task_info" } }, { $match: { task_info: { $ne: [] } } }, { $count: "total_users" }])

