@echo off

:: Create a virtual environment
python -m venv venv

:: Activate the virtual environment
call venv\Scripts\activate.bat

:: Upgrade pip
pip install --upgrade pip

:: Install dependencies
pip install -r requirements.txt