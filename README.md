# Terraform
.terraform/
*.tfstate
*.tfstate.backup
terraform.tfvars

# Node
node_modules/

# OS
.DS_Store
Thumbs.db


1. Architecture Overview:
This project uses a containerized Node.js application deployed on AWS using Docker and Terraform. 
The application source code is located in the app folder and is packaged into a Docker image using a Dockerfile. 
Terraform is used to define and manage AWS infrastructure such as ECS, ECR, and networking resources. 
GitHub Actions is used to automate the CI/CD process whenever code is pushed to the main branch. 
The Docker image is built and stored in Amazon ECR and then deployed to an ECS service. 
The application runs as a container and is accessible through a public IP or load balancer endpoint.

2. CI/CD Pipeline Explanation:
This project uses GitHub Actions to implement a simple CI/CD pipeline. 
Whenever code is pushed to the main branch, the GitHub Actions workflow is triggered automatically. 
The workflow checks out the latest source code from the repository. 
It then runs on an Ubuntu-based GitHub runner. 
The pipeline verifies that the project can be built successfully. 
If all steps execute without errors, the workflow completes successfully. 
This ensures that every change pushed to the repository is automatically validated.


3. How to Test the Application:
After a successful GitHub Actions workflow run, the application build is verified by the CI/CD pipeline. 
The workflow confirms that the code can be checked out and executed without errors. 
At this stage, the application does not expose a public URL or IP address. 
The successful completion of the GitHub Actions workflow indicates that the application is functioning as expected.


Public IP : 13.233.178.207
URL: http://13.233.178.207:8080/



Trigger GitHub Actions
