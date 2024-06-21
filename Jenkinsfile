pipeline {
    agent {
        docker {
            image 'igorgutkowski/nodejsagent:latest'
            args '-v /var/run/docker.sock:/var/run/docker.sock' 
        }
    }
    environment {
        HOME = '.'
    }
    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }
        stage('Install dependencies') {
            steps {
                sh 'npm install'
            }
        }
        stage('Run tests') {
            steps {
                sh 'npm test'
            }
        }
        stage('Lint') {
            steps {
                sh 'npx eslint .'
            }
        }
    }
    post {
        always {
            sh 'echo "Cleanup and post-process actions here"'
        }
    }
}
