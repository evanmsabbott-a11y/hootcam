#!/bin/bash
# Script to activate virtual environment and run Flask app

# Navigate to the project directory
cd $(dirname "$0")

# Activate virtual environment
source venv/bin/activate

# Run Flask app
flask run