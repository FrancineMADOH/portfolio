# Francine MADOH Portfolio Website

# API Endpoints

## Users 
- Create : '/api/user/create' [POST]
- Authenticate: '/api/user/login' [GET]

## Projects

- create[token] : '/api/projects/' [POST]
- update[token]: '/api/project/:id' [PATCH]
- delete[token]: '/api/projects/:id' [DELETE]
- index: '/api/projects/all' [GET]
- show: '/api/projects/:id' [GET]

## Messages 

- sendMessage: '/api/message' [POST]

## Test

- runtests: '/api/tests/' [GET]
