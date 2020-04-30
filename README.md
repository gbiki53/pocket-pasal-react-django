# Introduction

Pocket pasal is a simple fullstack e-commerce app developed using django and react.

## Requirement

- Python 3
- Node Package Manager (npm)

## Installation

### Setup Django server

At the base directory of the project open command prompt and then enter the following command

```bash
pip install pipenv
pipenv shell
pipenv install (Installs required library)
cd pocketpasal
python manage.py makemigrations
python manage.py migrate
python manage.py runserver
```

### Setup React

Open another command prompt on the base directory

```bash
pipenv shell
npm install
npm run dev
```
