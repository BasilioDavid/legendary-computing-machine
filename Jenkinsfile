pipeline {
  agent { label 'linux' }
  options {
    buildDiscarder(logRotator(numToKeepStr: '5'))
  }
  stages {
    stage('Scan') {
      steps {
        withSonarQubeEnv(installationName: 'eoa') { 
					sh '${scannerHome}/bin/sonar-scanner'
        }
      }
    }
  }
}
