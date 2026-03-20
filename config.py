# Configuration settings for Flask, Video Processing, and ML Models

class Config:
    # Flask settings
    SECRET_KEY = 'your_secret_key'
    DEBUG = True

    # Video Processing settings
    VIDEO_INPUT_PATH = '/path/to/video/input'
    VIDEO_OUTPUT_PATH = '/path/to/video/output'
    FRAME_RATE = 30
    RESOLUTION = (1920, 1080)  # Width, Height

    # ML Models settings
    MODEL_PATH = '/path/to/model'
    BATCH_SIZE = 32
    EPOCHS = 10
    LEARNING_RATE = 0.001

