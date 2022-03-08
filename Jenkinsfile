pipeline {
	agent { label 'linux' }
	options {
		buildDiscarder(logRotator(numToKeepStr: '5'))
	}
	stages {
		stage("scan") {
			withSonarQubeEnv(installationName: 'eoa') {
				sh "./sonar-scanner"	
			}
		}
	}
}
