# 

This SDK provides a convenient interface for deploying and managing YOLOvX models. It includes methods for listing available models and deploying new models.

## Installation

To use this SDK, first ensure you have Python installed on your system. Then, you can install it via pip:

```bash
pip install yolovx-sdk
```

## Usage

First, set your API key as an environment variable:

```python
import os

os.environ["API_KEY"] = "your_api_key_here"
```

Next, import the `YOLOvX_sdk` class from the SDK:

```python
from sdk.YOLOvX import YOLOvX_sdk
```

Create an instance of the `YOLOvX_sdk` class:

```python
vx = YOLOvX_sdk()
```

### Listing Models Names

You can list used model names using the `list_model_names` method:

```python
vx.list_model_names()
```

### Deploying a Model

To deploy a new model, use the `deploy_model` method:

```python
vx.deploy_model("model_name", "/path/to/your/model")
```

Replace `"model_name"` with the desired name for your model and `"/path/to/your/model"` with the path to your YOLOvX model file.

### Supported Models are in YOLOvX App

| Format           | Supported  |
|------------------|------------|
| YOLOv9           | ✅        |
| YOLOv8           | ✅        |                               
| YOLOv5           | ✅        |
| YOLOv3           | ✅        |                         

## Example

```python
import os
from sdk.YOLOvX import YOLOvX_sdk

# Set your API key
os.environ["API_KEY"] = "your_api_key_here"

# Create an instance of YOLOvX_sdk
vx = YOLOvX_sdk()

# List available models
vx.list_model_names()

# Deploy a new model
vx.deploy_model("model_name", "/path/to/your.pt")
```

