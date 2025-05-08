-- Insert dummy users
INSERT INTO users (name, email, password, role) VALUES
    ('John Smith', 'john.smith@example.com', '$2a$10$X7UrH5YxX5YxX5YxX5YxX.5YxX5YxX5YxX5YxX5YxX5YxX5YxX', 'admin'),
    ('Sarah Johnson', 'sarah.j@example.com', '$2a$10$X7UrH5YxX5YxX5YxX5YxX.5YxX5YxX5YxX5YxX5YxX5YxX5YxX', 'employee'),
    ('Michael Brown', 'michael.b@example.com', '$2a$10$X7UrH5YxX5YxX5YxX5YxX.5YxX5YxX5YxX5YxX5YxX5YxX5YxX', 'student'),
    ('Emily Davis', 'emily.d@example.com', '$2a$10$X7UrH5YxX5YxX5YxX5YxX.5YxX5YxX5YxX5YxX5YxX5YxX5YxX', 'student'),
    ('David Wilson', 'david.w@example.com', '$2a$10$X7UrH5YxX5YxX5YxX5YxX.5YxX5YxX5YxX5YxX5YxX5YxX5YxX', 'employee'),
    ('Lisa Anderson', 'lisa.a@example.com', '$2a$10$X7UrH5YxX5YxX5YxX5YxX.5YxX5YxX5YxX5YxX5YxX5YxX5YxX', 'student'),
    ('Robert Taylor', 'robert.t@example.com', '$2a$10$X7UrH5YxX5YxX5YxX5YxX.5YxX5YxX5YxX5YxX5YxX5YxX5YxX', 'employee'),
    ('Jennifer Martinez', 'jennifer.m@example.com', '$2a$10$X7UrH5YxX5YxX5YxX5YxX.5YxX5YxX5YxX5YxX5YxX5YxX5YxX', 'student'),
    ('William Thomas', 'william.t@example.com', '$2a$10$X7UrH5YxX5YxX5YxX5YxX.5YxX5YxX5YxX5YxX5YxX5YxX5YxX', 'admin'),
    ('Emma Garcia', 'emma.g@example.com', '$2a$10$X7UrH5YxX5YxX5YxX5YxX.5YxX5YxX5YxX5YxX5YxX5YxX5YxX', 'student');

-- Insert dummy attendance records
-- Note: Replace user_id with actual UUIDs from your users table
INSERT INTO attendance (user_id, check_in, check_out, status) VALUES
    -- John Smith (Admin) - Present
    ((SELECT id FROM users WHERE email = 'john.smith@example.com'), 
     '2024-02-20 08:55:00+00', '2024-02-20 17:05:00+00', 'present'),
    
    -- Sarah Johnson (Employee) - Late
    ((SELECT id FROM users WHERE email = 'sarah.j@example.com'), 
     '2024-02-20 09:15:00+00', '2024-02-20 17:00:00+00', 'late'),
    
    -- Michael Brown (Student) - Present
    ((SELECT id FROM users WHERE email = 'michael.b@example.com'), 
     '2024-02-20 08:50:00+00', '2024-02-20 16:55:00+00', 'present'),
    
    -- Emily Davis (Student) - Absent
    ((SELECT id FROM users WHERE email = 'emily.d@example.com'), 
     '2024-02-20 00:00:00+00', NULL, 'absent'),
    
    -- David Wilson (Employee) - Present
    ((SELECT id FROM users WHERE email = 'david.w@example.com'), 
     '2024-02-20 08:45:00+00', '2024-02-20 17:10:00+00', 'present'),
    
    -- Lisa Anderson (Student) - Late
    ((SELECT id FROM users WHERE email = 'lisa.a@example.com'), 
     '2024-02-20 09:10:00+00', '2024-02-20 16:50:00+00', 'late'),
    
    -- Robert Taylor (Employee) - Present
    ((SELECT id FROM users WHERE email = 'robert.t@example.com'), 
     '2024-02-20 08:40:00+00', '2024-02-20 17:00:00+00', 'present'),
    
    -- Jennifer Martinez (Student) - Present
    ((SELECT id FROM users WHERE email = 'jennifer.m@example.com'), 
     '2024-02-20 08:55:00+00', '2024-02-20 16:45:00+00', 'present'),
    
    -- William Thomas (Admin) - Present
    ((SELECT id FROM users WHERE email = 'william.t@example.com'), 
     '2024-02-20 08:30:00+00', '2024-02-20 17:15:00+00', 'present'),
    
    -- Emma Garcia (Student) - Absent
    ((SELECT id FROM users WHERE email = 'emma.g@example.com'), 
     '2024-02-20 00:00:00+00', NULL, 'absent');

-- Add more attendance records for the same users on different dates
INSERT INTO attendance (user_id, check_in, check_out, status) VALUES
    -- John Smith (Admin) - Previous day
    ((SELECT id FROM users WHERE email = 'john.smith@example.com'), 
     '2024-02-19 08:50:00+00', '2024-02-19 17:00:00+00', 'present'),
    
    -- Sarah Johnson (Employee) - Previous day
    ((SELECT id FROM users WHERE email = 'sarah.j@example.com'), 
     '2024-02-19 08:55:00+00', '2024-02-19 17:05:00+00', 'present'),
    
    -- Michael Brown (Student) - Previous day
    ((SELECT id FROM users WHERE email = 'michael.b@example.com'), 
     '2024-02-19 09:05:00+00', '2024-02-19 16:55:00+00', 'late'),
    
    -- Emily Davis (Student) - Previous day
    ((SELECT id FROM users WHERE email = 'emily.d@example.com'), 
     '2024-02-19 08:45:00+00', '2024-02-19 16:50:00+00', 'present'),
    
    -- David Wilson (Employee) - Previous day
    ((SELECT id FROM users WHERE email = 'david.w@example.com'), 
     '2024-02-19 00:00:00+00', NULL, 'absent'); 