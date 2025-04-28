CREATE TABLE projects(
    id SERIAL PRIMARY KEY, 
    title VARCHAR(255),
    description TEXT,
    technologies TEXT,
    lien  VARCHAR(255) ,
    createAt TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    createdBy INT NOT NULL,

    FOREIGN KEY(createdBy) REFERENCES users(id) ON DELETE CASCADE
)