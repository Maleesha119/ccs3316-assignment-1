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


1. Architecture Overview
This project deploys a containerized Node.js application to AWS using Terraform and GitHub Actions. The application is packaged using Docker and pushed to Amazon ECR. Terraform provisions AWS resources such as ECS, task definitions, and networking components. GitHub Actions is used as the CI/CD pipeline, automatically triggering on code push. The pipeline builds the Docker image, tags it, and prepares it for deployment. ECS runs the containerized application as a managed service. This architecture follows Infrastructure as Code principles and supports automated deployments.

2. CI/CD Pipeline Explanation
GitHub Actions is used to implement the CI/CD pipeline for this project. The pipeline is triggered automatically on pushes to the main branch. It runs on an Ubuntu environment and checks out the repository code. The workflow verifies that the CI pipeline executes successfully. This ensures that every code change is validated through an automated process. GitHub Actions removes the need for manual builds and provides continuous integration. The workflow confirms that the repository is correctly structured and ready for deployment.

3. How to Test the Application
The application was tested after deployment using the public IP address assigned to the ECS task. The ECS service was verified to be running with active tasks through the AWS console. The public IPv4 address was accessed via a web browser to confirm the application response. The application successfully returned content, confirming that the container was running correctly. Additional verification was done using curl commands. Screenshots of the browser output and ECS service status are included as deployment evidence.

Public IP : 13.233.178.207
URL: http://13.233.178.207:8080/



Trigger GitHub Actions
