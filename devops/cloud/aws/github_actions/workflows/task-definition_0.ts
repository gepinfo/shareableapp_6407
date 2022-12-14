module.exports = {
    requiresCompatibilities: [
        "FARGATE"
    ],
    "inferenceAccelerators": [],
    "containerDefinitions": [
        {
            "name": "gepitemtagsmanager-6407",
            "image": `${process.env.AWS_ACCOUNT_ID}.dkr.ecr.us-east-1.amazonaws.com/geppetto-generatedcode-shareableapp-6407-gepitemtagsmanager:latest`,
            "memoryReservation": "300",
            "resourceRequirements": null,
            "essential": true,
            "portMappings": [
                {
                    "containerPort": "8006",
                    "protocol": "tcp",
                    "hostPort": "8006"
                }
            ],
            "environmentFiles": null,
            "environment": [{"name":"MONGO_DB_URL","value":"mongodb://admin:password@shareableapp.local:27017/shareableapp_6407?authSource=admin"},{"name":"MONGO_DOMAIN","value":"shareableapp.local"},{"name":"CAMUNDAPOD_URL","value":"http://shareableapp.local:8080"},{"name":"SECURITYURL","value":"http://shareableapp.local:8003"},{"name":"AUTHPROXYURL","value":"http://shareableapp.local:8001"},{"name":"ADMINURL","value":"http://shareableapp.local:8004"},{"name":"CAMUNDAURL","value":"http://shareableapp.local:8002"},{"name":"GCAMURL","value":"http://shareableapp.local:8007"},{"name":"APIGATEWAY","value":"http://shareableapp.local:8000"}],
            "secrets": null,
            "mountPoints": [
                {
                  "readOnly": null,
                  "containerPath": "/path/to/container",
                  "sourceVolume": "shareableapp"
                }
              ],
            "volumesFrom": null,
            "hostname": null,
            "user": null,
            "workingDirectory": null,
            "extraHosts": null,
            "logConfiguration": {
                "logDriver": "awslogs",
                "options": {
                    "awslogs-group": "/ecs/shareableapp",
                    "awslogs-region": "us-east-1",
                    "awslogs-stream-prefix": "ecs",
                    "awslogs-create-group": "true"
                }
            },
            "ulimits": null,
            "dockerLabels": null,
            "dependsOn": null,
            "repositoryCredentials": {
                "credentialsParameter": ""
            }
        },          
        {
            "name": "gepphysicaladdressmanager-6407",
            "image": `${process.env.AWS_ACCOUNT_ID}.dkr.ecr.us-east-1.amazonaws.com/geppetto-generatedcode-shareableapp-6407-gepphysicaladdressmanager:latest`,
            "memoryReservation": "300",
            "resourceRequirements": null,
            "essential": true,
            "portMappings": [
                {
                    "containerPort": "0",
                    "protocol": "tcp",
                    "hostPort": "0"
                }
            ],
            "environmentFiles": null,
            "environment": [{"name":"MONGO_DB_URL","value":"mongodb://admin:password@shareableapp.local:27017/shareableapp_6407?authSource=admin"},{"name":"MONGO_DOMAIN","value":"shareableapp.local"},{"name":"CAMUNDAPOD_URL","value":"http://shareableapp.local:8080"},{"name":"SECURITYURL","value":"http://shareableapp.local:8003"},{"name":"AUTHPROXYURL","value":"http://shareableapp.local:8001"},{"name":"ADMINURL","value":"http://shareableapp.local:8004"},{"name":"CAMUNDAURL","value":"http://shareableapp.local:8002"},{"name":"GCAMURL","value":"http://shareableapp.local:8007"},{"name":"APIGATEWAY","value":"http://shareableapp.local:8000"}],
            "secrets": null,
            "mountPoints": [
                {
                  "readOnly": null,
                  "containerPath": "/path/to/container",
                  "sourceVolume": "shareableapp"
                }
              ],
            "volumesFrom": null,
            "hostname": null,
            "user": null,
            "workingDirectory": null,
            "extraHosts": null,
            "logConfiguration": {
                "logDriver": "awslogs",
                "options": {
                    "awslogs-group": "/ecs/shareableapp",
                    "awslogs-region": "us-east-1",
                    "awslogs-stream-prefix": "ecs",
                    "awslogs-create-group": "true"
                }
            },
            "ulimits": null,
            "dockerLabels": null,
            "dependsOn": null,
            "repositoryCredentials": {
                "credentialsParameter": ""
            }
        },          
        {
            "name": "newapp-6407",
            "image": `${process.env.AWS_ACCOUNT_ID}.dkr.ecr.us-east-1.amazonaws.com/geppetto-generatedcode-shareableapp-6407-newapp:latest`,
            "memoryReservation": "300",
            "resourceRequirements": null,
            "essential": true,
            "portMappings": [
                {
                    "containerPort": "8021",
                    "protocol": "tcp",
                    "hostPort": "8021"
                }
            ],
            "environmentFiles": null,
            "environment": [{"name":"MONGO_DB_URL","value":"mongodb://admin:password@shareableapp.local:27017/shareableapp_6407?authSource=admin"},{"name":"MONGO_DOMAIN","value":"shareableapp.local"},{"name":"CAMUNDAPOD_URL","value":"http://shareableapp.local:8080"},{"name":"SECURITYURL","value":"http://shareableapp.local:8003"},{"name":"AUTHPROXYURL","value":"http://shareableapp.local:8001"},{"name":"ADMINURL","value":"http://shareableapp.local:8004"},{"name":"CAMUNDAURL","value":"http://shareableapp.local:8002"},{"name":"GCAMURL","value":"http://shareableapp.local:8007"},{"name":"APIGATEWAY","value":"http://shareableapp.local:8000"}],
            "secrets": null,
            "mountPoints": [
                {
                  "readOnly": null,
                  "containerPath": "/path/to/container",
                  "sourceVolume": "shareableapp"
                }
              ],
            "volumesFrom": null,
            "hostname": null,
            "user": null,
            "workingDirectory": null,
            "extraHosts": null,
            "logConfiguration": {
                "logDriver": "awslogs",
                "options": {
                    "awslogs-group": "/ecs/shareableapp",
                    "awslogs-region": "us-east-1",
                    "awslogs-stream-prefix": "ecs",
                    "awslogs-create-group": "true"
                }
            },
            "ulimits": null,
            "dockerLabels": null,
            "dependsOn": null,
            "repositoryCredentials": {
                "credentialsParameter": ""
            }
        },          
        {
            "name": "testapp-6407",
            "image": `${process.env.AWS_ACCOUNT_ID}.dkr.ecr.us-east-1.amazonaws.com/geppetto-generatedcode-shareableapp-6407-testapp:latest`,
            "memoryReservation": "300",
            "resourceRequirements": null,
            "essential": true,
            "portMappings": [
                {
                    "containerPort": "8022",
                    "protocol": "tcp",
                    "hostPort": "8022"
                }
            ],
            "environmentFiles": null,
            "environment": [{"name":"MONGO_DB_URL","value":"mongodb://admin:password@shareableapp.local:27017/shareableapp_6407?authSource=admin"},{"name":"MONGO_DOMAIN","value":"shareableapp.local"},{"name":"CAMUNDAPOD_URL","value":"http://shareableapp.local:8080"},{"name":"SECURITYURL","value":"http://shareableapp.local:8003"},{"name":"AUTHPROXYURL","value":"http://shareableapp.local:8001"},{"name":"ADMINURL","value":"http://shareableapp.local:8004"},{"name":"CAMUNDAURL","value":"http://shareableapp.local:8002"},{"name":"GCAMURL","value":"http://shareableapp.local:8007"},{"name":"APIGATEWAY","value":"http://shareableapp.local:8000"}],
            "secrets": null,
            "mountPoints": [
                {
                  "readOnly": null,
                  "containerPath": "/path/to/container",
                  "sourceVolume": "shareableapp"
                }
              ],
            "volumesFrom": null,
            "hostname": null,
            "user": null,
            "workingDirectory": null,
            "extraHosts": null,
            "logConfiguration": {
                "logDriver": "awslogs",
                "options": {
                    "awslogs-group": "/ecs/shareableapp",
                    "awslogs-region": "us-east-1",
                    "awslogs-stream-prefix": "ecs",
                    "awslogs-create-group": "true"
                }
            },
            "ulimits": null,
            "dockerLabels": null,
            "dependsOn": null,
            "repositoryCredentials": {
                "credentialsParameter": ""
            }
        },          
    ],
    "volumes": [
        {
        "fsxWindowsFileServerVolumeConfiguration": null,
        "efsVolumeConfiguration": {
            "transitEncryptionPort": null,
            "fileSystemId": `${process.env.EFS_ID}`,
            "authorizationConfig": {
            "iam": "DISABLED",
            "accessPointId": null
            },
            "transitEncryption": "DISABLED",
            "rootDirectory": "/"
        },
        "name": "shareableapp",
        "host": null,
        "dockerVolumeConfiguration": null
        }
    ],
    "networkMode": "awsvpc",
    "memory": "4096",
    "cpu": "1024",
    "executionRoleArn": `arn:aws:iam::${process.env.AWS_ACCOUNT_ID}:role/${process.env.AWS_ROLE_FOR_FARGATE}`,
    "family": "shareableapp0",
    "tags": [],
    "placementConstraints": [],
    "taskRoleArn": `arn:aws:iam::${process.env.AWS_ACCOUNT_ID}:role/${process.env.AWS_ROLE_FOR_FARGATE}`

};
var ConfigurationJSON = JSON.stringify(module.exports);
const config = module.exports;

const jsonConfig = JSON.parse(JSON.stringify(ConfigurationJSON))

console.log(jsonConfig)
