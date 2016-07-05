
//-START--API for Add New User, INFORMATION SAVED IN All_Members TABLE-----------
router.post('/saveUser', function (req, res) {
    var database = req.mysql;
    var first_name = req.body.firstName;
    var last_name = req.body.lastName;
    var role = req.body.role;
    var department = req.body.department;
    var password = req.body.password;
    var currentyear = parseInt(new Date().getFullYear().toString().substr(2, 2));
    if (role === 'student') {
        var findNumber = 'SELECT student_number FROM all_numbers';
        database.query(findNumber, function (err, rows) {
            if (err) {
                res.json({status: 0, msg: err});
            }
            else {
                if (rows.length >= 0) {
                    if (rows === 0) {
                        var n = 0;
                    }
                    else {
                        n = rows[0].student_number;
                        console.log(typeof n);
                    }
                    var number = n + 1;
                    var memberId = 'S' + number + '_' + department + currentyear;
                    var insertion = 'INSERT INTO all_members SET ?';
                    var insert_details = {member_id: memberId, password: password, firstName: first_name, lastName: last_name, role: role, department: department};
                    database.query(insertion, insert_details, function (error, result) {
                        if (error) {
                            res.json({status: 0, msg: err});
                        }
                        else {
                            var updation = 'INSERT INTO all_numbers SET ?';
                            var update_details = {student_number: number};
                            database.query(updation, update_details, function (err1, result1) {
                                if (err1) {
                                    res.json({status: 0, msg: err1});
                                }
                                else {
                                    var insert_profile_table = 'INSERT INTO all_profiles SET ?';
                                    var insert_profiles = {member_id: memberId};
                                    database.query(insert_profile_table, insert_profiles, function (err2, result2) {
                                        if (err2) {
                                            res.json({status: 0, msg: err2});
                                        }
                                        else {
                                            res.json({status: 1, msg: 'User is created successfully', id: memberId});
                                        }
                                    });
                                }
                            });
                        }
                    });
                }
                else {
                    res.json({status: 0, msg: 'Incorrect Username and password'});
                }
            }
        });
    }
    else if (role === 'projectIncharge' || role === 'internalGuide') {
        var findNumber = 'SELECT teacher_number FROM all_numbers';
        database.query(findNumber, function (err, rows) {
            if (err) {
                res.json({status: 0, msg: err});
            }
            else {
                if (rows.length >= 0) {
                    if (rows === 0) {
                        var n = 0;
                    }
                    else {
                        n = rows[0].teacher_number;
                    }
                    var number = n + 1;
                    var memberId = 'T' + number + '_' + department + currentyear;
                    var insertion = 'INSERT INTO all_members SET ?';
                    var insert_details = {member_id: memberId, password: password, firstName: first_name, lastName: last_name, role: role, department: department};
                    database.query(insertion, insert_details, function (error, result) {
                        if (error) {
                            res.json({status: 0, msg: err});
                        }
                        else {
                            var updation = 'INSERT INTO all_numbers SET ?';
                            var update_details = {teacher_number: number};
                            database.query(updation, update_details, function (err1, result1) {
                                if (err1) {
                                    res.json({status: 0, msg: err1});
                                }
                                else {
                                    var insert_profile_table = 'INSERT INTO all_profiles SET ?';
                                    var insert_profiles = {member_id: memberId};
                                    database.query(insert_profile_table, insert_profiles, function (err2, result2) {
                                        if (err2) {
                                            res.json({status: 0, msg: err2});
                                        }
                                        else {
                                            res.json({status: 1, msg: 'User is created successfully', id: memberId});
                                        }
                                    });
                                }
                            });
                        }
                    });
                }
                else {
                    res.json({status: 0, msg: 'Incorrect Username and password'});
                }
            }
        });
    }
    else if (role === 'hod') {
        var findNumber = 'SELECT hod_number FROM all_numbers';
        database.query(findNumber, function (err, rows) {
            if (err) {
                res.json({status: 0, msg: err});
            }
            else {
                if (rows.length >= 0) {
                    if (rows === 0) {
                        var n = 0;
                    }
                    else {
                        n = rows[0].hod_number;
                    }
                    var number = n + 1;
                    var memberId = 'H' + number + '_' + department + currentyear;
                    var insertion = 'INSERT INTO all_members SET ?';
                    var insert_details = {member_id: memberId, password: password, firstName: first_name, lastName: last_name, role: role, department: department};
                    database.query(insertion, insert_details, function (error, result) {
                        if (error) {
                            res.json({status: 0, msg: err});
                        }
                        else {
                            var updation = 'INSERT INTO all_numbers SET ?';
                            var update_details = {hod_number: number};
                            database.query(updation, update_details, function (err1, result1) {
                                if (err1) {
                                    res.json({status: 0, msg: err1});
                                }
                                else {
                                    var insert_profile_table = 'INSERT INTO all_profiles SET ?';
                                    var insert_profiles = {member_id: memberId};
                                    database.query(insert_profile_table, insert_profiles, function (err2, result2) {
                                        if (err2) {
                                            res.json({status: 0, msg: err2});
                                        }
                                        else {
                                            res.json({status: 1, msg: 'User is created successfully', id: memberId});
                                        }
                                    });
                                }
                            });
                        }
                    });
                }
                else {
                    res.json({status: 0, msg: 'Incorrect Username and password'});
                }
            }
        });
    }
});
//-END--API for Add New User, INFORMATION SAVED IN All_Members TABLE-------------