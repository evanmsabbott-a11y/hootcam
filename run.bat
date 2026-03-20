@echo off
:: Activate the virtual environment
call venv\Scripts\activate.bat

:: Run the Flask app
set FLASK_APP=app.py
flask run